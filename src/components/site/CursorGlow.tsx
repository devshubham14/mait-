import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-40 hidden h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
      style={{
        left: pos.x,
        top: pos.y,
        background:
          "radial-gradient(circle, oklch(0.7 0.25 320 / 0.18), oklch(0.7 0.25 350 / 0.08) 40%, transparent 70%)",
        transition: "transform 0.15s ease-out",
      }}
    />
  );
}
