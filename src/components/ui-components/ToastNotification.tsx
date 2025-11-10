"use client";
import {
  FaSkull,
  FaCircleInfo,
  FaCircleRadiation,
  FaChampagneGlasses,
  FaXmark,
} from "react-icons/fa6";
import cn from "@/app/lib/cn";

interface toastTypes {
  id: number;
  type: "warning" | "success" | "error" | "neutral";
  title: string;
  message?: string;
}

interface ToastNotificationProps extends toastTypes {
  onDismiss: (id: number) => void;
}

const toastConfig = {
  success: {
    icon: FaChampagneGlasses,
    className: "text-green-300 bg-green-700 ",
  },
  error: {
    icon: FaSkull,
    className: "text-red-100 bg-red-600",
  },
  warning: {
    icon: FaCircleRadiation,
    className: "text-neutral-900 bg-yellow-400",
  },
  neutral: {
    icon: FaCircleInfo,
    className: "text-blue-50 bg-blue-500",
  },
};

const ToastNotification = ({
  id,
  type,
  title,
  onDismiss,
  message,
}: ToastNotificationProps) => {
  const { icon: Icon, className } = toastConfig[type];
  return (
    <div className="relative max-w-80 min-w-80 rounded-xl border border-neutral-300 bg-neutral-100 p-1 dark:border-neutral-700 dark:bg-neutral-800">
      <div
        className={cn(
          "group flex items-start justify-between gap-4 p-1 transition-all ease-in-out",
        )}
      >
        <div className="flex items-start gap-4">
          <div className={cn("rounded-lg p-1", className)}>
            <Icon width={16} />
          </div>
          <div className="flex flex-col gap-1">
            <h6>{title}</h6>
            {message && <p className="w-full text-sm text-wrap">{message}</p>}
          </div>
        </div>
        <button
          className="trailing-spaces p-1 opacity-0 ease-in-out group-hover:opacity-90"
          onClick={() => onDismiss(id)}
        >
          <FaXmark />
        </button>
      </div>
    </div>
  );
};

export default ToastNotification;
