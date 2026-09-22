import About from '@/components/About/About';
import CallToAction from '@/components/CallToAction/CallToAction';
import Features from '@/components/Features/Features';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import Menu from '@/components/Menu/Menu';
import Navbar from '@/components/Navbar/Navbar';
import Subscribe from '@/components/Subscribe/Subscribe';
import Testimonials from '@/components/Testimonials/Testimonials';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Menu />
        <Features />
        <CallToAction />
        <Testimonials />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}
