/* En JavaScript, on accède à la valeur d'une zone de texte en utilisant la propriétévaluede l'élément du DOM correspond. En donnant une nouvelle valeur à cette propriété, on modifie la valeur affichée dans la zone de texte.

L'exemple suivant donne à la zone de saisie identifiée par "pseudo" la valeur "MonPseudo".*/

var pseudoElt = document.getElementById("pseudo");
pseudoElt.value = "MonPseudo";

/* GESTION DU FOCUS

Lorsqu'une zone de texte est la cible de saisie, on dit que cette zone possède le focus. L'utilisateur d'un formulaire qui clique sur une zone de saisie pour y taper une information déclenche l'apparition d'un événement de typefocus. Inversement,  le changement de cible de saisie provoque l'apparition d'un événement de typeblursur l'ancienne zone qui avait le focus.

On peut utiliser ces événements pour afficher à l'utilisateur une aide contextuelle associée à la zone de saisie courante, comme dans l'exemple suivant.*/

// Affiche d'un message contextuel pour la saisie du pseudo
pseudoElt.addEventListener("focus", function () {
    document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
});
// Suppression du message contextuel pour la saisie du pseudo
pseudoElt.addEventListener("blur", function (e) {
    document.getElementById("aidePseudo").textContent = "";
});

/* En cliquant dans la zone de saisie du pseudo, vous obtenez l'affichage d'un message informatif dans la balise <span> prévue a cet effet et initialement vide

Depuis le code JavaScript, on peut modifier la cible de saisie en appelant les méthodesfocus(pour donner le focus) etblur(pour l'enlever) sur un élément du DOM.*/

// Focus sur la zone de saisie du pseudo
pseudoElt.focus();

/* Le fonctionnement des zones de texte multilignes (balises<textarea>) est similaire à celui des balises<input>.

LES ELEMENTS D'OPTIONS

Ces éléments permettent à l'utilisateur de faire un choix parmi plusieurs possibilités. Ils ont en commun de déclencher un événement de type changelorsque l'utilisateur modifie son choix.

Cases à cocher

On définit une case à cocher dans un formulaire avec la balise <input type="checkbox">. 

Voici l'extrait du formulaire initial qui permet de demander à l'utilisateur s'il souhaite ou non obtenir une confirmation de son inscription.*/

//< input type = "checkbox"
//name = "confirmation"
//id = "confirmation" >
//    < label
//for = "confirmation" > M 'envoyer un courriel de confirmation</label>

/*Lorsque la case change de valeur, l'objetEventassocié à l'événement dispose d'une propriété booléenne checked qui indique le nouvel état de la case (cochée/décochée).

L'exemple de code ci-dessous gère les événementschangesur la case à cocher pour afficher dans la console le choix effectué lorsque l'utilisateur clique dans la case ou sur le libellé associé.*/

// Affichage de la demande de confirmation d'inscription
document.getElementById("confirmation").addEventListener("change", function (e) {
    console.log("Demande de confirmation : " + e.target.checked);
});

/* Boutons radio

Un groupe de boutons radio permet à l'utilisateur de faire un seul choix parmi plusieurs possibilités. On crée ces boutons avec des balises<input type="radio"> possédant le même attributname et des attributsvaluedifférents.

Voici l'extrait du formulaire initial qui crée trois boutons radio permettant de choisir un type d'abonnement.*/

//< input type = "radio" name = "abonnement" id = "abonewspromo" value = "abonewspromo" >
//< label for = "abonewspromo" > M 'abonner à la newsletter et aux promotions</label> < br > < input type = "radio"name = "abonnement"
//id = "abonews"value = "abonews" >
//< label for = "abonews" > M 'abonner uniquement à la newsletter</label> < br > < input type = "radio" name = "abonnement" id = "aborien" value = "aborien"
//checked >
//< label for = "aborien" > Ne pas m 'abonner</label> < br >

