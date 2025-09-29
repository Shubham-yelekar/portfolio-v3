import type { Metadata } from "next";
import { generalSans, libreSerif } from "../../public/fonts/index";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Portfolio v3",
  description: "In Progress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className="relative">
        <body
          className={`${generalSans.variable} ${libreSerif.variable} min-h-screen antialiased`}
        >
          <Navbar />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
