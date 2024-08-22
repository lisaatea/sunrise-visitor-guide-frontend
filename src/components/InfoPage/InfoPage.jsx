import { Link } from "react-router-dom";
import { useState } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import MapPopup from "../MapPopup/MapPopup";
import TrailCardSection from "../TrailCardSection/TrailCardSection";
import "./InfoPage.css";

function InfoPage() {
  const [selectedTrail, setSelectedTrail] = useState(null);
  const [showMapPopup, setShowMapPopup] = useState(false);

  const handleTrailSelect = (trail) => {
    setSelectedTrail(trail);
  };

  const handleShowMap = (trail) => {
    setSelectedTrail(trail);
    setShowMapPopup(true);
  };

  const handleCloseMap = () => {
    setShowMapPopup(false);
  };

  return (
    <div className="info-page">
      <WeatherCard className="info-page__weather" />

      <TrailCardSection
        className="info-page__trail-cards"
        onTrailSelect={handleTrailSelect}
        onShowMap={handleShowMap}
      />
      <Link to="/" className="info-page__back-button">
        Back
      </Link>
      {showMapPopup && selectedTrail && (
        <MapPopup trail={selectedTrail} onClose={handleCloseMap} />
      )}
    </div>
  );
}

export default InfoPage;
