import Image from 'next/image';
import Button from '@/components/ui/Button';
import styles from './MenuCard.module.css';

export type MenuItem = {
  name: string;
  image: string;
  blend: string;
  price: string;
};

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image
          src={item.image}
          alt={`${item.name} coffee`}
          fill
          sizes="(max-width: 599px) 100vw, (max-width: 1023px) 50vw, 25vw"
          className={styles.photo}
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.blend}>{item.blend}</p>
        <p className={styles.price}>{item.price}</p>
      </div>
      {/* INTEGRATION POINT: wire to a real ordering flow. For now it points at the contact details. */}
      <Button href="#contact" className={styles.order}>
        Order Now
      </Button>
    </article>
  );
}
