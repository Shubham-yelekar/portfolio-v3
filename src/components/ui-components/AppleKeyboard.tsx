import React, { ReactNode } from "react";

const AppleKeyboard = () => {
  return (
    <div className="rounded-xl border-1 border-neutral-300 bg-neutral-100 p-2 dark:border-neutral-600 dark:bg-neutral-900">
      <Key
        type={"small"}
        align="center"
        topEl={<span>/</span>}
        bottomEl={<span>A</span>}
      />
    </div>
  );
};

interface Key {
  type: "base" | "small" | "long" | "arrow";
  align: "center" | "left" | "right";
  topEl: ReactNode;
  bottomEl: ReactNode;
}

const Key = ({
  type = "base",
  align = "center",
  topEl = "",
  bottomEl = "",
}: Key) => {
  return (
    <div className="relative w-fit transform cursor-pointer rounded-lg bg-gradient-to-b from-neutral-100 to-neutral-300 p-[2px] hover:opacity-15 dark:from-neutral-700 dark:to-neutral-800">
      <div className="overflow-hidden rounded-lg bg-gradient-to-b from-neutral-300 to-neutral-200 transition-all ease-in before:absolute before:top-0 before:left-0 before:z-1 before:h-full before:w-full before:rounded-lg before:bg-neutral-100/10 before:content-[''] dark:from-neutral-800 dark:to-neutral-900 hover:dark:from-neutral-900">
        <SmallKey topEl={topEl} bottomEl={bottomEl} />
      </div>
    </div>
  );
};

const SmallKey = ({
  topEl,
  bottomEl,
}: {
  topEl: ReactNode;
  bottomEl: ReactNode;
}) => {
  return (
    <div className="le z-20 flex aspect-square w-16 flex-col items-center justify-center gap-1 text-sm text-neutral-800 select-none dark:text-neutral-100">
      {topEl}
      {bottomEl}
    </div>
  );
};

export default AppleKeyboard;
