"use client"
import React from "react";
import { useTabsContext } from "../TabContext";

type TabsContentProps = {
  value: string;
  children: React.ReactNode;
  className?: string;
};

export function TabsContent({ value, children, className }: TabsContentProps) {
  const { value: activeValue } = useTabsContext();

  if (value !== activeValue) return null;

  return (
    <div
      role="tabpanel"
      className={`mt-3 rounded-lg bg-white p-4 text-zinc-900 shadow dark:bg-zinc-900 dark:text-zinc-100 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
