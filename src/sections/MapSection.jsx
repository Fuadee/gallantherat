import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Filters from '../components/Filters.jsx';
import HighlightCard from '../components/HighlightCard.jsx';
import { content } from '../data/content.js';

const MapSection = () => {
  const position = [8.0863, 98.9063];
  const viewpoint = [8.1587, 98.7433];

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
          <Marker position={position}>
            <Popup>Ao Nang Bay</Popup>
          </Marker>
          <Marker position={viewpoint}>
            <Popup>Khao Thong Hill Café</Popup>
          </Marker>
        </MapContainer>
        <div className="pointer-events-none absolute bottom-4 right-4 z-30">
          <HighlightCard />
        </div>
      </div>
    </div>
  );
};

export default MapSection;
