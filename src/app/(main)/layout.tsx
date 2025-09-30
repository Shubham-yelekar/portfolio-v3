import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="overflow-x-hidden">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
