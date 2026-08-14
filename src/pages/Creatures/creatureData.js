const creatureData = [
  // =========================================================
  // MAJOR MAGICAL BEASTS
  // =========================================================

  {
    id: "acromantula",
    name: "Acromantula",
    example: "Aragog",
    category: "beast",
    habitat: "forest",
    type: "Giant Magical Spider",
    danger: 5,
    intelligence: 4,
    size: "Massive",
    trait: "Speech & Venom",
    appearance: "Chamber of Secrets",
    image: "/images/creatures/acromantula.png",
    description:
      "A giant magical spider with human-like intelligence. Acromantulas can speak, form colonies and are extremely dangerous hunters.",
  },

  {
    id: "basilisk",
    name: "Basilisk",
    example: "The Serpent of Slytherin",
    category: "beast",
    habitat: "dark",
    type: "King of Serpents",
    danger: 5,
    intelligence: 3,
    size: "Enormous",
    trait: "Deadly Gaze",
    appearance: "Chamber of Secrets",
    image: "/images/creatures/basilisk.png",
    description:
      "An enormous magical serpent. Looking directly into its eyes can kill, while an indirect gaze can leave a victim petrified.",
  },

  {
    id: "boggart",
    name: "Boggart",
    example: "Fear Shapeshifter",
    category: "dark",
    habitat: "dark",
    type: "Non-Being",
    danger: 3,
    intelligence: 2,
    size: "Unknown",
    trait: "Takes the Form of Fear",
    appearance: "Prisoner of Azkaban",
    image: "/images/creatures/boggart.png",
    description:
      "A mysterious shapeshifting entity that becomes whatever its observer fears most.",
  },

  {
    id: "bowtruckle",
    name: "Bowtruckle",
    example: "Tree Guardian",
    category: "beast",
    habitat: "forest",
    type: "Woodland Creature",
    danger: 1,
    intelligence: 3,
    size: "Tiny",
    trait: "Lock Picking",
    appearance: "Deathly Hallows",
    image: "/images/creatures/bowtruckle.png",
    description:
      "A tiny stick-like creature that protects magical trees. Its long fingers are useful for opening locks.",
  },

  {
    id: "cornish-pixie",
    name: "Cornish Pixie",
    example: "Cornwall Pixies",
    category: "beast",
    habitat: "sky",
    type: "Flying Creature",
    danger: 2,
    intelligence: 2,
    size: "Tiny",
    trait: "Flight & Mischief",
    appearance: "Chamber of Secrets",
    image: "/images/creatures/cornish-pixie.png",
    description:
      "Small bright-blue creatures famous for causing chaos. They are energetic, mischievous and surprisingly strong.",
  },

  {
    id: "hungarian-horntail",
    name: "Hungarian Horntail",
    example: "Triwizard Dragon",
    category: "beast",
    habitat: "sky",
    type: "Dragon",
    danger: 5,
    intelligence: 3,
    size: "Colossal",
    trait: "Fire Breath",
    appearance: "Goblet of Fire",
    image: "/images/creatures/hungarian-horntail.png",
    description:
      "One of the most dangerous dragon breeds. Harry faced one during the first task of the Triwizard Tournament.",
  },

  {
    id: "norwegian-ridgeback",
    name: "Norwegian Ridgeback",
    example: "Norbert",
    category: "beast",
    habitat: "sky",
    type: "Dragon",
    danger: 5,
    intelligence: 3,
    size: "Huge",
    trait: "Fire Breath",
    appearance: "Philosopher's Stone",
    image: "/images/creatures/norwegian-ridgeback.png",
    description:
      "A powerful dragon breed. Hagrid secretly raised a young Norwegian Ridgeback named Norbert.",
  },

  {
    id: "ukrainian-ironbelly",
    name: "Ukrainian Ironbelly",
    example: "Gringotts Dragon",
    category: "beast",
    habitat: "dark",
    type: "Dragon",
    danger: 5,
    intelligence: 3,
    size: "Colossal",
    trait: "Extreme Strength",
    appearance: "Deathly Hallows: Part 2",
    image: "/images/creatures/ukrainian-ironbelly.png",
    description:
      "A gigantic pale dragon used to guard the deepest vaults of Gringotts Wizarding Bank.",
  },

  {
    id: "swedish-short-snout",
    name: "Swedish Short-Snout",
    example: "Triwizard Dragon",
    category: "beast",
    habitat: "sky",
    type: "Dragon",
    danger: 5,
    intelligence: 3,
    size: "Huge",
    trait: "Blue Fire",
    appearance: "Goblet of Fire",
    image: "/images/creatures/swedish-short-snout.png",
    description:
      "A powerful silver-blue dragon breed selected for the Triwizard Tournament.",
  },

  {
    id: "chinese-fireball",
    name: "Chinese Fireball",
    example: "Triwizard Dragon",
    category: "beast",
    habitat: "sky",
    type: "Dragon",
    danger: 5,
    intelligence: 3,
    size: "Huge",
    trait: "Fire Breath",
    appearance: "Goblet of Fire",
    image: "/images/creatures/chinese-fireball.png",
    description:
      "A brilliant red dragon known for producing powerful mushroom-shaped bursts of flame.",
  },

  {
    id: "common-welsh-green",
    name: "Common Welsh Green",
    example: "Triwizard Dragon",
    category: "beast",
    habitat: "sky",
    type: "Dragon",
    danger: 4,
    intelligence: 3,
    size: "Huge",
    trait: "Fire Breath",
    appearance: "Goblet of Fire",
    image: "/images/creatures/common-welsh-green.png",
    description:
      "A green dragon breed native to Wales and one of the dragons used during the Triwizard Tournament.",
  },

  {
    id: "fluffy",
    name: "Three-Headed Dog",
    example: "Fluffy",
    category: "beast",
    habitat: "dark",
    type: "Guardian Beast",
    danger: 5,
    intelligence: 2,
    size: "Massive",
    trait: "Three Heads",
    appearance: "Philosopher's Stone",
    image: "/images/creatures/fluffy.png",
    description:
      "A gigantic three-headed dog owned by Hagrid and used to guard the entrance leading toward the Philosopher's Stone.",
  },

  {
    id: "grindylow",
    name: "Grindylow",
    example: "Black Lake Creature",
    category: "beast",
    habitat: "water",
    type: "Water Demon",
    danger: 3,
    intelligence: 2,
    size: "Small",
    trait: "Underwater Attack",
    appearance: "Goblet of Fire",
    image: "/images/creatures/grindylow.png",
    description:
      "An aggressive horned water creature found beneath the surface of the Black Lake.",
  },

  {
    id: "hippogriff",
    name: "Hippogriff",
    example: "Buckbeak",
    category: "beast",
    habitat: "forest",
    type: "Winged Beast",
    danger: 3,
    intelligence: 4,
    size: "Large",
    trait: "Flight",
    appearance: "Prisoner of Azkaban",
    image: "/images/creatures/hippogriff.png",
    description:
      "A proud creature with the front body of an eagle and the rear body of a horse. Respect must be shown before approaching.",
  },

  {
    id: "phoenix",
    name: "Phoenix",
    example: "Fawkes",
    category: "beast",
    habitat: "sky",
    type: "Magical Bird",
    danger: 1,
    intelligence: 5,
    size: "Medium",
    trait: "Rebirth & Healing Tears",
    appearance: "Chamber of Secrets",
    image: "/images/creatures/phoenix.png",
    description:
      "A rare magical bird connected with fire and rebirth. Phoenix tears possess extraordinary healing power.",
  },

  {
    id: "pygmy-puff",
    name: "Pygmy Puff",
    example: "Arnold",
    category: "familiar",
    habitat: "domestic",
    type: "Magical Pet",
    danger: 1,
    intelligence: 2,
    size: "Tiny",
    trait: "Companionship",
    appearance: "Half-Blood Prince",
    image: "/images/creatures/pygmy-puff.png",
    description:
      "A tiny fluffy magical pet sold by Weasleys' Wizard Wheezes. Ginny owned a purple Pygmy Puff named Arnold.",
  },

  {
    id: "thestral",
    name: "Thestral",
    example: "Hogwarts Herd",
    category: "beast",
    habitat: "sky",
    type: "Winged Horse",
    danger: 2,
    intelligence: 4,
    size: "Large",
    trait: "Invisible to Most",
    appearance: "Order of the Phoenix",
    image: "/images/creatures/thestral.png",
    description:
      "Skeletal winged horses that can only be seen by people who have witnessed death and understood its reality.",
  },

  {
    id: "troll",
    name: "Mountain Troll",
    example: "Hogwarts Troll",
    category: "beast",
    habitat: "forest",
    type: "Giant Creature",
    danger: 4,
    intelligence: 1,
    size: "Massive",
    trait: "Extreme Strength",
    appearance: "Philosopher's Stone",
    image: "/images/creatures/troll.png",
    description:
      "A huge and immensely strong creature with limited intelligence. One entered Hogwarts during Harry's first year.",
  },

  {
    id: "unicorn",
    name: "Unicorn",
    example: "Forbidden Forest Unicorn",
    category: "beast",
    habitat: "forest",
    type: "Pure Magical Beast",
    danger: 1,
    intelligence: 4,
    size: "Large",
    trait: "Powerful Magical Blood",
    appearance: "Philosopher's Stone",
    image: "/images/creatures/unicorn.png",
    description:
      "A beautiful and highly magical creature associated with purity. Its blood can preserve life, but at a terrible cost.",
  },

  // =========================================================
  // SENTIENT MAGICAL BEINGS
  // =========================================================

  {
    id: "centaur",
    name: "Centaurs",
    example: "Firenze",
    category: "being",
    habitat: "forest",
    type: "Sentient Magical Being",
    danger: 3,
    intelligence: 5,
    size: "Large",
    trait: "Astronomy & Divination",
    appearance: "Philosopher's Stone",
    image: "/images/creatures/centaur.png",
    description:
      "Intelligent forest-dwelling beings with a human upper body and horse lower body. They closely observe the stars.",
  },

  {
    id: "giant",
    name: "Giants",
    example: "Grawp",
    category: "being",
    habitat: "forest",
    type: "Sentient Magical Being",
    danger: 5,
    intelligence: 2,
    size: "Colossal",
    trait: "Resistance to Magic",
    appearance: "Order of the Phoenix",
    image: "/images/creatures/giant.png",
    description:
      "Enormous humanoid beings possessing tremendous physical strength and a natural resistance to many spells.",
  },

  {
    id: "goblin",
    name: "Goblins",
    example: "Griphook",
    category: "being",
    habitat: "domestic",
    type: "Sentient Magical Being",
    danger: 2,
    intelligence: 5,
    size: "Small",
    trait: "Metalwork & Banking",
    appearance: "Philosopher's Stone",
    image: "/images/creatures/goblin.png",
    description:
      "Highly intelligent magical beings famous for craftsmanship and their important role in operating Gringotts Wizarding Bank.",
  },

  {
    id: "house-elf",
    name: "House-Elves",
    example: "Dobby & Kreacher",
    category: "being",
    habitat: "domestic",
    type: "Sentient Magical Being",
    danger: 1,
    intelligence: 5,
    size: "Small",
    trait: "Powerful Wandless Magic",
    appearance: "Chamber of Secrets",
    image: "/images/creatures/house-elf.png",
    description:
      "Small magical beings capable of powerful magic without wands. Many traditionally serve wizarding households.",
  },

  {
    id: "merpeople",
    name: "Merpeople",
    example: "Black Lake Colony",
    category: "being",
    habitat: "water",
    type: "Aquatic Magical Being",
    danger: 3,
    intelligence: 5,
    size: "Human-sized",
    trait: "Underwater Civilization",
    appearance: "Goblet of Fire",
    image: "/images/creatures/merperson.png",
    description:
      "Intelligent aquatic beings living beneath the Black Lake with their own language, society and settlements.",
  },

  {
    id: "werewolf",
    name: "Werewolves",
    example: "Remus Lupin",
    category: "being",
    habitat: "dark",
    type: "Transformed Human",
    danger: 5,
    intelligence: 3,
    size: "Large",
    trait: "Full-Moon Transformation",
    appearance: "Prisoner of Azkaban",
    image: "/images/creatures/werewolf.png",
    description:
      "Humans infected with lycanthropy who transform into dangerous wolf-like creatures during the full moon.",
  },

  // =========================================================
  // DARK ENTITIES
  // =========================================================

  {
    id: "dementor",
    name: "Dementors",
    example: "Azkaban Guardians",
    category: "dark",
    habitat: "dark",
    type: "Dark Non-Being",
    danger: 5,
    intelligence: 3,
    size: "Human-sized",
    trait: "Dementor's Kiss",
    appearance: "Prisoner of Azkaban",
    image: "/images/creatures/dementor.png",
    description:
      "Dark cloaked entities that feed on happiness and fill nearby people with despair. Their Kiss can remove a person's soul.",
  },

  {
    id: "ghost",
    name: "Ghosts",
    example: "Nearly Headless Nick",
    category: "dark",
    habitat: "dark",
    type: "Spirit",
    danger: 1,
    intelligence: 5,
    size: "Human-sized",
    trait: "Incorporeal Existence",
    appearance: "Philosopher's Stone",
    image: "/images/creatures/ghost.png",
    description:
      "Transparent spirits of deceased witches and wizards who chose to remain in the world of the living.",
  },

  {
    id: "inferi",
    name: "Inferi",
    example: "Cave Guardians",
    category: "dark",
    habitat: "dark",
    type: "Dark Creation",
    danger: 5,
    intelligence: 1,
    size: "Human-sized",
    trait: "Reanimated Corpses",
    appearance: "Half-Blood Prince",
    image: "/images/creatures/inferi.png",
    description:
      "Dead bodies magically reanimated and controlled by a dark wizard. Voldemort used them to guard one of his Horcruxes.",
  },

  {
    id: "nagini",
    name: "Nagini",
    example: "Voldemort's Snake",
    category: "dark",
    habitat: "dark",
    type: "Magical Serpent",
    danger: 5,
    intelligence: 4,
    size: "Large",
    trait: "Venom",
    appearance: "Goblet of Fire",
    image: "/images/creatures/nagini.png",
    description:
      "Voldemort's enormous snake and one of his closest companions. She later became one of his Horcruxes.",
  },

  // =========================================================
  // FAMILIARS & MAGICAL PETS
  // =========================================================

  {
    id: "hedwig",
    name: "Hedwig",
    example: "Harry's Owl",
    category: "familiar",
    habitat: "domestic",
    type: "Snowy Owl",
    danger: 1,
    intelligence: 4,
    size: "Small",
    trait: "Magical Messenger",
    appearance: "Philosopher's Stone",
    image: "/images/creatures/hedwig.png",
    description:
      "Harry's loyal snowy owl and companion. She carried letters across the wizarding world.",
  },

  {
    id: "crookshanks",
    name: "Crookshanks",
    example: "Hermione's Cat",
    category: "familiar",
    habitat: "domestic",
    type: "Cat",
    danger: 1,
    intelligence: 4,
    size: "Small",
    trait: "Strong Intuition",
    appearance: "Prisoner of Azkaban",
    image: "/images/creatures/crookshanks.png",
    description:
      "Hermione's unusually intelligent cat. Crookshanks quickly became suspicious of Scabbers.",
  },

  {
    id: "trevor",
    name: "Trevor",
    example: "Neville's Toad",
    category: "familiar",
    habitat: "domestic",
    type: "Toad",
    danger: 1,
    intelligence: 1,
    size: "Tiny",
    trait: "Student Companion",
    appearance: "Philosopher's Stone",
    image: "/images/creatures/trevor.png",
    description:
      "Neville Longbottom's pet toad, famous for frequently wandering away from his owner.",
  },

  {
    id: "scabbers",
    name: "Scabbers",
    example: "Peter Pettigrew",
    category: "familiar",
    habitat: "domestic",
    type: "Rat / Animagus",
    danger: 3,
    intelligence: 5,
    size: "Tiny",
    trait: "Animagus Disguise",
    appearance: "Philosopher's Stone",
    image: "/images/creatures/scabbers.png",
    description:
      "The Weasley family's pet rat was eventually revealed to be Peter Pettigrew hiding in his Animagus form.",
  },
];

export const habitatData = {
  forest: {
    label: "Forest",
    subtitle: "Ancient things move between the trees.",
    background: "/images/creatures/worlds/forest-world.png",
    symbol: "♧",
  },

  sky: {
    label: "Sky",
    subtitle: "Wings, flame and shadows above the clouds.",
    background: "/images/creatures/worlds/sky-world.png",
    symbol: "✦",
  },

  water: {
    label: "Water",
    subtitle: "The Black Lake keeps its own inhabitants.",
    background: "/images/creatures/worlds/water-world.png",
    symbol: "≈",
  },

  dark: {
    label: "Dark",
    subtitle: "Not every creature should be approached.",
    background: "/images/creatures/worlds/dark-world.png",
    symbol: "☾",
  },

  domestic: {
    label: "Familiar",
    subtitle: "Some magical creatures choose to stay close.",
    background: "/images/creatures/worlds/menagerie-gate.png",
    symbol: "◇",
  },
};

export default creatureData;