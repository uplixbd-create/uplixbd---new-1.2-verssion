'use client';

import React from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  BrainCircuit,
  Eye,
  ShieldCheck,
  Zap,
  Target,
  Sparkles,
  ArrowRight,
  LineChart,
} from 'lucide-react';

const reasons = [
  {
    icon: TrendingUp,
    title: 'Relentless ROI & Performance Focus',
    description: 'We don’t celebrate vanity metrics like impressions or views. Our primary benchmarks are cost-per-lead, ROAS, pipeline velocity, and scalable bottom-line revenue.',
  },
  {
    icon: BrainCircuit,
    title: 'Data-Backed Behavioral Targeting',
    description: 'Every creative hook, bidding adjustment, and landing page change is anchored in deep customer psychographics, heatmaps, and empirical analytics.',
  },
  {
    icon: Eye,
    title: 'Radical, 100% Transparent Reporting',
    description: 'No black boxes or hidden markups. You get live 24/7 BI dashboard access with complete visibility over every dollar spent and every lead generated.',
  },
  {
    icon: Sparkles,
    title: 'High-Impact Creative Engineering',
    description: 'We combine data science with scroll-stopping aesthetics. Our creative team produces visuals, UGC concepts, and video hooks that consistently beat platform ad fatigue.',
  },
  {
    icon: Zap,
    title: 'Bleeding-Edge Tech & Automation',
    description: 'From Server-Side GTM and Meta CAPI to AI-assisted workflow automation, we deploy the most modern infrastructure to keep your business years ahead of competitors.',
  },
  {
    icon: ShieldCheck,
    title: 'Dedicated Senior Growth Pods',
    description: 'You work directly with seasoned growth strategists and media buyers who treat your marketing budget with the same stewardship as their own capital.',
  },
];

export function WhyUplixBD() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Glow ambient */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#24004F]/40 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B0638] border border-[#8B2BE2]/40 mb-4">
          <Target className="w-4 h-4 text-[#C084FC]" />
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#E9E1F5]">
            Why Forward-Thinking Brands Choose Us
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          More Than an Agency.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] via-[#8B2BE2] to-[#60A5FA]">
            Your Growth Partner.
          </span>
        </h2>
        <p className="text-base sm:text-lg text-[#B8A9CC] mt-4 leading-relaxed">
          We replace fragmented freelancers and complacent legacy agencies with a unified, high-octane growth department dedicated to scaling your enterprise.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {reasons.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="glass-card rounded-2xl p-7 flex flex-col justify-between group hover:border-[#8B2BE2] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#5B0BB5]/15 rounded-full blur-xl group-hover:bg-[#8B2BE2]/25 transition-all duration-500" />
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#24004F] border border-[#54218A] flex items-center justify-center text-[#C084FC] group-hover:text-white group-hover:bg-[#5B0BB5] group-hover:border-[#8B2BE2] transition-all duration-300 mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#E9E1F5] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#B8A9CC] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#54218A]/30 flex items-center gap-2 text-xs font-semibold text-[#8B2BE2] group-hover:text-[#C084FC] transition-colors">
                <span>Enterprise Grade</span>
                <span className="text-[10px] text-[#B8A9CC]">● Tested Standard</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Section CTA */}
      <div className="mt-14 text-center">
        <Link
          href="/#contact"
          id="why-uplix-cta-btn"
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-[#5B0BB5] hover:bg-[#7606CB] border border-[#8B2BE2]/40 shadow-[0_0_25px_rgba(91,11,181,0.45)] transition-all duration-200 group"
        >
          <span>Let&apos;s Work Together</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
