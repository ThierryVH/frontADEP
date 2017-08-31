
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
if(salarie){
  salarie.onclick = function(){
    inputSalarie.style.display = "block";
  }
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

if(autre){
  autre.onclick = function(){
    pAutre.style.display = "block";
  }
}


var autresInputs = document.getElementsByClassName('autres');
var contentAutre = document.getElementById('autre-input');
for(let i=0; i<autresInputs.length; i++){
  autresInputs[i].onclick = function(){
    pAutre.style.display = "none";
    contentAutre.value = "";
  }
}



// ##################################################################
// Compteur 'en quelques chiffres'
// ##################################################################

  var nb1 = 0,
      nb2 = 0,
      nb3 = 0,
      apprenants = 800,
      formations = 22,
      annees = 19,
      stat1 = document.getElementById('stat1'),
      stat2 = document.getElementById('stat2'),
      stat3 = document.getElementById('stat3'),
      stats = document.getElementById('stats'),

      timeApprenants = 1500/apprenants,
      timeFormations = 1500/formations,
      timeAnnees = 1500/annees,

      interval1,
      interval2,
      interval3,
      count = 0;

  if(stat1 && stat2 && stat3){
    stat1.innerHTML = nb1;
    stat2.innerHTML = nb2;
    stat3.innerHTML = nb3;
  }

  function myFunction1(){
    if(nb1 < apprenants){
      nb1+=4;
      stat1.innerHTML = nb1;
    }
    else {
      clearInterval(interval1);
    }
  }

  function myFunction2(){
    if(nb2 < formations){
      nb2++;
      stat2.innerHTML = nb2;
    }
    else {
      clearInterval(interval2);
    }
  }

  function myFunction3(){
    if(nb3 < annees){
      nb3++;
      stat3.innerHTML = nb3;
    }
    else {
      clearInterval(interval3);
    }
  }


  // Interval pour checke la position de l'élément au scroll
  var checkScroll = setInterval(function(){

    // Récupérer la position de l'élement section stats
    var  statsPos = stats.getBoundingClientRect();

    // Si la position de l'élement atteint 300px
    if(statsPos.top <= 300){

      // On déclenche les fonctions pour augmenter les chiffres
      interval1 = setInterval(myFunction1, timeApprenants),
      interval2 = setInterval(myFunction2, timeFormations),
      interval3 = setInterval(myFunction3, timeAnnees);

      // On incrémente le compteur pour stopper l'interval
      count++;

      if(count != 0){
        clearInterval(checkScroll);
      }
    }
  },500);



var arrayLocation = ["les-essentiels", "les-numeriques", "les-langues", "les-artistiques", "les-mains-vertes"];
var arrayColor = ["#004899", "#FFE62D", "#A83C17", "#E5A512", "#538335"];

for(var i=0; i<arrayLocation.length; i++){
  borderTop(arrayLocation[i], arrayColor[i]);
}

function borderTop(location, color){
  if(window.location.href == "http://127.0.0.1:8000/" + location){
    var nav = document.getElementsByClassName('main-nav')[0];
    nav.style.borderTopColor = color;
  };
}




///////////////////////////////////////////////////////
// Opacité avancée de l'inscription
///////////////////////////////////////////////////////


var opacityElements = document.getElementsByClassName('opacity');
console.log(opacityElements);
console.log(opacityElements[0]);
console.log(window.location.href);
if(window.location.href == "http://127.0.0.1:8000/statut"){
  for (var i = 0; i < 2 ; i++) {
    opacityElements[i].style.opacity = 1;
  }
}
if(window.location.href == "http://127.0.0.1:8000/niveau"){
  for (var i = 0; i < 4 ; i++) {
    opacityElements[i].style.opacity = 1;
  }
}
