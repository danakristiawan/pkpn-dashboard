import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dashboard PKPN — Subdit PKPN DJKN",
  description:
    "Dashboard monitoring piutang negara Subdit PKPN, DJKN Kemenkeu RI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
