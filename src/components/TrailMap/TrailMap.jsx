import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Popup,
} from "react-leaflet";
import { parseKML } from "../../utils/kmlParser";
import Preloader from "../Preloader/Preloader";
import "leaflet/dist/leaflet.css";
import "./TrailMap.css";

function TrailMap({ trail }) {
  const [routeData, setRouteData] = useState(null);

  useEffect(() => {
    fetch(trail.kmlUrl)
      .then((res) => res.text())
      .then((kmlString) => {
        console.log(
          "KML string received:",
          kmlString.substring(0, 100) + "..."
        );
        const coordinates = parseKML(kmlString);
        console.log("parsed coordinates:", coordinates.length, "points");
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
