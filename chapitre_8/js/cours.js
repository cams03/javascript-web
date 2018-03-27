// Création d'une requête HTTP
//var req = new XMLHttpRequest();
// Requête HTTP GET synchrone vers le fichier langages.txt publié localement
//req.open("GET", "http://localhost/openclassrooms/data/langages.txt", false);
// Envoi de la requête
//req.send(null);
// Affiche la réponse reçue pour la requête
//console.log(req.responseText);


/*L'objetXMLHttpRequestpermet de créer des requêtes HTTP en JavaScript. Inventé par Microsoft pour les besoins du navigateur Internet Explorer, cet objet au nom quelque peu bizarre a été adopté comme standard par les autres navigateurs.

Sa méthode open permet de configurer la requête HTTP avant son lancement. Elle prend en paramètres le type de requête HTTP (le plus souventGET, POST ouPUT), l'URL cible, ainsi qu'un booléen indiquant si la requête sera asynchrone ou non (voir plus loin).

Sa méthode send envoie la requête HTTP vers l'URL cible fournie àopen. Elle prend en paramètre l'éventuelle information envoyée au serveur (requêtesPOSTouPUT), ou bien nulldans le cas d'une requêteGET.

Sa propriété responseText contient sous forme textuelle la réponse renvoyée par le serveur à la requête HTTP.

L'exemple de code JavaScript présenté plus haut devrait vous paraître plus clair à présent.

La première ligne crée un nouvel objet nommé req en utilisant le constructeur XMLHttpRequest (relisez ce paragraphe pour un bref rappel sur les constructeurs).
La deuxième ligne configure une requête HTTP GET synchrone vers l'URLhttp://localhost/javascript-web-srv/data/langages.txt.
La troisième ligne envoie la requête vers l'URL cible.
La quatrième ligne affiche dans la console du navigateur la réponse reçue du serveur, c'est-à-dire le contenu du fichierlangages.txtrécupéré par la requête.*/

//var req = new XMLHttpRequest();
// La requête est asynchrone lorsque le 3ème paramètre vaut true ou est absent
//req.open("GET", "http://localhost/data/langages.txt");
// Gestion de l'événement indiquant la fin de la requête
//req.addEventListener("load", function () {
    // Affiche la réponse reçue pour la requête
  //  console.log(req.responseText);
//});
//req.send(null);

//Tout échange entre deux programmes peut donner lieu à des erreurs : l'URL cible est incorrecte, le serveur est indisponible, le réseau dysfonctionne, etc. La gestion des erreurs est une problématique complexe. Fixons-nous comme premier objectif de les détecter pour les afficher dans la console du navigateur.

//Voici notre code d'exemple intégrant une gestion assez basique des erreurs.

/*var req = new XMLHttpRequest();
req.open("GET", "http://localhost/data/langages.txt");
req.addEventListener("load", function () {
    if (req.status >= 200 && req.status < 400) { // Le serveur a réussi à traiter la requête
        console.log(req.responseText);
    } else {
        // Affichage des informations sur l'échec du traitement de la requête
        console.error(req.status + " " + req.statusText);
    }
});
req.addEventListener("error", function () {
    // La requête n'a pas réussi à atteindre le serveur
    console.error("Erreur réseau");
});
req.send(null);

/*On distingue deux principaux cas d'erreur :

La requête n'a pas réussi à atteindre le serveur (nom du serveur incorrect, erreur réseau, etc). Ces erreurs déclenchent l'apparition d'un événement de typeerrorsur la requête. Le gestionnaire associé affiche le message "Erreur réseau" dans la console.
La requête a atteint le serveur, mais son traitement a échoué (ressource demandée non trouvée, problème interne au serveur, etc). C'est le code de retour HTTP de la requête, contenu dans sa propriétéstatus, qui indique son résultat. Un code supérieur ou égal à 200 et strictement inférieur à 400 signale la réussite de la requête.*/

