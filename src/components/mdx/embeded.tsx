"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { getImageProps } from "next/image";

export function YouTubeEmbed({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  return (
    <div className="relative">
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
    <figure className="relative rounded-xl shadow-[var(--card-shadow-2)] [&_img]:rounded-xl">
      <img {...props} className="w-full" />
    </figure>
  );
}

type ImageModalProps = React.ComponentProps<"img"> & {
  layoutId: string;
};

export function ImageModal({ src, alt, ...props }: ImageModalProps) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="">
      <figure className="relative rounded-xl shadow-[var(--card-shadow-2)] [&_img]:rounded-xl">
        <motion.img
          src={src}
          alt={alt}
          {...props}
          className="w-full"
          layoutId={alt}
        />
        <button
          onClick={() => setModalOpen(true)}
          className="absolute right-2 bottom-2 cursor-pointer rounded-2xl bg-neutral-200 px-2 py-1 text-xs font-medium"
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
            className="fixed top-0 left-0 z-50 flex h-screen w-full items-center justify-center bg-neutral-900/60"
          >
            <motion.img
              onClick={(e) => e.stopPropagation()}
              src={src}
              alt={alt}
              className="block max-h-[90vh] max-w-[90vw] object-contain"
              // This ID must match the thumbnail's layoutId
              // layoutId={alt}
              {...props}
            />
            <button
              className="absolute top-6 right-8 z-10 rounded-full bg-neutral-200 px-3 py-1 text-sm font-bold shadow"
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

// Define the props the component will accept
interface CodeBlockProps {
  children: React.ReactNode;
  title?: string; // An optional title for the code block
}

export const CodeBlock = ({ children, title }: CodeBlockProps) => {
  return (
    // A styled container for the code block
    <div className="my-6 overflow-hidden rounded-lg border border-zinc-700 bg-zinc-300 text-[14px] shadow-md">
      {title && (
        <div className="border-b border-zinc-700 bg-zinc-800 px-4 py-2 text-sm text-zinc-300">
          {title}
        </div>
      )}
      <pre className="overflow-x-auto rounded bg-zinc-100 px-0 py-0 dark:bg-zinc-900">
        <code className="font-mono text-sm text-neutral-600 dark:text-neutral-200">
          {children}
        </code>
      </pre>
    </div>
  );
};
