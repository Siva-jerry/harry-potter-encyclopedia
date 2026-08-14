import "./Characters.css";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Link } from "react-router-dom";

import {
  FiArrowUpRight,
  FiSearch,
  FiX,
} from "react-icons/fi";

import MagicalBackground
  from "../../components/MagicalBackground/MagicalBackground";


/* =========================================================
   CHARACTER DATA
========================================================= */

const characters = [

  /* =========================
     MAIN TRIO
  ========================= */

  {
    id: "harry-potter",
    name: "Harry Potter",
    category: "Main Trio",
    group: "Gryffindor",
    role: "The Boy Who Lived",
    image: "/images/characters/harry-potter.jpg",
    description:
      "A young wizard who survived Voldemort's attack as a baby and later became one of the most important people in the fight against him.",
  },

  {
    id: "hermione-granger",
    name: "Hermione Granger",
    category: "Main Trio",
    group: "Gryffindor",
    role: "Student",
    image: "/images/characters/hermione-granger.jpg",
    description:
      "A brilliant and hardworking witch whose knowledge and quick thinking repeatedly help Harry and Ron.",
  },

  {
    id: "ron-weasley",
    name: "Ron Weasley",
    category: "Main Trio",
    group: "Gryffindor",
    role: "Student",
    image: "/images/characters/ron-weasley.jpg",
    description:
      "Harry's best friend and a loyal member of the Weasley family who stands beside his friends through dangerous times.",
  },


  /* =========================
     GRYFFINDOR
  ========================= */

  {
    id: "neville-longbottom",
    name: "Neville Longbottom",
    category: "Students",
    group: "Gryffindor",
    role: "Student",
    image: "/images/characters/neville-longbottom.jpg",
    description:
      "A shy student who grows into a courageous young wizard and becomes an important defender of Hogwarts.",
  },

  {
    id: "ginny-weasley",
    name: "Ginny Weasley",
    category: "Students",
    group: "Gryffindor",
    role: "Student",
    image: "/images/characters/ginny-weasley.jpg",
    description:
      "Ron's younger sister, a talented witch and Quidditch player who becomes an important member of Dumbledore's Army.",
  },

  {
    id: "fred-weasley",
    name: "Fred Weasley",
    category: "Students",
    group: "Gryffindor",
    role: "Student · Inventor",
    image: "/images/characters/fred-weasley.jpg",
    description:
      "One of the Weasley twins, famous for magical jokes, inventions and causing trouble with his brother George.",
  },

  {
    id: "george-weasley",
    name: "George Weasley",
    category: "Students",
    group: "Gryffindor",
    role: "Student · Inventor",
    image: "/images/characters/george-weasley.jpg",
    description:
      "Fred's twin brother and partner in magical mischief, later helping create Weasleys' Wizard Wheezes.",
  },

  {
    id: "percy-weasley",
    name: "Percy Weasley",
    category: "Students",
    group: "Gryffindor",
    role: "Prefect",
    image: "/images/characters/percy-weasley.jpg",
    description:
      "An ambitious and serious member of the Weasley family who becomes strongly focused on his Ministry career.",
  },

  {
    id: "seamus-finnigan",
    name: "Seamus Finnigan",
    category: "Students",
    group: "Gryffindor",
    role: "Student",
    image: "/images/characters/seamus-finnigan.jpg",
    description:
      "A Gryffindor student in Harry's year who eventually helps defend Hogwarts against Voldemort's forces.",
  },

  {
    id: "dean-thomas",
    name: "Dean Thomas",
    category: "Students",
    group: "Gryffindor",
    role: "Student",
    image: "/images/characters/dean-thomas.jpg",
    description:
      "A friendly Gryffindor student who joins Dumbledore's Army and later fights against Voldemort.",
  },

  {
    id: "lavender-brown",
    name: "Lavender Brown",
    category: "Students",
    group: "Gryffindor",
    role: "Student",
    image: "/images/characters/lavender-brown.jpg",
    description:
      "A Gryffindor student who enjoys Divination and later has a romantic relationship with Ron.",
  },

  {
    id: "cormac-mclaggen",
    name: "Cormac McLaggen",
    category: "Students",
    group: "Gryffindor",
    role: "Student",
    image: "/images/characters/cormac-mclaggen.jpg",
    description:
      "A confident and competitive Gryffindor who tries to earn a place on the house Quidditch team.",
  },

  {
    id: "oliver-wood",
    name: "Oliver Wood",
    category: "Students",
    group: "Gryffindor",
    role: "Quidditch Captain",
    image: "/images/characters/oliver-wood.jpg",
    description:
      "The passionate captain and Keeper of the Gryffindor Quidditch team during Harry's early Hogwarts years.",
  },

  {
    id: "colin-creevey",
    name: "Colin Creevey",
    category: "Students",
    group: "Gryffindor",
    role: "Student",
    image: "/images/characters/colin-creevey.jpg",
    description:
      "A younger Gryffindor who greatly admires Harry and loves taking magical photographs.",
  },

  {
    id: "parvati-patil",
    name: "Parvati Patil",
    category: "Students",
    group: "Gryffindor",
    role: "Student",
    image: "/images/characters/parvati-patil.jpg",
    description:
      "A Gryffindor student, Padma's twin sister and later a member of Dumbledore's Army.",
  },


  /* =========================
     SLYTHERIN
  ========================= */

  {
    id: "draco-malfoy",
    name: "Draco Malfoy",
    category: "Students",
    group: "Slytherin",
    role: "Student",
    image: "/images/characters/draco-malfoy.jpg",
    description:
      "Harry's school rival, raised in a wealthy pure-blood family whose beliefs strongly influence his childhood.",
  },

  {
    id: "vincent-crabbe",
    name: "Vincent Crabbe",
    category: "Students",
    group: "Slytherin",
    role: "Student",
    image: "/images/characters/vincent-crabbe.jpg",
    description:
      "A Slytherin student and one of Draco Malfoy's closest companions.",
  },

  {
    id: "gregory-goyle",
    name: "Gregory Goyle",
    category: "Students",
    group: "Slytherin",
    role: "Student",
    image: "/images/characters/gregory-goyle.jpg",
    description:
      "A physically strong Slytherin student who usually stays close to Draco and Crabbe.",
  },

  {
    id: "pansy-parkinson",
    name: "Pansy Parkinson",
    category: "Students",
    group: "Slytherin",
    role: "Student",
    image: "/images/characters/pansy-parkinson.jpg",
    description:
      "A Slytherin student who is close to Draco and often behaves cruelly toward Harry and his friends.",
  },

  {
    id: "blaise-zabini",
    name: "Blaise Zabini",
    category: "Students",
    group: "Slytherin",
    role: "Student",
    image: "/images/characters/blaise-zabini.jpg",
    description:
      "A wealthy Slytherin student in Harry's year who becomes part of Professor Slughorn's Slug Club.",
  },


  /* =========================
     RAVENCLAW
  ========================= */

  {
    id: "luna-lovegood",
    name: "Luna Lovegood",
    category: "Students",
    group: "Ravenclaw",
    role: "Student",
    image: "/images/characters/luna-lovegood.jpg",
    description:
      "A kind and unusual witch whose loyalty, courage and open mind make her one of Harry's trusted friends.",
  },

  {
    id: "cho-chang",
    name: "Cho Chang",
    category: "Students",
    group: "Ravenclaw",
    role: "Student · Quidditch Player",
    image: "/images/characters/cho-chang.jpg",
    description:
      "A Ravenclaw student and talented Quidditch player for whom Harry develops romantic feelings.",
  },

  {
    id: "padma-patil",
    name: "Padma Patil",
    category: "Students",
    group: "Ravenclaw",
    role: "Student",
    image: "/images/characters/padma-patil.jpg",
    description:
      "Parvati's twin sister and a Ravenclaw student who attends the Yule Ball with Ron.",
  },


  /* =========================
     HUFFLEPUFF
  ========================= */

  {
    id: "cedric-diggory",
    name: "Cedric Diggory",
    category: "Students",
    group: "Hufflepuff",
    role: "Triwizard Champion",
    image: "/images/characters/cedric-diggory.jpg",
    description:
      "A respected and talented Hogwarts student chosen to represent the school in the Triwizard Tournament.",
  },

  {
    id: "hannah-abbott",
    name: "Hannah Abbott",
    category: "Students",
    group: "Hufflepuff",
    role: "Student",
    image: "/images/characters/hannah-abbott.jpg",
    description:
      "A Hufflepuff student in Harry's year who later becomes a member of Dumbledore's Army.",
  },

  {
    id: "justin-finch-fletchley",
    name: "Justin Finch-Fletchley",
    category: "Students",
    group: "Hufflepuff",
    role: "Student",
    image: "/images/characters/justin-finch-fletchley.jpg",
    description:
      "A Muggle-born Hufflepuff student who later joins Dumbledore's Army.",
  },


  /* =========================
     HOGWARTS STAFF
  ========================= */

  {
    id: "albus-dumbledore",
    name: "Albus Dumbledore",
    category: "Hogwarts Staff",
    group: "Hogwarts",
    role: "Headmaster",
    image: "/images/characters/albus-dumbledore.jpg",
    description:
      "The wise and powerful headmaster of Hogwarts who becomes one of Harry's most important mentors.",
  },

  {
    id: "minerva-mcgonagall",
    name: "Minerva McGonagall",
    category: "Hogwarts Staff",
    group: "Gryffindor",
    role: "Transfiguration Professor",
    image: "/images/characters/minerva-mcgonagall.jpg",
    description:
      "A strict but caring professor, head of Gryffindor House and one of Hogwarts' strongest defenders.",
  },

  {
    id: "severus-snape",
    name: "Severus Snape",
    category: "Hogwarts Staff",
    group: "Hogwarts",
    role: "Potions Professor",
    image: "/images/characters/severus-snape.jpg",
    description:
      "A highly skilled and mysterious professor whose true loyalties become central to Harry's story.",
  },

  {
    id: "rubeus-hagrid",
    name: "Rubeus Hagrid",
    category: "Hogwarts Staff",
    group: "Hogwarts",
    role: "Keeper of Keys & Grounds",
    image: "/images/characters/rubeus-hagrid.jpg",
    description:
      "A kind half-giant who introduces Harry to the magical world and has a deep love for magical creatures.",
  },

  {
    id: "filius-flitwick",
    name: "Filius Flitwick",
    category: "Hogwarts Staff",
    group: "Ravenclaw",
    role: "Charms Professor",
    image: "/images/characters/filius-flitwick.jpg",
    description:
      "The talented Charms professor and head of Ravenclaw House who later helps defend Hogwarts.",
  },

  {
    id: "pomona-sprout",
    name: "Pomona Sprout",
    category: "Hogwarts Staff",
    group: "Hufflepuff",
    role: "Herbology Professor",
    image: "/images/characters/pomona-sprout.jpg",
    description:
      "The Herbology professor and head of Hufflepuff House, known for her knowledge of magical plants.",
  },

  {
    id: "sybill-trelawney",
    name: "Sybill Trelawney",
    category: "Hogwarts Staff",
    group: "Hogwarts",
    role: "Divination Professor",
    image: "/images/characters/sybill-trelawney.jpg",
    description:
      "The Hogwarts Divination professor whose prophecy becomes closely connected to Harry and Voldemort.",
  },

  {
    id: "remus-lupin",
    name: "Remus Lupin",
    category: "Hogwarts Staff",
    group: "Order",
    role: "Defence Professor",
    image: "/images/characters/remus-lupin.jpg",
    description:
      "A kind Defence professor, skilled wizard and one of James Potter's closest childhood friends.",
  },

  {
    id: "alastor-moody",
    name: "Alastor \"Mad-Eye\" Moody",
    category: "Hogwarts Staff",
    group: "Order",
    role: "Auror",
    image: "/images/characters/alastor-moody.jpg",
    description:
      "A famous veteran Auror known for his magical eye, experience and extreme caution.",
  },

  {
    id: "dolores-umbridge",
    name: "Dolores Umbridge",
    category: "Hogwarts Staff",
    group: "Ministry",
    role: "High Inquisitor",
    image: "/images/characters/dolores-umbridge.jpg",
    description:
      "A Ministry official who takes control of Hogwarts and uses cruel punishments against students.",
  },

  {
    id: "horace-slughorn",
    name: "Horace Slughorn",
    category: "Hogwarts Staff",
    group: "Hogwarts",
    role: "Potions Professor",
    image: "/images/characters/horace-slughorn.jpg",
    description:
      "A talented Potions professor whose old memory helps reveal the secret of Voldemort's Horcruxes.",
  },

  {
    id: "gilderoy-lockhart",
    name: "Gilderoy Lockhart",
    category: "Hogwarts Staff",
    group: "Hogwarts",
    role: "Defence Professor",
    image: "/images/characters/gilderoy-lockhart.jpg",
    description:
      "A famous author and professor who enjoys attention and claims to have completed many heroic adventures.",
  },

  {
    id: "quirrell",
    name: "Quirinus Quirrell",
    category: "Hogwarts Staff",
    group: "Hogwarts",
    role: "Defence Professor",
    image: "/images/characters/quirrell.jpg",
    description:
      "Harry's first Defence professor, secretly serving Voldemort while searching for the Philosopher's Stone.",
  },

  {
    id: "rolanda-hooch",
    name: "Rolanda Hooch",
    category: "Hogwarts Staff",
    group: "Hogwarts",
    role: "Flying Instructor",
    image: "/images/characters/rolanda-hooch.jpg",
    description:
      "The Hogwarts flying instructor who teaches students how to use broomsticks and referees Quidditch matches.",
  },

  {
    id: "argus-filch",
    name: "Argus Filch",
    category: "Hogwarts Staff",
    group: "Hogwarts",
    role: "Caretaker",
    image: "/images/characters/argus-filch.jpg",
    description:
      "The Hogwarts caretaker who dislikes students breaking rules and is often accompanied by Mrs Norris.",
  },

  {
    id: "poppy-pomfrey",
    name: "Poppy Pomfrey",
    category: "Hogwarts Staff",
    group: "Hogwarts",
    role: "Matron",
    image: "/images/characters/poppy-pomfrey.jpg",
    description:
      "The Hogwarts matron who treats students injured by magical accidents, creatures and spells.",
  },


  /* =========================
     DARK FORCES
  ========================= */

  {
    id: "voldemort",
    name: "Lord Voldemort",
    category: "Dark Forces",
    group: "Death Eaters",
    role: "Dark Lord · Tom Riddle",
    image: "/images/characters/voldemort.jpg",
    description:
      "One of history's most dangerous Dark wizards, obsessed with immortality and control of the wizarding world.",
  },

  {
    id: "bellatrix-lestrange",
    name: "Bellatrix Lestrange",
    category: "Dark Forces",
    group: "Death Eaters",
    role: "Death Eater",
    image: "/images/characters/bellatrix-lestrange.jpg",
    description:
      "A powerful and dangerous witch who is fanatically loyal to Voldemort.",
  },

  {
    id: "lucius-malfoy",
    name: "Lucius Malfoy",
    category: "Dark Forces",
    group: "Death Eaters",
    role: "Death Eater",
    image: "/images/characters/lucius-malfoy.jpg",
    description:
      "Draco's wealthy father, a powerful pure-blood wizard and supporter of Voldemort.",
  },

  {
    id: "narcissa-malfoy",
    name: "Narcissa Malfoy",
    category: "Dark Forces",
    group: "Malfoy Family",
    role: "Draco's Mother",
    image: "/images/characters/narcissa-malfoy.jpg",
    description:
      "Draco's mother, whose love for her son eventually becomes more important than loyalty to Voldemort.",
  },

  {
    id: "peter-pettigrew",
    name: "Peter Pettigrew",
    category: "Dark Forces",
    group: "Death Eaters",
    role: "Wormtail",
    image: "/images/characters/peter-pettigrew.jpg",
    description:
      "A former friend of James Potter who betrays Harry's parents and later helps Voldemort return.",
  },

  {
    id: "barty-crouch-jr",
    name: "Barty Crouch Jr.",
    category: "Dark Forces",
    group: "Death Eaters",
    role: "Death Eater",
    image: "/images/characters/barty-crouch-jr.jpg",
    description:
      "A devoted Death Eater who impersonates Mad-Eye Moody and secretly manipulates the Triwizard Tournament.",
  },

  {
    id: "fenrir-greyback",
    name: "Fenrir Greyback",
    category: "Dark Forces",
    group: "Death Eaters",
    role: "Werewolf",
    image: "/images/characters/fenrir-greyback.jpg",
    description:
      "A violent werewolf allied with Voldemort who deliberately attacks and infects other people.",
  },

  {
    id: "corban-yaxley",
    name: "Corban Yaxley",
    category: "Dark Forces",
    group: "Death Eaters",
    role: "Death Eater",
    image: "/images/characters/corban-yaxley.jpg",
    description:
      "A Death Eater who helps Voldemort's followers take control of the Ministry of Magic.",
  },

  {
    id: "thorfinn-rowle",
    name: "Thorfinn Rowle",
    category: "Dark Forces",
    group: "Death Eaters",
    role: "Death Eater",
    image: "/images/characters/thorfinn-rowle.jpg",
    description:
      "A dangerous Death Eater involved in attacks against Harry's allies and the Order.",
  },

  {
    id: "antonin-dolohov",
    name: "Antonin Dolohov",
    category: "Dark Forces",
    group: "Death Eaters",
    role: "Death Eater",
    image: "/images/characters/antonin-dolohov.jpg",
    description:
      "A powerful Death Eater and dangerous duelist who fights in several major battles.",
  },


  /* =========================
     ORDER
  ========================= */

  {
    id: "sirius-black",
    name: "Sirius Black",
    category: "Order",
    group: "Order",
    role: "Harry's Godfather",
    image: "/images/characters/sirius-black.jpg",
    description:
      "Harry's godfather, James Potter's best friend and a loyal member of the Order of the Phoenix.",
  },

  {
    id: "nymphadora-tonks",
    name: "Nymphadora Tonks",
    category: "Order",
    group: "Order",
    role: "Auror",
    image: "/images/characters/nymphadora-tonks.jpg",
    description:
      "A young Auror and Metamorphmagus who can naturally change her physical appearance.",
  },

  {
    id: "kingsley-shacklebolt",
    name: "Kingsley Shacklebolt",
    category: "Order",
    group: "Order",
    role: "Auror",
    image: "/images/characters/kingsley-shacklebolt.jpg",
    description:
      "A highly skilled Auror and Order member who becomes an important leader after the war.",
  },

  {
    id: "arthur-weasley",
    name: "Arthur Weasley",
    category: "Order",
    group: "Weasley Family",
    role: "Ministry Employee",
    image: "/images/characters/arthur-weasley.jpg",
    description:
      "Ron's father, a Ministry employee fascinated by Muggles and a loyal supporter of Harry.",
  },

  {
    id: "molly-weasley",
    name: "Molly Weasley",
    category: "Order",
    group: "Weasley Family",
    role: "Order Member",
    image: "/images/characters/molly-weasley.jpg",
    description:
      "The loving mother of the Weasley family who treats Harry as one of her own children.",
  },

  {
    id: "bill-weasley",
    name: "Bill Weasley",
    category: "Order",
    group: "Weasley Family",
    role: "Gringotts Curse-Breaker",
    image: "/images/characters/bill-weasley.jpg",
    description:
      "The eldest Weasley son, a Gringotts curse-breaker and husband of Fleur Delacour.",
  },

  {
    id: "charlie-weasley",
    name: "Charlie Weasley",
    category: "Order",
    group: "Weasley Family",
    role: "Dragon Keeper",
    image: "/images/characters/charlie-weasley.jpg",
    description:
      "Ron's older brother who works with dragons in Romania and supports the fight against Voldemort.",
  },

  {
    id: "aberforth-dumbledore",
    name: "Aberforth Dumbledore",
    category: "Order",
    group: "Order",
    role: "Hog's Head Owner",
    image: "/images/characters/aberforth-dumbledore.jpg",
    description:
      "Albus Dumbledore's younger brother who later helps Harry and his friends return to Hogwarts.",
  },

  {
    id: "james-potter",
    name: "James Potter",
    category: "Order",
    group: "Gryffindor",
    role: "Harry's Father",
    image: "/images/characters/james-potter.jpg",
    description:
      "Harry's father, a former Gryffindor and member of the original Order who dies protecting his family.",
  },

  {
    id: "lily-potter",
    name: "Lily Potter",
    category: "Order",
    group: "Gryffindor",
    role: "Harry's Mother",
    image: "/images/characters/lily-potter.jpg",
    description:
      "Harry's mother, whose sacrifice creates powerful magical protection around her son.",
  },


  /* =========================
     MINISTRY
  ========================= */

  {
    id: "cornelius-fudge",
    name: "Cornelius Fudge",
    category: "Ministry",
    group: "Ministry",
    role: "Minister for Magic",
    image: "/images/characters/cornelius-fudge.jpg",
    description:
      "The Minister for Magic during Harry's early Hogwarts years who refuses to accept Voldemort's return.",
  },

  {
    id: "rufus-scrimgeour",
    name: "Rufus Scrimgeour",
    category: "Ministry",
    group: "Ministry",
    role: "Minister for Magic",
    image: "/images/characters/rufus-scrimgeour.jpg",
    description:
      "A former Auror who becomes Minister for Magic during the growing war against Voldemort.",
  },

  {
    id: "pius-thickness",
    name: "Pius Thicknesse",
    category: "Ministry",
    group: "Ministry",
    role: "Minister for Magic",
    image: "/images/characters/pius-thickness.jpg",
    description:
      "A Ministry official who is magically controlled and used by Voldemort's followers.",
  },

  {
    id: "barty-crouch-sr",
    name: "Barty Crouch Sr.",
    category: "Ministry",
    group: "Ministry",
    role: "Ministry Official",
    image: "/images/characters/barty-crouch-sr.jpg",
    description:
      "A powerful Ministry official whose family history becomes closely connected to the Triwizard Tournament.",
  },

  {
    id: "amelia-bones",
    name: "Amelia Bones",
    category: "Ministry",
    group: "Ministry",
    role: "Senior Ministry Witch",
    image: "/images/characters/amelia-bones.jpg",
    description:
      "A respected Ministry official known for being capable, serious and fair.",
  },


  /* =========================
     MUGGLES
  ========================= */

  {
    id: "vernon-dursley",
    name: "Vernon Dursley",
    category: "Muggles",
    group: "Dursley Family",
    role: "Harry's Uncle",
    image: "/images/characters/vernon-dursley.jpg",
    description:
      "Harry's uncle, who strongly dislikes magic and tries to keep Harry away from the wizarding world.",
  },

  {
    id: "petunia-dursley",
    name: "Petunia Dursley",
    category: "Muggles",
    group: "Dursley Family",
    role: "Harry's Aunt",
    image: "/images/characters/petunia-dursley.jpg",
    description:
      "Harry's aunt and Lily Potter's sister, who knows about magic but tries to avoid the wizarding world.",
  },

  {
    id: "dudley-dursley",
    name: "Dudley Dursley",
    category: "Muggles",
    group: "Dursley Family",
    role: "Harry's Cousin",
    image: "/images/characters/dudley-dursley.jpg",
    description:
      "Harry's spoiled cousin who bullies him when they are young but becomes less hostile later.",
  },

  {
    id: "aunt-marge",
    name: "Aunt Marge",
    category: "Muggles",
    group: "Dursley Family",
    role: "Vernon's Sister",
    image: "/images/characters/aunt-marge.jpg",
    description:
      "Vernon's sister, who strongly dislikes Harry and insults his parents without knowing their true story.",
  },

  {
    id: "mr-granger",
    name: "Mr. Granger",
    category: "Muggles",
    group: "Granger Family",
    role: "Hermione's Father",
    image: "/images/characters/mr-granger.jpg",
    description:
      "Hermione's Muggle father, a dentist who supports his daughter's life in the magical world.",
  },

  {
    id: "mrs-granger",
    name: "Mrs. Granger",
    category: "Muggles",
    group: "Granger Family",
    role: "Hermione's Mother",
    image: "/images/characters/mrs-granger.jpg",
    description:
      "Hermione's Muggle mother who cares deeply for her daughter despite living outside the wizarding world.",
  },


  /* =========================
     MAGICAL BEINGS & OTHERS
  ========================= */

  {
    id: "dobby",
    name: "Dobby",
    category: "Magical Beings",
    group: "House-Elf",
    role: "House-Elf",
    image: "/images/characters/dobby.jpg",
    description:
      "A house-elf who gains his freedom and becomes an extremely loyal friend to Harry.",
  },

  {
    id: "kreacher",
    name: "Kreacher",
    category: "Magical Beings",
    group: "House-Elf",
    role: "House-Elf",
    image: "/images/characters/kreacher.jpg",
    description:
      "The old house-elf of the Black family whose loyalty changes after Harry begins treating him with respect.",
  },

  {
    id: "griphook",
    name: "Griphook",
    category: "Magical Beings",
    group: "Goblin",
    role: "Gringotts Goblin",
    image: "/images/characters/griphook.jpg",
    description:
      "A Gringotts goblin who later helps Harry, Ron and Hermione enter a protected bank vault.",
  },

  {
    id: "ollivander",
    name: "Garrick Ollivander",
    category: "Magical Beings",
    group: "Wizard",
    role: "Wandmaker",
    image: "/images/characters/ollivander.jpg",
    description:
      "A famous wandmaker with extraordinary knowledge of wands and the witches and wizards who own them.",
  },

  {
    id: "viktor-krum",
    name: "Viktor Krum",
    category: "Magical Beings",
    group: "Durmstrang",
    role: "Triwizard Champion",
    image: "/images/characters/viktor-krum.jpg",
    description:
      "A famous Bulgarian Quidditch player and Durmstrang student who competes in the Triwizard Tournament.",
  },

  {
    id: "fleur-delacour",
    name: "Fleur Delacour",
    category: "Magical Beings",
    group: "Beauxbatons",
    role: "Triwizard Champion",
    image: "/images/characters/fleur-delacour.jpg",
    description:
      "A talented Beauxbatons witch who competes in the Triwizard Tournament and later marries Bill Weasley.",
  },

  {
    id: "olympe-maxime",
    name: "Olympe Maxime",
    category: "Magical Beings",
    group: "Beauxbatons",
    role: "Headmistress",
    image: "/images/characters/olympe-maxime.jpg",
    description:
      "The impressive headmistress of Beauxbatons Academy who visits Hogwarts during the Triwizard Tournament.",
  },

  {
    id: "nearly-headless-nick",
    name: "Nearly Headless Nick",
    category: "Magical Beings",
    group: "Ghost",
    role: "Gryffindor Ghost",
    image: "/images/characters/nearly-headless-nick.jpg",
    description:
      "The friendly ghost of Gryffindor House, named after his unsuccessful execution.",
  },

  {
    id: "grey-lady",
    name: "The Grey Lady",
    category: "Magical Beings",
    group: "Ghost",
    role: "Helena Ravenclaw",
    image: "/images/characters/grey-lady.jpg",
    description:
      "The ghost of Ravenclaw House and daughter of Rowena Ravenclaw, whose past helps Harry find a Horcrux.",
  },

  {
    id: "moaning-myrtle",
    name: "Moaning Myrtle",
    category: "Magical Beings",
    group: "Ghost",
    role: "Hogwarts Ghost",
    image: "/images/characters/moaning-myrtle.jpg",
    description:
      "The ghost of a Hogwarts student who usually haunts a girls' bathroom and becomes connected to several mysteries.",
  },

  {
    id: "aragog",
    name: "Aragog",
    category: "Magical Beings",
    group: "Acromantula",
    role: "Giant Spider",
    image: "/images/characters/aragog.jpg",
    description:
      "A giant Acromantula raised by Hagrid who lives with a large spider colony inside the Forbidden Forest.",
  },

  {
    id: "firenze",
    name: "Firenze",
    category: "Magical Beings",
    group: "Centaur",
    role: "Centaur · Divination Teacher",
    image: "/images/characters/firenze.jpg",
    description:
      "A centaur who helps Harry and later leaves the Forbidden Forest to teach Divination at Hogwarts.",
  },
];


