import "./CharacterGallery.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";


const characters = [
  {
    id: "harry-potter",
    name: "Harry Potter",
    role: "The Boy Who Lived",
    house: "Gryffindor",
    image:
      "/images/home/characters/harry.jpg",
    link:
      "/characters/harry-potter",
    className:
      "character-gallery__portrait--harry",
  },

  {
    id: "hermione-granger",
    name: "Hermione Granger",
    role: "The Brilliant Mind",
    house: "Gryffindor",
    image:
      "/images/home/characters/hermione.jpg",
    link:
      "/characters/hermione-granger",
    className:
      "character-gallery__portrait--hermione",
  },

  {
    id: "ron-weasley",
    name: "Ron Weasley",
    role: "The Loyal Friend",
    house: "Gryffindor",
    image:
      "/images/home/characters/ron.jpg",
    link:
      "/characters/ron-weasley",
    className:
      "character-gallery__portrait--ron",
  },

  {
    id: "albus-dumbledore",
    name: "Albus Dumbledore",
    role: "The Headmaster",
    house: "Hogwarts",
    image:
      "/images/home/characters/dumbledore.jpg",
    link:
      "/characters/albus-dumbledore",
    className:
      "character-gallery__portrait--dumbledore",
  },

  {
    id: "severus-snape",
    name: "Severus Snape",
    role: "The Enigma",
    house: "Slytherin",
    image:
      "/images/home/characters/snape.jpg",
    link:
      "/characters/severus-snape",
    className:
      "character-gallery__portrait--snape",
  },

  {
    id: "sirius-black",
    name: "Sirius Black",
    role: "The Godfather",
    house: "Gryffindor",
    image:
      "/images/home/characters/sirius.jpg",
    link:
      "/characters/sirius-black",
    className:
      "character-gallery__portrait--sirius",
  },
];


function CharacterGallery() {
  const sectionRef =
    useRef(null);

  const [visible, setVisible] =
    useState(false);

  const [activeCharacter, setActiveCharacter] =
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
          threshold: 0.16,
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
          ? "character-gallery character-gallery--visible"
          : "character-gallery"
      }
    >

      {/* ========================================
          INTRO
      ======================================== */}

      <div className="character-gallery__intro">

        <p className="character-gallery__eyebrow">
          WITCHES, WIZARDS & LEGACIES
        </p>


        <h2 className="character-gallery__title">
          The People Who

          <span>
            Shaped the Story.
          </span>
        </h2>


        <p className="character-gallery__description">
          Some changed the world through courage.
          Others through loyalty, sacrifice,
          knowledge or choices that were far
          more complicated.
        </p>

      </div>


      {/* ========================================
          LIVING PORTRAIT WALL
      ======================================== */}

      <div className="character-gallery__wall">

        <div className="character-gallery__wall-glow" />


        {characters.map((character) => {

          const active =
            activeCharacter ===
            character.id;


          return (
            <Link
              key={character.id}
              to={character.link}
              className={`
                character-gallery__portrait
                ${character.className}
                ${
                  active
                    ? "character-gallery__portrait--active"
                    : ""
                }
              `}
              onMouseEnter={() =>
                setActiveCharacter(
                  character.id
                )
              }
              onMouseLeave={() =>
                setActiveCharacter(null)
              }
            >

              {/* Frame */}

              <div className="character-gallery__frame">

                <div className="character-gallery__frame-inner">

                  <img
                    src={character.image}
                    alt={character.name}
                    className="character-gallery__image"
                  />

                  <div className="character-gallery__image-shadow" />

                  <div className="character-gallery__portrait-light" />

                </div>

              </div>


              {/* Information */}

              <div className="character-gallery__info">

                <small>
                  {character.house}
                </small>


                <h3>
                  {character.name}
                </h3>


                <p>
                  {character.role}
                </p>


                <span>
                  Discover

                  <FiArrowUpRight />
                </span>

              </div>

            </Link>
          );
        })}

      </div>


      {/* ========================================
          FOOTNOTE
      ======================================== */}

      <div className="character-gallery__footer">

        <span className="character-gallery__footer-line" />

        <p>
          Every portrait remembers
          a different version of the story.
        </p>

        <span className="character-gallery__footer-line" />

      </div>

    </section>
  );
}


export default CharacterGallery;