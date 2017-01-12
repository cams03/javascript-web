var couleurFond = prompt("Entrez une couleur de fond");
var police = prompt("Entrez une couleur de police");

var divElt = document.getElementsByTagName("div");

for (var i = 0; i < divElt.length; i++) {
    divElt[i].style.color = police;
    divElt[i].style.backgroundColor = couleurFond;
}