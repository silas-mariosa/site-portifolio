import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@radix-ui/react-toast";


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
    <html>
      <body>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
