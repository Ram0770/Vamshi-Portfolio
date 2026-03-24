import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      return undefined;
    }

    const moveCursor = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const hideCursor = () => setVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[80] hidden h-4 w-4 rounded-full bg-cyan-300 lg:block"
        animate={{ x: position.x - 8, y: position.y - 8 }}
        transition={{ type: "spring", damping: 24, stiffness: 350, mass: 0.25 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[79] hidden h-12 w-12 rounded-full border border-cyan-300/40 bg-cyan-300/5 backdrop-blur-sm lg:block"
        animate={{ x: position.x - 24, y: position.y - 24 }}
        transition={{ type: "spring", damping: 18, stiffness: 170, mass: 0.45 }}
      />
    </>
  );
}
