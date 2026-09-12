import aboutMeImg from "../../assets/images/about-me.png";

export default function CVModal({ onClose }) {
  return (
    <div className="cv-overlay">
      <div className="cv-modal">
        <button className="cv-return" onClick={onClose}>
          Return
        </button>
        <div className="cv-body">
          <div className="cv-content">
            <div className="cv-photo-col">
              <div className="cv-photo">
                <img src={aboutMeImg} alt="Jonathan Malicay" />
              </div>
              <div className="cv-quote">
                "Driving innovation through seamless AI integration and automation."
              </div>
            </div>

            <div className="cv-info">
              <h3 className="cv-name display">Jonathan Malicay</h3>
              <div className="cv-role">Web Developer &amp; Computer Engineer</div>
              <div className="cv-contact">
                jonathan.malicay071717@gmail.com &nbsp;&middot;&nbsp; Valencia City, Bukidnon,
                Philippines &nbsp;&middot;&nbsp;
              </div>

              <div className="cv-section">
                <h4>Profile</h4>
                <p>
                  Computer engineering professional crafting high-performance websites,
                  advanced QGIS spatial mapping, and dynamic Power BI dashboards that turn
                  complex data into actionable, visual business intelligence. Focused on
                  driving innovation through seamless AI integration and automation.
                </p>
              </div>

              <div className="cv-section">
                <h4>Core Skills</h4>
                <ul className="cv-skills">
                  <li>
                    <strong>Full-Stack Development</strong> — JavaScript / React, HTML5,
                    CSS3, Node.js, REST APIs
                  </li>
                  <li>
                    <strong>GIS &amp; Mapping</strong> — QGIS, spatial data modeling,
                    cartographic visualization
                  </li>
                  <li>
                    <strong>Business Intelligence</strong> — Power BI dashboards, DAX, data
                    modeling
                  </li>
                  <li>
                    <strong>Automation &amp; AI</strong> — Workflow automation, AI-assisted
                    tooling and integration
                  </li>
                </ul>
              </div>

              <div className="cv-section">
                <h4>Experience</h4>

                <div className="cv-job">
                  <div className="cv-job-head">
                    <span>Full-Stack Web Developer — Freelance / Contract</span>
                    <span className="cv-job-date">2022 — Present</span>
                  </div>
                  <ul>
                    <li>
                      Designed and built responsive, high-performance websites and web
                      applications for small business and portfolio clients.
                    </li>
                    <li>
                      Engineered scalable front-end interfaces and integrated
                      database-backed back-end systems.
                    </li>
                    <li>
                      Collaborated directly with clients to translate goals into
                      functional, polished digital products.
                    </li>
                  </ul>
                </div>

                <div className="cv-job">
                  <div className="cv-job-head">
                    <span>GIS &amp; Spatial Data Specialist</span>
                    <span className="cv-job-date">2021 — Present</span>
                  </div>
                  <ul>
                    <li>
                      Produced high-precision spatial maps and geographic data models
                      using QGIS.
                    </li>
                    <li>
                      Delivered cartographic visualizations supporting territorial and
                      land-use analysis.
                    </li>
                  </ul>
                </div>

                <div className="cv-job">
                  <div className="cv-job-head">
                    <span>Power BI Developer</span>
                    <span className="cv-job-date">2021 — Present</span>
                  </div>
                  <ul>
                    <li>
                      Built interactive Power BI dashboards transforming raw operational
                      data into executive-ready reporting.
                    </li>
                    <li>
                      Developed scalable data models and DAX measures for recurring
                      business intelligence needs.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="cv-section">
                <h4>Education</h4>
                <p>BS in Computer Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
