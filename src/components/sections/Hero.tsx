import Link from "next/link";
import { FiActivity, FiArrowDown, FiArrowUpRight, FiMusic, FiPackage } from "react-icons/fi";
import { selfData } from "@/constant/self";

const builds = [
  { name: "Medico", detail: "A clearer path from symptoms to care.", href: "https://carematch-india.vercel.app", Icon: FiActivity, bg: "#e3f1e9", color: "#28624c" },
  { name: "Returnly", detail: "Lost things. A way back home.", href: "https://qr-returnly.vercel.app", Icon: FiPackage, bg: "#e5edf9", color: "#365d94" },
  { name: "TuneVault", detail: "Your music, wherever you are.", href: "https://tunevault-offline.vercel.app", Icon: FiMusic, bg: "#faeadc", color: "#905128" },
];

export const Hero = () => (
  <section id="top" className="hero">
    <div className="page-shell">
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <span className="eyebrow">AI engineer & curious builder</span>
          <h1 className="hero-title mt-7">A little research.<br /><em>A lot of building.</em></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
            I&apos;m <strong className="font-semibold text-foreground">{selfData.name}</strong>, a CS graduate student at UT Dallas. I turn models, experiments, and everyday problems into useful products.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#project" className="primary-action">Explore my work <FiArrowDown aria-hidden="true" /></a>
            <Link href="/resume" className="secondary-action">View resume <FiArrowUpRight aria-hidden="true" /></Link>
          </div>
          <p className="hero-note mt-6">Applied AI · Computer vision · Software that works</p>
        </div>
        <div className="build-board">
          <div className="relative mb-6 flex items-center justify-between">
            <span className="metric-label">From my workbench</span>
            <span className="rounded-full border border-primary/15 px-2.5 py-1 text-[0.65rem] font-semibold text-primary">IDEAS → PRODUCTS</span>
          </div>
          <div className="relative space-y-4">
            {builds.map(({name,detail,href,Icon,bg,color}) => <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="board-card" aria-label={`Visit ${name} website`}>
              <span className="board-icon" style={{background:bg,color}}><Icon aria-hidden="true" /></span>
              <span className="min-w-0 flex-1"><span className="block text-lg font-semibold tracking-tight">{name}</span><span className="mt-1 block text-xs leading-5 text-muted-foreground">{detail}</span></span>
              <FiArrowUpRight className="shrink-0 text-muted-foreground" aria-hidden="true" />
            </a>)}
          </div>
          <div className="relative mt-6 flex items-center gap-2 text-xs text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Small ideas. Real, working websites.</div>
        </div>
      </div>
      <div className="hero-meta">
        <p><span>Based in</span>Richardson, Texas</p>
        <p><span>Currently studying at</span>The University of Texas at Dallas</p>
        <p><span>At the intersection of</span>Research, engineering & product</p>
      </div>
    </div>
  </section>
);
