import "./HomeButton.css";

import { Link, useLocation } from "react-router-dom";
import { FiHome } from "react-icons/fi";

function HomeButton() {
  const location = useLocation();

  // Hide the button on the landing page itself
  if (location.pathname === "/") {
    return null;
  }

  return (
    <Link
      to="/"
      className="global-home-button"
      aria-label="Return to landing page"
      title="Return Home"
    >
      {/* Outer magical orbit */}
      <span className="global-home-button__orbit">
        <i />
        <i />
      </span>

      {/* Inner circle */}
      <span className="global-home-button__inner">
        <FiHome />
      </span>

      {/* Magical glow */}
      <span className="global-home-button__glow" />

      {/* Tiny rune */}
      <span className="global-home-button__rune">
        ✦
      </span>
    </Link>
  );
}

export default HomeButton;