import "./MagicalCuriosities.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";


const curiosities = [
  {
    id: "time-turner",

    name: "Time-Turner",

    type: "MAGICAL OBJECT",

    shortLabel: "Time",

    description:
      "A rare device capable of altering one's position in time.",

    image:
      "/images/home/curiosities/time-turner.png",

    link:
      "/objects/time-turner",

    className:
      "magical-curiosity--time-turner",
  },

  {
    id: "marauders-map",

    name: "Marauder's Map",

    type: "ENCHANTED MAP",

    shortLabel: "Secrets",

    description:
      "A magical map revealing hidden passages and occupants throughout Hogwarts.",

    image:
      "/images/home/curiosities/marauders-map.png",

    link:
      "/objects/marauders-map",

    className:
      "magical-curiosity--map",
  },

  {
    id: "felix-felicis",

    name: "Felix Felicis",

    type: "POTION",

    shortLabel: "Fortune",

    description:
      "Liquid luck — powerful, rare and dangerous when used carelessly.",

    image:
      "/images/home/curiosities/potion.png",

    link:
      "/potions/felix-felicis",

    className:
      "magical-curiosity--potion",
  },

  {
    id: "golden-snitch",

    name: "Golden Snitch",

    type: "QUIDDITCH",

    shortLabel: "Flight",

    description:
      "Small, incredibly fast and worth one hundred and fifty points.",

    image:
      "/images/home/curiosities/golden-snitch.png",

    link:
      "/objects/golden-snitch",

    className:
      "magical-curiosity--snitch",
  },

  {
    id: "phoenix-feather",

    name: "Phoenix Feather",

    type: "MAGICAL MATERIAL",

    shortLabel: "Rebirth",

    description:
      "An exceptionally rare magical material capable of forming powerful wand cores.",

    image:
      "/images/home/curiosities/phoenix-feather.png",

    link:
      "/creatures/phoenix",

    className:
      "magical-curiosity--feather",
  },

  {
    id: "mandrake",

    name: "Mandrake",

    type: "MAGICAL PLANT",

    shortLabel: "Restoration",

    description:
      "A powerful restorative plant whose cry can become dangerously potent.",

    image:
      "/images/home/curiosities/mandrake.png",

    link:
      "/plants/mandrake",

    className:
      "magical-curiosity--mandrake",
  },
];


function MagicalCuriosities() {
  const sectionRef =
    useRef(null);

  const [visible, setVisible] =
    useState(false);

  const [activeItem, setActiveItem] =
    useState(null);


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
          threshold: 0.12,
        }
      );


    observer.observe(section);


    return () => {
      observer.disconnect();
    };
  }, []);


  const toggleItem = (id) => {
    setActiveItem((current) =>
      current === id
        ? null
        : id
    );
  };


  return (
    <section
      ref={sectionRef}
      className={
        visible
          ? "magical-curiosities magical-curiosities--visible"
          : "magical-curiosities"
      }
    >

      {/* ========================================
          INTRO
      ======================================== */}

      <header className="magical-curiosities__intro">

        <p className="magical-curiosities__eyebrow">
          THE CABINET OF MAGICAL CURIOSITIES
        </p>


        <h2 className="magical-curiosities__title">

          Objects With

          <span>
            Stories of Their Own.
          </span>

        </h2>


        <p className="magical-curiosities__description">
          Some objects are remembered because
          of what they can do. Others because
          of the people who carried them.
          Every artifact holds a fragment
          of wizarding history.
        </p>

      </header>


      {/* ========================================
          ARCHIVE CABINET
      ======================================== */}

      <div className="magical-curiosities__cabinet">

        <div className="magical-curiosities__cabinet-glow" />


        {/* Cabinet label */}

        <div className="magical-curiosities__cabinet-heading">

          <span />

          <p>
            SELECT AN OBJECT TO REVEAL ITS RECORD
          </p>

          <span />

        </div>


        <div className="magical-curiosities__cabinet-frame">


          {/* ========================================
              TOP SHELF
          ======================================== */}

          <div className="magical-curiosities__row magical-curiosities__row--top">

            {curiosities
              .slice(0, 3)
              .map((item) => (
                <Curiosity
                  key={item.id}
                  item={item}
                  active={
                    activeItem === item.id
                  }
                  onToggle={() =>
                    toggleItem(item.id)
                  }
                  onEnter={() =>
                    setActiveItem(item.id)
                  }
                  onLeave={() =>
                    setActiveItem(null)
                  }
                />
              ))}

          </div>


          <div className="magical-curiosities__shelf">
            <span />
          </div>


          {/* ========================================
              BOTTOM SHELF
          ======================================== */}

          <div className="magical-curiosities__row magical-curiosities__row--bottom">

            {curiosities
              .slice(3)
              .map((item) => (
                <Curiosity
                  key={item.id}
                  item={item}
                  active={
                    activeItem === item.id
                  }
                  onToggle={() =>
                    toggleItem(item.id)
                  }
                  onEnter={() =>
                    setActiveItem(item.id)
                  }
                  onLeave={() =>
                    setActiveItem(null)
                  }
                />
              ))}

          </div>


          <div className="magical-curiosities__shelf magical-curiosities__shelf--bottom">
            <span />
          </div>

        </div>

      </div>


      {/* ========================================
          FOOTER
      ======================================== */}

      <footer className="magical-curiosities__footer">

        <span />

        <p>
          Every object leaves
          a trace behind.
        </p>

        <span />

      </footer>

    </section>
  );
}


/* =========================================
   CURIOSITY ITEM
========================================= */

function Curiosity({
  item,
  active,
  onToggle,
  onEnter,
  onLeave,
}) {
  return (
    <article
      className={`
        magical-curiosity
        ${item.className}
        ${
          active
            ? "magical-curiosity--active"
            : ""
        }
      `}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >

      <button
        type="button"
        className="magical-curiosity__object"
        onClick={onToggle}
        aria-label={`Reveal ${item.name}`}
      >

        <span className="magical-curiosity__halo" />


        <img
          src={item.image}
          alt={item.name}
          className="magical-curiosity__image"
        />

      </button>


      {/* Permanent object label */}

      <div className="magical-curiosity__label">

        <small>
          {item.type}
        </small>

        <h3>
          {item.name}
        </h3>

        <span>
          {item.shortLabel}
        </span>

      </div>


      {/* Hover / tap information */}

      <div className="magical-curiosity__info">

        <small>
          {item.type}
        </small>

        <h3>
          {item.name}
        </h3>

        <p>
          {item.description}
        </p>

        <Link
          to={item.link}
          className="magical-curiosity__link"
        >
          Open archive

          <FiArrowUpRight />
        </Link>

      </div>

    </article>
  );
}


export default MagicalCuriosities;