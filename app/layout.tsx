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
  title: "aga-pay — AI-Powered HR & Payroll for Modern Indian Businesses",
  description:
    "AI-native HR and payroll for Indian businesses. Automate operations, simplify statutory payroll, and stay in control with human approval workflows.",
  openGraph: {
    title: "aga-pay — AI-Powered HR & Payroll for Modern Indian Businesses",
    description:
      "Automate HR operations, simplify payroll, and let AI handle repetitive work — while you stay in control.",
    type: "website",
    siteName: "aga-pay",
  },
  twitter: {
    card: "summary_large_image",
    title: "aga-pay — AI-Powered HR & Payroll for Modern Indian Businesses",
    description:
      "AI-native HR and payroll platform built for Indian statutory compliance and human-approved workflows.",
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
