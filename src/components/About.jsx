import { lazy, Suspense, useState } from "react";
import useLockBodyScroll from "../hooks/useLockBodyScroll";
import aboutMeImg from "../assets/images/about-me.png";
import cvFile from "../assets/documents/MY_CV.pdf";

const HireMeModal = lazy(() => import("./modals/HireMeModal"));

export default function About() {
  const [showHire, setShowHire] = useState(false);
  useLockBodyScroll(showHire);

  function downloadCV() {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "MY_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section className="section about-section" id="about">
      <div className="wrap about-grid">
        <div className="about-media">
          <div className="about-frame"></div>
          <img src={aboutMeImg} alt="Jonathan Malicay" width="520" height="650" />
        </div>
        <div className="about-copy">
          <div className="section-eyebrow">Get To Know</div>
          <h2 className="display">About Me</h2>
          <p>
            A computer engineering expert crafting high-performance websites, advanced
            QGIS spatial mapping, and dynamic Power BI dashboards to transform complex
            data into actionable, visual business intelligence.
          </p>
          <p>Driving innovation through seamless AI integration and automation.</p>
          <div className="about-actions">
            <button className="btn-primary" onClick={() => setShowHire(true)}>
              HIRE ME
            </button>
            <button className="btn-outline" onClick={downloadCV}>
              DOWNLOAD CV
            </button>
          </div>
        </div>
      </div>

      <Suspense fallback={null}>
        {showHire && <HireMeModal onClose={() => setShowHire(false)} />}
      </Suspense>
    </section>
  );
}
