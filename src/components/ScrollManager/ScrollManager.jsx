import { useEffect, useRef } from "react";
import {
  useLocation,
  useNavigationType,
} from "react-router-dom";

function ScrollManager() {
  const location = useLocation();
  const navigationType = useNavigationType();

  const positions = useRef(new Map());
  const previousKey = useRef(location.key);

  useEffect(() => {
    // Let React Router / our manager control restoration.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);


  useEffect(() => {
    const previousLocationKey = previousKey.current;

    /*
     * Save the scroll position belonging to the page
     * that we are leaving.
     */
    if (previousLocationKey) {
      positions.current.set(previousLocationKey, {
        x: window.scrollX,
        y: window.scrollY,
      });
    }

    previousKey.current = location.key;


    /*
     * POP = browser Back / Forward
     *
     * Restore the position where the user previously
     * was on that page.
     */
    if (navigationType === "POP") {
      const savedPosition =
        positions.current.get(location.key);

      if (savedPosition) {
        requestAnimationFrame(() => {
          window.scrollTo({
            left: savedPosition.x,
            top: savedPosition.y,
            behavior: "instant",
          });
        });

        return;
      }
    }


    /*
     * PUSH / REPLACE
     *
     * A normal link, compass navigation, character card,
     * etc. opens the new page from the top.
     */
    requestAnimationFrame(() => {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: "instant",
      });
    });

  }, [
    location.key,
    navigationType,
  ]);


  return null;
}

export default ScrollManager;