var titresElts = document.getElementsByTagName("h2"); // Tous les titres h2
console.log(titresElts[0]); // Affiche le premier titre h2
console.log(titresElts.length); // Affiche 3

// Tous les éléments ayant la classe "merveilles"
var merveillesElts = document.getElementsByClassName("merveilles");
for (var i = 0; i < merveillesElts.length; i++) {
    console.log(merveillesElts[i]);
}

// Elément portant l'identifiant "nouvelles"
console.log(document.getElementById("nouvelles"));

// Tous les éléments fils de l'élément d'identifiant "antiques" ayant la classe "existe"
console.log(document.getElementById("antiques").getElementsByClassName("existe").length); // Affiche 1
// MAIS METHODE TROP COMPLEXE
// A LA PLACE ON UTILISE QUERYSELECTORALL

// Tous les paragraphes
console.log(document.querySelectorAll("p").length); // Affiche 3

// Tous les paragraphes à l'intérieur de l'élément identifié par "contenu"
console.log(document.querySelectorAll("#contenu p").length); // Affiche 2

// Tous les éléments ayant la classe "existe"
console.log(document.querySelectorAll(".existe").length); // Affiche 8

//Voici comment on peut utiliser querySelectorAll pour sélectionner les merveilles antiques qui existent toujours.

// Tous les éléments fils de l'élément identifié par "antiques" ayant la classe "existe"
console.log(document.querySelectorAll("#antiques > .existe").length); // Affiche 1

//L'autre méthode de recherche d'éléments à partir d'un sélecteur CSS s'appelle querySelector. Elle fonctionne de manière identique à querySelectorAll, mais renvoie uniquement le premier élément correspondant au sélecteur passé en paramètre.

// Le premier paragraphe
console.log(document.querySelector("p"));

//La propriété innerHTML permet de récupérer tout le contenu HTML d'un élément du DOM. 

// Le contenu HTML de l'élément identifié par "contenu"
console.log(document.getElementById("contenu").innerHTML);

//La propriété textContent renvoie tout le contenu textuel d'un élément du DOM, sans l'éventuel balisage HTML.

// Le contenu textuel de l'élément identifié par "contenu"
console.log(document.getElementById("contenu").textContent);

//La méthode getAttribute peut être appliquée à un élément du DOM et renvoie la valeur de l'attribut passé en paramètre.

// L'attribut href du premier lien
console.log(document.querySelector("a").getAttribute("href")); // renvoie l'adresse url du lien tapée dans href

//Certains attributs sont directement accessibles sous la forme de propriétés. C'est notamment le cas pour les attributs id, href et value.

// L'identifiant de la première liste
console.log(document.querySelector("ul").id);

// L'attribut href du premier lien
console.log(document.querySelector("a").href);

//On peut vérifier la présence d'un attribut sur un élément grâce à la méthode hasAttribute, comme dans l'exemple ci-après.

if (document.querySelector("a").hasAttribute("target")) {
    console.log("Le premier lien possède l'attribut target");
} else {
    console.log("Le premier lien ne possède pas l'attribut target");
}

//Dans une page web, une balise peut posséder plusieurs classes. La propriéte classList permet de récupérer la liste des classes d'un élément du DOM. Elle s'utilise comme un tableau.

// Liste des classes de l'élément identifié par "antiques"
var classes = document.getElementById("antiques").classList;
console.log(classes.length); // Affiche 1 : l'élément possède une seule classe
console.log(classes[0]); // Affiche "merveilles"

//Vous avez aussi la possibilité de tester la présence d'une classe dans un élément en appelant la méthode contains sur la liste des classes.﻿﻿﻿

if (document.getElementById("antiques").classList.contains("merveille")) {
    console.log("L'élément identifié par antiques possède la classe merveille");
} else {
    console.log("L'élément identifié par antiques ne possède pas la classe merveille");
}