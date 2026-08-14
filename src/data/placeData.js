const placeData = [
  // ============================================================
  // 01 — HOGWARTS SCHOOL
  // ============================================================

  {
    id: "hogwarts",
    number: "01",
    name: "Hogwarts",
    subtitle: "School of Witchcraft & Wizardry",
    category: "hogwarts",
    region: "Hogwarts Castle",

    image:
      "/images/places/hogwarts/hogwarts-castle.png",

    description:
      "An ancient magical school hidden in the Scottish Highlands. Its towers, corridors and secret rooms hold centuries of wizarding history.",

    knownFor:
      "Magic, learning, moving staircases and hidden secrets",

    locations: [
      {
        id: "great-hall",
        name: "The Great Hall",
        type: "Ceremonial Hall",

        image:
          "/images/places/hogwarts/great-hall.png",

        description:
          "The main gathering hall of Hogwarts. Students eat beneath an enchanted ceiling that reflects the sky outside.",

        knownFor:
          "Feasts, the Sorting Ceremony and floating candles",
      },

      {
        id: "gryffindor-tower",
        name: "Gryffindor Tower",
        type: "Common Room",

        image:
          "/images/places/hogwarts/common-rooms.png",

        description:
          "The warm Gryffindor common room and dormitories are hidden behind the portrait of the Fat Lady.",

        knownFor:
          "Gryffindor students and the Fat Lady",
      },

      {
        id: "slytherin-dungeon",
        name: "Slytherin Dungeon",
        type: "Common Room",

        image:
          "/images/places/hogwarts/common-rooms.png",

        description:
          "The Slytherin common room lies beneath the castle near the Black Lake and has a cold green atmosphere.",

        knownFor:
          "Slytherin students and its underwater view",
      },

      {
        id: "ravenclaw-tower",
        name: "Ravenclaw Tower",
        type: "Common Room",

        image:
          "/images/places/hogwarts/common-rooms.png",

        description:
          "A beautiful common room high in a Hogwarts tower. Visitors must answer a riddle before entering.",

        knownFor:
          "Riddles, knowledge and views over Hogwarts",
      },

      {
        id: "hufflepuff-basement",
        name: "Hufflepuff Basement",
        type: "Common Room",

        image:
          "/images/places/hogwarts/common-rooms.png",

        description:
          "A comfortable underground common room near the kitchens, filled with warm colours, plants and round doors.",

        knownFor:
          "Comfort, plants and Hufflepuff students",
      },

      {
        id: "room-of-requirement",
        name: "Room of Requirement",
        type: "Enchanted Room",

        image:
          "/images/places/hogwarts/room-of-requirement.png",

        description:
          "A secret room that appears when someone truly needs it and changes itself to match that need.",

        knownFor:
          "Dumbledore's Army and hidden objects",
      },

      {
        id: "chamber-of-secrets",
        name: "Chamber of Secrets",
        type: "Hidden Chamber",

        image:
          "/images/places/hogwarts/chamber-of-secrets.png",

        description:
          "A vast underground chamber created by Salazar Slytherin and hidden deep beneath Hogwarts.",

        knownFor:
          "Salazar Slytherin and the Basilisk",
      },

      {
        id: "headmasters-office",
        name: "Headmaster's Office",
        type: "Tower Office",

        image:
          "/images/places/hogwarts/headmasters-office.png",

        description:
          "A circular tower office filled with magical instruments, portraits and some of Hogwarts' greatest secrets.",

        knownFor:
          "Dumbledore, the Pensieve and magical portraits",
      },

      {
        id: "astronomy-tower",
        name: "Astronomy Tower",
        type: "Castle Tower",

        image:
          "/images/places/hogwarts/astronomy-tower.png",

        description:
          "One of the tallest towers at Hogwarts, used by students to study stars, planets and the night sky.",

        knownFor:
          "Astronomy and Dumbledore's final night",
      },

      {
        id: "hogwarts-library",
        name: "Library & Restricted Section",
        type: "Library",

        image:
          "/images/places/hogwarts/library.png",

        description:
          "A huge magical library containing thousands of books, including dangerous volumes kept in the Restricted Section.",

        knownFor:
          "Magical knowledge and restricted books",
      },

      {
        id: "hospital-wing",
        name: "Hospital Wing",
        type: "Medical Wing",

        image:
          "/images/places/hogwarts/hospital-wing.png",

        description:
          "The castle's medical area where Madam Pomfrey treats magical injuries, illnesses and accidents.",

        knownFor:
          "Madam Pomfrey and magical healing",
      },

      {
        id: "owlery",
        name: "Owlery",
        type: "Castle Tower",

        image:
          "/images/places/hogwarts/hogwarts-castle.png",

        description:
          "A tall open tower where Hogwarts owls live and where students send letters across the wizarding world.",

        knownFor:
          "Owls and magical letters",
      },
    ],
  },

  // ============================================================
  // 02 — HOGWARTS GROUNDS
  // ============================================================

  {
    id: "hogwarts-grounds",
    number: "02",
    name: "Hogwarts Grounds",
    subtitle: "Beyond the Castle Walls",
    category: "grounds",
    region: "Hogwarts",

    image:
      "/images/places/grounds/forbidden-forest.png",

    description:
      "Outside Hogwarts lies a wide magical landscape of forests, water, creatures and places used for lessons and adventures.",

    knownFor:
      "The Forbidden Forest, Quidditch and the Black Lake",

    locations: [
      {
        id: "forbidden-forest",
        name: "Forbidden Forest",
        type: "Enchanted Forest",

        image:
          "/images/places/grounds/forbidden-forest.png",

        description:
          "A dark ancient forest beside Hogwarts where dangerous and intelligent magical creatures live.",

        knownFor:
          "Centaurs, Thestrals and Acromantulas",
      },

      {
        id: "hagrids-hut",
        name: "Hagrid's Hut",
        type: "Residence",

        image:
          "/images/places/grounds/hagrids-hut.png",

        description:
          "Hagrid's small wooden home stands near the edge of the Forbidden Forest, surrounded by the creatures he loves.",

        knownFor:
          "Hagrid and magical creatures",
      },

      {
        id: "quidditch-pitch",
        name: "Quidditch Pitch",
        type: "Sports Arena",

        image:
          "/images/places/grounds/quidditch-pitch.png",

        description:
          "The huge Hogwarts stadium where the four houses compete in fast and dangerous Quidditch matches.",

        knownFor:
          "House Quidditch matches",
      },

      {
        id: "whomping-willow",
        name: "Whomping Willow",
        type: "Enchanted Tree",

        image:
          "/images/places/grounds/whomping-willow.png",

        description:
          "A powerful magical tree that violently attacks anything nearby and protects a hidden underground passage.",

        knownFor:
          "The secret path to the Shrieking Shack",
      },

      {
        id: "black-lake",
        name: "Black Lake",
        type: "Magical Lake",

        image:
          "/images/places/grounds/black-lake.png",

        description:
          "The enormous dark lake beside Hogwarts, home to Merpeople, Grindylows and the Giant Squid.",

        knownFor:
          "Merpeople and the Triwizard Tournament",
      },
    ],
  },

  // ============================================================
  // 03 — HOGSMEADE
  // ============================================================

  {
    id: "hogsmeade",
    number: "03",
    name: "Hogsmeade",
    subtitle: "The Wizarding Village",
    category: "hogsmeade",
    region: "Scottish Highlands",

    image:
      "/images/places/hogsmeade/hogsmeade-village.png",

    description:
      "A magical village near Hogwarts filled with snowy streets, wizarding shops, pubs and unusual places.",

    knownFor:
      "Butterbeer, sweets and Hogwarts visits",

    locations: [
      {
        id: "three-broomsticks",
        name: "The Three Broomsticks",
        type: "Wizarding Pub",

        image:
          "/images/places/hogsmeade/three-broomsticks.png",

        description:
          "A warm and popular wizarding pub run by Madam Rosmerta and regularly visited by Hogwarts students.",

        knownFor:
          "Butterbeer and Madam Rosmerta",
      },

      {
        id: "hogs-head",
        name: "The Hog's Head",
        type: "Wizarding Tavern",

        image:
          "/images/places/hogsmeade/hogsmeade-village.png",

        description:
          "A darker and quieter Hogsmeade tavern owned by Aberforth Dumbledore.",

        knownFor:
          "Aberforth Dumbledore and secret meetings",
      },

      {
        id: "honeydukes",
        name: "Honeydukes",
        type: "Sweet Shop",

        image:
          "/images/places/hogsmeade/hogsmeade-village.png",

        description:
          "A colourful sweet shop packed with Chocolate Frogs, magical sweets and unusual wizarding treats.",

        knownFor:
          "Chocolate Frogs and magical sweets",
      },

      {
        id: "shrieking-shack",
        name: "Shrieking Shack",
        type: "Abandoned House",

        image:
          "/images/places/hogsmeade/shrieking-shack.png",

        description:
          "An abandoned house believed to be haunted, but secretly connected to Remus Lupin and the Marauders.",

        knownFor:
          "Remus Lupin and the Marauders",
      },

      {
        id: "zonkos",
        name: "Zonko's Joke Shop",
        type: "Joke Shop",

        image:
          "/images/places/hogsmeade/hogsmeade-village.png",

        description:
          "A famous shop filled with magical jokes and prank items loved by Hogwarts students.",

        knownFor:
          "Magical jokes and prank products",
      },
    ],
  },

  // ============================================================
  // 04 — WIZARDING LONDON
  // ============================================================

  {
    id: "wizarding-london",
    number: "04",
    name: "Wizarding London",
    subtitle: "Hidden Behind the Ordinary World",
    category: "london",
    region: "London",

    image:
      "/images/places/london/diagon-alley.png",

    description:
      "Hidden inside ordinary London is a second world of magical streets, shops, government offices and secret entrances.",

    knownFor:
      "Diagon Alley, the Ministry and Platform 9¾",

    locations: [
      {
        id: "diagon-alley",
        name: "Diagon Alley",
        type: "Wizarding District",

        image:
          "/images/places/london/diagon-alley.png",

        description:
          "London's main wizarding shopping street, where witches and wizards buy almost everything they need.",

        knownFor:
          "Wizarding shops and Hogwarts supplies",
      },

      {
        id: "gringotts",
        name: "Gringotts Wizarding Bank",
        type: "Wizarding Bank",

        image:
          "/images/places/london/gringotts.png",

        description:
          "A grand bank operated by goblins, with heavily protected vaults extending deep underground.",

        knownFor:
          "Goblins, vaults and magical security",
      },

      {
        id: "ollivanders",
        name: "Ollivanders",
        type: "Wand Shop",

        image:
          "/images/places/london/ollivanders.png",

        description:
          "An ancient wand shop where Garrick Ollivander helps witches and wizards find the wand that chooses them.",

        knownFor:
          "Wands and Garrick Ollivander",
      },

      {
        id: "weasleys-wizard-wheezes",
        name: "Weasleys' Wizard Wheezes",
        type: "Joke Shop",

        image:
          "/images/places/london/diagon-alley.png",

        description:
          "Fred and George Weasley's colourful shop selling magical jokes, sweets and clever inventions.",

        knownFor:
          "Fred and George Weasley",
      },

      {
        id: "leaky-cauldron",
        name: "The Leaky Cauldron",
        type: "Pub & Gateway",

        image:
          "/images/places/london/diagon-alley.png",

        description:
          "A hidden wizarding pub that also provides one of the main entrances into Diagon Alley.",

        knownFor:
          "Gateway between Muggle London and Diagon Alley",
      },

      {
        id: "flourish-and-blotts",
        name: "Flourish and Blotts",
        type: "Bookshop",

        image:
          "/images/places/london/diagon-alley.png",

        description:
          "A famous magical bookshop where Hogwarts students buy textbooks and wizarding literature.",

        knownFor:
          "Hogwarts textbooks and magical books",
      },

      {
        id: "eeylops",
        name: "Eeylops Owl Emporium",
        type: "Magical Pet Shop",

        image:
          "/images/places/london/diagon-alley.png",

        description:
          "A shop specialising in owls used as companions and messengers throughout the wizarding world.",

        knownFor:
          "Owls and Hedwig",
      },

      {
        id: "knockturn-alley",
        name: "Knockturn Alley",
        type: "Dark Wizarding District",

        image:
          "/images/places/london/knockturn-alley.png",

        description:
          "A shadowy side street filled with suspicious shops and objects connected to the Dark Arts.",

        knownFor:
          "Dark magic and dangerous shops",
      },

      {
        id: "borgin-and-burkes",
        name: "Borgin and Burkes",
        type: "Dark Artefact Shop",

        image:
          "/images/places/london/knockturn-alley.png",

        description:
          "A mysterious shop selling dark, rare and dangerous magical artefacts.",

        knownFor:
          "Cursed and dark magical objects",
      },

      {
        id: "ministry-of-magic",
        name: "Ministry of Magic",
        type: "Government Headquarters",

        image:
          "/images/places/london/ministry-of-magic.png",

        description:
          "The underground headquarters of Britain's wizarding government and its many magical departments.",

        knownFor:
          "Wizarding law and government",
      },

      {
        id: "department-of-mysteries",
        name: "Department of Mysteries",
        type: "Secret Department",

        image:
          "/images/places/london/ministry-of-magic.png",

        description:
          "A secret Ministry department where mysterious forces such as time, prophecy and death are studied.",

        knownFor:
          "Prophecies, time and the Death Chamber",
      },

      {
        id: "platform-nine-three-quarters",
        name: "Platform 9¾",
        type: "Hidden Railway Platform",

        image:
          "/images/places/london/platform-nine-three-quarters.png",

        description:
          "A hidden platform inside King's Cross Station where students board the Hogwarts Express.",

        knownFor:
          "The Hogwarts Express",
      },
    ],
  },

  // ============================================================
  // 05 — RESIDENCES & SAFEHOUSES
  // ============================================================

  {
    id: "residences",
    number: "05",
    name: "Residences",
    subtitle: "Homes, Hideouts & Safehouses",
    category: "residences",
    region: "Across Britain",

    image:
      "/images/places/residences/the-burrow.png",

    description:
      "Homes across Britain become places of family, safety, secrecy and conflict throughout the wizarding story.",

    knownFor:
      "Families, safehouses and secret headquarters",

    locations: [
      {
        id: "privet-drive",
        name: "Number Four, Privet Drive",
        type: "Muggle Residence",

        image:
          "/images/places/residences/privet-drive.png",

        description:
          "The ordinary suburban home of the Dursley family where Harry spends most of his childhood.",

        knownFor:
          "Harry's childhood with the Dursleys",
      },

      {
        id: "the-burrow",
        name: "The Burrow",
        type: "Wizarding Residence",

        image:
          "/images/places/residences/the-burrow.png",

        description:
          "The warm, unusual and slightly chaotic home of the Weasley family.",

        knownFor:
          "The Weasley family",
      },

      {
        id: "grimmauld-place",
        name: "12 Grimmauld Place",
        type: "Hidden Residence",

        image:
          "/images/places/residences/grimmauld-place.png",

        description:
          "The ancestral home of the Black family and later the hidden headquarters of the Order of the Phoenix.",

        knownFor:
          "Sirius Black and the Order of the Phoenix",
      },

      {
        id: "malfoy-manor",
        name: "Malfoy Manor",
        type: "Wizarding Estate",

        image:
          "/images/places/residences/malfoy-manor.png",

        description:
          "The grand estate of the Malfoy family that later becomes an important Death Eater headquarters.",

        knownFor:
          "The Malfoys, Voldemort and Death Eaters",
      },

      {
        id: "shell-cottage",
        name: "Shell Cottage",
        type: "Safehouse",

        image:
          "/images/places/residences/shell-cottage.png",

        description:
          "Bill and Fleur's peaceful seaside home, used as a safe refuge during the Second Wizarding War.",

        knownFor:
          "Bill, Fleur and Dobby's resting place",
      },

      {
        id: "godrics-hollow",
        name: "Godric's Hollow",
        type: "Wizarding Village",

        image:
          "/images/places/residences/godrics-hollow.png",

        description:
          "An old wizarding village closely connected to the Potter family and Hogwarts founder Godric Gryffindor.",

        knownFor:
          "The Potter family and Godric Gryffindor",
      },

      {
        id: "lovegood-house",
        name: "The Lovegood House",
        type: "Wizarding Residence",

        image:
          "/images/places/residences/godrics-hollow.png",

        description:
          "The unusual tower-shaped home of Luna and Xenophilius Lovegood.",

        knownFor:
          "Luna Lovegood and The Quibbler",
      },

      {
        id: "spinners-end",
        name: "Spinner's End",
        type: "Wizarding Residence",

        image:
          "/images/places/residences/grimmauld-place.png",

        description:
          "A dark industrial neighbourhood where Severus Snape owns a small brick house.",

        knownFor:
          "Severus Snape",
      },
    ],
  },

  // ============================================================
  // 06 — BEYOND
  // ============================================================

  {
    id: "beyond",
    number: "06",
    name: "Beyond",
    subtitle: "Distant & Dangerous Places",
    category: "beyond",
    region: "Beyond Familiar Britain",

    image:
      "/images/places/beyond/azkaban.png",

    description:
      "Far beyond familiar Hogwarts and London are prisons, caves, graveyards and distant magical schools.",

    knownFor:
      "Dark history, distant schools and dangerous magic",

    locations: [
      {
        id: "azkaban",
        name: "Azkaban",
        type: "Wizarding Prison",

        image:
          "/images/places/beyond/azkaban.png",

        description:
          "A bleak fortress prison isolated in the sea and once guarded by Dementors.",

        knownFor:
          "Dementors and dangerous prisoners",
      },

      {
        id: "little-hangleton",
        name: "Little Hangleton Graveyard",
        type: "Graveyard",

        image:
          "/images/places/beyond/little-hangleton.png",

        description:
          "The graveyard of Voldemort's Muggle ancestors and the place where he regains his physical body.",

        knownFor:
          "Voldemort's return",
      },

      {
        id: "horcrux-cave",
        name: "The Horcrux Cave",
        type: "Hidden Cave",

        image:
          "/images/places/beyond/horcrux-cave.png",

        description:
          "A remote seaside cave protected by dark magic where Voldemort hides one of his Horcruxes.",

        knownFor:
          "Slytherin's locket and Inferi",
      },

      {
        id: "nurmengard",
        name: "Nurmengard",
        type: "Fortress Prison",

        image:
          "/images/places/beyond/nurmengard.png",

        description:
          "A cold fortress built by Gellert Grindelwald to imprison his enemies before becoming his own prison.",

        knownFor:
          "Gellert Grindelwald",
      },

      {
        id: "beauxbatons",
        name: "Beauxbatons Academy",
        type: "Wizarding School",

        image:
          "/images/places/beyond/wizarding-schools.png",

        description:
          "A prestigious French magical school represented in the Triwizard Tournament by Fleur Delacour.",

        knownFor:
          "French magical education",
      },

      {
        id: "durmstrang",
        name: "Durmstrang Institute",
        type: "Wizarding School",

        image:
          "/images/places/beyond/wizarding-schools.png",

        description:
          "A secretive northern European wizarding school known for discipline and its interest in the Dark Arts.",

        knownFor:
          "Viktor Krum and Dark Arts education",
      },
    ],
  },
];

export default placeData;