/* =========================================================
   FILTERS
========================================================= */

const filters = [
  "All",
  "Main Trio",
  "Gryffindor",
  "Slytherin",
  "Ravenclaw",
  "Hufflepuff",
  "Hogwarts Staff",
  "Order",
  "Dark Forces",
  "Ministry",
  "Muggles",
  "Magical Beings",
];


/* =========================================================
   CHARACTER CARD
========================================================= */

function CharacterCard({ character, index }) {
  const [imageError, setImageError] =
    useState(false);

  return (
    <article
      className="character-record"
      style={{
        "--character-delay":
          `${Math.min(index * 0.035, 0.7)}s`,
      }}
    >
      <Link
        to={`/characters/${character.id}`}
        className="character-record__portrait"
      >
        <div className="character-record__aura" />

        <div className="character-record__rune character-record__rune--one">
          ✦
        </div>

        <div className="character-record__rune character-record__rune--two">
          ◇
        </div>

        {!imageError ? (
          <img
            src={character.image}
            alt={character.name}
            loading="lazy"
            onError={() =>
              setImageError(true)
            }
          />
        ) : (
          <div className="character-record__fallback">
            <span>
              {character.name
                .split(" ")
                .map((word) => word[0])
                .slice(0, 2)
                .join("")}
            </span>
          </div>
        )}

        <div className="character-record__portrait-fade" />

        <div className="character-record__number">
          {String(index + 1).padStart(2, "0")}
        </div>
      </Link>

      <div className="character-record__content">

        <div className="character-record__meta">
          <span>
            {character.group}
          </span>

          <i />

          <span>
            {character.role}
          </span>
        </div>

        <h2>
          {character.name}
        </h2>

        <p>
          {character.description}
        </p>

        <Link
          to={`/characters/${character.id}`}
          className="character-record__link"
        >
          Open record

          <FiArrowUpRight />
        </Link>

      </div>
    </article>
  );
}


