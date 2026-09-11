import Link from "next/link";
import { Navbar, Footer } from "@/components/common";
export default function NotFound() {
  return <><Navbar /><main id="main-content" className="page-shell py-28 text-center"><span className="eyebrow">404 / Not found</span><h1 className="section-title mt-6">A small detour.</h1><p className="mx-auto mt-5 max-w-lg text-muted-foreground">This page doesn&apos;t exist. You can head back to the portfolio or explore my latest projects.</p><div className="mt-8 flex flex-wrap justify-center gap-4"><Link href="/" className="primary-action">Back to home</Link><Link href="/#project" className="secondary-action">Explore projects</Link></div></main><Footer /></>;
}
