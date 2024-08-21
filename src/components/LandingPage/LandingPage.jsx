import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-page__overlay">
        <div className="landing-page__content">
          <h1 className="landing-page__title">About the Project</h1>
          <p className="landing-page__description">
            Welcome to this visitor&apos;s guide for the Sunrise region of Mount
            Rainier National Park.
          </p>
          <p className="landing-page__description-text">
            Inside you will find the current weather forecast for the area, as
            well information on top trails to explore.
          </p>
          <Link to="/info" className="landing-page__button">
            Let&apos;s Go!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
