import React from 'react';
import { content } from '../data/content.js';

const HighlightCard = () => {
  const { badge, title, description, score, tags } = content.highlightCard;

  return (
    <div className="w-72 rounded-3xl bg-deepBlue px-5 py-4 text-white shadow-2xl md:w-80">
      <div className="mb-2 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
        {badge}
      </div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold leading-tight">{title}</h3>
          <p className="mt-1 text-sm text-slate-200">{description}</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-deepBlue font-bold text-lg shadow-glass">
          {score}
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-slate-100">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-white/10 px-3 py-1">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HighlightCard;
