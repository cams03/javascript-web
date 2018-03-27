
ajaxGet("https://oc-jswebsrv.herokuapp.com/api/liens", function(reponse){
    var listeLiens = JSON.parse(reponse);
    console.log(listeLiens);
    //Création d'un site pour chaque objet du tableau via la fonction creerElementSite
    listeLiens.forEach(function (site) {
        var siteElt = creerElementSite(site);
        contenuElt.appendChild(siteElt);
    });
})

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

var contenuElt = document.getElementById("contenu"); 
//Création du bouton d'ajout
var zoneBoutonElt = document.createElement("div");
zoneBoutonElt.id= "bouton";
var boutonElt = document.createElement("button");
boutonElt.textContent = "Ajouter un lien";
zoneBoutonElt.appendChild(boutonElt);
contenuElt.insertAdjacentElement("beforebegin",zoneBoutonElt);


//Création du formulaire et remplacement du bouton au clic du bouton d'ajout
var formElt;
function createForm(){
    formElt = document.createElement("form");
    formElt.id = "form";
    formElt.style.display ="none";
    zoneBoutonElt.appendChild(formElt);
    //Création des champs de saisie
    var inputTitre = document.createElement("input");
        inputTitre.type = "text";
        inputTitre.id = "titre";
        inputTitre.name = "titre";
        inputTitre.placeholder = "Entrez le nom du site";
        inputTitre.required = true;
 
    var inputUrl = document.createElement("input");
        inputUrl.type = "text";
        inputUrl.id = "url";
        inputUrl.name = "url";
        inputUrl.placeholder = "Entrez l'url du site";
        inputUrl.required = true;
 
    var inputAuteur = document.createElement("input");
        inputAuteur.type = "text";
        inputAuteur.id = "auteur";
        inputAuteur.name = "auteur";
        inputAuteur.placeholder = "Entrez votre nom";
        inputAuteur.required = true;
 
    var inputEnvoi = document.createElement("input");
        inputEnvoi.type = "submit";
        inputEnvoi.value = "Envoyer";
 
    formElt.appendChild(inputAuteur);
    formElt.appendChild(inputTitre);
    formElt.appendChild(inputUrl);
    formElt.appendChild(inputEnvoi);

    formElt.addEventListener("submit", function(e) {
        e.preventDefault();
        var newObj = {
            titre: formElt.elements.titre.value,
            url: formElt.elements.url.value,
            auteur: formElt.elements.auteur.value
        };
        //Première lettre du titre en majuscule
        newObj.titre = newObj.titre.charAt(0).toUpperCase() + newObj.titre.substring(1).toLowerCase();
        
        //Ajout du http:// s'il n'est pas saisi
        var regEx = /http+\:+\/+\//;
        if (!regEx.test(inputUrl.value)) {
            newObj.url="http://"+inputUrl.value;
        }
        
        // Remplace le formulaire d'ajout par le bouton d'ajout
        formElt.style.display ="none";  
        setTimeout(function () {
            boutonElt.style.display ="block";
        }, 2100);
        
        ajaxPost("https://oc-jswebsrv.herokuapp.com/api/lien", newObj, function(reponse) {
            console.log(newObj.titre);
            console.log(newObj.url);
            console.log(newObj.auteur);
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
            
        },true);
    });
}
    
document.addEventListener("DOMContentLoaded", createForm);

boutonElt.addEventListener("click", function(){
    boutonElt.style.display ="none";
    formElt.style.display ="block";    
});

