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
  "fuck",
  "gangbang",
  "god-dam",
  "goddamn",
  "horny",
  "nigga",
  "nigger",
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
  "skank",
  "slut",
  "sluts",
  "tit",
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
    `<span style="background-color: rgba(255, 0, 0, 1); color: #fff; padding: 5px; font-weight: bold; border-radius: 4px;">${
      badWords[i]
    }</span>`
  );
}

// Replace HTML with censored version
lyrics[0].innerHTML = raw;
