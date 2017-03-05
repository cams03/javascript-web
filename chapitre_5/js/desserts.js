document.querySelector("button").addEventListener("click", function (e) {

    var saisie = prompt("Entrez un dessert");
    var dessertElt = document.createElement("li");
    dessertElt.textContent = saisie;

    dessertElt.addEventListener("click", function (e) {
        var modification = prompt("Modifiez votre dessert:", e.target.textContent);
        e.target.textContent = modification;
    });

    document.getElementById("desserts").appendChild(dessertElt);



})