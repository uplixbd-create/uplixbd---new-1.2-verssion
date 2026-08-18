'use client';

import React from 'react';
import { AlertCircle, CheckCircle, Flame, ShieldCheck, Zap, TrendingDown, ArrowUpRight } from 'lucide-react';

const stats = [
  { value: '250+', label: 'Businesses Served', sub: 'Across 15+ Countries' },
  { value: '3+', label: 'Years of Excellence', sub: 'Proven Growth Frameworks' },
  { value: '12+', label: 'Specialized Services', sub: 'Full Stack Performance' },
  { value: '100%', label: 'Performance-Focused', sub: 'Zero Vanity Metrics' },
];

const painPoints = [
  {
    icon: TrendingDown,
    title: 'Wasting Ad Budget Without Quality Leads',
    desc: 'Pouring thousands into Facebook & Google Ads with erratic click spikes, high bounce rates, and zero qualified pipeline.',
  },
  {
    icon: AlertCircle,
    title: 'High Website Traffic, Zero Conversions',
    desc: 'Visitors land on your page but leave immediately because of outdated design, slow speed, or weak value propositions.',
  },
  {
    icon: Zap,
    title: 'Broken GA4 & Zero Attribution Tracking',
    desc: 'Operating completely in the dark without reliable server-side tracking, GTM triggers, or accurate ROAS measurement.',
  },
  {
    icon: ShieldCheck,
    title: 'Unreliable Agencies & Cookie-Cutter Ads',
    desc: 'Tired of generic freelancers, opaque reporting, and agencies that care more about impressions than revenue.',
  },
];

export function TrustBar() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 border-y border-[#54218A]/30 bg-[#16022E]/60 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#5B0BB5]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#24004F]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Stat Blocks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 text-center md:text-left relative overflow-hidden group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E9E1F5] to-[#C084FC] tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white mt-1.5">{stat.label}</div>
              <div className="text-xs text-[#B8A9CC] mt-0.5">{stat.sub}</div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-[#8B2BE2]/10 rounded-full blur-xl group-hover:bg-[#8B2BE2]/25 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Problem Agitation Section */}
        <div className="rounded-3xl p-8 md:p-12 bg-[#1B0638]/90 border border-[#54218A] relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FACC15] px-3 py-1 rounded-full bg-[#FACC15]/10 border border-[#FACC15]/20 inline-block mb-3">
              The Reality Of Modern Digital Growth
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Most Businesses Struggle Because Marketing Is Disconnected.
            </h2>
            <p className="text-sm sm:text-base text-[#B8A9CC] mt-3">
              Running ads without strategic funnels, high-converting creatives, and accurate data tracking is like pouring water into a leaky bucket.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#100022]/70 border border-[#54218A]/50 hover:border-[#EF4444]/50 transition-all duration-200 flex gap-4 items-start group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/20 flex items-center justify-center shrink-0 text-[#EF4444]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#E9E1F5] group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#B8A9CC] mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Emphasized Bridge Callout */}
          <div className="mt-10 pt-8 border-t border-[#54218A]/50 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3.5 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-[#22C55E]/20 border border-[#22C55E] flex items-center justify-center text-[#22C55E] shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-extrabold text-white">
                  That&apos;s where UplixBD comes in.
                </div>
                <div className="text-xs sm:text-sm text-[#B8A9CC]">
                  We unify performance ads, creative excellence, technical web engineering, and server tracking into one relentless growth engine.
                </div>
              </div>
            </div>

            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#5B0BB5] hover:bg-[#7606CB] text-white font-semibold text-sm transition-all duration-200 shadow-[0_0_20px_rgba(91,11,181,0.4)] shrink-0"
            >
              <span>Explore Our Solution</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
