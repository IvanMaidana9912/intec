import type { Metadata } from "next";
import type { ReactElement, ReactNode } from "react";
import FloatingWhatsApp from "@/components/layout/floating-whatsapp";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "INTEC | Ingeniería conectada",
  description:
    "Integramos tecnología, automatización y energía para crear edificios e instalaciones más inteligentes y eficientes.",
};

interface RootLayoutProps {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): ReactElement {
  return (
    <html
      lang="es-419"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
};