var form = document.querySelector("form");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  var temoignage = {
  		pseudo : form.elements.pseudo.value,
  		evaluation : form.elements.note.value,
  		message : form.elements.message.value

  	}
  ajaxPost("https://oc-jswebsrv.herokuapp.com/api/temoignage", temoignage, function(
    reponse
  ) {
    var messageElt = document.createElement("p");
    messageElt.textContent = "Le témoignage a bien été ajouté.";
    document.getElementById("resultat").appendChild(messageElt);
    console.log(temoignage.pseudo);
    console.log(temoignage.evaluation);
    console.log(temoignage.message);
  });
});