import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aga-pay.com"),
  title: "aga-pay — Payroll & HR made simple",
  description:
    "Manage employees, payroll, attendance and more from one simple platform. Built for growing businesses.",
  openGraph: {
    title: "aga-pay — Payroll & HR made simple",
    description:
      "Manage employees, payroll, attendance and more from one simple platform.",
    type: "website",
    siteName: "aga-pay",
  },
  twitter: {
    card: "summary_large_image",
    title: "aga-pay — Payroll & HR made simple",
    description:
      "Manage employees, payroll, attendance and more from one simple platform.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
