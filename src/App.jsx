import React from 'react';
import Hero from './sections/Hero.jsx';
import InfoCards from './sections/InfoCards.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => (
  <div className="min-h-screen bg-surface text-slate-900">
    <Navbar />
    <main>
      <Hero />
      <InfoCards />
    </main>
  </div>
);

export default App;
