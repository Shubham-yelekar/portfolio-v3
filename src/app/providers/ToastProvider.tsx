"use client";
import { useState, createContext, useContext, ReactNode } from "react";
import ToastNotification from "@/components/ui-components/ToastNotification";
import cn from "../lib/cn";
import { AnimatePresence } from "motion/react";

export interface toastTypes {
  id: number;
  type: "warning" | "success" | "error" | "neutral";
  title: string;
  message?: string;
}

export type ToastPosition =
  | "top-right"
  | "top-left"
  | "top-center"
  | "bottom-right"
  | "bottom-left"
  | "bottom-center";

type ToastContextType = {
  showToast: (
    title: string,
    type: toastTypes["type"],
    message?: string,
  ) => void;
} | null;

const ToastContext = createContext<ToastContextType>(null);

type ToastProviderProps = {
  children: ReactNode;
  position?: ToastPosition;
  duration?: number;
};

const positionStyles: { [key in ToastPosition]: string } = {
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
};

const ToastProvider = ({
  children,
  position = "top-right",
  duration = 5000,
}: ToastProviderProps) => {
  const [toasts, setToast] = useState<toastTypes[]>([]);

  const showToast = (
    title: string,
    type: toastTypes["type"],
    message?: string,
  ) => {
    const newToast: toastTypes = {
      id: Date.now(),
      type,
      title,
      message,
    };
    setToast((prev) => [newToast, ...prev]);
  };

  const removeToast = (id: number) => {
    setToast((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        className={cn(
          "fixed z-999 flex flex-col gap-2",
          positionStyles[position],
        )}
      >
        <AnimatePresence>
          {toasts.map((toast) => (
            <ToastNotification
              key={toast.id}
              id={toast.id}
              title={toast.title}
              type={toast.type}
              onDismiss={removeToast}
              message={toast.message}
              duration={duration}
              position={position}
            />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export { useToast, ToastProvider };
