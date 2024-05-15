window.onload = function() {
  togglePage('home');
};

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