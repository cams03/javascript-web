// Accès à la météo de Lyon avec la clé d'accès 50a65432f17cf542
var formElt = document.getElementById("form");
formElt.addEventListener("submit", function(e) {
  e.preventDefault();
var nomProfil = formElt.elements.profil.value;
ajaxGet("https://api.github.com/users/" + nomProfil, function (reponse) {
    var profil = JSON.parse(reponse);
    // Récupération de certains résultats
    var nom = document.createElement("h2");
    nom.textContent = profil.name;
    var employeur = document.createElement("p");
    employeur.textContent = profil.company;
    var site = document.createElement("a");
    site.href = profil.blog;
    site.textContent = profil.blog;
    var imageElt = document.createElement("img");
    var imageUrl = profil.avatar_url;
    imageElt.src = imageUrl;
    imageElt.style.height = "100px";
    imageElt.style.width = "100px";
    // Affichage des résultats
    var infos = document.getElementById("infos");
     infos.innerHTML = ""; 
    infos.appendChild(imageElt);
    infos.appendChild(nom);
    infos.appendChild(employeur);
    infos.appendChild(site);

});
})
