import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { createPortal } from "react-dom";

import {
  FiArrowDown,
  FiBookOpen,
  FiChevronLeft,
  FiChevronRight,
  FiGlobe,
  FiMapPin,
  FiPlay,
  FiStar,
  FiUsers,
  FiVideo,
  FiX,
} from "react-icons/fi";

import storyData from "../../data/storyData";

import "./Stories.css";


/* =========================================================
   PARTICLES
========================================================= */

const particles = Array.from(
  { length: 42 },
  (_, index) => ({
    id: index,

    left:
      (index * 37 + 11) % 100,

    top:
      (index * 51 + 9) % 100,

    size:
      2 + (index % 4),

    delay:
      (index % 12) * 0.5,

    duration:
      8 + (index % 8),
  })
);


/* =========================================================
   TEXT
========================================================= */

const pageText = {
  en: {
    archive:
      "THE ILLUSTRATED STORY ARCHIVE",

    titleA:
      "Once Upon",

    titleB:
      "a Wizarding World",

    hero:
      "Eight illustrated chapters follow one extraordinary journey from an unknown childhood to the final battle for Hogwarts.",

    begin:
      "Open the Storybook",

    chapters:
      "STORY CHAPTERS",

    journey:
      "Turn the Pages",

    journeyAccent:
      "of the Journey",

    journeyDescription:
      "Read each illustrated chapter or step into its cinematic memory through the trailer.",

    read:
      "Read Chapter",

    trailer:
      "Watch Trailer",

    cinematicMemory:
      "CINEMATIC MEMORY",

    keyMoments:
      "Key Moments",

    characters:
      "Characters",

    places:
      "Places",

    previous:
      "Previous",

    next:
      "Next",

    ending:
      "The final page",

    endingAccent:
      "is never truly final.",

    endingDescription:
      "The battle may end, but its people, memories and magic continue throughout the Wizarding Archive.",

    reader:
      "Illustrated Story Record",

    close:
      "Close Story",

    closeTrailer:
      "Close Trailer",

    trailerUnavailable:
      "Trailer currently unavailable.",

    readThisChapter:
      "Read This Chapter",
  },


  ta: {
    archive:
      "விளக்கப்பட மந்திரக் கதை காப்பகம்",

    titleA:
      "ஒரு காலத்தில்",

    titleB:
      "ஒரு மந்திர உலகம்",

    hero:
      "அறியப்படாத சிறுவயதிலிருந்து ஹாக்வார்ட்ஸிற்கான இறுதிப் போர் வரை — எட்டு ஓவிய அத்தியாயங்களில் விரியும் ஒரு அற்புதமான பயணம்.",

    begin:
      "கதைப்புத்தகத்தை திறக்கவும்",

    chapters:
      "கதை அத்தியாயங்கள்",

    journey:
      "பக்கங்களைத் திருப்புங்கள்",

    journeyAccent:
      "பயணம் தொடரட்டும்",

    journeyDescription:
      "ஒவ்வொரு ஓவிய அத்தியாயத்தையும் படிக்கலாம் அல்லது அதன் சினிமா நினைவுக்குள் டிரெய்லர் மூலம் நுழையலாம்.",

    read:
      "அத்தியாயத்தை படிக்கவும்",

    trailer:
      "டிரெய்லரை பார்க்கவும்",

    cinematicMemory:
      "சினிமா நினைவு",

    keyMoments:
      "முக்கிய நிகழ்வுகள்",

    characters:
      "கதாபாத்திரங்கள்",

    places:
      "இடங்கள்",

    previous:
      "முந்தையது",

    next:
      "அடுத்தது",

    ending:
      "கடைசி பக்கம்",

    endingAccent:
      "உண்மையில் கடைசியல்ல.",

    endingDescription:
      "போர் முடிந்தாலும் அதன் மனிதர்கள், நினைவுகள் மற்றும் மந்திரம் Wizarding Archive முழுவதும் தொடர்ந்து வாழ்கின்றன.",

    reader:
      "விளக்கப்பட கதை பதிவு",

    close:
      "கதையை மூடு",

    closeTrailer:
      "டிரெய்லரை மூடு",

    trailerUnavailable:
      "டிரெய்லர் தற்போது கிடைக்கவில்லை.",

    readThisChapter:
      "இந்த அத்தியாயத்தை படிக்கவும்",
  },
};


