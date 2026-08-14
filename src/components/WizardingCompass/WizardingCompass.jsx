import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  GiCastle,
  GiSpellBook,
  GiMagicSwirl,
  GiPotionBall,
  GiFeather,
  GiHoodedFigure,
  GiAncientSword,
  GiTreasureMap,
  GiHourglass,
  GiBookmarklet,
  GiOpenBook,
} from "react-icons/gi";

import {
  FaUsers,
} from "react-icons/fa";

import {
  IoClose,
} from "react-icons/io5";

import "./WizardingCompass.css";


/* =========================================================
   COMPASS NAVIGATION DATA
========================================================= */

const compassItems = [
  {
    id: "stories",
    label: "Stories",
    subtitle: "The Saga",
    route: "/stories",
    icon: GiSpellBook,
    type: "primary",
  },

  {
    id: "timeline",
    label: "Timeline",
    subtitle: "Wizarding History",
    route: "/timeline",
    icon: GiHourglass,
    type: "primary",
  },

  {
    id: "encyclopedia",
    label: "Encyclopedia",
    subtitle: "Master Archive",
    route: "/encyclopedia",
    icon: GiOpenBook,
    type: "primary",
  },

  {
    id: "characters",
    label: "Characters",
    subtitle: "Witches & Wizards",
    route: "/characters",
    icon: FaUsers,
  },

  {
    id: "hogwarts",
    label: "Hogwarts",
    subtitle: "The Castle",
    route: "/hogwarts",
    icon: GiCastle,
  },

  {
    id: "houses",
    label: "Houses",
    subtitle: "Four Legacies",
    route: "/houses",
    icon: GiBookmarklet,
  },

  {
    id: "spells",
    label: "Spells",
    subtitle: "Incantations",
    route: "/spells",
    icon: GiMagicSwirl,
  },

  {
    id: "potions",
    label: "Potions",
    subtitle: "Alchemy",
    route: "/potions",
    icon: GiPotionBall,
  },

  {
    id: "creatures",
    label: "Creatures",
    subtitle: "Magical Beasts",
    route: "/creatures",
    icon: GiFeather,
  },

  {
    id: "artifacts",
    label: "Artifacts",
    subtitle: "Magical Objects",
    route: "/artifacts",
    icon: GiAncientSword,
  },

  {
    id: "places",
    label: "Places",
    subtitle: "Wizarding World",
    route: "/places",
    icon: GiTreasureMap,
  },

  {
    id: "dark-arts",
    label: "Dark Arts",
    subtitle: "Forbidden Magic",
    route: "/dark-arts",
    icon: GiHoodedFigure,
  },
];


/* =========================================================
   COMPONENT
========================================================= */

