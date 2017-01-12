function clic() {
    console.log("Clic !");
}

var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", clic);

/*Appelée sur un élément du DOM, la méthode addEventListener lui ajoute un gestionnaire pour un événement particulier. Cette méthode prend deux paramètres : le type de l'événement et la fonction qui gère l'événement. Cette fonction sera appelée à chaque fois que l'événement se déclenchera sur l'élément.

Dans notre exemple, le clic sur le bouton (événement click) déclenchera l'appel de la fonction clic.﻿﻿

Il est possible d'utiliser une syntaxe un peu plus concise en définissant la fonction appelée au moment de l'appel àaddEventListener. Le code ci-dessous est fonctionnellement identique au précédent.*/
var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", function () {
    console.log("clic");
});
/*Dans ce cas, la fonction n'est plus identifiée par un nom et ne peut plus être utilisée ailleurs dans le programme. Il s'agit d'une fonction anonyme. Les fonctions anonymes sont fréquemment utilisées en JavaScript.*/

//Suppression d'un gestionnaire d'événement

/*Il peut arriver que vous ne souhaitiez plus gérer un type d'événement sur un élément du DOM. Dans ce cas, appelez la méthode removeEventListener sur cet élément, en lui passant en paramètre la fonction qui gérait l'événement.

Pour pouvoir utiliser removeEventListener, il faut que la fonction qui gère l'événement n'ait pas été définie de manière anonyme.*/
// Suppression du gestionnaire pour l'événement click
boutonElt.removeEventListener("click", clic);

/*Le code ci-dessous utilise l'objet Event pour afficher le type de l'événement déclenché ainsi que le texte de l'élément cible lors d'un clic sur le bouton de notre page web. Cet objet est fourni à la fonction qui gère l'événement sous la forme d'un paramètre nommé e. Le choix du nom du paramètre est libre, et vous pourrez rencontrer également le nom event.*/

// Ajout d'un gestionnaire qui affiche le type et la cible de l'événement
document.getElementById("bouton").addEventListener("click", function (e) {
    console.log("Evènement : " + e.type +
        ", texte de la cible : " + e.target.textContent);
});

/*Appui sur une touche du clavier

La solution la plus courante pour réagir à l'appui sur une touche du clavier consiste à gérer les événements de type keypress déclenchés sur le corps de la page web (élément body du DOM, correspondant en JavaScript à la variable globale document).

L'exemple suivant permet d'afficher dans la console le caractère associé à la touche frappée. Ici, l'information sur ce caractère est fournie sous la forme de la propriété charCode de l'objet Event (le paramètre e). Il s'agit de la valeur numérique (appelée valeur Unicode) associée au caractère. La méthode String.fromCharCode permet de traduire cette valeur en une chaîne représentant le caractère.*/

// Gestion de l'appui sur une touche du clavier produisant un caractère
document.addEventListener("keypress", function (e) {
    console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));
});

/*Pour gérer l'appui et le relâchement sur n'importe quelle touche du clavier (pas seulement celles qui produisent des caractères), on utilise les événements keydown et keyup.

L'exemple suivant utilise la même fonction pour gérer ces deux événements. Cette fois-ci, le code de la touche est accessible dans la propriété keyCode de l'objetEvent.*/

// Affiche des informations sur un événement clavier
function infosClavier(e) {
    console.log("Evènement clavier : " + e.type + ", touche : " + e.keyCode);
}

// Gestion de l'appui et du relâchement d'une touche du clavier
document.addEventListener("keydown", infosClavier);
document.addEventListener("keyup", infosClavier);

/*L'objet Event associé à un événement de type click contient (entre autres) une propriété button qui permet de connaître le bouton de la souris utilisé, ainsi que des propriétés clientX et clientY qui renvoient les coordonnées horizontales et verticales de l'endroit où le clic s'est produit. Ces coordonnées sont définies par rapport à la zone de la page actuellement affichée par le navigateur. Le schéma suivant illustre la différence entre les propriétés clientX/Y  et pageX/Y, également présentes dans l'objet Event associé à un clic souris.

L'exemple de code ci-dessous affiche des informations sur tous les événements click déclenchés sur la page web. Ces événements sont gérés par une fonction nommée infosSouris. Elle-même utilise une fonction getBoutonSouris pour déduire le nom du bouton de la souris cliqué, à partir de son code fourni par la propriété button de l'objetEvent.*/

// Renvoie le nom du bouton souris à partir de son code
function getBoutonSouris(code) {
    var bouton = "inconnu";
    switch (code) {
    case 0: // 0 est le code du bouton gauche
        bouton = "gauche";
        break;
    case 1: // 1 est le code du bouton du milieu
        bouton = "milieu";
        break;
    case 2: // 2 est le code du bouton droit
        bouton = "droit";
        break;
    }
    return bouton;
}

// Affiche des informations sur un événement souris
function infosSouris(e) {
    console.log("Evènement souris : " + e.type + ", bouton " +
        getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY);
}

// Gestion du clic souris
document.addEventListener("click", infosSouris);

/*De manière similaire aux événements clavier, on peut utiliser les événements mousedown et mouseup  pour détecter l'appui et le relâchement d'un bouton de la souris.*/

// Gestion de l'appui et du relâchement d'un bouton de la souris
document.addEventListener("mousedown", infosSouris);
document.addEventListener("mouseup", infosSouris);