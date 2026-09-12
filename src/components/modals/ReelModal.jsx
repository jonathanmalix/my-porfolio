import goalVideo from "../../assets/videos/goal.mp4";

export default function ReelModal({ onClose }) {
  return (
    <div className="reel-overlay">
      <div className="reel-modal">
        <video src={goalVideo} autoPlay loop playsInline />
        <div className="reel-modal-label">
          Goal: <em>Synergize with AI and the People.</em>
        </div>
        <button className="reel-return" onClick={onClose}>
          Return
        </button>
      </div>
    </div>
  );
}
