'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TrendingUp, ArrowUpRight, CheckCircle2, DollarSign, Target, BarChart2, Sparkles } from 'lucide-react';

interface CaseStudy {
  id: string;
  category: 'ecom' | 'b2b' | 'leadgen';
  client: string;
  industry: string;
  headline: string;
  summary: string;
  image: string;
  services: string[];
  metrics: {
    label: string;
    value: string;
    change: string;
  }[];
  challenge: string;
  solution: string;
  results: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    id: 'nordic-apparel',
    category: 'ecom',
    client: 'NordicThread D2C',
    industry: 'Apparel & Sustainable Fashion',
    headline: 'Scaling a Sustainable D2C Fashion Brand from $24K to $185K/Month at 4.2x ROAS',
    summary: 'Restructured Meta & Google PMax ad campaigns, built hook-driven UGC video creatives, and fixed broken iOS 14 attribution using Server-Side GTM & Meta CAPI.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
    services: ['Meta Performance Ads', 'Google Shopping & PMax', 'Server-Side CAPI', 'UGC Video Creatives'],
    metrics: [
      { label: 'Monthly Revenue', value: '$185,400', change: '+670%' },
      { label: 'Blended ROAS', value: '4.2x', change: 'Up from 1.6x' },
      { label: 'Customer CAC', value: '$18.40', change: '-44% Reduction' },
    ],
    challenge: 'The brand was suffering from volatile Meta ad results post-iOS 14, high customer acquisition costs, and poor repeat purchases.',
    solution: 'UplixBD deployed full server-side tracking, tested 30+ UGC video hooks per month, and set up automated Klaviyo post-purchase flows.',
    results: 'Reached sustainable $185k/mo revenue while maintaining a profitable 4.2x ROAS across international markets.',
  },
  {
    id: 'cloudsync-b2b',
    category: 'b2b',
    client: 'CloudSync Technologies',
    industry: 'Enterprise B2B Cloud Solutions',
    headline: 'Generating $1.4M in Qualified Enterprise Pipeline via Laser-Focused Google Search',
    summary: 'Captured high-intent search traffic with negative keyword sculpting, high-converting comparison landing pages, and automated CRM lead scoring.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    services: ['Google Search Ads', 'GA4 Enterprise Setup', 'CRO Landing Pages', 'Technical SEO'],
    metrics: [
      { label: 'Enterprise Pipeline', value: '$1.42M', change: '+310%' },
      { label: 'Monthly Qualified Demos', value: '142 Demos', change: 'Up from 28' },
      { label: 'Cost Per Demo', value: '$68.00', change: '-55% Cost' },
    ],
    challenge: 'Broad match keyword waste was burning $8k/mo with consumer clicks instead of enterprise IT decision-makers.',
    solution: 'Implemented single-intent keyword clusters, rigorous negative placements, and tailored B2B landing pages with sub-second load times.',
    results: 'Secured 142 enterprise demos every month and closed 12 Fortune 500 contract opportunities within 6 months.',
  },
  {
    id: 'aurora-dental',
    category: 'leadgen',
    client: 'Aurora Aesthetics & Dental',
    industry: 'Cosmetic Dentistry & MedSpa',
    headline: 'Generating 380+ High-Value Cosmetic Patient Bookings Per Month at -52% Acquisition Cost',
    summary: 'Crafted localized Facebook/Instagram video campaigns showcasing doctor credentials and patient smile transformations, paired with an automated WhatsApp qualification bot.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
    services: ['Local Meta Lead Ads', 'Local SEO & Maps', 'High-Impact Video', 'WhatsApp Bot Funnel'],
    metrics: [
      { label: 'Monthly Patient Leads', value: '384 Patients', change: '+290%' },
      { label: 'Cost Per Booking', value: '$14.20', change: '-52% Reduction' },
      { label: 'Local Map Pack Rank', value: '#1 in City', change: 'From #18' },
    ],
    challenge: 'Relying solely on word-of-mouth left appointment calendars half-empty with irregular booking peaks and valleys.',
    solution: 'Engineered a hyper-local geo-targeted video campaign and direct qualification chat funnel that presold patient procedures.',
    results: 'The clinic expanded into a second facility to accommodate overflowing patient appointment demand.',
  },
];

