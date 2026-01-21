"use client";
import React from "react";
import { useTabsContext } from "../TabContext";

type TabsTriggerProps = {
  value: string;
  children: React.ReactNode;
};

export function TabsTrigger({ value, children }: TabsTriggerProps) {
  const { value: activeValue, setValue } = useTabsContext();
  const isActive = activeValue === value;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={() => setValue(value)}
      className={`relative flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition ${
        isActive
          ? "bg-white text-zinc-900 shadow dark:bg-zinc-700 dark:text-white"
          : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      } `}
    >
      {children}
    </button>
  );
}
