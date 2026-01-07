// Types for the accordion
// single | multiple
// class

export type AccordionContextTypes = {
  isOpen: (value: string) => boolean;
  toggleItem: (value: string) => void;
};

export type AccordionItemContextTypes = {
  value: string;
  isOpen: boolean;
};
