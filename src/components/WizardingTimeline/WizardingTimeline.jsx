import "./WizardingTimeline.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";


const moments = [
  {
    id: "first-war",

    number: "01",

    year: "1970–1981",

    title:
      "The First Wizarding War",

    description:
      "Fear spreads across magical Britain as Voldemort rises to power and resistance begins to form.",

    link:
      "/stories/first-wizarding-war",

    memory:
      "dark",
  },

  {
    id: "arrival",

    number: "02",

    year: "1991",

    title:
      "Harry Arrives at Hogwarts",

    description:
      "A hidden world opens its doors, and an old story begins moving once again.",

    link:
      "/stories/philosophers-stone",

    memory:
      "hogwarts",
  },

  {
    id: "chamber",

    number: "03",

    year: "1992",

    title:
      "The Chamber Opens",

    description:
      "An ancient secret buried beneath Hogwarts awakens and threatens the school once more.",

    link:
      "/stories/chamber-of-secrets",

    memory:
      "hogwarts",
  },

  {
    id: "return",

    number: "04",

    year: "1995",

    title:
      "Voldemort Returns",

    description:
      "The danger the Wizarding World tried to deny becomes impossible to ignore.",

    link:
      "/stories/voldemort-returns",

    memory:
      "dark",
  },

  {
    id: "battle",

    number: "05",

    year: "1998",

    title:
      "The Battle of Hogwarts",

    description:
      "Years of conflict converge within the castle as the final battle reshapes the Wizarding World.",

    link:
      "/stories/battle-of-hogwarts",

    memory:
      "battle",
  },
];


