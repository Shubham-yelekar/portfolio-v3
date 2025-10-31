"use client";
import { motion } from "motion/react";

const ShinyButton = ({ children }: { children: string }) => {
  return (
    <motion.button
      className="relative rounded-full bg-[radial-gradient(circle_at_50%_0%,rgba(250,250,250,0.05)_0%,transparent_60%),rgba(15,15,15,1)] px-28 py-16 transition-all duration-300 ease-in-out hover:bg-[radial-gradient(circle_at_50%_0%,rgba(19,112,189,0.05)_0%,transparent_60%),rgba(15,15,15,1)]"
      initial={{ "--x": "100%", scale: 1 } as any}
      animate={{ "--x": "-100%" } as any}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
    >
      <motion.span className="font-regular relative block h-full w-full [mask-image:linear-gradient(-75deg,white_calc(var(--x)_+_20%),transparent_calc(var(--x)_+_30%),white_calc(var(--x)_+_100%))] text-4xl tracking-wide text-neutral-100 [-webkit-mask-image:linear-gradient(-75deg,white_calc(var(--x)_+_20%),transparent_calc(var(--x)_+_30%),white_calc(var(--x)_+_100%))]">
        {children}
      </motion.span>
      <span className="absolute inset-0 block rounded-full bg-[linear-gradient(-75deg,rgba(255,255,255,0.1)_calc(var(--x)_+_20%),rgba(255,255,255,0.5)_calc(var(--x)_+_30%),rgba(255,255,255,0.1)_calc(var(--x)_+_100%))] [mask-composite:exclude] p-[2px] transition-all duration-300 ease-in-out [-webkit-mask-complete:xor] [-webkit-mask:linear-gradient(black,black)_content-box,linear-gradient(black,black)] [mask:linear-gradient(black,black)_content-box,linear-gradient(black,black)] hover:bg-[linear-gradient(-75deg,rgba(255,255,255,0.1)_calc(var(--x)_+_20%),rgb(110,132,253)_calc(var(--x)_+_30%),rgba(255,255,255,0.1)_calc(var(--x)_+_100%))]"></span>
    </motion.button>
  );
};

export default ShinyButton;
