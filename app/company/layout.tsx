import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "../globals.css";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/shared/sidebar/app-sidebar";
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
        <SidebarProvider>
          <AppSidebar />

          <SidebarInset>
            <Header />
            <main>
              <div className="w-full flex justify-center">
                <div className="w-[90%] my-8">
                  {children}
                </div>
              </div>
            </main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
