// app/providers.tsx

"use client";

import { ThemeProvider } from "next-themes";
import { ViewTransitions } from "next-view-transitions";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </ViewTransitions>
  );
}
