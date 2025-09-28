"use client";
import React from "react";
import HollowKnight from "../components/icons/HollowKnight";
import Murials from "./icons/Murials";
import { motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Delay children animations, and stagger them by 0.5 seconds
      delayChildren: 0.3,
      staggerChildren: 0.5,
    },
  },
};
const Breaker = () => {
  return (
    <div>
      <motion.div
        className="flex justify-between"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <Murials className={"-scale-x-100"} />
        <HollowKnight />
        <Murials />
      </motion.div>
    </div>
  );
};

export default Breaker;
