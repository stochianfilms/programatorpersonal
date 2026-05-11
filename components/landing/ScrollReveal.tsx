"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const tag = () => {
      document.querySelectorAll("section.section .container > *").forEach((el) => {
        if (!el.hasAttribute("data-rv")) el.setAttribute("data-rv", "");
      });
    };

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("rv-in");
            obs.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    const observeAll = () => {
      document.querySelectorAll("[data-rv]:not(.rv-in)").forEach((el) => obs.observe(el));
    };

    const kick = () => {
      tag();
      observeAll();
    };

    const timers = [
      window.setTimeout(kick, 200),
      window.setTimeout(kick, 800),
      window.setTimeout(kick, 1800),
    ];
    return () => {
      timers.forEach(window.clearTimeout);
      obs.disconnect();
    };
  }, []);

  return null;
}
