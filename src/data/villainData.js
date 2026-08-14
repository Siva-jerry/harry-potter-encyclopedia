// ============================================================
// DARK ARTS — VILLAINS & ANTAGONISTS ARCHIVE
// ============================================================

const villainData = [
  // ==========================================================
  // 01 — MAIN ANTAGONISTS
  // ==========================================================

  {
    id: "lord-voldemort",
    number: "01",
    name: "Lord Voldemort",
    realName: "Tom Marvolo Riddle",
    title: "The Dark Lord",
    category: "main",
    classification: "Dark Wizard",
    image: "/images/villains/main/voldemort.jpg",

    tagline:
      "A wizard who feared death so deeply that he tore apart his own soul.",

    description:
      "Lord Voldemort, born Tom Marvolo Riddle, is the primary dark wizard of Harry Potter's era. Brilliant, powerful and obsessed with immortality, he builds an army of followers known as Death Eaters and attempts to control the British wizarding world.",

    affiliation: "Death Eaters",
    threat: "Extreme",
    status: "Deceased",

    knownFor: [
      "Creating multiple Horcruxes",
      "Leading the Death Eaters",
      "Attempting to kill Harry Potter",
      "Taking control of the Ministry of Magic",
    ],
  },

  {
    id: "gellert-grindelwald",
    number: "02",
    name: "Gellert Grindelwald",
    realName: "Gellert Grindelwald",
    title: "Dark Revolutionary",
    category: "main",
    classification: "Dark Wizard",
    image: "/images/villains/main/grindelwald.jpg",

    tagline:
      "He believed wizarding domination could be justified for the greater good.",

    description:
      "Gellert Grindelwald was one of the most dangerous dark wizards before Voldemort. He believed witches and wizards should rule over non-magical people and built a powerful movement around the idea of acting 'for the greater good.'",

    affiliation: "Grindelwald's Movement",
    threat: "Extreme",
    status: "Deceased",

    knownFor: [
      "Possessing the Elder Wand",
      "Building a global dark movement",
      "His friendship and conflict with Albus Dumbledore",
      "Being imprisoned at Nurmengard",
    ],
  },

  {
    id: "dolores-umbridge",
    number: "03",
    name: "Dolores Umbridge",
    realName: "Dolores Jane Umbridge",
    title: "High Inquisitor",
    category: "main",
    classification: "Ministry Official",
    image: "/images/villains/main/dolores-umbridge.png",

    tagline:
      "Cruelty does not always arrive wearing black.",

    description:
      "Dolores Umbridge is a Ministry official sent to Hogwarts when the government refuses to accept Voldemort's return. Behind her polite appearance and love of order is a cruel authoritarian who uses painful punishments and increasingly controls the school.",

    affiliation: "Ministry of Magic",
    threat: "High",
    status: "Imprisoned",

    knownFor: [
      "Becoming Hogwarts High Inquisitor",
      "Using the Blood Quill",
      "Leading the Inquisitorial Squad",
      "Persecuting Muggle-born witches and wizards",
    ],
  },

  // ==========================================================
  // 02 — DEATH EATERS
  // ==========================================================

  {
    id: "bellatrix-lestrange",
    number: "04",
    name: "Bellatrix Lestrange",
    title: "The Dark Lord's Lieutenant",
    category: "death-eaters",
    classification: "Dark Witch",
    image:
      "/images/villains/death-eaters/bellatrix-lestrange.png",

    tagline:
      "Few followers served Voldemort with greater devotion.",

    description:
      "Bellatrix Lestrange is one of Voldemort's most fanatically loyal followers. She is a dangerous duelist who enjoys cruelty and remains devoted to the Dark Lord even after years of imprisonment in Azkaban.",

    affiliation: "Death Eaters",
    threat: "Extreme",
    status: "Deceased",

    knownFor: [
      "Escaping from Azkaban",
      "Killing Sirius Black",
      "Torturing the Longbottom family",
      "Killing Dobby",
    ],
  },

  {
    id: "lucius-malfoy",
    number: "05",
    name: "Lucius Malfoy",
    title: "Death Eater Aristocrat",
    category: "death-eaters",
    classification: "Dark Wizard",
    image:
      "/images/villains/death-eaters/lucius-malfoy.png",

    tagline:
      "Influence can sometimes be as dangerous as a wand.",

    description:
      "Lucius Malfoy is a wealthy pure-blood wizard and an influential supporter of Voldemort. He uses his wealth and political connections to influence the Ministry while secretly remaining connected to the Death Eaters.",

    affiliation: "Death Eaters",
    threat: "High",
    status: "Survived",

    knownFor: [
      "Serving Voldemort",
      "Influencing Ministry officials",
      "Giving Tom Riddle's diary to Ginny Weasley",
      "Participating in the Department of Mysteries battle",
    ],
  },

  {
    id: "peter-pettigrew",
    number: "06",
    name: "Peter Pettigrew",
    title: "Wormtail",
    category: "death-eaters",
    classification: "Wizard / Animagus",
    image:
      "/images/villains/death-eaters/peter-pettigrew.png",

    tagline:
      "Fear turned a friend into a betrayer.",

    description:
      "Peter Pettigrew was once a close friend of James Potter, Sirius Black and Remus Lupin. He secretly joined Voldemort, revealed the Potters' hiding place and allowed Sirius to be blamed for his crimes.",

    affiliation: "Death Eaters",
    threat: "High",
    status: "Deceased",

    knownFor: [
      "Betraying James and Lily Potter",
      "Framing Sirius Black",
      "Living as Scabbers",
      "Helping Voldemort regain his body",
    ],
  },

  {
    id: "barty-crouch-jr",
    number: "07",
    name: "Barty Crouch Jr.",
    title: "The Hidden Servant",
    category: "death-eaters",
    classification: "Dark Wizard",
    image:
      "/images/villains/death-eaters/barty-crouch-jr.png",

    tagline:
      "For an entire school year, the enemy was already inside Hogwarts.",

    description:
      "Barty Crouch Jr. is a devoted Death Eater who escapes imprisonment and disguises himself as Alastor Moody. He secretly manipulates the Triwizard Tournament so Harry reaches Voldemort.",

    affiliation: "Death Eaters",
    threat: "Extreme",
    status: "Incapacitated",

    knownFor: [
      "Impersonating Mad-Eye Moody",
      "Manipulating the Triwizard Tournament",
      "Teaching at Hogwarts while disguised",
      "Delivering Harry to Voldemort's trap",
    ],
  },

  {
    id: "amycus-carrow",
    number: "08",
    name: "Amycus Carrow",
    title: "Dark Arts Professor",
    category: "death-eaters",
    classification: "Dark Wizard",
    image:
      "/images/villains/death-eaters/amycus-carrow.png",

    tagline:
      "When Hogwarts fell under Voldemort's control, cruelty entered the classroom.",

    description:
      "Amycus Carrow is a Death Eater installed at Hogwarts during Voldemort's control of the wizarding world. He teaches the Dark Arts and supports the brutal punishment of students.",

    affiliation: "Death Eaters",
    threat: "High",
    status: "Defeated",

    knownFor: [
      "Teaching Dark Arts",
      "Controlling Hogwarts",
      "Punishing students",
      "Serving Voldemort",
    ],
  },

  {
    id: "alecto-carrow",
    number: "09",
    name: "Alecto Carrow",
    title: "Muggle Studies Professor",
    category: "death-eaters",
    classification: "Dark Witch",
    image:
      "/images/villains/death-eaters/alecto-carrow.png",

    tagline:
      "Education became propaganda when the Carrows controlled Hogwarts.",

    description:
      "Alecto Carrow is Amycus Carrow's sister and a Death Eater. During Voldemort's control of Hogwarts, she teaches a corrupted version of Muggle Studies designed to promote hatred toward Muggles.",

    affiliation: "Death Eaters",
    threat: "High",
    status: "Defeated",

    knownFor: [
      "Teaching propaganda at Hogwarts",
      "Supporting Voldemort",
      "Punishing students",
      "Working alongside Amycus Carrow",
    ],
  },

  {
    id: "walden-macnair",
    number: "10",
    name: "Walden Macnair",
    title: "Executioner",
    category: "death-eaters",
    classification: "Dark Wizard",
    image:
      "/images/villains/death-eaters/walden-macnair.png",

    tagline:
      "An executioner's axe concealed the loyalty of a Death Eater.",

    description:
      "Walden Macnair is a Death Eater who also works for the Ministry as an executioner. He is sent to Hogwarts to execute Buckbeak and later openly returns to Voldemort's service.",

    affiliation: "Death Eaters",
    threat: "High",
    status: "Defeated",

    knownFor: [
      "Serving as a Ministry executioner",
      "Being assigned to execute Buckbeak",
      "Serving Voldemort",
    ],
  },

  {
    id: "fenrir-greyback",
    number: "11",
    name: "Fenrir Greyback",
    title: "Werewolf Hunter",
    category: "death-eaters",
    classification: "Werewolf",
    image:
      "/images/villains/death-eaters/fenrir-greyback.png",

    tagline:
      "He did not fear the monster within him. He embraced it.",

    description:
      "Fenrir Greyback is a violent werewolf who allies himself with Voldemort. Unlike many werewolves, he deliberately targets people and attempts to spread lycanthropy through fear and violence.",

    affiliation: "Voldemort's Forces",
    threat: "Extreme",
    status: "Defeated",

    knownFor: [
      "Targeting children",
      "Attacking Remus Lupin as a child",
      "Serving Voldemort",
      "Participating in the Battle of Hogwarts",
    ],
  },

  {
    id: "antonin-dolohov",
    number: "12",
    name: "Antonin Dolohov",
    title: "Death Eater Duelist",
    category: "death-eaters",
    classification: "Dark Wizard",
    image:
      "/images/villains/death-eaters/antonin-dolohov.png",

    tagline:
      "A veteran Death Eater feared for his skill in battle.",

    description:
      "Antonin Dolohov is a powerful and experienced Death Eater. He participates in several major conflicts during Voldemort's return and is considered a dangerous magical duelist.",

    affiliation: "Death Eaters",
    threat: "High",
    status: "Defeated",

    knownFor: [
      "Escaping Azkaban",
      "Fighting at the Department of Mysteries",
      "Serving Voldemort",
      "Participating in the Battle of Hogwarts",
    ],
  },

  {
    id: "thorfinn-rowle",
    number: "13",
    name: "Thorfinn Rowle",
    title: "Death Eater",
    category: "death-eaters",
    classification: "Dark Wizard",
    image:
      "/images/villains/death-eaters/thorfinn-rowle.png",

    tagline:
      "One of the many masked figures who carried Voldemort's war into Britain.",

    description:
      "Thorfinn Rowle is a Death Eater involved in Voldemort's campaign against the wizarding world. He participates in violent attacks and searches for Harry and his allies.",

    affiliation: "Death Eaters",
    threat: "High",
    status: "Unknown",

    knownFor: [
      "Serving Voldemort",
      "Participating in Death Eater attacks",
      "Hunting Voldemort's enemies",
    ],
  },

  {
    id: "corban-yaxley",
    number: "14",
    name: "Corban Yaxley",
    title: "Ministry Infiltrator",
    category: "death-eaters",
    classification: "Dark Wizard",
    image:
      "/images/villains/death-eaters/corban-yaxley.png",

    tagline:
      "The Ministry did not fall from outside. Voldemort placed followers within it.",

    description:
      "Corban Yaxley is a Death Eater who helps Voldemort take control of the Ministry of Magic. He becomes an important figure within the new regime and assists in hunting its enemies.",

    affiliation: "Death Eaters / Ministry",
    threat: "High",
    status: "Defeated",

    knownFor: [
      "Infiltrating the Ministry",
      "Serving Voldemort",
      "Supporting the anti-Muggle-born regime",
    ],
  },

  {
    id: "pius-thicknesse",
    number: "15",
    name: "Pius Thicknesse",
    title: "Controlled Minister",
    category: "death-eaters",
    classification: "Ministry Official",
    image:
      "/images/villains/death-eaters/pius-thicknesse.png",

    tagline:
      "The Minister remained in office, but the power behind him had changed.",

    description:
      "Pius Thicknesse becomes Minister for Magic after the Ministry falls under Voldemort's influence. He operates while controlled by the Imperius Curse and becomes the public face of the corrupted government.",

    affiliation: "Ministry under Voldemort",
    threat: "Moderate",
    status: "Survived",

    knownFor: [
      "Serving as Minister for Magic",
      "Being controlled by the Imperius Curse",
      "Representing Voldemort's Ministry regime",
    ],
  },

  // ==========================================================
  // 03 — HOGWARTS ANTAGONISTS
  // ==========================================================

  {
    id: "quirinus-quirrell",
    number: "16",
    name: "Quirinus Quirrell",
    title: "Professor Quirrell",
    category: "hogwarts",
    classification: "Professor",
    image:
      "/images/villains/hogwarts/quirinus-quirrell.png",

    tagline:
      "The frightened professor was hiding something far more dangerous.",

    description:
      "Professor Quirrell teaches Defence Against the Dark Arts during Harry's first year. His nervous appearance hides the fact that Voldemort is using him in an attempt to obtain the Philosopher's Stone.",

    affiliation: "Voldemort",
    threat: "High",
    status: "Deceased",

    knownFor: [
      "Teaching Defence Against the Dark Arts",
      "Serving Voldemort",
      "Attempting to steal the Philosopher's Stone",
    ],
  },

  {
    id: "gilderoy-lockhart",
    number: "17",
    name: "Gilderoy Lockhart",
    title: "Celebrity Professor",
    category: "hogwarts",
    classification: "Wizard / Professor",
    image:
      "/images/villains/hogwarts/gilderoy-lockhart.png",

    tagline:
      "His greatest adventures belonged to other people.",

    description:
      "Gilderoy Lockhart is a famous author who becomes Hogwarts' Defence Against the Dark Arts professor. His heroic reputation is built by stealing the achievements of other witches and wizards and erasing their memories.",

    affiliation: "Hogwarts",
    threat: "Moderate",
    status: "Hospitalized",

    knownFor: [
      "Writing famous adventure books",
      "Using Memory Charms",
      "Stealing other people's achievements",
      "Teaching at Hogwarts",
    ],
  },

  {
    id: "draco-malfoy",
    number: "18",
    name: "Draco Malfoy",
    title: "Slytherin Rival",
    category: "hogwarts",
    classification: "Student / Death Eater",
    image:
      "/images/villains/hogwarts/draco-malfoy.png",

    tagline:
      "A school rivalry eventually became something far more dangerous.",

    description:
      "Draco Malfoy is Harry Potter's long-time Hogwarts rival. Raised within a family that supports pure-blood superiority, Draco later receives a dangerous mission from Voldemort and becomes increasingly conflicted by the world around him.",

    affiliation: "Slytherin / Malfoy Family",
    threat: "Variable",
    status: "Survived",

    knownFor: [
      "Rivalry with Harry Potter",
      "Joining the Death Eaters",
      "Repairing the Vanishing Cabinet",
      "Being ordered to kill Dumbledore",
    ],
  },

  {
    id: "vincent-crabbe",
    number: "19",
    name: "Vincent Crabbe",
    title: "Slytherin Student",
    category: "hogwarts",
    classification: "Student",
    image:
      "/images/villains/hogwarts/vincent-crabbe.png",

    tagline:
      "Loyalty to Draco eventually led him toward dangerous magic.",

    description:
      "Vincent Crabbe is a Slytherin student commonly seen alongside Draco Malfoy and Gregory Goyle. He participates in bullying other students and later becomes willing to use dangerous dark magic.",

    affiliation: "Slytherin",
    threat: "High",
    status: "Deceased",

    knownFor: [
      "Following Draco Malfoy",
      "Bullying Hogwarts students",
      "Using Fiendfyre",
    ],
  },

  {
    id: "gregory-goyle",
    number: "20",
    name: "Gregory Goyle",
    title: "Slytherin Student",
    category: "hogwarts",
    classification: "Student",
    image:
      "/images/villains/hogwarts/gregory-goyle.png",

    tagline:
      "For years he stood beside Draco whenever conflict appeared.",

    description:
      "Gregory Goyle is a Slytherin student and one of Draco Malfoy's closest companions. He frequently supports Draco during conflicts with Harry, Ron and Hermione.",

    affiliation: "Slytherin",
    threat: "Moderate",
    status: "Survived",

    knownFor: [
      "Following Draco Malfoy",
      "Bullying other students",
      "Supporting Slytherin rivals",
    ],
  },

  {
    id: "pansy-parkinson",
    number: "21",
    name: "Pansy Parkinson",
    title: "Slytherin Student",
    category: "hogwarts",
    classification: "Student",
    image:
      "/images/villains/hogwarts/pansy-parkinson.png",

    tagline:
      "When Hogwarts faced its final choice, fear shaped her decision.",

    description:
      "Pansy Parkinson is a Slytherin student and supporter of Draco Malfoy. During the Battle of Hogwarts, she openly suggests surrendering Harry Potter to Voldemort.",

    affiliation: "Slytherin",
    threat: "Low",
    status: "Survived",

    knownFor: [
      "Supporting Draco Malfoy",
      "Opposing Harry and his friends",
      "Calling for Harry's surrender",
    ],
  },

  // ==========================================================
  // 04 — THE DURSLEYS
  // ==========================================================

  {
    id: "vernon-dursley",
    number: "22",
    name: "Vernon Dursley",
    title: "Harry's Uncle",
    category: "dursleys",
    classification: "Muggle",
    image:
      "/images/villains/dursleys/vernon-dursley.png",

    tagline:
      "At Number Four, anything unusual was considered unacceptable.",

    description:
      "Vernon Dursley is Harry's uncle and strongly dislikes magic. He attempts to prevent Harry from learning about the wizarding world and treats him harshly throughout his childhood.",

    affiliation: "Dursley Family",
    threat: "Non-Magical",
    status: "Survived",

    knownFor: [
      "Raising Harry at Privet Drive",
      "Rejecting magic",
      "Trying to prevent Harry from attending Hogwarts",
    ],
  },

  {
    id: "petunia-dursley",
    number: "23",
    name: "Petunia Dursley",
    title: "Harry's Aunt",
    category: "dursleys",
    classification: "Muggle",
    image:
      "/images/villains/dursleys/petunia-dursley.png",

    tagline:
      "Her rejection of magic began long before Harry arrived.",

    description:
      "Petunia Dursley is Lily Potter's sister and Harry's aunt. Her complicated feelings about her magical sister contribute to her resentment of Harry and the wizarding world.",

    affiliation: "Dursley Family",
    threat: "Non-Magical",
    status: "Survived",

    knownFor: [
      "Being Lily Potter's sister",
      "Raising Harry",
      "Hiding knowledge of the wizarding world",
    ],
  },

  {
    id: "dudley-dursley",
    number: "24",
    name: "Dudley Dursley",
    title: "Harry's Cousin",
    category: "dursleys",
    classification: "Muggle",
    image:
      "/images/villains/dursleys/dudley-dursley.png",

    tagline:
      "A childhood bully who eventually began to see Harry differently.",

    description:
      "Dudley Dursley is Harry's cousin. Spoiled by his parents, he bullies Harry throughout much of their childhood, although his attitude begins to change as he grows older.",

    affiliation: "Dursley Family",
    threat: "Non-Magical",
    status: "Survived",

    knownFor: [
      "Bullying Harry during childhood",
      "Encountering Dementors",
      "Eventually showing respect toward Harry",
    ],
  },

  {
    id: "aunt-marge",
    number: "25",
    name: "Aunt Marge",
    title: "Vernon's Sister",
    category: "dursleys",
    classification: "Muggle",
    image:
      "/images/villains/dursleys/aunt-marge.png",

    tagline:
      "One cruel dinner conversation ended high above Privet Drive.",

    description:
      "Marjorie Dursley, commonly called Aunt Marge, is Vernon Dursley's sister. Her repeated insults toward Harry and his parents cause Harry to lose control of his magic and accidentally inflate her.",

    affiliation: "Dursley Family",
    threat: "Non-Magical",
    status: "Survived",

    knownFor: [
      "Insulting Harry's parents",
      "Visiting Privet Drive",
      "Being accidentally inflated by Harry",
    ],
  },

  // ==========================================================
  // 05 — SECONDARY ANTAGONISTS
  // ==========================================================

  {
    id: "rita-skeeter",
    number: "26",
    name: "Rita Skeeter",
    title: "Daily Prophet Journalist",
    category: "secondary",
    classification: "Journalist / Animagus",
    image:
      "/images/villains/secondary/rita-skeeter.png",

    tagline:
      "The truth was useful only when it made a better headline.",

    description:
      "Rita Skeeter is a sensationalist journalist who regularly exaggerates or manipulates stories. Her articles damage reputations and frequently turn public opinion against the people she writes about.",

    affiliation: "Daily Prophet",
    threat: "Social",
    status: "Survived",

    knownFor: [
      "Sensational journalism",
      "Writing misleading articles",
      "Being an unregistered Animagus",
    ],
  },

  {
    id: "cornelius-fudge",
    number: "27",
    name: "Cornelius Fudge",
    title: "Minister for Magic",
    category: "secondary",
    classification: "Ministry Official",
    image:
      "/images/villains/secondary/cornelius-fudge.png",

    tagline:
      "Sometimes refusing to believe a danger gives it time to grow.",

    description:
      "Cornelius Fudge serves as Minister for Magic during Voldemort's return. Afraid of losing political power, he refuses to accept warnings about the Dark Lord and supports a campaign against Harry and Dumbledore.",

    affiliation: "Ministry of Magic",
    threat: "Political",
    status: "Survived",

    knownFor: [
      "Serving as Minister for Magic",
      "Denying Voldemort's return",
      "Opposing Harry and Dumbledore",
    ],
  },

  {
    id: "scabior",
    number: "28",
    name: "Scabior",
    title: "Snatcher",
    category: "secondary",
    classification: "Wizard / Bounty Hunter",
    image:
      "/images/villains/secondary/scabior.png",

    tagline:
      "When the Ministry began hunting people, some followed the reward.",

    description:
      "Scabior is a Snatcher who hunts fugitives during Voldemort's control of Britain. His group captures Harry, Ron and Hermione and takes them to Malfoy Manor.",

    affiliation: "Snatchers",
    threat: "High",
    status: "Unknown",

    knownFor: [
      "Hunting fugitives",
      "Capturing Harry, Ron and Hermione",
      "Working during Voldemort's regime",
    ],
  },

  {
    id: "snatchers",
    number: "29",
    name: "The Snatchers",
    title: "Bounty Hunters",
    category: "secondary",
    classification: "Wizarding Faction",
    image:
      "/images/villains/secondary/snatchers.png",

    tagline:
      "The fall of law created a new profession: hunting people.",

    description:
      "Snatchers are groups of bounty hunters who capture Muggle-borns, fugitives and people avoiding Voldemort's Ministry. They deliver prisoners to the authorities or Death Eaters in exchange for rewards.",

    affiliation: "Voldemort's Regime",
    threat: "High",
    status: "Disbanded",

    knownFor: [
      "Hunting fugitives",
      "Capturing Muggle-borns",
      "Working for rewards",
      "Supporting Voldemort's regime",
    ],
  },

  // ==========================================================
  // 06 — DARK CREATURE THREATS
  // ==========================================================

  {
    id: "aragog",
    number: "30",
    name: "Aragog",
    title: "Acromantula Patriarch",
    category: "threats",
    classification: "Acromantula",
    image:
      "/images/villains/threats/aragog.png",

    tagline:
      "Hagrid trusted him. His children did not share that friendship.",

    description:
      "Aragog is a gigantic intelligent Acromantula living in the Forbidden Forest. Although he respects Hagrid, he does not prevent his colony from attempting to eat Harry and Ron.",

    affiliation: "Acromantula Colony",
    threat: "Extreme",
    status: "Deceased",

    knownFor: [
      "Living in the Forbidden Forest",
      "Being raised by Hagrid",
      "Leading a large Acromantula colony",
    ],
  },

  {
    id: "acromantulas",
    number: "31",
    name: "Acromantulas",
    title: "Forbidden Forest Colony",
    category: "threats",
    classification: "Magical Creature",
    image:
      "/images/villains/threats/acromantulas.png",

    tagline:
      "Deep inside the forest, thousands of eyes watched from the darkness.",

    description:
      "Acromantulas are enormous magical spiders capable of human speech. A large colony lives within the Forbidden Forest and becomes extremely dangerous to anyone entering its territory.",

    affiliation: "Forbidden Forest",
    threat: "Extreme",
    status: "Active Species",

    knownFor: [
      "Human speech",
      "Living in large colonies",
      "Hunting humans",
      "Participating in the Battle of Hogwarts",
    ],
  },
];

export default villainData;