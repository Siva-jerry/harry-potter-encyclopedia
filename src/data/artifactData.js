// ============================================================
// MAGICAL OBJECTS & ARTIFACTS — ENCYCLOPEDIA DATA
// ============================================================

const artifactData = [

  // ==========================================================
  // 01 — ENCHANTED TRANSPORTATION & VEHICLES
  // ==========================================================

  {
    id: "flying-ford-anglia",
    name: "Flying Ford Anglia",
    type: "Enchanted Vehicle",
    category: "transportation",
    image:
      "/images/artifacts/transport/flying-ford-anglia.png",

    tagline:
      "An ordinary Muggle car transformed into something wonderfully impossible.",

    description:
      "The Flying Ford Anglia is Arthur Weasley's enchanted car. It can fly through the air and become invisible. Harry and Ron famously use it to travel to Hogwarts when they cannot enter Platform Nine and Three-Quarters.",

    ability:
      "Can fly, become invisible and travel without using normal roads.",

    owner:
      "Arthur Weasley and the Weasley family.",

    appearance:
      "Harry Potter and the Chamber of Secrets",
  },

  {
    id: "nimbus-2000",
    name: "Nimbus 2000",
    type: "Racing Broomstick",
    category: "transportation",
    image:
      "/images/artifacts/transport/nimbus-2000.png",

    tagline:
      "For a young Seeker, this broom opened the sky.",

    description:
      "The Nimbus 2000 is Harry Potter's first high-quality racing broom. Professor McGonagall arranges for Harry to receive it after he becomes the youngest Seeker on the Gryffindor Quidditch team in many years.",

    ability:
      "Provides fast and responsive magical flight.",

    owner:
      "Harry Potter.",

    appearance:
      "Harry Potter and the Philosopher's Stone",
  },

  {
    id: "firebolt",
    name: "Firebolt",
    type: "Racing Broomstick",
    category: "transportation",
    image:
      "/images/artifacts/transport/firebolt.png",

    tagline:
      "Speed, balance and precision built into one extraordinary broom.",

    description:
      "The Firebolt is an extremely advanced racing broom. Harry receives one during his third year at Hogwarts. It becomes his replacement for the destroyed Nimbus 2000 and gives him exceptional speed during Quidditch matches.",

    ability:
      "Provides extremely fast and highly controlled magical flight.",

    owner:
      "Harry Potter.",

    appearance:
      "Harry Potter and the Prisoner of Azkaban",
  },

  {
    id: "cleansweep",
    name: "Cleansweep",
    type: "Broomstick",
    category: "transportation",
    image:
      "/images/artifacts/minor/cleansweep.png",

    tagline:
      "Not every broom becomes legendary, but every journey begins by leaving the ground.",

    description:
      "Cleansweep is the name of a popular family of magical broomsticks. Different models are used by witches and wizards for transportation and Quidditch.",

    ability:
      "Allows witches and wizards to fly.",

    owner:
      "Used by many members of the wizarding community.",

    appearance:
      "Seen and referenced throughout the wizarding world.",
  },

  {
    id: "comet-260",
    name: "Comet 260",
    type: "Broomstick",
    category: "transportation",
    image:
      "/images/artifacts/minor/comet-260.png",

    tagline:
      "A dependable broom from an earlier generation of magical flight.",

    description:
      "The Comet 260 is a traditional broomstick model used for magical transportation and Quidditch. It is less advanced than famous racing brooms such as the Nimbus 2000 and Firebolt.",

    ability:
      "Provides controlled magical flight.",

    owner:
      "Used by different witches and wizards.",

    appearance:
      "Associated with broom travel and Quidditch in the wizarding world.",
  },

  {
    id: "flying-motorbike",
    name: "Flying Motorbike",
    type: "Enchanted Vehicle",
    category: "transportation",
    image:
      "/images/artifacts/transport/flying-motorbike.avif",

    tagline:
      "Some journeys through the night sky require more than a broom.",

    description:
      "The Flying Motorbike is an enchanted motorcycle originally belonging to Sirius Black. Hagrid uses it to carry the infant Harry Potter to Privet Drive and later uses it again during Harry's escape from the Dursleys.",

    ability:
      "Can fly through the air while carrying passengers.",

    owner:
      "Originally Sirius Black and later used by Rubeus Hagrid.",

    appearance:
      "Harry Potter and the Philosopher's Stone and Harry Potter and the Deathly Hallows: Part 1",
  },

  {
    id: "knight-bus",
    name: "Knight Bus",
    type: "Magical Transportation",
    category: "transportation",
    image:
      "/images/artifacts/transport/knight-bus.png",

    tagline:
      "For the stranded witch or wizard, help can arrive very quickly.",

    description:
      "The Knight Bus is a purple triple-decker magical bus that transports stranded witches and wizards. It moves at extraordinary speed and magically avoids obstacles while travelling through ordinary streets.",

    ability:
      "Rapidly transports witches and wizards across Britain.",

    owner:
      "Operated as part of wizarding transportation.",

    appearance:
      "Harry Potter and the Prisoner of Azkaban",
  },

  {
    id: "hogwarts-express",
    name: "Hogwarts Express",
    type: "Magical Train",
    category: "transportation",
    image:
      "/images/artifacts/transport/hogwarts-express.png",

    tagline:
      "For generations, the journey to Hogwarts has begun on the same platform.",

    description:
      "The Hogwarts Express is the magical steam train that carries students between King's Cross Station and Hogwarts. Students board the train from Platform Nine and Three-Quarters.",

    ability:
      "Transports Hogwarts students between London and Hogsmeade.",

    owner:
      "Used by Hogwarts School of Witchcraft and Wizardry.",

    appearance:
      "Appears throughout the Harry Potter film series.",
  },

  {
    id: "portkey",
    name: "Portkey",
    type: "Teleportation Object",
    category: "transportation",
    image:
      "/images/artifacts/minor/portkey.png",

    tagline:
      "The most ordinary object may hide an extraordinary destination.",

    description:
      "A Portkey is an ordinary object that has been enchanted to transport anyone touching it to another location. Old and unwanted objects are often chosen so Muggles will ignore them.",

    ability:
      "Instantly transports people to a predetermined destination.",

    owner:
      "Created and regulated by witches and wizards.",

    appearance:
      "Harry Potter and the Goblet of Fire",
  },

  {
    id: "floo-powder",
    name: "Floo Powder",
    type: "Magical Transportation Substance",
    category: "transportation",
    image:
      "/images/artifacts/minor/floo-powder.png",

    tagline:
      "A handful of powder can turn a fireplace into a doorway.",

    description:
      "Floo Powder is a magical powder used to travel through the Floo Network. A witch or wizard throws it into a connected fireplace, steps into the flames and clearly speaks the destination.",

    ability:
      "Allows travel and communication through connected magical fireplaces.",

    owner:
      "Commonly used throughout the wizarding community.",

    appearance:
      "Appears in several Harry Potter films.",
  },


  // ==========================================================
  // 02 — ICONIC MAGICAL ARTIFACTS & TOOLS
  // ==========================================================

  {
    id: "marauders-map",
    name: "Marauder's Map",
    type: "Enchanted Map",
    category: "magical-tools",
    image:
      "/images/artifacts/tools/marauders-map.jpg",

    tagline:
      "A castle has many secrets. This parchment knows almost all of them.",

    description:
      "The Marauder's Map is a magical parchment that reveals the layout of Hogwarts and shows people moving throughout the castle. It also reveals many hidden passages that ordinary maps cannot show.",

    ability:
      "Reveals secret passages and tracks people inside Hogwarts.",

    owner:
      "Created by Moony, Wormtail, Padfoot and Prongs and later used by Harry Potter.",

    appearance:
      "Harry Potter and the Prisoner of Azkaban",
  },

  {
    id: "time-turner",
    name: "Time-Turner",
    type: "Time Manipulation",
    category: "magical-tools",
    image:
      "/images/artifacts/tools/time-turner.avif",

    tagline:
      "A few turns of an hourglass can change what has already happened.",

    description:
      "A Time-Turner is a magical device that allows its wearer to travel backwards through time. Hermione secretly uses one during her third year so she can attend classes taking place at the same time.",

    ability:
      "Allows controlled travel into the past.",

    owner:
      "Temporarily entrusted to Hermione Granger.",

    appearance:
      "Harry Potter and the Prisoner of Azkaban",
  },

  {
    id: "pensieve",
    name: "Pensieve",
    type: "Memory Vessel",
    category: "magical-tools",
    image:
      "/images/artifacts/tools/pensieve.png",

    tagline:
      "Memories fade inside the mind. Here, they can be entered again.",

    description:
      "A Pensieve is a magical basin used to store and examine memories. Extracted memories can be placed inside it and viewed as immersive scenes from the past.",

    ability:
      "Stores memories and allows them to be explored again.",

    owner:
      "A Pensieve is kept in the Headmaster's office at Hogwarts.",

    appearance:
      "Appears prominently in several later Harry Potter films.",
  },

  {
    id: "sorting-hat",
    name: "Sorting Hat",
    type: "Sentient Magical Object",
    category: "magical-tools",
    image:
      "/images/artifacts/tools/sorting-hat.jpg",

    tagline:
      "It sees more than a name. It searches the mind beneath it.",

    description:
      "The Sorting Hat is an ancient magical hat used during the Hogwarts Sorting Ceremony. It examines each student's qualities and thoughts before choosing the Hogwarts house that suits them.",

    ability:
      "Examines a student's qualities and chooses their Hogwarts house.",

    owner:
      "Hogwarts School of Witchcraft and Wizardry.",

    appearance:
      "Appears throughout the Harry Potter film series.",
  },

  {
    id: "goblet-of-fire",
    name: "Goblet of Fire",
    type: "Magical Selection Artifact",
    category: "magical-tools",
    image:
      "/images/artifacts/tools/goblet-of-fire.png",

    tagline:
      "Once a champion is chosen, the magical contract cannot easily be escaped.",

    description:
      "The Goblet of Fire is an ancient magical object used to select champions for the Triwizard Tournament. Students place their names into the Goblet, and at the appointed time it chooses the competitors it considers worthy of representing their schools.",

    ability:
      "Magically selects champions for the Triwizard Tournament and binds those selected to participate.",

    owner:
      "Used during the Triwizard Tournament by the participating wizarding schools.",

    appearance:
      "Harry Potter and the Goblet of Fire",
  },

  {
    id: "deluminator",
    name: "Deluminator",
    type: "Enchanted Device",
    category: "magical-tools",
    image:
      "/images/artifacts/minor/deluminator.png",

    tagline:
      "A small light can become a guide when someone has lost their way.",

    description:
      "The Deluminator is a small magical device created by Albus Dumbledore. It can remove light from nearby sources and later restore it. Dumbledore eventually leaves it to Ron Weasley.",

    ability:
      "Captures and restores light and later helps Ron return to his friends.",

    owner:
      "Albus Dumbledore, later Ron Weasley.",

    appearance:
      "Harry Potter and the Deathly Hallows: Part 1",
  },

  {
    id: "howler",
    name: "Howler",
    type: "Enchanted Letter",
    category: "magical-tools",
    image:
      "/images/artifacts/minor/howler.png",

    tagline:
      "Some messages refuse to be read quietly.",

    description:
      "A Howler is a magical letter used to deliver an angry or urgent message. When opened, it loudly speaks using the sender's voice before destroying itself.",

    ability:
      "Delivers a magically amplified spoken message.",

    owner:
      "Can be sent by witches and wizards.",

    appearance:
      "Harry Potter and the Chamber of Secrets",
  },

  {
    id: "remembrall",
    name: "Remembrall",
    type: "Memory Detector",
    category: "magical-tools",
    image:
      "/images/artifacts/minor/remembrall.png",

    tagline:
      "It can tell you something was forgotten, but not what it was.",

    description:
      "A Remembrall is a small glass sphere filled with magical smoke. The smoke turns red when the person holding it has forgotten something important.",

    ability:
      "Warns its holder when they have forgotten something.",

    owner:
      "Neville Longbottom receives one from his grandmother.",

    appearance:
      "Harry Potter and the Philosopher's Stone",
  },

  {
    id: "sneakoscope",
    name: "Sneakoscope",
    type: "Dark Detector",
    category: "magical-tools",
    image:
      "/images/artifacts/minor/sneakoscope.png",

    tagline:
      "When something untrustworthy is near, silence disappears.",

    description:
      "A Sneakoscope is a magical detector that spins, lights up or whistles when someone untrustworthy is nearby.",

    ability:
      "Warns the owner about suspicious or untrustworthy people nearby.",

    owner:
      "Used by different witches and wizards.",

    appearance:
      "Associated prominently with Harry Potter and the Prisoner of Azkaban.",
  },


  // ==========================================================
  // 03 — THE DEATHLY HALLOWS
  // ==========================================================

  {
    id: "elder-wand",
    name: "The Elder Wand",
    type: "Deathly Hallow",
    category: "deathly-hallows",
    image:
      "/images/artifacts/hallows/elder-wand.jpg",

    tagline:
      "Power follows loyalty, and loyalty does not always follow possession.",

    description:
      "The Elder Wand is a legendary wand believed to possess extraordinary magical power. Its allegiance can change when its true master is defeated.",

    ability:
      "Performs exceptionally powerful magic when loyal to its true master.",

    owner:
      "Its allegiance passes between several witches and wizards.",

    appearance:
      "Central to Harry Potter and the Deathly Hallows.",
  },

  {
    id: "invisibility-cloak",
    name: "Invisibility Cloak",
    type: "Deathly Hallow",
    category: "deathly-hallows",
    image:
      "/images/artifacts/hallows/invisibility-cloak.png",

    tagline:
      "Sometimes the safest way through danger is never to be seen.",

    description:
      "Harry's Invisibility Cloak hides the people beneath it from ordinary sight. Unlike many lesser invisibility cloaks, its magic remains effective over time.",

    ability:
      "Makes anyone beneath the cloak invisible.",

    owner:
      "Passed from James Potter to Harry Potter.",

    appearance:
      "Used throughout the Harry Potter film series.",
  },

  {
    id: "resurrection-stone",
    name: "Resurrection Stone",
    type: "Deathly Hallow",
    category: "deathly-hallows",
    image:
      "/images/artifacts/hallows/resurrection-stone.png",

    tagline:
      "The dead may return to your side, but they do not truly return to life.",

    description:
      "The Resurrection Stone is one of the three Deathly Hallows. It allows its holder to call forth representations of people who have died.",

    ability:
      "Calls forth the presence of deceased loved ones.",

    owner:
      "Eventually comes into the possession of Harry Potter.",

    appearance:
      "Harry Potter and the Deathly Hallows: Part 2",
  },


  // ==========================================================
  // 04 — LEGENDARY & ANCIENT ARTEFACTS
  // ==========================================================

  {
    id: "philosophers-stone",
    name: "Philosopher's Stone",
    type: "Legendary Alchemical Object",
    category: "legendary",
    image:
      "/images/artifacts/legendary/philosophers-stone.png",

    tagline:
      "The promise of endless life can become more dangerous than death itself.",

    description:
      "The Philosopher's Stone is a legendary magical substance created by Nicolas Flamel. It can transform metals into gold and produce the Elixir of Life.",

    ability:
      "Produces the Elixir of Life and can transform metals into gold.",

    owner:
      "Created by Nicolas Flamel.",

    appearance:
      "Harry Potter and the Philosopher's Stone",
  },

  {
    id: "sword-of-gryffindor",
    name: "Sword of Gryffindor",
    type: "Founder Relic",
    category: "legendary",
    image:
      "/images/artifacts/legendary/sword-of-gryffindor.png",

    tagline:
      "A true Gryffindor may find the sword when courage is needed most.",

    description:
      "The Sword of Gryffindor is a goblin-made silver sword belonging to Hogwarts founder Godric Gryffindor. It absorbs substances that make it stronger, including Basilisk venom.",

    ability:
      "Absorbs useful strengthening substances and can destroy Horcruxes after absorbing Basilisk venom.",

    owner:
      "Originally Godric Gryffindor and later kept as an important Hogwarts relic.",

    appearance:
      "Appears in several Harry Potter films.",
  },

  {
    id: "mirror-of-erised",
    name: "Mirror of Erised",
    type: "Enchanted Mirror",
    category: "legendary",
    image:
      "/images/artifacts/legendary/mirror-of-erised.png",

    tagline:
      "It does not show your face. It shows what your heart wants most.",

    description:
      "The Mirror of Erised is an enchanted mirror that reveals the deepest desire of the person standing before it. Different viewers therefore see completely different visions.",

    ability:
      "Shows the viewer their deepest and most desperate desire.",

    owner:
      "Kept at Hogwarts under Albus Dumbledore's protection.",

    appearance:
      "Harry Potter and the Philosopher's Stone",
  },


  // ==========================================================
  // 05 — HORCRUX ARCHIVE
  // ==========================================================

  {
    id: "tom-riddles-diary",
    name: "Tom Riddle's Diary",
    type: "Horcrux",
    category: "horcrux",
    image:
      "/images/artifacts/horcruxes/tom-riddles-diary.png",

    tagline:
      "The pages were empty, but something inside them was waiting.",

    description:
      "Tom Riddle's Diary is an enchanted diary containing a fragment of Voldemort's soul. It can communicate through written messages and manipulate the person who becomes emotionally connected to it.",

    ability:
      "Stores a fragment of Voldemort's soul and can influence its reader.",

    owner:
      "Created by Tom Riddle and later placed in Ginny Weasley's belongings by Lucius Malfoy.",

    appearance:
      "Harry Potter and the Chamber of Secrets",
  },

  {
    id: "gaunts-ring",
    name: "Marvolo Gaunt's Ring",
    type: "Horcrux",
    category: "horcrux",
    image:
      "/images/artifacts/horcruxes/gaunts-ring.png",

    tagline:
      "An old family inheritance carried more than one dangerous secret.",

    description:
      "Marvolo Gaunt's Ring is a family heirloom connected to Voldemort's ancestry. Voldemort transforms the ring into a Horcrux. The ring also contains the Resurrection Stone.",

    ability:
      "Contains a fragment of Voldemort's soul and once held the Resurrection Stone.",

    owner:
      "The Gaunt family, later Tom Riddle.",

    appearance:
      "Harry Potter and the Half-Blood Prince",
  },

  {
    id: "slytherins-locket",
    name: "Salazar Slytherin's Locket",
    type: "Horcrux",
    category: "horcrux",
    image:
      "/images/artifacts/horcruxes/slytherins-locket.png",

    tagline:
      "Some objects preserve memories. Others preserve something much darker.",

    description:
      "Salazar Slytherin's Locket is an ancient heirloom that Voldemort turns into a Horcrux. The locket can negatively affect the emotions of people who carry it for long periods.",

    ability:
      "Contains a fragment of Voldemort's soul and can influence the emotions of its wearer.",

    owner:
      "Originally connected to Salazar Slytherin's family and later used by Voldemort.",

    appearance:
      "Harry Potter and the Deathly Hallows: Part 1",
  },

  {
    id: "hufflepuffs-cup",
    name: "Helga Hufflepuff's Cup",
    type: "Horcrux",
    category: "horcrux",
    image:
      "/images/artifacts/horcruxes/hufflepuffs-cup.png",

    tagline:
      "A founder's treasured relic became a vessel for something terrible.",

    description:
      "Helga Hufflepuff's Cup is a valuable object that once belonged to Hogwarts founder Helga Hufflepuff. Voldemort later transforms the cup into one of his Horcruxes.",

    ability:
      "Contains a fragment of Voldemort's soul.",

    owner:
      "Originally Helga Hufflepuff and later stolen and transformed by Voldemort.",

    appearance:
      "Harry Potter and the Deathly Hallows: Part 2",
  },

  {
    id: "ravenclaws-diadem",
    name: "Rowena Ravenclaw's Diadem",
    type: "Horcrux",
    category: "horcrux",
    image:
      "/images/artifacts/horcruxes/ravenclaws-diadem.png",

    tagline:
      "Wisdom was its promise. Darkness became its hidden burden.",

    description:
      "Rowena Ravenclaw's Diadem is a legendary relic said to increase the wisdom of its wearer. Voldemort eventually finds the lost diadem and transforms it into a Horcrux.",

    ability:
      "Traditionally associated with greater wisdom and later contains a fragment of Voldemort's soul.",

    owner:
      "Originally Rowena Ravenclaw and later hidden by Voldemort.",

    appearance:
      "Harry Potter and the Deathly Hallows: Part 2",
  },

  {
    id: "nagini-horcrux",
    name: "Nagini",
    type: "Living Horcrux",
    category: "horcrux",
    image:
      "/images/artifacts/horcruxes/nagini.png",

    tagline:
      "Not every vessel was made of metal, stone or parchment.",

    description:
      "Nagini is Voldemort's enormous snake and one of his closest companions. She becomes a living Horcrux containing part of Voldemort's soul.",

    ability:
      "Carries a fragment of Voldemort's soul while remaining a living creature.",

    owner:
      "Lord Voldemort.",

    appearance:
      "Appears prominently in the later Harry Potter films.",
  },

  {
    id: "harry-accidental-horcrux",
    name: "Harry Potter",
    type: "Accidental Horcrux",
    category: "horcrux",
    image:
      "/images/artifacts/horcruxes/harry-scar.png",

    tagline:
      "The final vessel was never meant to exist.",

    description:
      "When Voldemort's killing curse fails against the infant Harry Potter, a fragment of Voldemort's damaged soul attaches itself to Harry. Harry grows up without knowing that he carries this connection.",

    ability:
      "Carries an unintended fragment of Voldemort's soul, creating a magical connection between them.",

    owner:
      "Not an owned object. Harry becomes an accidental Horcrux.",

    appearance:
      "The connection develops throughout the Harry Potter film series.",
  },


  // ==========================================================
  // 06 — DARK & RESTRICTED OBJECTS
  // ==========================================================

  {
    id: "hand-of-glory",
    name: "Hand of Glory",
    type: "Dark Magical Object",
    category: "dark-objects",
    image:
      "/images/artifacts/minor/hand-of-glory.png",

    tagline:
      "In complete darkness, its light belongs to only one person.",

    description:
      "The Hand of Glory is a sinister magical object shaped from a preserved hand. When a candle is placed within it, the light can be seen only by the person carrying the hand.",

    ability:
      "Provides light that is visible only to its holder.",

    owner:
      "Associated with Borgin and Burkes and later Draco Malfoy.",

    appearance:
      "Seen in connection with dark magical objects in the Harry Potter films.",
  },

  {
    id: "vanishing-cabinet-hogwarts",
    name: "Vanishing Cabinet — Hogwarts",
    type: "Linked Magical Passage",
    category: "dark-objects",
    image:
      "/images/artifacts/dark/vanishing-cabinet.png",

    tagline:
      "One cabinet stood inside Hogwarts. Its destination stood somewhere much darker.",

    description:
      "The Vanishing Cabinet at Hogwarts is one half of a magically connected pair. Draco Malfoy repairs it so people can secretly travel between Hogwarts and Borgin and Burkes.",

    ability:
      "Creates a magical passage to its connected cabinet.",

    owner:
      "Located inside Hogwarts during the events of Harry's sixth year.",

    appearance:
      "Harry Potter and the Half-Blood Prince",
  },

  {
    id: "vanishing-cabinet-borgin",
    name: "Vanishing Cabinet — Borgin and Burkes",
    type: "Linked Magical Passage",
    category: "dark-objects",
    image:
      "/images/artifacts/dark/vanishing-borgin.png",

    tagline:
      "Two doors. Two places. One hidden path between them.",

    description:
      "The second Vanishing Cabinet is located inside Borgin and Burkes in Knockturn Alley. When the Hogwarts cabinet is repaired, the pair forms a secret route between the shop and the school.",

    ability:
      "Connects directly with the matching Vanishing Cabinet at Hogwarts.",

    owner:
      "Located inside Borgin and Burkes.",

    appearance:
      "Harry Potter and the Half-Blood Prince",
  },
];

export default artifactData;