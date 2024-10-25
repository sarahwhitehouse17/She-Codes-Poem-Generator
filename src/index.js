function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 35,
  });
}

function generatePoem(event) {
  event.preventDefault();
  userInput = document.querySelector("#user-input-for-poem");
  let apiKey = "3deb07c475cdt015b4f399a253e4o0b8";
  let prompt = `Write a short poem about ${userInput.value}, make sure to include four separate lines, and wrap in a <p> HTML format`;
  let context =
    "You are an experienced poet. Make sure to write a short poem, with a maximum of 4 lines. Please make sure each line is displayed as a separate line, meaning 4 lines are visible (one underneath the other). Sign at the end with 'She Codes AI' in <strong> element, and put this on a line underneath the poem.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("Searching for a poem");
  axios.get(apiUrl).then(displayPoem);
  let hiddenPoem = document.querySelector("#poem");
  hiddenPoem.classList.remove("hidden");
  hiddenPoem.innerHTML = `⏳ <div class = "generating">Generating poem about ${userInput.value}...</div>`;
}

poemElement = document.querySelector("#poem-generator-form");
poemElement.addEventListener("submit", generatePoem);
