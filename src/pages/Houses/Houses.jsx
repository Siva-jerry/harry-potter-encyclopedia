import { useMemo, useState } from "react";

import {
  GiLion,
  GiSnake,
  GiEagleHead,
  GiCastle,
  GiCrown,
  GiFeather,
  GiFire,
  GiWaterDrop,
  GiWindSlap,
  GiPlantRoots,
  GiSparkles,
  GiShield,
  GiGhost,
} from "react-icons/gi";

import { FaPaw } from "react-icons/fa";

import {
  FiArrowDown,
  FiArrowLeft,
  FiArrowRight,
  FiMapPin,
} from "react-icons/fi";

import houseData from "../../data/houseData";
import "./Houses.css";


/* =========================================================
   ICONS
========================================================= */

const houseIcons = {
  gryffindor: GiLion,
  slytherin: GiSnake,
  ravenclaw: GiEagleHead,
  hufflepuff: FaPaw,
};

const elementIcons = {
  Fire: GiFire,
  Water: GiWaterDrop,
  Air: GiWindSlap,
  Earth: GiPlantRoots,
};


/* =========================================================
   HOUSES PAGE
========================================================= */

function Houses() {
  const [activeHouseId, setActiveHouseId] =
    useState("gryffindor");


  /* =======================================================
     ACTIVE HOUSE
  ======================================================= */

  const activeHouse = useMemo(() => {
    return (
      houseData.find(
        (house) => house.id === activeHouseId
      ) || houseData[0]
    );
  }, [activeHouseId]);


  const activeIndex = houseData.findIndex(
    (house) => house.id === activeHouse.id
  );


  const HouseIcon =
    houseIcons[activeHouse.id] || GiShield;


  const ElementIcon =
    elementIcons[activeHouse.element] || GiSparkles;


  /* =======================================================
     HOUSE NAVIGATION
  ======================================================= */

  const selectHouse = (id) => {
    setActiveHouseId(id);
  };


  const previousHouse = () => {
    const index =
      activeIndex <= 0
        ? houseData.length - 1
        : activeIndex - 1;

    setActiveHouseId(houseData[index].id);
  };


  const nextHouse = () => {
    const index =
      activeIndex >= houseData.length - 1
        ? 0
        : activeIndex + 1;

    setActiveHouseId(houseData[index].id);
  };


  const scrollToHouses = () => {
    document
      .getElementById("house-explorer")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <main
      className={`houses-page houses-page--${activeHouse.id}`}
    >

      {/* ===================================================
          CINEMATIC HERO
      =================================================== */}

      <section className="houses-hero">

        <img
          src="/images/houses/hero/houses-hero.png"
          alt="The four Hogwarts house banners inside the Great Hall"
          className="houses-hero__image"
        />

        <div className="houses-hero__overlay" />
        <div className="houses-hero__vignette" />


        {/* Decorative lines */}

        <div className="houses-hero__ornament houses-hero__ornament--left">
          <span />
          <GiSparkles />
          <span />
        </div>


        {/* Hero content */}

        <div className="houses-hero__content">

          <div className="houses-hero__eyebrow">
            <span />
            <p>THE FOUR HOUSES OF HOGWARTS</p>
          </div>


          <h1>
            Where will
            <em>you belong?</em>
          </h1>


          <p className="houses-hero__description">
            For centuries, every student who entered Hogwarts
            has joined one of four houses — each shaped by the
            values of its founder and the students who carried
            its legacy forward.
          </p>


          <button
            type="button"
            className="houses-hero__button"
            onClick={scrollToHouses}
          >
            <span>Discover the Houses</span>

            <span className="houses-hero__button-icon">
              <FiArrowDown />
            </span>
          </button>

        </div>


        {/* House mini navigation */}

        <div className="houses-hero__houses">

          {houseData.map((house) => {
            const Icon =
              houseIcons[house.id] || GiShield;

            return (
              <button
                type="button"
                key={house.id}
                className={`houses-hero-house houses-hero-house--${house.id}`}
                onClick={() => {
                  selectHouse(house.id);

                  setTimeout(() => {
                    scrollToHouses();
                  }, 50);
                }}
              >

                <span className="houses-hero-house__icon">
                  <Icon />
                </span>

                <span className="houses-hero-house__copy">
                  <small>{house.number}</small>
                  <strong>{house.name}</strong>
                </span>

              </button>
            );
          })}

        </div>


        <div className="houses-hero__scroll">
          <span>EXPLORE</span>
          <i />
        </div>

      </section>


      {/* ===================================================
          HOUSE EXPLORER
      =================================================== */}

      <section
        id="house-explorer"
        className="house-explorer"
      >

        {/* Ambient glows */}

        <div className="house-explorer__glow house-explorer__glow--one" />
        <div className="house-explorer__glow house-explorer__glow--two" />


        {/* =================================================
            SELECTOR
        ================================================= */}

        <div className="house-selector">

          <div className="house-selector__label">

            <span>01</span>

            <div>
              <small>THE HOUSES</small>
              <strong>Choose your house</strong>
            </div>

          </div>


          <div className="house-selector__options">

            {houseData.map((house) => {
              const Icon =
                houseIcons[house.id] || GiShield;

              const active =
                activeHouse.id === house.id;

              return (
                <button
                  type="button"
                  key={house.id}
                  onClick={() => selectHouse(house.id)}
                  className={`house-selector__option house-selector__option--${house.id} ${
                    active ? "is-active" : ""
                  }`}
                >

                  <span className="house-selector__icon">
                    <Icon />
                  </span>

                  <span className="house-selector__name">
                    <small>{house.number}</small>
                    <strong>{house.name}</strong>
                  </span>

                </button>
              );
            })}

          </div>

        </div>


        {/* =================================================
            GRAND HOUSE SHOWCASE
        ================================================= */}

        <article
          className="house-showcase"
          key={`showcase-${activeHouse.id}`}
        >

          <img
            src={activeHouse.heroImage}
            alt={`${activeHouse.name} House`}
            className="house-showcase__background"
          />

          <div className="house-showcase__overlay" />


          {/* Number */}

          <span className="house-showcase__giant-number">
            {activeHouse.number}
          </span>


          {/* Left content */}

          <div className="house-showcase__content">

            <div className="house-showcase__topline">

              <span>
                HOUSE {activeHouse.number}
              </span>

              <i />

              <span>
                ESTABLISHED BY {activeHouse.founder}
              </span>

            </div>


            <h2>
              {activeHouse.name}
            </h2>


            <p className="house-showcase__tagline">
              “{activeHouse.tagline}”
            </p>


            <p className="house-showcase__description">
              {activeHouse.description}
            </p>


            {/* Facts */}

            <div className="house-showcase__facts">

              <div>
                <span>
                  <HouseIcon />
                </span>

                <div>
                  <small>EMBLEM</small>
                  <strong>{activeHouse.animal}</strong>
                </div>
              </div>


              <div>
                <span>
                  <ElementIcon />
                </span>

                <div>
                  <small>ELEMENT</small>
                  <strong>{activeHouse.element}</strong>
                </div>
              </div>


              <div>
                <span>
                  <GiGhost />
                </span>

                <div>
                  <small>HOUSE GHOST</small>
                  <strong>{activeHouse.ghost}</strong>
                </div>
              </div>

            </div>

          </div>


          {/* Crest */}

          <div className="house-showcase__crest-area">

            <div className="house-showcase__crest-ring">
              <span />
              <span />
              <span />
              <span />
            </div>


            <div className="house-showcase__crest-glow" />


            <img
              src={activeHouse.symbolImage}
              alt={`${activeHouse.name} emblem`}
              className="house-showcase__crest"
            />


            <div className="house-showcase__colors">

              <span>HOUSE COLOURS</span>

              <strong>
                {activeHouse.colors}
              </strong>

            </div>

          </div>


          {/* Bottom navigation */}

          <div className="house-showcase__navigation">

            <button
              type="button"
              onClick={previousHouse}
            >
              <FiArrowLeft />
              <span>Previous House</span>
            </button>


            <div className="house-showcase__progress">

              {houseData.map((house) => (
                <button
                  type="button"
                  key={house.id}
                  aria-label={`View ${house.name}`}
                  onClick={() => selectHouse(house.id)}
                  className={
                    activeHouse.id === house.id
                      ? "is-active"
                      : ""
                  }
                />
              ))}

            </div>


            <button
              type="button"
              onClick={nextHouse}
            >
              <span>Next House</span>
              <FiArrowRight />
            </button>

          </div>

        </article>


        {/* =================================================
            TRAITS
        ================================================= */}

        <section className="house-traits">

          <header className="house-section-heading">

            <div className="house-section-heading__number">
              02
            </div>

            <div>
              <span>THE VALUES THEY HOLD</span>

              <h2>
                The spirit of
                <em>{activeHouse.name}</em>
              </h2>
            </div>

          </header>


          <div className="house-traits__list">

            {activeHouse.traits.map((trait, index) => (
              <div
                className="house-trait"
                key={trait}
              >

                <span className="house-trait__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="house-trait__symbol">
                  <GiSparkles />
                </div>

                <strong>{trait}</strong>

                <i />

              </div>
            ))}

          </div>

        </section>


        {/* =================================================
            COMMON ROOM + FOUNDER
        ================================================= */}

        <section className="house-stories">

          {/* =================================================
              COMMON ROOM
          ================================================= */}

          <article
            className="house-story house-story--room"
            key={`room-${activeHouse.id}`}
          >

            <div className="house-story__image">

              <img
                src={activeHouse.commonRoomImage}
                alt={activeHouse.commonRoom}
              />

              <div className="house-story__image-overlay" />

              <div className="house-story__image-label">
                <FiMapPin />
                <span>INSIDE HOGWARTS</span>
              </div>

            </div>


            <div className="house-story__content">

              <span className="house-story__index">
                03 / COMMON ROOM
              </span>


              <h2>
                {activeHouse.commonRoom}
              </h2>


              <p>
                {activeHouse.commonRoomDescription}
              </p>


              <div className="house-story__signature">

                <HouseIcon />

                <span />

                <strong>
                  Home of {activeHouse.name}
                </strong>

              </div>

            </div>

          </article>


          {/* =================================================
              FOUNDER
          ================================================= */}

          <article
            className="house-story house-story--founder"
            key={`founder-${activeHouse.id}`}
          >

            <div className="house-story__content">

              <span className="house-story__index">
                04 / THE FOUNDER
              </span>


              <div className="house-story__crown">
                <GiCrown />
              </div>


              <h2>
                {activeHouse.founder}
              </h2>


              <p>
                {activeHouse.founderDescription}
              </p>


              <div className="house-founder-facts">

                <div>
                  <small>HOUSE</small>
                  <strong>{activeHouse.name}</strong>
                </div>

                <div>
                  <small>EMBLEM</small>
                  <strong>{activeHouse.animal}</strong>
                </div>

                <div>
                  <small>ELEMENT</small>
                  <strong>{activeHouse.element}</strong>
                </div>

              </div>

            </div>


            <div className="house-founder-portrait">

              <div className="house-founder-portrait__arch">

                <div className="house-founder-portrait__glow" />

                <img
                  src={activeHouse.founderImage}
                  alt={activeHouse.founder}
                />

              </div>


              <div className="house-founder-portrait__plaque">

                <span>FOUNDER</span>

                <strong>
                  {activeHouse.founder}
                </strong>

              </div>

            </div>

          </article>

        </section>


        {/* =================================================
            NOTABLE MEMBERS
        ================================================= */}

        <section className="house-members">

          <header className="house-members__header">

            <div className="house-section-heading">

              <div className="house-section-heading__number">
                05
              </div>

              <div>
                <span>THE HOUSE REGISTER</span>

                <h2>
                  Notable
                  <em>members</em>
                </h2>
              </div>

            </div>


            <div className="house-members__crest">
              <HouseIcon />
            </div>

          </header>


          <div className="house-members__grid">

            {activeHouse.notableMembers.map(
              (member, index) => (
                <article
                  className="house-member"
                  key={member}
                >

                  <span className="house-member__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>


                  <div className="house-member__line" />


                  <div className="house-member__name">
                    <GiFeather />

                    <strong>
                      {member}
                    </strong>
                  </div>


                  <span className="house-member__house">
                    {activeHouse.name}
                  </span>

                </article>
              )
            )}

          </div>

        </section>


        {/* =================================================
            FINAL HOUSE SWITCHER
        ================================================= */}

        <section className="house-footer-switcher">

          <span className="house-footer-switcher__label">
            CONTINUE EXPLORING
          </span>


          <h2>
            The other houses
            <em>await.</em>
          </h2>


          <div className="house-footer-switcher__houses">

            {houseData.map((house) => {
              const Icon =
                houseIcons[house.id] || GiShield;

              return (
                <button
                  type="button"
                  key={house.id}
                  className={`house-footer-card house-footer-card--${house.id} ${
                    activeHouse.id === house.id
                      ? "is-active"
                      : ""
                  }`}
                  onClick={() => {
                    selectHouse(house.id);

                    document
                      .getElementById("house-explorer")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                >

                  <span>
                    <Icon />
                  </span>

                  <small>
                    {house.number}
                  </small>

                  <strong>
                    {house.name}
                  </strong>

                  <FiArrowRight />

                </button>
              );
            })}

          </div>

        </section>

      </section>

    </main>
  );
}

export default Houses;