import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AboutSection from "./components/AboutSection";
import BackToTop from "./components/BackToTop";
import ContactSection from "./components/ContactSection";
import CustomCursor from "./components/CustomCursor";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import ScrollProgress from "./components/ScrollProgress";
import SkillsSection from "./components/SkillsSection";

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  return localStorage.getItem("theme") || "dark";
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1700);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`noise ${theme === "light" ? "light" : ""}`}>
      <LoadingScreen isLoading={loading} />
      <ScrollProgress />
      <CustomCursor />
      <Navbar theme={theme} onToggleTheme={() => setTheme((value) => (value === "dark" ? "light" : "dark"))} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.65 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </motion.main>

      <BackToTop />
    </div>
  );
}
