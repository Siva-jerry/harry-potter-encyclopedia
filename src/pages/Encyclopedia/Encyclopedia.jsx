import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  ChevronDown,
  Compass,
  Sparkles,
  BookOpen,
  Castle,
  WandSparkles,
  Skull,
  Map,
  Clock3,
} from "lucide-react";

import encyclopediaData from "../../data/encyclopediaData";

import "./Encyclopedia.css";


// ============================================================
// IMAGE FALLBACK
// ============================================================

const FALLBACK_IMAGE =
  "/images/encyclopedia/hero/encyclopedia-archive.png";


// ============================================================
// SMALL HELPERS
// ============================================================

const safeItems = (items) =>
  Array.isArray(items) ? items.filter(Boolean) : [];


const getImage = (item) =>
  item?.image ||
  item?.heroImage ||
  FALLBACK_IMAGE;


// ============================================================
// REVEAL COMPONENT
// ============================================================

function Reveal({
  children,
  className = "",
  delay = 0,
}) {
  const ref = useRef(null);
  const [visible, setVisible] =
    useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return undefined;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(element);
          }
        },
        {
          threshold: 0.12,
          rootMargin:
            "0px 0px -60px 0px",
        }
      );

    observer.observe(element);

    return () =>
      observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`ww-reveal ${
        visible ? "is-visible" : ""
      } ${className}`}
      style={{
        "--reveal-delay": `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}


// ============================================================
// MAGICAL IMAGE
// ============================================================

function MagicalImage({
  src,
  alt,
  className = "",
}) {
  return (
    <img
      className={className}
      src={src || FALLBACK_IMAGE}
      alt={alt || ""}
      loading="lazy"
      onError={(event) => {
        if (
          event.currentTarget.src.includes(
            FALLBACK_IMAGE
          )
        ) {
          return;
        }

        event.currentTarget.src =
          FALLBACK_IMAGE;
      }}
    />
  );
}


// ============================================================
// SECTION HEADER
// ============================================================

function SectionHeader({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
}) {
  return (
    <Reveal
      className={`ww-section-header ww-section-header--${align}`}
    >
      {eyebrow && (
        <div className="ww-kicker">
          <span />
          {eyebrow}
        </div>
      )}

      <h2>
        {title}

        {accent && (
          <>
            {" "}
            <em>{accent}</em>
          </>
        )}
      </h2>

      {description && (
        <p>{description}</p>
      )}
    </Reveal>
  );
}


// ============================================================
// ROUTE BUTTON
// ============================================================

function RouteButton({
  children,
  onClick,
  variant = "primary",
}) {
  return (
    <button
      type="button"
      className={`ww-button ww-button--${variant}`}
      onClick={onClick}
    >
      <span>{children}</span>
      <ArrowRight size={16} />
    </button>
  );
}


// ============================================================
// ENCYCLOPEDIA
// ============================================================

export default function Encyclopedia() {
  const navigate = useNavigate();

  const pageRef = useRef(null);

  const [scrollProgress, setScrollProgress] =
    useState(0);

  const [activeConnection, setActiveConnection] =
    useState(0);

  const {
    hero,
    intro,
    sections,
    gateway,
    characters,
    magic,
    magicalLife,
    journey,
    artifacts,
    dark,
    stories,
    history,
    connections,
    finalRoutes,
    stats,
  } = encyclopediaData;


  // ==========================================================
  // CLEAN DATA
  // ==========================================================

  const gatewayItems =
    useMemo(
      () => safeItems(gateway),
      [gateway]
    );

  const characterItems =
    useMemo(
      () => safeItems(characters),
      [characters]
    );

  const creatureItems =
    useMemo(
      () =>
        safeItems(
          magicalLife?.creatures
        ),
      [magicalLife]
    );

  const potionItems =
    useMemo(
      () =>
        safeItems(
          magicalLife?.potions
        ),
      [magicalLife]
    );

  const journeyItems =
    useMemo(
      () => safeItems(journey),
      [journey]
    );

  const artifactItems =
    useMemo(
      () => safeItems(artifacts),
      [artifacts]
    );

  const storyItems =
    useMemo(
      () => safeItems(stories),
      [stories]
    );

  const historyItems =
    useMemo(
      () => safeItems(history),
      [history]
    );

  const connectionItems =
    useMemo(
      () => safeItems(connections),
      [connections]
    );

  const finalItems =
    useMemo(
      () => safeItems(finalRoutes),
      [finalRoutes]
    );


  // ==========================================================
  // SCROLL PROGRESS
  // ==========================================================

  useEffect(() => {
    const updateProgress = () => {
      const documentElement =
        document.documentElement;

      const maxScroll =
        documentElement.scrollHeight -
        window.innerHeight;

      if (maxScroll <= 0) {
        setScrollProgress(0);
        return;
      }

      setScrollProgress(
        Math.min(
          100,
          Math.max(
            0,
            (window.scrollY /
              maxScroll) *
              100
          )
        )
      );
    };

    updateProgress();

    window.addEventListener(
      "scroll",
      updateProgress,
      { passive: true }
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


  // ==========================================================
  // NAVIGATION
  // ==========================================================

  const go = (route) => {
    if (!route) return;

    navigate(route);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  const scrollToTarget = (target) => {
    if (!target) return;

    const element =
      document.querySelector(target);

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  // ==========================================================
  // ACTIVE CONNECTION
  // ==========================================================

  const selectedConnection =
    connectionItems[
      activeConnection
    ] || connectionItems[0];


  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <main
      ref={pageRef}
      className="wizarding-world"
    >
      {/* ====================================================
          PAGE PROGRESS
      ==================================================== */}

      <div
        className="ww-progress"
        aria-hidden="true"
      >
        <span
          style={{
            transform: `scaleX(${
              scrollProgress / 100
            })`,
          }}
        />
      </div>


      {/* ====================================================
          AMBIENT BACKGROUND
      ==================================================== */}

      <div
        className="ww-ambient"
        aria-hidden="true"
      >
        <span className="ww-orb ww-orb--one" />
        <span className="ww-orb ww-orb--two" />
        <span className="ww-orb ww-orb--three" />

        <div className="ww-stars" />
        <div className="ww-grain" />
      </div>


      {/* ====================================================
          HERO
      ==================================================== */}

      <section className="ww-hero">
        <div className="ww-hero__media">
          <MagicalImage
            src={hero?.image}
            alt=""
            className="ww-hero__image"
          />

          <div className="ww-hero__veil" />
          <div className="ww-hero__vignette" />
        </div>

        <div className="ww-hero__constellation">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="ww-shell ww-hero__inner">
          <div className="ww-hero__copy">
            <div className="ww-hero__eyebrow">
              <span className="ww-hero__star">
                ✦
              </span>

              {hero?.eyebrow}
            </div>

            <h1>
              <span>
                {hero?.title}
              </span>

              <em>
                {hero?.titleAccent}
              </em>
            </h1>

            <p className="ww-hero__description">
              {hero?.description}
            </p>

            <div className="ww-hero__actions">
              <RouteButton
                onClick={() =>
                  scrollToTarget(
                    hero?.primaryAction
                      ?.target
                  )
                }
              >
                {
                  hero
                    ?.primaryAction
                    ?.label
                }
              </RouteButton>

              <RouteButton
                variant="ghost"
                onClick={() =>
                  go(
                    hero
                      ?.secondaryAction
                      ?.route
                  )
                }
              >
                {
                  hero
                    ?.secondaryAction
                    ?.label
                }
              </RouteButton>
            </div>
          </div>

          <div className="ww-hero__side-note">
            <span>EST.</span>
            <strong>
              990
            </strong>
            <i />
            <p>
              {hero?.note}
            </p>
          </div>
        </div>

        <button
          type="button"
          className="ww-scroll-cue"
          onClick={() =>
            scrollToTarget(
              "#world-introduction"
            )
          }
          aria-label="Scroll to introduction"
        >
          <span>
            ENTER THE WORLD
          </span>

          <ChevronDown size={17} />
        </button>
      </section>


      {/* ====================================================
          INTRODUCTION
      ==================================================== */}

      <section
        id="world-introduction"
        className="ww-intro"
      >
        <div className="ww-shell ww-intro__grid">
          <Reveal className="ww-intro__visual">
            <div className="ww-intro__halo" />

            <MagicalImage
              src={intro?.image}
              alt="Enchanted wizarding world"
              className="ww-intro__image"
            />

            <span className="ww-intro__rune ww-intro__rune--one">
              ✦
            </span>

            <span className="ww-intro__rune ww-intro__rune--two">
              ◇
            </span>

            <span className="ww-intro__rune ww-intro__rune--three">
              ✧
            </span>
          </Reveal>

          <Reveal
            className="ww-intro__content"
            delay={120}
          >
            <div className="ww-kicker">
              <span />
              {intro?.eyebrow}
            </div>

            <h2>
              {intro?.title}
              <br />
              <em>
                {intro?.titleAccent}
              </em>
            </h2>

            <p>
              {intro?.description}
            </p>

            <blockquote>
              <span>“</span>
              {intro?.quote}
            </blockquote>
          </Reveal>
        </div>
      </section>


      {/* ====================================================
          WORLD GATEWAY
      ==================================================== */}

      <section
        id="world-gateway"
        className="ww-gateway ww-section"
      >
        <div className="ww-shell">
          <SectionHeader
            eyebrow="CHOOSE YOUR PATH"
            title="Where Will You"
            accent="Begin?"
            description="Every doorway leads deeper into the same magical world."
          />

          <div className="ww-gateway__grid">
            {gatewayItems.map(
              (item, index) => (
                <Reveal
                  key={`${item.id}-${index}`}
                  className={`ww-gateway-card ${
                    item.large
                      ? "ww-gateway-card--large"
                      : ""
                  }`}
                  delay={index * 80}
                >
                  <button
                    type="button"
                    onClick={() =>
                      go(item.route)
                    }
                  >
                    <MagicalImage
                      src={getImage(item)}
                      alt={item.name}
                    />

                    <div className="ww-gateway-card__shade" />

                    <div className="ww-gateway-card__number">
                      {item.number}
                    </div>

                    <div className="ww-gateway-card__content">
                      <span>
                        {item.eyebrow}
                      </span>

                      <h3>
                        {item.label ||
                          item.name}
                      </h3>

                      <p>
                        {item.description}
                      </p>

                      <div className="ww-inline-link">
                        Explore
                        <ArrowRight
                          size={15}
                        />
                      </div>
                    </div>
                  </button>
                </Reveal>
              )
            )}
          </div>
        </div>
      </section>


      {/* ====================================================
          WORLD INDEX
      ==================================================== */}

      <section className="ww-index ww-section">
        <div className="ww-shell">
          <SectionHeader
            eyebrow="THE WORLD"
            title="Eleven Paths."
            accent="One Story."
            description="Move through every major part of the magical world without turning this page into another ordinary archive."
            align="center"
          />

          <div className="ww-index__grid">
            {safeItems(sections).map(
              (section, index) => (
                <Reveal
                  key={section.id}
                  delay={
                    (index % 4) * 70
                  }
                >
                  <button
                    type="button"
                    className={`ww-index-card ww-theme-${section.theme}`}
                    onClick={() =>
                      go(section.route)
                    }
                  >
                    <span className="ww-index-card__number">
                      {section.number}
                    </span>

                    <span className="ww-index-card__kicker">
                      {section.kicker}
                    </span>

                    <h3>
                      {section.label}
                    </h3>

                    <p>
                      {section.subtitle}
                    </p>

                    <ArrowRight
                      size={17}
                    />
                  </button>
                </Reveal>
              )
            )}
          </div>
        </div>
      </section>


      {/* ====================================================
          CHARACTERS
      ==================================================== */}

      <section className="ww-characters ww-section">
        <div className="ww-shell">
          <div className="ww-characters__heading">
            <SectionHeader
              eyebrow="WITCHES & WIZARDS"
              title="Every Face Holds"
              accent="A Story."
              description="Friends, mentors and complicated figures whose choices shaped the fate of the wizarding world."
            />

            <Reveal>
              <RouteButton
                variant="ghost"
                onClick={() =>
                  go("/characters")
                }
              >
                All Characters
              </RouteButton>
            </Reveal>
          </div>

          <div className="ww-character-strip">
            {characterItems.map(
              (character, index) => (
                <Reveal
                  key={character.id}
                  className="ww-character"
                  delay={index * 70}
                >
                  <button
                    type="button"
                    onClick={() =>
                      go(
                        character.route
                      )
                    }
                  >
                    <div className="ww-character__portrait">
                      <MagicalImage
                        src={
                          character.image
                        }
                        alt={
                          character.name
                        }
                      />

                      <div className="ww-character__shade" />
                    </div>

                    <div className="ww-character__content">
                      <span>
                        {
                          character.meta
                        }
                      </span>

                      <h3>
                        {
                          character.name
                        }
                      </h3>

                      <p>
                        {
                          character.eyebrow
                        }
                      </p>
                    </div>
                  </button>
                </Reveal>
              )
            )}
          </div>
        </div>
      </section>


      {/* ====================================================
          MAGIC
      ==================================================== */}

      <section className="ww-magic ww-section">
        <div className="ww-magic__background">
          <MagicalImage
            src="/images/encyclopedia/world/spells-world.png"
            alt=""
          />

          <div />
        </div>

        <div className="ww-shell ww-magic__inner">
          <Reveal className="ww-magic__copy">
            <div className="ww-kicker">
              <span />
              WORDS OF POWER
            </div>

            <h2>
              Magic Begins
              <br />
              <em>
                With Intention.
              </em>
            </h2>

            <p>
              {
                magic?.featured
                  ?.description
              }
            </p>

            <RouteButton
              onClick={() =>
                go("/spells")
              }
            >
              Explore Spells
            </RouteButton>
          </Reveal>

          <Reveal
            className="ww-patronus"
            delay={130}
          >
            <div className="ww-patronus__rings">
              <span />
              <span />
              <span />
            </div>

            <MagicalImage
              src="/images/encyclopedia/world/patronus-world.png"
              alt="Patronus magic"
              className="ww-patronus__image"
            />

            <div className="ww-patronus__content">
              <span>
                {
                  magic?.featured
                    ?.eyebrow
                }
              </span>

              <h3>
                {
                  magic?.featured
                    ?.name
                }
              </h3>

              <p>
                {
                  magic?.featured
                    ?.secondary
                }
              </p>
            </div>
          </Reveal>
        </div>

        <div className="ww-shell">
          <div className="ww-spell-row">
            {safeItems(
              magic?.spells
            ).map(
              (spell, index) => (
                <Reveal
                  key={spell.id}
                  delay={index * 60}
                >
                  <button
                    type="button"
                    className="ww-spell"
                    onClick={() =>
                      go(spell.route)
                    }
                  >
                    <span className="ww-spell__symbol">
                      {
                        spell.symbol
                      }
                    </span>

                    <div>
                      <strong>
                        {spell.name}
                      </strong>

                      <small>
                        {
                          spell.eyebrow
                        }
                      </small>
                    </div>
                  </button>
                </Reveal>
              )
            )}
          </div>
        </div>
      </section>


      {/* ====================================================
          MAGICAL LIFE
      ==================================================== */}

      <section className="ww-life ww-section">
        <div className="ww-shell">
          <SectionHeader
            eyebrow="MAGICAL LIFE"
            title="Not Everything Magical"
            accent="Carries a Wand."
            description="Some magic flies, some hunts, some heals and some waits quietly inside a bottle."
          />

          <div className="ww-life__split">
            <Reveal className="ww-life-panel ww-life-panel--creatures">
              <div className="ww-life-panel__heading">
                <div>
                  <span>
                    CREATURES
                  </span>

                  <h3>
                    Beasts &
                    Beings
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    go(
                      "/creatures"
                    )
                  }
                  aria-label="Explore creatures"
                >
                  <ArrowRight
                    size={18}
                  />
                </button>
              </div>

              <div className="ww-creature-grid">
                {creatureItems.map(
                  (item) => (
                    <button
                      type="button"
                      key={item.id}
                      className="ww-creature"
                      onClick={() =>
                        go(
                          item.route
                        )
                      }
                    >
                      <MagicalImage
                        src={
                          item.image
                        }
                        alt={
                          item.name
                        }
                      />

                      <div className="ww-creature__shade" />

                      <div className="ww-creature__content">
                        <span>
                          {
                            item.eyebrow
                          }
                        </span>

                        <strong>
                          {item.name}
                        </strong>
                      </div>
                    </button>
                  )
                )}
              </div>
            </Reveal>

            <Reveal
              className="ww-life-panel ww-life-panel--potions"
              delay={120}
            >
              <div className="ww-life-panel__heading">
                <div>
                  <span>
                    ALCHEMY
                  </span>

                  <h3>
                    Bottled
                    Magic
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    go("/potions")
                  }
                  aria-label="Explore potions"
                >
                  <ArrowRight
                    size={18}
                  />
                </button>
              </div>

              <div className="ww-potion-list">
                {potionItems.map(
                  (item, index) => (
                    <button
                      type="button"
                      key={item.id}
                      className="ww-potion"
                      onClick={() =>
                        go(
                          item.route
                        )
                      }
                    >
                      <span className="ww-potion__number">
                        0
                        {index + 1}
                      </span>

                      <div className="ww-potion__image">
                        <MagicalImage
                          src={
                            item.image
                          }
                          alt={
                            item.name
                          }
                        />
                      </div>

                      <div className="ww-potion__copy">
                        <strong>
                          {item.name}
                        </strong>

                        <span>
                          {
                            item.meta
                          }
                        </span>
                      </div>

                      <ArrowRight
                        size={15}
                      />
                    </button>
                  )
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>


      {/* ====================================================
          WORLD JOURNEY / PLACES
      ==================================================== */}

      <section className="ww-journey ww-section">
        <div className="ww-shell">
          <SectionHeader
            eyebrow="BEYOND HOGWARTS"
            title="The World Is"
            accent="Larger Than The Castle."
            description="Follow a path through some of the most memorable places hidden across magical Britain."
            align="center"
          />

          <div className="ww-journey__line">
            {journeyItems.map(
              (place, index) => (
                <Reveal
                  key={place.id}
                  className="ww-place"
                  delay={index * 90}
                >
                  <button
                    type="button"
                    onClick={() =>
                      go(place.route)
                    }
                  >
                    <div className="ww-place__image">
                      <MagicalImage
                        src={
                          place.image
                        }
                        alt={
                          place.name
                        }
                      />

                      <span className="ww-place__step">
                        {place.step}
                      </span>
                    </div>

                    <div className="ww-place__copy">
                      <span>
                        {
                          place.eyebrow
                        }
                      </span>

                      <h3>
                        {place.name}
                      </h3>

                      <p>
                        {
                          place.description
                        }
                      </p>
                    </div>
                  </button>

                  {index <
                    journeyItems.length -
                      1 && (
                    <div className="ww-place__connector">
                      <i />
                      <span>✦</span>
                      <i />
                    </div>
                  )}
                </Reveal>
              )
            )}
          </div>

          <Reveal className="ww-center-action">
            <RouteButton
              variant="ghost"
              onClick={() =>
                go("/places")
              }
            >
              Explore All Places
            </RouteButton>
          </Reveal>
        </div>
      </section>


      {/* ====================================================
          ARTIFACTS
      ==================================================== */}

      <section className="ww-artifacts ww-section">
        <div className="ww-shell">
          <SectionHeader
            eyebrow="OBJECTS OF POWER"
            title="Magic Leaves"
            accent="Something Behind."
            description="Relics, tools and enchanted objects can carry more history than the wizard holding them."
          />

          <div className="ww-artifact-grid">
            {artifactItems.map(
              (artifact, index) => (
                <Reveal
                  key={artifact.id}
                  className={`ww-artifact ${
                    index === 0
                      ? "ww-artifact--featured"
                      : ""
                  }`}
                  delay={
                    (index % 3) * 80
                  }
                >
                  <button
                    type="button"
                    onClick={() =>
                      go(
                        artifact.route
                      )
                    }
                  >
                    <div className="ww-artifact__visual">
                      <MagicalImage
                        src={
                          artifact.image
                        }
                        alt={
                          artifact.name
                        }
                      />

                      <div className="ww-artifact__glow" />
                    </div>

                    <div className="ww-artifact__copy">
                      <span>
                        {
                          artifact.eyebrow
                        }
                      </span>

                      <h3>
                        {
                          artifact.name
                        }
                      </h3>

                      <p>
                        {
                          artifact.description
                        }
                      </p>

                      <div className="ww-inline-link">
                        Discover
                        <ArrowRight
                          size={14}
                        />
                      </div>
                    </div>
                  </button>
                </Reveal>
              )
            )}
          </div>
        </div>
      </section>


      {/* ====================================================
          DARK ARTS
      ==================================================== */}

      <section className="ww-dark ww-section">
        <div className="ww-dark__fog" />

        <div className="ww-shell">
          <div className="ww-dark__heading">
            <Reveal>
              <div className="ww-dark__warning">
                <Skull size={14} />
                RESTRICTED KNOWLEDGE
              </div>

              <h2>
                Some Paths
                <br />
                <em>
                  Should Be Feared.
                </em>
              </h2>

              <p>
                {
                  dark?.featured
                    ?.description
                }
              </p>
            </Reveal>
          </div>

          <div className="ww-dark__layout">
            {dark?.featured && (
              <Reveal className="ww-dark-feature">
                <button
                  type="button"
                  onClick={() =>
                    go(
                      dark.featured
                        .route
                    )
                  }
                >
                  <MagicalImage
                    src={
                      dark.featured
                        .image
                    }
                    alt={
                      dark.featured
                        .name
                    }
                  />

                  <div className="ww-dark-feature__shade" />

                  <div className="ww-dark-feature__copy">
                    <span>
                      {
                        dark.featured
                          .eyebrow
                      }
                    </span>

                    <h3>
                      {
                        dark.featured
                          .name
                      }
                    </h3>

                    <p>
                      {
                        dark.featured
                          .secondary
                      }
                    </p>
                  </div>
                </button>
              </Reveal>
            )}

            <div className="ww-dark__right">
              <div className="ww-dark-figures">
                {safeItems(
                  dark?.figures
                ).map(
                  (
                    figure,
                    index
                  ) => (
                    <Reveal
                      key={
                        figure.id
                      }
                      delay={
                        index *
                        70
                      }
                    >
                      <button
                        type="button"
                        className="ww-dark-person"
                        onClick={() =>
                          go(
                            figure.route
                          )
                        }
                      >
                        <MagicalImage
                          src={
                            figure.image
                          }
                          alt={
                            figure.name
                          }
                        />

                        <div>
                          <span>
                            {
                              figure.eyebrow
                            }
                          </span>

                          <strong>
                            {
                              figure.name
                            }
                          </strong>
                        </div>
                      </button>
                    </Reveal>
                  )
                )}
              </div>

              <Reveal className="ww-curses">
                <span className="ww-curses__label">
                  THE UNFORGIVABLE
                  CURSES
                </span>

                <div className="ww-curses__list">
                  {safeItems(
                    dark?.spells
                  ).map(
                    (spell) => (
                      <button
                        type="button"
                        key={
                          spell.id
                        }
                        onClick={() =>
                          go(
                            spell.route
                          )
                        }
                      >
                        <span>
                          {
                            spell.symbol
                          }
                        </span>

                        <div>
                          <strong>
                            {
                              spell.name
                            }
                          </strong>

                          <small>
                            {
                              spell.eyebrow
                            }
                          </small>
                        </div>
                      </button>
                    )
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>


      {/* ====================================================
          STORIES
      ==================================================== */}

      <section className="ww-stories ww-section">
        <div className="ww-shell">
          <SectionHeader
            eyebrow="THE STORY"
            title="Seven Years."
            accent="A Lifetime of Change."
            description="From the first journey to Hogwarts to the final battle, each chapter changes the world that follows."
          />

          <div className="ww-story-track">
            {storyItems.map(
              (story, index) => (
                <Reveal
                  key={story.id}
                  className="ww-story"
                  delay={
                    (index % 4) * 70
                  }
                >
                  <button
                    type="button"
                    onClick={() =>
                      go(story.route)
                    }
                  >
                    <div className="ww-story__image">
                      <MagicalImage
                        src={
                          story.image
                        }
                        alt={
                          story.name
                        }
                      />

                      <div className="ww-story__shade" />

                      <span className="ww-story__index">
                        {String(
                          index + 1
                        ).padStart(
                          2,
                          "0"
                        )}
                      </span>
                    </div>

                    <div className="ww-story__copy">
                      <span>
                        {
                          story.eyebrow
                        }
                      </span>

                      <h3>
                        {story.name}
                      </h3>

                      <p>
                        {
                          story.description
                        }
                      </p>
                    </div>
                  </button>
                </Reveal>
              )
            )}
          </div>

          <Reveal className="ww-center-action">
            <RouteButton
              onClick={() =>
                go("/stories")
              }
            >
              Experience The Stories
            </RouteButton>
          </Reveal>
        </div>
      </section>


      {/* ====================================================
          TIMELINE
      ==================================================== */}

      <section className="ww-history ww-section">
        <div className="ww-shell">
          <div className="ww-history__heading">
            <SectionHeader
              eyebrow="THROUGH TIME"
              title="History Leaves"
              accent="Echoes."
              description="Before Harry Potter ever reached Hogwarts, centuries of choices had already shaped the world waiting for him."
            />

            <Reveal>
              <div className="ww-history__icon">
                <Clock3
                  size={22}
                />
              </div>
            </Reveal>
          </div>

          <div className="ww-history__timeline">
            <div className="ww-history__rail" />

            {historyItems.map(
              (event, index) => (
                <Reveal
                  key={event.id}
                  className={`ww-history-event ${
                    index % 2 ===
                    0
                      ? "ww-history-event--left"
                      : "ww-history-event--right"
                  }`}
                  delay={80}
                >
                  <button
                    type="button"
                    onClick={() =>
                      go(event.route)
                    }
                  >
                    <div className="ww-history-event__year">
                      {
                        event.eyebrow
                      }
                    </div>

                    <div className="ww-history-event__dot">
                      <span />
                    </div>

                    <div className="ww-history-event__card">
                      <div className="ww-history-event__image">
                        <MagicalImage
                          src={
                            event.image
                          }
                          alt={
                            event.name
                          }
                        />
                      </div>

                      <div>
                        <span>
                          {
                            event.meta
                          }
                        </span>

                        <h3>
                          {
                            event.name
                          }
                        </h3>

                        <p>
                          {
                            event.description
                          }
                        </p>
                      </div>
                    </div>
                  </button>
                </Reveal>
              )
            )}
          </div>

          <Reveal className="ww-center-action">
            <RouteButton
              variant="ghost"
              onClick={() =>
                go("/timeline")
              }
            >
              Open Full Timeline
            </RouteButton>
          </Reveal>
        </div>
      </section>


      {/* ====================================================
          CONNECTIONS
      ==================================================== */}

      {connectionItems.length >
        0 && (
        <section className="ww-connections ww-section">
          <div className="ww-shell">
            <SectionHeader
              eyebrow="EVERYTHING CONNECTS"
              title="One World."
              accent="Countless Threads."
              description="Characters, places, magic and history are never isolated. Select a thread and follow its connections."
              align="center"
            />

            <div className="ww-connections__tabs">
              {connectionItems.map(
                (
                  connection,
                  index
                ) => (
                  <button
                    type="button"
                    key={
                      connection.id
                    }
                    className={
                      activeConnection ===
                      index
                        ? "is-active"
                        : ""
                    }
                    onClick={() =>
                      setActiveConnection(
                        index
                      )
                    }
                  >
                    {
                      connection.title
                    }
                  </button>
                )
              )}
            </div>

            {selectedConnection && (
              <div className="ww-connection-map">
                <Reveal className="ww-connection-map__heading">
                  <span>
                    THREAD{" "}
                    {String(
                      activeConnection +
                        1
                    ).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <h3>
                    {
                      selectedConnection.title
                    }
                  </h3>

                  <p>
                    {
                      selectedConnection.subtitle
                    }
                  </p>
                </Reveal>

                <div className="ww-connection-map__nodes">
                  {safeItems(
                    selectedConnection.nodes
                  ).map(
                    (
                      node,
                      index
                    ) => (
                      <div
                        className="ww-node-wrap"
                        key={`${node.id}-${index}`}
                      >
                        <Reveal
                          delay={
                            index *
                            90
                          }
                        >
                          <button
                            type="button"
                            className="ww-node"
                            onClick={() =>
                              go(
                                node.route
                              )
                            }
                          >
                            <div className="ww-node__visual">
                              {node.image ? (
                                <MagicalImage
                                  src={
                                    node.image
                                  }
                                  alt={
                                    node.name
                                  }
                                />
                              ) : (
                                <span>
                                  {
                                    node.symbol ||
                                    "✦"
                                  }
                                </span>
                              )}
                            </div>

                            <strong>
                              {
                                node.name
                              }
                            </strong>

                            <small>
                              {
                                node.meta ||
                                node.eyebrow
                              }
                            </small>
                          </button>
                        </Reveal>

                        {index <
                          selectedConnection
                            .nodes
                            .length -
                            1 && (
                          <div className="ww-node-connector">
                            <i />
                            <span>
                              ✦
                            </span>
                            <i />
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      )}


      {/* ====================================================
          WORLD STATISTICS
      ==================================================== */}

      <section className="ww-stats">
        <div className="ww-shell">
          <Reveal className="ww-stats__inner">
            <div className="ww-stat">
              <span>
                {
                  stats?.characters
                }
              </span>

              <small>
                CHARACTERS
              </small>
            </div>

            <div className="ww-stat">
              <span>
                {stats?.spells}
              </span>

              <small>
                SPELLS
              </small>
            </div>

            <div className="ww-stat">
              <span>
                {
                  stats?.creatures
                }
              </span>

              <small>
                CREATURES
              </small>
            </div>

            <div className="ww-stat">
              <span>
                {
                  stats?.artifacts
                }
              </span>

              <small>
                ARTIFACTS
              </small>
            </div>

            <div className="ww-stat ww-stat--total">
              <span>
                {stats?.total}+
              </span>

              <small>
                CONNECTIONS TO
                DISCOVER
              </small>
            </div>
          </Reveal>
        </div>
      </section>


      {/* ====================================================
          FINAL JOURNEY
      ==================================================== */}

      <section className="ww-final ww-section">
        <div className="ww-shell">
          <SectionHeader
            eyebrow="THE JOURNEY CONTINUES"
            title="Where Will You"
            accent="Go Next?"
            description="The world is open. Choose another path and continue exploring."
            align="center"
          />

          <div className="ww-final__grid">
            {finalItems.map(
              (item, index) => (
                <Reveal
                  key={item.id}
                  className="ww-final-card"
                  delay={index * 80}
                >
                  <button
                    type="button"
                    onClick={() =>
                      go(item.route)
                    }
                  >
                    <MagicalImage
                      src={item.image}
                      alt={item.title}
                    />

                    <div className="ww-final-card__shade" />

                    <div className="ww-final-card__copy">
                      <span>
                        {
                          item.eyebrow
                        }
                      </span>

                      <h3>
                        {
                          item.title
                        }
                      </h3>

                      <p>
                        {
                          item.description
                        }
                      </p>

                      <ArrowRight
                        size={18}
                      />
                    </div>
                  </button>
                </Reveal>
              )
            )}
          </div>

          <Reveal className="ww-final__seal">
            <div className="ww-final__seal-icon">
              <Sparkles
                size={19}
              />
            </div>

            <span>
              THE WIZARDING WORLD
            </span>

            <p>
              Every story begins
              somewhere.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}