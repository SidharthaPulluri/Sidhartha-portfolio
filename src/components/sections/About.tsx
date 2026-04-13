"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { selfData } from "@/constant";
import Link from "next/link";
import { LuMapPinned } from "react-icons/lu";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
    amount: 0.25,
  });

  return (
    <section
      ref={ref}
      id="about"
      className="section-shell"
    >
      <div className="page-shell">
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow">About</span>
          <h2 className="section-title mt-5">Research-minded engineering with a product mindset.</h2>
          <p className="section-lead mt-5">
            I work at the intersection of model quality, system design, and practical delivery. The goal is not just
            to train something impressive, but to build something people can actually use.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <motion.div
            className="surface p-7 sm:p-8"
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="metric-label">Snapshot</p>
            <div className="section-divider" />
            <div className="space-y-1">
              {[
                ["Program", "Computer Science graduate student"],
                ["University", selfData.workFor],
                [
                  "Location",
                  `${selfData.current_location.city}, ${selfData.current_location.state}, ${selfData.current_location.country}`,
                ],
                ["Specialties", "AI, ML, computer vision, NLP"],
              ].map(([label, value]) => (
                <div key={label} className="metric-line">
                  <span className="metric-label">{label}</span>
                  <span className="metric-value max-w-[14rem] text-left sm:text-right">{value}</span>
                </div>
              ))}
            </div>

            <div className="surface-muted mt-8 p-5">
              <p className="metric-label">Approach</p>
              <p className="mt-3 text-base leading-8 text-foreground">
                I like work that connects research quality, usable interfaces, and dependable delivery.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.65,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="surface p-7 sm:p-8">
              <div className="space-y-5 leading-8 text-muted-foreground">
              {selfData.about.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-sm sm:text-base"
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.45,
                    delay: 0.25 + index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  {paragraph}
                </motion.p>
              ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`https://www.google.com/maps/place/${selfData.current_location.city}+${selfData.current_location.state}+${selfData.current_location.country}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-chip hover:text-white"
                >
                  <LuMapPinned className="h-4 w-4 text-primary" />
                  {selfData.current_location.city}, {selfData.current_location.state}
                </Link>
                <span className="info-chip">{selfData.jobTitle}</span>
                <span className="info-chip">{selfData.workFor}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
