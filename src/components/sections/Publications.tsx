"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

import { publicationsData } from "@/constant";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function Publications() {
  return (
    <section id="publications" className="section-shell">
      <div className="page-shell">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 max-w-3xl"
        >
          <span className="eyebrow">Publications</span>
          <h2 className="section-title mt-5">Research output that extends beyond prototypes into published work.</h2>
          <p className="section-lead mt-5">
            I value projects that can stand up as both working systems and credible research. This publication is the
            strongest example of that bridge in my portfolio.
          </p>
        </motion.div>

        <div className="space-y-5">
          {publicationsData.map((publication, index) => (
            <motion.article
              key={publication.doi}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="surface p-6 sm:p-7"
            >
              <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="metric-label">Publication {String(index + 1).padStart(2, "0")}</span>
                    <span className="h-px flex-1 bg-white/10" />
                  </div>

                  <h3 className="text-2xl font-semibold leading-tight text-white sm:text-[1.8rem]">
                    {publication.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {publication.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="rounded-full border-white/10 bg-white/[0.03] px-3 py-1 text-[0.72rem] uppercase tracking-[0.16em] text-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                    {publication.summary}
                  </p>

                  <div className="surface-muted p-4">
                    <p className="metric-label">My contribution</p>
                    <p className="mt-2 text-sm leading-7 text-foreground sm:text-[0.98rem]">
                      {publication.contribution}
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="surface-muted p-5">
                    <p className="metric-label">Journal</p>
                    <p className="mt-2 text-base font-medium text-foreground">{publication.journal}</p>

                    <div className="section-divider my-4" />

                    <p className="metric-label">Publication date</p>
                    <p className="mt-2 text-sm text-foreground sm:text-base">{publication.published_on}</p>

                    <div className="section-divider my-4" />

                    <p className="metric-label">DOI</p>
                    <p className="mt-2 break-all text-sm text-foreground sm:text-base">{publication.doi}</p>
                  </div>

                  <Button size="sm" className="rounded-full px-4" asChild>
                    <Link href={publication.url} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink className="mr-2 h-4 w-4" />
                      Read Paper
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
