import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Mail, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { socialLinks } from "../data/portfolio";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactSection() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields before sending." });
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "EmailJS keys are missing. Add the VITE_EMAILJS env values to enable contact delivery.",
      });
      return;
    }

    try {
      setSending(true);
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setFormData(initialState);
      setStatus({ type: "success", message: "Message sent successfully. I will get back to you soon." });
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong while sending the message. Please try again." });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something polished, useful, and ready for the real world."
          copy="This section uses a modern glassmorphism layout and is ready for EmailJS integration. Swap in your real credentials and social URLs, and the portfolio is ready to receive inbound messages."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="glass-panel p-8"
          >
            <div className="inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-cyan-300">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-display text-3xl font-semibold text-white">Start a conversation</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Whether you want a full-stack product, an API-driven dashboard, or a responsive frontend,
              I&apos;m open to discussing freelance work, team roles, and collaborative projects.
            </p>

            <div className="mt-8 space-y-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-cyan-300/30 hover:bg-white/[0.05]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-white/5 p-3 text-cyan-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-100">{item.label}</p>
                        <p className="text-sm text-slate-500">{item.href.replace("https://", "")}</p>
                      </div>
                    </div>
                    <span className="text-sm text-cyan-300">Visit</span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="glass-panel p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-3 block text-sm font-medium text-slate-300">Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-white/[0.05]"
                  placeholder="Your name"
                />
              </label>

              <label className="block">
                <span className="mb-3 block text-sm font-medium text-slate-300">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-white/[0.05]"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-3 block text-sm font-medium text-slate-300">Message</span>
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-4 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-white/[0.05]"
                placeholder="Tell me about your project, role, or idea..."
              />
            </label>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send className="h-4 w-4" />
                {sending ? "Sending..." : "Send Message"}
              </button>

              {status.message ? (
                <div
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm ${
                    status.type === "success"
                      ? "bg-emerald-400/10 text-emerald-300"
                      : "bg-rose-400/10 text-rose-300"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <AlertCircle className="h-4 w-4" />
                  )}
                  {status.message}
                </div>
              ) : null}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
