import React from 'react';
import MapSection from './MapSection.jsx';
import { content } from '../data/content.js';

const Hero = () => {
  const { headline, subtext, primaryCta, secondaryCta } = content.hero;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-surface pt-28 pb-12">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 md:px-6 lg:grid-cols-[1.1fr_1.1fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            JOINJOY — Krabi Journeys
          </div>
          <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
            {headline}
          </h1>
          <p className="text-base text-muted md:text-lg">{subtext}</p>
          <div className="flex flex-wrap gap-3">
            <button className="button-primary">{primaryCta}</button>
            <button className="button-outline">{secondaryCta}</button>
          </div>
        </div>
        <div className="w-full">
          <MapSection />
        </div>
      </div>
    </section>
  );
};

export default Hero;
