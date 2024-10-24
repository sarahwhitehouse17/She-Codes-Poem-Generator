function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "it was when i stopped searching for home within others",
    autoStart: true,
    cursor: "",
    delay: 35,
  });
}

poemElement = document.querySelector("#poem-generator-form");
poemElement.addEventListener("submit", generatePoem);
