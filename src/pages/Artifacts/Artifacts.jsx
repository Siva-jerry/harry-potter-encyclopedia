import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  FiArrowDown,
  FiArrowUp,
  FiFilm,
  FiUser,
  FiZap,
} from "react-icons/fi";

import {
  GiMagicSwirl,
  GiSparkles,
} from "react-icons/gi";

import MagicalBackground from "../../components/MagicalBackground/MagicalBackground";

import artifactData from "../../data/artifactData";

import "./Artifacts.css";


/* =========================================================
   CATEGORY INFORMATION
========================================================= */

const categoryInfo = {
  transportation: {
    label: "Enchanted Transportation",
    chapter: "COLLECTION I",
  },

  "magical-tools": {
    label: "Magical Tools & Objects",
    chapter: "COLLECTION II",
  },

  "deathly-hallows": {
    label: "The Deathly Hallows",
    chapter: "COLLECTION III",
  },

  legendary: {
    label: "Legendary Artefacts",
    chapter: "COLLECTION IV",
  },

  horcrux: {
    label: "The Horcrux Archive",
    chapter: "RESTRICTED COLLECTION",
  },

  "dark-objects": {
    label: "Dark & Restricted Objects",
    chapter: "FORBIDDEN COLLECTION",
  },
};


/* =========================================================
   TYPEWRITER
========================================================= */

function ArtifactTypewriter({
  text,
  active,
  speed = 12,
}) {
  const [displayedText, setDisplayedText] =
    useState("");

  const completedRef = useRef(false);


  useEffect(() => {
    if (!active) return;

    if (completedRef.current) return;

    let currentIndex = 0;

    setDisplayedText("");


    const timer = window.setInterval(() => {

      currentIndex += 1;

      setDisplayedText(
        text.slice(
          0,
          currentIndex
        )
      );


      if (
        currentIndex >=
        text.length
      ) {
        window.clearInterval(timer);

        completedRef.current = true;
      }

    }, speed);


    return () => {
      window.clearInterval(timer);
    };

  }, [
    active,
    text,
    speed,
  ]);


  return (
    <>
      {displayedText}

      {active &&
        !completedRef.current && (
          <span className="artifact-archive__typing-cursor">
            |
          </span>
        )}
    </>
  );
}


/* =========================================================
   ARCHIVE FACT
========================================================= */

function ArchiveFact({
  icon,
  label,
  children,
}) {
  return (
    <div className="artifact-archive__fact">

      <div className="artifact-archive__fact-icon">
        {icon}
      </div>


      <div>

        <small>
          {label}
        </small>

        <p>
          {children}
        </p>

      </div>

    </div>
  );
}


/* =========================================================
   SINGLE ARTIFACT ENTRY
========================================================= */

