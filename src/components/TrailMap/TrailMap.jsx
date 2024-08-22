import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { parseKML } from "../../utils/kmlParser";
import Preloader from "../Preloader/Preloader";
import "leaflet/dist/leaflet.css";
import "./TrailMap.css";

let defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

function TrailMap({ trail }) {
  const [routeData, setRouteData] = useState(null);

  useEffect(() => {
    fetch(trail.kmlUrl)
      .then((res) => res.text())
      .then((kmlString) => {
        const coordinates = parseKML(kmlString);
        setRouteData(coordinates);
      })
      .catch(console.error);
  }, [trail.kmlUrl]);

  if (!routeData) return <Preloader />;

  const center = routeData[Math.floor(routeData.length / 2)];

  return (
    <div className="trail-map-container">
      <div className="trail-map">
        <MapContainer center={center} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Polyline positions={routeData} color="red" />
          <Marker position={routeData[0]}>
            <Popup>Start</Popup>
          </Marker>
          <Marker position={routeData[routeData.length - 1]}>
            <Popup>End</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default TrailMap;
