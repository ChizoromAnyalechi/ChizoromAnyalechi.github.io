import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { items, tabs, type Action, type Tab } from './data';
import { Backdrop } from './components/Backdrop';
import { TopBar } from './components/TopBar';
import { TileRow } from './components/TileRow';
import { Hub } from './components/Hub';
import { Sheet } from './components/Sheet';
import { Hints } from './components/Hints';
import { useClock } from './hooks/useClock';
import { useSound } from './hooks/useSound';

const firstOf = (tab: Tab) => items.find((item) => item.tab === tab)!.id;
const isNewTab = (href: string) => /^https?:|\.pdf$/i.test(href);

export default function App() {
  const [tab, setTab] = useState<Tab>('projects');
  const [activeByTab, setActiveByTab] = useState<Record<Tab, string>>({
    projects: firstOf('projects'),
    about: firstOf('about'),
  });
  const [openId, setOpenId] = useState<string | null>(null);
  const clock = useClock();
  const sound = useSound();
  const mainRef = useRef<HTMLDivElement>(null);

  const rowItems = useMemo(() => items.filter((item) => item.tab === tab), [tab]);
  const active = items.find((item) => item.id === activeByTab[tab]) ?? rowItems[0];
  const openItem = openId ? (items.find((item) => item.id === openId) ?? null) : null;

  const select = (id: string) => {
    if (id === active.id) return;
    sound.tick();
    setActiveByTab((prev) => ({ ...prev, [tab]: id }));
  };

  const switchTab = (next: Tab) => {
    if (next === tab) return;
    sound.select();
    setTab(next);
  };

  const goto = (id: string) => {
    const target = items.find((item) => item.id === id);
    if (!target) return;
    sound.select();
    setTab(target.tab);
    setActiveByTab((prev) => ({ ...prev, [target.tab]: id }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const runAction = (action: Action, itemId: string) => {
    if (action.open) {
      sound.select();
      setOpenId(itemId);
    } else if (action.goto) {
      goto(action.goto);
    } else if (action.href) {
      sound.select();
      if (isNewTab(action.href)) window.open(action.href, '_blank', 'noopener');
      else window.location.href = action.href;
    }
  };

  // Clicking (or pressing Enter on) the selected tile runs its main action.
  const activate = (id: string) => {
    const item = items.find((i) => i.id === id);
    const primary = item?.actions.find((a) => a.primary) ?? item?.actions[0];
    if (item && primary) runAction(primary, item.id);
  };

  const closeSheet = useCallback(() => setOpenId(null), []);

  useEffect(() => {
    if (mainRef.current) mainRef.current.inert = openItem !== null;
  }, [openItem]);

  const tabLabel = tabs.find((t) => t.id === tab)?.label ?? '';

  return (
    <div className="ps-root" style={{ '--accent': active.accent } as CSSProperties}>
      <Backdrop items={items} activeId={active.id} />

      <div ref={mainRef} className="relative z-10 flex min-h-dvh flex-col">
        <TopBar
          tabs={tabs}
          tab={tab}
          onTab={switchTab}
          clock={clock}
          soundOn={sound.enabled}
          onToggleSound={sound.toggle}
          onProfile={() => goto('about')}
        />
        <TileRow key={tab} label={tabLabel} items={rowItems} activeId={active.id} onSelect={select} onActivate={activate} />
        <main className="flex-1">
          <Hub key={active.id} item={active} onAction={(action) => runAction(action, active.id)} />
        </main>
        <Hints />
      </div>

      {openItem && <Sheet item={openItem} onClose={closeSheet} />}
    </div>
  );
}
