import React, { useState } from 'react';

const FilterButton = ({ label, active, onClick }) => (
  <button
    type="button"
    onClick={() => onClick(label)}
    className={`whitespace-nowrap rounded-full border px-3 py-2 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-primary/30 ${
      active
        ? 'bg-primary text-white border-primary shadow-card'
        : 'bg-white text-slate-700 border-slate-200 hover:border-primary hover:text-primary'
    }`}
  >
    {label}
  </button>
);

const Filters = ({ filters }) => {
  const [selected, setSelected] = useState({
    group: filters.groups[0],
    score: filters.score[0],
    special: filters.special[0],
  });

  const handleSelect = (type, value) => {
    setSelected((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
        <span>Groups</span>
        <div className="flex flex-wrap gap-2">
          {filters.groups.map((option) => (
            <FilterButton
              key={option}
              label={option}
              active={selected.group === option}
              onClick={() => handleSelect('group', option)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
        <span>Score</span>
        <div className="flex flex-wrap gap-2">
          {filters.score.map((option) => (
            <FilterButton
              key={option}
              label={option}
              active={selected.score === option}
              onClick={() => handleSelect('score', option)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
        <span>Special</span>
        <div className="flex flex-wrap gap-2">
          {filters.special.map((option) => (
            <FilterButton
              key={option}
              label={option}
              active={selected.special === option}
              onClick={() => handleSelect('special', option)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
