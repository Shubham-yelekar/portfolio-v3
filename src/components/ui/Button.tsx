import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import cn from "@/app/lib/cn";

const buttonVariants = cva(
  "relative flex cursor-pointer items-center justify-center rounded-full transition-all  gap-2 text-sm font-medium hover:opacity-90 duration-300 hover:shadow-[--card-shadow-2] ease-in-out group",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-t from-neutral-800 to-neutral-600 text-white shadow-xs",
        secondary:
          "bg-gradient-to-t from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800 dark:border-neutral-700 border border-neutral-200 text-primary-foreground shadow-sm hover:shadow-lg hover:bg-primary/90",
        tertiary:
          "bg-gradient-to-t from-neutral-700 to-neutral-800 border text-neutral-200 border-neutral-600 dark:from-neutral-200 dark:to-neutral-300 dark:text-neutral-800 font-medium",
      },
      size: {
        default: "py-1 px-3",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export default Button;
