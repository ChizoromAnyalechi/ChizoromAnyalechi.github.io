import type { Item } from '../data';

interface BackdropProps {
  items: Item[];
  activeId: string;
}

/** Full-screen background: the selected tile's art cross-fades in, tinted by its accent colour. */
export function Backdrop({ items, activeId }: BackdropProps) {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="backdrop-glow" />
      {items
        .filter((item) => item.image)
        .map((item) => (
          <img
            key={item.id}
            src={item.image}
            alt=""
            className={`backdrop-art${item.id === activeId ? ' is-active' : ''}`}
            style={{ objectPosition: item.imagePosition ?? 'center' }}
          />
        ))}
      <div className="backdrop-shade" />
      <div className="backdrop-orbs">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
