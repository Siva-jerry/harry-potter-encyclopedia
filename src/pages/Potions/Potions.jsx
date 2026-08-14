import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";

import {
  createPortal,
} from "react-dom";

import {
  GiPotionBall,
  GiPoisonBottle,
  GiHealthPotion,
  GiBrain,
  GiMagicSwirl,
  GiSparkles,
  GiSkullCrossedBones,
  GiCrystalBall,
} from "react-icons/gi";

import {
  FiArrowDown,
  FiArrowLeft,
  FiArrowRight,
  FiSearch,
  FiX,
} from "react-icons/fi";

import MagicalBackground from "../../components/MagicalBackground/MagicalBackground";

import potionData from "../../data/potionData";

import "./Potions.css";


/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  {
    id: "all",
    label: "All Potions",
    short: "Complete Archive",
    icon: GiPotionBall,
  },

  {
    id: "iconic",
    label: "Powerful & Iconic",
    short: "Legendary Brews",
    icon: GiSparkles,
  },

  {
    id: "healing",
    label: "Healing Remedies",
    short: "Restorative Magic",
    icon: GiHealthPotion,
  },

  {
    id: "dark",
    label: "Dark & Dangerous",
    short: "Restricted Mixtures",
    icon: GiPoisonBottle,
  },

  {
    id: "mind",
    label: "Mind & Academic",
    short: "Thought & Emotion",
    icon: GiBrain,
  },

  {
    id: "transformation",
    label: "Transformation",
    short: "Alteration Brews",
    icon: GiMagicSwirl,
  },
];


const darkPotionIds = [
  "draught-of-living-death",
  "wolfsbane-potion",
  "voldemort-rebirth-potion",
  "emerald-potion",
];


/* =========================================================
   POTION POPUP
========================================================= */

