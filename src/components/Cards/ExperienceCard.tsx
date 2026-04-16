import { FC } from "react";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";

interface ExperienceCardProps {
  role: string;
  year: string;
  description: Array<string>;
  company: string;
  technologies: Array<string>;
  index?: number;
}

export const ExperienceCard: FC<ExperienceCardProps> = ({
  role,
  year,
  description,
  company,
  technologies,
  index = 0,
}) => {
  return (
    <motion.div
      key={index}
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative pl-8 sm:pl-10"
    >
      <span className="absolute left-0 top-7 h-3.5 w-3.5 rounded-full border-2 border-background bg-primary" />
      <article className="surface p-6 sm:p-7">
        <motion.div
          className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div>
            <p className="metric-label">{year}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{role}</h3>
            <p className="mt-1 text-base text-primary">{company}</p>
          </div>
          <span className="info-chip self-start">{technologies[0]}</span>
        </motion.div>

        <motion.ul
          className="mt-6 space-y-3"
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {description.map((point, pointIndex) => (
            <li key={pointIndex} className="flex items-start gap-3 text-sm leading-7 text-muted-foreground sm:text-[0.96rem]">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
              <span>{point}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          className="mt-6 flex flex-wrap gap-2"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="rounded-full border-white/10 bg-white/[0.03] px-3 py-1 text-[0.72rem] uppercase tracking-[0.16em] text-foreground"
            >
              {tech}
            </Badge>
          ))}
        </motion.div>
      </article>
    </motion.div>
  );
};
