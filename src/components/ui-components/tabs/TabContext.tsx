"use client";
import React from "react";

type TabsContextType = {
  value: string;
  setValue: (value: string) => void;
};

export const TabsContext = React.createContext<TabsContextType | null>(null);

export function useTabsContext() {
  const ctx = React.useContext(TabsContext);
  if (!ctx) {
    throw new Error("Tabs components must be used inside <Tabs>");
  }
  return ctx;
}
