

  
  //Script JS INDEX
  const allTxt = document.querySelectorAll("h1 , p ");
  // add a button to all allTxt
  allTxt.forEach((txt) => {
    txt.style.position = "relative";
    const btn = document.createElement("button");
    btn.className += "btn";
    
    btn.style.width = "40px";
    btn.style.height = "40px";
    btn.style.backgroundColor = "transparent";
    btn.style.backgroundImage = "url(public/assets/1.png)";
    btn.style.backgroundSize = "cover";
    btn.style.backgroundRepeat = "no-repeat";
    btn.style.backgroundPosition = "center";
    btn.style.border = "none";
    btn.style.position = "absolute";
    btn.style.bottom = "0";
    btn.style.right = "0";
    txt.appendChild(btn);
  });
  
  // content.js
  
  // Fonction pour interagir avec les éléments de la page
  // function interactWithPage() {
  //   // Exemple : Modifier le texte de tous les paragraphes sur la page
  //   var paragraphs = document.querySelectorAll('p');
  //   paragraphs.forEach(function (paragraph) {
  //     paragraph.textContent = "Extension a modifié ce paragraphe!";
  //   });
  // }
  
  // // Appeler la fonction lorsqu'une page est chargée
  // interactWithPage();
  function getTextFromParagraph(button) {
    // Accéder au paragraphe parent
    var paragraph = button.parentNode;

    // Récupérer le texte du paragraphe
    var paragraphText = paragraph.textContent.trim();

    // Afficher le texte dans la console (à des fins de démonstration)
    console.log(paragraphText);
    // Vous pouvez également utiliser le texte comme bon vous semble, par exemple :
    // alert(paragraphText);
  }
  

  
  allTxt.forEach((txt) => {
    const speech = new SpeechSynthesisUtterance();
    const allbuttons = document.querySelectorAll("button");
    allbuttons('button').addEventListener("click", () => {
      getTextFromParagraph(txt)
      console.log(txt.textContent);
  
      var textToSpeech = txt.textContent;
      const utterance = new SpeechSynthesisUtterance(textToSpeech);
      speechSynthesis.speak(utterance);
  
    });
  });


