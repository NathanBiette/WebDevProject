





ajouteElement(1,0);

function ajouteElement(official, indexStorage) {
  // crée un nouvel élément div
  // et lui donne un peu de contenu
  const nouveauDiv = document.createElement("div");
    nouveauDiv.className="draggable firstOnglet contrib";
  if (official==1){
    nouveauDiv.className+=" official";
  }
  else{
    nouveauDiv.className+=" fanArt";
  }



  alert(nouveauDiv.className);
  if(localStorage.contribDone){
  var contentToAdd=JSON.parse(localStorage.contribDone);
  alert(contentToAdd);}
  else{alert("does not exist");}
  const nouveauContenu = document.createTextNode("Salutations !");
  nouveauDiv.appendChild(nouveauContenu); //ajoute le contenu au div

  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  const divActuel = document.getElementById("beginning");

  document.getElementById("ong1Content").insertBefore(nouveauDiv, divActuel);

}