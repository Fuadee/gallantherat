import React from 'react';

const InfoCard = ({ title, description }) => (
  <div className="flex flex-col gap-1 rounded-2xl bg-white p-5 shadow-card transition hover:-translate-y-0.5">
    <h4 className="text-xs font-bold text-slate-500">{title}</h4>
    <p className="text-sm font-semibold text-slate-800">{description}</p>
  </div>
);

export default InfoCard;
