window.onload = function() {
  togglePage('home');
};
/* Deze functie zorgt ervoor dat de togglePage functie meteen afgaat bij het laden van de pagina
   Met het id 'home' zodat, zodra je de website laad, alleen home zichtbaar is */

function togglePage(pageId) {
  var pages = document.querySelectorAll('.page');

  console.log("Toggling page:", pageId);

  pages.forEach(function(page) {
    if (page.id === pageId) {
      page.style.display = 'block';
    } else {
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

var aantalFoutGif = 0;

function playGif() {
  var gifElement = document.getElementById('jumpscareGif');
  var gifDuur = 3060;

  gifElement.style.display = 'block';

  var scr = gifElement.scr;
  gifElement.scr = '';
  gifElement.scr = scr;

  setTimeout(function() {
  gifElement.style.display = 'none';
  }, gifDuur);
}

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
      document.getElementById('submitButton').style.display = 'none';
      document.getElementById('goedAntwoord').style.color = 'green';
    } else {
      alert("fout, " + (aantalFoutGif + 1))
      aantalFoutGif += 1; 
      if (aantalFoutGif === 5) { 
        playGif();
        aantalFoutGif = 0
      }
    }
  }
}

document.getElementById('submitButton').onclick = handleSubmit;

document.addEventListener('DOMContentLoaded', () => {
  const goedeAntwoorden = {
    quiz1: 'knop1'
  };

  let totaalPogingen = 0;
  let goedePogingen = 0;

  function updateResultaten() {
    const percentageGoed = totaalPogingen === 0 ? 0 : (goedePogingen / totaalPogingen * 100);
    const percentageFout = 100 - percentageGoed;
    document.getElementById('totaalPogingen').textContent = totaalPogingen;
    document.getElementById('goedePogingen').textContent = goedePogingen;
    document.getElementById('percentageGoed').textContent = percentageGoed.toFixed(0);
    document.getElementById('percentageFout').textContent = percentageFout.toFixed(0);
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



document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('feedbackForm');
  const submitBtn = document.getElementById('feedbackKnop');
  const cancelBtn = document.getElementById('cancelBtn');

  submitBtn.addEventListener('click', function() {
    if (form.checkValidity()) {
      form.querySelectorAll('input, select, textarea').forEach(element => {
        element.disabled = true;
      });
      submitBtn.style.display = 'none';
      cancelBtn.style.display = 'block';
    } else {
      alert('Vul asjeblieft alle vragen in.');
    }
  });

  cancelBtn.addEventListener('click', function() {
    form.querySelectorAll('input, select, textarea').forEach(element => {
      element.disabled = false;
    });
    submitBtn.style.display = 'block';
    cancelBtn.style.display = 'none';
  });
});
