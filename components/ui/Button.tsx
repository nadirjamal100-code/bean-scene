import Link from 'next/link';
import type { ReactNode } from 'react';
import { cx } from '@/lib/cx';
import styles from './Button.module.css';

type ButtonProps = {
  children: ReactNode;
  /** When provided the button renders as a link (next/link), otherwise as a <button>. */
  href?: string;
  /** `default` is the 134×48 pill used across the page, `compact` is the 100×48 "Sign up" pill. */
  variant?: 'default' | 'compact';
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  variant = 'default',
  className,
  type = 'button',
  onClick,
}: ButtonProps) {
  const classes = cx(styles.button, variant === 'compact' && styles.compact, className);

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
