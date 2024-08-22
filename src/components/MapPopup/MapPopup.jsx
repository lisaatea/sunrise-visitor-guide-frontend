import { useEffect } from "react";
import TrailMap from "../TrailMap/TrailMap";
import "./MapPopup.css";

function MapPopup({ trail, onClose }) {
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  return (
    <div className="map-popup__overlay">
      <div className="map-popup__content">
        <button
          type="button"
          className="map-popup__close-btn"
          onClick={onClose}
        ></button>
        <h3 className="map-popup__title">{trail.name}</h3>
        <div className="map-popup__map">
          <TrailMap trail={trail} />
        </div>
      </div>
    </div>
  );
}

export default MapPopup;
