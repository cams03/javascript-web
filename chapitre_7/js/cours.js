var compteurElt = document.getElementById("compteur");

// Diminue le compteur jusqu'à 0
function diminuerCompteur() {
    // Conversion en nombre du texte du compteur
    var compteur = Number(compteurElt.textContent);        
    compteurElt.textContent = compteur - 1;
}

// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
setInterval(diminuerCompteur, 1000);

/*Démarrer une action répétée

Comment fonctionne  cet exemple ? Le programme JavaScript définit une fonctiondiminuerCompteurqui récupère puis décrémente (diminue de 1) la valeur de l'élément HTML qui affiche la valeur du compteur. L'appel àNumberpermet de convertir le texte du compteur (chaîne de caractères) en valeur numérique. Cette conversion est indispensable pour pouvoir ensuite effectuer l'opération mathématique de soustraction.
C'est l'appel à setIntervalqui déclenche le compte à rebours. Cette fonction permet d'appeler une fonction à intervalles réguliers. Les paramètres desetIntervalsont la fonction à appeler et le délai entre deux appels. Ce délai est exprimé en millisecondes.

Annuler une action répétée

À présent, essayons d'arrêter le compteur une fois le compte à rebours terminé. Nous allons en profiter pour modifier le texte de la page. Voici le code JavaScript de notre exemple, modifié pour atteindre ce résultat.*/

var compteurElt = document.getElementById("compteur");

// Diminue le compteur jusqu'à 0
function diminuerCompteur() {
    // Conversion en nombre du texte du compteur
    var compteur = Number(compteurElt.textContent);
    if (compteur > 1) {
        compteurElt.textContent = compteur - 1;
    } else {
        // Annule l'exécution répétée
        clearInterval(intervalId);
        // Modifie le titre de la page
        var titre = document.getElementById("titre");
        titre.textContent = "BOUM !!!";
    }
}

// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
var intervalId = setInterval(diminuerCompteur, 1000);

/*Dans la fonctiondiminuerCompteur, on ne décrémente le compteur que si sa valeur actuelle est strictement supérieure à 1. Dans le cas contraire, on appelle la fonctionclearIntervalpuis on modifie le contenu du titre affiché par la page.

La fonction clearInterval permet de stopper une exécution répétée. Elle prend en paramètre l'identifiant de l'action, renvoyée par la fonctionsetIntervalet stockée dans notre exemple dans la variable intervalId.

Effectuer une action après un délai
Imaginons que l'on souhaite modifier le texte de notre page après son "explosion". Pour cela, nous pouvons modifier notre exemple de la manière suivante.*/

var compteurElt = document.getElementById("compteur");

// Diminue le compteur jusqu'à 0
function diminuerCompteur() {
    // Conversion en nombre du texte du compteur
    var compteur = Number(compteurElt.textContent);
    if (compteur > 1) {
        compteurElt.textContent = compteur - 1;
    } else {
        // Annule l'exécution répétée
        clearInterval(intervalId);
        // Modifie le titre de la page
        var titre = document.getElementById("titre");
        titre.textContent = "BOUM !!!";
        // Modification du titre au bout de 2 secondes
        setTimeout(function () {
            titre.textContent = "Tout est cassé :(";
        }, 2000);
    }
}

// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
var intervalId = setInterval(diminuerCompteur, 1000);

/* Une fois le compte à rebours terminé, on fait appel à setTimeoutpour modifier de nouveau le titre après un délai de deux secondes.

La fonctionsetTimeoutpermet d'exécuter une fonction une seule fois après un certain délai, exprimé en millisecondes.

Animer des éléments de la page
Les solutions précédentes sont pratiques pour ajouter du dynamisme à nos pages, mais ne suffisent pas pour effectuer de véritables animations en temps réel. Pour cela, il existe une solution plus performante que nous allons aborder maintenant.*/

//Voici le code JavaScript qui permet de déplacer le bloc rouge vers la gauche.

var cadre = document.getElementById("cadre");
var bloc = document.getElementById("bloc");
// Conversion en nombre du diamètre du bloc (valeur de la forme "XXpx")
var diametreBloc = parseFloat(getComputedStyle(bloc).width);
var vitesse = 7; // Valeur du déplacement en pixels

