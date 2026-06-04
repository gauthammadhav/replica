import { useState } from 'react';
import styles from './Navbar.module.css';

const navLinks = ['Home', 'Studio', 'Services', 'Contact', "FAQ's"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.navbar} id="navbar">
      <nav className={styles.inner} aria-label="Main navigation">
        {/* Logo — Gerbil 28px, #1A1A1A (Figma-confirmed) */}
        <div className={styles.logo} aria-label="Elementum home">
          Elementum
        </div>

        {/* Center nav links — DM Sans 15px, weight 400, #444444 (Figma-confirmed) */}
        <ul
          className={`${styles.links} ${isOpen ? styles.menuOpen : ''}`}
          role="list"
        >
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={styles.link}
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger — visible on mobile only */}
        <button
          className={`${styles.hamburger} ${isOpen ? styles.isOpen : ''}`}
          aria-label="Open menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
