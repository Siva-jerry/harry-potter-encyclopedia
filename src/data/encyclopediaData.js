// ============================================================
// THE WIZARDING WORLD
// MASTER EXPERIENCE HUB DATA
// ============================================================
//
// IMPORTANT:
//
// This file DOES NOT duplicate the content from:
// - characterData
// - spellData
// - houseData
// - creatureData
// - placeData
// - potionData
// - artifactData
// - villainData
// - storyData
// - timelineData
//
// Instead, it connects those existing archives together and
// provides curated content for the Wizarding World landing page.
//
// ============================================================


// ============================================================
// EXISTING DATA
// ============================================================
import characterData from "../pages/Characters/characterData";
import spellData from "../pages/Spells/spellData";


import creatureData from "../pages/Creatures/creatureData";

import houseData from "./houseData";

import placeData from "./placeData";
import potionData from "./potionData";
import artifactData from "./artifactData";
import villainData from "./villainData";
import storyData from "./storyData";
import timelineData from "./timelineData";


// ============================================================
// HELPERS
// ============================================================

const findById = (data, id) =>
  data.find((item) => item.id === id);


const findCharacter = (id) =>
  findById(characterData, id);


const findSpell = (id) =>
  findById(spellData, id);


const findHouse = (id) =>
  findById(houseData, id);


const findCreature = (id) =>
  findById(creatureData, id);


const findPotion = (id) =>
  findById(potionData, id);


const findArtifact = (id) =>
  findById(artifactData, id);


const findVillain = (id) =>
  findById(villainData, id);


const findStory = (id) =>
  findById(storyData, id);


const findTimeline = (id) =>
  findById(timelineData, id);


// ============================================================
// PLACE HELPERS
// ============================================================
//
// placeData contains regions with nested locations.
// These helpers allow the Wizarding World page to pull both
// main regions and individual locations.
// ============================================================

const findPlaceRegion = (id) =>
  findById(placeData, id);


const findNestedPlace = (id) => {
  for (const region of placeData) {
    const location =
      region.locations?.find(
        (item) => item.id === id
      );

    if (location) {
      return {
        ...location,

        parentId: region.id,
        parentName: region.name,
        region: region.region,
      };
    }
  }

  return null;
};


// ============================================================
// NORMALIZERS
// ============================================================
//
// Different archive files use slightly different property
// names. These helpers convert them into one consistent
// structure for the Wizarding World page.
// ============================================================


// ============================================================
// CHARACTER NORMALIZER
// ============================================================

const worldCharacter = (id) => {
  const item = findCharacter(id);

  if (!item) return null;

  return {
    id: item.id,

    name: item.name,

    eyebrow:
      item.title ||
      item.identity?.occupation ||
      "Wizarding Character",

    description:
      item.introduction ||
      item.personality ||
      "",

    image:
      item.portrait ||
      item.heroImage,

    meta:
      item.identity?.house ||
      "Wizarding World",

    route:
      `/characters/${item.id}`,

    source:
      "characters",
  };
};


// ============================================================
// SPELL NORMALIZER
// ============================================================

const worldSpell = (id) => {
  const item = findSpell(id);

  if (!item) return null;

  return {
    id: item.id,

    name: item.name,

    eyebrow:
      item.classification,

    description:
      item.effect,

    secondary:
      item.purpose,

    image: null,

    symbol:
      item.symbol || "✦",

    meta:
      item.category,

    route:
      "/spells",

    source:
      "spells",
  };
};


// ============================================================
// HOUSE NORMALIZER
// ============================================================

const worldHouse = (id) => {
  const item = findHouse(id);

  if (!item) return null;

  return {
    id: item.id,

    name: item.name,

    eyebrow:
      `${item.animal} · ${item.element}`,

    description:
      item.description,

    secondary:
      item.tagline,

    image:
      item.heroImage,

    symbolImage:
      item.symbolImage,

    meta:
      item.colors,

    route:
      "/houses",

    source:
      "houses",
  };
};


// ============================================================
// CREATURE NORMALIZER
// ============================================================

const worldCreature = (id) => {
  const item = findCreature(id);

  if (!item) return null;

  return {
    id: item.id,

    name: item.name,

    eyebrow:
      item.type,

    description:
      item.description,

    secondary:
      item.trait,

    image:
      item.image,

    meta:
      item.example ||
      item.appearance,

    danger:
      item.danger,

    route:
      "/creatures",

    source:
      "creatures",
  };
};


