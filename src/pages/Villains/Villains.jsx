import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  createPortal,
} from "react-dom";

import {
  GiDeathSkull,
  GiHoodedFigure,
  GiCrossedSwords,
  GiMagicSwirl,
  GiScrollQuill,
} from "react-icons/gi";

import {
  FaEye,
  FaSkull,
} from "react-icons/fa";

import {
  IoClose,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";

import villainData from "../../data/villainData";

import "./Villains.css";


/* =========================================================
   FILTER CATEGORIES
========================================================= */

const categories = [
  {
    id: "all",
    label: "All Records",
  },

  {
    id: "main",
    label: "Main Threats",
  },

  {
    id: "death-eaters",
    label: "Death Eaters",
  },

  {
    id: "hogwarts",
    label: "Hogwarts",
  },

  {
    id: "dursleys",
    label: "Dursleys",
  },

  {
    id: "secondary",
    label: "Secondary",
  },

  {
    id: "threats",
    label: "Dark Creatures",
  },
];


/* =========================================================
   ARCHIVE RECORD
========================================================= */

function VillainRecord({
  villain,
  index,
  onExamine,
}) {
  const recordRef = useRef(null);


  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  useEffect(() => {
    const element =
      recordRef.current;

    if (!element) {
      return;
    }


    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting
          ) {
            element.classList.add(
              "villain-record--visible"
            );

            observer.unobserve(
              element
            );
          }
        },
        {
          threshold: 0.12,
        }
      );


    observer.observe(
      element
    );


    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <article
      ref={recordRef}
      className="villain-record"
      style={{
        "--villain-delay":
          `${
            Math.min(
              index * 35,
              250
            )
          }ms`,
      }}
    >

      <div className="villain-record__inner">


        {/* =================================
            TOP INFORMATION
        ================================== */}

        <div className="villain-record__top">

          <span className="villain-record__restricted">
            Restricted
          </span>

          <span className="villain-record__number">
            {villain.number}
          </span>

        </div>


        {/* =================================
            IMAGE
        ================================== */}

        <div className="villain-record__image">

          <img
            src={villain.image}
            alt={villain.name}
            loading="lazy"
          />

          <div className="villain-record__image-shade" />

          <div className="villain-record__image-scan" />

        </div>


        {/* =================================
            CONTENT
        ================================== */}

        <div className="villain-record__content">

          <small>
            {villain.classification}
          </small>


          <h3>
            {villain.name}
          </h3>


          <p className="villain-record__role">
            {villain.title}
          </p>


          <div className="villain-record__divider" />


          <div className="villain-record__threat">

            <span>
              Threat
            </span>

            <strong>
              {villain.threat}
            </strong>

          </div>


          {/* =================================
              REAL POPUP BUTTON
          ================================== */}

          <button
            type="button"
            className="villain-record__examine"
            onClick={() =>
              onExamine(villain)
            }
          >

            <FaEye />

            <span>
              Examine Record
            </span>

          </button>

        </div>


        <span className="villain-record__stamp">
          CONFIDENTIAL
        </span>

      </div>

    </article>
  );
}


/* =========================================================
   VILLAIN DOSSIER POPUP
========================================================= */

