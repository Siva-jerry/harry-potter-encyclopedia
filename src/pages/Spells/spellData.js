const spellData = [
  {
    id: "lumos",
    name: "Lumos",
    pronunciation: "LOO-mos",
    category: "Utility",
    classification: "Wand-Lighting Charm",
    difficulty: "Beginner",
    effect: "Creates light at the tip of the caster's wand.",
    purpose:
      "Used to illuminate dark places and help the caster see.",
    notableUse:
      "Frequently used when witches and wizards need light in dark corridors, forests, rooms, and other dangerous places.",
    knownUsers: [
      "Harry Potter",
      "Hermione Granger",
      "Albus Dumbledore",
    ],
    symbol: "✦",
    x: 49,
    y: 27,
  },

  {
    id: "nox",
    name: "Nox",
    pronunciation: "NOCKS",
    category: "Utility",
    classification: "Wand-Extinguishing Charm",
    difficulty: "Beginner",
    effect: "Extinguishes the light produced by Lumos.",
    purpose:
      "Used when a witch or wizard wants to darken their wand again.",
    notableUse:
      "Often follows Lumos after the caster no longer needs magical light.",
    knownUsers: [
      "Harry Potter",
      "Hermione Granger",
    ],
    symbol: "✧",
    x: 61,
    y: 20,
  },

  {
    id: "accio",
    name: "Accio",
    pronunciation: "AK-ee-oh",
    category: "Charms",
    classification: "Summoning Charm",
    difficulty: "Intermediate",
    effect:
      "Causes an object to fly toward the person casting the spell.",
    purpose:
      "Allows witches and wizards to summon objects from a distance.",
    notableUse:
      "Harry uses the Summoning Charm during the first task of the Triwizard Tournament.",
    knownUsers: [
      "Harry Potter",
      "Hermione Granger",
      "Molly Weasley",
    ],
    symbol: "◇",
    x: 31,
    y: 34,
  },

  {
    id: "alohomora",
    name: "Alohomora",
    pronunciation: "al-LOH-ho-MOR-ah",
    category: "Charms",
    classification: "Unlocking Charm",
    difficulty: "Beginner",
    effect:
      "Unlocks many magically or normally locked doors and objects.",
    purpose:
      "Used to open locks without using a physical key.",
    notableUse:
      "Hermione uses the charm while exploring Hogwarts during her first year.",
    knownUsers: [
      "Hermione Granger",
      "Harry Potter",
    ],
    symbol: "✣",
    x: 70,
    y: 36,
  },

  {
    id: "wingardium-leviosa",
    name: "Wingardium Leviosa",
    pronunciation: "win-GAR-dee-um levi-OH-sa",
    category: "Charms",
    classification: "Levitation Charm",
    difficulty: "Beginner",
    effect:
      "Makes an object rise and move through the air.",
    purpose:
      "Allows the caster to magically levitate objects.",
    notableUse:
      "One of the first important charms taught to Harry's class at Hogwarts.",
    knownUsers: [
      "Hermione Granger",
      "Ron Weasley",
    ],
    symbol: "⌁",
    x: 40,
    y: 49,
  },

  {
    id: "expelliarmus",
    name: "Expelliarmus",
    pronunciation: "ex-PELL-ee-AR-mus",
    category: "Defensive",
    classification: "Disarming Charm",
    difficulty: "Intermediate",
    effect:
      "Forces an opponent to release an object they are holding.",
    purpose:
      "Most commonly used to disarm another witch or wizard during a duel.",
    notableUse:
      "It becomes one of Harry Potter's most recognizable defensive spells.",
    knownUsers: [
      "Harry Potter",
      "Severus Snape",
      "Remus Lupin",
    ],
    symbol: "✦",
    x: 57,
    y: 46,
  },

  {
    id: "expecto-patronum",
    name: "Expecto Patronum",
    pronunciation: "ex-PEK-toh pa-TRO-num",
    category: "Defensive",
    classification: "Patronus Charm",
    difficulty: "Advanced",
    effect:
      "Conjures protective Patronus magic.",
    purpose:
      "Most famously used as protection against Dementors.",
    notableUse:
      "Harry learns to produce a powerful Patronus while being taught by Remus Lupin.",
    knownUsers: [
      "Harry Potter",
      "Remus Lupin",
      "Albus Dumbledore",
      "Severus Snape",
    ],
    symbol: "✺",
    x: 76,
    y: 56,
  },

  {
    id: "protego",
    name: "Protego",
    pronunciation: "pro-TAY-go",
    category: "Defensive",
    classification: "Shield Charm",
    difficulty: "Intermediate",
    effect:
      "Creates a magical shield that can block or deflect certain spells.",
    purpose:
      "Used as a defensive barrier during magical combat.",
    notableUse:
      "Used by many witches and wizards during confrontations and duels.",
    knownUsers: [
      "Harry Potter",
      "Hermione Granger",
      "Severus Snape",
    ],
    symbol: "◈",
    x: 24,
    y: 59,
  },

  {
    id: "stupefy",
    name: "Stupefy",
    pronunciation: "STOO-puh-fy",
    category: "Defensive",
    classification: "Stunning Spell",
    difficulty: "Intermediate",
    effect:
      "Stuns a target and can leave them unconscious.",
    purpose:
      "Used to temporarily stop an opponent without using lethal magic.",
    notableUse:
      "Commonly used by members of the Order of the Phoenix and other duelists.",
    knownUsers: [
      "Harry Potter",
      "Minerva McGonagall",
      "Order of the Phoenix",
    ],
    symbol: "✹",
    x: 18,
    y: 42,
  },

  {
    id: "riddikulus",
    name: "Riddikulus",
    pronunciation: "ri-DIK-u-lus",
    category: "Defensive",
    classification: "Boggart-Banishing Spell",
    difficulty: "Intermediate",
    effect:
      "Changes a Boggart into a humorous form.",
    purpose:
      "Helps a witch or wizard overcome the fear represented by a Boggart.",
    notableUse:
      "Remus Lupin teaches the spell during a Defence Against the Dark Arts lesson.",
    knownUsers: [
      "Neville Longbottom",
      "Remus Lupin",
      "Hogwarts Students",
    ],
    symbol: "✤",
    x: 83,
    y: 32,
  },

  {
    id: "reparo",
    name: "Reparo",
    pronunciation: "reh-PAH-roh",
    category: "Utility",
    classification: "Mending Charm",
    difficulty: "Beginner",
    effect:
      "Repairs certain damaged or broken objects.",
    purpose:
      "A practical charm used to restore objects.",
    notableUse:
      "Different forms of repairing magic are used throughout the wizarding world.",
    knownUsers: [
      "Hermione Granger",
      "Albus Dumbledore",
    ],
    symbol: "✥",
    x: 34,
    y: 70,
  },

  {
    id: "obliviate",
    name: "Obliviate",
    pronunciation: "oh-BLIV-ee-ate",
    category: "Charms",
    classification: "Memory Charm",
    difficulty: "Advanced",
    effect:
      "Removes or alters memories.",
    purpose:
      "Used when particular memories must be erased from a person's mind.",
    notableUse:
      "Memory modification plays an important role in several events of the wizarding story.",
    knownUsers: [
      "Hermione Granger",
      "Gilderoy Lockhart",
    ],
    symbol: "◌",
    x: 51,
    y: 69,
  },

  {
    id: "sectumsempra",
    name: "Sectumsempra",
    pronunciation: "sek-tum-SEM-prah",
    category: "Dark Magic",
    classification: "Dark Curse",
    difficulty: "Advanced",
    effect:
      "Causes severe magical wounds to the target.",
    purpose:
      "A dangerous offensive spell created for use against enemies.",
    notableUse:
      "Harry discovers the spell written in the Half-Blood Prince's old textbook.",
    knownUsers: [
      "Severus Snape",
      "Harry Potter",
    ],
    symbol: "✕",
    x: 68,
    y: 73,
  },

  {
    id: "avada-kedavra",
    name: "Avada Kedavra",
    pronunciation: "ah-VAH-dah keh-DAV-rah",
    category: "Unforgivable",
    classification: "Killing Curse",
    difficulty: "Forbidden",
    effect:
      "Causes immediate death when successfully cast on a living target.",
    purpose:
      "A forbidden curse associated with the darkest forms of magic.",
    notableUse:
      "Closely associated with Lord Voldemort and the First and Second Wizarding Wars.",
    knownUsers: [
      "Lord Voldemort",
      "Death Eaters",
    ],
    symbol: "◆",
    x: 86,
    y: 72,
  },

  {
    id: "crucio",
    name: "Crucio",
    pronunciation: "KROO-see-oh",
    category: "Unforgivable",
    classification: "Cruciatus Curse",
    difficulty: "Forbidden",
    effect:
      "Inflicts extreme magical pain on the target.",
    purpose:
      "A forbidden curse used to torture another person.",
    notableUse:
      "Used by dark witches and wizards, particularly during Voldemort's rise to power.",
    knownUsers: [
      "Bellatrix Lestrange",
      "Lord Voldemort",
      "Harry Potter",
    ],
    symbol: "◉",
    x: 45,
    y: 84,
  },

  {
    id: "imperio",
    name: "Imperio",
    pronunciation: "im-PEER-ee-oh",
    category: "Unforgivable",
    classification: "Imperius Curse",
    difficulty: "Forbidden",
    effect:
      "Places another person under the caster's control.",
    purpose:
      "Allows the caster to influence or control the actions of another person.",
    notableUse:
      "Used by dark witches and wizards to control others during periods of conflict.",
    knownUsers: [
      "Lord Voldemort",
      "Death Eaters",
      "Harry Potter",
    ],
    symbol: "◎",
    x: 15,
    y: 78,
  },
];

export const spellCategories = [
  "All Magic",
  "Charms",
  "Defensive",
  "Utility",
  "Dark Magic",
  "Unforgivable",
];

export default spellData;