function ArtifactEntry({
  artifact,
  index,
  activeId,
  onActivate,
}) {
  const entryRef = useRef(null);

  const [visible, setVisible] =
    useState(false);


  const displayNumber =
    String(index + 1).padStart(
      2,
      "0"
    );


  const reversed =
    index % 2 !== 0;


  const active =
    activeId === artifact.id;


  const category =
    categoryInfo[
      artifact.category
    ] ?? {
      label: artifact.type,
      chapter: "ARCHIVE",
    };


  /* =======================================================
     SCROLL TRIGGER
  ======================================================= */

  useEffect(() => {
    const element =
      entryRef.current;

    if (!element) return;


    const observer =
      new IntersectionObserver(
        ([entry]) => {

          if (
            entry.isIntersecting
          ) {
            setVisible(true);

            onActivate(
              artifact.id
            );
          }

        },
        {
          threshold: 0.32,

          rootMargin:
            "-10% 0px -24% 0px",
        }
      );


    observer.observe(element);


    return () => {
      observer.disconnect();
    };

  }, [
    artifact.id,
    onActivate,
  ]);


  return (
    <article
      ref={entryRef}
      id={`artifact-${artifact.id}`}
      className={[
        "artifact-archive__entry",

        `artifact-archive__entry--${artifact.category}`,

        reversed
          ? "artifact-archive__entry--reverse"
          : "artifact-archive__entry--normal",

        visible
          ? "artifact-archive__entry--visible"
          : "",

        active
          ? "artifact-archive__entry--active"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >

      {/* =====================================
          LARGE BACKGROUND NUMBER
      ====================================== */}

      <span className="artifact-archive__ghost-number">
        {displayNumber}
      </span>


      {/* =====================================
          CENTRAL NODE
      ====================================== */}

      <div className="artifact-archive__node">

        <span className="artifact-archive__node-core" />

        <span className="artifact-archive__node-ring artifact-archive__node-ring--one" />

        <span className="artifact-archive__node-ring artifact-archive__node-ring--two" />

      </div>


      {/* =====================================
          IMAGE SIDE
      ====================================== */}

      <div className="artifact-archive__visual">

        <div className="artifact-archive__visual-glow" />


        <div className="artifact-archive__orbit artifact-archive__orbit--one" />

        <div className="artifact-archive__orbit artifact-archive__orbit--two" />


        <figure className="artifact-archive__figure">

          <div className="artifact-archive__image-frame">

            <img
              src={artifact.image}
              alt={artifact.name}
              className="artifact-archive__image"
              loading="lazy"
            />


            <div className="artifact-archive__image-vignette" />

            <div className="artifact-archive__image-shimmer" />


            <span className="artifact-archive__corner artifact-archive__corner--tl" />

            <span className="artifact-archive__corner artifact-archive__corner--tr" />

            <span className="artifact-archive__corner artifact-archive__corner--bl" />

            <span className="artifact-archive__corner artifact-archive__corner--br" />


            <div className="artifact-archive__frame-number">
              {displayNumber}
            </div>

          </div>


          <figcaption>

            <span>
              ARCHIVE {displayNumber}
            </span>

            <i />

            <span>
              {artifact.type}
            </span>

          </figcaption>

        </figure>

      </div>


      {/* =====================================
          TEXT SIDE
      ====================================== */}

      <div className="artifact-archive__content">

        <div className="artifact-archive__content-inner">

          <div className="artifact-archive__chapter">

            <span>
              {category.chapter}
            </span>

            <i />

            <span>
              {category.label}
            </span>

          </div>


          <p className="artifact-archive__entry-number">
            OBJECT / {displayNumber}
          </p>


          <h2 className="artifact-archive__name">
            {artifact.name}
          </h2>


          <p className="artifact-archive__tagline">
            “{artifact.tagline}”
          </p>


          <div className="artifact-archive__ornament">

            <span />

            <GiSparkles />

            <span />

          </div>


          {/* =================================
              TYPEWRITER
          ================================== */}

          <div className="artifact-archive__description">

            <ArtifactTypewriter
              text={artifact.description}
              active={visible}
            />

          </div>


          {/* =================================
              FACTS
          ================================== */}

          <div className="artifact-archive__facts">

            <ArchiveFact
              icon={<FiZap />}
              label="MAGICAL PROPERTY"
            >
              {artifact.ability}
            </ArchiveFact>


            <ArchiveFact
              icon={<FiUser />}
              label="KNOWN OWNER / ORIGIN"
            >
              {artifact.owner}
            </ArchiveFact>


            <ArchiveFact
              icon={<FiFilm />}
              label="RECORDED APPEARANCE"
            >
              {artifact.appearance}
            </ArchiveFact>

          </div>

        </div>

      </div>

    </article>
  );
}


/* =========================================================
   MAIN PAGE
========================================================= */

function Artifacts() {
  const collectionRef =
    useRef(null);


  const [activeId, setActiveId] =
    useState(
      artifactData[0]?.id ?? ""
    );


  const activeIndex =
    useMemo(
      () =>
        artifactData.findIndex(
          (artifact) =>
            artifact.id ===
            activeId
        ),
      [activeId]
    );


  const activeArtifact =
    artifactData[
      activeIndex >= 0
        ? activeIndex
        : 0
    ];


  const activeNumber =
    String(
      (
        activeIndex >= 0
          ? activeIndex
          : 0
      ) + 1
    ).padStart(
      2,
      "0"
    );


  /* =======================================================
     ENTER ARCHIVE
  ======================================================= */

  const enterArchive = () => {

    collectionRef.current
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

  };


  /* =======================================================
     TOP
  ======================================================= */

  const returnTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  return (
    <main className="artifact-archive">

      {/* =====================================
          BACKGROUND
      ====================================== */}

      <MagicalBackground />


      {/* =====================================
          FIXED DECORATION
      ====================================== */}

      <div className="artifact-archive__page-line artifact-archive__page-line--left" />

      <div className="artifact-archive__page-line artifact-archive__page-line--right" />


      {/* =================================================
          HERO
      ================================================= */}

      <section className="artifact-archive__hero">

        <div className="artifact-archive__hero-aura" />


        <div className="artifact-archive__hero-mark">

          <span className="artifact-archive__hero-ring artifact-archive__hero-ring--outer" />

          <span className="artifact-archive__hero-ring artifact-archive__hero-ring--inner" />

          <GiMagicSwirl />

        </div>


        <p className="artifact-archive__hero-eyebrow">
          THE DEPARTMENT OF MAGICAL ARTEFACTS
        </p>


        <h1 className="artifact-archive__hero-title">

          Objects That

          <span>
            Remember Magic.
          </span>

        </h1>


        <p className="artifact-archive__hero-description">
          Some objects carry enchantments.
          Some preserve memories. Others can
          alter time, conceal a person,
          choose a champion or hold a fragment
          of something far darker.
        </p>


        <div className="artifact-archive__hero-count">

          <strong>
            {artifactData.length}
          </strong>

          <span>
            RECORDED
            <br />
            OBJECTS
          </span>

        </div>


        <button
          type="button"
          className="artifact-archive__enter"
          onClick={enterArchive}
        >

          <span>
            Open the Collection
          </span>

          <FiArrowDown />

        </button>


        <span className="artifact-archive__hero-record">
          ARCHIVE · MA-035
        </span>

      </section>


      {/* =================================================
          ACTIVE RECORD
      ================================================= */}

      {activeArtifact && (
        <aside className="artifact-archive__active">

          <span>
            {activeNumber}
          </span>


          <div>
            <i />
          </div>


          <p>
            {activeArtifact.name}
          </p>

        </aside>
      )}


      {/* =================================================
          COLLECTION
      ================================================= */}

      <section
        ref={collectionRef}
        className="artifact-archive__collection"
      >

        {/* =================================
            CENTRAL THREAD
        ================================== */}

        <div className="artifact-archive__thread">

          <span className="artifact-archive__thread-base" />

          <span className="artifact-archive__thread-light" />

        </div>


        {/* =================================
            INTRO
        ================================== */}

        <div className="artifact-archive__collection-heading">

          <span />

          <div>

            <small>
              WIZARDING OBJECT CATALOGUE
            </small>

            <h2>
              Thirty-Five
              <em>
                Recorded Artefacts
              </em>
            </h2>

          </div>

          <span />

        </div>


        {/* =================================
            ENTRIES
        ================================== */}

        <div className="artifact-archive__entries">

          {artifactData.map(
            (
              artifact,
              index
            ) => (

              <ArtifactEntry
                key={
                  artifact.id
                }
                artifact={
                  artifact
                }
                index={
                  index
                }
                activeId={
                  activeId
                }
                onActivate={
                  setActiveId
                }
              />

            )
          )}

        </div>

      </section>


      {/* =================================================
          END
      ================================================= */}

      <section className="artifact-archive__ending">

        <div className="artifact-archive__ending-mark">

          <span />

          ✦

          <span />

        </div>


        <p>
          END OF MAGICAL OBJECT RECORDS
        </p>


        <h2>

          Every object
          <span>
            carries a story.
          </span>

        </h2>


        <button
          type="button"
          onClick={returnTop}
        >

          <FiArrowUp />

          Return to the beginning

        </button>

      </section>

    </main>
  );
}

export default Artifacts;