function WizardingTimeline() {
  const sectionRef =
    useRef(null);

  const [visible, setVisible] =
    useState(false);

  const [activeMoment, setActiveMoment] =
    useState("arrival");


  /* =========================================
     SCROLL REVEAL
  ========================================= */

  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) return;


    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting
          ) {
            setVisible(true);

            observer.disconnect();
          }
        },
        {
          threshold: 0.12,
        }
      );


    observer.observe(section);


    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
  if (!visible) return;

  const interval = setInterval(() => {
    setActiveMoment((current) => {
      const currentIndex =
        moments.findIndex(
          (moment) =>
            moment.id === current
        );

      const nextIndex =
        currentIndex ===
        moments.length - 1
          ? 0
          : currentIndex + 1;

      return moments[nextIndex].id;
    });
  }, 5000);

  return () => {
    clearInterval(interval);
  };
}, [visible]);


  const activeData =
    moments.find(
      (moment) =>
        moment.id === activeMoment
    ) || moments[1];


  return (
    <section
      ref={sectionRef}
      className={
        visible
          ? "wizarding-timeline wizarding-timeline--visible"
          : "wizarding-timeline"
      }
    >

      {/* ========================================
          INTRO — RIGHT ALIGNED
      ======================================== */}

      <header className="wizarding-timeline__intro">

        <p className="wizarding-timeline__eyebrow">
          MEMORIES · CONFLICTS · LEGACIES
        </p>


        <h2 className="wizarding-timeline__title">

          Every Era

          <span>
            Left a Mark.
          </span>

        </h2>


        <p className="wizarding-timeline__description">
          The Wizarding World was shaped by
          moments of discovery, fear, friendship,
          sacrifice and choices that changed
          everything that followed.
        </p>

      </header>


      {/* ========================================
          MEMORY ARCHIVE
      ======================================== */}

      <div
        className={`
          wizarding-timeline__archive
          wizarding-timeline__archive--${activeData.memory}
        `}
      >

        {/* ========================================
            MEMORY IMAGES
        ======================================== */}

        <div className="wizarding-timeline__memories">

          {/* Dark history */}

          <div className="wizarding-memory wizarding-memory--dark">

            <img
              src="/images/home/timeline/dark-memory.png"
              alt=""
              aria-hidden="true"
            />

          </div>


          {/* Hogwarts memories */}

          <div className="wizarding-memory wizarding-memory--hogwarts">

            <img
              src="/images/home/timeline/hogwarts-memory.png"
              alt=""
              aria-hidden="true"
            />

          </div>


          {/* Final battle */}

          <div className="wizarding-memory wizarding-memory--battle">

            <img
              src="/images/home/timeline/battle-memory.png"
              alt=""
              aria-hidden="true"
            />

          </div>

        </div>


        {/* ========================================
            ATMOSPHERE
        ======================================== */}

        <div className="wizarding-timeline__archive-glow" />

        <div className="wizarding-timeline__mist wizarding-timeline__mist--one" />

        <div className="wizarding-timeline__mist wizarding-timeline__mist--two" />


        {/* ========================================
            ARCHIVE LABEL
        ======================================== */}

        <div className="wizarding-timeline__archive-label">

          <span />

          <p>
            SELECT A MEMORY
          </p>

          <span />

        </div>


        {/* ========================================
            TIMELINE WORLD
        ======================================== */}

        <div className="wizarding-timeline__world">


          {/* Main thread */}

          <div className="wizarding-timeline__thread">

            <span className="wizarding-timeline__thread-base" />

            <span className="wizarding-timeline__thread-light" />

          </div>


          {/* ========================================
              MOMENTS
          ======================================== */}

          <div className="wizarding-timeline__moments">

            {moments.map(
              (
                moment,
                index
              ) => {

                const active =
                  activeMoment ===
                  moment.id;

                const position =
                  index % 2 === 0
                    ? "top"
                    : "bottom";


                return (
                  <article
                    key={moment.id}
                    className={`
                      wizarding-moment
                      wizarding-moment--${position}
                      ${
                        active
                          ? "wizarding-moment--active"
                          : ""
                      }
                    `}
                    onMouseEnter={() =>
                      setActiveMoment(
                        moment.id
                      )
                    }
                  >

                    {/* ===============================
                        EVENT COPY
                    =============================== */}

                    <div className="wizarding-moment__copy">

                      <small>
                        {moment.year}
                      </small>


                      <h3>
                        {moment.title}
                      </h3>


                      <div className="wizarding-moment__details">

                        <p>
                          {moment.description}
                        </p>


                        <Link
                          to={moment.link}
                          className="wizarding-moment__link"
                        >
                          Enter memory

                          <FiArrowUpRight />
                        </Link>

                      </div>

                    </div>


                    {/* ===============================
                        CONNECTOR
                    =============================== */}

                    <span className="wizarding-moment__connector" />


                    {/* ===============================
                        MEMORY ORB
                    =============================== */}

                    <button
                      type="button"
                      className="wizarding-moment__orb"
                      onClick={() =>
                        setActiveMoment(
                          moment.id
                        )
                      }
                      aria-label={`Open ${moment.title}`}
                    >

                      <span className="wizarding-moment__orb-ring wizarding-moment__orb-ring--one" />

                      <span className="wizarding-moment__orb-ring wizarding-moment__orb-ring--two" />

                      <span className="wizarding-moment__orb-core" />

                    </button>


                    {/* number */}

                    <span className="wizarding-moment__number">
                      {moment.number}
                    </span>

                  </article>
                );
              }
            )}

          </div>

        </div>


        {/* ========================================
            CURRENT MEMORY CAPTION
        ======================================== */}

        <div
          key={`${activeData.id}-caption`}
          className="wizarding-timeline__active-caption"
        >

          <small>
            CURRENT MEMORY
          </small>

          <span>
            {activeData.year}
          </span>

          <strong>
            {activeData.title}
          </strong>

        </div>

      </div>


      {/* ========================================
          FOOTER
      ======================================== */}

      <footer className="wizarding-timeline__footer">

        <span />

        <p>
          History remembers more
          than names.
        </p>

        <span />

      </footer>

    </section>
  );
}


export default WizardingTimeline;