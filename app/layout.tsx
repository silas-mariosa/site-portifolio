import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Whatsapp from "@/components/whatsapp";
import { GoogleTagManager } from "@next/third-parties/google";
import { Toaster } from "@/components/ui/toaster";


export const metadata: Metadata = {
  title: "Mariosa Tech - Fulll Stack Developer",
  description: "Developing solutions for your business",
  openGraph: {
    title: "Mariosa Tech - Full Stack Developer",
    description: "Developing solutions for your business",
    url: "https://www.mariosatech.com.br", // Adicione a URL do seu site
    images: [
      {
        url: "https://www.mariosatech.com.br/_next/image?url=%2FMariosaLogoHorizontal.png&w=1920&q=75", // Caminho da sua logo
        width: 200,
        height: 80,
        alt: "Mariosa Tech Logo",
      },
    ],
    siteName: "Mariosa Tech",
  },
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
          <GoogleTagManager gtmId="G-LKHHD7X6N2" />
        </LanguageProvider>
      </body>
    </html>
  );
}
