"use client";

import { Navbar, Footer } from "@/components/common";
import {
  Hero,
  About,
  Skills,
  Experience,
  Publications,
  Projects,
  Contact,
} from "@/components/sections";
import { Background } from "@/components/common";

export default function Home() {
  return (
    <div className="site-frame min-h-screen">
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Publications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
