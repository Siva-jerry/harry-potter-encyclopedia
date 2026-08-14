import "./HouseLegacies.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { Link } from "react-router-dom";

import {
  FiArrowUpRight,
} from "react-icons/fi";


const houses = [
  {
    id: "gryffindor",
    name: "Gryffindor",
    virtue: "Courage",
    description:
      "Bravery, nerve and daring have shaped generations of Gryffindors.",
    image:
      "/images/home/houses/gryffindor.jpg",
    link:
      "/houses/gryffindor",
  },

  {
    id: "slytherin",
    name: "Slytherin",
    virtue: "Ambition",
    description:
      "Resourcefulness, determination and ambition define the house of the serpent.",
    image:
      "/images/home/houses/slytherin.jpg",
    link:
      "/houses/slytherin",
  },

  {
    id: "ravenclaw",
    name: "Ravenclaw",
    virtue: "Wisdom",
    description:
      "Intelligence, curiosity and originality guide those chosen by Ravenclaw.",
    image:
      "/images/home/houses/ravenclaw.jpg",
    link:
      "/houses/ravenclaw",
  },

  {
    id: "hufflepuff",
    name: "Hufflepuff",
    virtue: "Loyalty",
    description:
      "Patience, loyalty and hard work stand at the heart of Hufflepuff.",
    image:
      "/images/home/houses/hufflepuff.jpg",
    link:
      "/houses/hufflepuff",
  },
];


function HouseLegacies() {
  const sectionRef =
    useRef(null);

  const [visible, setVisible] =
    useState(false);

  const [activeHouse, setActiveHouse] =
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
          ? "house-legacies house-legacies--visible"
          : "house-legacies"
      }
    >

      {/* ========================================
          INTRO
      ======================================== */}

      <div className="house-legacies__intro">

        <p className="house-legacies__eyebrow">
          FOUR HOUSES · ONE SCHOOL
        </p>


        <h2 className="house-legacies__title">
          Four Houses.

          <span>
            Four Legacies.
          </span>
        </h2>


        <p className="house-legacies__description">
          Every student belongs somewhere.
          Each house carries its own values,
          rivalries, history and legacy through
          the halls of Hogwarts.
        </p>

      </div>


      {/* ========================================
          HOUSE CHAMBER
      ======================================== */}

      <div
        className={
          activeHouse
            ? `house-legacies__chamber house-legacies__chamber--${activeHouse}`
            : "house-legacies__chamber"
        }
      >

        <div className="house-legacies__center-sigil">

          <span>
            H
          </span>

          <small>
            HOGWARTS
          </small>

        </div>


        {houses.map((house) => {

          const active =
            activeHouse === house.id;


          return (
            <article
              key={house.id}
              className={`
                house-legacies__house
                house-legacies__house--${house.id}
                ${
                  active
                    ? "house-legacies__house--active"
                    : ""
                }
              `}
              onMouseEnter={() =>
                setActiveHouse(house.id)
              }
              onMouseLeave={() =>
                setActiveHouse(null)
              }
            >

              <button
                type="button"
                className="house-legacies__panel"
                onClick={() =>
                  setActiveHouse(
                    active
                      ? null
                      : house.id
                  )
                }
                aria-label={`Reveal ${house.name}`}
              >

                <img
                  src={house.image}
                  alt={house.name}
                  className="house-legacies__image"
                />


                <div className="house-legacies__shade" />


                <div className="house-legacies__house-name">

                  <small>
                    {house.virtue}
                  </small>

                  <h3>
                    {house.name}
                  </h3>

                </div>

              </button>


              <div className="house-legacies__details">

                <span className="house-legacies__details-line" />

                <small>
                  HOUSE LEGACY
                </small>

                <h3>
                  {house.name}
                </h3>

                <strong>
                  {house.virtue}
                </strong>

                <p>
                  {house.description}
                </p>

                <Link
                  to={house.link}
                  className="house-legacies__link"
                >
                  Enter house

                  <FiArrowUpRight />
                </Link>

              </div>

            </article>
          );
        })}

      </div>


      {/* ========================================
          FOOTER
      ======================================== */}

      <div className="house-legacies__footer">

        <span />

        <p>
          The Sorting Hat sees
          what others cannot.
        </p>

        <span />

      </div>

    </section>
  );
}


export default HouseLegacies;