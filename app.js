const url = "https://api.funtranslations.com/translate/yoda.json";
// const url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function translation() {
  let query = url + "?text=" + handleInput.value;
  fetch(query)
    .then((response) => response.json())
    .then((json) => writeOnPara(json.contents.translated));
}

function writeOnPara(translatedText) {
  const para = document.querySelector(".paragraph");
  para.innerText = translatedText;
}

let handleInput = document.getElementById("input");
let handleBtn = document.getElementById("submitbtn");
handleBtn.addEventListener("click", () => {
  //   console.log(handleInput.value);
  translation();
});
