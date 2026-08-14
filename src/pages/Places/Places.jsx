import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  FiArrowLeft,
  FiArrowRight,
  FiMapPin,
  FiX,
} from "react-icons/fi";

import {
  GiCastle,
  GiCompass,
  GiFamilyHouse,
  GiForest,
  GiModernCity,
  GiMountains,
  GiVillage,
} from "react-icons/gi";

import MagicalBackground from "../../components/MagicalBackground/MagicalBackground";
import placeData from "../../data/placeData";

import "./Places.css";


/* =========================================================
   REGION ICONS
========================================================= */

const regionIcons = {
  hogwarts: GiCastle,
  grounds: GiForest,
  hogsmeade: GiVillage,
  london: GiModernCity,
  residences: GiFamilyHouse,
  beyond: GiMountains,
};


/* =========================================================
   PLACES
========================================================= */

function Places() {
  const [regionIndex, setRegionIndex] =
    useState(0);

  const [locationIndex, setLocationIndex] =
    useState(-1);

  const [sceneImage, setSceneImage] =
    useState(placeData[0].image);

  const [sceneChanging, setSceneChanging] =
    useState(false);

  const [ready, setReady] =
    useState(false);

  const transitionTimer =
    useRef(null);


  /* =======================================================
     CURRENT DATA
  ======================================================= */

  const region =
    placeData[regionIndex];

  const location =
    locationIndex >= 0
      ? region.locations[locationIndex]
      : null;

  const place =
    location || region;

  const RegionIcon =
    regionIcons[region.category] ||
    GiCompass;


  /* =======================================================
     COUNTERS
  ======================================================= */

  const currentNumber =
    locationIndex >= 0
      ? String(
          locationIndex + 1
        ).padStart(2, "0")
      : region.number;

  const totalLocations =
    String(
      region.locations.length
    ).padStart(2, "0");


  /* =======================================================
     PAGE ENTRANCE
  ======================================================= */

  useEffect(() => {
    const timer =
      window.setTimeout(() => {
        setReady(true);
      }, 100);

    return () =>
      window.clearTimeout(timer);
  }, []);


  /* =======================================================
     CLEAN TRANSITION TIMER
  ======================================================= */

  useEffect(() => {
    return () => {
      if (
        transitionTimer.current
      ) {
        window.clearTimeout(
          transitionTimer.current
        );
      }
    };
  }, []);


  /* =======================================================
     PRELOAD REGION IMAGES
  ======================================================= */

  useEffect(() => {
    const images = [
      region.image,

      ...region.locations.map(
        (item) => item.image
      ),
    ];

    [...new Set(images)].forEach(
      (src) => {
        const image =
          new Image();

        image.src = src;
      }
    );
  }, [region]);


  /* =======================================================
     SMART SCENE CHANGE

     If two locations use the same image,
     only the information changes.
  ======================================================= */

  const changeScene =
    useCallback(
      (
        nextImage,
        updateContent
      ) => {
        if (
          nextImage ===
          sceneImage
        ) {
          updateContent();
          return;
        }

        if (
          transitionTimer.current
        ) {
          window.clearTimeout(
            transitionTimer.current
          );
        }

        setSceneChanging(true);

        transitionTimer.current =
          window.setTimeout(
            () => {
              setSceneImage(
                nextImage
              );

              updateContent();

              requestAnimationFrame(
                () => {
                  setSceneChanging(
                    false
                  );
                }
              );
            },
            240
          );
      },
      [sceneImage]
    );


  /* =======================================================
     REGION
  ======================================================= */

  const openRegion = (index) => {
    const next =
      placeData[index];

    changeScene(
      next.image,
      () => {
        setRegionIndex(index);
        setLocationIndex(-1);
      }
    );
  };


  /* =======================================================
     LOCATION
  ======================================================= */

  const openLocation =
    useCallback(
      (index) => {
        const next =
          region.locations[index];

        if (!next) {
          return;
        }

        changeScene(
          next.image,
          () => {
            setLocationIndex(index);
          }
        );
      },
      [
        region,
        changeScene,
      ]
    );


  /* =======================================================
     OVERVIEW
  ======================================================= */

  const returnToOverview =
    useCallback(() => {
      changeScene(
        region.image,
        () => {
          setLocationIndex(-1);
        }
      );
    }, [
      region.image,
      changeScene,
    ]);


  /* =======================================================
     PREVIOUS
  ======================================================= */

  const previousLocation =
    useCallback(() => {
      if (
        region.locations.length ===
        0
      ) {
        return;
      }

      const next =
        locationIndex <= 0
          ? region.locations.length -
            1
          : locationIndex - 1;

      openLocation(next);
    }, [
      region.locations.length,
      locationIndex,
      openLocation,
    ]);


  /* =======================================================
     NEXT
  ======================================================= */

  const nextLocation =
    useCallback(() => {
      if (
        region.locations.length ===
        0
      ) {
        return;
      }

      const next =
        locationIndex < 0 ||
        locationIndex ===
          region.locations.length -
            1
          ? 0
          : locationIndex + 1;

      openLocation(next);
    }, [
      region.locations.length,
      locationIndex,
      openLocation,
    ]);


  /* =======================================================
     KEYBOARD
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (
      event
    ) => {
      if (
        event.key ===
        "ArrowRight"
      ) {
        nextLocation();
      }

      if (
        event.key ===
        "ArrowLeft"
      ) {
        previousLocation();
      }

      if (
        event.key ===
          "Escape" &&
        location
      ) {
        returnToOverview();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [
    location,
    nextLocation,
    previousLocation,
    returnToOverview,
  ]);


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <main
      className={
        ready
          ? "place-voyage place-voyage--ready"
          : "place-voyage"
      }
    >
      <MagicalBackground />


      {/* =====================================
          AMBIENT DETAILS
      ====================================== */}

      <div
        className="place-voyage__ambient"
        aria-hidden="true"
      >
        <span className="place-voyage__glow" />

        <span className="place-voyage__mist place-voyage__mist--one" />

        <span className="place-voyage__mist place-voyage__mist--two" />

        <i className="place-voyage__spark place-voyage__spark--one" />

        <i className="place-voyage__spark place-voyage__spark--two" />

        <i className="place-voyage__spark place-voyage__spark--three" />
      </div>


      {/* =====================================
          INTRO
      ====================================== */}

      <header className="place-voyage__intro">

        <div className="place-voyage__intro-mark">
          <span />
          <GiCompass />
          <span />
        </div>

        <p className="place-voyage__eyebrow">
          THE WIZARDING WORLD ATLAS
        </p>

        <h1>
          Places

          <span>
            Hidden Beyond Ordinary Sight
          </span>
        </h1>

        <p className="place-voyage__lead">
          Travel through magical
          castles, villages, hidden
          streets, homes and distant
          places.
        </p>

      </header>


      {/* =====================================
          REGION NAVIGATION
      ====================================== */}

      <nav
        className="place-voyage__regions"
        aria-label="Wizarding regions"
      >
        {placeData.map(
          (
            item,
            index
          ) => {
            const Icon =
              regionIcons[
                item.category
              ] || GiCompass;

            const active =
              index === regionIndex;

            return (
              <button
                key={item.id}
                type="button"
                className={
                  active
                    ? "place-voyage-region place-voyage-region--active"
                    : "place-voyage-region"
                }
                onClick={() =>
                  openRegion(index)
                }
              >
                <span className="place-voyage-region__icon">
                  <Icon />
                </span>

                <span className="place-voyage-region__text">
                  <small>
                    {item.number}
                  </small>

                  <strong>
                    {item.name}
                  </strong>
                </span>
              </button>
            );
          }
        )}
      </nav>


      {/* =====================================
          MAIN CINEMATIC STAGE
      ====================================== */}

      <section className="place-voyage__stage">

        {/* IMAGE */}

        <div
          className={
            sceneChanging
              ? "place-voyage__visual place-voyage__visual--changing"
              : "place-voyage__visual"
          }
        >
          <img
            key={sceneImage}
            src={sceneImage}
            alt={place.name}
          />

          <div className="place-voyage__shade" />

          <div className="place-voyage__vignette" />

          <span className="place-voyage__scene-light" />

          <span className="place-voyage__scene-mist place-voyage__scene-mist--left" />

          <span className="place-voyage__scene-mist place-voyage__scene-mist--right" />
        </div>


        {/* =================================
            TOP LOCATION STAMP
        ================================== */}

        <div className="place-voyage__stamp">

          <span className="place-voyage__stamp-icon">
            <RegionIcon />
          </span>

          <div>
            <small>
              REGION {region.number}
            </small>

            <strong>
              {region.name}
            </strong>
          </div>

        </div>


        {/* =================================
            CONTENT
        ================================== */}

        <article
          key={`${region.id}-${location?.id || "overview"}`}
          className="place-voyage__card"
        >
          <div className="place-voyage__card-top">

            <span className="place-voyage__counter">
              {currentNumber}
            </span>

            <span className="place-voyage__type">
              {location
                ? location.type
                : region.subtitle}
            </span>

            {location && (
              <button
                type="button"
                className="place-voyage__close"
                onClick={
                  returnToOverview
                }
                aria-label="Return to region overview"
              >
                <FiX />
              </button>
            )}

          </div>


          <div className="place-voyage__divider">
            <span />
            <i>✦</i>
            <span />
          </div>


          <h2>
            {place.name}
          </h2>


          {location && (
            <p className="place-voyage__location">
              <FiMapPin />

              {region.name}

              <span>
                •
              </span>

              {region.region}
            </p>
          )}


          <p className="place-voyage__description">
            {place.description}
          </p>


          <div className="place-voyage__known">
            <small>
              KNOWN FOR
            </small>

            <p>
              {place.knownFor}
            </p>
          </div>


          {!location && (
            <button
              type="button"
              className="place-voyage__explore"
              onClick={() =>
                openLocation(0)
              }
            >
              Explore locations

              <FiArrowRight />
            </button>
          )}

        </article>


        {/* =================================
            LOCATION RAIL
        ================================== */}

        <aside className="place-voyage__rail">

          <div className="place-voyage__rail-head">

            <div>
              <small>
                DISCOVER
              </small>

              <strong>
                {region.name}
              </strong>
            </div>

            <span>
              {totalLocations}
            </span>

          </div>


          <div className="place-voyage__rail-list">

            {region.locations.map(
              (
                item,
                index
              ) => {
                const active =
                  index ===
                  locationIndex;

                return (
                  <button
                    key={item.id}
                    type="button"
                    className={
                      active
                        ? "place-voyage-location place-voyage-location--active"
                        : "place-voyage-location"
                    }
                    onClick={() =>
                      openLocation(
                        index
                      )
                    }
                  >
                    <span className="place-voyage-location__number">
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <div>
                      <strong>
                        {item.name}
                      </strong>

                      <small>
                        {item.type}
                      </small>
                    </div>

                    <span className="place-voyage-location__dot" />
                  </button>
                );
              }
            )}

          </div>

        </aside>


        {/* =================================
            BOTTOM CONTROLS
        ================================== */}

        {location && (
          <div className="place-voyage__controls">

            <button
              type="button"
              onClick={
                previousLocation
              }
              aria-label="Previous location"
            >
              <FiArrowLeft />
            </button>


            <div className="place-voyage__progress">

              <strong>
                {currentNumber}
              </strong>

              <span>
                <i
                  style={{
                    width:
                      `${
                        ((locationIndex +
                          1) /
                          region.locations
                            .length) *
                        100
                      }%`,
                  }}
                />
              </span>

              <small>
                {totalLocations}
              </small>

            </div>


            <button
              type="button"
              onClick={
                nextLocation
              }
              aria-label="Next location"
            >
              <FiArrowRight />
            </button>

          </div>
        )}


        {/* =================================
            MAGICAL FRAME
        ================================== */}

        <div
          className="place-voyage__frame"
          aria-hidden="true"
        >
          <span className="place-voyage__corner place-voyage__corner--tl" />
          <span className="place-voyage__corner place-voyage__corner--tr" />
          <span className="place-voyage__corner place-voyage__corner--bl" />
          <span className="place-voyage__corner place-voyage__corner--br" />
        </div>

      </section>


      {/* =====================================
          FOOTER
      ====================================== */}

      <footer className="place-voyage__footer">

        <span />

        <p>
          Every place remembers a story.
        </p>

        <span />

      </footer>

    </main>
  );
}

export default Places;