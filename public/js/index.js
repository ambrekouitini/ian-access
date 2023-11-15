//Script JS INDEX
const allTxt = document.querySelectorAll("h1 , p ");

// Ajouter un bouton à tous les éléments allTxt
allTxt.forEach((txt) => {
  txt.style.position = "relative";
  const btn = document.createElement("button");
  btn.className += "btn";

  btn.style.width = "200px";
  btn.style.height = "200px";
  btn.style.backgroundColor = "transparent";
  btn.style.backgroundImage = "url(public/assets/1.png)";
  btn.style.backgroundSize = "cover";
  btn.style.backgroundRepeat = "no-repeat";
  btn.style.backgroundPosition = "center";
  btn.style.border = "none";
  btn.style.position = "absolute";
  btn.style.bottom = "0";
  btn.style.right = "0";
  btn.style.maxHeight = "100%";
  btn.style.maxWidth = "5%";
  txt.appendChild(btn);

  btn.addEventListener("click", () => {
    // Utiliser la fonction pour obtenir le texte du paragraphe et le lire
    getTextAndSpeak(txt);
  });
});

// Fonction pour obtenir le texte du paragraphe et le lire
function getTextAndSpeak(element) {
  var textToSpeech = element.textContent.trim();
  console.log(textToSpeech)
  const utterance = new SpeechSynthesisUtterance(textToSpeech);
  speechSynthesis.speak(utterance);
}