/* =========================================================
   TRAILER MODAL
========================================================= */

function TrailerModal({
  story,
  language,
  ui,
  onClose,
  onRead,
}) {
  if (!story) {
    return null;
  }

  const content =
    story[language];

  const youtubeId =
    story.trailer?.youtubeId;


  return createPortal(
    <div
      className="story-trailer-overlay"
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >

      <section
        className="story-trailer"
        role="dialog"
        aria-modal="true"
        aria-label={`${content.title} trailer`}
      >

        {/* =====================================
            TRAILER PARTICLES
        ====================================== */}

        <div
          className="story-trailer__particles"
          aria-hidden="true"
        >
          {particles
            .slice(0, 22)
            .map((particle) => (
              <span
                key={particle.id}
                style={{
                  "--particle-left":
                    `${particle.left}%`,

                  "--particle-top":
                    `${particle.top}%`,

                  "--particle-delay":
                    `${particle.delay}s`,
                }}
              />
            ))}
        </div>


        {/* =====================================
            TOPBAR
        ====================================== */}

        <header className="story-trailer__topbar">

          <div className="story-trailer__label">

            <span className="story-trailer__label-icon">
              <FiVideo />
            </span>

            <div>

              <small>
                {ui.cinematicMemory}
              </small>

              <strong>
                {content.shortTitle}
              </strong>

            </div>

          </div>


          <button
            type="button"
            className="story-trailer__close"
            onClick={onClose}
            aria-label={
              ui.closeTrailer
            }
          >
            <FiX />
          </button>

        </header>


        {/* =====================================
            VIDEO FRAME
        ====================================== */}

        <div className="story-trailer__stage">

          <div className="story-trailer__video-shell">

            <div className="story-trailer__video">

              {youtubeId ? (
                <iframe
                  src={
                    `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`
                  }
                  title={
                    `${content.title} trailer`
                  }
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="story-trailer__unavailable">

                  <span>
                    <FiPlay />
                  </span>

                  <p>
                    {
                      ui.trailerUnavailable
                    }
                  </p>

                </div>
              )}

            </div>

          </div>

        </div>


        {/* =====================================
            INFO
        ====================================== */}

        <footer className="story-trailer__footer">

          <div className="story-trailer__meta">

            <div className="story-trailer__meta-line">

              <span>
                CHAPTER {story.number}
              </span>

              <i />

              <span>
                {story.year}
              </span>

            </div>


            <small>
              {content.subtitle}
            </small>


            <h2>
              {content.shortTitle}
            </h2>

          </div>


          <button
            type="button"
            className="story-trailer__read"
            onClick={onRead}
          >

            <FiBookOpen />

            <span>
              {ui.readThisChapter}
            </span>

            <FiChevronRight />

          </button>

        </footer>

      </section>

    </div>,
    document.body
  );
}


/* =========================================================
   STORY READER
========================================================= */

