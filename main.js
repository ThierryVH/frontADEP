
function w3_open() {
  document.getElementsByClassName("mySidebar")[0].style.display = "block";
  document.getElementsByClassName("mySidebar")[1].style.display = "block";
}
function w3_close() {
  document.getElementsByClassName("mySidebar")[0].style.display = "none";
  document.getElementsByClassName("mySidebar")[1].style.display = "none";
}

// var search = document.getElementById('recherche');
//
// var firstInterval = setInterval(deletePlaceholder, 20);
// var secondInterval = setInterval(placeholder, 20);
//
// function deletePlaceholder(){
//   if(window.innerWidth <= 1070){
//     search.placeholder = "";
//     clearInterval(firstInterval);
//     secondInterval = setInterval(placeholder, 20);
//   }
// }
//
// function placeholder(){
//   if(window.innerWidth > 1070){
//     search.placeholder = "Recherche";
//     clearInterval(secondInterval);
//     firstInterval = setInterval(deletePlaceholder, 20);
//   }
// }
