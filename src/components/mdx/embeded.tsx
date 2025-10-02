"use client";
import { useState } from "react";
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
        className="aspect-video w-full rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-black/10 ring-inset dark:ring-white/10" />
    </div>
  );
}

export function FramedImage({ ...props }: React.ComponentProps<"img">) {
  const [zoomed, setZommed] = useState(false);
  return (
    <figure className="relative [&_img]:rounded-lg">
      {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
      <img {...props} className="w-full" />
      <button className="absolute right-2 bottom-2 rounded-2xl bg-neutral-200 px-2 py-1 text-xs font-medium">
        View
      </button>
    </figure>
  );
}