// ============================================================
// POTION NORMALIZER
// ============================================================

const worldPotion = (id) => {
  const item = findPotion(id);

  if (!item) return null;

  return {
    id: item.id,

    name: item.name,

    eyebrow:
      item.alias,

    description:
      item.description,

    secondary:
      item.effect,

    image:
      item.image,

    meta:
      item.classification,

    color:
      item.color,

    route:
      "/potions",

    source:
      "potions",
  };
};


// ============================================================
// ARTIFACT NORMALIZER
// ============================================================

const worldArtifact = (id) => {
  const item = findArtifact(id);

  if (!item) return null;

  return {
    id: item.id,

    name: item.name,

    eyebrow:
      item.type,

    description:
      item.description,

    secondary:
      item.ability,

    image:
      item.image,

    meta:
      item.category,

    route:
      "/artifacts",

    source:
      "artifacts",
  };
};


// ============================================================
// VILLAIN NORMALIZER
// ============================================================

const worldVillain = (id) => {
  const item = findVillain(id);

  if (!item) return null;

  return {
    id: item.id,

    name: item.name,

    eyebrow:
      item.title ||
      item.classification,

    description:
      item.description,

    secondary:
      item.tagline,

    image:
      item.image,

    meta:
      item.threat,

    route:
      "/villains",

    source:
      "dark-arts",
  };
};


// ============================================================
// STORY NORMALIZER
// ============================================================

const worldStory = (id) => {
  const item = findStory(id);

  if (!item) return null;

  return {
    id: item.id,

    name:
      item.en?.shortTitle ||
      item.en?.title ||
      id,

    fullName:
      item.en?.title,

    tamilName:
      item.ta?.shortTitle,

    eyebrow:
      item.year,

    description:
      item.en?.summary,

    tamilDescription:
      item.ta?.summary,

    image:
      item.image,

    meta:
      item.en?.subtitle,

    trailer:
      item.trailer || null,

    route:
      "/stories",

    source:
      "stories",
  };
};


// ============================================================
// TIMELINE NORMALIZER
// ============================================================

const worldTimeline = (id) => {
  const item = findTimeline(id);

  if (!item) return null;

  return {
    id: item.id,

    name:
      item.title?.en ||
      id,

    tamilName:
      item.title?.ta,

    eyebrow:
      item.year,

    description:
      item.shortDescription?.en,

    tamilDescription:
      item.shortDescription?.ta,

    image:
      item.image,

    meta:
      item.label?.en,

    importance:
      item.importance,

    route:
      "/timeline",

    source:
      "timeline",
  };
};


// ============================================================
// PLACE NORMALIZER
// ============================================================

const worldPlace = (id) => {
  const region =
    findPlaceRegion(id);

  if (region) {
    return {
      id: region.id,

      name: region.name,

      eyebrow:
        region.subtitle ||
        region.region,

      description:
        region.description,

      secondary:
        region.knownFor,

      image:
        region.image,

      meta:
        region.region,

      route:
        "/places",

      source:
        "places",
    };
  }


  const location =
    findNestedPlace(id);

  if (!location) {
    return null;
  }


  return {
    id: location.id,

    name: location.name,

    eyebrow:
      location.type,

    description:
      location.description,

    secondary:
      location.knownFor,

    image:
      location.image,

    meta:
      location.parentName,

    route:
      "/places",

    source:
      "places",
  };
};


// ============================================================
// CLEAN ARRAY
// ============================================================

const clean = (items) =>
  items.filter(Boolean);


// ============================================================
// WORLD PAGE HERO
// ============================================================

export const wizardingWorldHero = {
  eyebrow:
    "THE WIZARDING WORLD",

  title:
    "A World Hidden",

  titleAccent:
    "Inside Our Own.",

  description:
    "Walk beyond the ordinary world and enter Hogwarts, meet witches and wizards, learn magic, discover strange creatures, follow ancient stories and uncover the history that shaped the wizarding world.",

  primaryAction: {
    label:
      "Begin the Journey",

    target:
      "#world-gateway",
  },

  secondaryAction: {
    label:
      "Explore Hogwarts",

    route:
      "/hogwarts",
  },

  image:
    "/images/encyclopedia/hero/encyclopedia-archive.png",

  note:
    "HOGWARTS · MAGIC · STORIES · HISTORY",
};


