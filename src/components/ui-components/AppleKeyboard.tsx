import React, { ReactNode } from "react";
import { IoBackspaceOutline, IoMoonOutline } from "react-icons/io5";
import { MdOutlineKeyboardTab, MdKeyboardControlKey } from "react-icons/md";
import cn from "@/app/lib/cn";
import {
  LuSunDim,
  LuSunMedium,
  LuSearch,
  LuMic,
  LuCommand,
  LuOption,
} from "react-icons/lu";
import { BsGrid1X2 } from "react-icons/bs";
import {
  TbPlayerTrackPrev,
  TbPlayerTrackNext,
  TbCaretDownFilled,
  TbCaretLeftFilled,
  TbCaretRightFilled,
  TbCaretUpFilled,
} from "react-icons/tb";
import { PiPlayPauseBold } from "react-icons/pi";
import { BiVolumeMute, BiVolumeFull, BiVolumeLow } from "react-icons/bi";
import { AiOutlineGlobal } from "react-icons/ai";

const AppleKeyboard = () => {
  return (
    <div className="card-shadow flex flex-col flex-nowrap gap-1 rounded-xl border border-neutral-600 bg-neutral-900 p-2">
      <div className="flex flex-nowrap gap-1">
        <Key
          type={"large"}
          align="left"
          topEl={<span className="flex-1"></span>}
          bottomEl={<span className="w-16 flex-1">esc</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={
            <span>
              <LuSunDim size={16} />
            </span>
          }
          bottomEl={<span>F1</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={
            <span>
              <LuSunMedium size={16} />
            </span>
          }
          bottomEl={<span>F2</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={
            <span className="p-0.5">
              <BsGrid1X2 />
            </span>
          }
          bottomEl={<span>F3</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={
            <span>
              <LuSearch size={15} />
            </span>
          }
          bottomEl={<span>F4</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={
            <span>
              <LuMic size={16} />
            </span>
          }
          bottomEl={<span>F5</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={
            <span>
              <IoMoonOutline size={16} />
            </span>
          }
          bottomEl={<span>F6</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={
            <span>
              <TbPlayerTrackPrev size={16} />
            </span>
          }
          bottomEl={<span>F7</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={
            <span>
              <PiPlayPauseBold size={16} />
            </span>
          }
          bottomEl={<span>F8</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={
            <span>
              <TbPlayerTrackNext size={16} />
            </span>
          }
          bottomEl={<span>F9</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={
            <span>
              <BiVolumeMute size={16} />
            </span>
          }
          bottomEl={<span>F10</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={
            <span>
              <BiVolumeLow size={16} />
            </span>
          }
          bottomEl={<span>F11</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={
            <span>
              <BiVolumeFull size={16} />
            </span>
          }
          bottomEl={<span>F12</span>}
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
      <div className="flex flex-nowrap items-center gap-1">
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
          align="right"
          topEl={<span className="w-16 flex-1"></span>}
          bottomEl={
            <span className="">
              <IoBackspaceOutline size={16} />
            </span>
          }
        />
      </div>
      <div className="flex flex-nowrap items-center gap-1">
        <Key
          type={"large"}
          align="left"
          topEl={<span className="w-16 flex-1"></span>}
          bottomEl={
            <span>
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
      <div className="flex flex-nowrap items-center gap-1">
        <Key
          type={"large"}
          align="left"
          topEl={<span className="w-19 flex-1"></span>}
          bottomEl={<span className="">caps lock</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>A</span>}
          bottomEl={""}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>S</span>}
          bottomEl={""}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>D</span>}
          bottomEl={""}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>F</span>}
          bottomEl={""}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>G</span>}
          bottomEl={""}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>H</span>}
          bottomEl={""}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>J</span>}
          bottomEl={""}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>K</span>}
          bottomEl={""}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>L</span>}
          bottomEl={""}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>:</span>}
          bottomEl={<span>;</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>"</span>}
          bottomEl={<span> '</span>}
        />
        <Key
          type={"large"}
          align="right"
          topEl={<span className="w-19 flex-1"></span>}
          bottomEl={<span>return</span>}
        />
      </div>
      <div className="flex flex-nowrap items-center gap-1">
        <Key
          type={"large"}
          align="left"
          topEl={<span className="w-26 flex-1"></span>}
          bottomEl={<span className="">shift</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>Z</span>}
          bottomEl={""}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>X</span>}
          bottomEl={""}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>C</span>}
          bottomEl={""}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>V</span>}
          bottomEl={""}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>B</span>}
          bottomEl={""}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>N</span>}
          bottomEl={""}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>M</span>}
          bottomEl={""}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>&#60;</span>}
          bottomEl={<span>&#44;</span>}
        />
        <Key
          type={"small"}
          align="center"
          topEl={<span>&#62;</span>}
          bottomEl={<span>&#46;</span>}
        />

        <Key
          type={"small"}
          align="center"
          topEl={<span>?</span>}
          bottomEl={<span>&#47;</span>}
        />
        <Key
          type={"large"}
          align="right"
          topEl={<span className="w-26 flex-1"></span>}
          bottomEl={<span className="">return</span>}
        />
      </div>
      <div className="flex flex-nowrap items-center gap-1">
        <Key
          type={"large"}
          align="left"
          topEl={
            <span>
              <AiOutlineGlobal size={16} />
            </span>
          }
          bottomEl={<span className="w-8">fn</span>}
        />

        <Key
          type={"large"}
          align="left"
          topEl={
            <span>
              <MdKeyboardControlKey size={16} />
            </span>
          }
          bottomEl={<span>control</span>}
        />
        <Key
          type={"large"}
          align="left"
          topEl={
            <span>
              <LuOption size={16} />
            </span>
          }
          bottomEl={<span>option</span>}
        />
        <Key
          type={"large"}
          align="left"
          topEl={
            <span className="">
              <LuCommand size={16} />
            </span>
          }
          bottomEl={<span className="w-15">command</span>}
        />

        <Key
          type={"large"}
          align="center"
          topEl={""}
          bottomEl={<div className="w-58"></div>}
        />
        <Key
          type={"large"}
          align="right"
          topEl={
            <span>
              <LuCommand size={16} />
            </span>
          }
          bottomEl={<span className="w-15">command</span>}
        />

        <Key
          type={"large"}
          align="right"
          topEl={
            <span>
              <LuOption size={16} />
            </span>
          }
          bottomEl={<span>option</span>}
        />

        <div className="flex w-full flex-col items-center gap-1">
          <div className="flex justify-center">
            <ArrowKey direction="up" />
          </div>
          <div className="flex gap-1">
            <ArrowKey direction="left" />
            <ArrowKey direction="down" />
            <ArrowKey direction="right" />
          </div>
        </div>
      </div>
    </div>
  );
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
    <div className="group relative w-fit transform cursor-pointer rounded-[8px] bg-linear-to-b from-neutral-800 to-neutral-900 p-px shadow-[0_0px_1px_0px_rgb(255,255,255,.1)] duration-300 ease-in-out hover:shadow-[0_0px_2px_2px_rgb(255,255,255,.0)]">
      <div
        className={cn(
          "hover:top-neutral-900 overflow-hidden rounded-[6px] bg-radial bg-radial-[at_50%_0%] from-neutral-950 to-neutral-900 shadow-[0_1px_1px_0.1px_rgb(255,255,255,.2)] transition-all duration-800 ease-out group-hover:shadow-[0_0px_1px_0.1px_rgb(255,255,255,.0)] before:absolute before:top-0 before:left-0 before:z-1 before:h-full before:w-full before:rounded-[6px] before:bg-neutral-100/10 before:content-['']",
          { [`text-${align}`]: true },
        )}
      >
        {type === "small" && <SmallKey {...keyProps} />}
        {type === "large" && <LargeKey {...keyProps} />}
      </div>
    </div>
  );
};

const SmallKey = ({
  align,
  topEl,
  bottomEl,
}: {
  align: string;
  topEl: ReactNode;
  bottomEl: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "z-20 flex aspect-square w-12 flex-col justify-center gap-1 p-1 text-[11px] text-neutral-300 select-none hover:text-neutral-100",
        { [`text-${align}`]: true },
        align === "left"
          ? "items-start"
          : align === "right"
            ? "items-end"
            : "items-center",
      )}
    >
      {topEl}
      {bottomEl}
    </div>
  );
};

const LargeKey = ({
  align,
  topEl,
  bottomEl,
}: {
  align: string;
  topEl: ReactNode;
  bottomEl: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "z-20 flex h-12 flex-col justify-between gap-1 p-2 text-[11px] text-neutral-300 select-none hover:text-neutral-100",
        align === "left"
          ? "items-start"
          : align === "right"
            ? "items-end"
            : "items-center",
      )}
    >
      {topEl}
      {bottomEl}
    </div>
  );
};

