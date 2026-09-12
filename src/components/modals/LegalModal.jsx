export default function LegalModal({ eyebrow, title, onClose, children }) {
  return (
    <div className="legal-overlay">
      <div className="legal-modal">
        <div className="legal-body">
          <div className="legal-eyebrow">{eyebrow}</div>
          <h3 className="display">{title}</h3>
          {children}
        </div>
        <div className="legal-return-wrap">
          <button className="legal-return" onClick={onClose}>
            Return
          </button>
        </div>
      </div>
    </div>
  );
}
