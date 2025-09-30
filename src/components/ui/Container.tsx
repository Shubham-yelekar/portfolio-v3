import React from "react";
import cn from "@/app/lib/cn";
interface containerTypes {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: containerTypes) => {
  return (
    <div className={cn("mx-auto h-auto w-full max-w-2xl", className)}>
      {children}
    </div>
  );
};

export default Container;
