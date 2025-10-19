"use client";
import { type RefObject, useLayoutEffect, useRef, useState } from "react";

interface MouseState {
  x: number | null;
  y: number | null;
}

export function useMouse(): [MouseState] {
  const [state, setState] = useState<MouseState>({
    x: null,
    y: null,
  });

  useLayoutEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setState({
        x: event.clientX,
        y: event.clientY,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return [state];
}
