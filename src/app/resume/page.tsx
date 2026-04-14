import Link from "next/link";

import { nasalization } from "@/app/fonts";
import { Background, Footer, Navbar } from "@/components/common";
import { Button } from "@/components/ui/button";
import { resumeData } from "@/constant";
import { HiDownload, HiExternalLink } from "react-icons/hi";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm">
      <h2 className="text-lg font-semibold uppercase tracking-[0.22em] text-secondary">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-foreground sm:text-[0.98rem]">
        {children}
      </div>
    </section>
  );
}

export default function Resume() {
  const { basics } = resumeData;

  return (
    <div className={`min-h-screen selection:bg-primary/20 ${nasalization.className}`}>
      <Background />
      <Navbar />

      <main className="container mx-auto max-w-7xl px-4 pb-20 pt-32">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-secondary">Resume</p>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
              Repo-backed CV and portfolio summary
            </h1>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              This version is aligned to the shipped GitHub repositories and live
              portfolio projects instead of a static, outdated PDF-only copy.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button className="rounded-full px-5" asChild>
              <a href="/docs/Sidhartha_Pulluri_Resume.pdf" download="Sidhartha_Pulluri_Resume.pdf">
                <HiDownload className="h-4 w-4" />
                Download PDF
              </a>
            </Button>
            <Button variant="outline" className="rounded-full border-white/10 bg-white/5 px-5" asChild>
              <a href="/resume-source.html" target="_blank" rel="noopener noreferrer">
                <HiExternalLink className="h-4 w-4" />
                Open Resume Source
              </a>
            </Button>
            <Button variant="outline" className="rounded-full border-white/10 bg-white/5 px-5" asChild>
              <Link href={basics.github} target="_blank" rel="noopener noreferrer">
                <HiExternalLink className="h-4 w-4" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.9fr)]">
          <div className="space-y-6">
            <section className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/8 via-white/5 to-transparent p-6 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-8">
              <div className="flex flex-col gap-5 border-b border-white/10 pb-6">
                <div>
                  <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                    {basics.name}
                  </h2>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-secondary">
                    Generative AI / ML Engineer
                  </p>
                </div>
                <div className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                  <p>{basics.location}</p>
                  <p>{basics.phone}</p>
                  <p>{basics.email}</p>
                  <p className="break-all">{basics.portfolio}</p>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <Link href={basics.linkedin} className="underline decoration-white/20 underline-offset-4" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </Link>
                  <Link href={basics.github} className="underline decoration-white/20 underline-offset-4" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </Link>
                  <Link href={basics.portfolio} className="underline decoration-white/20 underline-offset-4" target="_blank" rel="noopener noreferrer">
                    Portfolio
                  </Link>
                </div>
              </div>
              <p className="mt-6 text-sm leading-8 text-foreground sm:text-[1rem]">
                {resumeData.summary}
              </p>
            </section>

            <Section title="Projects">
              {resumeData.projects.map((project) => (
                <article key={project.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.repo && (
                        <Link
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground transition hover:border-secondary/50 hover:text-white"
                        >
                          Repo
                        </Link>
                      )}
                      {project.demo && (
                        <Link
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground transition hover:border-secondary/50 hover:text-white"
                        >
                          Live
                        </Link>
                      )}
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-foreground">
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </Section>

            <Section title="Leadership">
              {resumeData.leadership.map((item) => (
                <article key={item.role}>
                  <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                  <p className="text-sm text-muted-foreground">{item.org}</p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-foreground">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </Section>
          </div>

          <div className="space-y-6">
            <Section title="Education">
              {resumeData.education.map((item) => (
                <article key={item.school}>
                  <h3 className="text-base font-semibold text-white">{item.school}</h3>
                  <p className="text-sm text-muted-foreground">{item.location}</p>
                  <p className="mt-2 text-sm text-foreground">{item.degree}</p>
                  <p className="text-sm text-muted-foreground">{item.details.join(" | ")}</p>
                  {item.coursework && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      Relevant Coursework: {item.coursework.join(", ")}
                    </p>
                  )}
                </article>
              ))}
            </Section>

            <Section title="Technical Skills">
              {resumeData.skillGroups.map((group) => (
                <article key={group.title}>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {group.items.join(", ")}
                  </p>
                </article>
              ))}
            </Section>

            <Section title="Publication">
              {resumeData.publications.map((item) => (
                <article key={item.title}>
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.venue}</p>
                </article>
              ))}
            </Section>

            <Section title="Certifications">
              <ul className="space-y-2 text-sm leading-7 text-foreground">
                {resumeData.certifications.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Additional Information">
              <ul className="space-y-2 text-sm leading-7 text-foreground">
                {resumeData.additionalInfo.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
