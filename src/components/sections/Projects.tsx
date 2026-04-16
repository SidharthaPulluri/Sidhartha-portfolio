"use client";

import { ProjectCard } from "../Cards";
import { projectsData } from "@/constant/";

export const Projects = () => {
  return (
    <section id="project" className="section-shell">
      <div className="page-shell">
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow">Projects</span>
          <h2 className="section-title mt-5">Selected work across AI systems, automation, and applied software.</h2>
          <p className="section-lead mt-5">
            These projects reflect how I approach end-to-end problem solving: understand the use case, build the
            model or workflow, validate it carefully, then shape it into something practical and usable.
          </p>
        </div>

        <div className="space-y-5">
          {projectsData.map((proj, index) => (
            <ProjectCard
              key={proj.name}
              index={index}
              title={proj.name}
              desc={proj.description}
              impact={proj.impact}
              github={proj.github_link}
              demo={proj.demo}
              paper={proj.paper_link}
              tech={proj.tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
