import "./TrailCard.css";

function TrailCard({ trail, onSelect, onShowMap }) {
  return (
    <div className="trail-card" onClick={onSelect}>
      <h3 className="trail-card__title">{trail.name}</h3>
      <div className="trail-card__image-container">
        <img
          className="trail-card__image"
          src={trail.imageUrl}
          alt={`Image of ${trail.name}`}
        />
      </div>
      <div className="trail-card__content">
        <div className="trail-card__info">
          <p className="trail-card__text">Distance : {trail.distance}</p>
          <p className="trail-card__text">Directions : {trail.directions}</p>
          <p className="trail-card__text">
            <span className="trail-card__text_highlight">
              Choose me if you like:
            </span>{" "}
            {trail.features}
          </p>
        </div>
      </div>
      <button
        type="button"
        className="trail-card__map-btn"
        onClick={() => onShowMap(trail)}
      >
        Show Map
      </button>
    </div>
  );
}

export default TrailCard;
