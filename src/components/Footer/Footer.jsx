import "./Footer.css";

import {
  FiGithub,
  FiLinkedin,
  FiGlobe,
  FiArrowUpRight,
} from "react-icons/fi";

import { Link } from "react-router-dom";


function Footer() {
  const year =
    new Date().getFullYear();


  return (
    <footer className="site-footer">

      {/* ========================================
          TOP LINE
      ======================================== */}

      <div className="site-footer__line" />


      {/* ========================================
          MAIN FOOTER
      ======================================== */}

      <div className="site-footer__inner">


        {/* ========================================
            BRAND
        ======================================== */}

        <div className="site-footer__brand">

          <p className="site-footer__eyebrow">
            THE WIZARDING ARCHIVE
          </p>


          <h2 className="site-footer__title">

            Every Story

            <span>
              Leaves Something Behind.
            </span>

          </h2>


          <p className="site-footer__description">
            An immersive fan-made encyclopedia
            exploring stories, characters,
            Hogwarts, houses, spells, potions,
            creatures, magical artifacts,
            places and dark wizarding history.
          </p>


          {/* ========================================
              SOCIAL ICONS
          ======================================== */}

          <div className="site-footer__socials">


            {/* GITHUB */}

            <a
              href="https://github.com/Siva-jerry"
              target="_blank"
              rel="noreferrer"
              className="site-footer__social"
              aria-label="GitHub"
            >
              <FiGithub />

              <span>
                GitHub
              </span>
            </a>


            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/siva-m-823698357?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className="site-footer__social"
              aria-label="LinkedIn"
            >
              <FiLinkedin />

              <span>
                LinkedIn
              </span>
            </a>


            {/* PORTFOLIO */}

            <a
              href="https://siva-jerry.github.io/my-portfolio/"
              target="_blank"
              rel="noreferrer"
              className="site-footer__social"
              aria-label="Portfolio"
            >
              <FiGlobe />

              <span>
                Portfolio
              </span>
            </a>

          </div>

        </div>


        {/* ========================================
            NAVIGATION AREA
        ======================================== */}

        <div className="site-footer__navigation">


          {/* ========================================
              EXPLORE
          ======================================== */}

          <nav
            className="site-footer__nav-group"
            aria-label="Explore"
          >

            <small>
              EXPLORE
            </small>


            <Link to="/hogwarts">
              Hogwarts
            </Link>


            <Link to="/houses">
              Houses
            </Link>


            <Link to="/characters">
              Characters
            </Link>


            <Link to="/stories">
              Stories
            </Link>


            <Link to="/places">
              Places
            </Link>

          </nav>


          {/* ========================================
              MAGICAL ARCHIVE
          ======================================== */}

          <nav
            className="site-footer__nav-group"
            aria-label="Magical Archive"
          >

            <small>
              MAGICAL ARCHIVE
            </small>


            <Link to="/spells">
              Spells
            </Link>


            <Link to="/potions">
              Potions
            </Link>


            <Link to="/creatures">
              Creatures
            </Link>


            <Link to="/artifacts">
              Artifacts
            </Link>


            <Link to="/dark-arts">
              Dark Arts
            </Link>

          </nav>


          {/* ========================================
              MASTER ARCHIVE
          ======================================== */}

          <nav
            className="site-footer__nav-group"
            aria-label="Master Archive"
          >

            <small>
              MASTER ARCHIVE
            </small>


            <Link to="/encyclopedia">
              Encyclopedia
            </Link>


            <Link to="/timeline">
              Timeline
            </Link>


            <Link to="/stories">
              Story Archive
            </Link>

          </nav>


          {/* ========================================
              CONNECT
          ======================================== */}

          <div className="site-footer__nav-group">

            <small>
              CONNECT
            </small>


            <a
              href="https://github.com/Siva-jerry"
              target="_blank"
              rel="noreferrer"
            >
              GitHub

              <FiArrowUpRight />
            </a>


            <a
              href="https://www.linkedin.com/in/siva-m-823698357?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn

              <FiArrowUpRight />
            </a>


            <a
              href="https://siva-jerry.github.io/my-portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio

              <FiArrowUpRight />
            </a>

          </div>

        </div>

      </div>


      {/* ========================================
          LOWER AREA
      ======================================== */}

      <div className="site-footer__bottom">


        {/* LEFT */}

        <p>
          © {year} The Wizarding Archive
        </p>


        {/* CENTER */}

        <div className="site-footer__signature">

          <span>
            Designed &amp; Developed by
          </span>

          <strong>
            Siva
          </strong>

        </div>


        {/* RIGHT */}

        <p>
          Unofficial fan encyclopedia experience.
        </p>

      </div>

    </footer>
  );
}


export default Footer;