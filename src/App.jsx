import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ConnectorLine from './components/ConnectorLine';
import ProgressSection from './components/ProgressSection';
import ServicesSection from './components/ServicesSection';
import TestimonialSection from './components/TestimonialSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

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