const ArrowKey = ({
  direction,
}: {
  direction: "up" | "down" | "left" | "right";
}) => {
  return (
    <div className="relative w-fit transform cursor-pointer rounded-[8px] bg-linear-to-b from-neutral-700 to-neutral-800 p-px shadow-[0_0px_1px_0px_rgb(255,255,255,.2)] duration-300 ease-in-out">
      <div className="overflow-hidden rounded-[6px] bg-radial bg-radial-[at_50%_0%] from-neutral-950 to-neutral-900 shadow-[0_1px_1px_0.1px_rgb(255,255,255,.3)] transition-all duration-300 ease-in-out before:absolute before:top-0 before:left-0 before:z-1 before:h-full before:w-full before:rounded-[6px] before:bg-neutral-100/10 before:content-[''] hover:from-neutral-800">
        <div className="z-20 flex h-5 w-11 flex-col items-center justify-center gap-1 text-xs text-neutral-300 select-none hover:text-neutral-100">
          {direction === "down" && <TbCaretDownFilled size={16} />}
          {direction === "up" && <TbCaretUpFilled size={16} />}
          {direction === "left" && <TbCaretLeftFilled size={16} />}
          {direction === "right" && <TbCaretRightFilled size={16} />}
        </div>
      </div>
    </div>
  );
};

export default AppleKeyboard;
