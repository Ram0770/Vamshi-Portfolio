import { socialLinks } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-white">Kuruva Vamshi</p>
          <p className="text-sm text-slate-500">Full Stack Developer • MERN Stack • Startup-ready builder</p>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-400 transition hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