// ============================================================
// WORLD PAGE INTRODUCTION
// ============================================================

export const wizardingWorldIntro = {
  eyebrow:
    "BEYOND THE MUGGLE WORLD",

  title:
    "Everything Begins",

  titleAccent:
    "With Discovery.",

  description:
    "The magical world is not a collection of isolated subjects. People belong to houses. Spells shape battles. Objects carry history. Places remember stories. Every path connects to another.",

  quote:
    "Choose a path. The rest of the world will reveal itself.",

  image:
    "/images/encyclopedia/archive/enchanted-encyclopedia.png",
};


// ============================================================
// MAIN WORLD GATEWAYS
// ============================================================
//
// These are the large navigation destinations.
//
// This replaces the old Encyclopedia category system.
// ============================================================

export const wizardingWorldSections = [
  // ==========================================================
  // 01 — HOGWARTS
  // ==========================================================

  {
    id: "hogwarts",

    number: "01",

    label:
      "Hogwarts",

    subtitle:
      "The Heart of the Wizarding World",

    kicker:
      "THE CASTLE",

    route:
      "/hogwarts",

    theme:
      "hogwarts",

    description:
      "An ancient school hidden within the Scottish Highlands, filled with moving staircases, enchanted rooms, secret passages and generations of magical history.",

    heroImage:
      "/images/places/hogwarts/hogwarts-castle.png",

    layout:
      "cinematic",

    highlights: clean([
      worldPlace(
        "great-hall"
      ),

      worldPlace(
        "room-of-requirement"
      ),

      worldPlace(
        "chamber-of-secrets"
      ),

      worldPlace(
        "hogwarts-library"
      ),
    ]),

    stats: [
      {
        value: "4",
        label: "Houses",
      },

      {
        value: "1000+",
        label: "Years of History",
      },

      {
        value: "∞",
        label: "Secrets",
      },
    ],
  },


  // ==========================================================
  // 02 — CHARACTERS
  // ==========================================================

  {
    id: "characters",

    number: "02",

    label:
      "Characters",

    subtitle:
      "The People Behind the Story",

    kicker:
      "WITCHES & WIZARDS",

    route:
      "/characters",

    theme:
      "characters",

    description:
      "Heroes, professors, rivals, families and mysterious figures whose choices changed the history of the magical world.",

    heroImage:
      "/images/characters/harry-potter.jpg",

    layout:
      "portraits",

    highlights: clean([
      worldCharacter(
        "harry-potter"
      ),

      worldCharacter(
        "hermione-granger"
      ),

      worldCharacter(
        "ron-weasley"
      ),

      worldCharacter(
        "albus-dumbledore"
      ),

      worldCharacter(
        "severus-snape"
      ),

      worldCharacter(
        "sirius-black"
      ),
    ]),

    stats: [
      {
        value:
          characterData.length,

        label:
          "Characters",
      },

      {
        value: "4",
        label: "Houses",
      },

      {
        value: "1",
        label: "Shared Story",
      },
    ],
  },


  // ==========================================================
  // 03 — HOUSES
  // ==========================================================

  {
    id: "houses",

    number: "03",

    label:
      "Hogwarts Houses",

    subtitle:
      "Four Houses. Four Legacies.",

    kicker:
      "THE SORTING",

    route:
      "/houses",

    theme:
      "houses",

    description:
      "Courage, ambition, wisdom and loyalty shape four traditions that have defined Hogwarts for centuries.",

    heroImage:
      "/images/houses/gryffindor/gryffindor-hero.png",

    layout:
      "four-realms",

    highlights: clean([
      worldHouse(
        "gryffindor"
      ),

      worldHouse(
        "slytherin"
      ),

      worldHouse(
        "ravenclaw"
      ),

      worldHouse(
        "hufflepuff"
      ),
    ]),

    stats: [
      {
        value: "4",
        label: "Houses",
      },

      {
        value: "4",
        label: "Founders",
      },

      {
        value: "4",
        label: "Legacies",
      },
    ],
  },


  // ==========================================================
  // 04 — SPELLS
  // ==========================================================

  {
    id: "spells",

    number: "04",

    label:
      "Spells",

    subtitle:
      "Words That Change Reality",

    kicker:
      "MAGICAL THEORY",

    route:
      "/spells",

    theme:
      "spells",

    description:
      "From simple illumination to powerful defensive charms and forbidden curses, spoken magic can protect, transform or destroy.",

    heroImage:
      "/images/encyclopedia/world/spells-world.png",

    layout:
      "spell-field",

    highlights: clean([
      worldSpell(
        "lumos"
      ),

      worldSpell(
        "expelliarmus"
      ),

      worldSpell(
        "expecto-patronum"
      ),

      worldSpell(
        "accio"
      ),

      worldSpell(
        "protego"
      ),

      worldSpell(
        "avada-kedavra"
      ),
    ]),

    stats: [
      {
        value:
          spellData.length,

        label:
          "Known Spells",
      },

      {
        value: "3",
        label:
          "Unforgivable Curses",
      },

      {
        value: "∞",
        label:
          "Magical Possibilities",
      },
    ],
  },


  // ==========================================================
  // 05 — CREATURES
  // ==========================================================

  {
    id: "creatures",

    number: "05",

    label:
      "Magical Creatures",

    subtitle:
      "Beasts, Beings & Mysteries",

    kicker:
      "MAGICAL LIFE",

    route:
      "/creatures",

    theme:
      "creatures",

    description:
      "The wizarding world is shared with dragons, serpents, spirits, loyal companions and creatures whose abilities remain mysterious even to experienced wizards.",

    heroImage:
      "/images/creatures/phoenix.png",

    layout:
      "wild-world",

    highlights: clean([
      worldCreature(
        "phoenix"
      ),

      worldCreature(
        "hippogriff"
      ),

      worldCreature(
        "basilisk"
      ),

      worldCreature(
        "dementor"
      ),

      worldCreature(
        "hungarian-horntail"
      ),

      worldCreature(
        "acromantula"
      ),
    ]),

    stats: [
      {
        value:
          creatureData.length,

        label:
          "Recorded Creatures",
      },

      {
        value: "5",
        label:
          "Maximum Danger",
      },

      {
        value: "∞",
        label:
          "Unknown Species",
      },
    ],
  },


  // ==========================================================
  // 06 — POTIONS
  // ==========================================================

  {
    id: "potions",

    number: "06",

    label:
      "Potions",

    subtitle:
      "Magic Bottled by Precision",

    kicker:
      "ALCHEMY",

    route:
      "/potions",

    theme:
      "potions",

    description:
      "Carefully measured ingredients can create luck, disguise, healing, transformation, truth or effects dangerous enough to become restricted knowledge.",

    heroImage:
      "/images/potions/hero/potions-dungeon.png",

    layout:
      "alchemy",

    highlights: clean([
      worldPotion(
        "felix-felicis"
      ),

      worldPotion(
        "polyjuice-potion"
      ),

      worldPotion(
        "amortentia"
      ),

      worldPotion(
        "veritaserum"
      ),

      worldPotion(
        "wolfsbane-potion"
      ),
    ]),

    stats: [
      {
        value:
          potionData.length,

        label:
          "Recorded Brews",
      },

      {
        value: "5",
        label:
          "Disciplines",
      },

      {
        value: "4",
        label:
          "Restricted Brews",
      },
    ],
  },


  // ==========================================================
  // 07 — PLACES
  // ==========================================================

  {
    id: "places",

    number: "07",

    label:
      "Places",

    subtitle:
      "A World Hidden Behind the Ordinary",

    kicker:
      "EXPLORE",

    route:
      "/places",

    theme:
      "places",

    description:
      "Walk from Hogwarts to Hogsmeade, enter the hidden streets of wizarding London and travel toward the most dangerous corners of magical Britain.",

    heroImage:
      "/images/places/london/diagon-alley.png",

    layout:
      "journey-map",

    highlights: clean([
      worldPlace(
        "hogwarts"
      ),

      worldPlace(
        "hogsmeade"
      ),

      worldPlace(
        "diagon-alley"
      ),

      worldPlace(
        "ministry-of-magic"
      ),

      worldPlace(
        "azkaban"
      ),

      worldPlace(
        "godrics-hollow"
      ),
    ]),

    stats: [
      {
        value:
          placeData.length,

        label:
          "Major Regions",
      },

      {
        value:
          placeData.reduce(
            (
              total,
              region
            ) =>
              total +
              (
                region.locations
                  ?.length || 0
              ),
            0
          ),

        label:
          "Locations",
      },

      {
        value: "1",
        label:
          "Hidden World",
      },
    ],
  },


  // ==========================================================
  // 08 — ARTIFACTS
  // ==========================================================

  {
    id: "artifacts",

    number: "08",

    label:
      "Magical Artifacts",

    subtitle:
      "Objects That Carry History",

    kicker:
      "ENCHANTED OBJECTS",

    route:
      "/artifacts",

    theme:
      "artifacts",

    description:
      "Some magical objects illuminate rooms or tell time. Others control death, contain souls or determine the fate of the wizarding world.",

    heroImage:
      "/images/artifacts/hallows/elder-wand.jpg",

    layout:
      "relics",

    highlights: clean([
      worldArtifact(
        "elder-wand"
      ),

      worldArtifact(
        "marauders-map"
      ),

      worldArtifact(
        "time-turner"
      ),

      worldArtifact(
        "sorting-hat"
      ),

      worldArtifact(
        "philosophers-stone"
      ),

      worldArtifact(
        "sword-of-gryffindor"
      ),
    ]),

    stats: [
      {
        value:
          artifactData.length,

        label:
          "Magical Objects",
      },

      {
        value: "3",
        label:
          "Deathly Hallows",
      },

      {
        value: "7",
        label:
          "Horcrux Vessels",
      },
    ],
  },


  // ==========================================================
  // 09 — DARK ARTS
  // ==========================================================

  {
    id: "dark-arts",

    number: "09",

    label:
      "Dark Arts",

    subtitle:
      "Where Magic Becomes Fear",

    kicker:
      "RESTRICTED",

    route:
      "/villains",

    theme:
      "dark",

    description:
      "Dark wizards, Death Eaters, forbidden curses and dangerous ideologies reveal how magical power can become destructive when driven by fear and control.",

    heroImage:
      "/images/villains/main/voldemort.jpg",

    layout:
      "descent",

    highlights: clean([
      worldVillain(
        "lord-voldemort"
      ),

      worldVillain(
        "bellatrix-lestrange"
      ),

      worldVillain(
        "gellert-grindelwald"
      ),

      worldVillain(
        "dolores-umbridge"
      ),

      worldVillain(
        "lucius-malfoy"
      ),

      worldVillain(
        "fenrir-greyback"
      ),
    ]),

    stats: [
      {
        value:
          villainData.length,

        label:
          "Antagonist Records",
      },

      {
        value: "3",
        label:
          "Unforgivable Curses",
      },

      {
        value: "2",
        label:
          "Wizarding Wars",
      },
    ],
  },


  // ==========================================================
  // 10 — STORIES
  // ==========================================================

  {
    id: "stories",

    number: "10",

    label:
      "Stories",

    subtitle:
      "Seven Years That Changed Everything",

    kicker:
      "THE JOURNEY",

    route:
      "/stories",

    theme:
      "stories",

    description:
      "Follow Harry from the moment the magical world opens to him until the final battle for Hogwarts, with each chapter available in English and Tamil.",

    heroImage:
      "/images/stories/chapters/01-philosophers-stone.png",

    layout:
      "storybook",

    highlights: clean([
      worldStory(
        "philosophers-stone"
      ),

      worldStory(
        "chamber-of-secrets"
      ),

      worldStory(
        "prisoner-of-azkaban"
      ),

      worldStory(
        "goblet-of-fire"
      ),

      worldStory(
        "order-of-the-phoenix"
      ),

      worldStory(
        "half-blood-prince"
      ),

      worldStory(
        "deathly-hallows-part-1"
      ),

      worldStory(
        "deathly-hallows-part-2"
      ),
    ]),

    stats: [
      {
        value:
          storyData.length,

        label:
          "Story Chapters",
      },

      {
        value: "2",
        label:
          "Languages",
      },

      {
        value: "7",
        label:
          "School Years",
      },
    ],
  },


  // ==========================================================
  // 11 — TIMELINE
  // ==========================================================

  {
    id: "timeline",

    number: "11",

    label:
      "Timeline",

    subtitle:
      "Centuries of Wizarding History",

    kicker:
      "THROUGH TIME",

    route:
      "/timeline",

    theme:
      "timeline",

    description:
      "Travel from the earliest magical communities through the founding of Hogwarts, the rise of dark wizards, Harry's school years and the rebuilding that followed the Battle of Hogwarts.",

    heroImage:
      "/images/timeline/events/founding-hogwarts.png",

    layout:
      "chronology",

    highlights: clean([
      worldTimeline(
        "founding-hogwarts"
      ),

      worldTimeline(
        "chamber-created"
      ),

      worldTimeline(
        "grindelwald-defeated"
      ),

      worldTimeline(
        "halloween-1981"
      ),

      worldTimeline(
        "harry-hogwarts"
      ),

      worldTimeline(
        "voldemort-returns"
      ),

      worldTimeline(
        "battle-hogwarts"
      ),

      worldTimeline(
        "nineteen-years-later"
      ),
    ]),

    stats: [
      {
        value:
          timelineData.length,

        label:
          "Historical Events",
      },

      {
        value: "1000+",
        label:
          "Years Covered",
      },

      {
        value: "2",
        label:
          "Languages",
      },
    ],
  },
];