function PotionRecordPopup({
  potion,
  index,
  onClose,
  onPrevious,
  onNext,
}) {

  /* =======================================================
     KEYBOARD + BODY LOCK
  ======================================================= */

  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow;

    const previousPaddingRight =
      document.body.style.paddingRight;


    const scrollbarWidth =
      window.innerWidth -
      document.documentElement.clientWidth;


    document.body.style.overflow =
      "hidden";


    if (scrollbarWidth > 0) {
      document.body.style.paddingRight =
        `${scrollbarWidth}px`;
    }


    const handleKeyboard = (
      event
    ) => {

      if (event.key === "Escape") {
        onClose();
      }


      if (event.key === "ArrowLeft") {
        onPrevious();
      }


      if (event.key === "ArrowRight") {
        onNext();
      }

    };


    window.addEventListener(
      "keydown",
      handleKeyboard
    );


    return () => {

      document.body.style.overflow =
        previousOverflow;


      document.body.style.paddingRight =
        previousPaddingRight;


      window.removeEventListener(
        "keydown",
        handleKeyboard
      );

    };

  }, [
    onClose,
    onPrevious,
    onNext,
  ]);


  /* =======================================================
     PORTAL
  ======================================================= */

  return createPortal(

    <div
      className="potion-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="potion-modal-title"
    >

      {/* =====================================
          BACKDROP
      ====================================== */}

      <button
        type="button"
        className="potion-modal__backdrop"
        onClick={onClose}
        aria-label="Close potion record"
      />


      {/* =====================================
          MODAL WINDOW
      ====================================== */}

      <article
        className={`potion-modal__window potion-modal__window--${potion.color}`}
      >

        {/* =====================================
            DECORATIVE FRAME
        ====================================== */}

        <div
          className="potion-modal__frame"
          aria-hidden="true"
        >
          <i className="potion-modal__corner potion-modal__corner--tl" />
          <i className="potion-modal__corner potion-modal__corner--tr" />
          <i className="potion-modal__corner potion-modal__corner--bl" />
          <i className="potion-modal__corner potion-modal__corner--br" />
        </div>


        {/* =====================================
            CLOSE
        ====================================== */}

        <button
          type="button"
          className="potion-modal__close"
          onClick={onClose}
          aria-label="Close potion record"
        >
          <FiX />
        </button>


        {/* =====================================
            VISUAL SIDE
        ====================================== */}

        <div className="potion-modal__visual">

          <div className="potion-modal__glow" />


          <div className="potion-modal__orbit potion-modal__orbit--outer">

            <span />

            <i />

            <b />

          </div>


          <div className="potion-modal__orbit potion-modal__orbit--inner">

            <span />

            <i />

          </div>


          <span className="potion-modal__record-number">
            {potion.number}
          </span>


          <img
            key={potion.id}
            src={potion.image}
            alt={potion.name}
          />


          <div className="potion-modal__specimen-label">

            <span>
              ALCHEMICAL SPECIMEN
            </span>

            <i />

            <small>
              {potion.classification}
            </small>

          </div>

        </div>


        {/* =====================================
            INFORMATION SIDE
        ====================================== */}

        <div className="potion-modal__content">


          {/* HEADER */}

          <header className="potion-modal__header">

            <div>

              <span>
                Hogwarts Alchemical Archive
              </span>

              <small>
                Potion Examination Record
              </small>

            </div>


            <GiPotionBall />

          </header>


          {/* RECORD BAR */}

          <div className="potion-modal__record-bar">

            <span>
              RECORD
            </span>

            <strong>
              {String(
                index + 1
              ).padStart(
                2,
                "0"
              )}
            </strong>

            <i />

            <span>
              {potion.category}
            </span>

          </div>


          {/* ALIAS */}

          <p className="potion-modal__alias">
            {potion.alias}
          </p>


          {/* TITLE */}

          <h2
            id="potion-modal-title"
          >
            {potion.name}
          </h2>


          {/* TAGLINE */}

          <blockquote>
            {potion.tagline}
          </blockquote>


          {/* DESCRIPTION */}

          <p className="potion-modal__description">
            {potion.description}
          </p>


          {/* =====================================
              POTION FACTS
          ====================================== */}

          <section className="potion-modal__facts">

            <div className="potion-modal__fact potion-modal__fact--wide">

              <small>
                Primary Effect
              </small>

              <strong>
                {potion.effect}
              </strong>

            </div>


            <div className="potion-modal__fact">

              <small>
                Appearance
              </small>

              <strong>
                {potion.appearance}
              </strong>

            </div>


            <div className="potion-modal__fact">

              <small>
                Difficulty
              </small>

              <strong>
                {potion.difficulty}
              </strong>

            </div>


            <div className="potion-modal__fact">

              <small>
                Duration
              </small>

              <strong>
                {potion.duration}
              </strong>

            </div>


            <div className="potion-modal__fact">

              <small>
                Risk
              </small>

              <strong className="potion-modal__risk">
                {potion.danger}
              </strong>

            </div>

          </section>


          {/* =====================================
              MAGICAL PROPERTIES
          ====================================== */}

          <section className="potion-modal__properties">

            <div className="potion-modal__section-title">

              <span />

              <small>
                MAGICAL PROPERTIES
              </small>

              <span />

            </div>


            <div className="potion-modal__properties-list">

              {potion.knownFor.map(
                (
                  property,
                  propertyIndex
                ) => (

                  <div
                    key={`${potion.id}-${propertyIndex}`}
                    className="potion-modal__property"
                  >

                    <span>
                      {String(
                        propertyIndex + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>


                    <GiMagicSwirl />


                    <p>
                      {property}
                    </p>

                  </div>

                )
              )}

            </div>

          </section>


          {/* =====================================
              POPUP NAVIGATION
          ====================================== */}

          <footer className="potion-modal__navigation">

            <button
              type="button"
              onClick={onPrevious}
            >

              <FiArrowLeft />

              <span>
                Previous Brew
              </span>

            </button>


            <div className="potion-modal__progress">

              <strong>
                {String(
                  index + 1
                ).padStart(
                  2,
                  "0"
                )}
              </strong>

              <i />

              <span>
                {String(
                  potionData.length
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
                Next Brew
              </span>

              <FiArrowRight />

            </button>

          </footer>

        </div>

      </article>

    </div>,

    document.body
  );
}


/* =========================================================
   MAIN PAGE
========================================================= */

function Potions() {

  const [
    activeCategory,
    setActiveCategory,
  ] = useState("all");


  const [
    selectedPotion,
    setSelectedPotion,
  ] = useState(null);


  const [
    searchOpen,
    setSearchOpen,
  ] = useState(false);


  const [
    searchTerm,
    setSearchTerm,
  ] = useState("");


  const archiveRef =
    useRef(null);


  /* =======================================================
     CATEGORY POTIONS
  ======================================================= */

  const categoryPotions =
    useMemo(() => {

      if (
        activeCategory ===
        "all"
      ) {
        return potionData;
      }


      return potionData.filter(
        (potion) =>
          potion.category ===
          activeCategory
      );

    }, [activeCategory]);


  /* =======================================================
     SEARCH FILTER
  ======================================================= */

  const filteredPotions =
    useMemo(() => {

      const query =
        searchTerm
          .trim()
          .toLowerCase();


      if (!query) {
        return potionData;
      }


      return potionData.filter(
        (potion) => {

          const searchableText = [
            potion.name,
            potion.alias,
            potion.classification,
            potion.category,
            potion.effect,
            potion.appearance,
            potion.difficulty,
          ]
            .join(" ")
            .toLowerCase();


          return searchableText.includes(
            query
          );

        }
      );

    }, [searchTerm]);


  /* =======================================================
     DARK POTIONS
  ======================================================= */

  const darkPotions =
    useMemo(
      () =>
        potionData.filter(
          (potion) =>
            darkPotionIds.includes(
              potion.id
            )
        ),
      []
    );


  /* =======================================================
     SELECTED INDEX
  ======================================================= */

  const selectedIndex =
    selectedPotion
      ? potionData.findIndex(
          (potion) =>
            potion.id ===
            selectedPotion.id
        )
      : -1;


  /* =======================================================
     OPEN
  ======================================================= */

  const openPotion =
    useCallback(
      (potion) => {
        setSelectedPotion(
          potion
        );
      },
      []
    );


  /* =======================================================
     CLOSE
  ======================================================= */

  const closePotion =
    useCallback(
      () => {
        setSelectedPotion(
          null
        );
      },
      []
    );


  /* =======================================================
     PREVIOUS
  ======================================================= */

  const openPrevious =
    useCallback(
      () => {

        if (
          selectedIndex < 0
        ) {
          return;
        }


        const previousIndex =
          selectedIndex === 0
            ? potionData.length - 1
            : selectedIndex - 1;


        setSelectedPotion(
          potionData[
            previousIndex
          ]
        );

      },
      [selectedIndex]
    );


  /* =======================================================
     NEXT
  ======================================================= */

  const openNext =
    useCallback(
      () => {

        if (
          selectedIndex < 0
        ) {
          return;
        }


        const nextIndex =
          selectedIndex ===
          potionData.length - 1
            ? 0
            : selectedIndex + 1;


        setSelectedPotion(
          potionData[
            nextIndex
          ]
        );

      },
      [selectedIndex]
    );


  /* =======================================================
     SCROLL TO ARCHIVE
  ======================================================= */

  const scrollToArchive =
    () => {

      archiveRef.current
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

    };


  /* =======================================================
     CATEGORY SELECT
  ======================================================= */

  const selectCategory =
    (categoryId) => {

      setActiveCategory(
        categoryId
      );

    };


  /* =======================================================
     MAIN RETURN
  ======================================================= */

  return (

    <main className="alchemy-vault">

      <MagicalBackground />


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="alchemy-hero">

        <img
          src="/images/potions/hero/potions-dungeon.png"
          alt=""
          className="alchemy-hero__background"
        />


        <div className="alchemy-hero__veil" />


        <div className="alchemy-hero__mist alchemy-hero__mist--one" />

        <div className="alchemy-hero__mist alchemy-hero__mist--two" />


        <div className="alchemy-hero__content">


          <div className="alchemy-hero__seal">

            <span />

            <GiPotionBall />

            <span />

          </div>


          <p className="alchemy-kicker">
            Hogwarts Alchemical Archive
          </p>


          <h1>

            POTIONS

            <span>
              The Alchemist&apos;s Vault
            </span>

          </h1>


          <p className="alchemy-hero__description">

            Remedies, transformations,
            poisons and impossible brews —
            bottled magic rewards precision
            and punishes carelessness.

          </p>


          <div className="alchemy-hero__stats">

            <div>

              <strong>
                {potionData.length}
              </strong>

              <span>
                Recorded Brews
              </span>

            </div>


            <i />


            <div>

              <strong>
                {categories.length - 1}
              </strong>

              <span>
                Disciplines
              </span>

            </div>


            <i />


            <div>

              <strong>
                {darkPotions.length}
              </strong>

              <span>
                Restricted
              </span>

            </div>

          </div>


          <button
            type="button"
            className="alchemy-enter"
            onClick={scrollToArchive}
          >

            <span>
              Enter the Dungeon
            </span>

            <FiArrowDown />

          </button>

        </div>


        <p className="alchemy-hero__note">

          HOGWARTS · DUNGEON LEVEL ·
          APOTHECARY ARCHIVE

        </p>

      </section>


      {/* ===================================================
          APOTHECARY
      =================================================== */}

      <section
        className="apothecary"
        ref={archiveRef}
      >

        <img
          src="/images/potions/hero/apothecary-shelves.png"
          alt=""
          className="apothecary__background"
        />


        <div className="apothecary__veil" />


        <div className="apothecary__inner">


          <header className="alchemy-heading">

            <p>
              01 · APOTHECARY SHELVES
            </p>


            <h2>

              Choose a{" "}

              <span>
                Discipline
              </span>

            </h2>


            <small>

              Every shelf contains a
              different branch of potion
              making.

            </small>

          </header>


          <div className="apothecary__shelves">

            {categories.map(
              (category) => {

                const Icon =
                  category.icon;


                const count =
                  category.id ===
                  "all"
                    ? potionData.length
                    : potionData.filter(
                        (potion) =>
                          potion.category ===
                          category.id
                      ).length;


                return (

                  <button
                    key={
                      category.id
                    }
                    type="button"
                    className={`apothecary-shelf apothecary-shelf--${category.id} ${
                      activeCategory ===
                      category.id
                        ? "apothecary-shelf--active"
                        : ""
                    }`}
                    onClick={() =>
                      selectCategory(
                        category.id
                      )
                    }
                  >

                    <span className="apothecary-shelf__number">

                      {String(
                        count
                      ).padStart(
                        2,
                        "0"
                      )}

                    </span>


                    <div className="apothecary-shelf__icon">

                      <Icon />

                    </div>


                    <div>

                      <small>
                        {category.short}
                      </small>

                      <strong>
                        {category.label}
                      </strong>

                    </div>


                    <FiArrowRight />

                  </button>

                );

              }
            )}

          </div>

        </div>

      </section>


      {/* ===================================================
          BREWING TABLE
      =================================================== */}

      <section className="brewing-table">

        <img
          src="/images/potions/hero/brewing-table.png"
          alt=""
          className="brewing-table__background"
        />


        <div className="brewing-table__veil" />


        <div className="brewing-table__inner">


          <header className="alchemy-heading alchemy-heading--left">

            <p>
              02 · BREWING TABLE
            </p>


            <h2>

              Bottled{" "}

              <span>
                Magic
              </span>

            </h2>


            <small>

              Select a vessel to examine
              its alchemical record.

            </small>

          </header>


          <div className="brewing-table__category">

            <strong>

              {
                categories.find(
                  (category) =>
                    category.id ===
                    activeCategory
                )?.label
              }

            </strong>


            <span>

              {String(
                categoryPotions.length
              ).padStart(
                2,
                "0"
              )}{" "}
              RECORDS

            </span>

          </div>


          <div className="potion-shelf-grid">

            {categoryPotions.map(
              (potion) => (

                <button
                  type="button"
                  key={potion.id}
                  className={`potion-vessel potion-vessel--${potion.color}`}
                  onClick={() =>
                    openPotion(
                      potion
                    )
                  }
                >

                  <span className="potion-vessel__record">
                    {potion.number}
                  </span>


                  <div className="potion-vessel__halo" />


                  <div className="potion-vessel__image">

                    <img
                      src={potion.image}
                      alt={potion.name}
                    />

                  </div>


                  <div className="potion-vessel__base">

                    <small>
                      {
                        potion.classification
                      }
                    </small>

                    <strong>
                      {potion.name}
                    </strong>

                    <span>
                      {potion.alias}
                    </span>

                  </div>


                  <div className="potion-vessel__inspect">

                    <span>
                      Examine Brew
                    </span>

                    <FiArrowRight />

                  </div>

                </button>

              )
            )}

          </div>

        </div>

      </section>


      {/* ===================================================
          RESTRICTED CAULDRON
      =================================================== */}

      <section className="restricted-cauldron">

        <div className="restricted-cauldron__mist" />


        <header className="restricted-heading">


          <div>
            <GiSkullCrossedBones />
          </div>


          <p>
            03 · RESTRICTED CAULDRON
          </p>


          <h2>

            Dangerous

            <span>
              Mixtures
            </span>

          </h2>


          <small>

            Restricted records concerning
            brews associated with extreme
            transformation, suffering or
            dark magic.

          </small>

        </header>


        <div className="restricted-grid">

          {darkPotions.map(
            (
              potion,
              index
            ) => (

              <button
                key={potion.id}
                type="button"
                className={`restricted-potion restricted-potion--${potion.color}`}
                onClick={() =>
                  openPotion(
                    potion
                  )
                }
              >

                <span className="restricted-potion__index">

                  {String(
                    index + 1
                  ).padStart(
                    2,
                    "0"
                  )}

                </span>


                <div className="restricted-potion__visual">

                  <span />

                  <img
                    src={potion.image}
                    alt={potion.name}
                  />

                </div>


                <div className="restricted-potion__copy">

                  <small>
                    {
                      potion.classification
                    }
                  </small>


                  <h3>
                    {potion.name}
                  </h3>


                  <p>
                    {potion.tagline}
                  </p>


                  <span>
                    OPEN RESTRICTED RECORD
                  </span>

                </div>

              </button>

            )
          )}

        </div>

      </section>


      {/* ===================================================
          MASTER LEDGER
      =================================================== */}

      <section className="potion-index">

        <div className="potion-index__inner">


          <header className="potion-index__heading">

            <div>

              <p>
                04 · MASTER LEDGER
              </p>


              <h2>

                Complete{" "}

                <span>
                  Potion Index
                </span>

              </h2>

            </div>


            {/* =================================
                VALID SEARCH CONTAINER
            ================================== */}

            <div
              className={`potion-search ${
                searchOpen
                  ? "potion-search--open"
                  : ""
              }`}
            >

              <button
                type="button"
                className="potion-search__trigger"
                onClick={() =>
                  setSearchOpen(
                    true
                  )
                }
                aria-label="Open potion search"
              >
                <FiSearch />
              </button>


              {searchOpen ? (

                <input
                  autoFocus
                  type="text"
                  value={searchTerm}
                  onChange={
                    (event) =>
                      setSearchTerm(
                        event.target
                          .value
                      )
                  }
                  placeholder="Search potion archive..."
                />

              ) : (

                <button
                  type="button"
                  className="potion-search__label"
                  onClick={() =>
                    setSearchOpen(
                      true
                    )
                  }
                >
                  Search Archive
                </button>

              )}


              {searchOpen && (

                <button
                  type="button"
                  className="potion-search__close"
                  aria-label="Close search"
                  onClick={() => {

                    setSearchOpen(
                      false
                    );

                    setSearchTerm(
                      ""
                    );

                  }}
                >
                  <FiX />
                </button>

              )}

            </div>

          </header>


          <div className="potion-index__labels">

            <span>
              Record
            </span>

            <span>
              Potion
            </span>

            <span>
              Classification
            </span>

            <span>
              Discipline
            </span>

            <span />

          </div>


          <div className="potion-index__records">

            {filteredPotions.map(
              (potion) => (

                <button
                  type="button"
                  key={potion.id}
                  className={`potion-index__record potion-index__record--${potion.color}`}
                  onClick={() =>
                    openPotion(
                      potion
                    )
                  }
                >

                  <span>
                    {potion.number}
                  </span>


                  <strong>

                    {potion.name}

                    <small>
                      {potion.alias}
                    </small>

                  </strong>


                  <span>
                    {
                      potion.classification
                    }
                  </span>


                  <span>

                    {
                      categories.find(
                        (category) =>
                          category.id ===
                          potion.category
                      )?.label
                    }

                  </span>


                  <FiArrowRight />

                </button>

              )
            )}

          </div>


          {filteredPotions.length ===
            0 && (

            <div className="potion-index__empty">

              <GiCrystalBall />

              <strong>
                No potion record found
              </strong>

              <span>
                Try another name or
                classification.
              </span>

            </div>

          )}


          <footer className="potion-index__footer">

            <span>
              HOGWARTS ALCHEMICAL ARCHIVE
            </span>

            <i />

            <span>
              {potionData.length} RECORDS
            </span>

          </footer>

        </div>

      </section>


      {/* ===================================================
          PORTAL POPUP
      =================================================== */}

      {selectedPotion && (

        <PotionRecordPopup
          potion={
            selectedPotion
          }
          index={
            selectedIndex
          }
          onClose={
            closePotion
          }
          onPrevious={
            openPrevious
          }
          onNext={
            openNext
          }
        />

      )}

    </main>

  );
}


export default Potions;