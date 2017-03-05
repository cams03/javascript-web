let form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    let mdp1 = form.elements.mdp1.value;
    let mdp2 = form.elements.mdp2.value;
    let message = "Mot de passe OK";

    if (mdp1 === mdp2) {
        if (mdp1.length >= 6) {
            let regExMdp = /\d+/;

            if (!regExMdp.test(mdp1)) {
                message = "Le mot de passe doit contenir au moins un chiffre";
            }
        } else {
            message = "Le mot de passe doit contenir au moins 6 caractères";
        }

    } else {
        message = "Erreur : les deux mots de passe ne correspondent pas";
    }

    document.getElementById("infoMdp").textContent = message;

    e.preventDefault();
})