export function CaseStudiesSection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ecom' | 'b2b' | 'leadgen'>('all');
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  const filteredStudies = caseStudiesData.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="results" className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto relative scroll-mt-20">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#5B0BB5]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B0638] border border-[#8B2BE2]/40 mb-4">
          <TrendingUp className="w-4 h-4 text-[#22C55E]" />
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#E9E1F5]">
            Verified Client Outcomes
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Real Numbers. Real ROI.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] via-[#8B2BE2] to-[#60A5FA]">
            Proven Results.
          </span>
        </h2>
        <p className="text-base sm:text-lg text-[#B8A9CC] mt-4 leading-relaxed">
          See how our integrated performance campaigns deliver compounding revenue for our global partners.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {[
            { key: 'all', label: 'All Case Studies' },
            { key: 'ecom', label: 'E-commerce & D2C' },
            { key: 'b2b', label: 'B2B & SaaS' },
            { key: 'leadgen', label: 'High-Ticket Lead Gen' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key as any)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${
                activeFilter === tab.key
                  ? 'bg-gradient-to-r from-[#5B0BB5] to-[#8B2BE2] text-white shadow-[0_0_16px_rgba(139,43,226,0.5)]'
                  : 'bg-[#1B0638]/70 text-[#B8A9CC] hover:text-white border border-[#54218A]/50 hover:border-[#8B2BE2]/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {filteredStudies.map((study) => (
          <div
            key={study.id}
            className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-[#8B2BE2] transition-all duration-300 shadow-xl"
          >
            <div>
              {/* Image Banner with overlay */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#100022]">
                <Image
                  src={study.image}
                  alt={study.headline}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B0638] via-[#1B0638]/60 to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#100022]/80 backdrop-blur-md border border-[#8B2BE2]/40 text-[11px] font-bold text-white">
                  {study.industry}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6">
                <div className="text-xs font-mono text-[#C084FC] mb-1 font-semibold">{study.client}</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#E9E1F5] leading-snug">
                  {study.headline}
                </h3>
                <p className="text-xs sm:text-sm text-[#B8A9CC] leading-relaxed mb-6">
                  {study.summary}
                </p>

                {/* Key Metrics Trio */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#100022]/80 border border-[#54218A]/40 mb-5 text-center">
                  {study.metrics.map((m, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-xs font-bold text-white font-mono">{m.value}</span>
                      <span className="text-[10px] text-[#22C55E] font-semibold">{m.change}</span>
                      <span className="text-[9px] text-[#B8A9CC] truncate">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {study.services.map((srv, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded bg-[#24004F] border border-[#54218A]/40 text-[#E9E1F5]"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Read Breakdown Trigger */}
            <div className="p-6 pt-0">
              <button
                type="button"
                onClick={() => setActiveModalStudy(study)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#24004F] hover:bg-[#5B0BB5] border border-[#54218A] text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all duration-200"
              >
                <span>Read Full Breakdown</span>
                <ArrowUpRight className="w-4 h-4 text-[#C084FC]" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Detail Modal */}
      {activeModalStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#100022]/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#1B0638] border border-[#8B2BE2]/50 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#54218A]/50 mb-5">
              <div>
                <span className="text-xs font-mono text-[#C084FC] uppercase">{activeModalStudy.industry}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{activeModalStudy.client}</h3>
              </div>
              <button
                onClick={() => setActiveModalStudy(null)}
                className="px-3 py-1.5 rounded-lg bg-[#24004F] text-xs font-semibold text-[#B8A9CC] hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="space-y-5 text-sm text-[#E9E1F5]">
              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#100022] border border-[#8B2BE2]/30 text-center">
                {activeModalStudy.metrics.map((m, idx) => (
                  <div key={idx}>
                    <div className="text-base sm:text-lg font-black text-white font-mono">{m.value}</div>
                    <div className="text-xs font-bold text-[#22C55E]">{m.change}</div>
                    <div className="text-[11px] text-[#B8A9CC]">{m.label}</div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#EF4444] mb-1">The Challenge</h4>
                <p className="text-xs sm:text-sm text-[#B8A9CC] leading-relaxed">{activeModalStudy.challenge}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B2BE2] mb-1">Our Strategy & Execution</h4>
                <p className="text-xs sm:text-sm text-[#B8A9CC] leading-relaxed">{activeModalStudy.solution}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#22C55E] mb-1">The Measurable Impact</h4>
                <p className="text-xs sm:text-sm text-[#B8A9CC] leading-relaxed">{activeModalStudy.results}</p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#54218A]/50 flex justify-end gap-3">
              <Link
                href="/#contact"
                onClick={() => setActiveModalStudy(null)}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#5B0BB5] via-[#7606CB] to-[#8B2BE2] shadow-lg flex items-center gap-2"
              >
                <span>Replicate These Results For Your Brand</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
