var styleElement = getComputedStyle(document.getElementById("contenu"));
var liste = document.createElement("ul");
var hauteur = document.createElement("li");
hauteur.textContent = "Hauteur : " + styleElement.height;
var largeur = document.createElement("li");
largeur.textContent = "Largeur : " + styleElement.width;

liste.appendChild(hauteur);
liste.appendChild(largeur);


document.getElementById("infos").appendChild(document.createTextNode("Informations sur l'élément"));

document.getElementById("infos").appendChild(liste);