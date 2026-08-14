import "./MagicalBackground.css";

import {
  useMemo,
} from "react";

const STAR_COUNT = 572;

function createStars(count) {
  return Array.from(
    {
      length: count,
    },
    (_, index) => {
      const seed =
        index + 1;

      const left =
        (seed * 37.73) % 100;

      const top =
        (seed * 61.17) % 100;

      const size =
        1.2 +
        ((seed * 13.57) % 2.8);

      const delay =
        -((seed * 0.73) % 8);

      const duration =
        5 +
        ((seed * 1.37) % 6);

      const drift =
        -10 -
        ((seed * 4.25) % 36);

      const opacity =
        0.35 +
        ((seed * 0.11) % 0.65);

      return {
        id: index,

        style: {
          "--star-left":
            `${left}%`,

          "--star-top":
            `${top}%`,

          "--star-size":
            `${size}px`,

          "--star-delay":
            `${delay}s`,

          "--star-duration":
            `${duration}s`,

          "--star-drift":
            `${drift}px`,

          "--star-opacity":
            opacity,
        },
      };
    }
  );
}


function MagicalBackground() {
  const stars =
    useMemo(
      () =>
        createStars(
          STAR_COUNT
        ),
      []
    );

  return (
    <div
      className="magical-background"
      aria-hidden="true"
    >

      {/* =========================
          AMBIENT BACKGROUND
      ========================== */}

      <div className="magical-background__glow" />

      <div className="magical-background__glow magical-background__glow--secondary" />


      {/* =========================
          STAR FIELD
      ========================== */}

      <div className="magical-background__stars">

        {stars.map(
          ({
            id,
            style,
          }) => (
            <span
              key={id}
              style={style}
            />
          )
        )}

      </div>


      {/* =========================
          VERY SOFT MIST
      ========================== */}

      <div className="magical-background__mist magical-background__mist--one" />

      <div className="magical-background__mist magical-background__mist--two" />

    </div>
  );
}

export default MagicalBackground;