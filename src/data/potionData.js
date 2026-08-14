// ============================================================
// POTIONS — ALCHEMICAL ARCHIVE DATA
// ============================================================

const potionData = [
  // ==========================================================
  // 01 — POWERFUL & ICONIC
  // ==========================================================

  {
    id: "felix-felicis",
    number: "01",
    name: "Felix Felicis",
    alias: "Liquid Luck",
    category: "iconic",
    classification: "Fortune Potion",

    image:
      "/images/potions/iconic/felix-felicis.png",

    color: "gold",

    tagline:
      "For a little while, fortune itself seems to choose your side.",

    description:
      "Felix Felicis, commonly known as Liquid Luck, temporarily grants the drinker extraordinary good fortune. During its effect, circumstances seem to align in unusually favourable ways.",

    effect:
      "Temporarily produces extraordinary good luck.",

    appearance:
      "Molten golden liquid",

    difficulty:
      "Advanced",

    duration:
      "Limited",

    danger:
      "High when misused",

    knownFor: [
      "Extraordinary good fortune",
      "Extremely difficult brewing process",
      "Dangerous when consumed excessively",
      "Known as Liquid Luck",
    ],
  },

  {
    id: "polyjuice-potion",
    number: "02",
    name: "Polyjuice Potion",
    alias: "Transformation Brew",
    category: "iconic",
    classification: "Transformation Potion",

    image:
      "/images/potions/iconic/polyjuice-potion.png",

    color: "green",

    tagline:
      "One ingredient can allow another face to look back from the mirror.",

    description:
      "Polyjuice Potion allows the drinker to temporarily assume the physical appearance of another human being. The potion requires biological material from the person whose appearance will be copied.",

    effect:
      "Transforms the drinker into another person's physical appearance.",

    appearance:
      "Varies depending on the person",

    difficulty:
      "Advanced",

    duration:
      "Approximately one hour",

    danger:
      "Moderate",

    knownFor: [
      "Temporary human transformation",
      "Requires part of another person",
      "Complex brewing process",
      "Used for magical impersonation",
    ],
  },

  {
    id: "amortentia",
    number: "03",
    name: "Amortentia",
    alias: "The Most Powerful Love Potion",
    category: "iconic",
    classification: "Love Potion",

    image:
      "/images/potions/iconic/amortentia.png",

    color: "rose",

    tagline:
      "Its scent is different for everyone who stands near it.",

    description:
      "Amortentia is considered the most powerful love potion in the wizarding world. It cannot create genuine love, but it produces an intense magical infatuation or obsession.",

    effect:
      "Creates powerful artificial attraction and infatuation.",

    appearance:
      "Pearlescent liquid with spiralling steam",

    difficulty:
      "Advanced",

    duration:
      "Variable",

    danger:
      "High",

    knownFor: [
      "Powerful infatuation",
      "Distinctive pearlescent appearance",
      "Individual scent for each person",
      "Cannot create genuine love",
    ],
  },

  {
    id: "veritaserum",
    number: "04",
    name: "Veritaserum",
    alias: "Truth Serum",
    category: "iconic",
    classification: "Truth Potion",

    image:
      "/images/potions/iconic/veritaserum.png",

    color: "silver",

    tagline:
      "Three drops may uncover what someone desperately wishes to hide.",

    description:
      "Veritaserum is an extremely powerful truth potion. When effective, it causes the drinker to answer questions truthfully and is therefore tightly controlled within the wizarding world.",

    effect:
      "Compels the drinker to reveal truthful answers.",

    appearance:
      "Clear and colourless",

    difficulty:
      "Advanced",

    duration:
      "Limited",

    danger:
      "Controlled substance",

    knownFor: [
      "Truth-telling properties",
      "Extremely powerful effect",
      "Used in interrogation",
      "Closely controlled",
    ],
  },

  // ==========================================================
  // 02 — MEDICAL & HEALING
  // ==========================================================

  {
    id: "skele-gro",
    number: "05",
    name: "Skele-Gro",
    alias: "Bone Regeneration Potion",
    category: "healing",
    classification: "Healing Potion",

    image:
      "/images/potions/healing/skele-gro.png",

    color: "aqua",

    tagline:
      "Healing can sometimes hurt almost as much as the injury.",

    description:
      "Skele-Gro is a medicinal potion capable of regrowing missing bones. The regeneration process is extremely uncomfortable but can restore an entire skeletal structure over time.",

    effect:
      "Regrows missing or vanished bones.",

    appearance:
      "Medicinal liquid",

    difficulty:
      "Professional",

    duration:
      "Several hours",

    danger:
      "Painful",

    knownFor: [
      "Bone regeneration",
      "Painful healing process",
      "Used at Hogwarts",
      "Advanced magical medicine",
    ],
  },

  {
    id: "pepperup-potion",
    number: "06",
    name: "Pepperup Potion",
    alias: "Cold Remedy",
    category: "healing",
    classification: "Medicinal Potion",

    image:
      "/images/potions/healing/pepperup-potion.png",

    color: "orange",

    tagline:
      "The cold disappears. The steam from your ears may take longer.",

    description:
      "Pepperup Potion is a common magical remedy used to treat colds. It rapidly warms the drinker and is famous for causing steam to emerge from the ears afterward.",

    effect:
      "Treats cold symptoms and rapidly warms the body.",

    appearance:
      "Warm medicinal brew",

    difficulty:
      "Intermediate",

    duration:
      "Short",

    danger:
      "Low",

    knownFor: [
      "Treating colds",
      "Warming the drinker",
      "Steam emerging from the ears",
    ],
  },

  {
    id: "wiggenweld-potion",
    number: "07",
    name: "Wiggenweld Potion",
    alias: "Restorative Draught",
    category: "healing",
    classification: "Healing Potion",

    image:
      "/images/potions/healing/wiggenweld-potion.png",

    color: "aqua",

    tagline:
      "Some magical sleep requires an equally magical awakening.",

    description:
      "Wiggenweld Potion is a restorative magical brew associated with healing and awakening those affected by certain magical forms of sleep.",

    effect:
      "Restores and awakens a magically sleeping person.",

    appearance:
      "Restorative magical liquid",

    difficulty:
      "Intermediate",

    duration:
      "Rapid",

    danger:
      "Low",

    knownFor: [
      "Restorative properties",
      "Countering magical sleep",
      "Magical healing",
    ],
  },

  {
    id: "essence-of-murtlap",
    number: "08",
    name: "Essence of Murtlap",
    alias: "Skin Remedy",
    category: "healing",
    classification: "Healing Solution",

    image:
      "/images/potions/healing/essence-of-murtlap.png",

    color: "aqua",

    tagline:
      "A quiet remedy for wounds magic has left behind.",

    description:
      "Essence of Murtlap is a soothing magical solution used on cuts, abrasions and irritated skin. It can reduce discomfort and assist the healing process.",

    effect:
      "Soothes and heals damaged skin.",

    appearance:
      "Pale medicinal solution",

    difficulty:
      "Moderate",

    duration:
      "Gradual",

    danger:
      "Low",

    knownFor: [
      "Treating cuts",
      "Soothing skin",
      "Reducing magical irritation",
    ],
  },

  {
    id: "blood-replenishing-potion",
    number: "09",
    name: "Blood-Replenishing Potion",
    alias: "Blood Restoration Draught",
    category: "healing",
    classification: "Healing Potion",

    image:
      "/images/potions/healing/blood-replenishing-potion.png",

    color: "crimson",

    tagline:
      "When ordinary healing is not enough, the body must rebuild what was lost.",

    description:
      "Blood-Replenishing Potion is used in magical medicine to restore blood after serious blood loss.",

    effect:
      "Helps the body replenish lost blood.",

    appearance:
      "Deep medicinal red",

    difficulty:
      "Professional",

    duration:
      "Gradual",

    danger:
      "Medical use",

    knownFor: [
      "Restoring blood",
      "Treating severe injuries",
      "Hospital use",
    ],
  },

  {
    id: "bruise-healing-paste",
    number: "10",
    name: "Bruise-Healing Paste",
    alias: "Bruise Remedy",
    category: "healing",
    classification: "Healing Compound",

    image:
      "/images/potions/healing/bruise-healing-paste.png",

    color: "orange",

    tagline:
      "A thick orange remedy for injuries that would otherwise linger.",

    description:
      "Bruise-Healing Paste is a thick magical preparation applied directly to bruised skin. It rapidly reduces visible bruising and helps damaged tissue recover.",

    effect:
      "Rapidly heals bruises.",

    appearance:
      "Thick orange paste",

    difficulty:
      "Moderate",

    duration:
      "Rapid",

    danger:
      "Low",

    knownFor: [
      "Healing bruises",
      "Orange colour",
      "Topical application",
    ],
  },

  // ==========================================================
  // 03 — DARK & DANGEROUS
  // ==========================================================

  {
    id: "draught-of-living-death",
    number: "11",
    name: "Draught of Living Death",
    alias: "Deathlike Sleep",
    category: "dark",
    classification: "Sleeping Potion",

    image:
      "/images/potions/dark/draught-of-living-death.png",

    color: "violet",

    tagline:
      "Sleep so deep that life itself appears to have disappeared.",

    description:
      "The Draught of Living Death is an exceptionally powerful sleeping potion capable of placing the drinker into a deep, deathlike slumber.",

    effect:
      "Produces an extremely deep magical sleep.",

    appearance:
      "Pale finished potion",

    difficulty:
      "Advanced",

    duration:
      "Potentially prolonged",

    danger:
      "Extreme",

    knownFor: [
      "Deathlike sleep",
      "Advanced potion-making",
      "Extremely powerful effect",
    ],
  },

  {
    id: "wolfsbane-potion",
    number: "12",
    name: "Wolfsbane Potion",
    alias: "Lycanthropy Suppressant",
    category: "dark",
    classification: "Complex Medicinal Potion",

    image:
      "/images/potions/dark/wolfsbane-potion.png",

    color: "blue",

    tagline:
      "It cannot stop the transformation, but it can preserve the mind within it.",

    description:
      "Wolfsbane Potion allows a werewolf to retain their human awareness during transformation. It does not cure lycanthropy and must be prepared with exceptional skill.",

    effect:
      "Preserves a werewolf's human mind during transformation.",

    appearance:
      "Dark medicinal brew",

    difficulty:
      "Master",

    duration:
      "Full-moon transformation",

    danger:
      "High",

    knownFor: [
      "Used by werewolves",
      "Preserves mental awareness",
      "Extremely difficult brewing",
      "Does not cure lycanthropy",
    ],
  },

  {
    id: "voldemort-rebirth-potion",
    number: "13",
    name: "Rebirth Potion",
    alias: "Voldemort's Rebirth Potion",
    category: "dark",
    classification: "Dark Ritual Potion",

    image:
      "/images/potions/dark/voldemort-rebirth-potion.png",

    color: "blood",

    tagline:
      "Bone. Flesh. Blood. A body returned through forbidden ritual.",

    description:
      "A dark ritual potion is used during Voldemort's return to physical form. Its creation involves disturbing ritual ingredients connected to family, servant and enemy.",

    effect:
      "Restores a physical body through dark ritual magic.",

    appearance:
      "Dark ritual cauldron",

    difficulty:
      "Forbidden",

    duration:
      "Permanent transformation",

    danger:
      "Extreme",

    knownFor: [
      "Dark ritual magic",
      "Voldemort's physical return",
      "Bone of the father",
      "Flesh of the servant",
      "Blood of the enemy",
    ],
  },

  {
    id: "emerald-potion",
    number: "14",
    name: "Emerald Potion",
    alias: "Drink of Despair",
    category: "dark",
    classification: "Dark Protective Potion",

    image:
      "/images/potions/dark/emerald-potion.png",

    color: "toxic",

    tagline:
      "The basin could be emptied only by drinking what waited inside.",

    description:
      "The Emerald Potion protects the locket Horcrux hidden within Voldemort's seaside cave. Drinking it causes intense suffering, fear, weakness and desperate thirst.",

    effect:
      "Causes severe psychological and physical suffering.",

    appearance:
      "Luminous emerald green",

    difficulty:
      "Unknown Dark Magic",

    duration:
      "Severe",

    danger:
      "Extreme",

    knownFor: [
      "Protecting a Horcrux",
      "Causing terrible visions",
      "Extreme thirst",
      "Used inside Voldemort's cave",
    ],
  },

  // ==========================================================
  // 04 — MIND & ACADEMIC
  // ==========================================================

  {
    id: "draught-of-peace",
    number: "15",
    name: "Draught of Peace",
    alias: "Calming Potion",
    category: "mind",
    classification: "Mind Potion",

    image:
      "/images/potions/mind/draught-of-peace.png",

    color: "lavender",

    tagline:
      "A measured dose quiets the mind. Too much may quiet it completely.",

    description:
      "The Draught of Peace is designed to calm anxiety and agitation. Precise brewing is important because excessive quantities may produce dangerously deep sleep.",

    effect:
      "Reduces anxiety and agitation.",

    appearance:
      "Soft calming brew",

    difficulty:
      "Advanced",

    duration:
      "Temporary",

    danger:
      "Moderate",

    knownFor: [
      "Calming anxiety",
      "Requires precision",
      "Overdose can cause deep sleep",
    ],
  },

  {
    id: "elixir-to-induce-euphoria",
    number: "16",
    name: "Elixir to Induce Euphoria",
    alias: "Euphoria Elixir",
    category: "mind",
    classification: "Mood Potion",

    image:
      "/images/potions/mind/elixir-to-induce-euphoria.png",

    color: "yellow",

    tagline:
      "Happiness can be bottled, although the results may become rather strange.",

    description:
      "The Elixir to Induce Euphoria creates an intense feeling of happiness. Side effects can include unusual enthusiasm and eccentric behaviour.",

    effect:
      "Produces intense happiness and euphoria.",

    appearance:
      "Bright cheerful liquid",

    difficulty:
      "Advanced",

    duration:
      "Temporary",

    danger:
      "Moderate",

    knownFor: [
      "Intense happiness",
      "Excessive enthusiasm",
      "Unusual behavioural side effects",
    ],
  },

  {
    id: "invigorating-draught",
    number: "17",
    name: "Invigorating Draught",
    alias: "Energy Draught",
    category: "mind",
    classification: "Restorative Potion",

    image:
      "/images/potions/mind/invigorating-draught.png",

    color: "amber",

    tagline:
      "For the exhausted witch or wizard who still has work ahead.",

    description:
      "The Invigorating Draught is a restorative potion intended to refresh the drinker and provide additional energy.",

    effect:
      "Restores energy and alertness.",

    appearance:
      "Bright restorative brew",

    difficulty:
      "Intermediate",

    duration:
      "Temporary",

    danger:
      "Low",

    knownFor: [
      "Restoring energy",
      "Increasing alertness",
      "Useful after exhaustion",
    ],
  },

  {
    id: "wit-sharpening-potion",
    number: "18",
    name: "Wit-Sharpening Potion",
    alias: "Clarity Potion",
    category: "mind",
    classification: "Mental Enhancement Potion",

    image:
      "/images/potions/mind/wit-sharpening-potion.png",

    color: "cyan",

    tagline:
      "A clearer mind can be as useful as the strongest spell.",

    description:
      "Wit-Sharpening Potion is designed to improve mental clarity and sharpen the drinker's ability to think.",

    effect:
      "Improves clarity of thought.",

    appearance:
      "Clear luminous brew",

    difficulty:
      "Intermediate",

    duration:
      "Temporary",

    danger:
      "Low",

    knownFor: [
      "Mental clarity",
      "Sharper thinking",
      "Academic usefulness",
    ],
  },

  {
    id: "sleekeazys-hair-potion",
    number: "19",
    name: "Sleekeazy's Hair Potion",
    alias: "Hair Taming Potion",
    category: "mind",
    classification: "Cosmetic Potion",

    image:
      "/images/potions/mind/sleekeazys-hair-potion.png",

    color: "pearl",

    tagline:
      "Not every successful potion needs to save a life or defeat an enemy.",

    description:
      "Sleekeazy's Hair Potion is a magical hair-care preparation designed to make difficult or unruly hair easier to manage.",

    effect:
      "Smooths and controls unruly hair.",

    appearance:
      "Glossy cosmetic solution",

    difficulty:
      "Commercial",

    duration:
      "Temporary",

    danger:
      "Low",

    knownFor: [
      "Hair care",
      "Created by Fleamont Potter",
      "Commercial magical product",
    ],
  },

  // ==========================================================
  // 05 — TRANSFORMATION
  // ==========================================================

  {
    id: "shrinking-solution",
    number: "20",
    name: "Shrinking Solution",
    alias: "Shrinking Potion",
    category: "transformation",
    classification: "Transformation Potion",

    image:
      "/images/potions/transformation/shrinking-solution.png",

    color: "green",

    tagline:
      "Sometimes transformation means becoming considerably smaller.",

    description:
      "Shrinking Solution is a potion that causes the affected subject to shrink and can produce a younger physical state in certain circumstances.",

    effect:
      "Shrinks or physically reduces the affected subject.",

    appearance:
      "Bright magical solution",

    difficulty:
      "Intermediate",

    duration:
      "Variable",

    danger:
      "Moderate",

    knownFor: [
      "Shrinking effects",
      "Transformation magic",
      "Taught in Potions class",
    ],
  },

  {
    id: "swelling-solution",
    number: "21",
    name: "Swelling Solution",
    alias: "Engorgement Brew",
    category: "transformation",
    classification: "Transformation Potion",

    image:
      "/images/potions/transformation/swelling-solution.png",

    color: "orange",

    tagline:
      "A single splash can make something much larger than intended.",

    description:
      "Swelling Solution causes living tissue or affected objects to expand dramatically in size.",

    effect:
      "Causes dramatic swelling and enlargement.",

    appearance:
      "Reactive magical liquid",

    difficulty:
      "Intermediate",

    duration:
      "Temporary",

    danger:
      "Moderate",

    knownFor: [
      "Rapid swelling",
      "Enlargement effects",
      "Classroom brewing",
    ],
  },

  {
    id: "ageing-potion",
    number: "22",
    name: "Ageing Potion",
    alias: "Age Advancement Potion",
    category: "transformation",
    classification: "Transformation Potion",

    image:
      "/images/potions/transformation/ageing-potion.png",

    color: "amber",

    tagline:
      "Age can be accelerated, although magical boundaries may not be so easily fooled.",

    description:
      "Ageing Potion temporarily makes the drinker physically older. The amount consumed affects the degree of ageing produced.",

    effect:
      "Temporarily increases physical age.",

    appearance:
      "Aged amber liquid",

    difficulty:
      "Advanced",

    duration:
      "Temporary",

    danger:
      "Moderate",

    knownFor: [
      "Temporary ageing",
      "Dose-dependent effect",
      "Used by Fred and George Weasley",
    ],
  },
];

export default potionData;