import type { Metadata } from "next";
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
  title: "Devora Studio | Desenvolvimento de Softwares",
  description: "Desenvolvimento de softwares sem enrolação. Código limpo, entrega rápida e comunicação clara. Transforme sua ideia em realidade digital.",
  keywords: ["desenvolvimento web", "software", "landing page", "next.js", "react", "typescript", " Belo Horizonte"],
  authors: [{ name: "Devora Studio" }],
  openGraph: {
    title: "Devora Studio | Desenvolvimento de Softwares",
    description: "Desenvolvimento de softwares sem enrolação. Código limpo, entrega rápida e comunicação clara.",
    type: "website",
    locale: "pt_BR",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden bg-[#030307]`}
      >
        {children}
      </body>
    </html>
  );
}
