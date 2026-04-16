"use client";

import { motion } from "framer-motion";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

import { mono } from "@/app/fonts";
import { selfData } from "@/constant/";

export const Footer = () => {
  const socialLinks = [
    {
      icon: LuGithub,
      href: `https://github.com/${selfData.socials_username.github}`,
      label: "GitHub",
    },
    {
      icon: LuLinkedin,
      href: `https://linkedin.com/in/${selfData.socials_username.linkedin}`,
      label: "LinkedIn",
    },
    { icon: LuMail, href: `mailto:${selfData.email}`, label: "Email" },
  ].filter((item) => !item.href.includes("undefined") && !item.href.endsWith("/"));

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="page-shell">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="eyebrow">Portfolio</span>
            <h3 className="font-inter mt-5 text-3xl font-semibold tracking-tight text-white">
              {selfData.name}
            </h3>
            <p className={`${mono.className} mt-2 text-xs uppercase tracking-[0.26em] text-primary/90`}>
              Machine Learning Engineer
            </p>
            <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
              AI, machine learning, computer vision, and NLP work focused on building systems that move from research to reliable use.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                aria-label={link.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-muted-foreground transition hover:border-primary/30 hover:text-white"
              >
                <link.icon size={16} className="text-primary" />
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="section-divider mt-8" />

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"
        >
          <p>Built as a portfolio for AI, ML, and applied engineering work.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-left text-primary transition hover:text-white sm:text-right"
          >
            Back to top
          </button>
        </motion.div>
      </div>
    </footer>
  );
};
