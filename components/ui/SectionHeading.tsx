import { cx } from '@/lib/cx';
import styles from './SectionHeading.module.css';

type SectionHeadingProps = {
  id?: string;
  title: string;
  subtitle: string;
  /** `light` renders white text for dark photographic backgrounds. */
  tone?: 'dark' | 'light';
};

/** Centered title + supporting line, repeated by the Menu, Features, Testimonials and Subscribe sections. */
export default function SectionHeading({ id, title, subtitle, tone = 'dark' }: SectionHeadingProps) {
  return (
    <div className={cx(styles.heading, tone === 'light' && styles.light)}>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}
