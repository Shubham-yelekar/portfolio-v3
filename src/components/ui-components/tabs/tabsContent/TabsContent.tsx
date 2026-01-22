"use client";
import React from "react";
import { useTabsContext } from "../TabContext";
import { motion, AnimatePresence } from "motion/react";
type TabsContentProps = {
  value: string;
  children: React.ReactNode;
  className?: string;
};

export function TabsContent({ value, children, className }: TabsContentProps) {
  const { value: activeValue } = useTabsContext();

  if (value !== activeValue) return null;
  const isActive = value === activeValue;

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          role="tabpanel"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`text-paragraph mt-1 rounded-xl border border-neutral-300 bg-neutral-200 p-3 dark:border-neutral-700/20 dark:bg-neutral-800${className ?? ""}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
