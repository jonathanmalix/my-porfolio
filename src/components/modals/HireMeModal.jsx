import { useRef, useState } from "react";
import { RECIPIENT_EMAIL } from "../../config/email";

function makeCaptcha() {
  const a = 1 + Math.floor(Math.random() * 9);
  const b = 1 + Math.floor(Math.random() * 9);
  return { a, b, answer: a + b };
}

export default function HireMeModal({ onClose }) {
  const [fields, setFields] = useState({ name: "", email: "", subject: "", message: "" });
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [stage, setStage] = useState("form"); // form -> verify -> sending -> done
  const [captcha, setCaptcha] = useState(makeCaptcha);
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [status, setStatus] = useState(null); // {type:'ok'|'err', text}
  const fileInputRef = useRef(null);

  function update(key, value) {
    setFields((f) => ({ ...f, [key]: value }));
  }

  function validate() {
    const e = {};
    if (!fields.name.trim()) e.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = "Please enter a valid email address";
    if (fields.subject.trim().length < 5) e.subject = "Subject must be at least 5 characters";
    if (fields.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleFile(evt) {
    const f = evt.target.files && evt.target.files[0];
    if (f && f.size > 8 * 1024 * 1024) {
      setErrors((er) => ({ ...er, file: "File must be under 8MB" }));
      setFile(null);
      evt.target.value = "";
      return;
    }
    setErrors((er) => ({ ...er, file: undefined }));
    setFile(f || null);
  }

  function goToVerify(evt) {
    evt.preventDefault();
    if (!validate()) return;
    setCaptcha(makeCaptcha());
    setCaptchaAnswer("");
    setCaptchaChecked(false);
    setCaptchaError("");
    setStage("verify");
  }

  async function handleVerifiedSend() {
    if (!captchaChecked) {
      setCaptchaError("Please confirm you're not a robot");
      return;
    }
    if (parseInt(captchaAnswer, 10) !== captcha.answer) {
      setCaptchaError("That answer isn't quite right, please try again");
      setCaptcha(makeCaptcha());
      setCaptchaAnswer("");
      return;
    }
    if (!RECIPIENT_EMAIL) {
      setStatus({ type: "err", text: "Recipient email isn't configured (see src/config/email.js)." });
      return;
    }

    setStage("sending");
    setStatus({ type: "sending", text: "Sending your message…" });

    try {
      const fd = new FormData();
      fd.append("name", fields.name);
      fd.append("email", fields.email);
      fd.append("subject", fields.subject);
      fd.append("message", fields.message);
      fd.append("_subject", `Hire Me — ${fields.subject}`);
      fd.append("_captcha", "false"); // we run our own human check above
      if (file) fd.append("attachment", file);

      // FormSubmit relays the form to RECIPIENT_EMAIL without needing a custom
      // backend. The first submission to a new address requires a one-time
      // confirmation click from that inbox before mail starts flowing.
      //
      // NOTE: file attachments are only reliably relayed through FormSubmit's
      // standard multipart endpoint (the /ajax/ variant is documented for
      // plain fields only), so we post the FormData straight to it via fetch —
      // this still avoids a page navigation since we never do a real <form>
      // submit, we just await the response and check res.ok.
      const res = await fetch(`https://formsubmit.co/${encodeURIComponent(RECIPIENT_EMAIL)}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus({ type: "ok", text: "Message sent — thanks for reaching out! I'll get back to you soon." });
      setStage("done");
    } catch {
      setStatus({
        type: "err",
        text: "Something went wrong sending the message. You can also email me directly instead.",
      });
      setStage("verify");
    }
  }

  return (
    <div className="hire-overlay">
      <div className="hire-modal">
        <button className="hire-modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        {stage === "form" && (
          <>
            <h3 className="display">Hire Me</h3>
            <p className="hire-modal-sub">Tell me a bit about your project and I'll get back to you shortly.</p>

            <form onSubmit={goToVerify} noValidate>
              <div className="form-group">
                <label>
                  Name<span className="req">*</span>
                </label>
                <input
                  className={"form-input" + (errors.name ? " has-error" : "")}
                  type="text"
                  value={fields.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Your full name"
                />
                {errors.name && <div className="form-error">{errors.name}</div>}
              </div>

              <div className="form-group">
                <label>
                  Email<span className="req">*</span>
                </label>
                <input
                  className={"form-input" + (errors.email ? " has-error" : "")}
                  type="email"
                  value={fields.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="you@example.com"
                />
                {errors.email && <div className="form-error">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label>
                  Subject<span className="req">*</span>
                </label>
                <input
                  className={"form-input" + (errors.subject ? " has-error" : "")}
                  type="text"
                  value={fields.subject}
                  onChange={(e) => update("subject", e.target.value)}
                  placeholder="What's this about?"
                />
                {errors.subject && <div className="form-error">{errors.subject}</div>}
              </div>

              <div className="form-group">
                <label>
                  Message<span className="req">*</span>
                </label>
                <textarea
                  className={"form-textarea" + (errors.message ? " has-error" : "")}
                  value={fields.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Tell me about your project…"
                />
                {errors.message && <div className="form-error">{errors.message}</div>}
              </div>

              <div className="form-group">
                <label>
                  Attachment{" "}
                  <span style={{ color: "var(--ink-faint)", textTransform: "none", letterSpacing: 0 }}>
                    (optional)
                  </span>
                </label>
                <div className="form-file">
                  <button
                    type="button"
                    className="form-file-btn"
                    onClick={() => fileInputRef.current && fileInputRef.current.click()}
                  >
                    CHOOSE FILE
                  </button>
                  <span className="form-file-name">{file ? file.name : "No file selected"}</span>
                </div>
                <input ref={fileInputRef} type="file" style={{ display: "none" }} onChange={handleFile} />
                {errors.file && <div className="form-error">{errors.file}</div>}
                <div className="form-hint">PDF, image, or doc up to 8MB.</div>
              </div>

              <div className="hire-actions">
                <button type="submit" className="btn-primary">
                  SEND MESSAGE
                </button>
                <button type="button" className="btn-outline" onClick={onClose}>
                  CANCEL
                </button>
              </div>
            </form>
          </>
        )}

        {(stage === "verify" || stage === "sending") && (
          <>
            <h3 className="display">Security Check</h3>
            <p className="hire-modal-sub">One quick step before your message is sent.</p>

            <div className="captcha-box">
              <div className="captcha-row">
                <input
                  type="checkbox"
                  id="robot-check"
                  checked={captchaChecked}
                  disabled={stage === "sending"}
                  onChange={(e) => setCaptchaChecked(e.target.checked)}
                />
                <span>I'm not a robot</span>
              </div>
              <div className="captcha-challenge">
                <span className="q">
                  {captcha.a} + {captcha.b} = ?
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={captchaAnswer}
                  disabled={stage === "sending"}
                  onChange={(e) => setCaptchaAnswer(e.target.value.replace(/[^0-9-]/g, ""))}
                  placeholder="Answer"
                />
              </div>
              {captchaError && <div className="form-error">{captchaError}</div>}
            </div>

            {status && <div className={"send-status " + status.type}>{status.text}</div>}

            <div className="hire-actions">
              <button
                type="button"
                className="btn-primary"
                onClick={handleVerifiedSend}
                disabled={stage === "sending"}
              >
                {stage === "sending" ? "SENDING…" : "VERIFY & SEND"}
              </button>
              <button
                type="button"
                className="btn-outline"
                onClick={() => setStage("form")}
                disabled={stage === "sending"}
              >
                BACK
              </button>
            </div>
          </>
        )}

        {stage === "done" && status && (
          <div className={"send-status " + status.type} style={{ marginTop: 6 }}>
            {status.text}
          </div>
        )}
      </div>
    </div>
  );
}
