import Link from "next/link";
import { FC } from "react";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  index: number;
  title: string;
  desc: string;
  impact?: string;
  github?: string;
  demo?: string;
  paper?: string;
  tech: string[];
}

export const ProjectCard: FC<ProjectCardProps> = ({
  index,
  title,
  desc,
  impact,
  github,
  demo,
  paper,
  tech,
}) => {
  const hasGithub = Boolean(github);
  const hasDemo = Boolean(demo);
  const hasPaper = Boolean(paper);

  return (
    <motion.div
      key={title}
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <article className="surface p-6 sm:p-7">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="metric-label">Project {String(index + 1).padStart(2, "0")}</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <h3 className="text-2xl font-semibold leading-tight text-white sm:text-[1.8rem]">
              {title}
            </h3>

            <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
              {desc}
            </p>

            {impact && (
              <div className="surface-muted p-4">
                <p className="metric-label">Project impact</p>
                <p className="mt-2 text-sm leading-7 text-foreground sm:text-[0.98rem]">
                  {impact}
                </p>
              </div>
            )}
          </div>

          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              {tech.map((techItem) => (
                <Badge
                  key={techItem}
                  variant="outline"
                  className="rounded-full border-white/10 bg-white/[0.03] px-3 py-1 text-[0.72rem] uppercase tracking-[0.16em] text-foreground"
                >
                  {techItem}
                </Badge>
              ))}
            </div>

            {(hasGithub || hasDemo || hasPaper) && (
              <div className="flex flex-wrap gap-3">
                {hasGithub && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full border-white/10 bg-white/5 px-4 hover:bg-white/10"
                    asChild
                  >
                    <a href={github} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="mr-2 h-4 w-4" />
                      Repository
                    </a>
                  </Button>
                )}
                {hasDemo && (
                  <Button size="sm" className="rounded-full px-4" asChild>
                    <Link href={demo!} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                )}
                {hasPaper && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full border-white/10 bg-white/5 px-4 hover:bg-white/10"
                    asChild
                  >
                    <Link href={paper!} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink className="mr-2 h-4 w-4" />
                      Research Paper
                    </Link>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </article>
    </motion.div>
  );
};
