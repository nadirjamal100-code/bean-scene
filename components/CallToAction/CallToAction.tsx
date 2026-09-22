import Image from 'next/image';
import Button from '@/components/ui/Button';
import styles from './CallToAction.module.css';

export default function CallToAction() {
  return (
    <section id="cta" className={styles.cta} aria-labelledby="cta-title">
      <Image src="/images/cta-bg.jpg" alt="" fill sizes="100vw" className={styles.background} />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={styles.copy}>
          <h2 id="cta-title" className={styles.title}>
            Get a chance to have an
            <br className={styles.desktopBreak} /> Amazing morning
          </h2>
          <p className={styles.text}>
            We are giving you are one time opportunity to
            <br className={styles.desktopBreak} /> experience a better life with coffee.
          </p>
          <Button href="#menu">Order Now</Button>
        </div>
      </div>

      <div className={styles.visual} aria-hidden="true">
        <Image
          src="/images/cta-coffee-beans.png"
          alt=""
          width={1400}
          height={1223}
          sizes="(max-width: 1023px) 460px, 657px"
          className={styles.beans}
        />
        <Image
          src="/images/cta-cup.png"
          alt=""
          width={480}
          height={746}
          sizes="300px"
          className={styles.cup}
        />
      </div>
    </section>
  );
}
