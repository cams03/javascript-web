/*La propriété innerHTML peut être utilisée pour modifier le contenu HTML d'un élément du DOM. 

Par exemple, on peut ajouter un nouveau langage à notre liste grâce au code ci-dessous. On accède à la balise <ul>  identifiée par "langages", puis on lui ajoute (opérateur += ) une entrée sous la forme d'une balise <li>.

Modification du contenu HTML de la liste : ajout d'un langage*/
document.getElementById("langages").innerHTML += '<li id="c">C</li>';

//innerHTML est souvent employée pour "vider" un élément de tout son contenu
// Suppression du contenu HTML de la liste:
//document.getElementById("langages").innerHTML = "";

//La propriété textContent permet de modifier le contenu textuel d'un élément du DOM. Voici par exemple comment compléter le titre affiché par notre page.

// Modification du contenu textuel du premier titre
document.querySelector("h1").textContent += " de programmation";

//Les attributs

//La méthode setAttribute permet de définir la valeur de l'un des attributs d'un élément. Elle prend en paramètres le nom et la valeur de cet attribut.

// Définition de l'attribut "id" du premier titre
document.querySelector("h1").setAttribute("id", "titre");

//Certains attributs comme id ,href et value sont directement modifiables sous la forme de propriétés. Le code ci-dessous est équivalent au précédent:
document.querySelector("h1").id = "titre";

//Les classes

//On peut utiliser la propriété classList pour ajouter ou supprimer des classes à un élément du DOM. Pour cela, on emploie les méthodes add (ajout) et remove (suppression), comme dans l'exemple suivant:
var titreElt = document.querySelector("h1"); // Accès au premier titre h1
titreElt.classList.remove("debut"); // Suppression de la classe "debut"
titreElt.classList.add("titre"); // Ajout de la classe "titre"
console.log(titreElt);

/*L'ajout d'un nouvel élément à une page web peut se décomposer en trois opérations :

Création du nouvel élément.
Définition des informations de l'élément.
Insertion du nouvel élément dans le DOM.
Par exemple, imaginons que l'on souhaite ajouter le langage "Python" à la liste des langages de notre page. Voici le code JavaScript qui permet d'obtenir ce résultat.*/

var pythonElt = document.createElement("li"); // Création d'un élément li
pythonElt.id = "python"; // Définition de son identifiant
pythonElt.textContent = "Python"; // Définition de son contenu textuel
document.getElementById("langages").appendChild(pythonElt); // Insertion du nouvel élément

/*Création d'un noeud textuel

Dans l'exemple précédent, nous avons défini le contenu textuel du nouvel élément à l'aide de la propriété textContent . Il est possible d'aboutir au même résultat en ajoutant au nouvel élément un noeud fils de type texte. Pour cela, on utilise la méthode createTextNode qui, comme son nom l'indique, crée un nouveau noeud de type texte. Ensuite, on ajoute le noeud texte à l'élément avec appendChild .

Il est possible de combiner les deux opérations en une seule ligne, comme dans cet exemple qui ajout le langage "Ruby" à la liste:*/

var rubyElt = document.createElement("li"); // Création d'un élément li
rubyElt.id = "ruby"; // Définition de son identifiant
rubyElt.appendChild(document.createTextNode("Ruby")); // Définition de son contenu textuel
document.getElementById("langages").appendChild(rubyElt); // Insertion du nouvel élément

/*Ajout d'un noeud avant un autre noeud

On souhaite parfois insérer un nouvel élément ailleurs que comme dernier fils de son élément parent. Dans notre exemple, on pourrait vouloir ajouter le langage Perl avant le langage PHP dans la liste. Pour cela, il existe la méthode insertBefore . On l'appelle sur le futur élément parent et on lui passe en paramètres le nouveau noeud ainsi que le noeud avant lequel le nouveau noeud sera inséré.

Par exemple, le code suivant ajoute le langage Perl avant le langage PHP dans la liste:*/
var perlElt = document.createElement("li"); // Création d'un élément li
perlElt.id = "perl"; // Définition de son identifiant
perlElt.textContent = "Perl"; // Définition de son contenu textuel
// Ajout du nouvel élément avant l'identifiant identifié par "php"
document.getElementById("langages").insertBefore(perlElt,
    document.getElementById("php"));

/*Choix de la position exacte du nouveau noeud

Il existe également une méthode plus récente qui permet de définir encore plus précisément la position des éléments insérés :insertAdjacentHTML. On l'appelle sur un élément existant et elle prend en paramètres une position et une chaîne de caractères HTML qui représente le nouveau contenu à ajouter. La position du nouveau contenu doit être une valeur parmi :

beforebegin : avant l'élément existant lui-même.
afterbegin : juste à l'intérieur de l'élément existant, avant son premier enfant.
beforeend : juste à l'intérieur de l'élément existant, après son dernier enfant.
afterend : après l'élément existant lui-même.
L'exemple ci-dessous utiliseinsertAdjacentHTML pour ajouter le langage JavaScript au tout début de la liste.*/

// Ajout d'un élément au tout début de la liste
document.getElementById('langages').insertAdjacentHTML("afterBegin",
    '<li id="javascript">JavaScript</li>');

/*Remplacer un noeud existant

Le remplacement d'un élément du DOM par un autre s'effectue au moyen de la méthode replaceChild. Celle-ci remplace un nœud enfant de l'élément courant par un autre nœud.Elle prend en paramètres (dans cet ordre) le nouveau noeud et celui qui est remplacé.

L'exemple ci-dessous permet de remplacer le langage Perl par un nouvel élément correspondant au langage Bash.*/

var bashElt = document.createElement("li"); // Création d'un élément li
bashElt.id = "bash"; // Définition de son identifiant
bashElt.textContent = "Bash"; // Définition de son contenu textuel
// Remplacement de l'élément identifié par "perl" par le nouvel élément
document.getElementById("langages").replaceChild(bashElt, document.getElementById("perl"));

/*Supprimer un noeud existant

Enfin, il est possible de supprimer un noeud à l'aide de la méthode removeChild . Elle prend en paramètre le noeud à supprimer du DOM.*/

// Suppression de l'élément identifié par "bash"
document.getElementById("langages").removeChild(document.getElementById("bash"));

var parElt = document.createElement("p");
var lienElt = document.createElement("a");
lienElt.href = " https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation";
lienElt.textContent = " liste";
parElt.appendChild(document.createTextNode("En voici une "));
parElt.appendChild(lienElt);
parElt.appendChild(document.createTextNode(" plus complète"));
document.getElementById("contenu").appendChild(parElt);