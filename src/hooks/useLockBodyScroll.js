import { useEffect } from "react";

/**
 * Locks page scroll while `locked` is true (used while any modal/menu
 * overlay is open) and always restores it on unmount.
 */
export default function useLockBodyScroll(locked) {
  useEffect(() => {
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [locked]);
}
