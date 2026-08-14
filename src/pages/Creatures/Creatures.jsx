import "./Creatures.css";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  FiArrowDown,
  FiChevronLeft,
  FiChevronRight,
  FiSearch,
  FiX,
} from "react-icons/fi";

import MagicalBackground from "../../components/MagicalBackground/MagicalBackground";

import creatureData, {
  habitatData,
} from "./creatureData";

const habitats = [
  "forest",
  "sky",
  "water",
  "dark",
  "domestic",
];

const categoryLabels = {
  beast: "Magical Beast",
  being: "Sentient Being",
  dark: "Dark Entity",
  familiar: "Familiar",
};

function Rating({ value }) {
  return (
    <div
      className="creature-menagerie__rating"
      aria-label={`${value} out of 5`}
    >
      {[1, 2, 3, 4, 5].map((point) => (
        <span
          key={point}
          className={
            point <= value
              ? "creature-menagerie__rating-dot creature-menagerie__rating-dot--active"
              : "creature-menagerie__rating-dot"
          }
        />
      ))}
    </div>
  );
}

function Creatures() {
  const pageRef = useRef(null);
  const habitatRef = useRef(null);
  const encounterRef = useRef(null);

  const [entered, setEntered] = useState(false);
  const [activeHabitat, setActiveHabitat] =
    useState("forest");

  const [activeCreatureId, setActiveCreatureId] =
    useState("hippogriff");

  const [searchOpen, setSearchOpen] =
    useState(false);

  const [searchTerm, setSearchTerm] =
    useState("");

  const activeHabitatInfo =
    habitatData[activeHabitat];

  const habitatCreatures = useMemo(() => {
    return creatureData.filter(
      (creature) =>
        creature.habitat === activeHabitat
    );
  }, [activeHabitat]);

  const activeCreature = useMemo(() => {
    return (
      creatureData.find(
        (creature) =>
          creature.id === activeCreatureId
      ) ||
      habitatCreatures[0] ||
      creatureData[0]
    );
  }, [
    activeCreatureId,
    habitatCreatures,
  ]);

  const beings = useMemo(
    () =>
      creatureData.filter(
        (creature) =>
          creature.category === "being"
      ),
    []
  );

  const darkEntities = useMemo(
    () =>
      creatureData.filter(
        (creature) =>
          creature.category === "dark"
      ),
    []
  );

  const familiars = useMemo(
    () =>
      creatureData.filter(
        (creature) =>
          creature.category === "familiar"
      ),
    []
  );

  const archiveStats = useMemo(
    () => ({
      creatures: creatureData.length,
      habitats: habitats.length,
      beings: creatureData.filter(
        (creature) => creature.category === "being"
      ).length,
      darkEntities: creatureData.filter(
        (creature) => creature.category === "dark"
      ).length,
    }),
    []
  );

  const filteredIndex = useMemo(() => {
    const value =
      searchTerm.trim().toLowerCase();

    if (!value) {
      return [...creatureData].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return creatureData
      .filter((creature) => {
        return [
          creature.name,
          creature.example,
          creature.type,
          creature.habitat,
          creature.category,
        ]
          .join(" ")
          .toLowerCase()
          .includes(value);
      })
      .sort((a, b) =>
        a.name.localeCompare(b.name)
      );
  }, [searchTerm]);

  useEffect(() => {
    if (!habitatCreatures.length) return;

    const exists = habitatCreatures.some(
      (creature) =>
        creature.id === activeCreatureId
    );

    if (!exists) {
      setActiveCreatureId(
        habitatCreatures[0].id
      );
    }
  }, [
    activeHabitat,
    habitatCreatures,
    activeCreatureId,
  ]);

  const scrollToHabitat = () => {
    setEntered(true);

    habitatRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const chooseHabitat = (habitat) => {
    setActiveHabitat(habitat);

    const first = creatureData.find(
      (creature) =>
        creature.habitat === habitat
    );

    if (first) {
      setActiveCreatureId(first.id);
    }
  };

  const chooseCreature = (creature) => {
    setActiveHabitat(creature.habitat);
    setActiveCreatureId(creature.id);

    setTimeout(() => {
      encounterRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 80);
  };

  const changeCreature = (direction) => {
    if (!habitatCreatures.length) return;

    const index =
      habitatCreatures.findIndex(
        (creature) =>
          creature.id === activeCreature.id
      );

    const safeIndex =
      index < 0 ? 0 : index;

    const nextIndex =
      direction === "next"
        ? (safeIndex + 1) %
          habitatCreatures.length
        : (safeIndex -
            1 +
            habitatCreatures.length) %
          habitatCreatures.length;

    setActiveCreatureId(
      habitatCreatures[nextIndex].id
    );
  };

  return (
    <main
      ref={pageRef}
      className={
        entered
          ? "creature-menagerie creature-menagerie--entered"
          : "creature-menagerie"
      }
    >
      <MagicalBackground />

      {/* =====================================================
          01 — MENAGERIE GATE
      ===================================================== */}

      <section className="creature-menagerie__hero">
        <div className="creature-menagerie__hero-image" />

        <div className="creature-menagerie__hero-shadow" />
        <div className="creature-menagerie__hero-vignette" />

        <div className="creature-menagerie__flying-shadow">
          <span />
        </div>

        <div className="creature-menagerie__hero-content">
          <div className="creature-menagerie__hero-sigil">
            <span />
            <i>✦</i>
            <span />
          </div>

          <p className="creature-menagerie__eyebrow">
            THE WIZARDING CREATURE ARCHIVE
          </p>

          <h1 className="creature-menagerie__hero-title">
            The Living
            <span>Menagerie</span>
          </h1>

          <p className="creature-menagerie__hero-description">
            Beyond the castle walls live
            beings of fire, shadow, water,
            forest and ancient magic.
          </p>

          <div className="creature-menagerie__hero-census">
            <div>
              <strong>{archiveStats.creatures}</strong>
              <span>Archived Creatures</span>
            </div>

            <i />

            <div>
              <strong>{archiveStats.habitats}</strong>
              <span>Magical Habitats</span>
            </div>

            <i />

            <div>
              <strong>{archiveStats.beings}</strong>
              <span>Sentient Beings</span>
            </div>

            <i />

            <div>
              <strong>{archiveStats.darkEntities}</strong>
              <span>Dark Entities</span>
            </div>
          </div>

          <button
            type="button"
            className="creature-menagerie__enter"
            onClick={scrollToHabitat}
          >
            <span>Enter the Menagerie</span>

            <FiArrowDown />
          </button>
        </div>

        <div className="creature-menagerie__hero-coordinate">
          <span>ARCHIVE</span>
          <strong>CM · 001</strong>
        </div>
      </section>

      {/* =====================================================
          02 — HABITAT COMPASS
      ===================================================== */}

      <section
        ref={habitatRef}
        className="creature-menagerie__habitats"
      >
        <div
          className="creature-menagerie__habitat-world"
          style={{
            backgroundImage: `url(${activeHabitatInfo.background})`,
          }}
        />

        <div className="creature-menagerie__habitat-overlay" />

        <div className="creature-menagerie__section-heading">
          <p>
            MAGICAL HABITAT CARTOGRAPHY
          </p>

          <h2>
            Choose a
            <span>World.</span>
          </h2>

          <small>
            Every magical creature belongs
            somewhere. Follow the compass.
          </small>
        </div>

        <div className="creature-menagerie__compass-area">
          <div className="creature-menagerie__compass">
            <div className="creature-menagerie__compass-ring creature-menagerie__compass-ring--outer" />
            <div className="creature-menagerie__compass-ring creature-menagerie__compass-ring--middle" />
            <div className="creature-menagerie__compass-ring creature-menagerie__compass-ring--inner" />

            <span className="creature-menagerie__compass-line creature-menagerie__compass-line--vertical" />
            <span className="creature-menagerie__compass-line creature-menagerie__compass-line--horizontal" />

            {habitats.map(
              (habitat, index) => (
                <button
                  key={habitat}
                  type="button"
                  className={`
                    creature-menagerie__habitat-node
                    creature-menagerie__habitat-node--${habitat}
                    ${
                      activeHabitat === habitat
                        ? "creature-menagerie__habitat-node--active"
                        : ""
                    }
                  `}
                  onClick={() =>
                    chooseHabitat(habitat)
                  }
                >
                  <i>
                    {
                      habitatData[habitat]
                        .symbol
                    }
                  </i>

                  <span>
                    {
                      habitatData[habitat]
                        .label
                    }
                  </span>

                  <small>
                    0{index + 1}
                  </small>
                </button>
              )
            )}

            <div className="creature-menagerie__compass-core">
              <span />

              <strong>
                {activeHabitatInfo.symbol}
              </strong>
            </div>
          </div>

          <div className="creature-menagerie__habitat-copy">
            <small>
              CURRENT HABITAT
            </small>

            <h3>
              {activeHabitatInfo.label}
            </h3>

            <p>
              {
                activeHabitatInfo.subtitle
              }
            </p>

            <span>
              {
                habitatCreatures.length
              }{" "}
              archived specimens
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — CREATURE ENCOUNTER
      ===================================================== */}

      <section
        ref={encounterRef}
        className={`creature-menagerie__encounter creature-menagerie__encounter--${activeHabitat}`}
      >
        <div
          className="creature-menagerie__encounter-world"
          style={{
            backgroundImage: `url(${activeHabitatInfo.background})`,
          }}
        />

        <div className="creature-menagerie__encounter-darkness" />

        <div className="creature-menagerie__encounter-top">
          <p>
            FIELD OBSERVATION ·{" "}
            {activeHabitatInfo.label.toUpperCase()}
          </p>

          <div className="creature-menagerie__field-seal">
            <i>{activeHabitatInfo.symbol}</i>
            <small>LIVE SPECIMEN</small>
          </div>

          <span>
            {
              habitatCreatures.findIndex(
                (item) =>
                  item.id ===
                  activeCreature.id
              ) + 1
            }
            /
            {habitatCreatures.length}
          </span>
        </div>

        <div
          key={activeCreature.id}
          className="creature-menagerie__encounter-layout"
        >
          <div className="creature-menagerie__encounter-copy">
            <small>
              {
                categoryLabels[
                  activeCreature.category
                ]
              }
            </small>

            <h2>
              {activeCreature.name}
            </h2>

            <p className="creature-menagerie__example">
              Known specimen ·{" "}
              {activeCreature.example}
            </p>

            <p className="creature-menagerie__encounter-description">
              {
                activeCreature.description
              }
            </p>

            <div className="creature-menagerie__facts">
              <div>
                <span>CLASSIFICATION</span>
                <strong>
                  {activeCreature.type}
                </strong>
              </div>

              <div>
                <span>SIZE</span>
                <strong>
                  {activeCreature.size}
                </strong>
              </div>

              <div>
                <span>
                  MAGICAL TRAIT
                </span>
                <strong>
                  {activeCreature.trait}
                </strong>
              </div>

              <div>
                <span>
                  FIRST APPEARANCE
                </span>
                <strong>
                  {
                    activeCreature.appearance
                  }
                </strong>
              </div>
            </div>

            <div className="creature-menagerie__levels">
              <div>
                <span>DANGER</span>
                <Rating
                  value={
                    activeCreature.danger
                  }
                />
              </div>

              <div>
                <span>INTELLIGENCE</span>
                <Rating
                  value={
                    activeCreature.intelligence
                  }
                />
              </div>
            </div>
          </div>

          <div className="creature-menagerie__specimen">
            <div className="creature-menagerie__specimen-orbit creature-menagerie__specimen-orbit--one" />
            <div className="creature-menagerie__specimen-orbit creature-menagerie__specimen-orbit--two" />

            <div className="creature-menagerie__specimen-glow" />

            <img
              src={activeCreature.image}
              alt={activeCreature.name}
            />

            <span className="creature-menagerie__specimen-ground" />

            <p>
              SPECIMEN ·{" "}
              {activeCreature.id
                .replaceAll("-", " ")
                .toUpperCase()}
            </p>
          </div>
        </div>

        <div className="creature-menagerie__encounter-navigation">
          <button
            type="button"
            onClick={() =>
              changeCreature("previous")
            }
          >
            <FiChevronLeft />

            <span>Previous</span>
          </button>

          <div className="creature-menagerie__encounter-dots">
            {habitatCreatures.map(
              (creature) => (
                <button
                  type="button"
                  key={creature.id}
                  aria-label={`View ${creature.name}`}
                  className={
                    creature.id ===
                    activeCreature.id
                      ? "creature-menagerie__encounter-dot creature-menagerie__encounter-dot--active"
                      : "creature-menagerie__encounter-dot"
                  }
                  onClick={() =>
                    setActiveCreatureId(
                      creature.id
                    )
                  }
                />
              )
            )}
          </div>

          <button
            type="button"
            onClick={() =>
              changeCreature("next")
            }
          >
            <span>Next</span>

            <FiChevronRight />
          </button>
        </div>
      </section>

      {/* =====================================================
          04 — SENTIENT BEINGS
      ===================================================== */}

      <section className="creature-menagerie__beings">
        <div className="creature-menagerie__beings-heading">
          <p>
            MORE THAN CREATURES
          </p>

          <h2>
            Peoples of the
            <span>Magical World</span>
          </h2>

          <small>
            Intelligent magical communities
            with their own cultures,
            histories and traditions.
          </small>
        </div>

        <div className="creature-menagerie__being-orbit">
          <div className="creature-menagerie__being-center">
            <span>✦</span>

            <strong>
              SENTIENT
            </strong>

            <small>
              BEINGS
            </small>
          </div>

          {beings.map(
            (creature, index) => (
              <button
                type="button"
                key={creature.id}
                className={`creature-menagerie__being creature-menagerie__being--${index + 1}`}
                onClick={() =>
                  chooseCreature(creature)
                }
              >
                <div>
                  <img
                    src={creature.image}
                    alt=""
                  />
                </div>

                <span>
                  {creature.name}
                </span>

                <small>
                  {creature.trait}
                </small>
              </button>
            )
          )}
        </div>
      </section>

      {/* =====================================================
          05 — DARK ENTITIES
      ===================================================== */}

      <section className="creature-menagerie__dark">
        <div className="creature-menagerie__dark-background" />

        <div className="creature-menagerie__dark-fog creature-menagerie__dark-fog--one" />
        <div className="creature-menagerie__dark-fog creature-menagerie__dark-fog--two" />

        <div className="creature-menagerie__dark-heading">
          <p>
            RESTRICTED CLASSIFICATION
          </p>

          <h2>
            Things That
            <span>Lurk in Darkness.</span>
          </h2>
        </div>

        <div className="creature-menagerie__dark-list">
          {darkEntities.map(
            (creature, index) => (
              <button
                type="button"
                key={creature.id}
                onClick={() =>
                  chooseCreature(creature)
                }
                className="creature-menagerie__dark-entity"
              >
                <span>
                  0{index + 1}
                </span>

                <div className="creature-menagerie__dark-image">
                  <img
                    src={creature.image}
                    alt=""
                  />
                </div>

                <div>
                  <small>
                    {creature.type}
                  </small>

                  <h3>
                    {creature.name}
                  </h3>

                  <p>
                    {creature.trait}
                  </p>
                </div>

                <i>
                  <FiChevronRight />
                </i>
              </button>
            )
          )}
        </div>
      </section>

      {/* =====================================================
          06 — FAMILIARS
      ===================================================== */}

      <section className="creature-menagerie__familiars">
        <div className="creature-menagerie__familiars-heading">
          <p>
            COMPANIONS · MESSENGERS · FRIENDS
          </p>

          <h2>
            Creatures That
            <span>Stay Close.</span>
          </h2>
        </div>

        <div className="creature-menagerie__familiar-orbit">
          <span className="creature-menagerie__familiar-path" />

          <div className="creature-menagerie__familiar-center">
            <span>✦</span>

            <small>
              MAGICAL
            </small>

            <strong>
              COMPANIONS
            </strong>
          </div>

          {familiars.map(
            (creature, index) => (
              <button
                type="button"
                key={creature.id}
                className={`creature-menagerie__familiar creature-menagerie__familiar--${index + 1}`}
                onClick={() =>
                  chooseCreature(creature)
                }
              >
                <div>
                  <img
                    src={creature.image}
                    alt={creature.name}
                  />
                </div>

                <strong>
                  {creature.name}
                </strong>

                <span>
                  {creature.example}
                </span>
              </button>
            )
          )}
        </div>
      </section>

      {/* =====================================================
          07 — COMPLETE INDEX
      ===================================================== */}

      <section className="creature-menagerie__index">
        <div className="creature-menagerie__index-heading">
          <div>
            <p>
              COMPLETE ARCHIVE
            </p>

            <h2>
              Creature
              <span>Index</span>
            </h2>
          </div>

          <button
            type="button"
            className={
              searchOpen
                ? "creature-menagerie__search creature-menagerie__search--open"
                : "creature-menagerie__search"
            }
            onClick={() =>
              setSearchOpen(true)
            }
          >
            <FiSearch />

            <input
              type="text"
              value={searchTerm}
              placeholder="Find a creature..."
              aria-label="Find a creature"
              onFocus={() =>
                setSearchOpen(true)
              }
              onChange={(event) =>
                setSearchTerm(
                  event.target.value
                )
              }
            />

            {searchOpen && (
              <span
                role="button"
                tabIndex={0}
                onClick={(event) => {
                  event.stopPropagation();

                  setSearchTerm("");
                  setSearchOpen(false);
                }}
                onKeyDown={() => {}}
              >
                <FiX />
              </span>
            )}
          </button>
        </div>

        <div className="creature-menagerie__index-grid">
          {filteredIndex.map(
            (creature, index) => (
              <button
                type="button"
                key={creature.id}
                className="creature-menagerie__index-item"
                onClick={() =>
                  chooseCreature(creature)
                }
              >
                <span>
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <div>
                  <small>
                    {
                      categoryLabels[
                        creature.category
                      ]
                    }
                  </small>

                  <strong>
                    {creature.name}
                  </strong>

                  <p>
                    {creature.example}
                  </p>
                </div>

                <FiChevronRight />
              </button>
            )
          )}
        </div>

        {!filteredIndex.length && (
          <div className="creature-menagerie__empty">
            <span>✦</span>

            <p>
              No creature in the archive
              matches that search.
            </p>
          </div>
        )}

        <div className="creature-menagerie__index-footer">
          <span />

          <p>
            Not everything magical wishes
            to be found.
          </p>

          <span />
        </div>
      </section>
    </main>
  );
}

export default Creatures;