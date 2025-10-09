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

          {/* Radial Gradient Background from Top */}
          <div
            className="absolute inset-x-0 bottom-0 -z-2 h-[80dvh] opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(100% 100%  at 50% 10%, var(--background) 50%, var(--color-blue-500)  75% , var(--color-orange-500)  100%",
            }}
          />
        </ThemeSwitchProvider>
      </body>
    </html>
  );
}
