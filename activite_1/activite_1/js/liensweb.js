/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web

var divElt = document.createElement("div");

// Pour chaque site, on construit une balise <dl> pour avoir 3 <dl> et leur mettre des margin bottom

listeLiens.forEach(function (site) {

    var dlElt = document.createElement("dl"); // Création de la liste

    var dtElt = document.createElement("dt");

    var titleElt = document.createElement("strong"); // Création du titre en gras
    var lienElt = document.createElement("a"); // Création du lien à introduire dans le titre
    lienElt.href = site.url;
    lienElt.textContent = site.titre;

    var pElt = document.createElement("p"); // Création du paragraphe d'ajout
    pElt.textContent = "Ajouté par " + site.auteur;

    // Définititon du style
    titleElt.style.fontSize = "20px";
    lienElt.style.textDecoration = "none";
    lienElt.style.color = "#428bca";
    dlElt.style.marginBottom = "10px";
    dlElt.style.padding = "5px";
    dlElt.style.backgroundColor = "white";


    // Lien entre les éléments créés
    titleElt.appendChild(lienElt);
    dtElt.appendChild(titleElt);
    dtElt.appendChild(document.createTextNode(" " + site.url));
    dlElt.appendChild(dtElt);
    dlElt.appendChild(pElt);
    divElt.appendChild(dlElt);

});

document.getElementById("contenu").appendChild(divElt); // Ajout de la div contenant les listes à la page