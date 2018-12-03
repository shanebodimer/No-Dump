// Listen for click
document.getElementById("save").addEventListener("click", save_options);

// Saves options to chrome.storage
function save_options() {
  // Get words and split into array at newline
  var words = document.getElementById("words").value.split("\n");

  // Remove last blank line
  //   let trash = words.splice(-1);
  console.log(words);

  // Store
  chrome.storage.sync.set(
    {
      words: words
    },
    function() {
      // Update status to let user know options were saved.
      var status = document.getElementById("status");
      status.textContent = "Options saved.";
      setTimeout(function() {
        status.textContent = "";
      }, 750);
    }
  );
}