function VillainDossier({
  villain,
  villainIndex,
  onClose,
  onPrevious,
  onNext,
}) {

  /* =======================================================
     LOCK BODY + ESC
  ======================================================= */

  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow;


    document.body.style.overflow =
      "hidden";


    const handleKeyboard =
      (event) => {

        if (
          event.key ===
          "Escape"
        ) {
          onClose();
        }


        if (
          event.key ===
          "ArrowLeft"
        ) {
          onPrevious();
        }


        if (
          event.key ===
          "ArrowRight"
        ) {
          onNext();
        }

      };


    window.addEventListener(
      "keydown",
      handleKeyboard
    );


    return () => {

      document.body.style.overflow =
        previousOverflow;


      window.removeEventListener(
        "keydown",
        handleKeyboard
      );

    };
  }, [
    onClose,
    onPrevious,
    onNext,
  ]);


  /* =======================================================
     PORTAL POPUP
  ======================================================= */

  return createPortal(
    <div
      className="villain-popup"
      role="dialog"
      aria-modal="true"
      aria-labelledby="villain-popup-title"
    >

      {/* =================================
          BACKDROP
      ================================== */}

      <button
        type="button"
        className="villain-popup__backdrop"
        aria-label="Close villain record"
        onClick={onClose}
      />


      {/* =================================
          WINDOW
      ================================== */}

      <section className="villain-popup__window">


        {/* =================================
            MAGIC BORDER
        ================================== */}

        <div
          className="villain-popup__frame"
          aria-hidden="true"
        >

          <span className="villain-popup__corner villain-popup__corner--tl" />

          <span className="villain-popup__corner villain-popup__corner--tr" />

          <span className="villain-popup__corner villain-popup__corner--bl" />

          <span className="villain-popup__corner villain-popup__corner--br" />

        </div>


        {/* =================================
            CLOSE
        ================================== */}

        <button
          type="button"
          className="villain-popup__close"
          onClick={onClose}
          aria-label="Close record"
        >
          <IoClose />
        </button>


        {/* =================================
            LEFT PORTRAIT
        ================================== */}

        <div className="villain-popup__portrait">

          <img
            key={villain.id}
            src={villain.image}
            alt={villain.name}
          />


          <div className="villain-popup__portrait-shade" />


          <div className="villain-popup__portrait-number">
            {villain.number}
          </div>


          <div className="villain-popup__portrait-copy">

            <small>
              {villain.classification}
            </small>


            <h2
              id="villain-popup-title"
            >
              {villain.name}
            </h2>


            {villain.realName && (
              <p>
                {villain.realName}
              </p>
            )}

          </div>

        </div>


        {/* =================================
            RIGHT DOSSIER
        ================================== */}

        <div className="villain-popup__content">


          {/* HEADER */}

          <header className="villain-popup__header">

            <div>

              <span>
                Ministry of Magic
              </span>

              <small>
                Restricted Dark Arts Record
              </small>

            </div>


            <FaSkull />

          </header>


          {/* RECORD ID */}

          <div className="villain-popup__record-line">

            <span>
              RECORD
            </span>

            <strong>
              {String(
                villainIndex + 1
              ).padStart(
                3,
                "0"
              )}
            </strong>

            <i />

            <span>
              CONFIDENTIAL
            </span>

          </div>


          {/* ROLE */}

          <p className="villain-popup__role">
            {villain.title}
          </p>


          {/* TAGLINE */}

          <blockquote>
            {villain.tagline}
          </blockquote>


          {/* DESCRIPTION */}

          <p className="villain-popup__description">
            {villain.description}
          </p>


          {/* =================================
              FACTS
          ================================== */}

          <div className="villain-popup__facts">

            <div>

              <small>
                Affiliation
              </small>

              <strong>
                {villain.affiliation}
              </strong>

            </div>


            <div>

              <small>
                Threat Level
              </small>

              <strong className="villain-popup__danger">
                {villain.threat}
              </strong>

            </div>


            <div>

              <small>
                Status
              </small>

              <strong>
                {villain.status}
              </strong>

            </div>


            <div>

              <small>
                Classification
              </small>

              <strong>
                {villain.classification}
              </strong>

            </div>

          </div>


          {/* =================================
              KNOWN FOR
          ================================== */}

          <section className="villain-popup__known">

            <div className="villain-popup__known-title">

              <span />

              <small>
                KNOWN RECORD
              </small>

              <span />

            </div>


            <div className="villain-popup__known-list">

              {villain.knownFor.map(
                (
                  item,
                  index
                ) => (
                  <div
                    key={`${villain.id}-${index}`}
                    className="villain-popup__known-item"
                  >

                    <span>
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <p>
                      {item}
                    </p>

                  </div>
                )
              )}

            </div>

          </section>


          {/* =================================
              BOTTOM NAVIGATION
          ================================== */}

          <div className="villain-popup__navigation">

            <button
              type="button"
              onClick={onPrevious}
            >

              <IoChevronBack />

              <span>
                Previous
              </span>

            </button>


            <div className="villain-popup__progress">

              <strong>
                {String(
                  villainIndex + 1
                ).padStart(
                  2,
                  "0"
                )}
              </strong>

              <span />

              <small>
                {String(
                  villainData.length
                ).padStart(
                  2,
                  "0"
                )}
              </small>

            </div>


            <button
              type="button"
              onClick={onNext}
            >

              <span>
                Next
              </span>

              <IoChevronForward />

            </button>

          </div>

        </div>

      </section>

    </div>,

    document.body
  );
}


/* =========================================================
   MAIN PAGE
========================================================= */

