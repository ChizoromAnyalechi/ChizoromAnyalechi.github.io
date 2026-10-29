import { useEffect, useState } from 'react';

const format = (d: Date) => d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

export function useClock() {
  const [time, setTime] = useState(() => format(new Date()));
  useEffect(() => {
    const id = window.setInterval(() => setTime(format(new Date())), 10_000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}
