'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Send,
  Calendar,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';

const serviceOptions = [
  'Facebook & Instagram Ads',
  'Google Ads (Search & PMax)',
  'Search Engine Optimization (SEO)',
  'YouTube SEO & Video Growth',
  'GA4 & Server-Side Tracking',
  'WordPress & Web Design',
  'Graphic Design & Brand Identity',
  'Video Editing & Motion Graphics',
  'Full Growth Suite (All Services)',
];

const budgetOptions = [
  'Under $500 / month',
  '$500 – $1,000 / month',
  '$1,000 – $3,000 / month',
  '$3,000 – $10,000+ / month',
  'Project-Based (One-time)',
  'Not sure yet (Need guidance)',
];

const timelineOptions = [
  'Immediately (Within 7 days)',
  '1 – 2 Weeks',
  'Next Month',
  'Just researching / planning',
];

export function ContactConsultation() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    website: '',
    phone: '',
    services: [] as string[],
    goals: '',
    currentSpend: '',
    challenge: '',
    budget: '',
    timeline: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleService = (srv: string) => {
    if (formData.services.includes(srv)) {
      setFormData({
        ...formData,
        services: formData.services.filter((s) => s !== srv),
      });
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, srv],
      });
    }
  };

  const validateStep = (step: number) => {
    const errs: Record<string, string> = {};
    if (step === 1) {
      if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
      if (!formData.email.trim()) {
        errs.email = 'Valid email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errs.email = 'Please enter a valid email address';
      }
    } else if (step === 2) {
      if (formData.services.length === 0) {
        errs.services = 'Please select at least one service';
      }
    } else if (step === 3) {
      if (!formData.goals.trim()) {
        errs.goals = 'Please describe your main business goals';
      }
    } else if (step === 4) {
      if (!formData.budget) {
        errs.budget = 'Please select an estimated budget';
      }
      if (!formData.timeline) {
        errs.timeline = 'Please select your target launch timeline';
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    // Simulate high-converting async submission & local confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      company: '',
      website: '',
      phone: '',
      services: [],
      goals: '',
      currentSpend: '',
      challenge: '',
      budget: '',
      timeline: '',
    });
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto relative scroll-mt-20">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#5B0BB5]/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B0638] border border-[#8B2BE2]/40 mb-4">
          <MessageSquare className="w-4 h-4 text-[#FACC15]" />
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#E9E1F5]">
            Start Your Growth Strategy
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Let’s Build Something{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] via-[#8B2BE2] to-[#60A5FA]">
            Extraordinary Together.
          </span>
        </h2>
        <p className="text-base sm:text-lg text-[#B8A9CC] mt-4 leading-relaxed">
          Tell us about your brand. We will audit your current setup and return with a customized growth blueprint.
        </p>
      </div>

      {/* Two-Column Consultation Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Trust, Values, Direct Contact */}
        <div className="lg:col-span-5 space-y-8">
          <div className="glass-card rounded-3xl p-8 space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Have a Project in Mind?
            </h3>
            <p className="text-sm text-[#B8A9CC] leading-relaxed">
              Here is what happens when you partner with UplixBD:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Strategy Built Around Your Business</h4>
                  <p className="text-xs text-[#B8A9CC] mt-0.5">No copy-paste playbooks. Every plan is bespoke to your target margins and customers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Performance-Focused Execution</h4>
                  <p className="text-xs text-[#B8A9CC] mt-0.5">We ruthlessly prioritize campaigns and funnels that generate real pipeline and revenue.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Transparent Communication & Reporting</h4>
                  <p className="text-xs text-[#B8A9CC] mt-0.5">Live Looker Studio dashboards, clear Slack updates, and no vanity metrics.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Agile Growth Approach</h4>
                  <p className="text-xs text-[#B8A9CC] mt-0.5">We aggressively scale what works, iterate fast, and kill unprofitable tests immediately.</p>
                </div>
              </div>
            </div>

            {/* Direct Contact info */}
            <div className="pt-6 border-t border-[#54218A]/50 space-y-3.5">
              <a
                href="mailto:contact@uplixbd.com"
                className="flex items-center gap-3 text-sm text-[#E9E1F5] hover:text-[#C084FC] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#24004F] border border-[#54218A] flex items-center justify-center text-[#C084FC]">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-semibold">contact@uplixbd.com</span>
              </a>

              <a
                href="tel:+8801314-085991"
                className="flex items-center gap-3 text-sm text-[#E9E1F5] hover:text-[#C084FC] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#24004F] border border-[#54218A] flex items-center justify-center text-[#C084FC]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold">+8801314-085991</span>
                </div>
              </a>

              <a
                href="https://wa.link/ajslww"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-[#E9E1F5] hover:text-[#22C55E] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#24004F] border border-[#54218A] flex items-center justify-center text-[#22C55E]">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.968.54 1.772.82 2.79.82 3.182 0 5.768-2.587 5.768-5.766.001-3.182-2.585-5.769-5.767-5.769zm10.222 5.834c0 5.66-4.603 10.264-10.264 10.264-1.761 0-3.447-.45-4.928-1.258l-5.617 1.472 1.501-5.474c-.899-1.536-1.398-3.325-1.398-5.004 0-5.661 4.604-10.264 10.264-10.264 5.66 0 10.264 4.603 10.264 10.264zm-5.023 3.652c-.279-.14-1.651-.815-1.907-.908-.256-.093-.442-.14-.628.14-.186.279-.721.908-.884 1.094-.163.186-.325.21-.604.07-.279-.14-1.178-.434-2.244-1.385-.829-.739-1.389-1.652-1.552-1.931-.163-.279-.018-.43.122-.569.126-.125.279-.326.419-.489.14-.163.186-.279.279-.465.093-.186.047-.349-.023-.489s-.628-1.512-.86-2.07c-.227-.544-.457-.47-.628-.479-.163-.008-.349-.01-.535-.01-.186 0-.488.07-.744.349-.256.279-.977.954-.977 2.326s1.001 2.698 1.14 2.884c.14.186 1.968 3.005 4.77 4.215.667.288 1.188.46 1.595.59.67.213 1.28.183 1.762.111.537-.08 1.651-.674 1.884-1.326.233-.651.233-1.209.163-1.326-.07-.116-.256-.186-.535-.326z" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-[#22C55E]">Chat on WhatsApp</span>
                  <span className="text-xs text-[#B8A9CC] ml-2">(Direct Instant Line)</span>
                </div>
              </a>

              <a
                href="https://share.google/8yknN3GIfedVQJB4w"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-[#E9E1F5] hover:text-[#C084FC] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#24004F] border border-[#54218A] flex items-center justify-center text-[#C084FC] group-hover:bg-[#5B0BB5] group-hover:text-white transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="underline decoration-[#54218A] group-hover:decoration-[#C084FC] underline-offset-4">
                  Bangladesh · Working Globally
                </span>
              </a>
            </div>

            {/* Response Guarantee Badge */}
            <div className="p-3.5 rounded-xl bg-[#100022]/80 border border-[#8B2BE2]/40 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-xs text-[#E9E1F5]">
                <span className="font-bold text-white">Rapid Response Guarantee:</span> Average strategist response time is under 4 business hours.
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 4-Step Interactive Consultation Form */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
            {!isSubmitted ? (
              <div>
                {/* Step Progress Header */}
                <div className="mb-8">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#B8A9CC] mb-2">
                    <span className="uppercase tracking-wider">Step {currentStep} of 4</span>
                    <span className="text-[#C084FC] font-mono font-bold">
                      {currentStep === 1 && 'Basic Information'}
                      {currentStep === 2 && 'Service Requirements'}
                      {currentStep === 3 && 'Goals & Challenges'}
                      {currentStep === 4 && 'Budget & Timeline'}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 rounded-full bg-[#24004F] overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#5B0BB5] via-[#7606CB] to-[#8B2BE2] transition-all duration-300 rounded-full"
                      style={{ width: `${(currentStep / 4) * 100}%` }}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* STEP 1: Basic Info */}
                  {currentStep === 1 && (
                    <div className="space-y-5 animate-in fade-in duration-200">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#E9E1F5]">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Alexander Mitchell"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#100022] border border-[#54218A] focus:border-[#8B2BE2] focus:outline-none text-white text-sm transition-colors"
                        />
                        {errors.fullName && <p className="text-xs text-[#EF4444]">{errors.fullName}</p>}
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#E9E1F5]">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alexander@company.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#100022] border border-[#54218A] focus:border-[#8B2BE2] focus:outline-none text-white text-sm transition-colors"
                        />
                        {errors.email && <p className="text-xs text-[#EF4444]">{errors.email}</p>}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold uppercase tracking-wider text-[#E9E1F5]">
                            Company / Brand Name
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="e.g. Apex Tech"
                            className="w-full px-4 py-3.5 rounded-xl bg-[#100022] border border-[#54218A] focus:border-[#8B2BE2] focus:outline-none text-white text-sm transition-colors"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-bold uppercase tracking-wider text-[#E9E1F5]">
                            Website / Store URL
                          </label>
                          <input
                            type="text"
                            value={formData.website}
                            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                            placeholder="https://company.com"
                            className="w-full px-4 py-3.5 rounded-xl bg-[#100022] border border-[#54218A] focus:border-[#8B2BE2] focus:outline-none text-white text-sm transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#E9E1F5]">
                          Phone / WhatsApp (Optional)
                        </label>
                        <input
                          type="text"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#100022] border border-[#54218A] focus:border-[#8B2BE2] focus:outline-none text-white text-sm transition-colors"
                        />
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Service Needs */}
                  {currentStep === 2 && (
                    <div className="space-y-5 animate-in fade-in duration-200">
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">
                          Which services do you need help with?
                        </h4>
                        <p className="text-xs text-[#B8A9CC]">
                          Select all that apply to your current growth objectives.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {serviceOptions.map((srv) => {
                          const isSelected = formData.services.includes(srv);
                          return (
                            <button
                              key={srv}
                              type="button"
                              onClick={() => toggleService(srv)}
                              className={`p-3.5 rounded-xl text-left text-xs font-semibold flex items-center justify-between border transition-all duration-200 ${
                                isSelected
                                  ? 'bg-[#5B0BB5] border-[#8B2BE2] text-white shadow-[0_0_15px_rgba(139,43,226,0.4)]'
                                  : 'bg-[#100022] border-[#54218A] text-[#E9E1F5] hover:border-[#8B2BE2]/60'
                              }`}
                            >
                              <span>{srv}</span>
                              <div
                                className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                  isSelected ? 'bg-white border-white text-[#5B0BB5]' : 'border-[#54218A]'
                                }`}
                              >
                                {isSelected && <CheckCircle2 className="w-3.5 h-3.5 fill-[#5B0BB5] text-white" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                      {errors.services && <p className="text-xs text-[#EF4444]">{errors.services}</p>}
                    </div>
                  )}

                  {/* STEP 3: Goals & Challenges */}
                  {currentStep === 3 && (
                    <div className="space-y-5 animate-in fade-in duration-200">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#E9E1F5]">
                          What are your primary business goals for the next 90 days? *
                        </label>
                        <textarea
                          rows={3}
                          value={formData.goals}
                          onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                          placeholder="e.g. We want to scale our monthly revenue from $30k to $100k while keeping ROAS above 3.5x..."
                          className="w-full px-4 py-3 rounded-xl bg-[#100022] border border-[#54218A] focus:border-[#8B2BE2] focus:outline-none text-white text-sm transition-colors"
                        />
                        {errors.goals && <p className="text-xs text-[#EF4444]">{errors.goals}</p>}
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#E9E1F5]">
                          Current Monthly Ad Spend
                        </label>
                        <input
                          type="text"
                          value={formData.currentSpend}
                          onChange={(e) => setFormData({ ...formData, currentSpend: e.target.value })}
                          placeholder="e.g. $2,000/mo or $0 (just starting)"
                          className="w-full px-4 py-3 rounded-xl bg-[#100022] border border-[#54218A] focus:border-[#8B2BE2] focus:outline-none text-white text-sm transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#E9E1F5]">
                          Biggest Current Marketing Bottleneck
                        </label>
                        <textarea
                          rows={2}
                          value={formData.challenge}
                          onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                          placeholder="e.g. Inconsistent ad creatives, poor tracking accuracy, high customer acquisition cost..."
                          className="w-full px-4 py-3 rounded-xl bg-[#100022] border border-[#54218A] focus:border-[#8B2BE2] focus:outline-none text-white text-sm transition-colors"
                        />
                      </div>
                    </div>
                  )}

                  {/* STEP 4: Budget & Timeline */}
                  {currentStep === 4 && (
                    <div className="space-y-6 animate-in fade-in duration-200">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-[#E9E1F5] block mb-2.5">
                          Estimated Monthly Marketing Budget *
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {budgetOptions.map((b) => {
                            const isSelected = formData.budget === b;
                            return (
                              <button
                                key={b}
                                type="button"
                                onClick={() => setFormData({ ...formData, budget: b })}
                                className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all ${
                                  isSelected
                                    ? 'bg-[#5B0BB5] border-[#8B2BE2] text-white shadow-md'
                                    : 'bg-[#100022] border-[#54218A] text-[#E9E1F5] hover:border-[#8B2BE2]/50'
                                }`}
                              >
                                {b}
                              </button>
                            );
                          })}
                        </div>
                        {errors.budget && <p className="text-xs text-[#EF4444] mt-1">{errors.budget}</p>}
                      </div>

                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-[#E9E1F5] block mb-2.5">
                          Target Project Launch Timeline *
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {timelineOptions.map((t) => {
                            const isSelected = formData.timeline === t;
                            return (
                              <button
                                key={t}
                                type="button"
                                onClick={() => setFormData({ ...formData, timeline: t })}
                                className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all ${
                                  isSelected
                                    ? 'bg-[#5B0BB5] border-[#8B2BE2] text-white shadow-md'
                                    : 'bg-[#100022] border-[#54218A] text-[#E9E1F5] hover:border-[#8B2BE2]/50'
                                }`}
                              >
                                {t}
                              </button>
                            );
                          })}
                        </div>
                        {errors.timeline && <p className="text-xs text-[#EF4444] mt-1">{errors.timeline}</p>}
                      </div>
                    </div>
                  )}

                  {/* Form Navigation Controls */}
                  <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-[#54218A]/50">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="px-5 py-3 rounded-xl bg-[#24004F] hover:bg-[#54218A] text-xs font-bold text-[#E9E1F5] flex items-center gap-2 transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Previous</span>
                      </button>
                    ) : (
                      <div />
                    )}

                    {currentStep < 4 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="px-7 py-3 rounded-xl bg-[#5B0BB5] hover:bg-[#7606CB] text-xs font-bold text-white shadow-[0_0_20px_rgba(91,11,181,0.4)] flex items-center gap-2 transition-all"
                      >
                        <span>Continue</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#5B0BB5] via-[#7606CB] to-[#8B2BE2] hover:brightness-110 text-sm font-bold text-white shadow-[0_0_30px_rgba(139,43,226,0.5)] flex items-center gap-2 transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Submitting Application...</span>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 text-[#FACC15]" />
                            <span>Request Growth Strategy</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </div>
            ) : (
              /* High-Fidelity Confirmation View */
              <div className="py-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#22C55E] to-[#10B981] flex items-center justify-center text-white mx-auto shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    Consultation Request Received!
                  </h3>
                  <p className="text-sm text-[#B8A9CC] mt-2 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Our senior growth strategist is reviewing your submission and preparing your forensic growth audit.
                  </p>
                </div>

                {/* Submission Summary Card */}
                <div className="p-5 rounded-2xl bg-[#100022] border border-[#54218A]/60 text-left max-w-md mx-auto space-y-2.5 text-xs text-[#E9E1F5]">
                  <div className="flex justify-between">
                    <span className="text-[#B8A9CC]">Email:</span>
                    <span className="font-semibold text-white">{formData.email}</span>
                  </div>
                  {formData.company && (
                    <div className="flex justify-between">
                      <span className="text-[#B8A9CC]">Company:</span>
                      <span className="font-semibold text-white">{formData.company}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-[#B8A9CC]">Selected Services:</span>
                    <span className="font-semibold text-[#C084FC] text-right truncate max-w-[200px]">
                      {formData.services.join(', ')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#B8A9CC]">Target Budget:</span>
                    <span className="font-semibold text-[#22C55E]">{formData.budget}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-xl bg-[#24004F] hover:bg-[#5B0BB5] text-xs font-semibold text-white transition-colors"
                  >
                    Submit Another Inquiry
                  </button>

                  <a
                    href="mailto:contact@uplixbd.com"
                    className="px-6 py-2.5 rounded-xl bg-[#5B0BB5] hover:bg-[#7606CB] text-xs font-bold text-white flex items-center gap-2 shadow-md"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send Direct Message</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
