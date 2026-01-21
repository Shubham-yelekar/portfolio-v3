"use client";
import React from "react";

type TabsListProps = {
  className?: string;
  children: React.ReactNode;
};

export function TabsList({ className, children }: TabsListProps) {
  return (
    <div
      role="tablist"
      className={`flex rounded-xl border border-neutral-300 bg-neutral-200 p-1 dark:border-neutral-700/20 dark:bg-neutral-800 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
