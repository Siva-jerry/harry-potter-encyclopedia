import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  FiArrowDown,
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiMapPin,
  FiUsers,
  FiX,
} from "react-icons/fi";

import {
  GiMagicSwirl,
  GiSpellBook,
  GiSparkles,
  GiTimeTrap,
} from "react-icons/gi";

import MagicalBackground from "../../components/MagicalBackground/MagicalBackground";
import timelineData from "../../data/timelineData";

import "./Timeline.css";


/* =========================================================
   ERAS
========================================================= */

const eras = [
  {
    id: "foundations",
    number: "I",
    period: "ANCIENT — 10TH CENTURY",

    title: {
      en: "Foundations of Magic",
      ta: "மந்திரத்தின் அடித்தளம்",
    },

    subtitle: {
      en: "Before the legends, there were four founders and a castle.",
      ta: "புராணங்களுக்கு முன், நான்கு நிறுவனர்களும் ஒரு கோட்டையும் இருந்தன.",
    },
  },

  {
    id: "shadows",
    number: "II",
    period: "20TH CENTURY — 1945",

    title: {
      en: "Gathering Shadows",
      ta: "திரளும் இருள்",
    },

    subtitle: {
      en: "Old secrets awaken while dangerous new powers begin to rise.",
      ta: "பழைய ரகசியங்கள் விழித்தெழ, புதிய இருண்ட சக்திகள் உருவாகத் தொடங்குகின்றன.",
    },
  },

  {
    id: "dark-lord",
    number: "III",
    period: "1950s — 1981",

    title: {
      en: "The Dark Lord Rises",
      ta: "இருண்ட ஆண்டவனின் எழுச்சி",
    },

    subtitle: {
      en: "Fear spreads across wizarding Britain as Voldemort seeks immortality and power.",
      ta: "வோல்ட்மார்ட் அதிகாரத்தையும் மரணமின்மையையும் தேட, மந்திர பிரிட்டன் முழுவதும் அச்சம் பரவுகிறது.",
    },
  },

  {
    id: "hogwarts-years",
    number: "IV",
    period: "1991 — 1998",

    title: {
      en: "The Hogwarts Years",
      ta: "ஹாக்வார்ட்ஸ் ஆண்டுகள்",
    },

    subtitle: {
      en: "A boy enters a magical school and eventually carries the fate of an entire world.",
      ta: "ஒரு சிறுவன் மந்திரப் பள்ளியில் நுழைந்து இறுதியில் ஒரு உலகத்தின் எதிர்காலத்தை சுமக்கிறான்.",
    },
  },

  {
    id: "aftermath",
    number: "V",
    period: "1998 — 2017",

    title: {
      en: "After the Battle",
      ta: "போருக்குப் பிறகு",
    },

    subtitle: {
      en: "The war ends, the castle heals and another generation begins its journey.",
      ta: "போர் முடிகிறது, கோட்டை மீள்கிறது, புதிய தலைமுறை தனது பயணத்தை தொடங்குகிறது.",
    },
  },
];


/* =========================================================
   LANGUAGE COPY
========================================================= */

const copy = {
  en: {
    archive: "Wizarding Historical Archive",

    heroTitle: "TIMELINE",

    heroSubtitle:
      "Centuries of Magic",

    heroDescription:
      "Follow the thread of wizarding history — from the founding of Hogwarts to the final battle and the generation that came after.",

    begin:
      "Begin the Journey",

    earliest:
      "10th Century",

    latest:
      "2017",

    events:
      "Historical Records",

    eras:
      "Historical Eras",

    open:
      "Explore History",

    people:
      "People",

    places:
      "Places",

    previous:
      "Previous Record",

    next:
      "Next Record",

    close:
      "Close",

    record:
      "Historical Record",

    endEyebrow:
      "THE THREAD CONTINUES",

    endTitle:
      "History Never Truly Ends.",

    endDescription:
      "Every generation inherits the stories, choices and consequences of the one before it.",

    returnTop:
      "Return to the Beginning",
  },


  ta: {
    archive:
      "மந்திர வரலாற்றுக் காப்பகம்",

    heroTitle:
      "காலவரிசை",

    heroSubtitle:
      "பல நூற்றாண்டுகளின் மந்திரம்",

    heroDescription:
      "ஹாக்வார்ட்ஸ் நிறுவப்பட்ட காலத்திலிருந்து இறுதிப் போர் மற்றும் அதன் பின் வந்த தலைமுறை வரை மந்திர உலகின் வரலாற்றைப் பின்தொடருங்கள்.",

    begin:
      "பயணத்தை தொடங்கு",

    earliest:
      "10ஆம் நூற்றாண்டு",

    latest:
      "2017",

    events:
      "வரலாற்றுப் பதிவுகள்",

    eras:
      "வரலாற்றுக் காலங்கள்",

    open:
      "வரலாற்றை ஆராய்க",

    people:
      "முக்கிய நபர்கள்",

    places:
      "இடங்கள்",

    previous:
      "முந்தைய பதிவு",

    next:
      "அடுத்த பதிவு",

    close:
      "மூடு",

    record:
      "வரலாற்றுப் பதிவு",

    endEyebrow:
      "காலம் தொடர்ந்து செல்கிறது",

    endTitle:
      "வரலாறு ஒருபோதும் உண்மையில் முடிவதில்லை.",

    endDescription:
      "ஒவ்வொரு தலைமுறையும் தங்களுக்கு முன் வாழ்ந்தவர்களின் கதைகள், முடிவுகள் மற்றும் விளைவுகளை தாங்கிச் செல்கிறது.",

    returnTop:
      "தொடக்கத்திற்கு திரும்பு",
  },
};


