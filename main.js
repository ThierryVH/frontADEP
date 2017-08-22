
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




// ##################################################################
// Etape 3 d'inscription pour afficher ou non les inputs et les vider
// ##################################################################


// inputs salarié
var salarie = document.getElementById('salarie');
var inputSalarie = document.getElementById('input-salarie');
salarie.onclick = function(){
  inputSalarie.style.display = "block";
}

var otherInput = document.getElementsByClassName('others');
var contentSalarie = document.getElementsByClassName('content-salarie');
for(let i=0; i<otherInput.length; i++){
  otherInput[i].onclick = function(){
    inputSalarie.style.display = "none";
    for (j = 0; j < contentSalarie.length; j++) {
      contentSalarie[j].value = "";
    }
  }
}

// input autre
var autre = document.getElementById('autre');
var pAutre = document.getElementById('p-autre');

autre.onclick = function(){
  pAutre.style.display = "block";
}

var autresInputs = document.getElementsByClassName('autres');
var contentAutre = document.getElementById('autre-input');
for(let i=0; i<autresInputs.length; i++){
  autresInputs[i].onclick = function(){
    pAutre.style.display = "none";
    contentAutre.value = "";
  }
}
