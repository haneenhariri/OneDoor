import type { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useTranslation } from 'react-i18next';
import 'leaflet/dist/leaflet.css';

export default function Map() {
    const { t } = useTranslation();
    const position: LatLngExpression = [36.2056, 37.1542];

  return (
    <div className="w-full">
      {/* Map Title */}
      <div className="bg-gradient-to-r from-[#722973] via-[#a43ca6] to-[#F07EF2] py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-copperplateBold text-white mb-2">
            {t('Find Us Here')}
          </h2>
          <p className="text-white/90 text-xs sm:text-sm md:text-base">
            {t('Visit our office in Aleppo, Syria')}
          </p>
        </div>
      </div>

      {/* Map Container */}
      <MapContainer
        className="w-full"
        center={position}
        zoom={13}
        style={{ height: '350px', width: '100%'}}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <div className="text-center p-1">
              <strong className="text-[#722973] text-sm sm:text-base">OneDoor Company</strong>
              <br />
              <span className="text-xs sm:text-sm text-gray-600">Aleppo, Syria</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      {/* Responsive Map Height via Media Query */}
      <style>{`
        @media (min-width: 640px) {
          .leaflet-container {
            height: 400px !important;
          }
        }
        @media (min-width: 1024px) {
          .leaflet-container {
            height: 450px !important;
          }
        }
      `}</style>
    </div>
  )
}
