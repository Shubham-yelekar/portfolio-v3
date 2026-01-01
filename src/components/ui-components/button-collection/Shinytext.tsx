"use client";
import { motion } from "motion/react";
import clsx from "clsx";

const ShinyText = ({
  children,
  className,
}: {
  children: string;
  className: string;
}) => {
  return (
    <motion.span
      initial={{ "--x": "100%" }}
      animate={{ "--x": "-100%" }}
      transition={{
        repeat: Infinity,
        duration: 3,
        ease: "linear",
      }}
      className={clsx(
        "relative inline-block bg-[length:100%,auto] bg-clip-text",
        "[mask-image:linear-gradient(-90deg,black_calc(var(--x)+30%),transparent_calc(var(--x)+50%),black_calc(var(--x)+0%))]",
        "[-webkit-mask-image:linear-gradient(-90deg,black_calc(var(--x)+0%),transparent_calc(var(--x)+50%),black_calc(var(--x)+100%))]",
        className,
      )}
    >
      {children}
    </motion.span>
  );
};

export default ShinyText;