// ============================================================
// WORLD GATEWAY
// ============================================================
//
// These are the first destinations displayed after the hero.
// ============================================================

export const worldGateway = clean([
  {
    ...worldPlace("hogwarts"),

    number: "01",

    label:
      "Enter Hogwarts",

    eyebrow:
      "School of Witchcraft & Wizardry",

    description:
      "Step through the castle gates and explore the halls, towers, classrooms and secrets of Hogwarts.",

    image:
      "/images/encyclopedia/gateway/hogwarts-gateway.png",

    route:
      "/hogwarts",
  },

  {
    ...worldCharacter(
      "harry-potter"
    ),

    number: "02",

    label:
      "Meet the Characters",

    eyebrow:
      "Witches, Wizards & Legends",

    description:
      "Meet the students, professors, families, rivals and heroes whose choices shaped the wizarding world.",

    image:
      "/images/encyclopedia/gateway/characters-gateway.png",

    route:
      "/characters",
  },

  {
    ...worldSpell(
      "expecto-patronum"
    ),

    number: "03",

    label:
      "Discover Magic",

    eyebrow:
      "Spells & Magical Theory",

    description:
      "Explore charms, defensive magic, powerful incantations and the extraordinary forces controlled by a wand.",

    image:
      "/images/encyclopedia/gateway/magic-gateway.png",

    route:
      "/spells",
  },

  {
    ...worldCreature(
      "phoenix"
    ),

    number: "04",

    label:
      "Meet Magical Creatures",

    eyebrow:
      "Beasts, Beings & Mysteries",

    description:
      "Discover creatures ranging from loyal magical companions to ancient and dangerous beasts.",

    image:
      "/images/encyclopedia/gateway/creatures-gateway.png",

    route:
      "/creatures",
  },
]);


