'use client';

import React from 'react';
import { Search, Compass, Rocket, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

const processSteps = [
  {
    step: '01',
    title: 'Audit & Discover',
    desc: 'We perform a deep forensic audit of your historical ad spend, tracking integrity, landing page drop-offs, and competitor strategy.',
    icon: Search,
    highlights: ['Tracking & GA4 Audit', 'Competitor Teardown', 'Customer Persona Mapping'],
  },
  {
    step: '02',
    title: 'Architect Strategy',
    desc: 'We build your bespoke full-funnel roadmap, determine optimal platform budget splits, and outline winning creative angles.',
    icon: Compass,
    highlights: ['Channel Budget Allocation', 'Creative Hook Scripting', 'CAPI & Funnel Architecture'],
  },
  {
    step: '03',
    title: 'Execute & Launch',
    desc: 'We launch precision-targeted ad sets, deploy high-converting landing pages, and initiate rapid creative multi-variant testing.',
    icon: Rocket,
    highlights: ['Multi-Variant Ad Launches', 'Landing Page Deployment', 'Algorithmic Bid Testing'],
  },
  {
    step: '04',
    title: 'Scale & Optimize',
    desc: 'We aggressively pump budget into high-ROAS winning angles, expand lookalike pools, and systematically lower your acquisition cost.',
    icon: TrendingUp,
    highlights: ['High-ROAS Budget Scaling', 'Retention & LTV Flows', 'Continuous CRO Sprints'],
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto relative scroll-mt-20">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#5B0BB5]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B0638] border border-[#8B2BE2]/40 mb-4">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#E9E1F5]">
            Our Proven 4-Phase Framework
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          How We Grow{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] via-[#8B2BE2] to-[#60A5FA]">
            Your Business.
          </span>
        </h2>
        <p className="text-base sm:text-lg text-[#B8A9CC] mt-4 leading-relaxed">
          A systematic, repeatable growth engine engineered to turn unpredictable marketing into a disciplined profit center.
        </p>
      </div>

      {/* Process Pipeline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {processSteps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between group hover:border-[#8B2BE2] transition-all duration-300 relative overflow-hidden"
            >
              {/* Huge Ghost Step Number */}
              <div className="absolute -top-3 -right-2 text-6xl font-black text-[#54218A]/20 select-none pointer-events-none group-hover:text-[#8B2BE2]/20 transition-colors font-mono">
                {item.step}
              </div>

              <div>
                {/* Step badge & icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#24004F] border border-[#54218A] flex items-center justify-center text-[#C084FC] group-hover:text-white group-hover:bg-[#5B0BB5] group-hover:border-[#8B2BE2] transition-all duration-300 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-[#5B0BB5]/30 border border-[#8B2BE2]/40 text-[#E9E1F5]">
                    PHASE {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#C084FC] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#B8A9CC] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-[#54218A]/40 space-y-2">
                {item.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-xs text-[#E9E1F5]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
