'use client';

import React from 'react';
import {
  ShoppingBag,
  Building2,
  Stethoscope,
  Scale,
  Cpu,
  Wrench,
  Store,
  Gem,
  ArrowUpRight,
} from 'lucide-react';

const industries = [
  {
    icon: ShoppingBag,
    name: 'E-commerce & D2C Brands',
    desc: 'Scaling Shopify & WooCommerce stores with ROAS-optimized Meta/Google ads and retention email automation.',
    badge: 'High Scale',
  },
  {
    icon: Building2,
    name: 'Real Estate & Developers',
    desc: 'Generating qualified property buyers and investor inquiries via cinematic video tours and hyper-local targeting.',
    badge: 'High Ticket',
  },
  {
    icon: Stethoscope,
    name: 'Cosmetic & Dental Clinics',
    desc: 'Filling patient calendars with predictable aesthetic, implant, and orthodontic procedure appointments.',
    badge: 'Local Booking',
  },
  {
    icon: Scale,
    name: 'Legal & Professional Firms',
    desc: 'Capturing high-intent legal case inquiries and corporate consulting contracts through search dominance.',
    badge: 'High Authority',
  },
  {
    icon: Cpu,
    name: 'B2B SaaS & Tech Startups',
    desc: 'Driving enterprise product demos, trial sign-ups, and predictable pipeline for software companies.',
    badge: 'Recurring MRR',
  },
  {
    icon: Wrench,
    name: 'Home & Field Services',
    desc: 'Dominating local service areas for HVAC, roofing, solar, and remodeling contractors with exclusive phone calls.',
    badge: 'Direct Calls',
  },
  {
    icon: Store,
    name: 'Multi-Location Businesses',
    desc: 'Scalable multi-unit local SEO, Google Business Profile ranking, and unified regional ad attribution.',
    badge: 'Multi-Unit',
  },
  {
    icon: Gem,
    name: 'High-Ticket Service Providers',
    desc: 'Coaches, agencies, and specialty consultants scaling $5k–$50k package sales through VSL funnels.',
    badge: 'Premium Clients',
  },
];

export function IndustriesSection() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B0638] border border-[#8B2BE2]/40 mb-4">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#E9E1F5]">
            Targeted Industry Expertise
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Who We{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] via-[#8B2BE2] to-[#60A5FA]">
            Help Win.
          </span>
        </h2>
        <p className="text-base sm:text-lg text-[#B8A9CC] mt-4 leading-relaxed">
          Tailored growth playbooks customized to the specific unit economics and sales cycles of your industry.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((ind, idx) => {
          const Icon = ind.icon;
          return (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between group hover:border-[#8B2BE2] transition-all duration-300 relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#24004F] border border-[#54218A] flex items-center justify-center text-[#C084FC] group-hover:text-white group-hover:bg-[#5B0BB5] group-hover:border-[#8B2BE2] transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#5B0BB5]/30 text-[#E9E1F5] border border-[#8B2BE2]/30">
                    {ind.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#E9E1F5] transition-colors">
                  {ind.name}
                </h3>
                <p className="text-xs text-[#B8A9CC] leading-relaxed">
                  {ind.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#54218A]/30 flex items-center justify-between text-xs text-[#8B2BE2] font-semibold">
                <span>Proven Playbook</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
