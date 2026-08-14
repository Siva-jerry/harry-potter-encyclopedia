import "./SpellManuscript.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { Link } from "react-router-dom";

import {
  FiArrowUpRight,
} from "react-icons/fi";


const spells = [
  {
    id: "expecto-patronum",

    name: "Expecto Patronum",

    type: "DEFENSIVE CHARM",

    description:
      "A powerful protective charm that conjures a Patronus.",

    side: "left",

    order: "top",

    link:
      "/spells/expecto-patronum",
  },

  {
    id: "lumos",

    name: "Lumos",

    type: "WAND-LIGHTING CHARM",

    description:
      "Illuminates the tip of a wand with magical light.",

    side: "left",

    order: "bottom",

    link:
      "/spells/lumos",
  },

  {
    id: "expelliarmus",

    name: "Expelliarmus",

    type: "DISARMING CHARM",

    description:
      "Forces an opponent to release whatever they are holding.",

    side: "right",

    order: "top",

    link:
      "/spells/expelliarmus",
  },

  {
    id: "accio",

    name: "Accio",

    type: "SUMMONING CHARM",

    description:
      "Summons an object toward the caster.",

    side: "right",

    order: "bottom",

    link:
      "/spells/accio",
  },
];


function SpellManuscript() {
  const sectionRef =
    useRef(null);

  const [visible, setVisible] =
    useState(false);

  const [activeSpell, setActiveSpell] =
    useState(null);


  /* ========================================
     SCROLL REVEAL
  ======================================== */

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
          threshold: 0.16,
        }
      );


    observer.observe(section);


    return () => {
      observer.disconnect();
    };

  }, []);


  const renderSpell = (spell) => {
    const active =
      activeSpell === spell.id;


    return (
      <article
        key={spell.id}
        className={`
          spell-manuscript__spell
          spell-manuscript__spell--${spell.order}
          ${
            active
              ? "spell-manuscript__spell--active"
              : ""
          }
        `}
        onMouseEnter={() =>
          setActiveSpell(spell.id)
        }
        onMouseLeave={() =>
          setActiveSpell(null)
        }
      >

        {/* Magical marker */}

        <button
          type="button"
          className="spell-manuscript__sigil"
          onClick={() =>
            setActiveSpell(
              active
                ? null
                : spell.id
            )
          }
          aria-label={`Reveal ${spell.name}`}
        >

          <span className="spell-manuscript__sigil-ring" />

          <span className="spell-manuscript__sigil-core">
            ✧
          </span>

        </button>


        {/* Spell information */}

        <div className="spell-manuscript__spell-copy">

          <small>
            {spell.type}
          </small>


          <h3>
            {spell.name}
          </h3>


          <p>
            {spell.description}
          </p>


          <Link
            to={spell.link}
            className="spell-manuscript__spell-link"
          >
            Study spell

            <FiArrowUpRight />
          </Link>

        </div>

      </article>
    );
  };


  const leftSpells =
    spells.filter(
      (spell) =>
        spell.side === "left"
    );


  const rightSpells =
    spells.filter(
      (spell) =>
        spell.side === "right"
    );


  return (
    <section
      ref={sectionRef}
      className={
        visible
          ? "spell-manuscript spell-manuscript--visible"
          : "spell-manuscript"
      }
    >

      {/* ========================================
          INTRO
      ======================================== */}

      <div className="spell-manuscript__intro">

        <p className="spell-manuscript__eyebrow">
          INCANTATIONS · CHARMS · CURSES
        </p>


        <h2 className="spell-manuscript__title">
          Magic Has

          <span>
            Rules.
          </span>
        </h2>


        <p className="spell-manuscript__description">
          Words matter. Intent matters.
          Every spell is shaped by knowledge,
          discipline and the witch or wizard
          who casts it.
        </p>

      </div>


      {/* ========================================
          MANUSCRIPT STAGE
      ======================================== */}

      <div className="spell-manuscript__stage">

        <div className="spell-manuscript__stage-glow" />


        <div className="spell-manuscript__layout">


          {/* ========================================
              LEFT SPELLS
          ======================================== */}

          <div className="spell-manuscript__column spell-manuscript__column--left">

            {leftSpells.map(
              renderSpell
            )}

          </div>


          {/* ========================================
              CENTER SPELLBOOK
          ======================================== */}

          <div className="spell-manuscript__center">

            <div className="spell-manuscript__book-wrap">


              {/* parchment texture */}

              <div className="spell-manuscript__parchment-texture" />


              {/* book */}

              <img
                src="/images/home/spells/spellbook.png"
                alt="Open magical spellbook"
                className="spell-manuscript__book"
              />


              {/* magical surface light */}

              <div className="spell-manuscript__book-light" />


              {/* floating magical points */}

              <div className="spell-manuscript__ink">

                <span />

                <span />

                <span />

                <span />

              </div>

            </div>


            {/* ========================================
                WAND
            ======================================== */}

            <div className="spell-manuscript__wand-zone">

              <img
                src="/images/home/spells/wand.png"
                alt=""
                aria-hidden="true"
                className="spell-manuscript__wand"
              />


              <div className="spell-manuscript__wand-trail">

                <span />

                <span />

              </div>

            </div>

          </div>


          {/* ========================================
              RIGHT SPELLS
          ======================================== */}

          <div className="spell-manuscript__column spell-manuscript__column--right">

            {rightSpells.map(
              renderSpell
            )}

          </div>

        </div>

      </div>


      {/* ========================================
          CLOSING
      ======================================== */}

      <div className="spell-manuscript__footer">

        <span />

        <p>
          A spell is only as powerful
          as the mind behind the wand.
        </p>

        <span />

      </div>

    </section>
  );
}


export default SpellManuscript;