import type { Action, Item } from '../data';
import { Icon } from './Icons';

const isNewTab = (href: string) => /^https?:|\.pdf$/i.test(href);

function ActionButton({ action, onAction }: { action: Action; onAction: (a: Action) => void }) {
  const className = action.primary
    ? 'inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3 text-base font-semibold text-[#0b0f19] shadow-lg transition duration-200 hover:scale-[1.04] hover:shadow-[0_0_32px_rgba(255,255,255,0.35)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40'
    : 'inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-base font-medium text-white backdrop-blur-md transition duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30';

  const content = (
    <>
      {action.icon && <Icon name={action.icon} className="h-5 w-5" />}
      <span>{action.label}</span>
    </>
  );

  if (action.href) {
    return (
      <a
        href={action.href}
        className={className}
        {...(isNewTab(action.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={className} onClick={() => onAction(action)}>
      {content}
    </button>
  );
}

interface HubProps {
  item: Item;
  onAction: (action: Action) => void;
}

/** Details for the selected tile. Re-mounted (via `key`) on every change so it animates in. */
export function Hub({ item, onAction }: HubProps) {
  let step = 0;
  const delay = () => ({ animationDelay: `${step++ * 70}ms` });

  return (
    <section className="gutter-x pb-10 pt-2" aria-labelledby="hub-title">
      <p className="hub-in text-sm font-medium uppercase tracking-[0.18em] text-white/60" style={delay()}>
        {item.kicker}
      </p>
      <h1
        id="hub-title"
        className="hub-in mt-2 max-w-4xl text-4xl font-semibold leading-[1.05] text-balance text-white sm:text-6xl"
        style={delay()}
      >
        {item.title}
      </h1>

      {item.tags && (
        <ul className="hub-in mt-5 flex flex-wrap gap-2" style={delay()}>
          {item.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/85 backdrop-blur-md">
              {tag}
            </li>
          ))}
        </ul>
      )}

      <p className="hub-in mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg" style={delay()}>
        {item.summary}
      </p>

      <div className="hub-in mt-7 flex flex-wrap items-center gap-3" style={delay()}>
        {item.actions.map((action) => (
          <ActionButton key={action.label} action={action} onAction={onAction} />
        ))}
      </div>

      {item.points && (
        <ul className="card-grid hub-in mt-10" style={delay()}>
          {item.points.map((point) => (
            <li key={point} className="ps-card p-5 text-[0.95rem] leading-relaxed text-white/80">
              {point}
            </li>
          ))}
        </ul>
      )}

      {item.skillGroups && (
        <div className="card-grid hub-in mt-10" style={delay()}>
          {item.skillGroups.map((group) => (
            <div key={group.category} className="ps-card p-5">
              <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-white/60">{group.category}</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li key={skill} className="rounded-full bg-white/[0.12] px-3 py-1.5 text-sm font-medium text-white">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {item.contacts && (
        <ul className="card-grid hub-in mt-10" style={delay()}>
          {item.contacts.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                {...(isNewTab(c.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="ps-card flex items-center gap-4 p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10">
                  <Icon name={c.icon} className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium uppercase tracking-[0.16em] text-white/55">{c.label}</span>
                  <span className="block truncate text-base text-white select-all">{c.value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
