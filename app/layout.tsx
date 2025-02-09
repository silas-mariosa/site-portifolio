import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@radix-ui/react-toast";
import { LanguageProvider } from "@/context/LanguageContext";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Whatsapp from "@/components/whatsapp";
import { GoogleTagManager } from "@next/third-parties/google";
import { Toaster } from "@/components/ui/toaster";


export const metadata: Metadata = {
  title: "Mariosa Tech - Fulll Stack Developer",
  description: "Developing solutions for your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="scroll-smooth">
        <LanguageProvider>
          <Header />
          {children}
          <Whatsapp />
          <Footer />
          <Toaster />
          <GoogleTagManager gtmId="GTM-P596LZBC" />
        </LanguageProvider>
      </body>
    </html>
  );
}
