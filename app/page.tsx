import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { ServicesSection } from '@/components/ServicesSection';
import { WhyUplixBD } from '@/components/WhyUplixBD';
import { ProcessSection } from '@/components/ProcessSection';
import { CaseStudiesSection } from '@/components/CaseStudiesSection';
import { IndustriesSection } from '@/components/IndustriesSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { FaqSection } from '@/components/FaqSection';
import { ConversionBanner } from '@/components/ConversionBanner';
import { ContactConsultation } from '@/components/ContactConsultation';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#100022] text-[#E9E1F5] flex flex-col selection:bg-[#7606CB] selection:text-white">
      {/* Liquid Glass Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Section 4.1 A: Hero Section */}
        <Hero />

        {/* Section 4.1 B: Trust & Social Proof Bar */}
        <TrustBar />

        {/* Section 4.1 C: Full Spectrum Services */}
        <ServicesSection />

        {/* Section 4.1 D: Why UplixBD Growth Partner */}
        <WhyUplixBD />

        {/* Section 4.1 E: 4-Phase Growth Framework */}
        <ProcessSection />

        {/* Section 4.1 F: Results & Case Studies */}
        <CaseStudiesSection />

        {/* Section 4.1 G: Targeted Industries */}
        <IndustriesSection />

        {/* Section 4.1 H: Verified Reviews & Testimonials */}
        <ReviewsSection />

        {/* Section 4.1 I: FAQ Accordion */}
        <FaqSection />

        {/* Section 4.1 J: Conversion Banner */}
        <ConversionBanner />

        {/* Section 4.1 K: 4-Step Interactive Consultation */}
        <ContactConsultation />
      </main>

      {/* Section 8: Global Footer */}
      <Footer />
    </div>
  );
}