// Déplace le bloc sur sa gauche
function deplacerBloc() {
    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    var xBloc = parseFloat(getComputedStyle(bloc).left);
    // Déplacement du bloc
    bloc.style.left = (xBloc + vitesse) + "px";
    // Demande au navigateur d'appeler deplacerBloc dès que possible
    requestAnimationFrame(deplacerBloc);
}
requestAnimationFrame(deplacerBloc); // Début de l'animation

/*Débuter une animation

Notre exemple de code définit une fonctiondeplacerBlocdont le rôle est de déplacer le bloc sur sa gauche. Pour cela, elle récupère la position actuelle du bord gauche du bloc, puis lui ajoute la valeur contenue dans la variablevitesse, ce qui a pour effet de décaler le bloc sur sa droite.  Enfin, elle fait appel à requestAnimationFrame pour continuer l'animation.

Les valeurs des positions sont exprimées en pixels. Ce sont des chaînes de caractères de la forme "XXpx", ce qui nécessite l'utilisation de la fonction parseFloat pour les convertir en valeurs numériques avant d'effectuer des calculs.

Attention à ne pas utiliser Number pour convertir une chaîne contenant "px" en valeur numérique : cela ne fonctionne pas et le résultat renvoyé seraNaN(Not a Number).

La fonctionrequestAnimationFramepermet de demander au navigateur d'exécuter dès que possible une fonction qui met à jour une animation. Le terme "dès que possible" signifie que le navigateur va optimiser la mise à jour de l'animation afin de la rendre fluide.

Voici comment utiliserrequestAnimationFrameen combinaison avec une fonction d'animation.*/

function animer() {
    // Code de l'animation
    // ...
    requestAnimationFrame(animer);
}
requestAnimationFrame(animer);

/*Stopper une animation

Voyons maintenant comment arrêter le bloc lorsqu'il arrive au bout du cadre qui le contient. Pour cela, il faut vérifier si la position du bord gauche du bloc est inférieure à la largeur du cadre, en tenant compte de l'épaisseur du bloc lui-même.

Voici le code JavaScript modifié à cet effet.*/

var cadre = document.getElementById("cadre");
var bloc = document.getElementById("bloc");
var vitesse = 7; // Valeur du déplacement en pixels
// Conversion en nombre du diamètre du bloc (valeur de la forme "XXpx")
var largeurBloc = parseFloat(getComputedStyle(bloc).width);
var animationId = null; // Identifiant de l'animation

// Déplace le bloc sur sa gauche jusqu'au bord du cadre
function deplacerBloc() {
    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    var xBloc = parseFloat(getComputedStyle(bloc).left);
    // Conversion en nombre de la largeur du cadre (valeur de la forme "XXpx")
    var xMax = parseFloat(getComputedStyle(cadre).width);
    if (xBloc + largeurBloc <= xMax) { // Si le bloc n'est pas encore au bout du cadre
        // Déplacement du bloc
        bloc.style.left = (xBloc + vitesse) + "px";
        // Demande au navigateur d'appeler deplacerBloc dès que possible
        animationId = requestAnimationFrame(deplacerBloc);
    } else {
        // Annulation de l'animation
        cancelAnimationFrame(animationId);
    }
}

animationId = requestAnimationFrame(deplacerBloc); // Début de l'animation   

/*La nouvelle fonctiondeplacerBlocvérifie si le bloc est arrivé au bout du cadre avant de le déplacer. Si c'est le cas, elle arrête l'animation en appelantcancelAnimationFrame.

La fonctioncancelAnimationFrame permet de stopper une animation. Elle prend un paramètre l'identifiant de l'animation, stocké ici dans la variableanimationIdet renvoyé par chaque appel àrequestAnimationFrame.*/

/*Choisir la technique d'animation adaptée

Comment choisir entresetInterval, requestAnimationFrameet CSS pour effectuer une animation ?

La réponse à cette question dépend de plusieurs facteurs, notamment la complexité de l'animation à réaliser. A priori, les animations réalisées avec CSS sont plus efficaces du point de vue des performances. Encore faut-il qu'elles permettent d'obtenir l'objectif voulu : on ne peut pas tout faire avec CSS. 

Je vous propose d'adopter la démarche suivante lorsque vous devez animer une page web :

Si l'animation n'est pas en temps réel et doit simplement se produire à intervalles réguliers, utilisezsetInterval.

Si l'animation est en temps réel et que vous savez qu'elle peut être effectuée via CSS, adoptez cette technique.

Pour tous les autres cas, utilisezrequestAnimationFrame.*/