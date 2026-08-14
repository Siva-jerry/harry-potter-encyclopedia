import "./Home.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { Link } from "react-router-dom";
import { FiArrowDown } from "react-icons/fi";

import MagicalBackground from "../../components/MagicalBackground/MagicalBackground";
import HogwartsExplore from "../../components/HogwartsExplore/HogwartsExplore";
import CharacterGallery from "../../components/CharacterGallery/CharacterGallery";
import SpellManuscript from "../../components/SpellManuscript/SpellManuscript";
import HouseLegacies from "../../components/HouseLegacies/HouseLegacies";
import ForbiddenArchive from "../../components/ForbiddenArchive/ForbiddenArchive";
import MagicalCuriosities from "../../components/MagicalCuriosities/MagicalCuriosities";
import CreatureBestiary from "../../components/CreatureBestiary/CreatureBestiary";
import WizardingTimeline from "../../components/WizardingTimeline/WizardingTimeline";
import ArchiveGateway from "../../components/ArchiveGateway/ArchiveGateway";
import Footer from "../../components/Footer/Footer";
import MediaControls from "../../components/MediaControls/MediaControls";


function Home() {
  const storySectionRef = useRef(null);

  const [storyVisible, setStoryVisible] = useState(false);

  useEffect(() => {
    const section = storySectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStoryVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToContent = () => {
    document
      .getElementById("home-content")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
  <main className="home-page">

    {/* ========================================
        FIXED VIDEO + MUSIC CONTROLS
    ======================================== */}

    <MediaControls />


    {/* ========================================
        HERO — MAGICAL ARRIVAL
    ======================================== */}

    <section className="home-arrival">

        {/* Background Video */}

        <video
          className="home-arrival__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="/videos/home/hogwarts-intro.mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>


        {/* Cinematic Overlays */}

        <div className="home-arrival__darkness" />

        <div className="home-arrival__mist" />

        <div className="home-arrival__vignette" />


        {/* ========================================
            HERO CONTENT
        ======================================== */}

        <div className="home-arrival__content">

          <p className="home-arrival__eyebrow">
            THE WIZARDING ARCHIVE
          </p>


          <h1 className="home-arrival__title">
            Every Story

            <span>
              Leaves a Trace of Magic
            </span>
          </h1>


          <p className="home-arrival__description">
            Beyond these walls lie stories,
            secrets, spells, friendships and
            mysteries from generations of
            witches and wizards.
          </p>


          {/* Hero Actions */}

          <div className="home-arrival__actions">

            <Link
              to="/hogwarts"
              className="home-arrival__enter"
            >
              <span>
                Enter Hogwarts
              </span>

              <div className="home-arrival__wand-light" />
            </Link>


            <Link
              to="/stories"
              className="home-arrival__explore"
            >
              Explore the Stories
            </Link>

          </div>

        </div>


        {/* ========================================
            SCROLL INDICATOR
        ======================================== */}

        <button
          className="home-arrival__scroll"
          onClick={scrollToContent}
          aria-label="Continue exploring"
        >
          <span>
            Begin your journey
          </span>

          <FiArrowDown />
        </button>

      </section>


      {/* ========================================
          MAGICAL WORLD
          Starts AFTER Hero
      ======================================== */}

      <div
        className="home-magical-world"
        id="home-content"
      >

        {/* Shared Background For All
            Sections After Hero */}

        <MagicalBackground />


        {/* ========================================
            SECTION 2
            A WORLD WRITTEN IN MAGIC
        ======================================== */}

        <section
          ref={storySectionRef}
          className={
            storyVisible
              ? "world-story world-story--visible"
              : "world-story"
          }
        >

          {/* ========================================
              SECTION INTRO
          ======================================== */}

          <div className="world-story__top">

            <p className="world-story__eyebrow">
              BEYOND THE CASTLE WALLS
            </p>


            <h2 className="world-story__title">
              A World

              <span>
                Written in Magic.
              </span>
            </h2>


            <div className="world-story__typewriter">

              <span>
                Every chapter leaves something behind.
              </span>

            </div>

          </div>


          {/* ========================================
              MAGICAL JOURNEY
          ======================================== */}

          <div className="world-story__journey">


            {/* ========================================
                CENTER MAGICAL THREAD
            ======================================== */}

            <div className="world-story__thread">

              <span className="world-story__thread-light" />


              <i className="world-story__node node-one">
                ✦
              </i>


              <i className="world-story__node node-two">
                ✦
              </i>


              <i className="world-story__node node-three">
                ✦
              </i>

            </div>


            {/* ========================================
                LEFT — 1991
            ======================================== */}

            <article className="world-fragment fragment-1991">

              <small>
                THE BEGINNING
              </small>


              <strong>
                1991
              </strong>


              <p>
                A young wizard steps into a world
                that has been waiting for him.
              </p>

            </article>


            {/* ========================================
                RIGHT — HOUSES
            ======================================== */}

            <article className="world-fragment fragment-houses">

              <small>
                HOGWARTS
              </small>


              <strong>
                Four Houses
              </strong>


              <p>
                Different values. Different histories.
                One ancient school.
              </p>

            </article>


            {/* ========================================
                LEFT — JOURNEY
            ======================================== */}

            <article className="world-fragment fragment-years">

              <small>
                THE JOURNEY
              </small>


              <strong>
                Seven Years
              </strong>


              <p>
                Friendship, discovery and danger
                reshape an entire generation.
              </p>

            </article>


            {/* ========================================
                RIGHT — SECRETS
            ======================================== */}

            <article className="world-fragment fragment-secrets">

              <small>
                THE UNKNOWN
              </small>


              <strong>
                Countless Secrets
              </strong>


              <p>
                Hidden chambers, forbidden knowledge
                and stories beneath stories.
              </p>

            </article>

          </div>


          {/* ========================================
              SECTION CLOSING
          ======================================== */}

          <div className="world-story__closing">

            <span className="world-story__closing-mark">
              ✦
            </span>


            <p>
              Some stories are discovered.

              <em>
                Others choose their reader.
              </em>
            </p>

          </div>

        </section>


        {/* ========================================
    SECTION 3
    HOGWARTS EXPLORATION
======================================== */}

<HogwartsExplore />
<CharacterGallery />

<SpellManuscript />
<HouseLegacies />
<ForbiddenArchive />
<MagicalCuriosities />
<CreatureBestiary />
<WizardingTimeline />
<ArchiveGateway />
<Footer />


        {/* ========================================
            FUTURE SECTION 4
        ======================================== */}

        {/*
        <section className="home-section">

          Section 4 will go here.

        </section>
        */}

      </div>

    </main>
  );
}

export default Home;