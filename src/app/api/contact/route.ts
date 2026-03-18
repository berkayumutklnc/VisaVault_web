import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/resend";

// Simple in-memory rate limit: max 5 submissions per IP per 15 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count++;
  return true;
}

type ContactBody = {
  name: string;
  company: string;
  email: string;
  role?: string;
  caseVolume?: string;
  message?: string;
  formType: "demo" | "pilot";
  _honeypot?: string;
};

function sanitize(str: string | undefined): string {
  if (!str) return "";
  return str.replace(/[<>]/g, "").trim().slice(0, 1000);
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Çok fazla istek gönderildi. Lütfen bir süre bekleyin." },
        { status: 429 }
      );
    }

    const body: ContactBody = await req.json();

    // Honeypot check
    if (body._honeypot) {
      // Silent success to not reveal the honeypot
      return NextResponse.json({ success: true });
    }

    // Validation
    const name = sanitize(body.name);
    const company = sanitize(body.company);
    const email = sanitize(body.email);
    const role = sanitize(body.role);
    const caseVolume = sanitize(body.caseVolume);
    const message = sanitize(body.message);
    const formType = body.formType === "pilot" ? "pilot" : "demo";

    if (!name || !company || !email) {
      return NextResponse.json(
        { error: "Ad, şirket ve e-posta alanları zorunludur." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Geçersiz e-posta adresi." },
        { status: 400 }
      );
    }

    const toEmail =
      process.env.CONTACT_TO_EMAIL || "info@visavaultai.com";

    const formLabel = formType === "pilot" ? "Pilot Başvurusu" : "Demo Talebi";

    const html = `
      <h2>Yeni ${formLabel} — VisaVault AI</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Ad Soyad</td><td style="padding:8px;border-bottom:1px solid #eee;">${name}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Şirket</td><td style="padding:8px;border-bottom:1px solid #eee;">${company}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">E-posta</td><td style="padding:8px;border-bottom:1px solid #eee;">${email}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Rol</td><td style="padding:8px;border-bottom:1px solid #eee;">${role || "—"}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Dosya Hacmi</td><td style="padding:8px;border-bottom:1px solid #eee;">${caseVolume || "—"}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Not</td><td style="padding:8px;border-bottom:1px solid #eee;">${message || "—"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Form Tipi</td><td style="padding:8px;">${formLabel}</td></tr>
      </table>
    `;

    await sendEmail({
      to: toEmail,
      subject: `[VisaVault AI] Yeni ${formLabel}: ${name} — ${company}`,
      html,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Contact API]", error);
    return NextResponse.json(
      { error: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin." },
      { status: 500 }
    );
  }
}
