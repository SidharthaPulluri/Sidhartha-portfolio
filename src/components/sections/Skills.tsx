"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/constant";

export const Skills = () => {
  return (
    <section id="skills" className="section-shell">
      <div className="page-shell">
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow">Skills</span>
          <h2 className="section-title mt-5">Technical strengths organized around how I actually build.</h2>
          <p className="section-lead mt-5">
            Instead of a moving logo wall, this section highlights the areas I use most often when I build,
            evaluate, and ship AI systems.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {skillsData.map((category, index) => (
            <motion.article
              key={category.title}
              className="surface p-6 sm:p-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <p className="metric-label">{category.title}</p>
              <div className="section-divider" />
              <div className="mt-5 flex flex-wrap gap-3">
                {category.data.map((skill) => (
                  <span
                    key={skill.title}
                    className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-foreground"
                  >
                    <skill.logoComponent />
                    {skill.title}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
