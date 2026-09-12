import IconFilm from "./icons/IconFilm";
import IconLens from "./icons/IconLens";
import IconThread from "./icons/IconThread";

const ITEMS = [
  {
    icon: <IconFilm />,
    n: "01",
    title: "PROGRAMMING",
    body: "Full-stack developer engineering robust web systems, high-performance desktop software, and scalable database architectures optimized for data integrity.",
  },
  {
    icon: <IconLens />,
    n: "02",
    title: "QGIS MAPPING",
    body: "GIS specialist engineering high-precision spatial maps, advanced geographic data models, and cartographic visualizations for insightful territorial analysis.",
  },
  {
    icon: <IconThread />,
    n: "03",
    title: "POWER BI DEVELOPER",
    body: "Power BI developer transforming raw data into interactive dashboards, high-impact executive presentations, and scalable business intelligence solutions.",
  },
];

export default function Cards() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section-head">
          <div className="section-eyebrow">What I Do</div>
          <h2 className="display">Web Design & Development</h2>
          <p>
            — Turning bold ideas into reality; every click builds a connection. —
            Engineering passion into impactful innovation.
          </p>
        </div>
        <div className="cards">
          {ITEMS.map((it, i) => (
            <div className="card" key={i}>
              <span className="num">{it.n}</span>
              <div className="icon">{it.icon}</div>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