function Villains() {
  const [
    activeCategory,
    setActiveCategory,
  ] = useState("all");


  const [
    selectedVillain,
    setSelectedVillain,
  ] = useState(null);


  /* =======================================================
     FILTER
  ======================================================= */

  const filteredVillains =
    useMemo(() => {

      if (
        activeCategory ===
        "all"
      ) {
        return villainData;
      }


      return villainData.filter(
        (villain) =>
          villain.category ===
          activeCategory
      );

    }, [activeCategory]);


  /* =======================================================
     CURRENT POPUP INDEX
  ======================================================= */

  const selectedIndex =
    selectedVillain
      ? villainData.findIndex(
          (villain) =>
            villain.id ===
            selectedVillain.id
        )
      : -1;


  /* =======================================================
     NEXT POPUP
  ======================================================= */

  const openNext = () => {

    if (
      selectedIndex < 0
    ) {
      return;
    }


    const next =
      selectedIndex ===
      villainData.length - 1
        ? 0
        : selectedIndex + 1;


    setSelectedVillain(
      villainData[next]
    );

  };


  /* =======================================================
     PREVIOUS POPUP
  ======================================================= */

  const openPrevious = () => {

    if (
      selectedIndex < 0
    ) {
      return;
    }


    const previous =
      selectedIndex === 0
        ? villainData.length - 1
        : selectedIndex - 1;


    setSelectedVillain(
      villainData[previous]
    );

  };


  /* =======================================================
     MAIN
  ======================================================= */

  return (
    <main className="villains-page">


      {/* ===================================================
          GLOBAL ATMOSPHERE
      =================================================== */}

      <div
        className="villains-page__atmosphere"
        aria-hidden="true"
      >

        <span className="villains-page__fog villains-page__fog--one" />

        <span className="villains-page__fog villains-page__fog--two" />

        <span className="villains-page__glow" />

      </div>


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="villains-hero">

        <GiDeathSkull className="villains-hero__symbol" />


        <div className="villains-hero__eyebrow">

          <span />

          <p>
            FORBIDDEN ARCHIVE
          </p>

          <span />

        </div>


        <h1>

          Dark

          <em>
            Arts
          </em>

        </h1>


        <p className="villains-hero__description">
          Restricted records of dark
          wizards, dangerous followers,
          corrupted authorities and other
          forces that threatened the
          wizarding world.
        </p>


        <div className="villains-hero__warning">

          <GiHoodedFigure />

          <div>

            <small>
              MINISTRY CLASSIFICATION
            </small>

            <strong>
              RESTRICTED KNOWLEDGE
            </strong>

          </div>

        </div>

      </section>


      {/* ===================================================
          VOLDEMORT FEATURE
      =================================================== */}

      <section className="villains-feature">


        {/* IMAGE */}

        <div className="villains-feature__visual">

          <img
            src={
              villainData[0].image
            }
            alt={
              villainData[0].name
            }
          />

          <div className="villains-feature__visual-shade" />

        </div>


        {/* CONTENT */}

        <div className="villains-feature__content">

          <div className="villains-feature__classification">

            <span>
              THREAT CLASSIFICATION
            </span>

            <strong>
              Ω
            </strong>

          </div>


          <small className="villains-feature__record">
            PRIMARY RECORD / 01
          </small>


          <h2>

            Lord

            <span>
              Voldemort
            </span>

          </h2>


          <p className="villains-feature__real-name">
            TOM MARVOLO RIDDLE
          </p>


          <div className="villains-feature__divider">

            <span />

            <i>✦</i>

          </div>


          <p className="villains-feature__tagline">
            {villainData[0].tagline}
          </p>


          <p className="villains-feature__description">
            {villainData[0].description}
          </p>


          <button
            type="button"
            className="villains-feature__open"
            onClick={() =>
              setSelectedVillain(
                villainData[0]
              )
            }
          >

            <GiScrollQuill />

            <span>
              Open Restricted Record
            </span>

          </button>

        </div>

      </section>


      {/* ===================================================
          ARCHIVE TITLE
      =================================================== */}

      <section className="villains-registry-heading">

        <GiMagicSwirl />


        <small>
          MINISTRY RESTRICTED REGISTRY
        </small>


        <h2>
          Known
          <em>
            Threats
          </em>
        </h2>


        <p>
          Thirty-one restricted records
          remain in the archive. Examine
          each file to reveal its history,
          threat level and known actions.
        </p>

      </section>


      {/* ===================================================
          FILTER
      =================================================== */}

      <nav
        className="villains-filter"
        aria-label="Villain categories"
      >

        {categories.map(
          (category) => (

            <button
              key={category.id}
              type="button"
              className={
                activeCategory ===
                category.id
                  ? "villains-filter__button villains-filter__button--active"
                  : "villains-filter__button"
              }
              onClick={() =>
                setActiveCategory(
                  category.id
                )
              }
            >

              {category.label}

            </button>

          )
        )}

      </nav>


      {/* ===================================================
          RECORDS
      =================================================== */}

      <section className="villains-registry">

        <header className="villains-registry__header">

          <span>
            ACTIVE FILES
          </span>

          <strong>
            {String(
              filteredVillains.length
            ).padStart(
              2,
              "0"
            )}
          </strong>

        </header>


        <div className="villains-registry__grid">

          {filteredVillains.map(
            (
              villain,
              index
            ) => (

              <VillainRecord
                key={villain.id}
                villain={villain}
                index={index}
                onExamine={
                  setSelectedVillain
                }
              />

            )
          )}

        </div>

      </section>


      {/* ===================================================
          ENDING
      =================================================== */}

      <section className="villains-ending">

        <GiCrossedSwords />


        <small>
          END OF RESTRICTED RECORDS
        </small>


        <h2>

          Darkness was powerful.

          <span>
            It was never unstoppable.
          </span>

        </h2>


        <p>
          These records became part of the
          history of the struggle against
          dark magic and Voldemort's rise
          to power.
        </p>

      </section>


      {/* ===================================================
          POPUP
      =================================================== */}

      {selectedVillain && (
        <VillainDossier
          villain={
            selectedVillain
          }
          villainIndex={
            selectedIndex
          }
          onClose={() =>
            setSelectedVillain(
              null
            )
          }
          onPrevious={
            openPrevious
          }
          onNext={
            openNext
          }
        />
      )}

    </main>
  );
}

export default Villains;