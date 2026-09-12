import LegalModal from "./LegalModal";

export default function PrivacyModal({ onClose }) {
  return (
    <LegalModal eyebrow="Legal" title="Privacy Policy" onClose={onClose}>
      <p>
        Your privacy matters. This policy explains what information is collected through
        this site and how it's used.
      </p>

      <h4>Information Collected</h4>
      <ul>
        <li>Contact details you submit through forms, such as name, email, and message content.</li>
        <li>Basic usage data such as pages visited, for improving the site experience.</li>
      </ul>

      <h4>How It's Used</h4>
      <ul>
        <li>To respond to inquiries and discuss potential projects.</li>
        <li>To send occasional updates only if you've opted in via the newsletter form.</li>
      </ul>

      <h4>Your Choices</h4>
      <p>
        You may request that your information be corrected or deleted at any time by
        reaching out through the contact section.
      </p>
    </LegalModal>
  );
}
