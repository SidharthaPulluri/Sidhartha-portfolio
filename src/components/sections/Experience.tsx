"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/constant";
import { ExperienceCard } from "../Cards";

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="page-shell">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 max-w-3xl"
        >
          <span className="eyebrow">Experience</span>
          <h2 className="section-title mt-5">Professional work, research, and leadership highlights.</h2>
          <p className="section-lead mt-5">
            A short timeline of the environments where I have led, shipped, researched, and competed.
          </p>
        </motion.div>

        <div className="relative pl-4 sm:pl-6">
          <div className="absolute bottom-0 left-1 top-2 w-px bg-white/10 sm:left-2" />
          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <ExperienceCard
                key={`${exp.company}-${index}`}
                role={exp.role}
                year={exp.year}
                description={exp.description}
                company={exp.company}
                technologies={exp.technologies}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
