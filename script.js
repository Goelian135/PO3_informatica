window.onload = function() {
  togglePage('home');
};

/* Deze functie zorgt ervoor dat de togglePage functie meteen afgaat bij het laden van de pagina
   Met het id 'home' zodat, zodra je de website laad, alleen home zichtbaar is */

function togglePage(pageId) {
  var pages = document.querySelectorAll('.page');
  //verzamelt alle id's met class page

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

/* Deze functie speelt de jumpscare als je 5x een fout maakt
   Hij doet dit door de gif te laten zien, de link te verwijderen en dan opnieuw erin te zetten zodat de gif weer
   vanaf het begin speelt, dan de gif weer onzichtbaar maken als hij een keer is geweest.*/

document.addEventListener('DOMContentLoaded', () => {
    const goedeAntwoorden = {
      quiz1: 'knop1',
      quiz2: 'antwoord2',
      quiz3: 'knop2'
    };
  
    let totaalPogingen = 0;
    let goedePogingen = 0;
    let aantalFoutGif = 0;
  
    function updateResultaten() {
      const percentageGoed = totaalPogingen === 0 ? 0 : (goedePogingen / totaalPogingen * 100);
      const percentageFout = 100 - percentageGoed;
      document.getElementById('totaalPogingen').textContent = totaalPogingen;
      document.getElementById('goedePogingen').textContent = goedePogingen;
      document.getElementById('percentageGoed').textContent = percentageGoed.toFixed(0);
      document.getElementById('percentageFout').textContent = percentageFout.toFixed(0);
  
      console.log("Update Resultaten: ", {
        totaalPogingen: totaalPogingen,
        goedePogingen: goedePogingen,
        percentageGoed: percentageGoed,
        percentageFout: percentageFout
      });
    }
  
    window.controleerAntwoorden = function(buttonId, quizId) {
      totaalPogingen++;
      const form = document.getElementById(quizId);
      let correctAantal = 0;
    
      const formData = new FormData(form);
      const antwoord = formData.get(quizId);
    
      if (quizId === 'quiz1') {
        if (antwoord === goedeAntwoorden.quiz1) {
          correctAantal++;
          alert("goed");
          document.getElementById(buttonId).style.display = 'none';
          document.getElementById('goedAntwoord').style.color = 'green';
        } else {
          alert("fout, " + (aantalFoutGif + 1));
          aantalFoutGif += 1;
          if (aantalFoutGif === 5) {
            playGif();
            aantalFoutGif = 0;
          }
        }
      } else if (quizId === 'quiz2') {
        if (antwoord === goedeAntwoorden.quiz2) {
          correctAantal++;
          alert("goed");
          document.getElementById(buttonId).style.display = 'none';
        } else {
          alert("fout, " + (aantalFoutGif + 1));
          aantalFoutGif += 1;
          if (aantalFoutGif === 5) {
            playGif();
            aantalFoutGif = 0;
          }
        }
      } else if (quizId === 'quiz3') {
        if (antwoord === goedeAntwoorden.quiz3) {
          correctAantal++;
          alert("goed");
          document.getElementById(buttonId).style.display = 'none';
          document.getElementById('goedAntwoord').style.color = 'green';
        } else {
          alert("fout, " + (aantalFoutGif + 1));
          aantalFoutGif += 1;
          if (aantalFoutGif === 5) {
            playGif();
            aantalFoutGif = 0;
          }
        }
      }
    
      goedePogingen += correctAantal;
      updateResultaten();
    };
});
    
  

document.addEventListener('DOMContentLoaded', function() {
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
