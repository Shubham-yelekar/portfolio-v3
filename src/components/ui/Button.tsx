import cn from "@/app/lib/cn";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "relative flex cursor-pointer  items-center justify-center  rounded-full transition-all  gap-2 text-sm font-medium hover:opacity-90 duration-150 hover:shadow-[--card-shadow-2] ease-in-out group active:scale-[0.97]",
  {
    variants: {
      variant: {
        primary: "text-neutral-900 bg-white hover:bg-neutral-100",
        secondary:
          "text-neutral-700 bg-neutral-100 hover:bg-neutral-200 dark:text-neutral-200 dark:bg-neutral-700 hover:dark:bg-neutral-800",
      },
      size: {
        default: "py-2 h-10 px-5 text-sm",
        sm: "h-8 px-4 text-xs ",
        lg: "h-11 px-8 ",
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
