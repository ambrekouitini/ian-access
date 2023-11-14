//Script JS INDEX
const allTxt = document.querySelectorAll("h1 , p ");
// add a button to all allTxt
allTxt.forEach((txt) => {
  const btn = document.createElement("button");
  btn.className += "btn";
  
  btn.backgroundImage = "url(assets/1.png)";
  txt.appendChild(btn);
});

allTxt.forEach((txt) => {
  const speech = new SpeechSynthesisUtterance();
  document.getElementById("btn").addEventListener("click", () => {

    var textToSpeech = txt.textContent;
    const utterance = new SpeechSynthesisUtterance(textToSpeech);
    speechSynthesis.speak(utterance);

  });
});

