/**
 * Site-wide content that is shared between several components.
 * Copy is kept exactly as it appears in the Figma design.
 */

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
] as const;

/**
 * Authentication destinations.
 * INTEGRATION POINT: point these at the real sign-in / sign-up routes once they exist.
 */
export const AUTH_LINKS = {
  signIn: { label: 'Sign In', href: '#' },
  signUp: { label: 'SingUp', href: '#' },
} as const;

export const FOOTER = {
  brand: 'Bean Scene',
  description:
    "Bean Scene is dedicated to serving freshly brewed coffee made from carefully selected beans. We believe every cup should bring warmth, quality, and a little joy to your everyday moments.",
  // INTEGRATION POINT: replace with the real social profile URLs.
  social: [
    { label: 'Facebook', href: '#', icon: '/icons/facebook.svg' },
    { label: 'Instagram', href: '#', icon: '/icons/instagram.svg' },
    { label: 'YouTube', href: '#', icon: '/icons/youtube.svg' },
    { label: 'Twitter', href: '#', icon: '/icons/twitter.svg' },
  ],
  about: {
    title: 'About',
    links: [
      { label: 'Menu', href: '#menu' },
      { label: 'Features', href: '#features' },
      { label: 'News & Blogs', href: '#' },
      { label: 'Help & Supports', href: '#' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'How we work', href: '#' },
      { label: 'Terms of service', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
  },
  contact: {
    title: 'Contact Us',
    address: 'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016',
    phone: { label: '+1 202-918-2132', href: 'tel:+12029182132' },
    email: { label: 'beanscene@mail.com', href: 'mailto:beanscene@mail.com' },
    website: { label: 'www.beanscene.com', href: 'https://www.beanscene.com' },
  },
} as const;
