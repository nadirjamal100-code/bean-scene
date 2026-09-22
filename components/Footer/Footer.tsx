import Image from 'next/image';
import Link from 'next/link';
import { FOOTER } from '@/lib/site';
import styles from './Footer.module.css';

type LinkGroup = { title: string; links: ReadonlyArray<{ label: string; href: string }> };

function LinkColumn({ group, className }: { group: LinkGroup; className: string }) {
  return (
    <nav className={className} aria-label={group.title}>
      <h2 className={styles.heading}>{group.title}</h2>
      <ul className={styles.list}>
        {group.links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className={styles.link}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  const { contact } = FOOTER;

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.beans} aria-hidden="true">
        <Image
          src="/images/footer-beans.png"
          alt=""
          fill
          sizes="100vw"
          className={styles.beansImage}
        />
      </div>

      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <p className={styles.logo}>{FOOTER.brand}</p>
          <p className={styles.description}>{FOOTER.description}</p>
          <ul className={styles.social}>
            {FOOTER.social.map((item) => (
              <li key={item.label}>
                <a href={item.href} aria-label={item.label} className={styles.socialLink}>
                  <Image src={item.icon} alt="" width={24} height={24} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <LinkColumn group={FOOTER.about} className={styles.about} />
        <LinkColumn group={FOOTER.company} className={styles.company} />

        <div className={styles.contact}>
          <h2 className={styles.heading}>{contact.title}</h2>
          <ul className={styles.contactList}>
            <li>
              <address className={styles.address}>{contact.address}</address>
            </li>
            <li>
              <a href={contact.phone.href} className={styles.link}>
                {contact.phone.label}
              </a>
            </li>
            <li>
              <a href={contact.email.href} className={styles.link}>
                {contact.email.label}
              </a>
            </li>
            <li>
              <a href={contact.website.href} className={styles.link}>
                {contact.website.label}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.power}>Web App Developed by NADIR JAMAL</div>
    </footer>
  );
}
