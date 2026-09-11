"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const links = [
  ["#project", "Work"], ["#about", "About"], ["#skills", "Skills"],
  ["#experience", "Experience"], ["#publications", "Research"], ["#contact", "Contact"],
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const sectionHref = (hash: string) => pathname === "/" ? hash : `/${hash}`;

  return (
    <header className="site-nav">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:p-3">Skip to content</a>
      <nav className="page-shell nav-inner" aria-label="Main navigation">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Sidhartha Pulluri home">
          <span className="brand-mark" aria-hidden="true">sp.</span>
          <span className="text-sm font-semibold tracking-tight sm:text-base">Sidhartha Pulluri<span className="text-primary">.</span></span>
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {links.map(([hash,label]) => <a key={hash} href={sectionHref(hash)} className="anchor-link">{label}</a>)}
        </div>
        <div className="flex items-center gap-3">
          <Link href="/resume" className="hidden min-h-10 items-center gap-2 rounded-lg border bg-white px-4 text-sm font-medium sm:inline-flex">Résumé <FiArrowUpRight aria-hidden="true" /></Link>
          <button type="button" className="flex h-11 w-11 items-center justify-center rounded-lg border lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <FiX size={21} /> : <FiMenu size={21} />}
          </button>
        </div>
      </nav>
      {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="page-shell border-t pb-5 pt-3 lg:hidden" onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}>
        <div className="grid grid-cols-2 gap-2">
          {links.map(([hash,label]) => <a key={hash} href={sectionHref(hash)} onClick={(event) => {
            setOpen(false);
            if (pathname === "/") {
              event.preventDefault();
              window.history.replaceState(window.history.state, "", hash);
              requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" }));
            }
          }} className="rounded-lg p-3 text-sm font-medium hover:bg-muted">{label}</a>)}
        </div>
        <Link href="/resume" onClick={() => setOpen(false)} className="primary-action mt-3 w-full">View résumé <FiArrowUpRight /></Link>
      </nav>}
    </header>
  );
};
