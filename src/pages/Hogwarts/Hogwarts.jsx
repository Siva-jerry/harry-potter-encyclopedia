import { useEffect, useRef, useState } from "react";

import {
  GiCastle,
  GiCandleLight,
  GiStairs,
  GiSpellBook,
  GiTowerFlag,
  GiSnake,
  GiMagicSwirl,
  GiMountains,
  GiSparkles,
  GiFeather,
  GiSecretBook,
  GiStarSwirl,
} from "react-icons/gi";

import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";

import "./Hogwarts.css";


function Hogwarts() {
  const [activeSecret, setActiveSecret] =
    useState("chamber");

  const heroRef = useRef(null);


  /* =========================================================
     SCROLL TO TOUR
  ========================================================= */

  const beginTour = () => {
    document
      .getElementById("hogwarts-tour")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };


  /* =========================================================
     SUBTLE HERO PARALLAX
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const y = window.scrollY;

      heroRef.current.style.setProperty(
        "--hero-shift",
        `${Math.min(y * 0.11, 80)}px`
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);


  return (
    <main className="hogwarts-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="hogwarts-hero"
        ref={heroRef}
      >
        <img
          src="/images/hogwarts/hero/hogwarts-castle.png"
          alt="Hogwarts Castle"
          className="hogwarts-hero__image"
        />

        <div className="hogwarts-hero__veil" />
        <div className="hogwarts-hero__fog hogwarts-hero__fog--one" />
        <div className="hogwarts-hero__fog hogwarts-hero__fog--two" />


        {/* TOP MARK */}

        <div className="hogwarts-hero__mark">
          <GiCastle />

          <span>
            Hogwarts School
          </span>

          <i />

          <span>
            Scotland
          </span>
        </div>


        {/* MAIN COPY */}

        <div className="hogwarts-hero__content">
          <span className="hogwarts-hero__eyebrow">
            THE CASTLE BEYOND THE LAKE
          </span>

          <h1>
            Enter
            <em>
              Hogwarts
            </em>
          </h1>

          <p>
            Towers above the mountains.
            Candles floating beneath an
            enchanted sky. Hidden doors,
            ancient chambers and corridors
            that never seem to remain the same.
          </p>

          <button
            type="button"
            className="hogwarts-hero__enter"
            onClick={beginTour}
          >
            <span>
              Begin the Castle Tour
            </span>

            <FiArrowDown />
          </button>
        </div>


        {/* SIDE NAV */}

        <div className="hogwarts-hero__rail">
          <span>
            01
          </span>

          <i />

          <span>
            09
          </span>
        </div>


        {/* BOTTOM TEXT */}

        <div className="hogwarts-hero__bottom">
          <span>
            EST. C. 10TH CENTURY
          </span>

          <i />

          <span>
            SCHOOL OF WITCHCRAFT &amp;
            WIZARDRY
          </span>
        </div>
      </section>


      {/* =====================================================
          TOUR INTRO
      ===================================================== */}

      <section
        className="hogwarts-tour-intro"
        id="hogwarts-tour"
      >
        <div className="hogwarts-tour-intro__number">
          01
        </div>

        <div className="hogwarts-tour-intro__copy">
          <span>
            INSIDE THE CASTLE
          </span>

          <h2>
            Every corridor
            <em>
              remembers.
            </em>
          </h2>

          <p>
            Hogwarts is not simply a school.
            It is a living maze of towers,
            halls, classrooms, hidden rooms
            and forgotten secrets.
          </p>
        </div>

        <div className="hogwarts-tour-intro__seal">
          <GiMagicSwirl />
        </div>
      </section>


      {/* =====================================================
          GREAT HALL
      ===================================================== */}

      <section className="hogwarts-great-hall">
        <div className="hogwarts-great-hall__image">
          <img
            src="/images/hogwarts/locations/great-hall.png"
            alt="The Great Hall"
          />

          <div className="hogwarts-great-hall__shade" />

          <div className="hogwarts-great-hall__candles">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        <article className="hogwarts-great-hall__content">
          <span className="hogwarts-section-index">
            02 · THE GREAT HALL
          </span>

          <div className="hogwarts-great-hall__icon">
            <GiCandleLight />
          </div>

          <h2>
            Beneath an
            <em>
              enchanted sky
            </em>
          </h2>

          <p>
            The Great Hall is the heart of
            Hogwarts. Students gather here
            for meals, celebrations, important
            announcements and the Sorting
            Ceremony.
          </p>

          <div className="hogwarts-great-hall__details">
            <span>
              Floating Candles
            </span>

            <i />

            <span>
              Four House Tables
            </span>

            <i />

            <span>
              Enchanted Ceiling
            </span>
          </div>
        </article>
      </section>


      {/* =====================================================
          MOVING STAIRCASE
      ===================================================== */}

      <section className="hogwarts-staircase">
        <div className="hogwarts-staircase__copy">
          <span className="hogwarts-section-index">
            03 · THE GRAND STAIRCASE
          </span>

          <GiStairs />

          <h2>
            The castle
            <em>
              moves.
            </em>
          </h2>

          <p>
            Hogwarts staircases do not always
            lead where they did before. Some
            shift, some change direction and
            some seem to decide where a student
            should go.
          </p>

          <div className="hogwarts-staircase__note">
            <span>
              142 staircases are said to exist
              throughout the castle.
            </span>
          </div>
        </div>

        <div className="hogwarts-staircase__visual">
          <div className="hogwarts-staircase__frame">
            <img
              src="/images/hogwarts/locations/grand-staircase.png"
              alt="Grand Staircase"
            />

            <div className="hogwarts-staircase__overlay" />

            <span className="hogwarts-staircase__line hogwarts-staircase__line--one" />
            <span className="hogwarts-staircase__line hogwarts-staircase__line--two" />

            <div className="hogwarts-staircase__arrow">
              <FiArrowUpRight />
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          LIBRARY
      ===================================================== */}

      <section className="hogwarts-library">
        <header className="hogwarts-library__header">
          <div>
            <span className="hogwarts-section-index">
              04 · HOGWARTS LIBRARY
            </span>

            <h2>
              Knowledge
              <em>
                has boundaries.
              </em>
            </h2>
          </div>

          <GiSpellBook />
        </header>


        <div className="hogwarts-library__gallery">

          {/* NORMAL LIBRARY */}

          <article className="hogwarts-library-card hogwarts-library-card--main">
            <img
              src="/images/hogwarts/locations/library.png"
              alt="Hogwarts Library"
            />

            <div className="hogwarts-library-card__shade" />

            <div className="hogwarts-library-card__content">
              <span>
                THE LIBRARY
              </span>

              <h3>
                Thousands of
                magical books
              </h3>

              <p>
                Students study among ancient
                shelves filled with magical
                knowledge collected over
                centuries.
              </p>
            </div>
          </article>


          {/* RESTRICTED SECTION */}

          <article className="hogwarts-library-card hogwarts-library-card--restricted">
            <img
              src="/images/hogwarts/locations/restricted-section.png"
              alt="Restricted Section"
            />

            <div className="hogwarts-library-card__shade" />

            <div className="hogwarts-library-card__content">
              <span>
                RESTRICTED
              </span>

              <h3>
                Some books should
                not be opened
              </h3>

              <p>
                The Restricted Section contains
                dangerous magical texts that
                students cannot normally access.
              </p>
            </div>

            <div className="hogwarts-library-card__lock">
              <GiSecretBook />
            </div>
          </article>

        </div>
      </section>


      {/* =====================================================
          ASTRONOMY TOWER
      ===================================================== */}

      <section className="hogwarts-astronomy">
        <img
          src="/images/hogwarts/locations/astronomy-tower.png"
          alt="Astronomy Tower"
          className="hogwarts-astronomy__image"
        />

        <div className="hogwarts-astronomy__shade" />

        <div className="hogwarts-astronomy__stars">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>

        <div className="hogwarts-astronomy__content">
          <GiStarSwirl />

          <span className="hogwarts-section-index">
            05 · ASTRONOMY TOWER
          </span>

          <h2>
            Above the
            <em>
              castle
            </em>
          </h2>

          <p>
            The Astronomy Tower rises above
            Hogwarts, giving students a clear
            view of the night sky and the
            surrounding mountains.
          </p>
        </div>
      </section>


      {/* =====================================================
          HIDDEN SECRETS
      ===================================================== */}

      <section className="hogwarts-secrets">
        <header className="hogwarts-secrets__heading">
          <div>
            <span className="hogwarts-section-index">
              06 · HIDDEN WITHIN HOGWARTS
            </span>

            <h2>
              The castle keeps
              <em>
                secrets.
              </em>
            </h2>
          </div>

          <GiSnake />
        </header>


        {/* SECRET TABS */}

        <div className="hogwarts-secrets__switch">
          <button
            type="button"
            className={
              activeSecret === "chamber"
                ? "is-active"
                : ""
            }
            onClick={() =>
              setActiveSecret("chamber")
            }
          >
            <span>
              01
            </span>

            Chamber of Secrets
          </button>

          <button
            type="button"
            className={
              activeSecret === "requirement"
                ? "is-active"
                : ""
            }
            onClick={() =>
              setActiveSecret("requirement")
            }
          >
            <span>
              02
            </span>

            Room of Requirement
          </button>
        </div>


        {/* SECRET DISPLAY */}

        <div
          className={`hogwarts-secret-display hogwarts-secret-display--${activeSecret}`}
        >

          <div className="hogwarts-secret-display__image">
            <img
              src={
                activeSecret === "chamber"
                  ? "/images/hogwarts/secrets/chamber-of-secrets.png"
                  : "/images/hogwarts/secrets/room-of-requirement.png"
              }
              alt={
                activeSecret === "chamber"
                  ? "Chamber of Secrets"
                  : "Room of Requirement"
              }
            />

            <div className="hogwarts-secret-display__shade" />
          </div>


          <article className="hogwarts-secret-display__content">

            {activeSecret ===
            "chamber" ? (
              <>
                <span>
                  HIDDEN CHAMBER
                </span>

                <h3>
                  Chamber of
                  Secrets
                </h3>

                <p>
                  Built beneath Hogwarts by
                  Salazar Slytherin, the chamber
                  remained hidden for centuries.
                  Deep within it lived the
                  Basilisk.
                </p>

                <div className="hogwarts-secret-display__facts">
                  <span>
                    Salazar Slytherin
                  </span>

                  <span>
                    Basilisk
                  </span>

                  <span>
                    Parseltongue
                  </span>
                </div>
              </>
            ) : (
              <>
                <span>
                  ENCHANTED ROOM
                </span>

                <h3>
                  Room of
                  Requirement
                </h3>

                <p>
                  The Room of Requirement
                  appears only when someone
                  truly needs it, changing its
                  form to provide exactly what
                  the visitor requires.
                </p>

                <div className="hogwarts-secret-display__facts">
                  <span>
                    Hidden Door
                  </span>

                  <span>
                    Changing Interior
                  </span>

                  <span>
                    Dumbledore&apos;s Army
                  </span>
                </div>
              </>
            )}

          </article>

        </div>
      </section>


      {/* =====================================================
          GROUNDS
      ===================================================== */}

      <section className="hogwarts-grounds">
        <div className="hogwarts-grounds__image">
          <img
            src="/images/hogwarts/grounds/hogwarts-grounds.png"
            alt="Hogwarts Grounds"
          />

          <div className="hogwarts-grounds__shade" />
        </div>

        <article className="hogwarts-grounds__content">
          <GiMountains />

          <span className="hogwarts-section-index">
            07 · BEYOND THE WALLS
          </span>

          <h2>
            The world
            <em>
              outside
            </em>
          </h2>

          <p>
            Beyond the castle are the Black
            Lake, the Quidditch Pitch, Hagrid&apos;s
            Hut and the edge of the Forbidden
            Forest.
          </p>

          <div className="hogwarts-grounds__places">
            <span>
              Black Lake
            </span>

            <span>
              Quidditch Pitch
            </span>

            <span>
              Hagrid&apos;s Hut
            </span>

            <span>
              Forbidden Forest
            </span>
          </div>
        </article>
      </section>


      {/* =====================================================
          FINAL CREST
      ===================================================== */}

      <section className="hogwarts-finale">

        <div className="hogwarts-finale__lines">
          <span />
          <span />
          <span />
        </div>

        <div className="hogwarts-finale__crest">
          <div className="hogwarts-finale__ring hogwarts-finale__ring--one" />
          <div className="hogwarts-finale__ring hogwarts-finale__ring--two" />

          <div className="hogwarts-finale__glow" />

          <img
            src="/images/hogwarts/details/hogwarts-crest.png"
            alt="Hogwarts Crest"
          />
        </div>


        <div className="hogwarts-finale__content">
          <span>
            08 · HOGWARTS
          </span>

          <h2>
            More than
            <em>
              a school.
            </em>
          </h2>

          <p>
            Hogwarts becomes a home, a refuge
            and eventually a battlefield.
            Generations of witches and wizards
            leave part of their story inside
            its walls.
          </p>

          <div className="hogwarts-finale__signature">
            <GiFeather />

            <span>
              Hogwarts School of
              Witchcraft &amp; Wizardry
            </span>
          </div>
        </div>

      </section>


      {/* =====================================================
          END MARK
      ===================================================== */}

      <footer className="hogwarts-end">
        <span>
          HOGWARTS CASTLE ARCHIVE
        </span>

        <i />

        <GiSparkles />

        <i />

        <span>
          MISCHIEF MANAGED
        </span>
      </footer>

    </main>
  );
}


export default Hogwarts;