import { useState } from 'react';
import { links, navItems } from '../data.js';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <a href={links.linkedin} className="logo-holder">
        <div className="logo">CA</div>
        <div className="logo-text">Chizorom Anyalechi</div>
      </a>
      <nav>
        <ul id="menu" className={menuOpen ? 'active' : ''}>
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href={links.email} className="button">Contact Me</a>
          </li>
        </ul>
        <a
          href="#"
          className="mobile-toggle"
          aria-label="Toggle menu"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen((open) => !open);
          }}
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
          </svg>
        </a>
      </nav>
    </header>
  );
}