//ECRIRE UNE FONCTION AJAX GENERIQUE

/*Imaginez que votre programme JavaScript ait plusieurs requêtes HTTP à effectuer. À chaque appel, il faudrait dupliquer le code précédent en modifiant uniquement l'URL cible et le traitement en cas de réussite de la requête. Cette duplication alourdirait significativement le code source et le rendrait peu lisible.

La solution classique pour éviter de dupliquer du code consiste à factoriser (centraliser) le code auparavant dupliqué, puis à faire appel à ce code toutes les fois que c'est nécessaire. En JavaScript, cela se traduit souvent par la création de fonctions.

Voici comment nous pouvons faire pour factoriser le code d'exécution d'une requête HTTP asynchrone, autrement dit un appel AJAX.*/

// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
/*function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}
/*La fonction ajaxGet permet d'exécuter une requête HTTP asynchrone. Elle prend en paramètres l'URL cible et la fonction appelée en cas de succès de la requête. En effet, JavaScript permet de passer des fonctions en paramètre comme n'importe quelle autre valeur. Le terme callback utilisé ici comme nom du second paramètre est souvent employé pour désigner une fonction appelée ultérieurement, en réaction à un certain événement. Les messages d'erreur ont été améliorés et affichent à présent l'URL cible en plus des autres informations.

Cette fonction est dite générique : elle n'est pas spécifique à un contexte ou des données particuliers, et peut être utilisée dans tout programme JavaScript qui a besoin d'effectuer des appels AJAX.

Le code de lancement d'un appel AJAX est considérablement simplifié : il suffit de créer la fonction qui gère le résultat puis d'appeler ajaxGet.*/

function afficher(reponse) {
    console.log(reponse);
}
ajaxGet("http://localhost/data/langages.txt", afficher);

//Le langage JavaScript permet de gérer facilement ce format de données. La fonction JSON.parse permet de transformer une chaîne de caractères conforme au format JSON en un objet JavaScript. La fonction JSON.stringify joue le rôle inverse : elle transforme un objet JavaScript en chaîne de caractères conforme au format JSON.

var avion = {
    marque: "Airbus",
    couleur: "A320"
};
console.log(avion);
// Transforme l'objet JavaScript en chaîne de caractères JSON
var texteAvion = JSON.stringify(avion);
console.log(texteAvion);
// Transforme la chaîne de caractères JSON en objet JavaScript
console.log(JSON.parse(texteAvion));

//Ces fonctions permettent aussi de gérer les tableaux d'objets JSON.

var avions = [
    {
        marque: "Airbus",
        couleur: "A320"
    },
    {
        marque: "Airbus",
        couleur: "A380"
    }
];
console.log(avions);
// Transforme le tableau d'objets JS en chaîne de caractères JSON
var texteAvions = JSON.stringify(avions);
console.log(texteAvions);
// Transforme la chaîne de caractères JSON en tableaux d'objets JavaScript
console.log(JSON.parse(texteAvions));

//Récupérer des données JSON depuis un serveur

//La technique utilisée pour récupérer des données JSON est la même que pour un fichier texte, et nous allons pouvoir réutiliser notre fonction générique ajaxGet. Seul le traitement de la réponse reçue diffère pour s'adapter au format JSON.

//Voici un exemple qui récupère auprès du serveur le fichier JSON films.json pour afficher le titre de chaque film.

ajaxGet("http://localhost/data/films.json", function (reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
    var films = JSON.parse(reponse);
    // Affiche le titre de chaque film
    films.forEach(function (film) {
        console.log(film.titre);
    })
});

//EXO
ajaxGet("http://localhost/data/langages.txt", function (reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
    var langages = reponse.split(";");
    var listeElt = document.getElementById("langages");
    // Affiche le titre de chaque film
    langages.forEach(function (langage) {
        var langageElt = document.createElement("li");
        langageElt.textContent = langage;
        listeElt.appendChild(langageElt);
    });
});
