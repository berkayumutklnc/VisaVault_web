// Root layout — passthrough to [locale]/layout.tsx which handles <html> and <body>.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