// ============================================================
// CHARACTER SPOTLIGHT
// ============================================================

export const worldCharacters = clean([
  worldCharacter(
    "harry-potter"
  ),

  worldCharacter(
    "hermione-granger"
  ),

  worldCharacter(
    "ron-weasley"
  ),

  worldCharacter(
    "albus-dumbledore"
  ),

  worldCharacter(
    "severus-snape"
  ),

  worldCharacter(
    "sirius-black"
  ),
]);


// ============================================================
// MAGIC SPOTLIGHT
// ============================================================

export const worldMagic = {
  featured:
    worldSpell(
      "expecto-patronum"
    ),

  spells: clean([
    worldSpell(
      "lumos"
    ),

    worldSpell(
      "expelliarmus"
    ),

    worldSpell(
      "accio"
    ),

    worldSpell(
      "protego"
    ),

    worldSpell(
      "wingardium-leviosa"
    ),
  ]),

  darkSpell:
    worldSpell(
      "avada-kedavra"
    ),
};


// ============================================================
// MAGICAL LIFE SPOTLIGHT
// ============================================================

export const magicalLife = {
  creatures: clean([
    worldCreature(
      "phoenix"
    ),

    worldCreature(
      "hippogriff"
    ),

    worldCreature(
      "basilisk"
    ),

    worldCreature(
      "hungarian-horntail"
    ),
  ]),

  potions: clean([
    worldPotion(
      "felix-felicis"
    ),

    worldPotion(
      "polyjuice-potion"
    ),

    worldPotion(
      "amortentia"
    ),

    worldPotion(
      "wolfsbane-potion"
    ),
  ]),
};


