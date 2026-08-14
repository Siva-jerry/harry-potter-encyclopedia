import "./CharacterDetail.css";

import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";

import MagicalBackground from "../../../components/MagicalBackground/MagicalBackground";

import characterData from "../characterData";


function CharacterDetail() {

  const { characterId } = useParams();

  const navigate = useNavigate();


  /* =========================================================
     FIND CURRENT CHARACTER
  ========================================================= */

  const currentIndex = characterData.findIndex(
    (character) =>
      character.id === characterId
  );


  const safeIndex =
    currentIndex >= 0
      ? currentIndex
      : 0;


  const character =
    characterData[safeIndex];


  /* =========================================================
     PREVIOUS / NEXT CHARACTER
  ========================================================= */

  const previousCharacter =
    safeIndex > 0
      ? characterData[safeIndex - 1]
      : null;


  const nextCharacter =
    safeIndex < characterData.length - 1
      ? characterData[safeIndex + 1]
      : null;


  /* =========================================================
     IDENTITY DATA
  ========================================================= */

  const identityEntries =
    Object.entries(
      character.identity || {}
    );


  /* =========================================================
     FALLBACK DATA
  ========================================================= */

  const stories =
    Array.isArray(character.story)
      ? character.story
      : [];


  const relationships =
    Array.isArray(character.relationships)
      ? character.relationships
      : [];


  const magic =
    Array.isArray(character.magic)
      ? character.magic
      : [];


  /* =========================================================
     FORMAT IDENTITY LABEL
  ========================================================= */

  const formatIdentityLabel = (key) => {

    return key
      .replace(
        /([a-z])([A-Z])/g,
        "$1 $2"
      )
      .replace(
        /_/g,
        " "
      )
      .toUpperCase();

  };


  /* =========================================================
     HANDLE MISSING IMAGE
  ========================================================= */

  const handleImageError = (event) => {

    event.currentTarget.style.opacity = "0";

  };


  return (

    <main className="hp-char-detail-page">


      {/* =====================================================
          MAGICAL BACKGROUND
      ====================================================== */}

      <div className="hp-char-detail-bg">

        <MagicalBackground />

      </div>


      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div
        className="hp-char-detail-ambient"
        aria-hidden="true"
      >

        <span className="hp-char-detail-ambient-orb hp-char-detail-ambient-orb-one" />

        <span className="hp-char-detail-ambient-orb hp-char-detail-ambient-orb-two" />

        <span className="hp-char-detail-ambient-orb hp-char-detail-ambient-orb-three" />

      </div>


      {/* =====================================================
          MAGICAL BOOK FRAME
      ====================================================== */}

      <div
        className="hp-char-detail-book-frame"
        aria-hidden="true"
      >

        <div className="hp-char-detail-frame-line hp-char-detail-frame-top" />

        <div className="hp-char-detail-frame-line hp-char-detail-frame-right" />

        <div className="hp-char-detail-frame-line hp-char-detail-frame-bottom" />

        <div className="hp-char-detail-frame-line hp-char-detail-frame-left" />


        {/* TOP LEFT */}

        <div className="hp-char-detail-corner hp-char-detail-corner-tl">

          <span />
          <span />
          <i>✦</i>

        </div>


        {/* TOP RIGHT */}

        <div className="hp-char-detail-corner hp-char-detail-corner-tr">

          <span />
          <span />
          <i>✦</i>

        </div>


        {/* BOTTOM LEFT */}

        <div className="hp-char-detail-corner hp-char-detail-corner-bl">

          <span />
          <span />
          <i>✦</i>

        </div>


        {/* BOTTOM RIGHT */}

        <div className="hp-char-detail-corner hp-char-detail-corner-br">

          <span />
          <span />
          <i>✦</i>

        </div>


        <div className="hp-char-detail-frame-rune hp-char-detail-frame-rune-left">
          ✦
        </div>

        <div className="hp-char-detail-frame-rune hp-char-detail-frame-rune-right">
          ✦
        </div>

      </div>




      {/* =====================================================
          BACK BUTTON
      ====================================================== */}

      <button
        type="button"
        className="hp-char-detail-back"
        onClick={() => navigate("/characters")}
      >

        <FiArrowLeft />

        <span>
          Character Archive
        </span>

      </button>


      {/* =====================================================
          MAIN CONTENT WRAPPER
      ====================================================== */}

      <div className="hp-char-detail-content">


        {/* ===================================================
            HERO
        ==================================================== */}

        <section className="hp-char-detail-hero">


          {/* PORTRAIT SIDE */}

          <div className="hp-char-detail-hero-visual">


            <div className="hp-char-detail-portrait-aura" />


            <div className="hp-char-detail-portrait-ornament">

              <span className="hp-char-detail-portrait-ornament-top">
                ✦
              </span>

              <span className="hp-char-detail-portrait-ornament-bottom">
                ✦
              </span>

            </div>


            <div className="hp-char-detail-portrait-shell">


              <div className="hp-char-detail-portrait-inner">

                <img
                  src={character.portrait}
                  alt={character.name}
                  onError={handleImageError}
                />


                <div className="hp-char-detail-portrait-vignette" />

              </div>


              <span className="hp-char-detail-portrait-corner hp-char-detail-portrait-corner-tl" />

              <span className="hp-char-detail-portrait-corner hp-char-detail-portrait-corner-tr" />

              <span className="hp-char-detail-portrait-corner hp-char-detail-portrait-corner-bl" />

              <span className="hp-char-detail-portrait-corner hp-char-detail-portrait-corner-br" />


            </div>


            <div className="hp-char-detail-record-number">

              <span>
                ARCHIVE RECORD
              </span>

              <strong>
                {character.number}
              </strong>

            </div>


          </div>


          {/* HERO TEXT */}

          <div className="hp-char-detail-hero-info">


            <div className="hp-char-detail-kicker">

              <span />

              <p>
                WIZARDING CHARACTER ARCHIVE
              </p>

            </div>


            <h1 className="hp-char-detail-name">

              {character.name}

            </h1>


            <p className="hp-char-detail-title">

              {character.title}

            </p>


            <div className="hp-char-detail-divider">

              <span />

              <i>
                ✦
              </i>

              <span />

            </div>


            <p className="hp-char-detail-introduction">

              {character.introduction}

            </p>


            {/* QUICK FACTS */}

            <div className="hp-char-detail-quick-facts">


              <div className="hp-char-detail-quick-fact">

                <small>
                  HOUSE
                </small>

                <strong>
                  {character.identity?.house || "Unknown"}
                </strong>

              </div>


              <div className="hp-char-detail-quick-fact">

                <small>
                  SPECIES
                </small>

                <strong>
                  {character.identity?.species || "Unknown"}
                </strong>

              </div>


              <div className="hp-char-detail-quick-fact">

                <small>
                  PATRONUS
                </small>

                <strong>
                  {character.identity?.patronus || "Unknown"}
                </strong>

              </div>


            </div>


            <div className="hp-char-detail-scroll-note">

              <span />

              Scroll to uncover the archive

            </div>


          </div>


        </section>


        {/* ===================================================
            ABOUT
        ==================================================== */}

        <section className="hp-char-detail-about">


          <div className="hp-char-detail-section-index">

            01

          </div>


          <div className="hp-char-detail-section-heading">

            <p>
              THE PERSON BEHIND THE NAME
            </p>

            <h2>

              Who Is

              <em>
                {character.name}?
              </em>

            </h2>

          </div>


          <div className="hp-char-detail-about-copy">

            <p>
              {character.introduction}
            </p>

            <p>
              {character.personality}
            </p>

          </div>


        </section>


        {/* ===================================================
            IDENTITY
        ==================================================== */}

        <section className="hp-char-detail-identity">


          <div className="hp-char-detail-identity-decoration">

            <span />

            <i>
              ✦
            </i>

            <span />

          </div>


          <header className="hp-char-detail-identity-header">

            <p>
              ARCHIVED INFORMATION
            </p>

            <h2>
              Magical Identity
            </h2>

          </header>


          <div className="hp-char-detail-identity-grid">


            {identityEntries.map(
              ([key, value], index) => (

                <article
                  className="hp-char-detail-identity-card"
                  key={key}
                >

                  <span className="hp-char-detail-identity-number">

                    {String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )}

                  </span>


                  <small>

                    {formatIdentityLabel(key)}

                  </small>


                  <strong>

                    {value || "Unknown"}

                  </strong>


                  <i>
                    ✦
                  </i>

                </article>

              )
            )}


          </div>


        </section>


        {/* ===================================================
            STORY TIMELINE
        ==================================================== */}

        {stories.length > 0 && (

          <section className="hp-char-detail-story">


            <div className="hp-char-detail-section-index">

              02

            </div>


            <div className="hp-char-detail-section-heading hp-char-detail-story-heading">

              <p>
                THROUGH THE YEARS
              </p>

              <h2>

                A Story Written

                <em>
                  Through Time.
                </em>

              </h2>

            </div>


            <div className="hp-char-detail-timeline">


              <div className="hp-char-detail-timeline-spine" />


              {stories.map(
                (moment, index) => (

                  <article
                    className="hp-char-detail-timeline-entry"
                    key={`${moment.year}-${moment.title}-${index}`}
                  >


                    <div className="hp-char-detail-timeline-year">

                      {moment.year}

                    </div>


                    <div className="hp-char-detail-timeline-node">

                      <span />

                    </div>


                    <div className="hp-char-detail-timeline-copy">

                      <small>
                        {moment.label}
                      </small>

                      <h3>
                        {moment.title}
                      </h3>

                      <p>
                        {moment.text}
                      </p>

                    </div>


                  </article>

                )
              )}


            </div>


          </section>

        )}


        {/* ===================================================
            RELATIONSHIPS
        ==================================================== */}

        {relationships.length > 0 && (

          <section className="hp-char-detail-relations">


            <div className="hp-char-detail-section-index hp-char-detail-section-index-right">

              03

            </div>


            <div className="hp-char-detail-section-heading hp-char-detail-relations-heading">

              <p>
                PEOPLE WHO SHAPED THE STORY
              </p>

              <h2>

                Threads of

                <em>
                  Connection.
                </em>

              </h2>

            </div>


            <div className="hp-char-detail-relations-layout">


              {/* CURRENT CHARACTER */}

              <div className="hp-char-detail-relations-center">


                <div className="hp-char-detail-relations-center-ring">


                  <div className="hp-char-detail-relations-center-image">

                    <img
                      src={character.portrait}
                      alt={character.name}
                      onError={handleImageError}
                    />

                  </div>


                </div>


                <small>
                  CURRENT RECORD
                </small>

                <strong>
                  {character.name}
                </strong>


              </div>


              {/* CONNECTION LIST */}

              <div className="hp-char-detail-relations-list">


                {relationships.map(
                  (
                    relationship,
                    index
                  ) => (

                    <Link
                      to={`/characters/${relationship.id}`}
                      className="hp-char-detail-relation-card"
                      key={`${relationship.id}-${index}`}
                    >


                      <span className="hp-char-detail-relation-index">

                        {String(
                          index + 1
                        ).padStart(
                          2,
                          "0"
                        )}

                      </span>


                      <div className="hp-char-detail-relation-image">

                        <img
                          src={relationship.image}
                          alt={relationship.name}
                          onError={handleImageError}
                        />

                      </div>


                      <div className="hp-char-detail-relation-info">

                        <small>
                          {relationship.type}
                        </small>

                        <strong>
                          {relationship.name}
                        </strong>

                      </div>


                      <FiArrowUpRight />


                    </Link>

                  )
                )}


              </div>


            </div>


          </section>

        )}


        {/* ===================================================
            MAGIC
        ==================================================== */}

        {magic.length > 0 && (

          <section className="hp-char-detail-magic">


            <div className="hp-char-detail-section-index">

              04

            </div>


            <div className="hp-char-detail-section-heading">

              <p>
                MAGIC · OBJECTS · ABILITIES
              </p>

              <h2>

                Marks of

                <em>
                  Magic.
                </em>

              </h2>

            </div>


            <div className="hp-char-detail-magic-list">


              {magic.map(
                (
                  item,
                  index
                ) => (

                  <article
                    className="hp-char-detail-magic-row"
                    key={`${item.name}-${index}`}
                  >


                    <span className="hp-char-detail-magic-number">

                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}

                    </span>


                    <div>

                      <small>
                        {item.type}
                      </small>

                      <h3>
                        {item.name}
                      </h3>

                    </div>


                    <span className="hp-char-detail-magic-symbol">

                      ✦

                    </span>


                  </article>

                )
              )}


            </div>


          </section>

        )}


        {/* ===================================================
            CINEMATIC MEMORY
        ==================================================== */}

        {character.heroImage && (

          <section className="hp-char-detail-memory">


            <img
              src={character.heroImage}
              alt={`${character.name} memory`}
              onError={handleImageError}
            />


            <div className="hp-char-detail-memory-shade" />


            <div className="hp-char-detail-memory-grain" />


            <div className="hp-char-detail-memory-label">

              <span>
                ✦
              </span>

              <small>
                MEMORY PRESERVED
              </small>

            </div>


            <div className="hp-char-detail-memory-copy">

              <p>
                Every life leaves a trace
                in the wizarding world.
              </p>

            </div>


          </section>

        )}


        {/* ===================================================
            LEGACY
        ==================================================== */}

        {character.legacy && (

          <section className="hp-char-detail-legacy">


            <div className="hp-char-detail-legacy-symbol">

              ✦

            </div>


            <small>
              LEGACY
            </small>


            <blockquote>

              “{character.legacy}”

            </blockquote>


            <div className="hp-char-detail-legacy-rule">

              <span />

              <i>
                ✦
              </i>

              <span />

            </div>


            <p>
              {character.name}
            </p>


          </section>

        )}


        {/* ===================================================
            PREVIOUS / NEXT RECORD
        ==================================================== */}

        <nav className="hp-char-detail-record-nav">


          <div className="hp-char-detail-record-nav-side">


            {previousCharacter ? (

              <Link
                to={`/characters/${previousCharacter.id}`}
                className="hp-char-detail-record-link hp-char-detail-record-link-prev"
              >

                <FiArrowLeft />

                <span>

                  <small>
                    PREVIOUS RECORD
                  </small>

                  <strong>
                    {previousCharacter.name}
                  </strong>

                </span>

              </Link>

            ) : (

              <Link
                to="/characters"
                className="hp-char-detail-record-link hp-char-detail-record-link-prev"
              >

                <FiArrowLeft />

                <span>

                  <small>
                    RETURN TO
                  </small>

                  <strong>
                    Character Archive
                  </strong>

                </span>

              </Link>

            )}


          </div>


          <Link
            to="/characters"
            className="hp-char-detail-record-center"
          >

            <span>
              ✦
            </span>

            All Characters

          </Link>


          <div className="hp-char-detail-record-nav-side hp-char-detail-record-nav-side-right">


            {nextCharacter ? (

              <Link
                to={`/characters/${nextCharacter.id}`}
                className="hp-char-detail-record-link hp-char-detail-record-link-next"
              >

                <span>

                  <small>
                    NEXT RECORD
                  </small>

                  <strong>
                    {nextCharacter.name}
                  </strong>

                </span>

                <FiArrowRight />

              </Link>

            ) : (

              <Link
                to="/characters"
                className="hp-char-detail-record-link hp-char-detail-record-link-next"
              >

                <span>

                  <small>
                    END OF ARCHIVE
                  </small>

                  <strong>
                    Character Archive
                  </strong>

                </span>

                <FiArrowRight />

              </Link>

            )}


          </div>


        </nav>


      </div>


    </main>

  );

}

export default CharacterDetail;