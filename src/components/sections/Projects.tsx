"use client";

import { useState } from "react";
import { ProjectCard } from "../Cards/ProjectCard";
import { projectsData } from "@/constant/projects";

const filters = ["All work", "Live websites", "Research & code"] as const;
const orderedProjects = [...projectsData].sort((a,b) => Number(Boolean(b.demo))-Number(Boolean(a.demo)));

export const Projects = () => {
  const [filter, setFilter] = useState<typeof filters[number]>("All work");
  const visible = orderedProjects.filter(project => filter === "All work" || (filter === "Live websites" ? Boolean(project.demo) : !project.demo));
  return <section id="project" className="section-shell">
    <div className="page-shell">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div><span className="eyebrow">Selected work</span><h2 className="section-title mt-4">Built to be used.</h2></div>
        <p className="max-w-sm text-sm leading-7 text-muted-foreground">From AI experiments to everyday tools.<br />A collection of things I&apos;ve brought to life.</p>
      </div>
      <div className="mb-8 mt-9 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map(item => <button key={item} type="button" className="filter-button" aria-pressed={filter === item} onClick={() => setFilter(item)}>{item} <span className="ml-1 text-xs opacity-80">{item === "All work" ? projectsData.length : projectsData.filter(p => item === "Live websites" ? p.demo : !p.demo).length}</span></button>)}
      </div>
      <p className="sr-only" role="status">Showing {visible.length} projects</p>
      <div className="project-gallery">{visible.map(project => <ProjectCard key={project.name} index={orderedProjects.indexOf(project)} title={project.name} desc={project.description} impact={project.impact} github={project.github_link} demo={project.demo} paper={project.paper_link} tech={project.tech} />)}</div>
    </div>
  </section>;
};
