import {
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Database,
  Figma,
  Globe,
  LayoutDashboard,
  Linkedin,
  LockKeyhole,
  ServerCog,
  Wrench,
} from "lucide-react";
import {
  SiBootstrap,
  SiCss,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { label: "Projects shipped", value: "12+" },
  { label: "API-first builds", value: "8+" },
  { label: "Core stack", value: "MERN" },
];

export const heroHighlights = [
  "Full Stack Developer",
  "Building Scalable Web Apps",
];

export const floatingTech = [
  { name: "React", icon: SiReact, className: "left-[8%] top-28 text-cyan-300" },
  { name: "Node.js", icon: SiNodedotjs, className: "right-[12%] top-36 text-emerald-300" },
  { name: "MongoDB", icon: SiMongodb, className: "bottom-28 left-[18%] text-lime-300" },
  { name: "Tailwind", icon: SiTailwindcss, className: "bottom-32 right-[18%] text-sky-300" },
];

export const aboutTimeline = [
  {
    title: "Learning",
    description:
      "Built a strong coding base through hands-on practice with React, Node.js, MongoDB, MySQL, Python, and C.",
  },
  {
    title: "Building",
    description:
      "Turned ideas into products with full-stack systems, authentication flows, admin dashboards, and responsive interfaces.",
  },
  {
    title: "Deploying",
    description:
      "Focused on shipping startup-ready apps with reliable APIs, clear UX, and production-minded architecture.",
  },
];

export const skills = [
  {
    category: "Frontend",
    icon: LayoutDashboard,
    items: [
      { name: "React.js", level: 92, icon: SiReact },
      { name: "Tailwind CSS", level: 88, icon: SiTailwindcss },
      { name: "HTML5", level: 95, icon: SiHtml5 },
      { name: "CSS3", level: 90, icon: SiCss },
      { name: "Bootstrap", level: 86, icon: SiBootstrap },
      { name: "JavaScript", level: 89, icon: SiJavascript },
    ],
  },
  {
    category: "Backend",
    icon: ServerCog,
    items: [
      { name: "Node.js", level: 89, icon: SiNodedotjs },
      { name: "Express.js", level: 87, icon: SiExpress },
      { name: "REST APIs", level: 91, icon: Globe },
      { name: "JWT Auth", level: 88, icon: LockKeyhole },
    ],
  },
  {
    category: "Databases",
    icon: Database,
    items: [
      { name: "MongoDB", level: 90, icon: SiMongodb },
      { name: "MySQL", level: 84, icon: SiMysql },
      { name: "Firebase", level: 75, icon: SiFirebase },
    ],
  },
  {
    category: "Tools",
    icon: Wrench,
    items: [
      { name: "Git", level: 88, icon: SiGit },
      { name: "GitHub", level: 90, icon: SiGithub },
      { name: "Postman", level: 89, icon: SiPostman },
      { name: "Python", level: 78, icon: SiPython },
      { name: "Framer Motion", level: 83, icon: SiFramer },
      { name: "Figma", level: 68, icon: Figma },
    ],
  },
];

export const projects = [
  {
    title: "Restaurant Management System",
    type: "Full Stack",
    description:
      "A dashboard-driven restaurant platform for menu operations, order tracking, and secure user flows with JWT-based authentication.",
    features: ["Menu management", "Order tracking", "JWT authentication"],
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    accent: "from-cyan-500/20 via-sky-500/10 to-transparent",
    icon: BriefcaseBusiness,
    links: {
      live: "https://example.com/restaurant-management",
      github: "https://github.com/your-username/restaurant-management",
    },
    preview: [
      { label: "Orders today", value: "148" },
      { label: "Avg. prep time", value: "18m" },
      { label: "Auth role", value: "Admin" },
    ],
  },
  {
    title: "Task Management System",
    type: "Full Stack",
    description:
      "A reliable productivity app with CRUD workflows, API-driven architecture, and structured MySQL data handling for consistent performance.",
    features: ["CRUD with MySQL", "API backend", "Reliable task states"],
    stack: ["React", "Node.js", "Express", "MySQL"],
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
    icon: BadgeCheck,
    links: {
      live: "https://example.com/task-management",
      github: "https://github.com/your-username/task-management",
    },
    preview: [
      { label: "Completion rate", value: "94%" },
      { label: "Response time", value: "120ms" },
      { label: "Data model", value: "MySQL" },
    ],
  },
  {
    title: "GrowTech Website",
    type: "Frontend",
    description:
      "A polished responsive website focused on clarity, visual structure, and a conversion-friendly frontend experience for a modern brand.",
    features: ["Responsive design", "Clean layout", "Static frontend"],
    stack: ["React", "Tailwind", "Responsive UI"],
    accent: "from-fuchsia-500/20 via-rose-500/10 to-transparent",
    icon: Globe,
    links: {
      live: "https://example.com/growtech",
      github: "https://github.com/your-username/growtech-website",
    },
    preview: [
      { label: "Lighthouse", value: "96" },
      { label: "Viewport", value: "Mobile+" },
      { label: "Build type", value: "Static" },
    ],
  },
];

export const certifications = [
  {
    title: "MERN Stack Certification",
    issuer: "Professional Training Program",
    year: "2025",
    icon: Award,
  },
  {
    title: "Microsoft Career Essentials",
    issuer: "Microsoft",
    year: "2024",
    icon: BadgeCheck,
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    icon: Database,
  },
  {
    title: "Python Bootcamp",
    issuer: "Bootcamp Program",
    year: "2023",
    icon: SiPython,
  },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/your-username",
    icon: SiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-username",
    icon: Linkedin,
  },
];
