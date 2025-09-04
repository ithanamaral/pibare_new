import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EventsSection from '@/components/EventsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
}

