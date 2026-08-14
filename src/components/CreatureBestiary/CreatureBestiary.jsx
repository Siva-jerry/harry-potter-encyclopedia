import "./CreatureBestiary.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";


const creatures = [
  {
    id: "hippogriff",
    name: "Hippogriff",
    type: "PROUD · INTELLIGENT",
    description:
      "A powerful winged creature that demands respect before trust.",
    image:
      "/images/home/creatures/hippogriff.png",
    link:
      "/creatures/hippogriff",
  },

  {
    id: "phoenix",
    name: "Phoenix",
    type: "REBIRTH · FIRE",
    description:
      "A rare magical bird able to rise again from its own ashes.",
    image:
      "/images/home/creatures/phoenix.png",
    link:
      "/creatures/phoenix",
  },

  {
    id: "thestral",
    name: "Thestral",
    type: "MYSTERY · MEMORY",
    description:
      "Winged horses visible only to those who have witnessed death.",
    image:
      "/images/home/creatures/thestral.png",
    link:
      "/creatures/thestral",
  },

  {
    id: "basilisk",
    name: "Basilisk",
    type: "DANGEROUS · SERPENT",
    description:
      "An enormous serpent whose gaze can bring death.",
    image:
      "/images/home/creatures/basilisk.png",
    link:
      "/creatures/basilisk",
  },

  {
    id: "niffler",
    name: "Niffler",
    type: "CURIOUS · TREASURE",
    description:
      "A mischievous creature with an irresistible attraction to shiny objects.",
    image:
      "/images/home/creatures/niffler.png",
    link:
      "/creatures/niffler",
  },
];


function CreatureBestiary() {
  const sectionRef =
    useRef(null);

  const [visible, setVisible] =
    useState(false);

  const [activeCreature, setActiveCreature] =
    useState("hippogriff");


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
          threshold: 0.14,
        }
      );


    observer.observe(section);


    return () =>
      observer.disconnect();
  }, []);


  const selectedCreature =
    creatures.find(
      (creature) =>
        creature.id === activeCreature
    ) || creatures[0];


  return (
    <section
      ref={sectionRef}
      className={
        visible
          ? "creature-bestiary creature-bestiary--visible"
          : "creature-bestiary"
      }
    >

      {/* ========================================
          LEFT-ALIGNED INTRO
      ======================================== */}

      <header className="creature-bestiary__intro">

        <p className="creature-bestiary__eyebrow">
          MAGICAL CREATURES · FIELD NOTES
        </p>


        <h2 className="creature-bestiary__title">
          The Wizarding World

          <span>
            Is Not Ours Alone.
          </span>
        </h2>


        <p className="creature-bestiary__description">
          Beyond classrooms and castle walls live
          creatures shaped by magic, instinct and
          ancient histories of their own.
        </p>

      </header>


      {/* ========================================
          FIELD JOURNAL
      ======================================== */}

      <div className="creature-bestiary__journal">

        <div className="creature-bestiary__journal-glow" />


        {/* ========================================
            CREATURE INDEX
        ======================================== */}

        <div className="creature-bestiary__index">

          {creatures.map(
            (creature, index) => {

              const active =
                creature.id ===
                activeCreature;


              return (
                <button
                  key={creature.id}
                  type="button"
                  className={
                    active
                      ? "creature-bestiary__index-item creature-bestiary__index-item--active"
                      : "creature-bestiary__index-item"
                  }
                  onClick={() =>
                    setActiveCreature(
                      creature.id
                    )
                  }
                  onMouseEnter={() =>
                    setActiveCreature(
                      creature.id
                    )
                  }
                >

                  <span>
                    0{index + 1}
                  </span>


                  <div>

                    <small>
                      {creature.type}
                    </small>

                    <strong>
                      {creature.name}
                    </strong>

                  </div>

                </button>
              );
            }
          )}

        </div>


        {/* ========================================
            FEATURED CREATURE
        ======================================== */}

        <div className="creature-bestiary__specimen">

          <div className="creature-bestiary__specimen-ring creature-bestiary__specimen-ring--outer" />

          <div className="creature-bestiary__specimen-ring creature-bestiary__specimen-ring--inner" />


          <img
            key={selectedCreature.id}
            src={selectedCreature.image}
            alt={selectedCreature.name}
            className="creature-bestiary__image"
          />


          <span className="creature-bestiary__observation creature-bestiary__observation--one">
            OBSERVATION
          </span>

          <span className="creature-bestiary__observation creature-bestiary__observation--two">
            HANDLE WITH CARE
          </span>

        </div>


        {/* ========================================
            CREATURE RECORD
        ======================================== */}

        <div
          key={`${selectedCreature.id}-record`}
          className="creature-bestiary__record"
        >

          <p className="creature-bestiary__record-type">
            {selectedCreature.type}
          </p>


          <h3>
            {selectedCreature.name}
          </h3>


          <p className="creature-bestiary__record-description">
            {selectedCreature.description}
          </p>


          <Link
            to={selectedCreature.link}
            className="creature-bestiary__link"
          >
            Open field record

            <FiArrowUpRight />
          </Link>


          <div className="creature-bestiary__annotation">

            <span />

            <small>
              CLASSIFIED SPECIMEN
            </small>

          </div>

        </div>

      </div>


      {/* ========================================
          FOOTER
      ======================================== */}

      <footer className="creature-bestiary__footer">

        <span />

        <p>
          Respect is often the first
          form of magic.
        </p>

        <span />

      </footer>

    </section>
  );
}


export default CreatureBestiary;