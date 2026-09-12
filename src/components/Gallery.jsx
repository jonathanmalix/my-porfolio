import { useState } from "react";
import programmingImg from "../assets/images/programming.png";
import mapImg from "../assets/images/map.png";
import dashboardImg from "../assets/images/dashboard.png";

const SHOTS = [
  { src: programmingImg, cap: "Web Development", w: 883, h: 973 },
  { src: mapImg, cap: "QGIS - Mapping", w: 968, h: 849 },
  { src: dashboardImg, cap: "POWER BI - Dashboard", w: 1200, h: 695 },
];

export default function Gallery() {
  const [active, setActive] = useState(0);

  return (
    <section className="section" id="gallery" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="gallery-head">
          <h2 className="display">Services</h2>
          <p>Web Development, QGIS Mapping, and POWER BI Dashboard Creation.</p>
        </div>
        <div className="gallery">
          {SHOTS.map((s, i) => (
            <figure key={i} onMouseEnter={() => setActive(i)}>
              <img src={s.src} alt={s.cap} width={s.w} height={s.h} loading="lazy" decoding="async" />
              <figcaption>{s.cap}</figcaption>
            </figure>
          ))}
        </div>
        <div className="dots">
          {SHOTS.map((_, i) => (
            <span key={i} className={i === active ? "on" : ""}></span>
          ))}
        </div>
      </div>
    </section>
  );
}
