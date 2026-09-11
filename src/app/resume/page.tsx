import { Navbar, Footer } from "@/components/common";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";

const PDF_URL = "/docs/Sidhartha_Pulluri_Resume.pdf";
const WORD_URL = "/docs/Sidhartha_Pulluri_Resume.docx";

export default function Resume() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main-content" className="page-shell py-14 sm:py-20">
        <div className="mb-10 flex flex-col gap-7">
          <div>
            <p className="eyebrow mb-5">Experience & projects</p>
            <h1 className="section-title mb-4">My résumé.</h1>
            <p className="section-lead">My education, applied AI research, and latest web and Android projects, together in two pages.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={PDF_URL} download="Sidhartha_Pulluri_Resume.pdf" className="primary-action">Download PDF <FiDownload aria-hidden="true" /></a>
            <a href={WORD_URL} download="Sidhartha_Pulluri_Resume.docx" className="secondary-action">Download Word <FiDownload aria-hidden="true" /></a>
            <a href={PDF_URL} target="_blank" rel="noopener noreferrer" className="secondary-action">Open PDF <FiArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border bg-white p-2 sm:p-4">
          <iframe src={`${PDF_URL}#view=FitH`} title="Sidhartha Pulluri résumé PDF" className="h-[78vh] min-h-[560px] w-full border-0 bg-white" />
        </div>
        <p className="mt-4 text-sm text-muted-foreground">If the preview is unavailable on your device, use Open PDF or download a copy above.</p>
      </main>
      <Footer />
    </div>
  );
}
