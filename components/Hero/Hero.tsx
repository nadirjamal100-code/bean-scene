import Image from 'next/image';
import Button from '@/components/ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.background}
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={styles.copy}>
          <h1 id="hero-title" className={styles.title}>
            <span className={styles.eyebrow}>We’ve got your morning covered with</span>
            <span className={styles.script}>Coffee</span>
          </h1>
          <p className={styles.text}>
            It is best to start your day with a cup of coffee. Discover the
            <br className={styles.desktopBreak} /> best flavours coffee you will ever have. We provide the best
            <br className={styles.desktopBreak} /> for our customers.
          </p>
          <Button href="#menu">Order Now</Button>
        </div>
      </div>
    </section>
  );
}