/* =========================================================
   PAGE
========================================================= */

function Characters() {
  const pageRef = useRef(null);

  const [visible, setVisible] =
    useState(false);

  const [filter, setFilter] =
    useState("All");

  const [searchOpen, setSearchOpen] =
    useState(false);

  const [search, setSearch] =
    useState("");


  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 80);

    return () =>
      clearTimeout(timer);
  }, []);


  const filteredCharacters =
    useMemo(() => {

      const query =
        search
          .trim()
          .toLowerCase();

      return characters.filter(
        (character) => {

          const matchesFilter =
            filter === "All" ||
            character.category === filter ||
            character.group === filter;

          const matchesSearch =
            !query ||
            character.name
              .toLowerCase()
              .includes(query) ||
            character.role
              .toLowerCase()
              .includes(query) ||
            character.group
              .toLowerCase()
              .includes(query) ||
            character.description
              .toLowerCase()
              .includes(query);

          return (
            matchesFilter &&
            matchesSearch
          );
        }
      );

    }, [filter, search]);


  return (
    <main
      ref={pageRef}
      className={
        visible
          ? "characters-page characters-page--visible"
          : "characters-page"
      }
    >

      <MagicalBackground />


      {/* ===================================================
          ENCHANTED PAGE FRAME
      =================================================== */}

      <div
        className="characters-frame"
        aria-hidden="true"
      >

        <div className="characters-frame__rail characters-frame__rail--top">
          <span />
          <i>✦</i>
          <span />
        </div>

        <div className="characters-frame__rail characters-frame__rail--bottom">
          <span />
          <i>◇</i>
          <span />
        </div>

        <div className="characters-frame__rail characters-frame__rail--left">
          <span />
          <i>✧</i>
          <span />
        </div>

        <div className="characters-frame__rail characters-frame__rail--right">
          <span />
          <i>✧</i>
          <span />
        </div>


        <div className="characters-frame__corner characters-frame__corner--tl">
          <span className="characters-frame__corner-ring" />
          <span className="characters-frame__corner-diamond">
            ✦
          </span>
        </div>

        <div className="characters-frame__corner characters-frame__corner--tr">
          <span className="characters-frame__corner-ring" />
          <span className="characters-frame__corner-diamond">
            ✦
          </span>
        </div>

        <div className="characters-frame__corner characters-frame__corner--bl">
          <span className="characters-frame__corner-ring" />
          <span className="characters-frame__corner-diamond">
            ✦
          </span>
        </div>

        <div className="characters-frame__corner characters-frame__corner--br">
          <span className="characters-frame__corner-ring" />
          <span className="characters-frame__corner-diamond">
            ✦
          </span>
        </div>


        <span className="characters-frame__spark characters-frame__spark--1" />
        <span className="characters-frame__spark characters-frame__spark--2" />
        <span className="characters-frame__spark characters-frame__spark--3" />
        <span className="characters-frame__spark characters-frame__spark--4" />

      </div>


      {/* ===================================================
          ARCHIVE CREST
      =================================================== */}

      {/* ===================================================
    TOP CENTER LOGO
=================================================== */}

<div className="characters-crest">

  <div className="characters-crest__line" />

  <Link
    to="/"
    className="characters-crest__logo"
    aria-label="Return home"
  >
    <img
      src="/images/logo.png"
      alt="Wizarding World"
    />
  </Link>

  <div className="characters-crest__line characters-crest__line--reverse" />

</div>

      {/* ===================================================
          HERO
      =================================================== */}

      <header className="characters-hero">

        <p className="characters-hero__eyebrow">
          THE WIZARDING ARCHIVE · VOLUME I
        </p>

        <h1 className="characters-hero__title">
          Witches,
          <span>
            Wizards & Souls
          </span>
        </h1>

        <div className="characters-hero__ornament">
          <span />
          <i>✦</i>
          <span />
        </div>

        <p className="characters-hero__description">
          Students and professors.
          Heroes and enemies.
          Ghosts, creatures and those who
          changed the course of wizarding history.
        </p>

        <div className="characters-hero__count">

          <span>
            {characters.length}
          </span>

          <small>
            KNOWN RECORDS
          </small>

        </div>

      </header>


      {/* ===================================================
          ARCHIVE CONTROLS
      =================================================== */}

      <section className="characters-controls">

        <div className="characters-controls__heading">

          <span>
            ARCHIVE INDEX
          </span>

          <small>
            Select an affiliation
          </small>

        </div>


        <div className="characters-controls__filters">

          {filters.map((item) => (

            <button
              key={item}
              type="button"
              className={
                filter === item
                  ? "characters-filter characters-filter--active"
                  : "characters-filter"
              }
              onClick={() =>
                setFilter(item)
              }
            >
              <span>
                {item}
              </span>
            </button>

          ))}

        </div>


        <button
          type="button"
          className="characters-search-button"
          onClick={() =>
            setSearchOpen(true)
          }
          aria-label="Search characters"
        >
          <FiSearch />

          <span>
            Search archive
          </span>
        </button>

      </section>


      {/* ===================================================
          SEARCH
      =================================================== */}

      <div
        className={
          searchOpen
            ? "characters-search characters-search--open"
            : "characters-search"
        }
      >

        <div className="characters-search__inner">

          <FiSearch />

          <input
            type="text"
            value={search}
            onChange={(event) =>
              setSearch(
                event.target.value
              )
            }
            placeholder="Search a name, house or role..."
            autoFocus={searchOpen}
          />

          <button
            type="button"
            onClick={() => {
              setSearchOpen(false);
              setSearch("");
            }}
            aria-label="Close search"
          >
            <FiX />
          </button>

        </div>

      </div>


      {/* ===================================================
          ARCHIVE
      =================================================== */}

      <section className="characters-archive">

        <div className="characters-archive__header">

          <div>
            <small>
              CURRENT COLLECTION
            </small>

            <h2>
              {filter === "All"
                ? "All Recorded Characters"
                : filter}
            </h2>
          </div>

          <p>
            {filteredCharacters.length}
            {" "}
            {filteredCharacters.length === 1
              ? "record"
              : "records"}
          </p>

        </div>


        {filteredCharacters.length > 0 ? (

          <div className="characters-grid">

            {filteredCharacters.map(
              (character, index) => (

                <CharacterCard
                  key={character.id}
                  character={character}
                  index={index}
                />

              )
            )}

          </div>

        ) : (

          <div className="characters-empty">

            <span>
              ✦
            </span>

            <h2>
              No record was found.
            </h2>

            <p>
              Try another name or
              explore a different archive.
            </p>

          </div>

        )}

      </section>


      {/* ===================================================
          PAGE END
      =================================================== */}

      <footer className="characters-end">

        <div />

        <span>
          END OF VOLUME I
        </span>

        <i>
          ✦
        </i>

        <span>
          MORE RECORDS AWAIT
        </span>

        <div />

      </footer>

    </main>
  );
}

export default Characters;