import { lazy, Suspense, useState } from "react";
import useLockBodyScroll from "../hooks/useLockBodyScroll";

const TermsModal = lazy(() => import("./modals/TermsModal"));
const PrivacyModal = lazy(() => import("./modals/PrivacyModal"));
const CareersModal = lazy(() => import("./modals/CareersModal"));

export default function Footer() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showCareers, setShowCareers] = useState(false);
  useLockBodyScroll(showTerms || showPrivacy || showCareers);

  return (
    <footer id="contact">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="logo">
              <span className="mark"></span>JONATHAN MALICAY
            </div>
            <p>
              A small creative studio built around one idea: direct the ordinary until it
              looks intentional.
            </p>
          </div>
          <div className="foot-col">
            <h4>Studio</h4>
            <ul>
              <li>
                <a href="#work">Story</a>
              </li>
              <li>
                <a href="#gallery">Reel</a>
              </li>
              <li>
                <a href="#services">Press</a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="#contact">Booking</a>
              </li>
              <li>
                <a href="#contact">Studio Visit</a>
              </li>
              <li>
                <a href="#contact">Socials</a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Stay In The Loop</h4>
            <p style={{ color: "var(--ink-dim)", fontSize: "14px", marginBottom: "4px" }}>
              Occasional notes on new work. No spam.
            </p>
            <form className="foot-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Jonathan Malicay. All rights reserved.</span>
          <div className="links">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowTerms(true);
              }}
            >
              Terms
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowPrivacy(true);
              }}
            >
              Privacy
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowCareers(true);
              }}
            >
              Careers
            </a>
          </div>
        </div>
      </div>

      <Suspense fallback={null}>
        {showTerms && <TermsModal onClose={() => setShowTerms(false)} />}
        {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
        {showCareers && <CareersModal onClose={() => setShowCareers(false)} />}
      </Suspense>
    </footer>
  );
}
