import LegalModal from "./LegalModal";

export default function TermsModal({ onClose }) {
  return (
    <LegalModal eyebrow="Legal" title="Terms of Service" onClose={onClose}>
      <p>
        These terms govern your use of this site and any services booked or discussed
        through it. By browsing this site or getting in touch, you agree to the points
        below.
      </p>

      <h4>Use of the Site</h4>
      <ul>
        <li>Content on this site is provided for informational purposes about services offered.</li>
        <li>You agree not to misuse, scrape, or attempt to disrupt the site.</li>
      </ul>

      <h4>Project Engagements</h4>
      <ul>
        <li>Scope, timelines, and pricing for any work are agreed upon separately in writing.</li>
        <li>Deliverables remain the property of the client upon full payment, unless otherwise agreed.</li>
      </ul>

      <h4>Liability</h4>
      <p>
        Services are provided on a best-effort basis. Liability for indirect or
        consequential damages is limited to the extent permitted by law.
      </p>
    </LegalModal>
  );
}
