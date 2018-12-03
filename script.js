// Get lyrics
// Pull out bad words
// Put the bad words back but highlight them

// Bad words
badWords = [
  "anus",

  "bitch",

  "cock",

  "cum",
  "dick",
  "duche",
  "dyke",

  "fag",

  "faggot",

  "fagot",
  "fagots",
  "fags",

  "fuck",
  "fucka",
  "fucked",
  "fucker",
  "fuckers",
  "fuckhead",
  "fuckheads",
  "fuckin",
  "fucking",
  "fuckings",

  "gangbang",

  "god-dam",
  "goddamn",

  "horny",
  "nigga",
  "niggas",
  "niggaz",
  "nigger",
  "niggers",
  "orgasm",

  "penis",

  "piss",

  "porn",

  "pornos",

  "pussies",
  "pussy",

  "sex",

  "shaggin",
  "shagging",

  "shit",

  "shiting",

  "shits",

  "shitty",
  "skank",
  "slut",
  "sluts",

  "tit",
  "tits",

  "titties",

  "twat",

  "vagina",

  "whore"
];

// Select element on page to edit
var lyrics = document.getElementsByClassName("song_body-lyrics");
raw = lyrics[0].innerHTML; // Grab raw html

// Replace all instances of bad word
for (i = 0; i < badWords.length; i++) {
  // Make global regex to find all occurances
  re = new RegExp(badWords[i], "g");
  raw = raw.replace(
    re,
    `<span style="background-color: rgba(255, 0, 0, .6)">${badWords[i]}</span>`
  );
}

// Replace HTML with censored version
lyrics[0].innerHTML = raw;
