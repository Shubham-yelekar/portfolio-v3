import Header from "@/components/sections/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      {/* <Header /> */}
      <div className="flex-1">{children}</div>
    </main>
  );
}