// ============================================================
// WORLD JOURNEY
// ============================================================

export const worldJourney = clean([
  {
    ...worldPlace(
      "diagon-alley"
    ),

    step:
      "01",
  },


  {
    ...worldPlace(
      "hogsmeade"
    ),

    step:
      "02",
  },


  {
    ...worldPlace(
      "ministry-of-magic"
    ),

    step:
      "03",
  },


  {
    ...worldPlace(
      "godrics-hollow"
    ),

    step:
      "04",
  },


  {
    ...worldPlace(
      "azkaban"
    ),

    step:
      "05",
  },
]);


// ============================================================
// OBJECTS OF POWER
// ============================================================

export const objectsOfPower = clean([
  worldArtifact(
    "elder-wand"
  ),

  worldArtifact(
    "sorting-hat"
  ),

  worldArtifact(
    "marauders-map"
  ),

  worldArtifact(
    "time-turner"
  ),

  worldArtifact(
    "philosophers-stone"
  ),

  worldArtifact(
    "sword-of-gryffindor"
  ),
]);


// ============================================================
// DARKER PATH
// ============================================================

export const darkerPath = {
  featured:
    worldVillain(
      "lord-voldemort"
    ),

  figures: clean([
    worldVillain(
      "bellatrix-lestrange"
    ),

    worldVillain(
      "gellert-grindelwald"
    ),

    worldVillain(
      "lucius-malfoy"
    ),

    worldVillain(
      "dolores-umbridge"
    ),
  ]),

  artifacts: clean([
    worldArtifact(
      "tom-riddles-diary"
    ),

    worldArtifact(
      "slytherins-locket"
    ),

    worldArtifact(
      "gaunts-ring"
    ),
  ]),

  spells: clean([
    worldSpell(
      "avada-kedavra"
    ),

    worldSpell(
      "crucio"
    ),

    worldSpell(
      "imperio"
    ),
  ]),
};


