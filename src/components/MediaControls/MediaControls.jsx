import "./MediaControls.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  FiPlay,
  FiVolume2,
  FiVolumeX,
  FiX,
} from "react-icons/fi";


function MediaControls() {
  const audioRef = useRef(null);
  const videoRef = useRef(null);

  const [musicPlaying, setMusicPlaying] =
    useState(false);

  const [videoOpen, setVideoOpen] =
    useState(false);

  const [
    resumeMusicAfterVideo,
    setResumeMusicAfterVideo,
  ] = useState(false);


  /* ========================================
     MUSIC
  ======================================== */

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (musicPlaying) {
        audio.pause();

        setMusicPlaying(false);
      } else {
        await audio.play();

        setMusicPlaying(true);
      }
    } catch (error) {
      console.error(
        "Background music failed:",
        error
      );
    }
  };


  /* ========================================
     OPEN VIDEO
  ======================================== */

  const openVideo = () => {
    const audio = audioRef.current;

    if (
      musicPlaying &&
      audio
    ) {
      setResumeMusicAfterVideo(true);

      audio.pause();

      setMusicPlaying(false);
    } else {
      setResumeMusicAfterVideo(false);
    }

    setVideoOpen(true);
  };


  /* ========================================
     CLOSE VIDEO
  ======================================== */

  const closeVideo = async () => {
    const video = videoRef.current;
    const audio = audioRef.current;

    if (video) {
      video.pause();

      video.currentTime = 0;
    }

    setVideoOpen(false);


    if (
      resumeMusicAfterVideo &&
      audio
    ) {
      try {
        await audio.play();

        setMusicPlaying(true);
      } catch (error) {
        console.error(
          "Music could not resume:",
          error
        );
      }
    }


    setResumeMusicAfterVideo(false);
  };


  /* ========================================
     ESC KEY
  ======================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        event.key === "Escape" &&
        videoOpen
      ) {
        closeVideo();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    videoOpen,
    resumeMusicAfterVideo,
  ]);


  /* ========================================
     LOCK PAGE SCROLL
  ======================================== */

  useEffect(() => {
    if (!videoOpen) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [videoOpen]);


  return (
    <>
      {/* ========================================
          BACKGROUND MUSIC
      ======================================== */}

      <audio
        ref={audioRef}
        src="/media/wizarding-ambience.mp3"
        preload="metadata"
        loop
      />


      {/* ========================================
          TOP RIGHT BUTTONS
      ======================================== */}

      <div className="media-controls-fixed">

        {/* VIDEO */}

        <div className="media-control-wrap">

          <button
            type="button"
            className="media-control-orb"
            onClick={openVideo}
            aria-label="Watch video"
          >
            <FiPlay />
          </button>

          <span className="media-control-tooltip">
            Watch Video
          </span>

        </div>


        {/* MUSIC */}

        <div className="media-control-wrap">

          <button
            type="button"
            className={
              musicPlaying
                ? "media-control-orb media-control-orb--active"
                : "media-control-orb"
            }
            onClick={toggleMusic}
            aria-label={
              musicPlaying
                ? "Pause background music"
                : "Play background music"
            }
          >
            {musicPlaying ? (
              <FiVolume2 />
            ) : (
              <FiVolumeX />
            )}
          </button>

          <span className="media-control-tooltip">
            {musicPlaying
              ? "Pause Music"
              : "Play Music"}
          </span>

        </div>

      </div>


      {/* ========================================
          VIDEO POPUP
      ======================================== */}

      {videoOpen && (
        <div
          className="video-popup"
          role="dialog"
          aria-modal="true"
          aria-label="Wizarding Archive video"
        >

          {/* BACKGROUND */}

          <button
            type="button"
            className="video-popup__backdrop"
            onClick={closeVideo}
            aria-label="Close video"
          />


          {/* CONTENT */}

          <div className="video-popup__content">

            {/* HEADER */}

            <div className="video-popup__header">

              <div className="video-popup__heading">

                <small>
                  THE WIZARDING ARCHIVE
                </small>

                <span>
                  A glimpse beyond the castle walls
                </span>

              </div>


              <button
                type="button"
                className="video-popup__close"
                onClick={closeVideo}
                aria-label="Close video"
              >
                <FiX />
              </button>

            </div>


            {/* VIDEO */}

            <div className="video-popup__frame">

              <video
                ref={videoRef}
                className="video-popup__video"
                autoPlay
                controls
                playsInline
                preload="auto"
              >
                <source
                  src="/media/landing-trailer.mp4"
                  type="video/mp4"
                />

                Your browser does not support video.
              </video>


              <div className="video-popup__inner-border" />

            </div>


            {/* FOOTER NOTE */}

            <div className="video-popup__footer">

              <span />

              <p>
                Use the player controls
                to enter fullscreen
              </p>

              <span />

            </div>

          </div>

        </div>
      )}
    </>
  );
}


export default MediaControls;