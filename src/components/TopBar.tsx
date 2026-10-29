import type { Tab } from '../data';
import { Icon } from './Icons';

interface TopBarProps {
  tabs: { id: Tab; label: string }[];
  tab: Tab;
  onTab: (tab: Tab) => void;
  clock: string;
  soundOn: boolean;
  onToggleSound: () => void;
  onProfile: () => void;
}

export function TopBar({ tabs, tab, onTab, clock, soundOn, onToggleSound, onProfile }: TopBarProps) {
  return (
    <header className="gutter-x flex items-center justify-between gap-4 pt-6 sm:pt-8">
      <nav aria-label="Sections" className="flex items-center gap-6 sm:gap-9">
        {tabs.map((t) => {
          const on = t.id === tab;
          return (
            <button
              key={t.id}
              type="button"
              aria-pressed={on}
              onClick={() => onTab(t.id)}
              className={`text-xl underline-offset-8 transition-colors focus-visible:underline focus-visible:outline-none sm:text-[1.7rem] ${
                on ? 'font-semibold text-white' : 'font-normal text-white/50 hover:text-white/80'
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </nav>

      <div className="flex items-center gap-2 sm:gap-4">
        <button
          type="button"
          onClick={onToggleSound}
          aria-pressed={soundOn}
          aria-label={soundOn ? 'Turn sounds off' : 'Turn sounds on'}
          title={soundOn ? 'Sounds on' : 'Sounds off'}
          className="grid h-10 w-10 place-items-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          <Icon name={soundOn ? 'soundOn' : 'soundOff'} className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={onProfile}
          aria-label="About me"
          className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/30 transition hover:ring-white focus-visible:outline-none focus-visible:ring-white"
        >
          <img src="/imgs/ChizoromAnyalechi.jpg" alt="" className="h-full w-full object-cover" />
        </button>
        <span className="text-base font-medium tabular-nums text-white/90 sm:text-lg">{clock}</span>
      </div>
    </header>
  );
}
