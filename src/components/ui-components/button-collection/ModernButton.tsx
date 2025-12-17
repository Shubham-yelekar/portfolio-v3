import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import cn from "@/app/lib/cn";

// VARIANTS
// color , dark mode , hover , focus states
const buttonVariants = {
  primary: "text-neutral-100 bg-brand hover:bg-brand-hover ",
  secondary:
    "text-neutral-700 bg-neutral-100 hover:bg-neutral-200 dark:text-neutral-200 dark:bg-neutral-700 hover:dark:bg-neutral-800",
  outline:
    "text-neutral-700 border border-neutral-400 bg-neutral-200 hover:bg-neutral-200",
} as const;

//SIZES
const buttonSizes = {
  lg: "px-2 py-2 text-sm",
  md: "px-1 py-1 text-xs",
} as const;

// TYPES
type ButtonProps = {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  className?: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ModernButton = ({
  variant = "primary",
  size = "lg",
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center rounded-lg whitespace-nowrap shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_2px_4px_rgba(0,0,0,0.15)] transition-colors duration-300 ease-out",
        buttonSizes[size],
        buttonVariants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default ModernButton;
