import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Filters from '../components/Filters.jsx';
import HighlightCard from '../components/HighlightCard.jsx';
import { content } from '../data/content.js';
import { places } from '../data/places.js';

const MapSection = () => {
  const position = [8.0863, 98.9063];

  return (
    <div className="relative w-full">
      <div className="relative z-30 -mb-6 mx-auto max-w-xl rounded-[28px] bg-white px-5 py-5 shadow-card">
        <div className="flex items-center gap-2">
          <span className="badge-green">{content.highlights.tag}</span>
        </div>
        <div className="mt-2 mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-slate-800">{content.highlights.title}</h3>
          <div className="text-xs font-semibold text-slate-500">Explore</div>
        </div>
        <Filters filters={content.filters} />
      </div>
      <div className="relative overflow-hidden rounded-[32px] bg-slate-200 shadow-card">
        <MapContainer
          center={position}
          zoom={11}
          scrollWheelZoom={false}
          className="h-[520px] w-full"
          zoomControl
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
          {places.map((place) => (
            <Marker key={place.name} position={place.position}>
              <Popup className="p-0">
                <div className="min-w-[240px] max-w-xs rounded-2xl bg-white p-4 shadow-xl shadow-primary/10">
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary">
                    {place.type}
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-base font-semibold text-slate-900">{place.name}</h4>
                      <p className="mt-1 text-sm text-slate-600">{place.description}</p>
                    </div>
                    <div className="flex items-center gap-1 rounded-xl bg-primary/5 px-3 py-2 text-primary shadow-inner">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                        aria-hidden
                      >
                        <path d="M12 3.25c.3 0 .57.17.7.44l2.03 4.11 4.53.66c.3.04.55.25.64.54s0 .6-.2.8l-3.28 3.2.77 4.5c.05.3-.07.6-.3.78a.77.77 0 0 1-.83.06L12 16.98l-4.06 2.13a.77.77 0 0 1-.83-.06.75.75 0 0 1-.3-.78l.77-4.5-3.28-3.2a.78.78 0 0 1-.2-.8.78.78 0 0 1 .64-.54l4.53-.66 2.03-4.11A.77.77 0 0 1 12 3.25Z" />
                      </svg>
                      <span className="text-sm font-semibold">{place.score.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {place.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary shadow-inner"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        <div className="pointer-events-none absolute bottom-4 right-4 z-30">
          <HighlightCard />
        </div>
      </div>
    </div>
  );
};

export default MapSection;
