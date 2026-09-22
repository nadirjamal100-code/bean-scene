import Image from 'next/image';
import Button from '@/components/ui/Button';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <Image
        src="/images/coffee-splash.png"
        alt=""
        width={498}
        height={272}
        className={styles.splash}
        aria-hidden="true"
      />

      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <h2 id="about-title" className={styles.title}>
            Discover the best coffee
          </h2>
          <p className={styles.text}>
            Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and
            helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is
            no doubt that you will enjoy this coffee more than others you have ever tasted.
          </p>
          <Button href="#features">Learn More</Button>
        </div>

        <div className={styles.media}>
          <Image
            src="/images/about-beans-cup.jpg"
            alt="A cup shape made out of roasted coffee beans"
            width={1000}
            height={528}
            sizes="(max-width: 1023px) 760px, 680px"
            className={styles.photo}
          />
        </div>
      </div>
    </section>
  );
}
