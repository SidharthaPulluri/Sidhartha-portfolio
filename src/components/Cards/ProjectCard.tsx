import { FiActivity, FiArrowUpRight, FiBox, FiCode, FiFileText, FiGrid, FiHeadphones, FiHeart, FiMusic, FiPlay, FiTrendingUp } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";

interface ProjectCardProps {
  index: number; title: string; desc: string; impact?: string;
  github?: string; demo?: string; paper?: string; tech: string[];
}

function coverFor(title: string) {
  if (title.startsWith("Medico")) return {brand:"Medico", label:"HEALTHCARE NAVIGATION", bg:"#e4eee7", ink:"#275541", Icon:FiActivity};
  if (title.startsWith("First Move")) return {brand:"First Move", label:"A MORE PERSONAL INVITATION", bg:"#f4e5ed", ink:"#7b3a60", Icon:FiHeart};
  if (title.startsWith("TuneVault")) return {brand:"TuneVault", label:"YOUR MUSIC. OFFLINE.", bg:"#f7eadb", ink:"#854f26", Icon:FiMusic};
  if (title.startsWith("Nestly")) return {brand:"Nestly", label:"A PLACE FOR EVERYTHING", bg:"#ebe7da", ink:"#6a5d32", Icon:FiBox};
  if (title.startsWith("Returnly")) return {brand:"Returnly", label:"HELP LOST THINGS GET HOME", bg:"#e4ecf7", ink:"#34578c", Icon:FiBox};
  if (title.includes("Visualisation")) return {brand:"Data, made clear.", label:"RULE-BASED ANALYTICS", bg:"#e7e5f5", ink:"#53467f", Icon:FiTrendingUp};
  if (title.startsWith("Sidhartha Utilities")) return {brand:"Utilities", label:"TOOLS FOR EVERYDAY WORK", bg:"#dfeeee", ink:"#2f6664", Icon:FiGrid};
  if (title.includes("YouTube")) return {brand:title.includes("Remote") ? "Shorts / Remote" : "Story → Video", label:"CONTENT & AUTOMATION", bg:"#f4e6df", ink:"#854a37", Icon:FiPlay};
  if (title.includes("Medicinal") || title.includes("Herb")) return {brand:title.includes("Medicinal") ? "BiFPNet" : "Herb Research", label:"COMPUTER VISION & DATA", bg:"#e5eddf", ink:"#4b643d", Icon:FiFileText};
  if (title.includes("TTS")) return {brand:"Stories, spoken.", label:"AUDIO AUTOMATION", bg:"#e5edf2", ink:"#3d5f75", Icon:FiHeadphones};
  return {brand:"Conversational AI", label:"LANGUAGE & INTELLIGENCE", bg:"#eae7f0", ink:"#605276", Icon:FiCode};
}

export const ProjectCard = ({index,title,desc,impact,github,demo,paper,tech}: ProjectCardProps) => {
  const cover = coverFor(title);
  return <article className="work-card">
    <div className="work-cover" style={{background:cover.bg,color:cover.ink}} aria-hidden="true">
      <div><p className="mb-4 text-[0.6rem] font-semibold tracking-[.16em]">{cover.label}</p><p className="work-brand">{cover.brand}</p></div>
      <span className="work-symbol"><cover.Icon /></span>
    </div>
    <div className="work-content">
      <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground"><span>{String(index+1).padStart(2,"0")} / PROJECT</span><span>{demo ? "Live website" : paper ? "Published research" : "Code & experiments"}</span></div>
      <h3 className="text-xl font-semibold leading-snug tracking-tight sm:text-2xl">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{desc}</p>
      <div className="work-tags">{tech.map(item => <span key={item}>{item}</span>)}</div>
      {impact && <details className="my-5 text-sm"><summary className="cursor-pointer py-2 font-medium text-muted-foreground">More about this project</summary><p className="mt-2 border-l-2 border-primary/20 pl-4 text-sm leading-7 text-muted-foreground">{impact}</p></details>}
      <div className="work-actions">
        {demo ? <a href={demo} target="_blank" rel="noopener noreferrer" className="text-link" aria-label={`Visit ${title} website`}>Visit website <FiArrowUpRight aria-hidden="true" /></a> : paper ? <a href={paper} target="_blank" rel="noopener noreferrer" className="text-link">Read the paper <FiArrowUpRight aria-hidden="true" /></a> : <span className="text-xs text-muted-foreground">Research & development</span>}
        {github && <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 text-muted-foreground hover:text-primary" aria-label={`View ${title} on GitHub`}><FaGithub aria-hidden="true" /> Source code</a>}
      </div>
    </div>
  </article>;
};
