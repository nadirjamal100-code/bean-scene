'use client';

import Link from 'next/link';
import { useEffect, useId, useState } from 'react';
import Button from '@/components/ui/Button';
import { AUTH_LINKS, NAV_LINKS } from '@/lib/site';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const closeMenu = () => setOpen(false);

  // Close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  // Reset the toggle when the viewport grows into the desktop layout.
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onChange = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener('change', onChange);
    return () => desktop.removeEventListener('change', onChange);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="#home" className={styles.logo} onClick={closeMenu}>
          Bean Scene
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>

        <div id={menuId} className={styles.menu} data-open={open}>
          <nav className={styles.nav} aria-label="Primary">
            <ul className={styles.links}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link} onClick={closeMenu}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <Link href={AUTH_LINKS.signIn.href} className={styles.link} onClick={closeMenu}>
              {AUTH_LINKS.signIn.label}
            </Link>
            <Button href={AUTH_LINKS.signUp.href} variant="compact" onClick={closeMenu}>
              {AUTH_LINKS.signUp.label}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
