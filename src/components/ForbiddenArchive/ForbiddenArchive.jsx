import "./ForbiddenArchive.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const records = [
  {
    id: "voldemort",
    number: "01",
    eyebrow: "THE DARK LORD",
    title: "Lord Voldemort",
    description:
      "The darkest wizard of his age, whose pursuit of immortality reshaped the Wizarding World.",
    link: "/characters/lord-voldemort",
  },

  {
    id: "horcruxes",
    number: "02",
    eyebrow: "FORBIDDEN KNOWLEDGE",
    title: "Horcruxes",
    description:
      "Objects created through forbidden magic to conceal fragments of a divided soul.",
    link: "/dark-arts/horcruxes",
  },

  {
    id: "death-eaters",
    number: "03",
    eyebrow: "FOLLOWERS",
    title: "Death Eaters",
    description:
      "Dark witches and wizards who pledged themselves to Voldemort and his cause.",
    link: "/dark-arts/death-eaters",
  },

  {
    id: "unforgivable-curses",
    number: "04",
    eyebrow: "PROHIBITED MAGIC",
    title: "Unforgivable Curses",
    description:
      "Three curses whose use carries the most severe consequences in wizarding law.",
    link: "/spells/unforgivable-curses",
  },
];

function ForbiddenArchive() {
  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [activeRecord, setActiveRecord] =
    useState(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const toggleRecord = (id) => {
    setActiveRecord((current) =>
      current === id ? null : id
    );
  };

  return (
    <section
      ref={sectionRef}
      className={
        visible
          ? "forbidden-archive forbidden-archive--visible"
          : "forbidden-archive"
      }
    >
      {/* =====================================
          ATMOSPHERE
      ====================================== */}

      <div
        className="forbidden-archive__atmosphere"
        aria-hidden="true"
      >
        <div className="forbidden-archive__ambient" />

        {/* Local smoke video */}
        <video
          className="forbidden-archive__smoke-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="/videos/home/smoke.mp4"
            type="video/mp4"
          />

          <source
            src="https://firebasestorage.googleapis.com/v0/b/library-jp-d4a7e.firebasestorage.app/o/dark-smoke.mp4?alt=media&token=af2279a2-426d-46cf-a87f-21adc94e1a30"
            type="video/mp4"
          />
        </video>

        <div className="forbidden-archive__smoke-mask" />

        <div className="forbidden-archive__grain" />
      </div>


      {/* =====================================
          INTRO
      ====================================== */}

      <header className="forbidden-archive__intro">

        <p className="forbidden-archive__eyebrow">
          RESTRICTED KNOWLEDGE · DARK ARTS
        </p>

        <h2 className="forbidden-archive__title">
          Some Knowledge
          <span>
            Was Never Meant to Be Found.
          </span>
        </h2>

        <p className="forbidden-archive__description">
          Beyond the safer shelves of the archive
          lie names, objects and spells that changed
          the Wizarding World forever.
        </p>

      </header>


      {/* =====================================
          ARCHIVE EXPERIENCE
      ====================================== */}

      <div className="forbidden-archive__experience">

        {/* LEFT RECORDS */}

        <div className="forbidden-archive__column forbidden-archive__column--left">

          {records
            .filter(
              (record) =>
                record.id === "voldemort" ||
                record.id === "death-eaters"
            )
            .map((record) => (
              <ArchiveRecord
                key={record.id}
                record={record}
                active={
                  activeRecord === record.id
                }
                onToggle={() =>
                  toggleRecord(record.id)
                }
              />
            ))}

        </div>


        {/* =====================================
            CENTRAL ARCHIVE
        ====================================== */}

        <div className="forbidden-archive__center">

          <div className="forbidden-archive__image-shell">

            <div className="forbidden-archive__image-glow" />

            <img
              src="/images/home/dark/dark-archive.png"
              alt="A forbidden magical archive"
              className="forbidden-archive__image"
            />

            <div className="forbidden-archive__image-shadow" />

            <div className="forbidden-archive__seal">
              <span />
              <p>
                RESTRICTED SECTION
              </p>
              <span />
            </div>

          </div>


          {/* Horcrux decorative object */}

          <img
            src="/images/home/dark/horcrux.png"
            alt=""
            aria-hidden="true"
            className="forbidden-archive__horcrux"
          />


          {/* Mask decorative object */}

          <img
            src="/images/home/dark/death-eater-mask.png"
            alt=""
            aria-hidden="true"
            className="forbidden-archive__mask"
          />

        </div>


        {/* RIGHT RECORDS */}

        <div className="forbidden-archive__column forbidden-archive__column--right">

          {records
            .filter(
              (record) =>
                record.id === "horcruxes" ||
                record.id ===
                  "unforgivable-curses"
            )
            .map((record) => (
              <ArchiveRecord
                key={record.id}
                record={record}
                active={
                  activeRecord === record.id
                }
                onToggle={() =>
                  toggleRecord(record.id)
                }
              />
            ))}

        </div>

      </div>


      {/* =====================================
          FOOTER
      ====================================== */}

      <footer className="forbidden-archive__footer">

        <span />

        <p>
          Some doors should only be opened
          with care.
        </p>

        <span />

      </footer>

    </section>
  );
}


/* =========================================
   RECORD COMPONENT
========================================= */

function ArchiveRecord({
  record,
  active,
  onToggle,
}) {
  return (
    <article
      className={
        active
          ? "forbidden-record forbidden-record--active"
          : "forbidden-record"
      }
    >

      <button
        type="button"
        className="forbidden-record__trigger"
        onClick={onToggle}
      >

        <span className="forbidden-record__number">
          {record.number}
        </span>

        <span className="forbidden-record__heading">

          <small>
            {record.eyebrow}
          </small>

          <strong>
            {record.title}
          </strong>

        </span>

      </button>


      <div className="forbidden-record__content">

        <p>
          {record.description}
        </p>

        <Link
          to={record.link}
          className="forbidden-record__link"
        >
          Open record
          <FiArrowUpRight />
        </Link>

      </div>

    </article>
  );
}

export default ForbiddenArchive;