// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

window.addEventListener("load", function () {

    let maisonsElt = "";

    for (let i = 0; i <= maisons.length; i++) {
        maisonsElt = document.createElement("option");
        maisonsElt.textContent = maisons[i].nom;
        maisonsElt.value = maisons[i].code;
        document.getElementById("maison").appendChild(maisonsElt);
    }
})

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return [];
    }
}

// Crée et renvoie un élément HTML <li>
function creerElementLi(texte) {
    var element = document.createElement("li");
    element.textContent = texte;
    return element;
}

let option = document.querySelector("select");

option.addEventListener("change", function (e) {
    // La valeur cible de l'évènement est le code de la maison
    let persos = getPersonnages(e.target.value);
    let persosElt = document.getElementById("persos");
    persosElt.innerHTML = ""; // Vidage de la liste
    // Ajout de chaque personnage à la liste
    persos.forEach(function (perso) {
        persosElt.appendChild(creerElementLi(perso));
    });
});