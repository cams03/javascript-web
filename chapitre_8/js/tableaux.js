ajaxGet("http://localhost/data/tableaux.json", function (reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
    var tableaux = JSON.parse(reponse);
    var tableElt = document.getElementById("table");
    // Affiche le titre de chaque film
    tableaux.forEach(function (tableau) {
        var ligne = document.createElement("tr");
        var nomTableau = document.createElement("td");
        var anneeTableau = document.createElement("td");
        var peintreTableau = document.createElement("td");
        nomTableau.textContent = tableau.titre;
        anneeTableau.textContent =tableau.annee;
        peintreTableau.textContent = tableau.peintre;
        ligne.appendChild(nomTableau);
        ligne.appendChild(anneeTableau);
        ligne.appendChild(peintreTableau);
        tableElt.appendChild(ligne);

    })
});
