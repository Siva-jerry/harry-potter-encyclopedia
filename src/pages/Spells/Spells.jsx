import "./Spells.css";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  FiSearch,
  FiX,
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import MagicalBackground from "../../components/MagicalBackground/MagicalBackground";

import spellData, {
  spellCategories,
} from "./spellData";


function Spells() {
  const pageRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] =
    useState("All Magic");

  const [selectedSpell, setSelectedSpell] =
    useState(null);

  const [searchOpen, setSearchOpen] =
    useState(false);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [cursor, setCursor] = useState({
    x: 50,
    y: 50,
  });


  /* ========================================================
     PAGE ENTRANCE
  ======================================================== */

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 180);

    return () => clearTimeout(timer);
  }, []);


  /* ========================================================
     FILTER SPELLS
  ======================================================== */

  const filteredSpells = useMemo(() => {
    const query =
      searchTerm.trim().toLowerCase();

    return spellData.filter((spell) => {
      const matchesCategory =
        activeCategory === "All Magic" ||
        spell.category === activeCategory;

      const matchesSearch =
        !query ||
        spell.name
          .toLowerCase()
          .includes(query) ||
        spell.classification
          .toLowerCase()
          .includes(query) ||
        spell.category
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [
    activeCategory,
    searchTerm,
  ]);


  /* ========================================================
     CATEGORY CHANGE
  ======================================================== */

  const changeCategory = (category) => {
    setActiveCategory(category);
    setSelectedSpell(null);
  };


  /* ========================================================
     ROTATE CATEGORY DIAL
  ======================================================== */

  const rotateCategory = (direction) => {
    const currentIndex =
      spellCategories.indexOf(activeCategory);

    let nextIndex =
      currentIndex + direction;

    if (nextIndex < 0) {
      nextIndex =
        spellCategories.length - 1;
    }

    if (
      nextIndex >=
      spellCategories.length
    ) {
      nextIndex = 0;
    }

    changeCategory(
      spellCategories[nextIndex]
    );
  };


  /* ========================================================
     CONSTELLATION CURSOR LIGHT
  ======================================================== */

  const handleConstellationMove = (
    event
  ) => {
    const bounds =
      event.currentTarget
        .getBoundingClientRect();

    const x =
      ((event.clientX - bounds.left) /
        bounds.width) *
      100;

    const y =
      ((event.clientY - bounds.top) /
        bounds.height) *
      100;

    setCursor({
      x,
      y,
    });
  };


  /* ========================================================
     DARK MODE CHECK
  ======================================================== */

  const darkMode =
    activeCategory === "Dark Magic" ||
    activeCategory === "Unforgivable" ||
    selectedSpell?.category ===
      "Dark Magic" ||
    selectedSpell?.category ===
      "Unforgivable";


  const categoryClass =
    activeCategory
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");


  return (
    <main
      ref={pageRef}
      className={`
        spells-page
        ${
          visible
            ? "spells-page--visible"
            : ""
        }
        ${
          darkMode
            ? "spells-page--dark"
            : ""
        }
        spells-page--${categoryClass}
      `}
    >

      {/* ====================================================
          SHARED MAGICAL WORLD
      ==================================================== */}

      <MagicalBackground />


      {/* ====================================================
          PAGE ATMOSPHERE
      ==================================================== */}

      <div
        className="spells-atmosphere"
        aria-hidden="true"
      >
        <div className="spells-atmosphere__halo" />

        <div className="spells-atmosphere__mist spells-atmosphere__mist--one" />

        <div className="spells-atmosphere__mist spells-atmosphere__mist--two" />

        <img
          src="/images/spells/dark-magic-smoke.png"
          alt=""
          className="spells-atmosphere__dark-smoke"
        />
      </div>


      {/* ====================================================
          HERO
      ==================================================== */}

      <section className="spells-hero">

        <div
          className="spells-hero__arcane-seal"
          aria-hidden="true"
        >
          <span className="spells-hero__arcane-ring spells-hero__arcane-ring--one" />
          <span className="spells-hero__arcane-ring spells-hero__arcane-ring--two" />
          <span className="spells-hero__arcane-ring spells-hero__arcane-ring--three" />
          <i>✦</i>
        </div>

        <div className="spells-hero__coordinates">
          <span>ARCANE ARCHIVE</span>

          <span>
            VOL. II · SPELLCRAFT
          </span>
        </div>


        <div className="spells-hero__content">

          <p className="spells-hero__eyebrow">
            INCANTATIONS · INTENT · MAGIC
          </p>

          <h1 className="spells-hero__title">
            Every Spell

            <span>
              Leaves a Signature.
            </span>
          </h1>

          <p className="spells-hero__description">
            Magic is more than a word.
            Every incantation carries a
            purpose, an effect and the intent
            of the witch or wizard who casts
            it.
          </p>

          <div className="spells-hero__stats">
            <div>
              <strong>{spellData.length}</strong>
              <span>Known Spells</span>
            </div>

            <div>
              <strong>{filteredSpells.length}</strong>
              <span>Visible Signatures</span>
            </div>

            <div>
              <strong>{activeCategory}</strong>
              <span>Current Discipline</span>
            </div>
          </div>

        </div>


        {/* SEARCH */}

        <div
          className={
            searchOpen
              ? "spell-search spell-search--open"
              : "spell-search"
          }
        >
          <button
            type="button"
            className="spell-search__trigger"
            onClick={() =>
              setSearchOpen(
                (current) => !current
              )
            }
            aria-label="Search spells"
          >
            {searchOpen ? (
              <FiX />
            ) : (
              <FiSearch />
            )}

            <span>
              {searchOpen
                ? "CLOSE"
                : "SEEK A SPELL"}
            </span>
          </button>

          <div className="spell-search__field">
            <input
              type="text"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(
                  event.target.value
                )
              }
              placeholder="Type an incantation..."
              aria-label="Search spell archive"
            />

            <span className="spell-search__line" />
          </div>
        </div>


        <div className="spells-hero__scroll">
          <span />

          <p>
            Enter the constellation
          </p>
        </div>

      </section>


      {/* ====================================================
          ARCANE CONSTELLATION
      ==================================================== */}

      <section className="spell-constellation-section">

        <div className="spell-constellation-section__intro">

          <p>
            THE LIVING INDEX
          </p>

          <h2>
            The Arcane
            <span>Constellation</span>
          </h2>

        </div>


        <div className="spell-constellation-status">
          <div>
            <small>DISCIPLINE</small>
            <strong>{activeCategory}</strong>
          </div>

          <span className="spell-constellation-status__line" />

          <div>
            <small>VISIBLE</small>
            <strong>
              {String(filteredSpells.length).padStart(2, "0")}
            </strong>
          </div>

          <span className="spell-constellation-status__line" />

          <div>
            <small>SELECTED</small>
            <strong>
              {selectedSpell ? selectedSpell.name : "None"}
            </strong>
          </div>
        </div>

        <div
          className="spell-constellation"
          onMouseMove={
            handleConstellationMove
          }
        >

          {/* CURSOR LIGHT */}

          <div
            className="spell-constellation__cursor-light"
            style={{
              left: `${cursor.x}%`,
              top: `${cursor.y}%`,
            }}
          />


          {/* RUNES */}

          <img
            src="/images/spells/arcane-runes.png"
            alt=""
            className="spell-constellation__runes"
            aria-hidden="true"
          />


          {/* WAND */}

          <img
            src="/images/spells/spell-wand.png"
            alt=""
            className="spell-constellation__wand"
            aria-hidden="true"
          />


          {/* CENTRAL ORBITS */}

          <div
            className="spell-orbits"
            aria-hidden="true"
          >
            <span className="spell-orbits__ring spell-orbits__ring--one" />
            <span className="spell-orbits__ring spell-orbits__ring--two" />
            <span className="spell-orbits__ring spell-orbits__ring--three" />

            <i />
          </div>


          {/* CONNECTION PATHS */}

          <svg
            className="spell-constellation__paths"
            viewBox="0 0 1000 700"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M310 238 C390 170 440 185 490 189" />
            <path d="M490 189 C590 145 650 180 700 252" />
            <path d="M310 238 C350 310 365 330 400 343" />
            <path d="M400 343 C470 300 520 300 570 322" />
            <path d="M570 322 C650 335 710 365 760 392" />
            <path d="M240 413 C330 405 380 380 400 343" />
            <path d="M240 413 C285 470 310 485 340 490" />
            <path d="M340 490 C430 470 470 475 510 483" />
            <path d="M510 483 C590 470 640 490 680 511" />
            <path d="M680 511 C750 475 800 475 860 504" />
            <path d="M150 546 C240 520 280 505 340 490" />
            <path d="M450 588 C470 545 490 515 510 483" />
          </svg>


          {/* SPELL NODES */}

          <div className="spell-constellation__nodes">

            {spellData.map((spell) => {
              const available =
                filteredSpells.some(
                  (item) =>
                    item.id === spell.id
                );

              const active =
                selectedSpell?.id ===
                spell.id;

              return (
                <button
                  key={spell.id}
                  type="button"
                  className={`
                    spell-node
                    ${
                      available
                        ? "spell-node--available"
                        : "spell-node--muted"
                    }
                    ${
                      active
                        ? "spell-node--active"
                        : ""
                    }
                    ${
                      spell.category ===
                        "Unforgivable" ||
                      spell.category ===
                        "Dark Magic"
                        ? "spell-node--dark"
                        : ""
                    }
                  `}
                  style={{
                    left: `${spell.x}%`,
                    top: `${spell.y}%`,
                  }}
                  onClick={() => {
                    if (!available) return;

                    setSelectedSpell(
                      active
                        ? null
                        : spell
                    );
                  }}
                >
                  <span className="spell-node__pulse" />

                  <span className="spell-node__orbit" />

                  <span className="spell-node__core">
                    {spell.symbol}
                  </span>

                  <span className="spell-node__label">
                    <small>
                      {spell.category}
                    </small>

                    <strong>
                      {spell.name}
                    </strong>
                  </span>
                </button>
              );
            })}

          </div>


          {/* =================================================
              SPELL EXAMINATION CHAMBER
          ================================================= */}

          <aside
            className={
              selectedSpell
                ? "spell-examination spell-examination--open"
                : "spell-examination"
            }
          >

            {selectedSpell && (
              <>
                <button
                  type="button"
                  className="spell-examination__close"
                  onClick={() =>
                    setSelectedSpell(null)
                  }
                  aria-label="Close spell examination"
                >
                  <FiX />
                </button>


                <div className="spell-examination__number">
                  ARCANE RECORD
                </div>


                <div className="spell-examination__sigil">
                  <span />

                  <strong>
                    {selectedSpell.symbol}
                  </strong>

                  <span />
                </div>


                <p className="spell-examination__type">
                  {
                    selectedSpell.classification
                  }
                </p>


                <h3 className="spell-examination__name">
                  {selectedSpell.name}
                </h3>


                <p className="spell-examination__pronunciation">
                  {
                    selectedSpell.pronunciation
                  }
                </p>


                <div className="spell-examination__divider">
                  <span />
                  <i>✦</i>
                  <span />
                </div>


                <div className="spell-examination__facts">

                  <div>
                    <small>
                      EFFECT
                    </small>

                    <p>
                      {
                        selectedSpell.effect
                      }
                    </p>
                  </div>


                  <div>
                    <small>
                      PURPOSE
                    </small>

                    <p>
                      {
                        selectedSpell.purpose
                      }
                    </p>
                  </div>


                  <div>
                    <small>
                      DIFFICULTY
                    </small>

                    <strong>
                      {
                        selectedSpell.difficulty
                      }
                    </strong>
                  </div>

                </div>


                <div className="spell-examination__users">

                  <small>
                    KNOWN PRACTITIONERS
                  </small>

                  <div>
                    {selectedSpell.knownUsers.map(
                      (user) => (
                        <span key={user}>
                          {user}
                        </span>
                      )
                    )}
                  </div>

                </div>


                <div className="spell-examination__memory">

                  <small>
                    MEMORY FROM THE ARCHIVE
                  </small>

                  <p>
                    {
                      selectedSpell.notableUse
                    }
                  </p>

                </div>

              </>
            )}

          </aside>


          {/* EMPTY SEARCH STATE */}

          {filteredSpells.length === 0 && (
            <div className="spell-constellation__empty">
              <span>✦</span>

              <p>
                No magical signature
                answered your search.
              </p>
            </div>
          )}

        </div>


        {/* ====================================================
            ARCANE DIAL
        ==================================================== */}

        <div className="arcane-dial">

          <button
            type="button"
            className="arcane-dial__arrow"
            onClick={() =>
              rotateCategory(-1)
            }
            aria-label="Previous spell category"
          >
            <FiChevronLeft />
          </button>


          <div className="arcane-dial__instrument">

            <span className="arcane-dial__outer" />

            <span className="arcane-dial__middle" />

            <span className="arcane-dial__inner" />


            <div className="arcane-dial__center">

              <small>
                CURRENT DISCIPLINE
              </small>

              <strong>
                {activeCategory}
              </strong>

              <span>
                ✦
              </span>

            </div>

          </div>


          <button
            type="button"
            className="arcane-dial__arrow"
            onClick={() =>
              rotateCategory(1)
            }
            aria-label="Next spell category"
          >
            <FiChevronRight />
          </button>


          <div className="arcane-dial__categories">

            {spellCategories.map(
              (category) => (
                <button
                  type="button"
                  key={category}
                  className={
                    activeCategory ===
                    category
                      ? "arcane-dial__category arcane-dial__category--active"
                      : "arcane-dial__category"
                  }
                  onClick={() =>
                    changeCategory(category)
                  }
                >
                  {category}
                </button>
              )
            )}

          </div>

        </div>

      </section>


      {/* ====================================================
          MAGICAL THEORY
      ==================================================== */}

      <section className="spell-theory">

        <div className="spell-theory__heading">

          <p>
            PRINCIPLES OF SPELLCRAFT
          </p>

          <h2>
            Not All Magic
            <span>Behaves the Same.</span>
          </h2>

        </div>


        <div className="spell-theory__system">

          <article className="spell-theory__item spell-theory__item--one">
            <span>01</span>

            <small>
              CHARMS
            </small>

            <h3>
              Influence
            </h3>

            <p>
              Charms change what an object
              or person does without
              completely changing what it is.
            </p>
          </article>


          <article className="spell-theory__item spell-theory__item--two">
            <span>02</span>

            <small>
              DEFENSIVE MAGIC
            </small>

            <h3>
              Protection
            </h3>

            <p>
              Defensive spells shield,
              disarm, stun or protect against
              magical threats.
            </p>
          </article>


          <article className="spell-theory__item spell-theory__item--three">
            <span>03</span>

            <small>
              DARK MAGIC
            </small>

            <h3>
              Harm
            </h3>

            <p>
              Dark magic is often created
              with the intention to control,
              injure or permanently harm.
            </p>
          </article>


          <div
            className="spell-theory__energy"
            aria-hidden="true"
          >
            <span />
          </div>

        </div>

      </section>


      {/* ====================================================
          FORBIDDEN MAGIC
      ==================================================== */}

      <section className="forbidden-magic">

        <div className="forbidden-magic__image">

          <img
            src="/images/spells/forbidden-magic.png"
            alt="Dark magical chamber"
          />

          <div className="forbidden-magic__image-shade" />

        </div>


        <div className="forbidden-magic__content">

          <p className="forbidden-magic__eyebrow">
            RESTRICTED KNOWLEDGE
          </p>


          <h2>
            Some Magic
            <span>
              Should Never Be Cast.
            </span>
          </h2>


          <p className="forbidden-magic__description">
            The darkest spells are not
            dangerous simply because of
            their power. They demand intent —
            the deliberate desire to control,
            torture or kill.
          </p>


          <div className="forbidden-magic__curses">

            <button
              type="button"
              onClick={() => {
                changeCategory(
                  "Unforgivable"
                );

                setSelectedSpell(
                  spellData.find(
                    (spell) =>
                      spell.id ===
                      "imperio"
                  )
                );
              }}
            >
              <small>
                CONTROL
              </small>

              <strong>
                Imperio
              </strong>

              <span>
                Imperius Curse
              </span>
            </button>


            <button
              type="button"
              onClick={() => {
                changeCategory(
                  "Unforgivable"
                );

                setSelectedSpell(
                  spellData.find(
                    (spell) =>
                      spell.id ===
                      "crucio"
                  )
                );
              }}
            >
              <small>
                TORTURE
              </small>

              <strong>
                Crucio
              </strong>

              <span>
                Cruciatus Curse
              </span>
            </button>


            <button
              type="button"
              onClick={() => {
                changeCategory(
                  "Unforgivable"
                );

                setSelectedSpell(
                  spellData.find(
                    (spell) =>
                      spell.id ===
                      "avada-kedavra"
                  )
                );
              }}
            >
              <small>
                DEATH
              </small>

              <strong>
                Avada Kedavra
              </strong>

              <span>
                Killing Curse
              </span>
            </button>

          </div>

        </div>

      </section>


      {/* ====================================================
          SPELL INDEX
      ==================================================== */}

      <section className="spell-index">

        <div className="spell-index__heading">

          <p>
            COMPLETE REFERENCE
          </p>

          <h2>
            The Spell
            <span>Index.</span>
          </h2>

          <p className="spell-index__description">
            For those who prefer knowledge
            without wandering through the
            constellation.
          </p>

        </div>


        <div className="spell-index__list">

          {spellData
            .slice()
            .sort((a, b) =>
              a.name.localeCompare(b.name)
            )
            .map((spell, index) => (
              <button
                type="button"
                className="spell-index__row"
                key={spell.id}
                onClick={() => {
                  setActiveCategory(
                    "All Magic"
                  );

                  setSearchTerm("");

                  setSelectedSpell(spell);

                  document
                    .querySelector(
                      ".spell-constellation-section"
                    )
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
              >

                <span className="spell-index__number">
                  {String(
                    index + 1
                  ).padStart(2, "0")}
                </span>


                <span className="spell-index__symbol">
                  {spell.symbol}
                </span>


                <strong>
                  {spell.name}
                </strong>


                <span className="spell-index__classification">
                  {
                    spell.classification
                  }
                </span>


                <span className="spell-index__category">
                  {spell.category}
                </span>


                <FiArrowUpRight />

              </button>
            ))}

        </div>


        <div className="spell-index__closing">
          <span />

          <p>
            Magic remembers the hand
            that cast it.
          </p>

          <span />
        </div>

      </section>

    </main>
  );
}

export default Spells;