// Get lyrics
// Pull out bad words
// Put the bad words back but highlight them

// Get options
chrome.storage.sync.get("words", function(response) {
  // Place info
  var lyrics = document.getElementsByClassName("song_body-lyrics");
  let alert = `<div style="margin-top: 20px; border-radius: 4px; background-color: #F8D7DA; color: #721C24; border: 1px solid #F5C6CB; padding: 12px 20px 12px 20px; display: flex; justify-content: space-between; align-items: center;">Indecent words are highlighted. <button id="go-to-options">Click for options</button></div>`;
  lyrics[0].innerHTML = alert + lyrics[0].innerHTML;

  // Get bad word list
  let badWords = response.words;

  // Select element on page to edit
  var lyrics = document.getElementsByClassName("song_body-lyrics");
  raw = lyrics[0].innerHTML; // Grab raw html
  console.log(raw);

  // Replace all instances of bad word
  for (i = 0; i < badWords.length; i++) {
    // Make global regex to find all occurances
    re = new RegExp(badWords[i], "gi");
    raw = raw.replace(
      re,
      `<span style="background-color: rgba(255, 0, 0, 1); color: #fff; padding: 5px; font-weight: bold; border-radius: 4px;">${
        badWords[i]
      }</span>`
    );
  }

  // Replace HTML with censored version
  lyrics[0].innerHTML = raw;

  // Take user to options
  document.querySelector("#go-to-options").addEventListener(function() {
    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
    } else {
      window.open(chrome.runtime.getURL("options.html"));
    }
  });
});
