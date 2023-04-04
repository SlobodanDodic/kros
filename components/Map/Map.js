"use client"

import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { icon } from "leaflet"

const ICON = icon({
  iconUrl: "images/kontakt/marker.png",
  iconSize: [22, 22],
})
const center = [45.77006, 19.11321, 19];

export default function Map() {
  return (
    <MapContainer center={center} zoom={14} scrollWheelZoom={false} className='map' >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={ICON} position={center}>
        <Popup>
          K.R.O.S. <br /> Klub rekreativnih odbojkaša Sombor
        </Popup>
      </Marker>
    </MapContainer>
  )
}
