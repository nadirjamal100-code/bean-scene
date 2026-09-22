import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Clicker_Script, Playfair_Display } from 'next/font/google';
import './globals.css';

// Fonts identified in the Figma file: Playfair Display (UI/body) and Clicker Script (logo & hero script).
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const clicker = Clicker_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-clicker',
  display: 'swap',
});

const description =
  'Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood.';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'Bean Scene | Quality coffee to start your morning',
  description,
  applicationName: 'Bean Scene',
  keywords: ['coffee shop', 'cappuccino', 'chai latte', 'macchiato', 'espresso', 'Bean Scene'],
  openGraph: {
    type: 'website',
    siteName: 'Bean Scene',
    title: 'Bean Scene | Quality coffee to start your morning',
    description,
    images: [{ url: '/images/hero-bg.jpg', width: 2048, height: 935, alt: 'A steaming cup of coffee with roasted beans' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bean Scene | Quality coffee to start your morning',
    description,
    images: ['/images/hero-bg.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#442808',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${clicker.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="page">{children}</div>
      </body>
    </html>
  );
}
