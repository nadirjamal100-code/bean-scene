import Image from 'next/image';
import type { ReactNode } from 'react';
import { cx } from '@/lib/cx';
import styles from './FeatureCard.module.css';

export type Feature = {
  title: string;
  icon: string;
  description: ReactNode;
  /** The first card is highlighted (#ffeed8, no stroke) in the design. */
  highlighted?: boolean;
};

export default function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className={cx(styles.card, feature.highlighted && styles.highlighted)}>
      <Image src={feature.icon} alt="" width={88} height={88} className={styles.icon} />
      <h3 className={styles.title}>{feature.title}</h3>
      <p className={styles.text}>{feature.description}</p>
    </article>
  );
}
