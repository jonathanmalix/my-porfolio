import LegalModal from "./LegalModal";

export default function CareersModal({ onClose }) {
  return (
    <LegalModal eyebrow="Join The Studio" title="Careers" onClose={onClose}>
      <p>
        There are no open roles listed at the moment, but collaborations and freelance
        partnerships are always welcome.
      </p>

      <h4>Areas Of Interest</h4>
      <ul>
        <li>Full-stack web development</li>
        <li>QGIS &amp; spatial data mapping</li>
        <li>Power BI dashboard design</li>
      </ul>

      <h4>Get In Touch</h4>
      <p>
        If you'd like to collaborate or think there's a fit, reach out through the
        contact section with a short introduction and your portfolio.
      </p>
    </LegalModal>
  );
}
