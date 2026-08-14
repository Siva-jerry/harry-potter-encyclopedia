import { useEffect, useState } from "react";
import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Loader from "./components/Loader/Loader";
import WizardingCompass from "./components/WizardingCompass/WizardingCompass";
import HomeButton from "./components/HomeButton/HomeButton";
import ScrollManager from "./components/ScrollManager/ScrollManager";

import Home from "./pages/Home/Home";
import Characters from "./pages/Characters/Characters";
import CharacterDetail from "./pages/Characters/CharacterDetail/CharacterDetail";
import Creatures from "./pages/Creatures/Creatures";
import Spells from "./pages/Spells/Spells";
import Artifacts from "./pages/Artifacts/Artifacts";
import Places from "./pages/Places/Places";
import Villains from "./pages/Villains/Villains";
import Potions from "./pages/Potions/Potions";
import Houses from "./pages/Houses/Houses";
import Hogwarts from "./pages/Hogwarts/Hogwarts";
import Stories from "./pages/Stories/Stories";
import Timeline from "./pages/Timeline/Timeline";
import Encyclopedia from "./pages/Encyclopedia/Encyclopedia";


function App() {
  const [loading, setLoading] = useState(true);
  const [hideLoader, setHideLoader] = useState(false);


  useEffect(() => {
    /* =====================================
       KEEP LOADER VISIBLE
    ====================================== */

    const loadingTimer = setTimeout(() => {
      setHideLoader(true);
    }, 3200);


    /* =====================================
       REMOVE LOADER AFTER FADE OUT
    ====================================== */

    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 4000);


    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(removeTimer);
    };
  }, []);


  return (
    <BrowserRouter>

     <ScrollManager />


      {/* =====================================
          MAGICAL LOADER
      ====================================== */}

      {loading && (
        <div
          className={
            hideLoader
              ? "app-loader app-loader--hide"
              : "app-loader"
          }
        >
          <Loader />
        </div>
      )}


      {/* =====================================
          WEBSITE CONTENT
      ====================================== */}

      <div
        className={
          loading
            ? "app-content app-content--loading"
            : "app-content app-content--ready"
        }
      >

        <div className="app-pages">

          <Routes>

            {/* =====================================
                LANDING PAGE
            ====================================== */}

            <Route
              path="/"
              element={<Home />}
            />


            {/* =====================================
                CHARACTERS ARCHIVE
            ====================================== */}

            <Route
              path="/characters"
              element={<Characters />}
            />

            <Route
  path="/creatures"
  element={<Creatures />}
/>

            <Route
  path="/spells"
  element={<Spells />}
/>
<Route
  path="/artifacts"
  element={<Artifacts />}
/>
<Route
  path="/places"
  element={<Places />}
/>

<Route
  path="/dark-arts"
  element={<Villains />}
/>

<Route path="/potions" element={<Potions />} />
<Route
  path="/houses"
  element={<Houses />}
/>

<Route
  path="/hogwarts"
  element={<Hogwarts />}
/>

<Route
  path="/stories"
  element={<Stories />}
/>

<Route
  path="/timeline"
  element={<Timeline />}
/>

<Route
  path="/encyclopedia"
  element={<Encyclopedia />}
/>



            {/* =====================================
                CHARACTER DETAIL PAGE
            ====================================== */}

            <Route
              path="/characters/:characterId"
              element={<CharacterDetail />}
            />

          </Routes>

        </div>

      </div>


      {/* =====================================
          GLOBAL FIXED NAVIGATION

          OUTSIDE .app-content
          so both controls remain fixed
          across every page.
      ====================================== */}

      {!loading && (
        <>

          {/* TOP-LEFT HOME BUTTON */}

          <HomeButton />


          {/* BOTTOM-RIGHT COMPASS */}

          <WizardingCompass />

        </>
      )}

    </BrowserRouter>
  );
}


export default App;