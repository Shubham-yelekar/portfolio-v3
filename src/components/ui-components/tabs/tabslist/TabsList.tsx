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
      className={`flex rounded-lg bg-zinc-100 p-1 dark:bg-zinc-800 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
