import "./ArchiveGateway.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { Link } from "react-router-dom";

import {
  FiArrowUpRight,
} from "react-icons/fi";


function ArchiveGateway() {
  const sectionRef =
    useRef(null);

  const [visible, setVisible] =
    useState(false);


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


    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <section
      ref={sectionRef}
      className={
        visible
          ? "archive-gateway archive-gateway--visible"
          : "archive-gateway"
      }
    >

      {/* ========================================
          INTRO
      ======================================== */}

      <header className="archive-gateway__intro">

        <p className="archive-gateway__eyebrow">
          THE WIZARDING ARCHIVE
        </p>


        <h2 className="archive-gateway__title">

          The Archive

          <span>
            Awaits.
          </span>

        </h2>


        <p className="archive-gateway__description">
          Stories, places, spells, creatures,
          people and memories are waiting
          beyond these doors.
        </p>

      </header>


      {/* ========================================
          CINEMATIC GATEWAY SCENE
      ======================================== */}

      <div className="archive-gateway__scene">

        {/* soft light behind scene */}

        <div className="archive-gateway__scene-glow" />


        {/* main image */}

        <div className="archive-gateway__scene-frame">

          <img
            src="/images/home/finale/archive-gateway-wide.png"
            alt="Entrance to the Wizarding Archive"
            className="archive-gateway__scene-image"
          />


          {/* cinematic overlays */}

          <div className="archive-gateway__scene-darkness" />

          <div className="archive-gateway__scene-vignette" />

          <div className="archive-gateway__scene-bottom-fade" />

        </div>


        {/* subtle magical light */}

        <div className="archive-gateway__light archive-gateway__light--one" />

        <div className="archive-gateway__light archive-gateway__light--two" />

        <div className="archive-gateway__light archive-gateway__light--three" />


        {/* scene caption */}

        <div className="archive-gateway__scene-caption">

          <span />

          <p>
            THE DOORS ARE OPEN
          </p>

          <span />

        </div>

      </div>


      {/* ========================================
          MAIN CTA
      ======================================== */}

      <div className="archive-gateway__actions">

        <Link
          to="/encyclopedia"
          className="archive-gateway__enter"
        >

          <span>
            Enter the Encyclopedia
          </span>

          <FiArrowUpRight />

          <i className="archive-gateway__wand-sweep" />

        </Link>


        <Link
          to="/hogwarts"
          className="archive-gateway__secondary"
        >
          Return to Hogwarts
        </Link>

      </div>


      {/* ========================================
          FINAL QUOTE
      ======================================== */}

      <div className="archive-gateway__closing">

        <span />

        <p>
          Every story leaves
          something behind.
        </p>

        <span />

      </div>


      {/* ========================================
          FOOTER
      ======================================== */}

      <footer className="archive-gateway__footer">

        <p>
          THE WIZARDING ARCHIVE
        </p>


        <div className="archive-gateway__footer-center">

          <span>
            Stories
          </span>

          <i />

          <span>
            Characters
          </span>

          <i />

          <span>
            Magic
          </span>

          <i />

          <span>
            Hogwarts
          </span>

        </div>


        <small>
          An unofficial fan encyclopedia experience.
        </small>

      </footer>

    </section>
  );
}


export default ArchiveGateway;