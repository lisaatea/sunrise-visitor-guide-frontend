import TrailCard from "../TrailCard/TrailCard";
import trailData from "../../utils/trailData";
import "./TrailCardSection.css";

function TrailCardSection({ onTrailSelect, onShowMap, className }) {
  return (
    <div className={`trail-card-section ${className}`}>
      {trailData.map((trail) => (
        <TrailCard
          key={trail.id}
          trail={trail}
          onSelect={() => onTrailSelect(trail)}
          onShowMap={onShowMap}
        />
      ))}
    </div>
  );
}

export default TrailCardSection;
