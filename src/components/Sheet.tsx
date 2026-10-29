import { useEffect, useRef } from 'react';
import type { Item } from '../data';

interface SheetProps {
  item: Item;
  onClose: () => void;
}

/** Full detail view for a project or job, opened with the "Open" button. */
export function Sheet({ item, onClose }: SheetProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
      // wait a frame so the page behind is no longer inert
      requestAnimationFrame(() => previous?.focus({ preventScroll: true }));
    };
  }, [onClose]);

  return (
    <div
      className="sheet-backdrop fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-sm sm:p-8"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-title"
        className="sheet-panel relative grid max-h-[92dvh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0c1019] shadow-2xl md:grid-cols-[1.15fr_1fr]"
      >
        {item.image && (
          <div className="bg-black">
            <img
              src={item.image}
              alt={item.title}
              className="h-full max-h-[45dvh] w-full object-cover md:max-h-none"
              style={{ objectPosition: item.imagePosition ?? 'center' }}
            />
          </div>
        )}
        <div className="p-6 pt-16 sm:p-8 sm:pt-16">
          <p className="accent-text text-sm font-medium uppercase tracking-[0.18em]">{item.kicker}</p>
          <h2 id="sheet-title" className="mt-2 text-3xl font-semibold leading-tight text-balance text-white">
            {item.title}
          </h2>
          {item.tags && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <li key={tag} className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/85">
                  {tag}
                </li>
              ))}
            </ul>
          )}
          {item.points && (
            <ul className="mt-6 space-y-4">
              {item.points.map((point) => (
                <li key={point} className="flex gap-3 leading-relaxed text-white/80">
                  <span className="accent-dot mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-black/80 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
        >
          <span className="h-4 w-4 rounded-full border-2 border-white" aria-hidden="true" />
          Back
        </button>
      </div>
    </div>
  );
}
