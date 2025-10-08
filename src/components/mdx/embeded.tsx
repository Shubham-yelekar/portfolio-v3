"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Highlight, themes } from "prism-react-renderer";
import { LuCopy, LuCheck } from "react-icons/lu"; // Using Lucide icons
import { useTheme } from "next-themes";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
    <div className="my-12">
      <figure className="relative rounded-xl shadow-[var(--card-shadow-2)] [&_img]:rounded-xl">
        <motion.img src={src} alt={alt} {...props} className="w-full" />
        <button
          onClick={() => setModalOpen(true)}
          className="absolute right-2 bottom-2 cursor-pointer rounded-2xl bg-neutral-200 px-2 py-1 text-xs font-medium dark:bg-neutral-800"
        >
          View
        </button>
      </figure>
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
              className="block max-h-[90vh] max-w-[90vw] object-contain"
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
    </div>
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
        code={code.trim()}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`m-0! overflow-x-scroll p-4 text-sm [&::-webkit-scrollbar]:w-[2px]! [&::-webkit-scrollbar-thumb]:bg-neutral-600 [&::-webkit-scrollbar-track]:bg-none ${className}`}
            style={style}
          >
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i });

              delete lineProps.style;
              return (
                <div {...lineProps}>
                  {line.map((token, key) => {
                    const tokenProps = getTokenProps({ token, key });
                    delete tokenProps.style;

                    return <span {...tokenProps} />;
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
  const [current, setCurrent] = useState(0);

  const length = images.length;

  const handleClicks = (dir: string) => {
    if (dir === "left" && current > 0) {
      setCurrent((prev) => prev - 1);
    } else if (dir === "right" && current < length - 1) {
      setCurrent((prev) => prev + 1);
    }
  };
  return (
    <div className="relative aspect-9/6 w-full overflow-hidden rounded-xl">
      <div className="absolute bottom-4 z-2 flex w-full">
        <button
          onClick={() => handleClicks("left")}
          className="rounded-2xl bg-neutral-50 p-2"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={() => handleClicks("right")}
          className="rounded-2xl bg-neutral-50 p-2"
        >
          <IoIosArrowForward />
        </button>
      </div>
      {images.map((image, i) => (
        <div
          className={`absolute inset-0 h-full transition-opacity duration-1000 ease-in-out ${i === current ? "opacity-100" : "opacity-0"}`}
          key={image.alt}
        >
          {i === current && <ImageWrapper src={image.src} alt={image.alt} />}
        </div>
      ))}
    </div>
  );
};
