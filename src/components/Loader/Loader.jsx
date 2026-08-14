import "./Loader.css";

function Loader() {
  return (
    <div className="hp-loader">
      <div className="hp-loader__background" />

      <div className="hp-loader__fog hp-loader__fog--one" />
      <div className="hp-loader__fog hp-loader__fog--two" />

      <div className="hp-loader__stars">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="hp-loader__content">
        <div className="hp-loader__logo-frame">
          <div className="hp-loader__aura" />

          <img
            src="/images/logo/harry-potter-logo.jpg"
            alt="Harry Potter Encyclopedia"
            className="hp-loader__logo"
          />

          <div className="hp-loader__mist" />

          <div className="hp-loader__spell-trace">
            <span className="hp-loader__spell-light" />
          </div>
        </div>

        <div className="hp-loader__message">
          <p className="hp-loader__eyebrow">
            THE WIZARDING ARCHIVE
          </p>

          <h2 className="hp-loader__title">
            Opening the Magical World
          </h2>

          <div className="hp-loader__line">
            <span />
          </div>

          <p className="hp-loader__status">
            Hogwarts is awakening
            <span className="hp-loader__dots">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </p>
        </div>
      </div>

      <div className="hp-loader__corner hp-loader__corner--tl" />
      <div className="hp-loader__corner hp-loader__corner--tr" />
      <div className="hp-loader__corner hp-loader__corner--bl" />
      <div className="hp-loader__corner hp-loader__corner--br" />
    </div>
  );
}

export default Loader;