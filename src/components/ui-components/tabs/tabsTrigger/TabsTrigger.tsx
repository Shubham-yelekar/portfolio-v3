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
      className={`relative flex-1 cursor-pointer rounded-lg px-3 py-1.5 text-sm font-medium transition duration-200 ease-in-out ${
        isActive
          ? "bg-white font-semibold text-neutral-900 shadow dark:bg-neutral-700 dark:text-white"
          : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
      } `}
    >
      {children}
    </button>
  );
}
