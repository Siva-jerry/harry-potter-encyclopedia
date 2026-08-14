import "./HogwartsExplore.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { Link } from "react-router-dom";

import {
  FiArrowUpRight,
} from "react-icons/fi";

import {
  GiMagicSwirl,
} from "react-icons/gi";


const locations = [
  {
    id: "great-hall",

    name: "The Great Hall",

    eyebrow: "HEART OF HOGWARTS",

    description:
      "Feasts, ceremonies and memories shared beneath an enchanted ceiling.",

    position: {
      left: "46%",
      top: "62%",
    },

    link: "/hogwarts/great-hall",
  },

  {
    id: "astronomy-tower",

    name: "Astronomy Tower",

    eyebrow: "THE HIGHEST REACHES",

    description:
      "One of Hogwarts' tallest towers, overlooking the castle grounds and night sky.",

    position: {
      left: "35%",
      top: "31%",
    },

    link: "/hogwarts/astronomy-tower",
  },

  {
    id: "library",

    name: "Hogwarts Library",

    eyebrow: "KNOWLEDGE & SECRETS",

    description:
      "Thousands of magical books, ancient knowledge and the forbidden Restricted Section.",

    position: {
      left: "61%",
      top: "59%",
    },

    link: "/hogwarts/library",
  },

  {
    id: "forbidden-forest",

    name: "Forbidden Forest",

    eyebrow: "BEYOND THE CASTLE",

    description:
      "Ancient trees, magical creatures and mysteries that students are warned to avoid.",

    position: {
      left: "84%",
      top: "65%",
    },

    link: "/hogwarts/forbidden-forest",
  },
];


function HogwartsExplore() {
  const sectionRef = useRef(null);

  const [visible, setVisible] =
    useState(false);

  const [activeLocation, setActiveLocation] =
    useState(null);

  const [parallax, setParallax] =
    useState({
      x: 0,
      y: 0,
    });


  /* ========================================
     SCROLL REVEAL
  ======================================== */

  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) return;


    const observer =
      new IntersectionObserver(
        ([entry]) => {

          if (entry.isIntersecting) {
            setVisible(true);

            observer.disconnect();
          }

        },
        {
          threshold: 0.18,
        }
      );


    observer.observe(section);


    return () => {
      observer.disconnect();
    };

  }, []);


  /* ========================================
     PARALLAX
  ======================================== */

  const handleMouseMove = (event) => {
    const section =
      sectionRef.current;

    if (!section) return;


    const bounds =
      section.getBoundingClientRect();


    const x =
      (event.clientX - bounds.left) /
        bounds.width -
      0.5;


    const y =
      (event.clientY - bounds.top) /
        bounds.height -
      0.5;


    setParallax({
      x: x * 12,
      y: y * 8,
    });
  };


  const resetParallax = () => {
    setParallax({
      x: 0,
      y: 0,
    });
  };


  return (
    <section
      ref={sectionRef}
      className={
        visible
          ? "hogwarts-explore hogwarts-explore--visible"
          : "hogwarts-explore"
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={resetParallax}
    >

      {/* ========================================
          INTRO
      ======================================== */}

      <div className="hogwarts-explore__intro">

        <p className="hogwarts-explore__eyebrow">
          HOGWARTS SCHOOL OF WITCHCRAFT
          & WIZARDRY
        </p>


        <h2 className="hogwarts-explore__title">
          Hogwarts Is More

          <span>
            Than a Castle.
          </span>
        </h2>


        <p className="hogwarts-explore__description">
          Every corridor remembers.
          Every tower has witnessed something.
          Explore a few of the places hidden
          within the castle and its grounds.
        </p>

      </div>


      {/* ========================================
          CASTLE WORLD
      ======================================== */}

      <div className="hogwarts-explore__world">

        {/* Atmosphere */}

        <div className="hogwarts-explore__aura" />

        <div className="hogwarts-explore__fog hogwarts-explore__fog--one" />

        <div className="hogwarts-explore__fog hogwarts-explore__fog--two" />


        {/* ========================================
            IMAGE + MARKERS

            IMPORTANT:
            Markers are inside .hogwarts-explore__castle
            so percentages match the actual image.
        ======================================== */}

        <div
          className="hogwarts-explore__image-wrapper"
          style={{
            transform: `
              translate3d(
                ${parallax.x}px,
                ${parallax.y}px,
                0
              )
            `,
          }}
        >

          <div className="hogwarts-explore__castle">

            <img
              src="/images/home/hogwarts-explore.webp"
              alt="Hogwarts castle"
              className="hogwarts-explore__image"
            />


            {/* ========================================
                LOCATION MARKERS
            ======================================== */}

            <div className="hogwarts-explore__locations">

              {locations.map((location) => {

                const active =
                  activeLocation ===
                  location.id;


                return (
                  <div
                    key={location.id}
                    className={
                      active
                        ? "hogwarts-location hogwarts-location--active"
                        : "hogwarts-location"
                    }
                    style={{
                      left:
                        location.position.left,

                      top:
                        location.position.top,
                    }}
                    onMouseEnter={() =>
                      setActiveLocation(
                        location.id
                      )
                    }
                    onMouseLeave={() =>
                      setActiveLocation(null)
                    }
                  >

                    {/* ==============================
                        MARKER
                    ============================== */}

                    <button
                      type="button"
                      className="hogwarts-location__marker"
                      onClick={() =>
                        setActiveLocation(
                          active
                            ? null
                            : location.id
                        )
                      }
                      aria-label={`Discover ${location.name}`}
                    >

                      <span className="hogwarts-location__pulse" />


                      <span className="hogwarts-location__icon">

                        <GiMagicSwirl />

                      </span>

                    </button>


                    {/* ==============================
                        CONNECTOR
                    ============================== */}

                    <span className="hogwarts-location__connector" />


                    {/* ==============================
                        INFO PANEL
                    ============================== */}

                    <div className="hogwarts-location__info">

                      <small>
                        {location.eyebrow}
                      </small>


                      <h3>
                        {location.name}
                      </h3>


                      <p>
                        {location.description}
                      </p>


                      <Link
                        to={location.link}
                        className="hogwarts-location__link"
                      >
                        Discover

                        <FiArrowUpRight />
                      </Link>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>


      {/* ========================================
          BOTTOM MESSAGE
      ======================================== */}

      <div className="hogwarts-explore__footer">

        <div className="hogwarts-explore__footer-line" />


        <span className="hogwarts-explore__footer-symbol">

          <GiMagicSwirl />

        </span>


        <div className="hogwarts-explore__footer-copy">

          <small>
            THE CASTLE REMEMBERS
          </small>

          <p>
            Move through its secrets.
          </p>

        </div>


        <div className="hogwarts-explore__footer-line" />

      </div>

    </section>
  );
}


export default HogwartsExplore;