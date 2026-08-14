// ============================================================
// WIZARDING TIMELINE — HISTORICAL ARCHIVE DATA
// ============================================================

const timelineData = [
  // ==========================================================
  // ERA I — FOUNDATIONS
  // ==========================================================

  {
    id: "ancient-wizarding-world",
    number: "01",
    era: "foundations",
    year: "Ancient Era",
    sortYear: 800,

    importance: "minor",

    image: null,

    title: {
      en: "The Ancient Wizarding World",
      ta: "பண்டைய மந்திர உலகம்",
    },

    shortDescription: {
      en: "Long before Hogwarts existed, witches, wizards and magical creatures already lived throughout the world.",
      ta: "ஹாக்வார்ட்ஸ் உருவாகும் முன்பே, சூனியக்காரர்கள், மந்திரவாதிகள் மற்றும் மந்திர உயிரினங்கள் உலகம் முழுவதும் வாழ்ந்து வந்தனர்.",
    },

    description: {
      en: "Magic existed for centuries before the establishment of Hogwarts. Early magical communities developed their own traditions, knowledge and methods of teaching magic. Over time, the need for safer and more organised magical education would eventually lead to the creation of Hogwarts.",
      ta: "ஹாக்வார்ட்ஸ் நிறுவப்படுவதற்கு பல நூற்றாண்டுகளுக்கு முன்பே மந்திரம் இருந்தது. ஆரம்பகால மந்திர சமூகங்கள் தங்களுக்கென மரபுகள், அறிவு மற்றும் மந்திரத்தை கற்பிக்கும் முறைகளை உருவாக்கின. பாதுகாப்பான மற்றும் ஒழுங்கமைக்கப்பட்ட மந்திரக் கல்வியின் தேவை பின்னர் ஹாக்வார்ட்ஸ் உருவாக வழிவகுத்தது.",
    },

    people: [],
    places: ["Wizarding Britain"],

    label: {
      en: "Before Hogwarts",
      ta: "ஹாக்வார்ட்ஸுக்கு முன்",
    },
  },

  {
    id: "founding-hogwarts",
    number: "02",
    era: "foundations",
    year: "c. 10th Century",
    sortYear: 990,

    importance: "major",

    image:
      "/images/timeline/events/founding-hogwarts.png",

    title: {
      en: "The Founding of Hogwarts",
      ta: "ஹாக்வார்ட்ஸ் நிறுவப்பட்டது",
    },

    shortDescription: {
      en: "Four extraordinary witches and wizards establish one of the world's greatest schools of magic.",
      ta: "நான்கு சிறந்த மந்திரவாதிகள் உலகின் மிகச் சிறந்த மந்திரப் பள்ளிகளில் ஒன்றை நிறுவினர்.",
    },

    description: {
      en: "Godric Gryffindor, Helga Hufflepuff, Rowena Ravenclaw and Salazar Slytherin founded Hogwarts School of Witchcraft and Wizardry. Hidden away from the non-magical world, the castle became a place where young witches and wizards could safely learn to control and understand magic.",
      ta: "காட்ரிக் கிரிஃபிண்டோர், ஹெல்கா ஹஃபிள்பஃப், ரோவேனா ரேவன்க்ளா மற்றும் சலசார் ஸ்லிதரின் ஆகியோர் ஹாக்வார்ட்ஸ் மந்திரப் பள்ளியை நிறுவினர். மந்திரமற்ற உலகத்திலிருந்து மறைக்கப்பட்ட இந்த கோட்டை, இளம் மந்திரவாதிகள் பாதுகாப்பாக மந்திரத்தை கற்கும் இடமாக மாறியது.",
    },

    people: [
      "Godric Gryffindor",
      "Helga Hufflepuff",
      "Rowena Ravenclaw",
      "Salazar Slytherin",
    ],

    places: ["Hogwarts Castle"],

    label: {
      en: "A School Is Born",
      ta: "ஒரு பள்ளி பிறக்கிறது",
    },
  },

  {
    id: "founders-divide",
    number: "03",
    era: "foundations",
    year: "c. 10th Century",
    sortYear: 995,

    importance: "minor",

    image: null,

    title: {
      en: "The Founders Divide",
      ta: "நிறுவனர்களிடையே பிளவு",
    },

    shortDescription: {
      en: "A disagreement over who should be allowed to study magic threatens the unity of Hogwarts.",
      ta: "யார் மந்திரம் கற்க வேண்டும் என்ற கருத்து வேறுபாடு ஹாக்வார்ட்ஸின் ஒற்றுமையை பாதித்தது.",
    },

    description: {
      en: "Salazar Slytherin increasingly disagreed with the other founders over the admission of Muggle-born students. The conflict became severe enough that Slytherin eventually left the school, ending the original partnership between the four founders.",
      ta: "மகிள் குடும்பங்களில் பிறந்த மாணவர்களை சேர்ப்பது குறித்து சலசார் ஸ்லிதரின் மற்ற நிறுவனர்களுடன் கடுமையாக முரண்பட்டார். இந்த மோதல் தீவிரமடைந்ததால் அவர் இறுதியில் ஹாக்வார்ட்ஸை விட்டு வெளியேறினார்.",
    },

    people: [
      "Salazar Slytherin",
      "Godric Gryffindor",
      "Helga Hufflepuff",
      "Rowena Ravenclaw",
    ],

    places: ["Hogwarts Castle"],

    label: {
      en: "The First Division",
      ta: "முதல் பிளவு",
    },
  },

  {
    id: "chamber-created",
    number: "04",
    era: "foundations",
    year: "c. 10th Century",
    sortYear: 996,

    importance: "major",

    image:
      "/images/timeline/events/chamber-secrets.png",

    title: {
      en: "The Chamber of Secrets",
      ta: "ரகசிய அறை",
    },

    shortDescription: {
      en: "A hidden chamber beneath Hogwarts becomes one of the castle's darkest secrets.",
      ta: "ஹாக்வார்ட்ஸின் கீழ் மறைக்கப்பட்ட அறை, கோட்டையின் மிக இருண்ட ரகசியங்களில் ஒன்றாக மாறியது.",
    },

    description: {
      en: "Before leaving Hogwarts, Salazar Slytherin secretly created the Chamber of Secrets. Within it he concealed a Basilisk, intending that one day his heir would open the chamber and unleash the creature.",
      ta: "ஹாக்வார்ட்ஸை விட்டு செல்லும் முன் சலசார் ஸ்லிதரின் ரகசியமாக ரகசிய அறையை உருவாக்கினார். அதன் உள்ளே ஒரு பாசிலிஸ்கை மறைத்து வைத்தார். ஒருநாள் தனது வாரிசு அந்த அறையை திறப்பார் என்று அவர் நம்பினார்.",
    },

    people: ["Salazar Slytherin"],

    places: [
      "Hogwarts Castle",
      "Chamber of Secrets",
    ],

    label: {
      en: "A Secret Beneath the Castle",
      ta: "கோட்டையின் கீழ் ஒரு ரகசியம்",
    },
  },

  // ==========================================================
  // ERA II — SHADOWS BEFORE HARRY
  // ==========================================================

  {
    id: "grindelwald-rise",
    number: "05",
    era: "shadows",
    year: "Early 20th Century",
    sortYear: 1920,

    importance: "minor",

    image: null,

    title: {
      en: "The Rise of Grindelwald",
      ta: "கிரிண்டல்வால்டின் எழுச்சி",
    },

    shortDescription: {
      en: "A powerful dark wizard begins spreading his vision across the magical world.",
      ta: "ஒரு சக்திவாய்ந்த இருண்ட மந்திரவாதி தனது கொள்கையை மந்திர உலகம் முழுவதும் பரப்பத் தொடங்கினார்.",
    },

    description: {
      en: "Gellert Grindelwald became one of the most dangerous dark wizards of his age. His campaign for wizarding dominance spread fear and conflict across Europe and eventually brought him into opposition with Albus Dumbledore.",
      ta: "கெல்லர்ட் கிரிண்டல்வால்ட் தனது காலத்தின் மிக ஆபத்தான இருண்ட மந்திரவாதிகளில் ஒருவராக உயர்ந்தார். அவரது ஆதிக்கக் கொள்கை ஐரோப்பா முழுவதும் அச்சத்தையும் மோதலையும் ஏற்படுத்தியது.",
    },

    people: [
      "Gellert Grindelwald",
      "Albus Dumbledore",
    ],

    places: ["Europe"],

    label: {
      en: "A New Darkness",
      ta: "ஒரு புதிய இருள்",
    },
  },

  {
    id: "tom-riddle-hogwarts",
    number: "06",
    era: "shadows",
    year: "1938",
    sortYear: 1938,

    importance: "major",

    image:
      "/images/timeline/events/tom-riddle-era.png",

    title: {
      en: "Tom Riddle Enters Hogwarts",
      ta: "டாம் ரிடில் ஹாக்வார்ட்ஸில் நுழைகிறார்",
    },

    shortDescription: {
      en: "A brilliant young student arrives at Hogwarts, hiding a dangerous fascination with power and immortality.",
      ta: "மிகுந்த திறமை கொண்ட ஒரு இளம் மாணவன், அதிகாரம் மற்றும் மரணமின்மை மீதான ஆபத்தான ஆர்வத்துடன் ஹாக்வார்ட்ஸில் சேர்கிறான்.",
    },

    description: {
      en: "Tom Marvolo Riddle entered Hogwarts and was sorted into Slytherin. Intelligent, charismatic and exceptionally talented, he gained the admiration of many teachers while secretly exploring increasingly dangerous forms of magic.",
      ta: "டாம் மார்வோலோ ரிடில் ஹாக்வார்ட்ஸில் சேர்ந்து ஸ்லிதரின் இல்லத்திற்கு தேர்ந்தெடுக்கப்பட்டார். புத்திசாலித்தனமும் திறமையும் கொண்ட அவர், மறைவாக மிகவும் ஆபத்தான மந்திரங்களை ஆராயத் தொடங்கினார்.",
    },

    people: [
      "Tom Riddle",
      "Albus Dumbledore",
    ],

    places: [
      "Hogwarts Castle",
      "Slytherin House",
    ],

    label: {
      en: "The Student Who Became Voldemort",
      ta: "வோல்ட்மார்டாக மாறிய மாணவன்",
    },
  },

  {
    id: "chamber-opens-1943",
    number: "07",
    era: "shadows",
    year: "1943",
    sortYear: 1943,

    importance: "major",

    image:
      "/images/timeline/events/chamber-secrets.png",

    title: {
      en: "The Chamber Opens",
      ta: "ரகசிய அறை திறக்கப்படுகிறது",
    },

    shortDescription: {
      en: "Tom Riddle discovers the Chamber of Secrets and unleashes the Basilisk hidden within.",
      ta: "டாம் ரிடில் ரகசிய அறையை கண்டுபிடித்து அதன் உள்ளே இருந்த பாசிலிஸ்கை விடுவிக்கிறார்.",
    },

    description: {
      en: "While studying at Hogwarts, Tom Riddle discovered that he was the heir of Salazar Slytherin. He located the Chamber of Secrets and released its Basilisk. The attacks eventually resulted in the death of Myrtle Warren.",
      ta: "ஹாக்வார்ட்ஸில் படித்தபோது, தானே சலசார் ஸ்லிதரினின் வாரிசு என்பதை டாம் ரிடில் கண்டறிந்தார். அவர் ரகசிய அறையை திறந்து பாசிலிஸ்கை விடுவித்தார். அந்த தாக்குதல்களில் மிர்டில் வாரன் உயிரிழந்தார்.",
    },

    people: [
      "Tom Riddle",
      "Myrtle Warren",
    ],

    places: [
      "Chamber of Secrets",
      "Hogwarts Castle",
    ],

    label: {
      en: "The Monster Awakens",
      ta: "அரக்கன் விழித்தெழுகிறது",
    },
  },

  {
    id: "grindelwald-defeated",
    number: "08",
    era: "shadows",
    year: "1945",
    sortYear: 1945,

    importance: "minor",

    image: null,

    title: {
      en: "Dumbledore Defeats Grindelwald",
      ta: "டம்பிள்டோர் கிரிண்டல்வால்டை தோற்கடிக்கிறார்",
    },

    shortDescription: {
      en: "A legendary duel brings Grindelwald's campaign to an end.",
      ta: "ஒரு புகழ்பெற்ற மந்திரப் போராட்டம் கிரிண்டல்வால்டின் எழுச்சிக்கு முடிவு கட்டியது.",
    },

    description: {
      en: "Albus Dumbledore confronted Gellert Grindelwald in 1945. Dumbledore's victory ended Grindelwald's reign and became one of the most celebrated magical duels in modern wizarding history.",
      ta: "1945 ஆம் ஆண்டு அல்பஸ் டம்பிள்டோர் கெல்லர்ட் கிரிண்டல்வால்டை எதிர்கொண்டார். டம்பிள்டோரின் வெற்றி கிரிண்டல்வால்டின் ஆட்சியை முடிவுக்கு கொண்டு வந்தது.",
    },

    people: [
      "Albus Dumbledore",
      "Gellert Grindelwald",
    ],

    places: ["Europe"],

    label: {
      en: "The Legendary Duel",
      ta: "புகழ்பெற்ற மந்திரப் போர்",
    },
  },

  // ==========================================================
  // ERA III — THE DARK LORD RISES
  // ==========================================================

  {
    id: "voldemort-rises",
    number: "09",
    era: "dark-lord",
    year: "c. 1950s–1970",
    sortYear: 1960,

    importance: "major",

    image:
      "/images/timeline/events/first-wizarding-war.png",

    title: {
      en: "Lord Voldemort Rises",
      ta: "லார்ட் வோல்ட்மார்டின் எழுச்சி",
    },

    shortDescription: {
      en: "Tom Riddle abandons his former identity and emerges as Lord Voldemort.",
      ta: "டாம் ரிடில் தனது பழைய அடையாளத்தை கைவிட்டு லார்ட் வோல்ட்மார்டாக உருவெடுக்கிறார்.",
    },

    description: {
      en: "After leaving Hogwarts, Tom Riddle travelled deeper into the Dark Arts and transformed himself into Lord Voldemort. He gathered followers known as Death Eaters and pursued power, immortality and control over wizarding Britain.",
      ta: "ஹாக்வார்ட்ஸை விட்டு வெளியேறிய பின் டாம் ரிடில் இருண்ட மந்திரங்களில் மேலும் ஆழ்ந்தார். பின்னர் அவர் லார்ட் வோல்ட்மார்ட் என்ற பெயரை ஏற்று டெத் ஈட்டர்களை தன்னைச் சுற்றி திரட்டினார்.",
    },

    people: [
      "Lord Voldemort",
      "Death Eaters",
    ],

    places: ["Wizarding Britain"],

    label: {
      en: "Tom Riddle Disappears",
      ta: "டாம் ரிடில் மறைகிறார்",
    },
  },

  {
    id: "first-wizarding-war",
    number: "10",
    era: "dark-lord",
    year: "1970–1981",
    sortYear: 1970,

    importance: "major",

    image:
      "/images/timeline/events/first-wizarding-war.png",

    title: {
      en: "The First Wizarding War",
      ta: "முதல் மந்திரவாதிகளின் போர்",
    },

    shortDescription: {
      en: "Fear spreads across wizarding Britain as Voldemort and his followers grow increasingly powerful.",
      ta: "வோல்ட்மார்டும் அவரது ஆதரவாளர்களும் வலுப்பெற, மந்திர பிரிட்டன் முழுவதும் அச்சம் பரவுகிறது.",
    },

    description: {
      en: "Voldemort's followers attacked those who opposed them while the Ministry struggled to contain the growing conflict. The Order of the Phoenix formed to resist Voldemort and his Death Eaters.",
      ta: "வோல்ட்மார்டின் ஆதரவாளர்கள் தங்களை எதிர்த்தவர்களை தாக்கினர். அவர்களை எதிர்க்க ஆர்டர் ஆஃப் த பீனிக்ஸ் உருவாக்கப்பட்டது.",
    },

    people: [
      "Lord Voldemort",
      "Albus Dumbledore",
      "Order of the Phoenix",
      "Death Eaters",
    ],

    places: ["Wizarding Britain"],

    label: {
      en: "Britain at War",
      ta: "போரில் மந்திர பிரிட்டன்",
    },
  },

  {
    id: "prophecy",
    number: "11",
    era: "dark-lord",
    year: "1980",
    sortYear: 1980,

    importance: "minor",

    image: null,

    title: {
      en: "The Prophecy",
      ta: "தீர்க்கதரிசனம்",
    },

    shortDescription: {
      en: "A prophecy speaks of a child with the power to challenge the Dark Lord.",
      ta: "இருண்ட ஆண்டவனை எதிர்க்கும் சக்தி கொண்ட ஒரு குழந்தையைப் பற்றி தீர்க்கதரிசனம் கூறுகிறது.",
    },

    description: {
      en: "Sybill Trelawney delivered a prophecy concerning a child who would possess the power to defeat Voldemort. Part of the prophecy eventually reached Voldemort and influenced his decision to target the Potter family.",
      ta: "வோல்ட்மார்டை தோற்கடிக்கக்கூடிய குழந்தையைப் பற்றிய தீர்க்கதரிசனத்தை சிபில் ட்ரெலானி கூறினார். அதன் ஒரு பகுதி வோல்ட்மார்டிடம் சென்றதால் பாட்டர் குடும்பம் அவரது இலக்காக மாறியது.",
    },

    people: [
      "Sybill Trelawney",
      "Albus Dumbledore",
      "Lord Voldemort",
      "Harry Potter",
    ],

    places: ["Hog's Head Inn"],

    label: {
      en: "The Chosen Child",
      ta: "தேர்ந்தெடுக்கப்பட்ட குழந்தை",
    },
  },

  {
    id: "halloween-1981",
    number: "12",
    era: "dark-lord",
    year: "31 October 1981",
    sortYear: 1981,

    importance: "feature",

    image:
      "/images/timeline/events/halloween-1981.png",

    title: {
      en: "The Fall of Voldemort",
      ta: "வோல்ட்மார்டின் வீழ்ச்சி",
    },

    shortDescription: {
      en: "A single night at Godric's Hollow changes the wizarding world forever.",
      ta: "காட்ரிக்ஸ் ஹாலோவில் நடந்த ஒரு இரவு மந்திர உலகத்தின் வரலாற்றையே மாற்றியது.",
    },

    description: {
      en: "Voldemort attacked the Potter family at Godric's Hollow. James and Lily Potter were killed, but when Voldemort attempted to kill their infant son Harry, the curse rebounded. Voldemort disappeared and Harry became known throughout the wizarding world as the Boy Who Lived.",
      ta: "காட்ரிக்ஸ் ஹாலோவில் வோல்ட்மார்ட் பாட்டர் குடும்பத்தை தாக்கினார். ஜேம்ஸ் மற்றும் லில்லி பாட்டர் உயிரிழந்தனர். ஆனால் குழந்தையான ஹாரியை கொல்ல முயன்றபோது சாபம் வோல்ட்மார்டின் மீதே திரும்பியது. ஹாரி 'உயிர் பிழைத்த சிறுவன்' என்று மந்திர உலகம் முழுவதும் அறியப்பட்டான்.",
    },

    people: [
      "Harry Potter",
      "Lily Potter",
      "James Potter",
      "Lord Voldemort",
    ],

    places: ["Godric's Hollow"],

    label: {
      en: "The Boy Who Lived",
      ta: "உயிர் பிழைத்த சிறுவன்",
    },
  },

  // ==========================================================
  // ERA IV — THE HOGWARTS YEARS
  // ==========================================================

  {
    id: "harry-hogwarts",
    number: "13",
    era: "hogwarts-years",
    year: "1991",
    sortYear: 1991,

    importance: "feature",

    image:
      "/images/timeline/events/harry-arrives-hogwarts.png",

    title: {
      en: "Harry Enters Hogwarts",
      ta: "ஹாரி ஹாக்வார்ட்ஸில் நுழைகிறார்",
    },

    shortDescription: {
      en: "Eleven-year-old Harry Potter discovers the magical world and begins his first year at Hogwarts.",
      ta: "பதினொரு வயது ஹாரி பாட்டர் மந்திர உலகத்தை அறிந்து ஹாக்வார்ட்ஸில் தனது முதல் ஆண்டை தொடங்குகிறான்.",
    },

    description: {
      en: "Harry Potter received his invitation to Hogwarts and entered the wizarding world for the first time. Sorted into Gryffindor, he became close friends with Ron Weasley and Hermione Granger and began uncovering secrets connected to his own past.",
      ta: "ஹாரி பாட்டர் ஹாக்வார்ட்ஸ் அழைப்பைப் பெற்று முதன்முறையாக மந்திர உலகிற்குள் நுழைந்தான். கிரிஃபிண்டோர் இல்லத்திற்கு தேர்ந்தெடுக்கப்பட்ட அவன் ரான் வீஸ்லி மற்றும் ஹெர்மயோனி கிரேஞ்சருடன் நெருங்கிய நண்பனானான்.",
    },

    people: [
      "Harry Potter",
      "Ron Weasley",
      "Hermione Granger",
    ],

    places: [
      "Hogwarts Castle",
      "Gryffindor House",
    ],

    label: {
      en: "The Journey Begins",
      ta: "பயணம் தொடங்குகிறது",
    },
  },

  {
    id: "chamber-reopened",
    number: "14",
    era: "hogwarts-years",
    year: "1992",
    sortYear: 1992,

    importance: "major",

    image:
      "/images/timeline/events/chamber-secrets.png",

    title: {
      en: "The Chamber Reopens",
      ta: "ரகசிய அறை மீண்டும் திறக்கப்படுகிறது",
    },

    shortDescription: {
      en: "The ancient terror hidden beneath Hogwarts awakens once again.",
      ta: "ஹாக்வார்ட்ஸின் கீழ் மறைந்திருந்த பழமையான அச்சம் மீண்டும் விழித்தெழுகிறது.",
    },

    description: {
      en: "Students at Hogwarts were mysteriously petrified as the Chamber of Secrets was opened again through Tom Riddle's enchanted diary. Harry eventually entered the chamber, confronted the Basilisk and destroyed the diary.",
      ta: "டாம் ரிடிலின் மந்திர நாட்குறிப்பின் மூலம் ரகசிய அறை மீண்டும் திறக்கப்பட்டது. பல மாணவர்கள் தாக்கப்பட்டனர். இறுதியில் ஹாரி அறைக்குள் சென்று பாசிலிஸ்கை எதிர்த்து நாட்குறிப்பை அழித்தான்.",
    },

    people: [
      "Harry Potter",
      "Ginny Weasley",
      "Tom Riddle",
    ],

    places: [
      "Chamber of Secrets",
      "Hogwarts Castle",
    ],

    label: {
      en: "The Heir Returns",
      ta: "வாரிசு திரும்புகிறார்",
    },
  },

  {
    id: "sirius-returns",
    number: "15",
    era: "hogwarts-years",
    year: "1993",
    sortYear: 1993,

    importance: "minor",

    image: null,

    title: {
      en: "Sirius Black Returns",
      ta: "சிரியஸ் பிளாக் திரும்புகிறார்",
    },

    shortDescription: {
      en: "An escaped prisoner leads Harry toward the hidden truth about his parents' final night.",
      ta: "தப்பிய கைதி ஒருவர் ஹாரியின் பெற்றோரின் கடைசி இரவைப் பற்றிய மறைக்கப்பட்ட உண்மைக்கு அவனை அழைத்துச் செல்கிறார்.",
    },

    description: {
      en: "Sirius Black escaped from Azkaban and appeared to be hunting Harry. The truth revealed that Sirius was Harry's godfather and that Peter Pettigrew had betrayed James and Lily Potter.",
      ta: "சிரியஸ் பிளாக் அஸ்கபானிலிருந்து தப்பினார். ஆரம்பத்தில் அவர் ஹாரியை கொல்ல வருகிறார் என்று நம்பப்பட்டது. ஆனால் பின்னர் அவர் ஹாரியின் காட்ஃபாதர் என்றும் பீட்டர் பெட்டிக்ரூ தான் பாட்டர் குடும்பத்தை துரோகம் செய்தார் என்றும் தெரியவந்தது.",
    },

    people: [
      "Sirius Black",
      "Harry Potter",
      "Remus Lupin",
      "Peter Pettigrew",
    ],

    places: [
      "Hogwarts",
      "Shrieking Shack",
    ],

    label: {
      en: "A Hidden Truth",
      ta: "மறைக்கப்பட்ட உண்மை",
    },
  },

  {
    id: "triwizard",
    number: "16",
    era: "hogwarts-years",
    year: "1994",
    sortYear: 1994,

    importance: "major",

    image: null,

    title: {
      en: "The Triwizard Tournament",
      ta: "ட்ரைவிசார்ட் போட்டி",
    },

    shortDescription: {
      en: "An ancient magical competition returns to Hogwarts — and Harry is unexpectedly chosen.",
      ta: "பழமையான மந்திரப் போட்டி ஹாக்வார்ட்ஸுக்கு திரும்புகிறது — எதிர்பாராத விதமாக ஹாரி தேர்ந்தெடுக்கப்படுகிறான்.",
    },

    description: {
      en: "Hogwarts hosted the Triwizard Tournament alongside Beauxbatons and Durmstrang. Although underage, Harry's name mysteriously emerged from the Goblet of Fire, forcing him to compete as an additional champion.",
      ta: "ஹாக்வார்ட்ஸ், பியூக்ஸ்பேட்டன்ஸ் மற்றும் டர்ம்ஸ்ட்ராங் பள்ளிகளுடன் ட்ரைவிசார்ட் போட்டியை நடத்தியது. வயது குறைவாக இருந்தபோதும் ஹாரியின் பெயர் கோப்லெட் ஆஃப் ஃபயரில் இருந்து வெளிவந்து அவனை போட்டியில் பங்கேற்க வைத்தது.",
    },

    people: [
      "Harry Potter",
      "Cedric Diggory",
      "Viktor Krum",
      "Fleur Delacour",
    ],

    places: ["Hogwarts Castle"],

    label: {
      en: "Three Schools. Four Champions.",
      ta: "மூன்று பள்ளிகள். நான்கு வீரர்கள்.",
    },
  },

  {
    id: "voldemort-returns",
    number: "17",
    era: "hogwarts-years",
    year: "24 June 1995",
    sortYear: 1995,

    importance: "feature",

    image:
      "/images/timeline/events/voldemort-returns.png",

    title: {
      en: "Voldemort Returns",
      ta: "வோல்ட்மார்ட் திரும்புகிறார்",
    },

    shortDescription: {
      en: "The Dark Lord regains a physical body, ending more than a decade of uneasy peace.",
      ta: "இருண்ட ஆண்டவன் மீண்டும் உடலைப் பெறுகிறான். பத்து ஆண்டுகளுக்கும் மேலான அமைதி முடிவுக்கு வருகிறது.",
    },

    description: {
      en: "The Triwizard Cup transported Harry and Cedric Diggory to a graveyard. Cedric was killed, and a dark ritual restored Voldemort to physical form. Harry escaped and returned to Hogwarts carrying the warning that Voldemort had returned.",
      ta: "ட்ரைவிசார்ட் கோப்பை ஹாரி மற்றும் செட்ரிக் டிகோரியை ஒரு கல்லறைக்கு கொண்டு சென்றது. செட்ரிக் கொல்லப்பட்டார். இருண்ட சடங்கின் மூலம் வோல்ட்மார்ட் மீண்டும் உடலைப் பெற்றார். ஹாரி தப்பித்து ஹாக்வார்ட்ஸுக்கு திரும்பினான்.",
    },

    people: [
      "Harry Potter",
      "Lord Voldemort",
      "Cedric Diggory",
      "Peter Pettigrew",
    ],

    places: ["Little Hangleton Graveyard"],

    label: {
      en: "The Dark Lord Returns",
      ta: "இருண்ட ஆண்டவன் திரும்புகிறார்",
    },
  },

  {
    id: "department-mysteries",
    number: "18",
    era: "hogwarts-years",
    year: "1996",
    sortYear: 1996,

    importance: "minor",

    image: null,

    title: {
      en: "Battle of the Department of Mysteries",
      ta: "மர்மத் துறையின் போர்",
    },

    shortDescription: {
      en: "Harry and his friends confront Death Eaters deep inside the Ministry of Magic.",
      ta: "மந்திர அமைச்சகத்தின் ஆழத்தில் ஹாரியும் அவரது நண்பர்களும் டெத் ஈட்டர்களை எதிர்கொள்கிறார்கள்.",
    },

    description: {
      en: "Harry and several members of Dumbledore's Army entered the Department of Mysteries while attempting to rescue Sirius Black. A battle followed between the students, Death Eaters and members of the Order of the Phoenix.",
      ta: "சிரியஸ் பிளாக்கை காப்பாற்ற முயன்ற ஹாரியும் டம்பிள்டோரின் படையைச் சேர்ந்த சில மாணவர்களும் மர்மத் துறைக்குள் நுழைந்தனர். அங்கு டெத் ஈட்டர்களுடன் கடுமையான மந்திரப் போர் நடைபெற்றது.",
    },

    people: [
      "Harry Potter",
      "Sirius Black",
      "Order of the Phoenix",
      "Death Eaters",
    ],

    places: [
      "Ministry of Magic",
      "Department of Mysteries",
    ],

    label: {
      en: "War Becomes Visible",
      ta: "போர் வெளிப்படுகிறது",
    },
  },

  {
    id: "dumbledore-death",
    number: "19",
    era: "hogwarts-years",
    year: "1997",
    sortYear: 1997,

    importance: "major",

    image: null,

    title: {
      en: "The Death of Dumbledore",
      ta: "டம்பிள்டோரின் மரணம்",
    },

    shortDescription: {
      en: "Hogwarts loses its greatest protector as the Second Wizarding War deepens.",
      ta: "இரண்டாம் மந்திரப் போர் தீவிரமடையும் போது ஹாக்வார்ட்ஸ் தனது மிகப்பெரிய பாதுகாவலரை இழக்கிறது.",
    },

    description: {
      en: "After returning from a mission with Harry, a weakened Albus Dumbledore was confronted atop the Astronomy Tower. Severus Snape killed Dumbledore, leaving Hogwarts and the wider wizarding world facing an uncertain future.",
      ta: "ஹாரியுடன் ஒரு முக்கியமான பயணத்திலிருந்து திரும்பிய டம்பிள்டோர் அஸ்ட்ரானமி கோபுரத்தில் எதிர்கொள்ளப்பட்டார். செவரஸ் ஸ்னேப் அவரை கொன்றார். இதனால் ஹாக்வார்ட்ஸ் தனது மிகப்பெரிய பாதுகாவலரை இழந்தது.",
    },

    people: [
      "Albus Dumbledore",
      "Severus Snape",
      "Harry Potter",
      "Draco Malfoy",
    ],

    places: [
      "Hogwarts",
      "Astronomy Tower",
    ],

    label: {
      en: "The Headmaster Falls",
      ta: "தலைமை ஆசிரியர் வீழ்கிறார்",
    },
  },

  {
    id: "battle-hogwarts",
    number: "20",
    era: "hogwarts-years",
    year: "2 May 1998",
    sortYear: 1998,

    importance: "climax",

    image:
      "/images/timeline/events/battle-hogwarts.png",

    title: {
      en: "The Battle of Hogwarts",
      ta: "ஹாக்வார்ட்ஸ் போர்",
    },

    shortDescription: {
      en: "The castle becomes the final battlefield in the struggle against Lord Voldemort.",
      ta: "லார்ட் வோல்ட்மார்டுக்கு எதிரான போராட்டத்தின் இறுதி போர்க்களமாக ஹாக்வார்ட்ஸ் மாறுகிறது.",
    },

    description: {
      en: "Students, professors, members of the Order of the Phoenix and their allies defended Hogwarts against Voldemort and his forces. The battle became the decisive confrontation of the Second Wizarding War and resulted in enormous sacrifice across the wizarding community.",
      ta: "மாணவர்கள், பேராசிரியர்கள், ஆர்டர் ஆஃப் த பீனிக்ஸ் உறுப்பினர்கள் மற்றும் அவர்களது கூட்டாளிகள் வோல்ட்மார்டின் படைகளுக்கு எதிராக ஹாக்வார்ட்ஸை பாதுகாத்தனர். இந்த போர் இரண்டாம் மந்திரப் போரின் தீர்மானிக்கும் மோதலாக அமைந்தது.",
    },

    people: [
      "Harry Potter",
      "Hermione Granger",
      "Ron Weasley",
      "Lord Voldemort",
      "Neville Longbottom",
      "Hogwarts Defenders",
    ],

    places: ["Hogwarts Castle"],

    label: {
      en: "The Final Battle",
      ta: "இறுதி போர்",
    },
  },

  // ==========================================================
  // ERA V — AFTER THE WAR
  // ==========================================================

  {
    id: "voldemort-defeated",
    number: "21",
    era: "aftermath",
    year: "2 May 1998",
    sortYear: 1998.1,

    importance: "major",

    image: null,

    title: {
      en: "Voldemort Is Defeated",
      ta: "வோல்ட்மார்ட் தோற்கடிக்கப்படுகிறார்",
    },

    shortDescription: {
      en: "The destruction of the Horcruxes leaves Voldemort mortal, allowing the war to finally end.",
      ta: "ஹார்க்ரக்ஸ்கள் அழிக்கப்பட்டதால் வோல்ட்மார்ட் மரணமடையக்கூடியவராக மாறி போர் முடிவுக்கு வருகிறது.",
    },

    description: {
      en: "With Voldemort's Horcruxes destroyed, Harry confronted him for the final time inside Hogwarts. Voldemort's own curse rebounded upon him, ending his life and bringing the Second Wizarding War to an end.",
      ta: "வோல்ட்மார்டின் ஹார்க்ரக்ஸ்கள் அழிக்கப்பட்ட பிறகு ஹாரி அவரை ஹாக்வார்ட்ஸில் இறுதியாக எதிர்கொண்டான். வோல்ட்மார்டின் சாபமே அவர்மீது திரும்பி அவரது வாழ்க்கையையும் போரையும் முடிவுக்கு கொண்டு வந்தது.",
    },

    people: [
      "Harry Potter",
      "Lord Voldemort",
    ],

    places: ["Hogwarts Castle"],

    label: {
      en: "The War Ends",
      ta: "போர் முடிகிறது",
    },
  },

  {
    id: "wizarding-world-rebuilds",
    number: "22",
    era: "aftermath",
    year: "After 1998",
    sortYear: 2000,

    importance: "minor",

    image: null,

    title: {
      en: "The Wizarding World Rebuilds",
      ta: "மந்திர உலகம் மீண்டும் எழுகிறது",
    },

    shortDescription: {
      en: "After years of fear and conflict, the magical community begins rebuilding.",
      ta: "பல ஆண்டுகள் நீடித்த அச்சமும் போராட்டமும் முடிந்த பின் மந்திர சமூகம் மீண்டும் கட்டமைக்கத் தொடங்குகிறது.",
    },

    description: {
      en: "The defeat of Voldemort allowed wizarding Britain to begin recovering from years of conflict. Hogwarts was repaired, families rebuilt their lives and a new generation grew up in a world no longer controlled by the Dark Lord.",
      ta: "வோல்ட்மார்டின் தோல்விக்குப் பிறகு மந்திர பிரிட்டன் பல ஆண்டுகால போரிலிருந்து மீளத் தொடங்கியது. ஹாக்வார்ட்ஸ் சீரமைக்கப்பட்டது. குடும்பங்கள் தங்கள் வாழ்க்கையை மீண்டும் கட்டமைத்தன.",
    },

    people: [
      "Harry Potter",
      "Hermione Granger",
      "Ron Weasley",
    ],

    places: [
      "Wizarding Britain",
      "Hogwarts",
    ],

    label: {
      en: "A New Beginning",
      ta: "ஒரு புதிய தொடக்கம்",
    },
  },

  {
    id: "nineteen-years-later",
    number: "23",
    era: "aftermath",
    year: "2017",
    sortYear: 2017,

    importance: "feature",

    image:
      "/images/timeline/events/nineteen-years-later.png",

    title: {
      en: "Nineteen Years Later",
      ta: "பத்தொன்பது ஆண்டுகள் கழித்து",
    },

    shortDescription: {
      en: "A new generation steps aboard the Hogwarts Express and begins a story of its own.",
      ta: "ஒரு புதிய தலைமுறை ஹாக்வார்ட்ஸ் எக்ஸ்பிரஸில் ஏறி தங்களது புதிய கதையை தொடங்குகிறது.",
    },

    description: {
      en: "Nineteen years after the Battle of Hogwarts, Harry, Ginny, Ron and Hermione returned to King's Cross as parents. Their children boarded the Hogwarts Express, symbolising a generation able to enter the magical world without growing up beneath Voldemort's shadow.",
      ta: "ஹாக்வார்ட்ஸ் போருக்கு பத்தொன்பது ஆண்டுகள் கழித்து ஹாரி, ஜின்னி, ரான் மற்றும் ஹெர்மயோனி பெற்றோர்களாக கிங்ஸ் கிராஸுக்கு திரும்பினர். அவர்களின் குழந்தைகள் ஹாக்வார்ட்ஸ் எக்ஸ்பிரஸில் பயணத்தை தொடங்கினர்.",
    },

    people: [
      "Harry Potter",
      "Ginny Weasley",
      "Ron Weasley",
      "Hermione Granger",
      "The Next Generation",
    ],

    places: [
      "King's Cross",
      "Platform Nine and Three-Quarters",
    ],

    label: {
      en: "The Story Continues",
      ta: "கதை தொடர்கிறது",
    },
  },
];

export default timelineData;