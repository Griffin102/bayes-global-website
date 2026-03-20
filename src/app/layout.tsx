import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Bayes Global | Pure-play Fieldwork in Emerging Markets",
  description: "Specialized qualitative fieldwork, recruitment, and data collection in LatAm, APAC, Middle East, and Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-gray-50 text-slate-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}
