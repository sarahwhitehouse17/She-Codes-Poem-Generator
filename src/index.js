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
  let prompt = `Write a poem about ${userInput.value}`;
  let context =
    "You are an experienced poet. Make sure to write a short poem, with a maximum of 2 lines. Please make sure 2 lines are displayed, one on top of the other. Sign at the end with 'She Codes AI' in <strong> element, and put this on a line underneath the poem. Have a new line for the each capital letter";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("Searching for a poem");
  axios.get(apiUrl).then(displayPoem);
}

poemElement = document.querySelector("#poem-generator-form");
poemElement.addEventListener("submit", generatePoem);
