import type { Metadata } from "next";
import { generalSans, libreSerif } from "../../public/fonts/index";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import ThemeSwitchProvider from "@/app/providers/Providers";
import Footer from "@/components/sections/Footer";
import Providers from "@/app/providers/Providers";

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
    <html lang="en" className="relative" suppressHydrationWarning>
      <body
        className={`${generalSans.variable} ${libreSerif.variable} bg-background relative flex min-h-screen flex-col justify-between antialiased`}
      >
        <ThemeSwitchProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeSwitchProvider>
      </body>
    </html>
  );
}
