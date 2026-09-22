import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import SubscribeForm from './SubscribeForm';
import styles from './Subscribe.module.css';

export default function Subscribe() {
  return (
    <section id="subscribe" className={styles.band} aria-labelledby="subscribe-title">
      <Image src="/images/cta-bg.jpg" alt="" fill sizes="100vw" className={styles.background} />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <SectionHeading
          id="subscribe-title"
          tone="light"
          title="Subscribe to get the Latest News"
          subtitle="Don’t miss out on our latest news, updates, tips and special offers"
        />
        <div className={styles.form}>
          <SubscribeForm />
        </div>
      </div>

      {/* Cups straddle the band and the footer, so they are positioned from the band's top edge. */}
      <Image
        src="/images/cups-splash.png"
        alt=""
        width={444}
        height={358}
        className={`${styles.cup} ${styles.cupLeft}`}
        aria-hidden="true"
      />
      <Image
        src="/images/cups-splash.png"
        alt=""
        width={444}
        height={358}
        className={`${styles.cup} ${styles.cupRight}`}
        aria-hidden="true"
      />
    </section>
  );
}
