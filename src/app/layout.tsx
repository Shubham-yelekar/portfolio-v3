import type { Metadata } from "next";
import { generalSans, libreSerif } from "../../public/fonts/index";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import ThemeSwitchProvider from "@/app/providers/Providers";
import Footer from "@/components/sections/Footer";
import Providers from "@/app/providers/Providers";
import { GoogleTagManager } from "@next/third-parties/google";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Shubham Yelekar | Front End Developer",
  description:
    "Hey, I’m Shubham Yelekar, a Front-end engineer who enjoys designing and coding.",

  // 2. Open Graph (og:) Metadata (For Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Shubham Yelekar | Front End Developer", // Equivalent to <meta property="og:title">
    description:
      "Hey, I’m Shubham Yelekar, a Front-end engineer who enjoys designing and coding.", // Equivalent to <meta property="og:description">
    url: "https://shubhamyelekar.vercel.app/", // Equivalent to <meta property="og:url">
    type: "website", // Equivalent to <meta property="og:type">
    images: [
      {
        url: "https://ucarecdn.com/961683ce-ba5f-4a9d-809b-76a5fb34964f/-/preview/450x300/", // Equivalent to <meta property="og:image">
        // You can optionally add width and height here if known
      },
    ],
  },

  // 3. Twitter Metadata (For Twitter/X sharing cards)
  twitter: {
    card: "summary_large_image", // Equivalent to <meta name="twitter:card">
    title: "Shubham Yelekar | Front End Developer", // Equivalent to <meta name="twitter:title">
    description:
      "Hey, I’m Shubham Yelekar, a Front-end engineer who enjoys designing and coding.", // Equivalent to <meta name="twitter:description">
    images: [
      "https://ucarecdn.com/961683ce-ba5f-4a9d-809b-76a5fb34964f/-/preview/450x300/", // Equivalent to <meta name="twitter:image">
    ],
  },

  // 4. Icons (Equivalent to <link rel="icon">)
  // icons: {
  //   icon: "/favicon.ico", // Update path if 'public' is implied or you need a relative path
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <GoogleTagManager gtmId="G-XDTVH3FXKT" />
      <body
        className={`${generalSans.variable} ${libreSerif.variable} bg-background relative flex min-h-screen w-screen flex-col justify-between antialiased`}
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