/*L'exemple de code suivant ajoute le même gestionnaire pour les événements de typechangesur chacun des boutons radio, afin d'afficher dans la console le type d'événement choisi.*/

// Affichage du type d'abonnement choisi
var aboElts = document.getElementsByName("abonnement");
for (var i = 0; i < aboElts.length; i++) {
    aboElts[i].addEventListener("change", function (e) {
        console.log("Formule d'abonnement choisie : " + e.target.value);
    });
}

/*Listes déroulantes

On construit une liste déroulante au moyen d'une balise<select> dans laquelle on ajoute une balise<option> par choix possible dans la liste.

Voici l'extrait du formulaire initial qui crée une liste déroulante contenant trois nationalités.*/

//< label for = "nationalite" > Nationalité: < /label> < select name = "nationalite" id = "nationalite" >
//< option value = "FR" selected > Française < /option>
//< option value = "BE" > Belge < /option > 
//< option value = "SUI" > Suisse < /option> 
//< option value = "XX" > Autre < /option > < /select>

/*L'exemple de code suivant exploite les événements de typechangedéclenchés sur la liste déroulante pour afficher le nouveau choix (attributvaluede la balise<option>associée au choix).*/

// Affichage du code de nationalité choisi
document.getElementById("nationalite").addEventListener("change", function (e) {
    console.log("Code de nationalité : " + e.target.value);
});

/* Accès aux champs du formulaire

La balise<form> définissant un formulaire correspond à un élément du DOM. Cet élément possède une propriétéelementsrassemblant les champs de saisie du formulaire. On peut l'utiliser pour accéder à un champ à partir de son nom (attributname) ou à partir de son indice dans (ordre d'apparition dans le formulaire).

L'exemple ci-dessous affiche quelques informations sur les champs de saisie du formulaire initial.*/

var form = document.querySelector("form");
console.log("Nombre de champs de saisie : " + form.elements.length); // Affiche 10
console.log(form.elements[0].name); // Affiche "pseudo"
console.log(form.elements.mdp.type); // Affiche "password"

/* Soumission du formulaire

Un formulaire est soumis lorsque l'utilisateur clique sur le bouton d'envoi. Ce bouton correspond à une balise<input type="submit">. Une balise<input type="reset"> affiche un bouton qui réinitialise les données du formulaire.

Voici l'extrait du formulaire initial qui affiche deux boutons dans le formulaire.*/

//< input type = "submit" value = "Envoyer" >
//< input type = "reset" value = "Annuler" >

/* En règle générale, la soumission d'un formulaire se traduit par l'envoi de ses données à la ressource identifiée par l'attributactionde la balise  <form>. Mais avant cela, un événement de typesubmitest déclenché sur l'élément du DOM correspondant au formulaire. En ajoutant un gestionnaire pour ce type d'événement, on peut accéder aux données du formulaire avant leur envoi. On peut même annuler l'envoi ultérieur des données en appelant la méthodepreventDefaultsur l'objetEventassocié à l'événement.

L'exemple de code ci-dessous affiche dans la console l'ensemble des informations saisies ou choisies par l'utilisateur, puis utilise la méthode preventDefaultpour annuler l'envoi des données du formulaire.*/

// Affiche de toutes les données saisies ou choisies
form.addEventListener("submit", function (e) {
    var pseudo = form.elements.pseudo.value;
    var mdp = form.elements.mdp.value;
    var courriel = form.elements.courriel.value;
    console.log("Vous avez choisi le pseudo " + pseudo + ", le mot de passe " +
        mdp + " et le courriel " + courriel);
    if (form.elements.confirmation.checked) {
        console.log("Vous avez demandé une confirmation d'inscription par courriel");
    } else {
        console.log("Vous n'avez pas demandé de confirmation d'inscription par courriel");
    }
    switch (form.elements.abonnement.value) {
    case "abonewspromo":
        console.log("Vous êtes abonné(e) à la newsletter et aux promotions");
        break;
    case "abonews":
        console.log("Vous êtes abonné(e) à la newsletter");
        break;
    case "aborien":
        console.log("Vous n'êtes abonné(e) à rien");
        break;
    default:
        console.log("Erreur : code d'abonnement non reconnu");
    }
    switch (form.elements.nationalite.value) {
    case "FR":
        console.log("Vous êtes français(e)");
        break;
    case "BE":
        console.log("Vous êtes belge");
        break;
    case "SUI":
        console.log("Vous êtes suisse");
        break;
    default:
        console.log("Erreur : code de nationalité non reconnu");
    }
    e.preventDefault(); // Annulation de l'envoi des données
});

