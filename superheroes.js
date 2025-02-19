const superheroes = [
  {
    abilities: ["Procarastination", "Mispelling"],
    enemies: ["Me", "Myself", "I"],
    alias: "Tom Cruise",
    weakness: "No-talent.exe",
    primaryColor: "yellowgreen",
    enemies: ["ShovelMan", "Lord Destroyer von Duck"],
    hasCape: true,
    weakness: "candy",
    speed: 100,
    dob: {
      month: 12,
      day: 24,
      year: 0,
    },
    img: "https://static.wikia.nocookie.net/onepiece/images/6/66/Shanks_Anime_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20180607083158",
  },
  {
    abilities: ["make people happy (good slogan)"],
    primaryColor: "hotpink",
    enemies: ["Faxe Konde", "Cola Coca", "Skwash"],
    hasCape: true,
    weakness: "Alcohol",
    speed: 1,
    dob: {
      month: 1,
      day: 1,
      year: 1,
    },
    alias: "Dom Perignon",
    img: "https://cdn.bevco.dk/cdn-cgi/image/format%3Dauto/https%3A//cdn.bevco.dk/thumbnail/1a/58/03/1641202663/dom-perignon-2009-magnum-champagne-12-5-1-5-l-f2f16_644x644.jpg",
  },
  {
    abilities: ["Gay", "Beer", "Can bike without hands"],
    primaryColor: "#3FF726",
    enemies: ["Google Chrome", "Mark Zuckerberg"],
    hasCape: true,
    weakness: "Tequila",
    speed: 3,
    dob: {
      month: 3,
      day: 31,
      year: 1998,
    },
    alias: "Penguinman",
    img: "https://cdn.pixabay.com/photo/2012/04/26/19/47/penguin-42936_1280.png",
  },
  {
    abilities: ["Pats shoulders vigorously", "Brings positivity"],
    primaryColor: "Blue",
    enemies: ["SlapMan"],
    hasCape: true,
    weakness: "Stupid",
    speed: 1,
    dob: {
      month: 1,
      day: 1,
      year: 1991,
    },
    alias: "PatMan",
    img: "https://yt3.ggpht.com/ytc/AMLnZu8T1x2-1LsvqJTN4GoW2uioFVD1tQbMqeasVxbHDw=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    abilities: ["Shooting", "Dribbling", "being cool"],
    primaryColor: "blue",
    enemies: ["CR7", "Mbappe", "Neymar"],
    hasCape: true,
    weakness: "?",
    speed: 9,
    dob: {
      month: 6,
      day: 24,
      year: 1987,
    },
    alias: "Super GOAT",
    img: "https://twitter.com/Argentina/status/1532127349117882368/photo/1",
  },
  {
    abilities: ["Acid Urine", "Explosive Stool"],
    primaryColor: "#5d532f",
    enemies: ["Captain Toilet Cleaner", "Dr Zebra Rider"],
    hasCape: true,
    weakness: "Laxatives",
    speed: 150,
    dob: {
      month: 23,
      day: 5,
      year: 1945,
    },
    alias: "Filthy Socrates",
    img: "https://res.cloudinary.com/electronic-beats/c_fit,q_auto,f_auto,w_2880/stage/uploads/2015/06/clubtoilets_header.jpg",
  },
  {
    abilities: ["fighting", "running"],
    primaryColor: "blue",
    enemies: ["USA", "China"],
    hasCape: true,
    weakness: "inflation",
    speed: 9,
    dob: {
      month: 7,
      day: 11,
      year: 1666,
    },
    alias: "Captain NFT",
    img: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/5320108599674594348646158577384352184938786183695382630572220594933202944010",
  },
  {
    abilities: ["eat", "run"],
    primaryColor: "pink",
    enemies: ["birds", "spider"],
    hasCape: true,
    weakness: "sleepy",
    speed: 10,
    dob: {
      month: 7,
      day: 20,
      year: 1960,
    },
    alias: "Pink Power Panther",
    img: "data:image/jpeg;base64,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",
  },
  {
    alias: "Jake the Dog",
    abilities: ["Stretchy powers", "Butt-kicking", "Skateboarding"],
    primaryColor: "Yellow",
    enemies: ["The Lich", "Ice King"],
    hasCape: false,
    weakness: "Sleep",
    speed: 1,
    dob: {
      month: "unknown",
      day: "unknown",
      year: "unknown",
    },
    img: "https://static.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/3b/Jakesalad.png/revision/latest?cb=20190807133015",
  },
  {
    abilities: ["JS", "Beer"],
    primaryColor: "pink",
    enemies: ["Kids", "Karl"],
    hasCape: false,
    weakness: "None",
    speed: 4,
    dob: {
      month: 8,
      day: 6,
      year: 2000,
    },
    alias: "KarenTheSuperhero",
    img: "https://thumbs.dreamstime.com/b/superhero-woman-holding-stick-teaching-isolated-white-85207945.jpg",
  },
  {
    abilities: ["Death Stab", "Twisting Slash"],
    primaryColor: "#808080",
    enemies: ["Wizzard", "Magic Gladiator"],
    hasCape: "false",
    weakness: "None",
    speed: 4,
    dob: {
      month: 8,
      day: 6,
      year: 2000,
    },

    alias: "-SmaShing-",
    img: "https://muonlione.fandom.com/pl/wiki/Horn_of_Urnii",
  },
  {
    alias: "Koukoumafka",
    abilities: ["kill with her eyes"],
    primaryColor: "blue",
    enemies: ["drunk Danes"],
    hasCape: true,
    weakness: "JS",
    speed: 3,
    dob: {
      month: 1,
      day: 21,
      year: 1991,
    },
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fethernews.com%2Fwp-content%2Fuploads%2F2020%2F04%2Fti-shmainei-h-lexi-koukoumfaka.jpg&imgrefurl=https%3A%2F%2Fethernews.com%2Fti-shmainei-h-lexh-koukoumfaka%2F&tbnid=JO6bj25dzTYdCM&vet=12ahUKEwim_omdjuT5AhW6lv0HHQC6D8AQMygAegQIARBY..i&docid=1pOMfT516jyPpM&w=1400&h=937&q=koukoumafka&ved=2ahUKEwim_omdjuT5AhW6lv0HHQC6D8AQMygAegQIARBY",
  },
  {
    abilities: ["claws", "speed"],
    primaryColor: "#000000",
    enemies: ["dogs", "water", "hairball"],
    hasCape: false,
    weakness: "mice",
    speed: 100,
    dob: {
      month: 9,
      day: 9,
      year: 1999,
    },
    alias: "KatWoman",
    img: "https://www.kindpng.com/picc/m/138-1389672_catwoman-transparent-original-comic-catwoman-villain-hd-png.png",
  },
  {
    abilities: ["rapid absorption of alcohol", "10 beers in 10 minutes"],
    primaryColor: "#f28e1c",
    enemies: ["also alcohol"],
    hasCape: true,
    weakness: "Non_alcohol_drinks",
    speed: 4,
    dob: {
      month: 1,
      day: 1,
      year: 1,
    },
    alias: "alcHero - Drink destroyer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1NgXTpLEqkLC2o4OZ_73sd7axv5wEZC6Nw&usqp=CAU",
  },
  {
    abilities: ["High IQ", "Sneaky"],
    primaryColor: "808080",
    enemies: ["Superman", "Batman", "Ironman"],
    hasCape: false,
    weakness: "None",
    speed: 8,
    dob: {
      month: 8,
      day: 26,
      year: 2001,
    },
    alias: "Pesty Samurai",
    img: "https://www.downloadclipart.net/large/samurai-png-photos.png",
  },
  {
    abilities: ["Truth", "Love", "Spells"],
    primaryColor: "Pink",
    enemies: ["Liars", "Haters"],
    hasCape: true,
    weakness: "None",
    speed: 3,
    dob: {
      month: 3,
      day: 3,
      year: 1988,
    },
    alias: "The Wise Witch",
    img: "https://en.wikipedia.org/wiki/Witchcraft#/media/File:John_William_Waterhouse_-_Magic_Circle.JPG",
  },
  {
    abilities: ["sweettooth", "great taste", "agility"],
    primaryColor: "magenta",
    enemies: ["locks", "spoons", "sleepwalkers", "light switches"],
    hasCape: false,
    weakness: "judgemental looking",
    speed: 9.99,

    dob: {
      month: 3,
      day: 13,
      year: 2013,
    },
    alias: "The one who makes cake disappear overnight",
    img: "https://image.shutterstock.com/image-photo/ice-cream-cake-refrigerator-260nw-352240271.jpg",
  },
  {
    abilities: ["flying", "reading"], //hard brackets for arrays only
    primaryColor: "Red",
    enemies: ["Javascrip"],
    hasCape: false, //no brackets for boolean
    weakness: "None",
    speed: 4,
    dob: {
      day: 25,
      month: 12,
      year: 1879,
    },
    alias: "Windy Wendy",
    img: "https://e7.pngegg.com/pngimages/612/746/png-clipart-marvel-storm-illustration-marvel-avengers-alliance-storm-carol-danvers-ultron-marvel-comics-storm-x-men-file-comics-fictional-character-thumbnail.png",
  },
  {
    abilities: ["fallinginfunnyways", "snoozingtheallarmathousandtimes"],
    primaryColor: "#003300",
    enemies: ["cupboards", "earlymornings"],
    hasCape: true,
    weakness: "chocolate",
    speed: 1,
    dob: {
      month: 11,
      day: 4,
      year: 1920,
    },
    alias: "mandragola",
    img: "https://pixabay.com/images/id-24752/",
  },
  {
    abilities: ["Breathing", "Blinking"],
    primaryColor: "",
    enemies: ["Winter"],
    hasCape: false,
    weakness: "None",
    speed: 9,
    dob: {
      month: 11,
      day: 10,
      year: 1994,
    },
    alias: "The Least Notorious",
    img: "https://images.unsplash.com/photo-1636247639271-5f9001230a95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
  },
  {
    abilities: ["run", "nordicwalking"],
    primaryColor: "pink",
    enemies: ["haters", "athletes"],
    hasCape: true,
    weakness: "Chocolate",
    speed: 8,
    dob: {
      month: 2,
      day: 7,
      year: 1900,
    },
    alias: "Miss Girl",
    img: "https://st4.depositphotos.com/1163454/20986/v/600/depositphotos_209866352-stock-video-superheroine-standing-tall-in-city.mp4",
  },
  {
    abilities: ["pixel pushing"],
    primaryColor: "Dark Grey",
    enemies: ["UX researcher", "Avengers"],
    hasCape: false,
    weakness: "UX",
    speed: 10,
    dob: {
      month: 6,
      day: 9,
      year: 3000,
    },
    alias: "Pixel Pusher",
    img: "https://www.istockphoto.com/vector/a-vector-image-of-a-villain-that-is-wearing-a-cape-gm164303473-9769453",
  },
  {
    abilities: ["screaming", "killingYourNoisyNeighbour"],
    primaryColor: "babyBlue",
    enemies: ["Sarah", "Mioara", "Kamarini", "Sam", "Samuel", "Sam2"],
    hasCape: true,
    weakness: "dogs",
    speed: 2,
    dob: {
      month: 11,
      day: 11,
      year: 1111,
    },

    alias: "Amazonica kill it with kindness",
    img: "https://images.squarespace-cdn.com/content/v1/5ecee8ccbaacf76f4d3ca700/1624471710824-T71C7ZEC43AB66A00EEM/89549259_3553088924765370_479886162090000384_n.jpg",
  },
  {
    alias: "Lady MacDeath",
    abilities: ["ruthless", "restless b***h face"],
    primaryColor: "#00008B",
    enemies: ["monarchs"],
    hasCape: false,
    weakness: "husband",
    speed: 8,
    dob: {
      month: 4,
      day: 26,
      year: 1616,
    },
    img: "https://writersblockmagazine.files.wordpress.com/2021/07/fbb3e834-2d69-4f34-b97e-3f0e413a94fa.jpeg",
  },
  {
    alias: "N/A",
    abilities: ["js", "beer", "coding"],
    primaryColor: "#00000",
    enemies: ["my relatives", "my mom.s", "my_partner"],
    hasCape: false,
    weakness: "none",
    speed: 4,
    dob: {
      month: 4,
      day: 14,
      year: 1999,
    },
    img: "https://i.ytimg.com/vi/HzGUaf1So40/hqdefault.jpg",
  },
  {
    abilities: ["eating", "sleeping"],
    primaryColor: "brown",
    enemies: ["summer"],
    hasCape: false,
    weakness: "sports",
    speed: 0,
    dob: {
      month: 6,
      day: 12,
      year: 1967,
    },

    alias: "Hungry Potato",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/17ab3e50-3925-4be3-b2bc-b541824227f5/def3lr2-518c44cc-a09f-482b-8ec7-b0d22a4fe873.png/v1/fill/w_500,h_500,q_80,strp/tis_a_hungry_potato_by_creamcupcakefrosting_def3lr2-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTAwIiwicGF0aCI6IlwvZlwvMTdhYjNlNTAtMzkyNS00YmUzLWIyYmMtYjU0MTgyNDIyN2Y1XC9kZWYzbHIyLTUxOGM0NGNjLWEwOWYtNDgyYi04ZWM3LWIwZDIyYTRmZTg3My5wbmciLCJ3aWR0aCI6Ijw9NTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.wkkmWdKaXqFAW0daF-39A8p9OHYKTd7tvOWPpuAgz-8",
  },
  {
    alias: "Azula",
    primaryColor: "Red",
    enemies: ["My brother", "Peanuts"],
    hasCape: false,
    weakness: "JS",
    dob: {
      month: 11,
      day: 11,
      year: 2000,
    },
    img: "https://www.rotoscopers.com/2014/10/01/villain-vignettes-princess-azula/",
    abilities: ["shovelling"],
  },

  {
    abilities: ["fart", "stinky", "fly"],
    primaryColor: "#964B00",
    enemies: ["shower", "soap", "toilet paper"],
    hasCape: true,
    weakness: "cant Smell",
    speed: 10,
    alias: "FARTMAN",
    img: "https://image.apktoy.com/img/58/com.ApphicGames.FartHero/icon.png",
    dob: {
      month: 11,
      day: 11,
      year: 2011,
    },
  },
  {
    abilities: ["run", "nordicwalking"],
    primaryColor: "pink",
    enemies: ["haters", "athletes"],
    hasCape: true,
    weakness: "Chocolate",
    speed: 8,
    dob: {
      month: 2,
      day: 7,
      year: 1900,
    },
    alias: "Miss Girl",
    img: "https://st4.depositphotos.com/1163454/20986/v/600/depositphotos_209866352-stock-video-superheroine-standing-tall-in-city.mp4",
  },
  {
    abilities: ["Can talk to Komodo Dragons", "Time Travelling Finger"],
    primaryColor: "#FF4500",
    hasCape: true,
    enemies: ["My Girlfriend", "Piers Morgan"],
    weakness: "terrible at maths",
    speed: 500000000000000000000000,
    dob: {
      month: 11,
      day: 23,
      year: 1984,
    },
    alias: "The Crimson Benidorm",
    img: "http://abrittabroad.dk/superhero_info/",
  },
  {
    abilities: ["tekkers", "calmness"],
    primaryColor: "#800080",
    enemies: ["Fire Giant, Malinia, The Elden Beast "],
    hasCape: false,
    weakness: "too passionate",
    speed: 69,
    dob: {
      month: 2,
      day: 29,
      year: 1996,
    },
    alias: "The Kitty Killer",
    img: "https://www.dreamstime.com/stock-images-aggressive-kitten-image7168894",
  },
  {
    abilities: ["JS", "Beer"],
    primaryColor: "#808080",
    enemies: ["My kids", "Lasse", "Mathias"],
    hasCape: false,
    weakness: "None",
    speed: 4,
    dob: {
      month: 8,
      day: 6,
      year: 2000,
    },
    alias: "Lord Destroyer van der Doom",
    img: "https://static.wikia.nocookie.net/marveldatabase/images/8/82/Destroyer_%28Doom%27s_Creation%29_from_Thor_Vol_1_605_001.jpg/revision/latest/scale-to-width-down/612?cb=20100213174317",
  },
  {
    abilities: ["Invisibility", "silence"],
    primaryColor: "yellowgreen",
    enemies: ["ShovelMan", "Lord Destroyer von Duck"],
    hasCape: true,
    weakness: "candy",
    speed: 100,
    dob: {
      month: 12,
      day: 24,
      year: 0,
    },
    alias: "Invisible Man",
    img: "https://ats-heritage.co.uk/wp-content/uploads/2016/09/iStock_96204197_XLARGE.jpg",
  },
];

