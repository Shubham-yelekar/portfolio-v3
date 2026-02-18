"use client";
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
      className={`text-paragraph mt-1 rounded-xl border border-neutral-300 bg-neutral-200 p-3 dark:border-neutral-700/20 dark:bg-neutral-800${className ?? ""}`}
    >
      {children}
    </div>
  );
}
