// Types for the accordion
// single | multiple
// class

export type AccordionContextTypes = {
  openItem: string | null;
  toggleItem: (value: string) => void;
};
