import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const SearchControl = ({ onLocationSelect }) => {
  const map = useMap();
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const provider = new OpenStreetMapProvider();

  const handleSearch = async () => {
    if (searchText) {
      const results = await provider.search({ query: searchText });
      setSearchResults(results);
    }
  };

  const handleLocationSelect = (result) => {
    const { y: lat, x: lng } = result;
    map.setView([lat, lng], 13);
    onLocationSelect({ lat, lng });
    setSearchResults([]);
    setSearchText('');
  };

  return (
    <div className="absolute top-2 right-2 z-[1000]">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Cari lokasi..."
            className="px-3 py-1 border rounded-md focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Cari
          </button>
        </div>
        {searchResults.length > 0 && (
          <div className="bg-white rounded-md shadow-lg">
            {searchResults.map((result, index) => (
              <div
                key={index}
                onClick={() => handleLocationSelect(result)}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {result.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const LocationPicker = ({ onLocationSelect }) => {
  const [position, setPosition] = useState({ lat: -6.200000, lng: 106.816666 }); // Default to Jakarta

  const handleMarkerDrag = (e) => {
    const { lat, lng } = e.target.getLatLng();
    setPosition({ lat, lng });
    onLocationSelect({ lat, lng });
  };

  return (
    <div className="h-64 w-64 relative">
      <MapContainer
        center={[position.lat, position.lng]}
        zoom={13}
        className="h-full w-full rounded-lg"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={[position.lat, position.lng]}
          draggable={true}
          eventHandlers={{
            dragend: handleMarkerDrag,
          }}
        />
        <SearchControl onLocationSelect={setPosition} />
      </MapContainer>
    </div>
  );
};

export default LocationPicker;