import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@radix-ui/react-toast";
import { LanguageProvider } from "@/context/LanguageContext";


export const metadata: Metadata = {
  title: "Mariosa Tech",
  description: "Developed by Mariosa Tech",
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
          <ToastProvider>
            {children}
          </ToastProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