function StoryReader({
  story,
  language,
  ui,
  onClose,
  onPrevious,
  onNext,
  onLanguageChange,
  onTrailer,
}) {
  if (!story) {
    return null;
  }

  const content =
    story[language];


  return createPortal(
    <div
      className="story-reader-overlay"
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >

      <section
        className="story-reader"
        role="dialog"
        aria-modal="true"
      >

        {/* =====================================
            CLOSE
        ====================================== */}

        <button
          type="button"
          className="story-reader__close"
          onClick={onClose}
          aria-label={ui.close}
        >
          <FiX />
        </button>


        {/* =====================================
            LEFT VISUAL
        ====================================== */}

        <aside className="story-reader__visual">

          <img
            src={story.image}
            alt={content.title}
          />


          <div className="story-reader__visual-overlay" />


          <div className="story-reader__chapter-tag">

            <span>
              CHAPTER
            </span>

            <strong>
              {story.number}
            </strong>

          </div>


          <div className="story-reader__visual-copy">

            <small>
              {story.year}
            </small>


            <h2>
              {content.shortTitle}
            </h2>


            {story.trailer && (
              <button
                type="button"
                className="story-reader__watch"
                onClick={onTrailer}
              >

                <span>
                  <FiPlay />
                </span>

                {ui.trailer}

              </button>
            )}

          </div>

        </aside>


        {/* =====================================
            RIGHT CONTENT
        ====================================== */}

        <div className="story-reader__content">

          <div className="story-reader__scroll">

            {/* LANGUAGE */}

            <div className="story-reader__language">

              <FiGlobe />


              <button
                type="button"
                className={
                  language === "en"
                    ? "is-active"
                    : ""
                }
                onClick={() =>
                  onLanguageChange(
                    "en"
                  )
                }
              >
                English
              </button>


              <i />


              <button
                type="button"
                className={
                  language === "ta"
                    ? "is-active"
                    : ""
                }
                onClick={() =>
                  onLanguageChange(
                    "ta"
                  )
                }
              >
                தமிழ்
              </button>

            </div>


            <p className="story-reader__eyebrow">
              {ui.reader}
            </p>


            <span className="story-reader__subtitle">
              {content.subtitle}
            </span>


            <h1>
              {content.title}
            </h1>


            <p className="story-reader__lead">
              {content.intro}
            </p>


            {/* STORY */}

            <div className="story-reader__story">

              {content.story.map(
                (
                  paragraph,
                  index
                ) => (
                  <p
                    key={
                      `${story.id}-${index}`
                    }
                  >
                    {paragraph}
                  </p>
                )
              )}

            </div>


            {/* KEY MOMENTS */}

            <section className="story-reader__section">

              <header>

                <span>
                  <FiStar />
                </span>

                <strong>
                  {ui.keyMoments}
                </strong>

              </header>


              <div className="story-reader__moments">

                {content.keyEvents.map(
                  (
                    item,
                    index
                  ) => (
                    <article
                      key={
                        `${item}-${index}`
                      }
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

                    </article>
                  )
                )}

              </div>

            </section>


            {/* META */}

            <div className="story-reader__meta">

              <section>

                <header>

                  <FiUsers />

                  <span>
                    {
                      ui.characters
                    }
                  </span>

                </header>


                <div>

                  {content.characters.map(
                    (character) => (
                      <span
                        key={
                          character
                        }
                      >
                        {character}
                      </span>
                    )
                  )}

                </div>

              </section>


              <section>

                <header>

                  <FiMapPin />

                  <span>
                    {ui.places}
                  </span>

                </header>


                <div>

                  {content.locations.map(
                    (place) => (
                      <span
                        key={place}
                      >
                        {place}
                      </span>
                    )
                  )}

                </div>

              </section>

            </div>


            {/* NAVIGATION */}

            <footer className="story-reader__navigation">

              <button
                type="button"
                onClick={onPrevious}
              >

                <FiChevronLeft />

                <span>
                  {ui.previous}
                </span>

              </button>


              <div>

                <strong>
                  {story.number}
                </strong>

                <i />

                <span>
                  {String(
                    storyData.length
                  ).padStart(
                    2,
                    "0"
                  )}
                </span>

              </div>


              <button
                type="button"
                onClick={onNext}
              >

                <span>
                  {ui.next}
                </span>

                <FiChevronRight />

              </button>

            </footer>

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

function Stories() {
  const [
    language,
    setLanguage,
  ] = useState(() => {
    try {
      return (
        localStorage.getItem(
          "wizarding-story-language"
        ) || "en"
      );
    } catch {
      return "en";
    }
  });


  const [
    selectedStoryId,
    setSelectedStoryId,
  ] = useState(null);


  const [
    trailerStoryId,
    setTrailerStoryId,
  ] = useState(null);


  const archiveRef =
    useRef(null);


  const ui =
    pageText[language];


  /* =======================================================
     CURRENT STORY
  ======================================================= */

  const selectedStory =
    useMemo(() => {
      return (
        storyData.find(
          (story) =>
            story.id ===
            selectedStoryId
        ) || null
      );
    }, [selectedStoryId]);


  const trailerStory =
    useMemo(() => {
      return (
        storyData.find(
          (story) =>
            story.id ===
            trailerStoryId
        ) || null
      );
    }, [trailerStoryId]);


  const selectedIndex =
    useMemo(() => {
      if (!selectedStory) {
        return -1;
      }

      return storyData.findIndex(
        (story) =>
          story.id ===
          selectedStory.id
      );
    }, [selectedStory]);


  /* =======================================================
     LANGUAGE
  ======================================================= */

  const changeLanguage = (
    value
  ) => {
    setLanguage(value);

    try {
      localStorage.setItem(
        "wizarding-story-language",
        value
      );
    } catch {
      //
    }
  };


  /* =======================================================
     STORY OPEN
  ======================================================= */

  const openStory = (
    story
  ) => {
    setTrailerStoryId(
      null
    );

    setSelectedStoryId(
      story.id
    );
  };


  const closeStory = () => {
    setSelectedStoryId(
      null
    );
  };


  /* =======================================================
     TRAILER OPEN
  ======================================================= */

  const openTrailer = (
    story
  ) => {
    setSelectedStoryId(
      null
    );

    setTrailerStoryId(
      story.id
    );
  };


  const closeTrailer = () => {
    setTrailerStoryId(
      null
    );
  };


  /* =======================================================
     NAVIGATION
  ======================================================= */

  const moveStory = (
    direction
  ) => {
    if (selectedIndex < 0) {
      return;
    }

    const nextIndex =
      (
        selectedIndex +
        direction +
        storyData.length
      ) %
      storyData.length;


    setSelectedStoryId(
      storyData[
        nextIndex
      ].id
    );
  };


  /* =======================================================
     BODY LOCK + KEYBOARD
  ======================================================= */

  useEffect(() => {
    const overlayOpen =
      Boolean(
        selectedStoryId ||
        trailerStoryId
      );


    if (!overlayOpen) {
      document.body.classList.remove(
        "stories-overlay-open"
      );

      return;
    }


    document.body.classList.add(
      "stories-overlay-open"
    );


    const handleKeyDown = (
      event
    ) => {
      if (
        event.key ===
        "Escape"
      ) {
        setSelectedStoryId(
          null
        );

        setTrailerStoryId(
          null
        );
      }


      if (
        selectedStoryId &&
        event.key ===
        "ArrowLeft"
      ) {
        moveStory(-1);
      }


      if (
        selectedStoryId &&
        event.key ===
        "ArrowRight"
      ) {
        moveStory(1);
      }
    };


    window.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {
      document.body.classList.remove(
        "stories-overlay-open"
      );

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    selectedStoryId,
    trailerStoryId,
    selectedIndex,
  ]);


  /* =======================================================
     REVEAL ANIMATION
  ======================================================= */

  useEffect(() => {
    const elements =
      document.querySelectorAll(
        ".stories-reveal"
      );


    if (
      !(
        "IntersectionObserver" in
        window
      )
    ) {
      elements.forEach(
        (element) =>
          element.classList.add(
            "stories-reveal--visible"
          )
      );

      return;
    }


    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) => {
              if (
                entry.isIntersecting
              ) {
                entry.target.classList.add(
                  "stories-reveal--visible"
                );

                observer.unobserve(
                  entry.target
                );
              }
            }
          );
        },
        {
          threshold: 0.12,

          rootMargin:
            "0px 0px -45px 0px",
        }
      );


    elements.forEach(
      (element) =>
        observer.observe(
          element
        )
    );


    return () =>
      observer.disconnect();
  }, []);


  return (
    <main
      className="stories-page"
      data-language={
        language
      }
    >

      {/* ===================================================
          FLOATING PARTICLES
      =================================================== */}

      <div
        className="stories-particles"
        aria-hidden="true"
      >

        {particles.map(
          (particle) => (
            <span
              key={
                particle.id
              }
              style={{
                "--particle-left":
                  `${particle.left}%`,

                "--particle-top":
                  `${particle.top}%`,

                "--particle-size":
                  `${particle.size}px`,

                "--particle-delay":
                  `${particle.delay}s`,

                "--particle-duration":
                  `${particle.duration}s`,
              }}
            />
          )
        )}

      </div>


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="stories-hero">

        <img
          src="/images/stories/hero/storybook-hero.png"
          alt=""
          className="stories-hero__background"
        />


        <div className="stories-hero__veil" />

        <div className="stories-hero__glow stories-hero__glow--left" />

        <div className="stories-hero__glow stories-hero__glow--right" />


        {/* LANGUAGE */}

        <div className="stories-language">

          <FiGlobe />


          <button
            type="button"
            className={
              language === "en"
                ? "is-active"
                : ""
            }
            onClick={() =>
              changeLanguage(
                "en"
              )
            }
          >
            EN
          </button>


          <i />


          <button
            type="button"
            className={
              language === "ta"
                ? "is-active"
                : ""
            }
            onClick={() =>
              changeLanguage(
                "ta"
              )
            }
          >
            தமிழ்
          </button>

        </div>


        {/* CONTENT */}

        <div className="stories-hero__content">

          <p className="stories-eyebrow stories-hero-entry stories-hero-entry--1">
            {ui.archive}
          </p>


          <div className="stories-hero__ornament stories-hero-entry stories-hero-entry--2">

            <span />

            <FiStar />

            <span />

          </div>


          <h1 className="stories-hero-entry stories-hero-entry--3">

            {ui.titleA}

            <em>
              {ui.titleB}
            </em>

          </h1>


          <p className="stories-hero__description stories-hero-entry stories-hero-entry--4">
            {ui.hero}
          </p>


          <button
            type="button"
            className="stories-hero__button stories-hero-entry stories-hero-entry--5"
            onClick={() =>
              archiveRef.current?.scrollIntoView({
                behavior:
                  "smooth",

                block:
                  "start",
              })
            }
          >

            <FiBookOpen />

            <span>
              {ui.begin}
            </span>

            <FiArrowDown />

          </button>

        </div>


        <span className="stories-hero__star stories-hero__star--1">
          ✦
        </span>

        <span className="stories-hero__star stories-hero__star--2">
          ✧
        </span>

        <span className="stories-hero__star stories-hero__star--3">
          ✦
        </span>

      </section>


      {/* ===================================================
          INTRO
      =================================================== */}

      <section
        ref={archiveRef}
        className="stories-intro stories-reveal"
      >

        <div className="stories-intro__icon">
          <FiBookOpen />
        </div>


        <div className="stories-intro__content">

          <span>
            {ui.chapters}
          </span>


          <h2>

            {ui.journey}

            <em>
              {
                ui.journeyAccent
              }
            </em>

          </h2>


          <p>
            {
              ui.journeyDescription
            }
          </p>

        </div>


        <div className="stories-intro__count">

          <strong>
            {String(
              storyData.length
            ).padStart(
              2,
              "0"
            )}
          </strong>

          <span>
            CHAPTERS
          </span>

        </div>

      </section>


      {/* ===================================================
          CHAPTERS
      =================================================== */}

      <section className="stories-chapters">

        {storyData.map(
          (
            story,
            index
          ) => {
            const content =
              story[language];

            const reverse =
              index % 2 !== 0;


            return (
              <article
                key={
                  story.id
                }
                className={
                  `stories-chapter ${
                    reverse
                      ? "stories-chapter--reverse"
                      : ""
                  } stories-reveal`
                }
              >

                {/* VISUAL */}

                <div className="stories-chapter__visual">

                  <div className="stories-chapter__image">

                    <img
                      src={
                        story.image
                      }
                      alt={
                        content.title
                      }
                    />


                    <div className="stories-chapter__image-overlay" />

                    <div className="stories-chapter__image-glow" />


                    {/* VIDEO QUICK BUTTON */}

                    <button
                      type="button"
                      className="stories-chapter__video-float"
                      onClick={() =>
                        openTrailer(
                          story
                        )
                      }
                    >

                      <span>
                        <FiPlay />
                      </span>

                      <div>

                        <small>
                          TRAILER
                        </small>

                        <strong>
                          {
                            ui.trailer
                          }
                        </strong>

                      </div>

                    </button>

                  </div>


                  <span className="stories-chapter__year">
                    {story.year}
                  </span>

                </div>


                {/* CONTENT */}

                <div className="stories-chapter__content">

                  <div className="stories-chapter__record">

                    <span>
                      CHAPTER
                    </span>

                    <i />

                    <strong>
                      {
                        story.number
                      }
                    </strong>

                  </div>


                  <span className="stories-chapter__subtitle">
                    {
                      content.subtitle
                    }
                  </span>


                  <h2>
                    {
                      content.shortTitle
                    }
                  </h2>


                  <p className="stories-chapter__summary">
                    {
                      content.summary
                    }
                  </p>


                  <p className="stories-chapter__intro">
                    {
                      content.intro
                    }
                  </p>


                  <div className="stories-chapter__actions">

                    <button
                      type="button"
                      className="stories-chapter__read"
                      onClick={() =>
                        openStory(
                          story
                        )
                      }
                    >

                      <span>
                        <FiBookOpen />
                      </span>

                      <strong>
                        {ui.read}
                      </strong>

                      <FiChevronRight />

                    </button>


                    <button
                      type="button"
                      className="stories-chapter__trailer"
                      onClick={() =>
                        openTrailer(
                          story
                        )
                      }
                    >

                      <span>
                        <FiPlay />
                      </span>

                      <strong>
                        {
                          ui.trailer
                        }
                      </strong>

                    </button>

                  </div>

                </div>


                <span className="stories-chapter__number">
                  {
                    story.number
                  }
                </span>

              </article>
            );
          }
        )}

      </section>


      {/* ===================================================
          ENDING
      =================================================== */}

      <section className="stories-ending stories-reveal">

        <span className="stories-ending__star">
          ✦
        </span>


        <FiBookOpen />


        <h2>

          {ui.ending}

          <em>
            {
              ui.endingAccent
            }
          </em>

        </h2>


        <p>
          {
            ui.endingDescription
          }
        </p>


        <div className="stories-ending__line">

          <span />

          <FiStar />

          <span />

        </div>

      </section>


      {/* ===================================================
          STORY READER
      =================================================== */}

      <StoryReader
        story={
          selectedStory
        }
        language={
          language
        }
        ui={ui}
        onClose={
          closeStory
        }
        onPrevious={() =>
          moveStory(-1)
        }
        onNext={() =>
          moveStory(1)
        }
        onLanguageChange={
          changeLanguage
        }
        onTrailer={() =>
          openTrailer(
            selectedStory
          )
        }
      />


      {/* ===================================================
          TRAILER
      =================================================== */}

      <TrailerModal
        story={
          trailerStory
        }
        language={
          language
        }
        ui={ui}
        onClose={
          closeTrailer
        }
        onRead={() =>
          openStory(
            trailerStory
          )
        }
      />

    </main>
  );
}


export default Stories;