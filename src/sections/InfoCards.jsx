import React from 'react';
import InfoCard from '../components/InfoCard.jsx';
import { content } from '../data/content.js';

const InfoCards = () => (
  <section className="pb-12">
    <div className="mx-auto grid max-w-6xl gap-4 px-4 md:grid-cols-2 md:px-6 lg:grid-cols-4">
      {content.infoCards.map((card) => (
        <InfoCard key={card.title} title={card.title} description={card.description} />
      ))}
    </div>
  </section>
);

export default InfoCards;
