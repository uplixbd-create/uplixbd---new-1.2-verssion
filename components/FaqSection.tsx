'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What services does UplixBD specialize in?',
    answer:
      'UplixBD is a full-spectrum digital marketing and creative growth agency. We specialize in Meta (Facebook & Instagram) Ads, Google Ads (Search & Performance Max), technical SEO, YouTube optimization, GA4 enterprise analytics, Server-Side Google Tag Manager (CAPI), WordPress/React web development, brand identity design, VFX/3D motion graphics, and high-impact video editing.',
  },
  {
    question: 'How does UplixBD ensure measurable business growth?',
    answer:
      'We reject vanity metrics. Every campaign is engineered around bottom-line commercial KPIs: Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), Cost Per Lead (CPL), and Lifetime Value (LTV). We deploy server-side attribution to eliminate tracking blindspots and conduct continuous multi-variant creative testing to prevent ad fatigue.',
  },
  {
    question: 'Do you manage both Meta (Facebook/Instagram) and Google Ads?',
    answer:
      'Yes. In fact, our highest-performing client engagements leverage both platforms synchronously. Meta ads capture top-of-funnel awareness and trigger demand with hook-driven UGC creatives, while Google Search and Performance Max capture high-intent buyers ready to purchase.',
  },
  {
    question: 'What is your SEO strategy and how soon can we expect organic results?',
    answer:
      'Our SEO framework combines deep technical site audits, Core Web Vitals optimization, programmatic keyword clustering, topical authority architecture, and authoritative backlink acquisition. Technical fixes and indexing updates usually show momentum within 30–60 days, while competitive topical ranking authority compounds strongly over 3–6 months.',
  },
  {
    question: 'Do you build custom websites and landing pages?',
    answer:
      'Yes. We build ultra-fast, conversion-rate-optimized (CRO) websites and landing pages using WordPress, Next.js, and Webflow. Every page is tailored for mobile responsiveness, sub-second load times, dynamic tracking tags, and clear psychological conversion funnels.',
  },
  {
    question: 'How does the onboarding process work when starting a project?',
    answer:
      'Onboarding is rapid and frictionless: (1) Initial Discovery & Strategy Call, (2) Forensic Audit of historical ad accounts & tracking, (3) Custom Growth Roadmap presentation, (4) Asset onboarding & tracking integration, and (5) Campaign Launch within 7–10 business days.',
  },
  {
    question: 'What is the typical project timeline and pricing model?',
    answer:
      'We offer flexible engagement structures based on client needs: monthly performance retainers for ongoing media buying & growth, fixed project-based pricing for custom web development & branding, and hybrid performance models. Retainers typically operate on 3-month initial sprints to allow thorough algorithmic optimization.',
  },
  {
    question: 'Do you collaborate with international clients across different time zones?',
    answer:
      'Absolutely. UplixBD is based in Bangladesh and works actively with partners across the United States, United Kingdom, Canada, Australia, Europe, and Southeast Asia. We maintain overlapping communication windows, dedicated Slack/WhatsApp channels, and scheduled weekly strategic syncs.',
  },
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 px-4 md:px-8 max-w-5xl mx-auto relative scroll-mt-20">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#5B0BB5]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B0638] border border-[#8B2BE2]/40 mb-4">
          <HelpCircle className="w-4 h-4 text-[#C084FC]" />
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#E9E1F5]">
            Frequently Asked Questions
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Everything You Need{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] via-[#8B2BE2] to-[#60A5FA]">
            To Know.
          </span>
        </h2>
        <p className="text-base sm:text-lg text-[#B8A9CC] mt-4 leading-relaxed">
          Clear answers about our methodology, timelines, reporting, and deliverables.
        </p>
      </div>

      {/* Accordion list */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-[#1B0638] border-[#8B2BE2] shadow-[0_0_25px_rgba(139,43,226,0.2)]'
                  : 'bg-[#1B0638]/60 border-[#54218A]/50 hover:border-[#8B2BE2]/50'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg font-bold text-white pr-2">
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#5B0BB5] text-white rotate-180' : 'bg-[#24004F] text-[#B8A9CC]'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-[#B8A9CC] leading-relaxed border-t border-[#54218A]/30 pt-4 animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
