//Script JS INDEX

const speech = new SpeechSynthesisUtterance();
document.getElementById("btn").addEventListener("click", () => { 

  var textToSpeech = "Text"
  const utterance = new SpeechSynthesisUtterance(textToSpeech);
  speechSynthesis.speak(utterance);

});
