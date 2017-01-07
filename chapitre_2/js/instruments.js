"use strict";

function infosLiens() {

    var liensElts = document.querySelectorAll("a");
    var nbLiens = liensElts.length;
    console.log(nbLiens);

    if (nbLiens > 0) {
        console.log(liensElts[0].getAttribute("href"));
        console.log(liensElts[nbLiens - 1].getAttribute("href"));
    }
};

function possede(id, classe) {

    var instru = document.getElementById(id);

    if (instru !== null) {
        console.log(instru.classList.contains(classe));
    } else {
        console.log("Aucun élément possède l'identifiant " + id);
    }

};

infosLiens();

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur