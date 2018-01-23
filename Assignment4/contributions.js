





ajouteElement();

function ajouteElement() {
  // crée un nouvel élément div
  // et lui donne un peu de contenu
  const nouveauDiv = document.createElement("div");
  const nouveauContenu = document.createTextNode("Salutations !");
  nouveauDiv.appendChild(nouveauContenu); //ajoute le contenu au div

  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  const divActuel = document.getElementById("beginning");

  document.getElementById("ong1Content").insertBefore(nouveauDiv, divActuel);
    alert("here");
}
