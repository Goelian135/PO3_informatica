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