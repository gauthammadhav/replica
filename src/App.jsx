import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import AboutSection from './components/sections/AboutSection';
import ConnectorLine from './components/ui/ConnectorLine';
import ProgressSection from './components/sections/ProgressSection';
import ServicesSection from './components/sections/ServicesSection';
import TestimonialSection from './components/sections/TestimonialSection';
import NewsletterSection from './components/sections/NewsletterSection';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ConnectorLine
          aboutImageId="about-circle"
          progressImageId="progress-circle"
        />
        <ProgressSection />
        <ServicesSection />
        <TestimonialSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
