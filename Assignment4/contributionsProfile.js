

function ajouteAllElements(){
  if(localStorage.contribDone){
  var contentToAdd=JSON.parse(localStorage.contribDone);
}
  else{alert("does not exist");}
  for(var index=0; index<contentToAdd.length;index++){
    console.log(contentToAdd[index]);

    ajouteElement(index);

  }
}
ajouteAllElements();

function ajouteElement(indexStorage) {
  // crée un nouvel élément div
  // et lui donne un peu de contenu
  const nouveauDiv = document.createElement("div");
  var index;
    nouveauDiv.className="draggable firstOnglet contrib";

    if(localStorage.contribDone){
    var contentToAdd=JSON.parse(localStorage.contribDone);
    }
    else{alert("does not exist");}

    if (indexStorage<0){
      index=contentToAdd.length-1;
    }
    else{
      index=indexStorage;
    }

  if (contentToAdd[index]["offOrFan"]=="official"){
    nouveauDiv.className+=" official";
  }
  else{
    nouveauDiv.className+=" fanArt";
  }


  if(contentToAdd[index]["category"]=="poster"){
    var nouveauText = document.createElement("p");
    var text = "Contribution from "+contentToAdd[index]["from"];
    var node = document.createTextNode(text);
    nouveauText.appendChild(node);
    nouveauDiv.appendChild(nouveauText); //ajoute le contenu au div
    var newLink=document.createElement('a');
    newLink.href=contentToAdd[index]["page"];
    var newImage=document.createElement("img");
    newImage.src=contentToAdd[index]["img"];
    nouveauDiv.appendChild(newLink);
    newLink.appendChild(newImage);

    }
    else if (contentToAdd[index]["category"] == "post"){
      var nouveauText = document.createElement("p");
      var text = "Contribution from "+contentToAdd[index]["from"];
      var node = document.createTextNode(text);
      nouveauText.appendChild(node);
      nouveauDiv.appendChild(nouveauText); //ajoute le contenu au div
      var newLink=document.createElement('a');
      newLink.href=contentToAdd[index]["page"];
      if(contentToAdd[index]["type"]=="drawing"){
        var newImage=document.createElement("img");
        newImage.src=contentToAdd[index]["img"];
        nouveauDiv.appendChild(newLink);
        newLink.appendChild(newImage);
      }
      else if (contentToAdd[index]["type"]=="video"){
        var newVideo=document.createElement("video");
        newVideo.src=contentToAdd[index]["img"];
        nouveauDiv.appendChild(newLink);
        newLink.appendChild(newVideo);
      }
      else if(contentToAdd[index]["type"] == "audio"){
        var newSound=document.createElement("audio");
        newSound.src=contentToAdd[index]["img"];
        nouveauDiv.appendChild(newLink);
        newLink.appendChild(newSound);
      }
      var postComment = document.createElement("p");
      var comm = contentToAdd[index]["text"];
      var node = document.createTextNode(comm);
      postComment.appendChild(node);
      nouveauDiv.appendChild(postComment);

    }


  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  const divActuel = document.getElementById("beginning");

  document.getElementById("ong1Content").insertBefore(nouveauDiv, divActuel);

}

window.addEventListener('test', function(e){

  alert("");
  /*console.log(evt.key);*/
});
/*function(e) {
  document.querySelector('.my-key').textContent = e.key;
  document.querySelector('.my-old').textContent = e.oldValue;
  document.querySelector('.my-new').textContent = e.newValue;
  document.querySelector('.my-url').textContent = e.url;
  document.querySelector('.my-storage').textContent = e.storageArea;
});*/