// ============================================================
// STORY JOURNEY
// ============================================================

export const storyJourney =
  clean([
    worldStory(
      "philosophers-stone"
    ),

    worldStory(
      "chamber-of-secrets"
    ),

    worldStory(
      "prisoner-of-azkaban"
    ),

    worldStory(
      "goblet-of-fire"
    ),

    worldStory(
      "order-of-the-phoenix"
    ),

    worldStory(
      "half-blood-prince"
    ),

    worldStory(
      "deathly-hallows-part-1"
    ),

    worldStory(
      "deathly-hallows-part-2"
    ),
  ]);


// ============================================================
// HISTORY PREVIEW
// ============================================================

export const historyPreview =
  clean([
    worldTimeline(
      "founding-hogwarts"
    ),

    worldTimeline(
      "grindelwald-defeated"
    ),

    worldTimeline(
      "halloween-1981"
    ),

    worldTimeline(
      "harry-hogwarts"
    ),

    worldTimeline(
      "voldemort-returns"
    ),

    worldTimeline(
      "battle-hogwarts"
    ),

    worldTimeline(
      "nineteen-years-later"
    ),
  ]);


// ============================================================
// WORLD CONNECTIONS
// ============================================================
//
// Used for optional connecting-line / relationship animation.
//
// Example:
//
// Harry → Gryffindor → Hogwarts → Patronus → Dementor
//
// ============================================================

