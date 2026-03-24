/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        midnight: "#020617",
        ocean: "#0f172a",
        cyanGlow: "#22d3ee",
        tealGlow: "#2dd4bf",
        limeGlow: "#a3e635",
        peachGlow: "#fb7185",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(34, 211, 238, 0.14), 0 24px 80px rgba(13, 148, 136, 0.18)",
        soft: "0 20px 50px rgba(2, 6, 23, 0.3)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        pulseSlow: "pulseSlow 6s ease-in-out infinite",
        marquee: "marquee 18s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.08)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
