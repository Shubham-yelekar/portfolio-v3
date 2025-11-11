"use client";
import {
  FaSkull,
  FaCircleInfo,
  FaCircleRadiation,
  FaChampagneGlasses,
  FaXmark,
} from "react-icons/fa6";
import cn from "@/app/lib/cn";
import { motion } from "motion/react";
import { ToastPosition } from "@/app/providers/ToastProvider";
import { useEffect, useRef } from "react";

interface toastTypes {
  id: number;
  type: "warning" | "success" | "error" | "neutral";
  title: string;
  message?: string;
}

interface ToastNotificationProps extends toastTypes {
  onDismiss: (id: number) => void;
  duration: number;
  position: ToastPosition;
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
const toastAnimation = {
  "top-left": { opacity: 0, y: 0, x: -50, filter: "blur(10px)" },
  "top-center": { opacity: 0, y: -50, x: 0 },
  "top-right": { opacity: 0, y: 0, x: 50 },
  "bottom-left": { opacity: 0, y: 0, x: -50 },
  "bottom-center": { opacity: 0, y: 50, x: 0 },
  "bottom-right": { opacity: 0, y: 0, x: 50 },
};

const ToastNotification = ({
  id,
  type,
  title,
  onDismiss,
  message,
  duration,
  position,
}: ToastNotificationProps) => {
  const { icon: Icon, className } = toastConfig[type];

  const timerId = useRef<NodeJS.Timeout | null>(null);
  const remainingTime = useRef(duration);
  const timerStarted = useRef(Date.now());

  const pauseTimer = () => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }
    const elapsed = Date.now() - timerStarted.current;
    remainingTime.current = remainingTime.current - elapsed;
  };

  const resumeTimer = () => {
    timerStarted.current = Date.now();

    timerId.current = setTimeout(() => {
      onDismiss(id);
    }, remainingTime.current);
  };

  // 3. START THE TIMER ON MOUNT
  useEffect(() => {
    resumeTimer();
    return () => {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    };
  }, []);

  return (
    <motion.div
      layout
      initial={toastAnimation[position]}
      animate={{ opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" }}
      role="alert"
      exit={{
        opacity: 0,
        scale: 0.5,
        transition: { duration: 0.2 },
        filter: "blur(20px)",
      }}
      transition={{
        type: "tween",
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1],
      }}
      onMouseEnter={pauseTimer}
      onMouseLeave={resumeTimer}
      className="toast-notification relative max-w-80 min-w-80 overflow-hidden rounded-xl border border-neutral-300 bg-neutral-100 p-1 dark:border-neutral-700 dark:bg-neutral-800"
    >
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
      <div
        className="timer-bar absolute bottom-0 left-0 h-0.5 bg-neutral-400/50"
        style={{
          animationDuration: `${duration}ms`,
        }}
      ></div>
    </motion.div>
  );
};

export default ToastNotification;