/* =========================================================
   IMAGE FORMAT
========================================================= */

/*
  All timeline event images are 16:9
  EXCEPT Tom Riddle Era, which is 4:5.
*/

const getImageRatioClass = (event) => {
  if (
    event.id ===
    "tom-riddle-hogwarts"
  ) {
    return "history-ratio--portrait";
  }

  return "history-ratio--wide";
};


/* =========================================================
   COMPONENT
========================================================= */

function Timeline() {
  const [
    language,
    setLanguage,
  ] = useState("en");

  const [
    selectedEvent,
    setSelectedEvent,
  ] = useState(null);

  const [
    scrollProgress,
    setScrollProgress,
  ] = useState(0);


  const timelineRef =
    useRef(null);

  const pageTopRef =
    useRef(null);


  const text =
    copy[language];


  /* =======================================================
     SELECTED INDEX
  ======================================================= */

  const selectedIndex =
    useMemo(() => {
      if (!selectedEvent) {
        return -1;
      }

      return timelineData.findIndex(
        (item) =>
          item.id ===
          selectedEvent.id
      );
    }, [selectedEvent]);


  /* =======================================================
     DRAWER
  ======================================================= */

  const openEvent = (
    event
  ) => {
    setSelectedEvent(event);
  };


  const closeEvent = () => {
    setSelectedEvent(null);
  };


  const moveEvent = (
    direction
  ) => {
    if (
      selectedIndex < 0
    ) {
      return;
    }

    const nextIndex =
      (
        selectedIndex +
        direction +
        timelineData.length
      ) %
      timelineData.length;

    setSelectedEvent(
      timelineData[
        nextIndex
      ]
    );
  };


  /* =======================================================
     SCROLL HELPERS
  ======================================================= */

  const scrollToTimeline =
    () => {
      timelineRef.current
        ?.scrollIntoView({
          behavior:
            "smooth",

          block:
            "start",
        });
    };


  const scrollToTop = () => {
    pageTopRef.current
      ?.scrollIntoView({
        behavior:
          "smooth",

        block:
          "start",
      });
  };


  const scrollToEra = (
    eraId
  ) => {
    document
      .getElementById(
        `timeline-era-${eraId}`
      )
      ?.scrollIntoView({
        behavior:
          "smooth",

        block:
          "start",
      });
  };


  /* =======================================================
     REVEAL OBSERVER
  ======================================================= */

  useEffect(() => {
    const elements =
      document.querySelectorAll(
        "[data-timeline-reveal]"
      );

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) => {
              if (
                entry.isIntersecting
              ) {
                entry.target
                  .classList
                  .add(
                    "timeline-revealed"
                  );

                observer.unobserve(
                  entry.target
                );
              }
            }
          );
        },

        {
          threshold: 0.1,

          rootMargin:
            "0px 0px -50px 0px",
        }
      );


    elements.forEach(
      (element) => {
        observer.observe(
          element
        );
      }
    );


    return () => {
      observer.disconnect();
    };
  }, [language]);


  /* =======================================================
     TIMELINE PROGRESS
  ======================================================= */

  useEffect(() => {
    const updateProgress =
      () => {
        if (
          !timelineRef.current
        ) {
          return;
        }

        const rect =
          timelineRef.current
            .getBoundingClientRect();

        const height =
          timelineRef.current
            .offsetHeight;

        const travelled =
          window.innerHeight *
            0.55 -
          rect.top;

        const percentage =
          (
            travelled /
            height
          ) * 100;

        setScrollProgress(
          Math.min(
            100,

            Math.max(
              0,
              percentage
            )
          )
        );
      };


    updateProgress();


    window.addEventListener(
      "scroll",
      updateProgress,
      {
        passive: true,
      }
    );


    window.addEventListener(
      "resize",
      updateProgress
    );


    return () => {
      window.removeEventListener(
        "scroll",
        updateProgress
      );

      window.removeEventListener(
        "resize",
        updateProgress
      );
    };
  }, []);


  /* =======================================================
     DRAWER BODY LOCK + KEYS
  ======================================================= */

  useEffect(() => {
    if (
      !selectedEvent
    ) {
      return;
    }

    const previousOverflow =
      document.body.style
        .overflow;

    document.body.style
      .overflow =
      "hidden";


    const handleKeyDown = (
      event
    ) => {
      if (
        event.key ===
        "Escape"
      ) {
        closeEvent();
      }

      if (
        event.key ===
        "ArrowRight"
      ) {
        moveEvent(1);
      }

      if (
        event.key ===
        "ArrowLeft"
      ) {
        moveEvent(-1);
      }
    };


    window.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {
      document.body.style
        .overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    selectedEvent,
    selectedIndex,
  ]);


  return (
    <main
      className={`wizard-history wizard-history--${language}`}
      ref={pageTopRef}
    >

      <MagicalBackground />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="history-hero">

        <div className="history-hero__media">

          <img
            src="/images/timeline/hero/timeline-hero.png"
            alt=""
            className="history-hero__image"
          />

        </div>


        <div className="history-hero__veil" />

        <div className="history-hero__stars" />


        <div className="history-particle history-particle--1" />

        <div className="history-particle history-particle--2" />

        <div className="history-particle history-particle--3" />

        <div className="history-particle history-particle--4" />

        <div className="history-particle history-particle--5" />

        <div className="history-particle history-particle--6" />

        <div className="history-particle history-particle--7" />

        <div className="history-particle history-particle--8" />


        {/* LANGUAGE */}

        <div className="history-language">

          <button
            type="button"
            className={
              language === "en"
                ? "active"
                : ""
            }
            onClick={() =>
              setLanguage("en")
            }
          >
            EN
          </button>


          <i />


          <button
            type="button"
            className={
              language === "ta"
                ? "active"
                : ""
            }
            onClick={() =>
              setLanguage("ta")
            }
          >
            தமிழ்
          </button>

        </div>


        {/* CONTENT */}

        <div className="history-hero__content">

          <div className="history-hero__ornament">

            <span />

            <GiTimeTrap />

            <span />

          </div>


          <p className="history-hero__eyebrow">
            {text.archive}
          </p>


          <h1>

            {text.heroTitle}

            <span>
              {text.heroSubtitle}
            </span>

          </h1>


          <p className="history-hero__description">
            {
              text.heroDescription
            }
          </p>


          <div className="history-hero__range">

            <div>

              <small>
                {text.earliest}
              </small>

              <strong>
                ✦
              </strong>

            </div>


            <span>
              <i />
            </span>


            <div>

              <strong>
                ✦
              </strong>

              <small>
                {text.latest}
              </small>

            </div>

          </div>


          <div className="history-hero__stats">

            <div>

              <strong>
                {String(
                  timelineData.length
                ).padStart(
                  2,
                  "0"
                )}
              </strong>

              <span>
                {text.events}
              </span>

            </div>


            <i />


            <div>

              <strong>
                {String(
                  eras.length
                ).padStart(
                  2,
                  "0"
                )}
              </strong>

              <span>
                {text.eras}
              </span>

            </div>

          </div>


          <button
            type="button"
            className="history-begin"
            onClick={
              scrollToTimeline
            }
          >

            <span>
              {text.begin}
            </span>

            <FiArrowDown />

          </button>

        </div>


        <div className="history-hero__bottom">

          <span>
            HOGWARTS HISTORICAL ARCHIVE
          </span>

          <GiSparkles />

          <span>
            EST. 10TH CENTURY
          </span>

        </div>

      </section>


      {/* =====================================================
          ERA NAVIGATION
      ===================================================== */}

      <nav
        className="history-era-nav"
        aria-label="Timeline eras"
      >

        <div className="history-era-nav__inner">

          {eras.map(
            (era) => (
              <button
                type="button"
                key={era.id}
                onClick={() =>
                  scrollToEra(
                    era.id
                  )
                }
              >

                <span>
                  {era.number}
                </span>

                <small>
                  {
                    era.title[
                      language
                    ]
                  }
                </small>

              </button>
            )
          )}

        </div>

      </nav>


      {/* =====================================================
          TIMELINE
      ===================================================== */}

      <section
        className="history-timeline"
        ref={timelineRef}
      >

        {/* TIMELINE SPINE */}

        <div className="history-spine">

          <div className="history-spine__base" />

          <div
            className="history-spine__progress"
            style={{
              height:
                `${scrollProgress}%`,
            }}
          />

          <div
            className="history-spine__spark"
            style={{
              top:
                `${scrollProgress}%`,
            }}
          />

        </div>


        {eras.map(
          (era) => {

            const events =
              timelineData.filter(
                (event) =>
                  event.era ===
                  era.id
              );


            return (
              <section
                key={era.id}
                id={`timeline-era-${era.id}`}
                className={`history-era history-era--${era.id}`}
              >

                {/* ERA INTRO */}

                <header
                  className="history-era__intro"
                  data-timeline-reveal
                >

                  <span className="history-era__roman">
                    {
                      era.number
                    }
                  </span>


                  <p>
                    ERA{" "}
                    {
                      era.number
                    }
                  </p>


                  <h2>
                    {
                      era.title[
                        language
                      ]
                    }
                  </h2>


                  <small>
                    {
                      era.period
                    }
                  </small>


                  <blockquote>
                    {
                      era.subtitle[
                        language
                      ]
                    }
                  </blockquote>


                  <div className="history-era__sigil">

                    <span />

                    <GiMagicSwirl />

                    <span />

                  </div>

                </header>


                {/* EVENTS */}

                <div className="history-era__events">

                  {events.map(
                    (
                      event,
                      index
                    ) => {

                      const side =
                        index % 2 ===
                        0
                          ? "left"
                          : "right";


                      const hasImage =
                        Boolean(
                          event.image
                        );


                      const ratioClass =
                        getImageRatioClass(
                          event
                        );


                      return (
                        <article
                          key={
                            event.id
                          }
                          className={`history-event history-event--${side} history-event--${event.importance} ${
                            hasImage
                              ? "history-event--visual"
                              : "history-event--text"
                          } ${ratioClass}`}
                          data-timeline-reveal
                        >

                          {/* NODE */}

                          <div className="history-event__node">

                            <span />

                            <i />

                          </div>


                          {/* DATE */}

                          <div className="history-event__date">

                            <FiCalendar />

                            <span>
                              {
                                event.year
                              }
                            </span>

                          </div>


                          {/* IMAGE */}

                          {hasImage && (
                            <button
                              type="button"
                              className="history-event__image"
                              onClick={() =>
                                openEvent(
                                  event
                                )
                              }
                              aria-label={`Open ${event.title[language]}`}
                            >

                              <div className="history-event__image-stage">

                                <img
                                  src={
                                    event.image
                                  }
                                  alt={
                                    event.title[
                                      language
                                    ]
                                  }
                                />

                              </div>


                              <div className="history-event__image-shade" />


                              <span className="history-event__image-number">
                                {
                                  event.number
                                }
                              </span>

                            </button>
                          )}


                          {/* CONTENT */}

                          <div className="history-event__content">

                            <div className="history-event__meta">

                              <span>
                                RECORD{" "}
                                {
                                  event.number
                                }
                              </span>

                              <i />

                              <span>
                                {
                                  event.label[
                                    language
                                  ]
                                }
                              </span>

                            </div>


                            <h3>
                              {
                                event.title[
                                  language
                                ]
                              }
                            </h3>


                            <p>
                              {
                                event.shortDescription[
                                  language
                                ]
                              }
                            </p>


                            <button
                              type="button"
                              className="history-event__open"
                              onClick={() =>
                                openEvent(
                                  event
                                )
                              }
                            >

                              {text.open}

                              <FiArrowRight />

                            </button>

                          </div>

                        </article>
                      );
                    }
                  )}

                </div>

              </section>
            );
          }
        )}

      </section>


      {/* =====================================================
          ENDING
      ===================================================== */}

      <section className="history-ending">

        <div
          className="history-ending__content"
          data-timeline-reveal
        >

          <GiSpellBook />

          <p>
            {
              text.endEyebrow
            }
          </p>

          <h2>
            {
              text.endTitle
            }
          </h2>

          <span>
            {
              text.endDescription
            }
          </span>


          <button
            type="button"
            onClick={
              scrollToTop
            }
          >

            <GiSparkles />

            {
              text.returnTop
            }

          </button>

        </div>

      </section>


      {/* =====================================================
          HISTORY DRAWER
      ===================================================== */}

      {selectedEvent && (

        <div
          className="history-drawer-overlay"
          onMouseDown={(
            event
          ) => {

            if (
              event.target ===
              event.currentTarget
            ) {
              closeEvent();
            }

          }}
        >

          <aside
            className={`history-drawer ${getImageRatioClass(
              selectedEvent
            )}`}
            role="dialog"
            aria-modal="true"
            aria-label={
              selectedEvent.title[
                language
              ]
            }
          >

            {/* CLOSE */}

            <button
              type="button"
              className="history-drawer__close"
              onClick={
                closeEvent
              }
              aria-label={
                text.close
              }
            >

              <FiX />

            </button>


            {/* DRAWER IMAGE */}

            {selectedEvent.image && (

              <div className="history-drawer__media">

                <div className="history-drawer__image">

                  <img
                    src={
                      selectedEvent.image
                    }
                    alt={
                      selectedEvent.title[
                        language
                      ]
                    }
                  />

                </div>


                <div className="history-drawer__media-shade" />


                <span className="history-drawer__image-number">
                  {
                    selectedEvent.number
                  }
                </span>

              </div>

            )}


            {/* CONTENT */}

            <div className="history-drawer__content">

              <div className="history-drawer__record">

                <span>
                  {text.record}
                </span>

                <i />

                <span>
                  {
                    selectedEvent.number
                  }
                </span>

              </div>


              <div className="history-drawer__date">

                <FiCalendar />

                {
                  selectedEvent.year
                }

              </div>


              <small className="history-drawer__label">
                {
                  selectedEvent.label[
                    language
                  ]
                }
              </small>


              <h2>
                {
                  selectedEvent.title[
                    language
                  ]
                }
              </h2>


              <blockquote>
                {
                  selectedEvent.shortDescription[
                    language
                  ]
                }
              </blockquote>


              <p className="history-drawer__description">
                {
                  selectedEvent.description[
                    language
                  ]
                }
              </p>


              {/* PEOPLE */}

              {selectedEvent.people
                .length >
                0 && (

                <div className="history-drawer__group">

                  <div className="history-drawer__group-title">

                    <FiUsers />

                    <span>
                      {
                        text.people
                      }
                    </span>

                  </div>


                  <div className="history-drawer__tags">

                    {selectedEvent.people.map(
                      (
                        person
                      ) => (
                        <span
                          key={
                            person
                          }
                        >
                          {
                            person
                          }
                        </span>
                      )
                    )}

                  </div>

                </div>
              )}


              {/* PLACES */}

              {selectedEvent.places
                .length >
                0 && (

                <div className="history-drawer__group">

                  <div className="history-drawer__group-title">

                    <FiMapPin />

                    <span>
                      {
                        text.places
                      }
                    </span>

                  </div>


                  <div className="history-drawer__tags">

                    {selectedEvent.places.map(
                      (
                        place
                      ) => (
                        <span
                          key={
                            place
                          }
                        >
                          {
                            place
                          }
                        </span>
                      )
                    )}

                  </div>

                </div>
              )}


              {/* NAVIGATION */}

              <div className="history-drawer__navigation">

                <button
                  type="button"
                  onClick={() =>
                    moveEvent(-1)
                  }
                >

                  <FiArrowLeft />

                  <span>
                    {
                      text.previous
                    }
                  </span>

                </button>


                <div>

                  {
                    selectedEvent.number
                  }

                  <i />

                  {String(
                    timelineData.length
                  ).padStart(
                    2,
                    "0"
                  )}

                </div>


                <button
                  type="button"
                  onClick={() =>
                    moveEvent(1)
                  }
                >

                  <span>
                    {
                      text.next
                    }
                  </span>

                  <FiArrowRight />

                </button>

              </div>

            </div>

          </aside>

        </div>

      )}

    </main>
  );
}


export default Timeline;