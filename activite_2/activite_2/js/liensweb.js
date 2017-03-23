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



// Pour chaque site, on construit une balise <dl> pour avoir 3 <dl> et leur mettre des margin bottom

//Fonction qui créé un site
function creerElementSite(site) {
    // div englobant tous les dl
    var divElt = document.createElement("div");
    // Création de la liste
    var dlElt = document.createElement("dl"); 
    var dtElt = document.createElement("dt");
    // Création du titre en gras
    var titleElt = document.createElement("strong"); 
    // Création du lien à introduire dans le titre
    var lienElt = document.createElement("a"); 
    lienElt.href = site.url;
    lienElt.textContent = site.titre;
    // Création du paragraphe d'ajout
    var pElt = document.createElement("p"); 
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
    
    return divElt;
};

var contenuElt = document.getElementById("contenu") 

//Création d'un site pour chaque objet du tableau via la fonction creerElementSite
listeLiens.forEach(function (site) {
        var siteElt = creerElementSite(site);
        contenuElt.appendChild(siteElt);
});

//Création du bouton d'ajout
var zoneBoutonElt = document.createElement("div");
    zoneBoutonElt.id= "bouton";
var boutonElt = document.createElement("button");
    boutonElt.textContent = "Ajouter un lien";
zoneBoutonElt.appendChild(boutonElt);
contenuElt.insertAdjacentElement("beforebegin",zoneBoutonElt);

//Création du formulaire et remplacement du bouton au clic du bouton d'ajout
boutonElt.addEventListener("click", function () {
    var formElt = document.createElement("form");
          formElt.id = "form";
    zoneBoutonElt.innerHTML = "";
    zoneBoutonElt.appendChild(formElt);
    //Création des champs de saisie
    var inputTitre = document.createElement("input");
        inputTitre.type = "text";
        inputTitre.id = "titre";
        inputTitre.placeholder = "Entrez le nom du site";
        inputTitre.required = true;
 
    var inputUrl = document.createElement("input");
        inputUrl.type = "text";
        inputUrl.id = "url";
        inputUrl.placeholder = "Entrez l'url du site";
        inputUrl.required = true;
 
    var inputAuteur = document.createElement("input");
        inputAuteur.type = "text";
        inputAuteur.id = "auteur";
        inputAuteur.placeholder = "Entrez votre nom";
        inputAuteur.required = true;
 
    var inputEnvoi = document.createElement("input");
        inputEnvoi.type = "submit";
        inputEnvoi.value = "Envoyer";
 
    formElt.appendChild(inputAuteur);
    formElt.appendChild(inputTitre);
    formElt.appendChild(inputUrl);
    formElt.appendChild(inputEnvoi);

    
    //Evènement lors de la soumission du formulaire
    formElt.addEventListener("submit", function (e) {
        e.preventDefault();
        // Création de l'objet contenant les données du nouveau lien
        var newObj = {
            titre: inputTitre.value,
            url: inputUrl.value,
            auteur: inputAuteur.value
        };
        //Première lettre du titre en majuscule
        newObj.titre = newObj.titre.charAt(0).toUpperCase() + newObj.titre.substring(1).toLowerCase();
    
        //Ajout du http:// s'il n'est pas saisi
        var regEx = /http+\:+\/+\//;
        if (!regEx.test(inputUrl.value)) {
            newObj.url="http://"+inputUrl.value;
        }
        //Création du nouveau site via la fonction creerElementSite    
        var siteElt = creerElementSite(newObj);
        //Insertion de l'élément crée en haut de la liste
        contenuElt.insertAdjacentElement("afterBegin", siteElt);
    
        // Création du message popUp
        var popUp = document.createElement("p");
            popUp.style.fontWeight ="bold";
            popUp.style.backgroundColor="#8bdddb";
            popUp.style.color="#09078e";
            popUp.style.padding="25px";
        zoneBoutonElt.insertAdjacentElement("beforebegin", popUp);
        //Apparition du message de confirmation pendant 2 sec
        popUp.textContent ="Le lien " + newObj.titre + " a bien été ajouté";
        setTimeout(function () {
            popUp.style.display="none";
        }, 2000);
    
        // Remplace le formulaire d'ajout par le bouton d'ajout
        zoneBoutonElt.innerHTML = "";
        zoneBoutonElt.appendChild(boutonElt);
    })
});
