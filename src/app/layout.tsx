import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ButterflyCursor from "@/components/ButterflyCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tulasi Sugandhi | Software Engineer & Frontend Developer",
  description: "Portfolio of Tulasi Sugandhi, Software Engineer and Frontend Developer specializing in React.js, Next.js, Java, Spring Boot and scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans">
        <ButterflyCursor />
        {children}
      </body>
    </html>
  );
}
