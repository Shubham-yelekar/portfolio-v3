"use client";
import { useState } from "react";
import { useMouse } from "@/app/hooks/use-mouse";

interface TextCursorProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

export function TextCursor({ children, content }: TextCursorProps) {
  const [mouseState] = useMouse();

  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </div>

      {mouseState.x !== null && mouseState.y !== null && isHovered && (
        <div
          className="pointer-events-none fixed z-50"
          style={{
            left: mouseState.x,
            top: mouseState.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="animate-fade-in absolute -top-2 left-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-sm whitespace-nowrap text-gray-900"
            style={{ animation: "fadeIn 0.2s ease-out" }}
          >
            {content}
          </div>
        </div>
      )}

      {/* Keep the animation local to this component */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
