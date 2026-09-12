import { useState } from "react";
import { NAV_ITEMS } from "../config/nav";
import useLockBodyScroll from "../hooks/useLockBodyScroll";

export default function Nav() {
  const [open, setOpen] = useState(false);
  useLockBodyScroll(open);

  return (
    <nav className="nav">
      <div className="logo">
        <span className="mark"></span>JONATHAN MALICAY
      </div>
      <div className="navlinks">
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
      <a href="#contact" className="nav-cta">
        CONTACT
      </a>
      <button
        className="burger"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {open && (
        <div className="mobile-menu">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
            CONTACT
          </a>
        </div>
      )}
    </nav>
  );
}
