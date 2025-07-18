import { useState, useEffect } from "react";

export default function MouseCircle() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [innerPosition, setInnerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  useEffect(() => {
    const smoothMove = () => {
      setInnerPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.3,
        y: prev.y + (mousePosition.y - prev.y) * 0.3,
      }));
      requestAnimationFrame(smoothMove);
    };
    smoothMove();
  }, [mousePosition]);

  return (
    <>
      <div
        className="sm:fixed hidden pointer-events-none transition-all duration-200 ease-out"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        <div className="w-12 h-12 rounded-full border-[2px] border-[#00C0FF] flex justify-center items-center"></div>
      </div>

      <div
        className="fixed pointer-events-none transition-all duration-100 ease-out"
        style={{
          transform: `translate(${innerPosition.x}px, ${innerPosition.y}px)`,
        }}
      >
        <div className="w-4 h-4 bg-[#00C0FF] rounded-full"></div>
      </div>
    </>
  );
}
