'use client';

import Image from 'next/image';
import { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import styles from './Testimonials.module.css';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

// INTEGRATION POINT: load testimonials from a CMS / API. Adding more entries enables the arrows.
const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Bean Scene has become one of my favorite places for coffee. The flavor is rich, smooth, and freshly brewed every time. I especially love their Cappuccino because it has the perfect balance of coffee and milk. The quality is consistently excellent, and the warm atmosphere makes every visit enjoyable. Whether I’m starting my morning or taking a short break, Bean Scene always makes my day feel a little better.",
    name: 'Emily Johnson',
    role: 'Happy Customer',
    avatar: '/images/testimonial-jonny-thomas.jpg',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;
  const current = TESTIMONIALS[index];
  const step = (direction: 1 | -1) => setIndex((value) => (value + direction + total) % total);

  return (
    <section id="testimonials" className={styles.section} aria-labelledby="testimonials-title">
      <Image
        src="/images/coffee-splash.png"
        alt=""
        width={498}
        height={272}
        className={styles.splashTop}
        aria-hidden="true"
      />
      <Image
        src="/images/coffee-splash.png"
        alt=""
        width={414}
        height={226}
        className={styles.splashBottom}
        aria-hidden="true"
      />

      <div className="container">
        <SectionHeading
          id="testimonials-title"
          title="Our coffee perfection feedback"
          subtitle="Our customers has amazing things to say about us"
        />

        <div className={styles.stage}>
          <button
            type="button"
            className={`${styles.arrow} ${styles.prev}`}
            aria-label="Previous testimonial"
            onClick={() => step(-1)}
          >
            <Image src="/icons/arrow-left.svg" alt="" width={24} height={24} />
          </button>

          <figure className={styles.card} aria-live="polite">
            <span className={styles.mark} aria-hidden="true">
              “
            </span>
            <blockquote className={styles.quote}>
              <p>{current.quote}</p>
            </blockquote>
            <figcaption className={styles.caption}>
              <span className={styles.name}>{current.name}</span>
              <span className={styles.role}>{current.role}</span>
              <Image
                src={current.avatar}
                alt={`Portrait of ${current.name}`}
                width={112}
                height={112}
                className={styles.avatar}
              />
            </figcaption>
          </figure>

          <button
            type="button"
            className={`${styles.arrow} ${styles.next}`}
            aria-label="Next testimonial"
            onClick={() => step(1)}
          >
            <Image src="/icons/arrow-right.svg" alt="" width={24} height={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
