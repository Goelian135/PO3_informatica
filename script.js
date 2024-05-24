window.onload = function() {
  togglePage('home');
};
/* Deze functie zorgt ervoor dat de togglePage functie meteen afgaat bij het laden van de pagina
   Met het id 'home' zodat, zodra je de website laad, alleen home zichtbaar is */

function togglePage(pageId)  {
  var pages = document.querySelectorAll('.page');

  console.log("Toggling page:", pageId);

  pages.forEach(function(page)  {
    if (page.id === pageId)  {
      page.style.display = 'block';
    }
    else  {
      page.style.display = 'none';
    }
  });
}

/* Deze functie maakt alle divs met class page onzichtbaar 
  behalve degene met hetzelfde id die is meegegeven. Dit doet hij met de volgende stappen:
  1. Het pageId dat hij heeft meegekregen in de var pageId doen
  2. De var pages aanmaken en alle divs met de class 'page' verzamelen
  3. Voor elke id met class 'page' kijken of het id overeenkomt met pageId. 
     Zo ja, dan word de div zichtbaar. Zo niet, dan word de div onzichtbaar.*/

function handleSubmit() {
  var radioButtons = document.querySelectorAll('input[name="quiz1"]');
  var selectedValue = null;
    
  radioButtons.forEach(function(radio) {
    if (radio.checked) {
      selectedValue = radio.value;
    }
  });
    
  if (selectedValue) {
    if (selectedValue === 'knop1') {
      alert("goed");
    } else {
      alert("fout");
    }
  }
}
    
document.getElementById('submitButton').addEventListener('click', handleSubmit);

document.addEventListener('DOMContentLoaded', () => {
  const goedeAntwoorden = {
    quiz1: 'knop1'
  };

  let totaalPogingen = 0;
  let goedePogingen = 0;

  function updateResultaten() {
    const percentageGoed = totaalPogingen === 0 ? 0 : (goedePogingen / totaalPogingen * 100)
    document.getElementById('totaalPogingen').textContent = totaalPogingen;
    document.getElementById('goedePogingen').textContent = goedePogingen;
    document.getElementById('percentageGoed').textContent = percentageGoed;
  }

  window.controleerAntwoorden = function() {
    totaalPogingen++;
    const form = document.getElementById('quizForm');
    let correctAantal = 0;

    const quiz1Antwoord = form.elements['quiz1'].value;
    if (quiz1Antwoord === goedeAntwoorden.quiz1) {
      correctAantal++;
    }

    goedePogingen += correctAantal;
    updateResultaten();
  };
});