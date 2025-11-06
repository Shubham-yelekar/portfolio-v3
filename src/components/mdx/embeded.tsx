"use client";
import { useState, useEffect, useRef, useCallback, ReactElement } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Highlight, themes } from "prism-react-renderer";
import { LuCopy, LuCheck } from "react-icons/lu"; // Using Lucide icons
import { useTheme } from "next-themes";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { TbAntennaBars5 } from "react-icons/tb";
import { IoBatteryFullOutline } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { FaPlay, FaArrowRotateRight, FaPause } from "react-icons/fa6";
import { HiMiniMagnifyingGlassCircle } from "react-icons/hi2";

import type { ReactNode } from "react";
import { TextCursor } from "../ui/TextCursor";
import cn from "@/app/lib/cn";
import Iphone17 from "../icons/Iphone17";

export function YouTubeEmbed({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  return (
    <div className="relative my-12">
      <iframe
        className="aspect-video w-full rounded-xl shadow-[var(--card-shadow-2)]"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
    </div>
  );
}

export function ImageWrapper({ ...props }: React.ComponentProps<"img">) {
  return (
    <figure className="relative my-12 rounded-xl shadow-[var(--card-shadow-2)] [&_img]:rounded-xl">
      <img {...props} className="w-full" />
    </figure>
  );
}

export function ImageModal({ src, alt, ...props }: any) {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <TextCursor content={"zoom"}>
        <div className="my-12" onClick={() => setModalOpen(true)}>
          <figure className="relative rounded-xl shadow-[var(--card-shadow-2)] [&_img]:rounded-xl">
            <motion.img src={src} alt={alt} {...props} className="w-full" />
            <button
              onClick={() => setModalOpen(true)}
              className="absolute right-2 bottom-2 cursor-pointer rounded-2xl bg-neutral-200 px-2 py-1 text-xs font-medium dark:bg-neutral-800"
            >
              View
            </button>
          </figure>
        </div>
      </TextCursor>

      <AnimatePresence>
        {isModalOpen ? (
          <motion.div
            onClick={() => setModalOpen(false)} // Close modal on backdrop click
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 z-50 flex h-screen w-full items-center justify-center bg-neutral-900/60 backdrop-blur-xl"
          >
            <motion.img
              onClick={(e) => e.stopPropagation()}
              src={src}
              alt={alt}
              className="block max-h-[90dvh] max-w-[90vw] object-contain"
              {...props}
            />
            <button
              className="absolute top-6 right-8 z-10 rounded-full bg-neutral-200 px-3 py-1 text-sm font-bold shadow dark:bg-neutral-800"
              onClick={() => setModalOpen(false)}
            >
              ×
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
}

export const CodeBlock = ({ code, language, title }: CodeBlockProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const { theme } = useTheme();
  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim()).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    });
  };
  return (
    // A styled container for the code block
    <div className="my-12 overflow-clip rounded-xl bg-neutral-50 p-1 dark:bg-neutral-900">
      <div className="flex justify-between">
        <span className="p-2 font-mono text-xs md:text-sm">
          {title || language}
        </span>
        <button
          onClick={handleCopy}
          className="mb-2 cursor-pointer rounded-lg p-2 dark:bg-neutral-800 dark:hover:bg-neutral-700"
        >
          {isCopied ? (
            <>
              <LuCheck size={16} />
            </>
          ) : (
            <>
              <LuCopy size={16} />
            </>
          )}
        </button>
      </div>
      <Highlight
        theme={themes.palenight} // You can change the theme here
        code={code?.trim()}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`m-0! overflow-x-scroll p-4 text-sm [&::-webkit-scrollbar]:w-[2px]! [&::-webkit-scrollbar-thumb]:bg-neutral-600 [&::-webkit-scrollbar-track]:bg-none ${className}`}
            style={style}
          >
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i });
              const lineKey = String(i); // force to string — safe for React key
              delete (lineProps as any).key;
              delete lineProps.style;
              return (
                <div key={lineKey} {...lineProps}>
                  {line.map((token, key) => {
                    const tokenProps = getTokenProps({ token, key });
                    const tokenKey = `${i}-${key}`; // unique per token
                    delete (tokenProps as any).key;
                    delete tokenProps.style;

                    return <span key={tokenKey} {...tokenProps} />;
                  })}
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export const MdxPre = ({ children }: any) => {
  // MDX passes the code string and language via props on the nested <code> element
  const codeString = children.props?.children;
  const language = children.props?.className?.replace("language-", "") || "";

  return <CodeBlock code={codeString} language={language} />;
};

export const Blockquote = ({ children }: any) => (
  <blockquote className="font-libre! my-4 border-l-4 border-orange-400! bg-neutral-50 py-2 pl-2 text-4xl text-neutral-800! italic dark:border-neutral-500 dark:bg-neutral-900 dark:text-neutral-300">
    {children}
  </blockquote>
);

interface Image {
  src: string;
  alt: string;
}
interface ImageProps {
  images: Image[];
}

export const ImageCarousal = ({ images }: ImageProps) => {
  const [current, setCurrent] = useState<number>(0);

  const length = images.length;

  // No images? Don't render anything.
  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    // Loops to the first image if at the end
    setCurrent(current === length - 1 ? current : current + 1);
  };

  const prevSlide = () => {
    // Loops to the last image if at the beginning
    setCurrent(current === 0 ? current : current - 1);
  };

  const goTo = (index: number) => {
    setCurrent(index);
  };
  return (
    <div className="relative mb-12 aspect-7/5 w-full overflow-hidden rounded-xl border border-neutral-300 dark:border-neutral-900">
      <div className="absolute bottom-2 left-1/2 z-5 flex w-fit -translate-x-1/2 items-center justify-center gap-4 rounded-full bg-neutral-900/70 p-1 backdrop-blur-sm">
        <button
          onClick={prevSlide}
          aria-label="Previous Image"
          className={cn(
            "cursor-pointer rounded-full p-1 hover:bg-neutral-700",
            current === 0 ? "opacity-20" : "opacity-100",
          )}
        >
          <IoIosArrowBack size={16} className="text-white" />
        </button>
        <div className="flex items-center gap-4">
          {images.map((_, i) => (
            <button
              onClick={() => goTo(i)}
              key={i}
              className={cn(
                "h-2 w-2 cursor-pointer rounded-full transition-all ease-in-out",
                current === i ? "scale-150 bg-neutral-50" : "bg-neutral-50/40",
              )}
            ></button>
          ))}
        </div>
        <button
          onClick={nextSlide}
          aria-label="Next Image"
          className={cn(
            "cursor-pointer rounded-full p-1 hover:bg-neutral-700",
            current === length - 1 ? "opacity-20" : "opacity-100",
          )}
        >
          <IoIosArrowForward size={16} className="text-white" />
        </button>
      </div>
      {images.map((image, i) => (
        <div
          className={`absolute h-full w-full transition-opacity duration-500 ease-in-out ${i === current ? "opacity-100" : "opacity-0"}`}
          key={`${image.alt}`}
        >
          <Image
            src={image.src}
            className="m-0! h-full object-cover"
            alt={image.alt}
            width={700}
            height={500}
            priority={i === 0}
          />
        </div>
      ))}
    </div>
  );
};

