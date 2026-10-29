export function Hints() {
  return (
    <footer className="gutter-x hidden items-center justify-between gap-6 pb-6 pt-4 text-sm text-white/50 md:flex">
      <span>© 2026 Chizorom Anyalechi</span>
      <span className="flex items-center gap-6">
        <span className="flex items-center gap-2">
          <kbd className="kbd">←</kbd>
          <kbd className="kbd">→</kbd>
          Browse
        </span>
        <span className="flex items-center gap-2">
          <kbd className="kbd">Enter</kbd>
          Open
        </span>
        <span className="flex items-center gap-2">
          <kbd className="kbd">Esc</kbd>
          Back
        </span>
      </span>
    </footer>
  );
}