function WizardingCompass() {
  const [open, setOpen] = useState(false);

  const location = useLocation();


  /* =======================================================
     CLOSE
  ======================================================= */

  const closeCompass = () => {
    setOpen(false);
  };


  /* =======================================================
     CLOSE AFTER ROUTE CHANGE
  ======================================================= */

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);


  /* =======================================================
     LOCK PAGE + ESCAPE
  ======================================================= */

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;


    document.body.style.overflow =
      "hidden";


    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };


    window.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open]);


  return (
    <>

      {/* =====================================================
          PAGE OVERLAY
      ===================================================== */}

      <button
        type="button"
        className={
          open
            ? "wizard-compass-overlay active"
            : "wizard-compass-overlay"
        }
        onClick={closeCompass}
        aria-label="Close Wizarding Compass"
        tabIndex={open ? 0 : -1}
      />


      {/* =====================================================
          COMPASS
      ===================================================== */}

      <aside
        className={
          open
            ? "wizard-compass open"
            : "wizard-compass"
        }
        aria-label="Wizarding navigation"
      >


        {/* ===================================================
            EXPANDED NAVIGATION PANEL
        =================================================== */}

        <div className="compass-navigation">


          {/* DECORATIVE RINGS */}

          <div className="compass-decoration">
            <span className="compass-decoration__ring compass-decoration__ring--one" />
            <span className="compass-decoration__ring compass-decoration__ring--two" />
            <span className="compass-decoration__ring compass-decoration__ring--three" />

            <span className="compass-decoration__north">
              N
            </span>

            <span className="compass-decoration__east">
              E
            </span>

            <span className="compass-decoration__south">
              S
            </span>

            <span className="compass-decoration__west">
              W
            </span>
          </div>


          {/* =================================================
              HEADER
          ================================================= */}

          <header className="compass-navigation__header">

            <span className="compass-navigation__eyebrow">
              THE WIZARDING ARCHIVE
            </span>

            <h2>
              Choose Your
              <strong>
                Path
              </strong>
            </h2>

            <p>
              Every path leads deeper into
              the wizarding world.
            </p>

          </header>


          {/* =================================================
              PRIMARY ARCHIVES

              STORIES
              TIMELINE
              ENCYCLOPEDIA
          ================================================= */}

          <div className="compass-primary">


            {compassItems
              .filter(
                (item) =>
                  item.type === "primary"
              )
              .map((item) => {

                const Icon = item.icon;

                const active =
                  location.pathname ===
                  item.route;

                return (
                  <Link
                    key={item.id}
                    to={item.route}
                    onClick={closeCompass}
                    className={
                      `compass-primary__item compass-primary__item--${item.id} ${
                        active
                          ? "compass-primary__item--active"
                          : ""
                      }`
                    }
                  >

                    <span className="compass-primary__corner compass-primary__corner--one" />
                    <span className="compass-primary__corner compass-primary__corner--two" />


                    <div className="compass-primary__icon">
                      <Icon />
                    </div>


                    <div className="compass-primary__copy">

                      <small>
                        {item.subtitle}
                      </small>

                      <strong>
                        {item.label}
                      </strong>

                    </div>


                    <span className="compass-primary__arrow" aria-hidden="true">
                      <span>↗</span>
                    </span>

                  </Link>
                );
              })}

          </div>


          {/* =================================================
              DIVIDER
          ================================================= */}

          <div className="compass-divider">

            <span />

            <small>
              EXPLORE THE ARCHIVE
            </small>

            <span />

          </div>


          {/* =================================================
              ARCHIVE GRID
          ================================================= */}

          <nav className="compass-archive">

            {compassItems
              .filter(
                (item) =>
                  item.type !== "primary"
              )
              .map((item, index) => {

                const Icon = item.icon;

                const active =
                  location.pathname ===
                  item.route;

                return (
                  <Link
                    key={item.id}
                    to={item.route}
                    onClick={closeCompass}
                    className={
                      `compass-archive__item compass-archive__item--${item.id} ${
                        active
                          ? "compass-archive__item--active"
                          : ""
                      }`
                    }
                  >

                    <span className="compass-archive__number">
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>


                    <div className="compass-archive__icon">
                      <Icon />
                    </div>


                    <div className="compass-archive__copy">

                      <strong>
                        {item.label}
                      </strong>

                      <small>
                        {item.subtitle}
                      </small>

                    </div>

                  </Link>
                );
              })}

          </nav>


          {/* =================================================
              FOOTER
          ================================================= */}

          <footer className="compass-navigation__footer">

            <span>
              HOGWARTS
            </span>

            <i />

            <strong>
              ✦
            </strong>

            <i />

            <span>
              WIZARDING ARCHIVE
            </span>

          </footer>

        </div>


        {/* ===================================================
            MAIN TRIGGER
        =================================================== */}

        <button
          type="button"
          className="compass-trigger"
          onClick={() =>
            setOpen(
              (current) =>
                !current
            )
          }
          aria-label={
            open
              ? "Close Wizarding Compass"
              : "Open Wizarding Compass"
          }
          aria-expanded={open}
        >

          <span className="compass-trigger__halo" aria-hidden="true" />
          <span className="compass-trigger__ring compass-trigger__ring--outer" aria-hidden="true" />
          <span className="compass-trigger__ring compass-trigger__ring--inner" aria-hidden="true" />
          <span className="compass-trigger__spark compass-trigger__spark--one" aria-hidden="true" />
          <span className="compass-trigger__spark compass-trigger__spark--two" aria-hidden="true" />
          <span className="compass-trigger__spark compass-trigger__spark--three" aria-hidden="true" />

          <span className="compass-trigger__core">
            <span className="compass-trigger__symbol">
              {open ? <IoClose /> : "✦"}
            </span>
          </span>

          <span className="compass-trigger__label">
            {open ? "Close" : "Explore"}
          </span>

        </button>

      </aside>

    </>
  );
}


export default WizardingCompass;