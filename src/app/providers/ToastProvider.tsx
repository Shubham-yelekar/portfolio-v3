"use client";
import { useState, createContext, useContext, ReactNode } from "react";
import ToastNotification from "@/components/ui-components/ToastNotification";
import { projectHmrEvents } from "next/dist/build/swc/generated-native";

export interface toastTypes {
  id: number;
  type: "warning" | "success" | "error" | "neutral";
  title: string;
  message?: string;
}

type ToastContextType = {
  showToast: (
    title: string,
    type: toastTypes["type"],
    message?: string,
  ) => void;
} | null;

const ToastContext = createContext<ToastContextType>(null);

const ToastProvider = ({ children }: { children: ReactNode }) => {
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
    setToast((prev) => [...prev, newToast]);
  };

  const removeToast = (id: number) => {
    setToast((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* This part renders the list of toasts in the top-right corner */}
      <div className="fixed top-4 right-4 z-999 flex flex-col gap-2">
        {toasts.map((toast) => (
          <ToastNotification
            key={toast.id}
            id={toast.id}
            title={toast.title}
            type={toast.type}
            onDismiss={removeToast} // Pass the remove function here
            message={toast.message}
          />
        ))}
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
