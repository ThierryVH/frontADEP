
function w3_open() {
  document.getElementsByClassName("mySidebar")[0].style.display = "block";
  document.getElementsByClassName("mySidebar")[1].style.display = "block";
}
function w3_close() {
  document.getElementsByClassName("mySidebar")[0].style.display = "none";
  document.getElementsByClassName("mySidebar")[1].style.display = "none";
}

///////////////////////////////////////////////////////
// Script pour laisser la place au champ de recherche au clic
///////////////////////////////////////////////////////

var clickRecherche = document.getElementById('recherche-desktop');
var divConnexion = document.getElementsByClassName('nav-connexion')[0];
var recherche = document.getElementById('recherche');
var divButton = document.getElementsByClassName('div-button-menu')[0];

clickRecherche.onfocus = openSearch;
clickRecherche.onblur = closeSearch;
recherche.onfocus = openSearch;
recherche.onblur = closeSearch;


function openSearch(){
  divConnexion.style.display = "none";
  divButton.style.display = "none";
  clickRecherche.placeholder = "Recherche";
  recherche.placeholder = "Recherche";
}

function closeSearch(){
  divConnexion.style.display = "flex";
  divButton.style.display = "flex";
  clickRecherche.value = "";
  recherche.value = "";
  clickRecherche.placeholder = "";
  recherche.placeholder = "";
}
