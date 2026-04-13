"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { RiMenu4Fill, RiCloseLargeFill } from "react-icons/ri";
import { Button } from "../ui/button";
import { selfData } from "@/constant";
import { mono } from "@/app/fonts";

const mainLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#project", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const isResumePage = pathname === "/resume";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Optimize state updates to avoid unnecessary re-renders
      if (currentScrollY > 100 && !isScrolled) {
        setIsScrolled(true);
      } else if (currentScrollY <= 100 && isScrolled) {
        setIsScrolled(false);
      }

      if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
        if (!isVisible) setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        if (isVisible) {
          setIsVisible(false);
          setIsMenuOpen(false);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled, isVisible]);

  return (
    <nav
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled ? "px-3 sm:px-4" : "px-3 sm:px-4"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 backdrop-blur-xl transition-all duration-300 sm:px-6 ${
          isScrolled ? "shadow-lg" : "shadow-none"
        }`}
        style={{
          background: "hsl(var(--glass-bg-light))",
          borderColor: "hsl(var(--glass-border))",
        }}
      >
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">
            SP
          </div>
          <div className="leading-none">
            <span className="font-inter block text-lg font-semibold tracking-tight text-white sm:text-xl">
              {selfData.name}
            </span>
            <span className={`${mono.className} hidden text-[0.72rem] uppercase tracking-[0.24em] text-muted-foreground sm:block`}>
              AI / ML Portfolio
            </span>
          </div>
        </Link>

        {!isResumePage && (
          <div className="hidden items-center gap-6 lg:flex">
            {mainLinks.map((link) => (
              <a key={link.href} href={link.href} className="anchor-link">
                {link.label}
              </a>
            ))}
          </div>
        )}

        <div className="hidden items-center gap-3 sm:flex">
          {!isResumePage && (
            <Button variant="ghost" asChild className="rounded-full px-4 text-sm">
              <a href="#contact">Hire Me</a>
            </Button>
          )}
          <Button
            variant={isResumePage ? "default" : "outline"}
            asChild
            className="rounded-full px-5"
          >
            {isResumePage ? (
              <a href="/docs/Sidhartha_Pulluri_Resume.pdf" download="Sidhartha_Pulluri_Resume.pdf">
                Download Resume
              </a>
            ) : (
              <Link href="/resume">Resume</Link>
            )}
          </Button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden rounded-full border border-white/10 p-2 text-foreground transition hover:bg-white/5"
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <RiCloseLargeFill size={18} /> : <RiMenu4Fill size={18} />}
        </button>
      </div>

      <div
        className={`mx-auto mt-3 max-w-6xl overflow-hidden rounded-[1.5rem] border backdrop-blur-xl transition-all duration-300 sm:hidden ${
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
        style={{
          background: "hsl(var(--glass-bg-light))",
          borderColor: isMenuOpen ? "hsl(var(--glass-border))" : "transparent",
        }}
      >
        <div className="space-y-2 px-4 py-4">
          {!isResumePage &&
            mainLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-xl px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          {!isResumePage && (
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-xl px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-white"
            >
              Hire Me
            </a>
          )}
          {isResumePage ? (
            <a
              href="/docs/Sidhartha_Pulluri_Resume.pdf"
              download="Sidhartha_Pulluri_Resume.pdf"
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-xl bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
            >
              Download Resume
            </a>
          ) : (
            <Link
              href="/resume"
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-xl bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
            >
              View Resume
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
