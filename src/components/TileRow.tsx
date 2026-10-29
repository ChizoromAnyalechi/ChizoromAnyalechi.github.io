import { useEffect, useRef, type CSSProperties, type KeyboardEvent } from 'react';
import type { Item } from '../data';
import { Icon } from './Icons';

interface TileRowProps {
  label: string;
  items: Item[];
  activeId: string;
  onSelect: (id: string) => void;
  onActivate: (id: string) => void;
}

export function TileRow({ label, items, activeId, onSelect, onActivate }: TileRowProps) {
  const refs = useRef(new Map<string, HTMLButtonElement>());

  // Keep the selected tile in view when the row scrolls (phones, keyboard).
  useEffect(() => {
    refs.current.get(activeId)?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
  }, [activeId]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const index = items.findIndex((item) => item.id === activeId);
    let next: number;
    if (e.key === 'ArrowRight') next = Math.min(items.length - 1, index + 1);
    else if (e.key === 'ArrowLeft') next = Math.max(0, index - 1);
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = items.length - 1;
    else return;
    e.preventDefault();
    const id = items[next].id;
    onSelect(id);
    refs.current.get(id)?.focus({ preventScroll: true });
  };

  return (
    <div role="group" aria-label={label} className="tile-row gutter-x flex items-center gap-3 overflow-x-auto sm:gap-4" onKeyDown={onKeyDown}>
      {items.map((item, i) => {
        const active = item.id === activeId;
        return (
          <div
            key={item.id}
            className={`tile-wrap${active ? ' is-active' : ''}`}
            style={{ '--i': i } as CSSProperties}
          >
            <button
              ref={(el) => {
                if (el) refs.current.set(item.id, el);
                else refs.current.delete(item.id);
              }}
              type="button"
              className="tile"
              tabIndex={active ? 0 : -1}
              aria-current={active ? 'true' : undefined}
              aria-label={item.title}
              style={{ '--tile-accent': item.accent } as CSSProperties}
              onPointerEnter={(e) => {
                if (e.pointerType === 'mouse') onSelect(item.id);
              }}
              onFocus={() => onSelect(item.id)}
              onClick={() => (active ? onActivate(item.id) : onSelect(item.id))}
            >
              {item.image ? (
                <img src={item.image} alt="" style={{ objectPosition: item.imagePosition ?? 'center' }} />
              ) : (
                <span className="tile-art">
                  <Icon name={item.icon ?? 'doc'} />
                </span>
              )}
            </button>
            <span className="tile-label" aria-hidden="true">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
