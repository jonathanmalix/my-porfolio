import { lazy, Suspense, useState } from "react";
import Nav from "./Nav";
import useLockBodyScroll from "../hooks/useLockBodyScroll";
import heroVideo from "../assets/videos/casual-look.mp4";
import heroPoster from "../assets/images/hero-poster.png";

// Both modals pull in their own video/content, so they're only fetched
// once the visitor actually asks to see them.
const ReelModal = lazy(() => import("./modals/ReelModal"));
const CVModal = lazy(() => import("./modals/CVModal"));

export default function Hero() {
  const [showReel, setShowReel] = useState(false);
  const [showCV, setShowCV] = useState(false);
  useLockBodyScroll(showReel || showCV);

  return (
    <section className="hero" id="home">
      <video autoPlay muted loop playsInline preload="auto" poster={heroPoster}>
        <source src={heroVideo} type="video/mp4" />
      </video>
      <Nav />
      <div className="hero-content">
        <div className="hero-eyebrow">Creativity & Design Without Limits</div>
        <h1 className="display">
          The <em>Creative</em>
          <br />
          Web Developer
        </h1>
        <p>
          Turning your bold ideas into high-energy action with seamless digital
          connectivity that makes every experience unforgettable!
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => setShowCV(true)}>
            LEARN MORE
          </button>
          <button className="hero-play" onClick={() => setShowReel(true)}>
            <span className="ring">▶</span>
            Watch the reel
          </button>
        </div>
      </div>
      <div className="hero-scroll">
        <span className="stem"></span>
        <span className="hero-text">JONATHAN G. MALICAY</span>
        <span className="stem stem-inverted"></span>
      </div>

      <Suspense fallback={null}>
        {showReel && <ReelModal onClose={() => setShowReel(false)} />}
        {showCV && <CVModal onClose={() => setShowCV(false)} />}
      </Suspense>
    </section>
  );
}
