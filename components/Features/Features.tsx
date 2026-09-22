import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import FeatureCard, { type Feature } from './FeatureCard';
import styles from './Features.module.css';

// Line breaks in the descriptions are hard breaks in the Figma text.
const FEATURES: Feature[] = [
  {
    title: 'Supreme Beans',
    icon: '/images/feature-supreme-beans.png',
    description: (
      <>
        Beans that provides
        <br />
        great taste
      </>
    ),
    highlighted: true,
  },
  {
    title: 'High Quality',
    icon: '/images/feature-high-quality.png',
    description: (
      <>
        We provide the
        <br />
        highest quality
      </>
    ),
  },
  {
    title: 'Extraordinary',
    icon: '/images/feature-extraordinary.png',
    description: (
      <>
        Coffee like you have
        <br />
        never tasted
      </>
    ),
  },
  {
    title: 'Affordable Price',
    icon: '/images/feature-affordable-price.png',
    description: (
      <>
        Our Coffee prices are
        <br />
        easy to afford
      </>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.features} aria-labelledby="features-title">
      <div className="container">
        <SectionHeading
          id="features-title"
          title="Why are we different?"
          subtitle="We don’t just make your coffee, we make your day!"
        />

        <ul className={styles.grid}>
          {FEATURES.map((feature) => (
            <li key={feature.title}>
              <FeatureCard feature={feature} />
            </li>
          ))}
        </ul>

        <div className={styles.closing}>
          <p className={styles.text}>
            <span>Great ideas start with great coffee, Lets help you achieve that</span>
            <strong className={styles.emphasis}>Get started today.</strong>
          </p>
          <Button href="#subscribe">Join Us</Button>
        </div>
      </div>
    </section>
  );
}
