import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { selfData } from "@/constant";
import { mono } from "@/app/fonts";

export const Hero = () => {
  return (
    <section
      id="top"
      className="section-shell flex min-h-screen items-center pt-28 sm:pt-32"
    >
      <div className="page-shell">
        <motion.div
          className="grid items-end gap-14 lg:grid-cols-[1.25fr_0.75fr]"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="space-y-8">
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="eyebrow">AI / ML Engineer Portfolio</span>
              <div className="space-y-4">
                <p className={`${mono.className} text-sm uppercase tracking-[0.34em] text-primary/90`}>
                  {selfData.roles.slice(0, 3).join(" | ")}
                </p>
                <h1 className="font-inter text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-white sm:text-6xl lg:text-[6.2rem]">
                  {selfData.name}
                </h1>
                <p className="max-w-3xl text-2xl font-medium leading-tight text-white sm:text-3xl lg:text-[2.5rem]">
                  Building production-ready AI systems from research-driven ideas.
                </p>
              </div>
              <p className="section-lead max-w-2xl">
                {selfData.bio}
              </p>
            </motion.div>

            <motion.div
              className="surface-muted flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:justify-between"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
            >
              <div className="space-y-2">
                <p className="metric-label">Currently focused on</p>
                <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                  Applied product work where machine learning, automation, and reliable delivery all matter.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 sm:max-w-[24rem] sm:justify-end">
                {selfData.focus_areas.map((item) => (
                  <span key={item} className="info-chip">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/resume">
                  View Resume
                  <FiArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/10 bg-white/5 px-8 hover:bg-white/10">
                <a href="#project">See Projects</a>
              </Button>
            </motion.div>

            <motion.div
              className="grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div>
                <p className="metric-label">Base</p>
                <p className="mt-2 text-base text-foreground">
                  Richardson, Texas
                </p>
              </div>
              <div>
                <p className="metric-label">Focus</p>
                <p className="mt-2 text-base text-foreground">
                  Vision, NLP, ML systems
                </p>
              </div>
              <div>
                <p className="metric-label">Working style</p>
                <p className="mt-2 text-base text-foreground">
                  Research, prototyping, deployment
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="surface p-7 sm:p-8"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div>
                <p className="metric-label">What I do best</p>
                <div className="section-divider" />
              </div>

              <div className="space-y-1">
                {[
                  ["Machine learning", "Train and ship applied models"],
                  ["Computer vision", "Build image pipelines and deploy inference"],
                  ["LLM systems", "Design usable NLP and agent workflows"],
                  ["Production delivery", "Turn prototypes into reliable products"],
                ].map(([label, value]) => (
                  <div key={label} className="metric-line">
                    <span className="metric-label">{label}</span>
                    <span className="metric-value">{value}</span>
                  </div>
                ))}
              </div>

              <div className="surface-muted p-5">
                <p className="metric-label">Current positioning</p>
                <p className="mt-3 text-lg leading-8 text-foreground">
                  {selfData.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {selfData.roles.slice(0, 4).map((role) => (
                  <span key={role} className="info-chip">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
