import React from "react";
import cn from "../lib/cn";
interface containerTypes {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: containerTypes) => {
  return <div className={cn("mx-auto max-w-2xl", className)}>{children}</div>;
};

export default Container;
