import cn from "@/app/lib/cn";
import React from "react";
interface containerTypes {
  children: React.ReactNode;
  className?: string;
  text?: boolean;
}

const Container = ({ children, className, text = true }: containerTypes) => {
  return (
    <div
      className={cn(
        "mx-auto h-auto w-full",
        className,
        text ? "max-w-xl" : "max-w-3xl",
      )}
    >
      {children}
    </div>
  );
};

export default Container;
