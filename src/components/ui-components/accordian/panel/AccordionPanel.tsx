"use client";
import { useAccordionItemContext } from "../itemContext";
import { motion, AnimatePresence } from "motion/react";

const AccordionPanel = ({ children }: any) => {
  const { isOpen } = useAccordionItemContext();

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
          data-state="open"
        >
          <div className={"p-3 text-sm text-neutral-800 dark:text-neutral-400"}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AccordionPanel;
