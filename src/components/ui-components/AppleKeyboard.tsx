import React, { ReactNode } from "react";

const AppleKeyboard = () => {
  return (
    <div className="rounded-xl border border-neutral-300 bg-neutral-100 p-2 dark:border-neutral-600 dark:bg-neutral-900">
      <div className="flex flex-nowrap gap-1">
        <Key
          type={"small"}
          align="center"
          topEl={<span>~</span>}
          bottomEl={<span>`</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>!</span>}
          bottomEl={<span>1</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>@</span>}
          bottomEl={<span>2</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>#</span>}
          bottomEl={<span>3</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>%</span>}
          bottomEl={<span>5</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>^</span>}
          bottomEl={<span>6</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>&</span>}
          bottomEl={<span>7</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>*</span>}
          bottomEl={<span>8</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>(</span>}
          bottomEl={<span>9</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>)</span>}
          bottomEl={<span>0</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>_</span>}
          bottomEl={<span>-</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>)</span>}
          bottomEl={<span>0</span>}
        />
      </div>
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
    <div className="relative w-fit transform cursor-pointer rounded-[8px] bg-linear-to-b from-neutral-100 to-neutral-300 p-0.5 duration-300 ease-in-out dark:from-neutral-700 dark:to-neutral-800">
      <div className="overflow-hidden rounded-[6px] bg-linear-to-b from-neutral-300 to-neutral-200 transition-all duration-300 ease-in-out before:absolute before:top-0 before:left-0 before:z-1 before:h-full before:w-full before:rounded-[6px] before:bg-neutral-100/10 before:content-[''] dark:from-neutral-800 dark:to-neutral-900 hover:dark:from-neutral-800">
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
    <div className="z-20 flex aspect-square w-12 flex-col items-center justify-center gap-1 text-xs text-neutral-800 select-none hover:text-neutral-900 dark:text-neutral-300 hover:dark:text-neutral-100">
      {topEl}
      {bottomEl}
    </div>
  );
};

export default AppleKeyboard;