export const worldConnections = [
  {
    id:
      "harrys-world",

    title:
      "Harry's World",

    subtitle:
      "One life touches almost every corner of the magical world.",

    nodes: clean([
      worldCharacter(
        "harry-potter"
      ),

      worldHouse(
        "gryffindor"
      ),

      worldPlace(
        "hogwarts"
      ),

      worldSpell(
        "expecto-patronum"
      ),

      worldCreature(
        "dementor"
      ),
    ]),
  },


  {
    id:
      "voldemorts-shadow",

    title:
      "Voldemort's Shadow",

    subtitle:
      "Fear, forbidden magic and the objects created to escape death.",

    nodes: clean([
      worldVillain(
        "lord-voldemort"
      ),

      worldArtifact(
        "tom-riddles-diary"
      ),

      worldArtifact(
        "slytherins-locket"
      ),

      worldSpell(
        "avada-kedavra"
      ),

      worldTimeline(
        "battle-hogwarts"
      ),
    ]),
  },


  {
    id:
      "secrets-of-hogwarts",

    title:
      "Secrets of Hogwarts",

    subtitle:
      "The castle remembers far more than its students ever see.",

    nodes: clean([
      worldPlace(
        "hogwarts"
      ),

      worldPlace(
        "room-of-requirement"
      ),

      worldPlace(
        "chamber-of-secrets"
      ),

      worldArtifact(
        "marauders-map"
      ),

      worldArtifact(
        "sorting-hat"
      ),
    ]),
  },


  {
    id:
      "hermiones-magic",

    title:
      "Hermione's Journey",

    subtitle:
      "Knowledge, friendship and powerful magic shape one of Hogwarts' greatest students.",

    nodes: clean([
      worldCharacter(
        "hermione-granger"
      ),

      worldHouse(
        "gryffindor"
      ),

      worldSpell(
        "alohomora"
      ),

      worldArtifact(
        "time-turner"
      ),

      worldPotion(
        "polyjuice-potion"
      ),
    ]),
  },
];


// ============================================================
// FINAL JOURNEY ROUTES
// ============================================================

export const finalJourneyRoutes = [
  {
    id:
      "hogwarts",

    eyebrow:
      "ENTER THE CASTLE",

    title:
      "Hogwarts",

    description:
      "Walk through the school where generations learned magic.",

    image:
      "/images/places/hogwarts/hogwarts-castle.png",

    route:
      "/hogwarts",
  },


  {
    id:
      "characters",

    eyebrow:
      "MEET THEM",

    title:
      "Characters",

    description:
      "Discover the witches and wizards behind the story.",

    image:
      "/images/characters/harry-potter.jpg",

    route:
      "/characters",
  },


  {
    id:
      "stories",

    eyebrow:
      "RELIVE IT",

    title:
      "Stories",

    description:
      "Experience the complete journey in English or Tamil.",

    image:
      "/images/stories/chapters/01-philosophers-stone.png",

    route:
      "/stories",
  },


  {
    id:
      "timeline",

    eyebrow:
      "FOLLOW HISTORY",

    title:
      "Timeline",

    description:
      "Travel across centuries of wizarding history.",

    image:
      "/images/timeline/events/founding-hogwarts.png",

    route:
      "/timeline",
  },
];


// ============================================================
// GLOBAL SITE STATISTICS
// ============================================================

const nestedPlaceCount =
  placeData.reduce(
    (
      total,
      region
    ) =>
      total +
      (
        region.locations?.length ||
        0
      ),
    0
  );


export const wizardingWorldStats = {
  characters:
    characterData.length,

  spells:
    spellData.length,

  houses:
    houseData.length,

  creatures:
    creatureData.length,

  potions:
    potionData.length,

  artifacts:
    artifactData.length,

  villains:
    villainData.length,

  stories:
    storyData.length,

  timelineEvents:
    timelineData.length,

  regions:
    placeData.length,

  locations:
    nestedPlaceCount,

  total:
    characterData.length +
    spellData.length +
    houseData.length +
    creatureData.length +
    potionData.length +
    artifactData.length +
    villainData.length +
    storyData.length +
    timelineData.length +
    nestedPlaceCount,
};


// ============================================================
// DEFAULT EXPORT
// ============================================================

const encyclopediaData = {
  hero:
    wizardingWorldHero,

  intro:
    wizardingWorldIntro,

  sections:
    wizardingWorldSections,

  gateway:
    worldGateway,

  characters:
    worldCharacters,

  magic:
    worldMagic,

  magicalLife,

  journey:
    worldJourney,

  artifacts:
    objectsOfPower,

  dark:
    darkerPath,

  stories:
    storyJourney,

  history:
    historyPreview,

  connections:
    worldConnections,

  finalRoutes:
    finalJourneyRoutes,

  stats:
    wizardingWorldStats,
};


export default encyclopediaData;