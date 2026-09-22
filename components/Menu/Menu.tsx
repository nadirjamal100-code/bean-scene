import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import MenuCard, { type MenuItem } from './MenuCard';
import styles from './Menu.module.css';

const BLEND = 'Coffee 50% | Milk 50%';

const ITEMS: MenuItem[] = [
  { name: 'Cappuccino', image: '/images/menu-cappuccino.jpg', blend: BLEND, price: '$8.50' },
  { name: 'Chai Latte', image: '/images/menu-chai-latte.jpg', blend: BLEND, price: '$8.50' },
  { name: 'Macchiato', image: '/images/menu-macchiato.jpg', blend: BLEND, price: '$8.50' },
  { name: 'Expresso', image: '/images/menu-espresso.jpg', blend: BLEND, price: '$8.50' },
];

export default function Menu() {
  return (
    <section id="menu" className={styles.menu} aria-labelledby="menu-title">
      <Image
        src="/images/coffee-splash.png"
        alt=""
        width={478}
        height={261}
        className={styles.splash}
        aria-hidden="true"
      />

      <div className="container">
        <SectionHeading
          id="menu-title"
          title="Enjoy a new blend of coffee style"
          subtitle="Explore all flavours of coffee with us. There is always a new cup worth experiencing"
        />

        <ul className={styles.grid}>
          {ITEMS.map((item) => (
            <li key={item.name} className={styles.item}>
              <MenuCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
