'use client';

import { useEffect } from 'react';

/**
 * Mounts a global IntersectionObserver that adds `.is-visible` to any
 * element with a `[data-reveal]` attribute once it enters the viewport.
 * The CSS transition is defined in globals.css under the Scroll Reveal block.
 * Render this once in the root layout — it returns null.
 */
export function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.12 }
    );

    const attach = () => {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        if (!el.classList.contains('is-visible')) observer.observe(el);
      });
    };

    attach();

    // Pick up any elements added after first paint (e.g. hydration)
    const mutation = new MutationObserver(attach);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);

  return null;
}
