import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type BaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg" | "sm";
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants = {
  primary:
    "bg-brand-accent text-brand-bg hover:bg-brand-accent-hover font-semibold shadow-[0_0_24px_rgba(46,230,166,0.2)] hover:shadow-[0_0_32px_rgba(46,230,166,0.35)]",
  secondary:
    "bg-brand-surface border border-brand-accent/40 text-brand-accent hover:bg-brand-accent/10 hover:border-brand-accent/60 font-semibold",
  ghost:
    "bg-transparent text-brand-muted hover:text-brand-text font-medium",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm rounded-lg",
  default: "px-7 py-3.5 text-base rounded-xl",
  lg: "px-9 py-4 text-lg rounded-xl",
};

export function Button({
  variant = "primary",
  size = "default",
  children,
  ...props
}: ButtonProps) {
  const className = `inline-flex items-center justify-center transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${(props as Record<string, unknown>).className ?? ""}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
