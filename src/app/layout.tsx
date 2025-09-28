import type { Metadata } from "next";
import { generalSans, libreSerif } from "../../public/fonts/index";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

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
    <html lang="en" className="bg-neutral-200">
      <body
        className={`${generalSans.variable} ${libreSerif.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