console.table(superheroes);

/* write your code here */

// const impTemplate = document.querySelector("template").content

// const theClone = impTemplate.cloneNode(true)

// theClone.querySelector("h2").textContent = superheroes.alias

// const parentElement = document.querySelector("body")

// parentElement.appendChild(theClone)

superheroes.forEach(displayThem)

function displayThem(superheroes) {
  const impTemplate = document.querySelector("template").content
  const theClone = impTemplate.cloneNode(true)
  theClone.querySelector("h2").textContent = superheroes.alias
  theClone.querySelector("#attAbilities").textContent = `Abilities: ${superheroes.abilities}`
  theClone.querySelector("#attEnemies").textContent = `Enemies: ${superheroes.enemies}`
  theClone.querySelector("#attWeakness").textContent = `Weakness: ${superheroes.weakness}`
  theClone.querySelector("#attColor").textContent = `Primary Color: ${superheroes.primaryColor}`
  theClone.querySelector("#attCape").textContent = `Wears cape: ${superheroes.hasCape}`
  theClone.querySelector("#attSpeed").textContent = `Speed: ${superheroes.speed}`
  theClone.querySelector("#attDay").textContent = superheroes.day
  theClone.querySelector("#attMonth").textContent = superheroes.month
  theClone.querySelector("#attYear").textContent = superheroes.year
  theClone.querySelector("#attImg").innerHTML += `<img src="${superheroes.img}" alt="${superheroes.alias}">`
  // theClone.querySelector("img").textContent = superheroes.img
  document.querySelector("body").appendChild(theClone)
}