interface ImageCompareProps {
  topImage: Image;
  bottomImage: Image;
}

export const ImageCompare = ({ topImage, bottomImage }: ImageCompareProps) => {
  const [position, setPosition] = useState(25);
  const sliderBox = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!sliderBox.current) return;
    const rect = sliderBox.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setPosition(percent);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => handleMove(e.clientX),
    [handleMove],
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => handleMove(e.touches[0].clientX),
    [handleMove],
  );
  const handleTouchEnd = useCallback(() => {
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleTouchEnd);
  }, [handleTouchMove]);

  const handleMouseUp = useCallback(() => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseMove]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <div
      ref={sliderBox}
      className="relative mt-8 mb-12 aspect-7/5 w-full overflow-hidden rounded-xl border border-neutral-300 dark:border-neutral-900"
    >
      <motion.div
        className="absolute left-12 z-4 h-full w-1 bg-neutral-100/50"
        style={{ left: `calc(${position}% - 1.5px)` }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <div
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          className="absolute top-1/2 -left-4 z-50 -translate-y-1/2 cursor-grab rounded-full bg-neutral-100 p-2 focus:cursor-grabbing"
        >
          <PiDotsSixVerticalBold className="text-neutral-900" />
        </div>
      </motion.div>
      <div
        className="absolute z-2 h-full w-full"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <Image
          draggable="false"
          className="pointer-events-none m-0! object-cover select-none"
          src={topImage.src}
          alt={topImage.alt}
          width={700}
          height={500}
        />
      </div>
      <div className="absolute h-full w-full">
        <Image
          draggable="false"
          className="pointer-events-none m-0! object-cover select-none"
          src={bottomImage.src}
          alt={bottomImage.alt}
          width={700}
          height={500}
        />
      </div>
    </div>
  );
};

interface VideoProps {
  src: string;
}

export const VideoWrapper = ({ src }: VideoProps) => {
  return (
    <video
      width={700}
      height={600}
      className="rounded-xl border border-neutral-300 dark:border-neutral-900"
      controls
      playsInline
      preload="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export const MobileVideoWrapper = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const playPause = () => {
    if (!playing) {
      videoRef.current?.play();
      setPlaying(true);
    } else {
      videoRef.current?.pause();
      setPlaying(true);
    }
  };

  const restart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };
  return (
    <div className="flex h-fit w-full justify-center p-4">
      <div className="bg-background relative w-3/4 rounded-[48px] sm:w-3/5">
        <div className="absolute top-6 z-8 flex w-full justify-between px-12 pt-2">
          <span className="font-normal">9:14</span>
          <div className="flex items-center gap-1">
            <TbAntennaBars5 size={24} />
            <FaWifi size={18} />
            <IoBatteryFullOutline size={24} />
          </div>
        </div>
        <div className="absolute bottom-4 z-8 flex w-full justify-between px-6">
          <button
            onClick={() => playPause()}
            className="rounded-full border border-neutral-400 bg-neutral-300 p-4 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <FaPlay />
          </button>
          <div className="flex items-center rounded-full border border-neutral-400 bg-neutral-300 px-8 py-2 text-neutral-400 backdrop-blur-2xl dark:border-neutral-800 dark:bg-neutral-900">
            webitename.com
          </div>
          <button
            onClick={() => restart()}
            className="rounded-full border border-neutral-400 bg-neutral-300 p-4 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <FaArrowRotateRight />
          </button>
        </div>
        <Iphone17 className="absolute z-8 w-full" />
        <div className="absolute top-14 z-1 h-[84%] w-full p-2">
          <video
            ref={videoRef}
            width="100%"
            height="auto"
            className="h-full w-full object-cover"
            playsInline
            preload="false"
          >
            <source src="/pictures/mobile-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export const ComponentBox = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-neutral-300 dark:border-neutral-800 dark:bg-neutral-900">
      {children}
    </div>
  );
};

export const BigComponentBox = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex aspect-video items-center justify-center">
      <div className="absolute h-[400px] scale-40 sm:scale-50 md:scale-75 lg:max-w-[1200px] lg:scale-90 xl:scale-100">
        {children}
      </div>
    </div>
  );
};
