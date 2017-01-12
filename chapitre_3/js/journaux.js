// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"
var liste = document.createElement("ul");
liste.id = "liste";
document.getElementById("contenu").appendChild(liste);


for (var i = 0; i < journaux.length; i++) {
    var titreElt = document.createElement("li");
    var lienElt = document.createElement("a");
    lienElt.href = journaux[i];
    lienElt.textContent = journaux[i];
    titreElt.appendChild(lienElt);
    document.getElementById("liste").appendChild(titreElt);
};