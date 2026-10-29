import { useCallback, useEffect, useRef, useState } from 'react';

const KEY = 'portfolio-sound';

function readPref() {
  try {
    return localStorage.getItem(KEY) === 'on';
  } catch {
    return false;
  }
}

/** Short UI blips made with Web Audio. Off by default; the choice is remembered. */
export function useSound() {
  const [enabled, setEnabled] = useState(readPref);
  const ctxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, enabled ? 'on' : 'off');
    } catch {
      /* storage unavailable */
    }
  }, [enabled]);

  const play = useCallback(
    (freq: number, duration: number, volume: number) => {
      if (!enabled) return;
      try {
        const ctx = (ctxRef.current ??= new AudioContext());
        const t = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0.0001, t);
        gain.gain.exponentialRampToValueAtTime(volume, t + 0.008);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
        osc.connect(gain).connect(ctx.destination);
        osc.start(t);
        osc.stop(t + duration + 0.02);
      } catch {
        /* audio unavailable */
      }
    },
    [enabled],
  );

  return {
    enabled,
    toggle: () => setEnabled((v) => !v),
    tick: () => play(1800, 0.035, 0.03),
    select: () => play(1100, 0.08, 0.05),
  };
}
