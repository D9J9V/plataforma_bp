import "leaflet/dist/leaflet.css";
import style from "../../styles/Home.module.css";

import { MapContainer, TileLayer, Marker, ShapeFile } from "react-leaflet";

function Map() {
  return (
    <MapContainer
      className={style.map}
      center={[19.438898, -99.18014]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[19.438898, -99.18014]}></Marker>
    </MapContainer>
  );
}

export default Map;
