import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const current = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setProgress(current);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[70] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-teal-400 to-lime-300 shadow-[0_0_25px_rgba(45,212,191,0.55)] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