/* VALIDATION DES DONEES SAISIES    

Contrôler les données saisies par l'utilisateur avant de les envoyer à un serveur est l'un des grands intérêts de l'utilisation de JavaScript avec les formulaires web. Ainsi, on peut signaler immédiatement d'éventuelles erreurs de saisie, ce qui améliore l'expérience de l'utilisateur. On évite également des allers-retours réseau coûteux en temps.

Le contrôle de validité peut se faire de plusieurs manières, éventuellement combinables :

au fur et à mesure de la saisie d'une donnée ;
à la fin de la saisie d'une donnée ;
au moment où l'utilisateur soumet le formulaire.

Cette dernière technique consiste simplement à ajouter des vérifications dans le gestionnaire des événementssubmitsur le formulaire. Nous allons étudier de plus près les deux autres.

Validation pendant la saisie

La validation pendant la saisie repose sur l'exploitation des événementsinput, qui se déclenchent sur une zone de saisie à chaque fois que sa valeur est modifiée.

L'exemple de code suivant ajoute un gestionnaire pour les événementsinputsur la zone de saisie du mot de passe. Ce gestionnaire vérifie la longueur (nombre de caractères) du mot de passe saisi et affiche à l'utilisateur un message ayant un contenu et une couleur appropriés.*/

// Vérification de la longueur du mot de passe saisi
document.getElementById("mdp").addEventListener("input", function (e) {
    var mdp = e.target.value; // Valeur saisie dans le champ mdp
    var longueurMdp = "faible";
    var couleurMsg = "red"; // Longueur faible => couleur rouge
    if (mdp.length >= 8) {
        longueurMdp = "suffisante";
        couleurMsg = "green"; // Longueur suffisante => couleur verte
    } else if (mdp.length >= 4) {
        longueurMdp = "moyenne";
        couleurMsg = "orange"; // Longueur moyenne => couleur orange
    }
    var aideMdpElt = document.getElementById("aideMdp");
    aideMdpElt.textContent = "Longueur : " + longueurMdp; // Texte de l'aide
    aideMdpElt.style.color = couleurMsg; // Couleur du texte de l'aide
});

/* Validation à la fin de la saisie

La fin de la saisie dans une zone de texte correspond à la perte du focus par cette zone, ce qui déclenche l'apparition d'un événement de typeblurque l'on peut exploiter pour contrôler la données saisie.

Imaginons par exemple que l'on veuille contrôler le courriel saisi par l'utilisateur de notre formulaire. Dans un premier temps, on souhaite vérifier uniquement la présence du caractère@dans le courriel saisi. Pour cela, on peut utiliser la méthode JavaScript indexOf, qui permet de chercher une valeur dans une chaîne de caractères et renvoie la valeur -1 si cette valeur n'est  pas trouvée.

Voici le code JavaScript associé à cette vérification.*/

// Contrôle du courriel en fin de saisie
document.getElementById("courriel").addEventListener("blur", function (e) {
    var validiteCourriel = "";
    if (e.target.value.indexOf("@") === -1) {
        // Le courriel saisi ne contient pas le caractère @
        validiteCourriel = "Adresse invalide";
    }
    document.getElementById("aideCourriel").textContent = validiteCourriel;
});