import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import cn from "@/app/lib/cn";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center rounded-full gap-2 text-sm font-medium",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-t from-neutral-800 to-neutral-600 text-white shadow-xs",
        secondary:
          "bg-gradient-to-t from-[#8122b0] to-[#dc98fd]  text-primary-foreground shadow-xs hover:bg-primary/90",
        tertiary:
          "bg-transparent hover:bg-slate-100 underline-offset-4 hover:underline",
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

// `<button className="relative cursor-pointer rounded-[16px] bg-black bg-gradient-to-t from-[#8122b0] to-[#dc98fd] p-[2px] opacity-90 transition-opacity hover:opacity-100 active:scale-95">
//   <span className="flex h-full w-full items-center gap-2 rounded-[14px] bg-[#B931FC] bg-gradient-to-t from-[#a62ce2] to-[#c045fc] px-3 py-1 text-sm text-white">
//     {icon} {name}
//   </span>
// </button>;`
export default Button;
