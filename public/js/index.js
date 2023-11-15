

  console.log("Page chargée");
  //Script JS INDEX
  const allTxt = document.querySelectorAll("h1 , p");

  // Ajouter un bouton à tous les éléments allTxt
  allTxt.forEach((txt) => {
    txt.style.position = "relative";
    const btn = document.createElement("button");
    btn.className += "btn";

    btn.style.width = "36px";
    btn.style.height = "36px";
    btn.style.backgroundColor = "transparent";
    btn.style.backgroundImage = "url(images/icons/play.svg)";
    btn.style.backgroundSize = "cover";
    btn.style.backgroundRepeat = "no-repeat";
    btn.style.backgroundPosition = "center";
    btn.style.border = "none";
    btn.style.position = "absolute";
    btn.style.bottom = "0";
    btn.style.right = "0";
    btn.style.maxHeight = "100%";

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
  

console.log("Page chargée");


