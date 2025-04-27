import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      {/* <Testimonials /> */}
      <PricingSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
    </>
  );
};

export default HomePage;