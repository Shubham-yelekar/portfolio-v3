import React, { ReactNode } from "react";
import { IoBackspaceOutline } from "react-icons/io5";
import { MdOutlineKeyboardTab } from "react-icons/md";

const AppleKeyboard = () => {
  return (
    <div className="flex flex-col flex-nowrap gap-1 rounded-xl border border-neutral-300 bg-neutral-100 p-2 dark:border-neutral-600 dark:bg-neutral-900">
      <div className="flex flex-nowrap gap-1">
        <Key
          type={"large"}
          align="center"
          topEl={""}
          bottomEl={<span className="w-16 flex-1">esc</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>~</span>}
          bottomEl={<span>F1</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>~</span>}
          bottomEl={<span>F2</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>~</span>}
          bottomEl={<span>F3</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>~</span>}
          bottomEl={<span>F4</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>~</span>}
          bottomEl={<span>F5</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>~</span>}
          bottomEl={<span>F6</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>~</span>}
          bottomEl={<span>F7</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>~</span>}
          bottomEl={<span>F8</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>~</span>}
          bottomEl={<span>F9</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>~</span>}
          bottomEl={<span>f10</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>~</span>}
          bottomEl={<span>f11</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>~</span>}
          bottomEl={<span>f12</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={
            <div className="aspect-square w-9 rounded-full bg-neutral-950"></div>
          }
          bottomEl={""}
        />
      </div>
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
          topEl={<span>$</span>}
          bottomEl={<span>4</span>}
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
          topEl={<span>+</span>}
          bottomEl={<span>=</span>}
        />
        <Key
          type={"large"}
          align="center"
          topEl={""}
          bottomEl={
            <span className="w-16 flex-1">
              <IoBackspaceOutline size={16} />
            </span>
          }
        />
      </div>
      <div className="flex flex-nowrap gap-1">
        <Key
          type={"large"}
          align="center"
          topEl={""}
          bottomEl={
            <span className="w-15 flex-1">
              <MdOutlineKeyboardTab />
            </span>
          }
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>Q</span>}
          bottomEl={""}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>W</span>}
          bottomEl={""}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>E</span>}
          bottomEl={""}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>R</span>}
          bottomEl={""}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>T</span>}
          bottomEl={""}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>Y</span>}
          bottomEl={""}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>U</span>}
          bottomEl={""}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>I</span>}
          bottomEl={""}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>O</span>}
          bottomEl={""}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>P</span>}
          bottomEl={""}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>&#123;</span>}
          bottomEl={<span> &#91;</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>&#125;</span>}
          bottomEl={<span>&#93;</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span> &#124;</span>}
          bottomEl={<span>&#92;</span>}
        />
      </div>
    </div>
  );
};

const keyMapComponent = {
  small: "SmallKey",
  large: "LargeKey",
  arrow: "Arrow",
};
interface KeyProps {
  type: "small" | "large" | "arrow";
  align: "center" | "left" | "right";
  topEl: ReactNode;
  bottomEl: ReactNode;
}

const Key = ({
  type = "small",
  align = "center",
  topEl = "",
  bottomEl = "",
}: KeyProps) => {
  const keyProps = { align, topEl, bottomEl };

  return (
    <div className="relative w-fit transform cursor-pointer rounded-[8px] bg-linear-to-b from-neutral-100 to-neutral-300 p-0.5 duration-300 ease-in-out dark:from-neutral-700 dark:to-neutral-800">
      <div className="overflow-hidden rounded-[6px] bg-linear-to-b from-neutral-300 to-neutral-200 transition-all duration-300 ease-in-out before:absolute before:top-0 before:left-0 before:z-1 before:h-full before:w-full before:rounded-[6px] before:bg-neutral-100/10 before:content-[''] dark:from-neutral-800 dark:to-neutral-900 hover:dark:from-neutral-800">
        {type === "small" && <SmallKey {...keyProps} />}
        {type === "large" && <LargeKey {...keyProps} />}
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

const LargeKey = ({
  topEl,
  bottomEl,
}: {
  topEl: ReactNode;
  bottomEl: ReactNode;
}) => {
  return (
    <div className="z-20 flex h-12 flex-col items-center justify-center gap-1 p-2 text-xs text-neutral-800 select-none hover:text-neutral-900 dark:text-neutral-300 hover:dark:text-neutral-100">
      {topEl}
      {bottomEl}
    </div>
  );
};

export default AppleKeyboard;
