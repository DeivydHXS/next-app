import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/header";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qulture Clone",
  description: "Projeto de testes com Next",
};

export default function CompanyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
