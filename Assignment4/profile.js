/*
if(localStorage.ageOutput){
//alert(localStorage.ageOutput);
document.getElementById("ageOutput").value=localStorage.ageOutput + " years old";

}
if(localStorage.genderOutput){
document.getElementById("genderOutput").value=localStorage.genderOutput;//getItem("genderOutput");
}
if(localStorage.countryOutput){
document.getElementById("countryOutput").value=localStorage.countryOutput;//getItem("countryOutput");
}


function infoPerso(){
  document.getElementById("ageOutput").value=document.getElementById("age").value;
  //alert(document.getElementById("ageOutput").value);
  //localStorage.setItem("ageOutput",document.getElementById("ageOutput").value );
  localStorage.ageOutput=document.getElementById("ageOutput").value;
  if(document.getElementById("male").checked){
    document.getElementById("genderOutput").value="male";

  }
  else{
    document.getElementById("genderOutput").value="female";
  }
  localStorage.genderOutput=document.getElementById("genderOutput").value;
  alert(document.getElementById("genderOutput").value);

  //localStorage.setItem("genderOutput",document.getElementById("genderOutput").value );
  document.getElementById("countryOutput").value=document.getElementById("country").value;
    localStorage.countryOutput=document.getElementById("countryOutput").value;
  //localStorage.setItem("countryOutput", document.getElementById("countryOutput").value);
  document.getElementById("infosPerso").style.display="none";
  document.getElementById("showHideInfosPerso").value="Modify my personal information";
}
alert("file");
function showForm(){
  alert("start");
  if(document.getElementById("infosPerso").style.display=="none"){
    alert("h");
    document.getElementById("infosPerso").style.display="block";
    document.getElementById("showHideInfosPerso").value="Hide";
  }
  else {
    document.getElementById("infosPerso").style.display="none";
    document.getElementById("showHideInfosPerso").value="Modify my personal information";
  }


}*/
/*
//drag and drop
(function() {
var dndHandler = {

    draggedElement: null, // Propriété pointant vers l'élément en cours de déplacement

    applyDragEvents: function(element) {

        //element.draggable = true;

        var dndHandler = this; // Cette variable est nécessaire pour que l'événement « dragstart » accède facilement au namespace « dndHandler »

        element.addEventListener('dragstart', function(e) {
            dndHandler.draggedElement = e.target; // On sauvegarde l'élément en cours de déplacement
            e.dataTransfer.setData('text/plain', ''); // Nécessaire pour Firefox
        });

    },

    // […]

    applyDropEvents: function(dropper) {

        dropper.addEventListener('dragover', function(e) {
            e.preventDefault(); // On autorise le drop d'éléments
            this.className = 'dropper drop_hover'; // Et on applique le style adéquat à notre zone de drop quand un élément la survole
        });

        dropper.addEventListener('dragleave', function() {
            this.className = 'dropper'; // On revient au style de base lorsque l'élément quitte la zone de drop
        });

    var dndHandler=this;
    dropper.addEventListener('drop', function(e) {

        var target = e.target,
            draggedElement = dndHandler.draggedElement, // Récupération de l'élément concerné
            clonedElement = draggedElement.cloneNode(true); // On créé immédiatement le clone de cet élément

                            while (target.className.indexOf('dropper') == -1) { // Cette boucle permet de remonter jusqu'à la zone de drop parente
                                target = target.parentNode;
                            }

                            target.className = 'dropper'; // Application du style par défaut

                            clonedElement = target.appendChild(clonedElement); // Ajout de l'élément cloné à la zone de drop actuelle
                            dndHandler.applyDragEvents(clonedElement); // Nouvelle application des événements qui ont été perdus lors du cloneNode()

                            draggedElement.parentNode.removeChild(draggedElement); // Suppression de l'élément d'origine

                        });

                    }

                };

var elements = document.querySelectorAll('.draggable'),
    elementsLen = elements.length;

for (var i = 0; i < elementsLen; i++) {
    dndHandler.applyDragEvents(elements[i]); // Application des paramètres nécessaires aux éléments déplaçables
}

var droppers = document.querySelectorAll('.dropper'),
    droppersLen = droppers.length;

for (var i = 0; i < droppersLen; i++) {
    dndHandler.applyDropEvents(droppers[i]); // Application des événements nécessaires aux zones de drop
}
})();
*/
alert("js file");
(function() {

    var dndHandler = {

        draggedElement: null, // Propriété pointant vers l'élément en cours de déplacement

        applyDragEvents: function(element) {

            element.draggable = true;

            var dndHandler = this; // Cette variable est nécessaire pour que l'événement « dragstart » ci-dessous accède facilement au namespace « dndHandler »

            element.addEventListener('dragstart', function(e) {
                dndHandler.draggedElement = e.target; // On sauvegarde l'élément en cours de déplacement
                e.dataTransfer.setData('text/plain', ''); // Nécessaire pour Firefox
            });

        },

        applyDropEvents: function(dropper) {

            dropper.addEventListener('dragover', function(e) {
                e.preventDefault(); // On autorise le drop d'éléments
                this.className = 'dropper drop_hover'; // Et on applique le style adéquat à notre zone de drop quand un élément la survole
            });

            dropper.addEventListener('dragleave', function() {
                this.className = 'dropper'; // On revient au style de base lorsque l'élément quitte la zone de drop
            });

            var dndHandler = this; // Cette variable est nécessaire pour que l'événement « drop » ci-dessous accède facilement au namespace « dndHandler »

            dropper.addEventListener('drop', function(e) {

                var target = e.target,
                    draggedElement = dndHandler.draggedElement, // Récupération de l'élément concerné
                    clonedElement = draggedElement.cloneNode(true); // On créé immédiatement le clone de cet élément

                while (target.className.indexOf('dropper') == -1) { // Cette boucle permet de remonter jusqu'à la zone de drop parente
                    target = target.parentNode;
                }

                target.className = 'dropper'; // Application du style par défaut

                clonedElement = target.appendChild(clonedElement); // Ajout de l'élément cloné à la zone de drop actuelle
                dndHandler.applyDragEvents(clonedElement); // Nouvelle application des événements qui ont été perdus lors du cloneNode()

                draggedElement.parentNode.removeChild(draggedElement); // Suppression de l'élément d'origine

            });

        }

    };

    var elements = document.querySelectorAll('.draggable'),
        elementsLen = elements.length;

    for (var i = 0; i < elementsLen; i++) {
        dndHandler.applyDragEvents(elements[i]); // Application des paramètres nécessaires aux éléments déplaçables
    }

    var droppers = document.querySelectorAll('.dropper'),
        droppersLen = droppers.length;

    for (var i = 0; i < droppersLen; i++) {
        dndHandler.applyDropEvents(droppers[i]); // Application des événements nécessaires aux zones de drop
    }

})();
