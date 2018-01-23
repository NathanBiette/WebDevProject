



/*var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
FileSaver.saveAs(blob, "hello world.txt");*/

/* VERSION QUI NE FONCTIONNE PAS

if(localStorage.onglet){
  if(localStorage.onglet==1){
    document.getElementById("ong1").className="active";
    document.getElementById("ong2").classList-="active";
    document.getElementById("ong3").className-="active";
    document.getElementById("ong4").className-="active";
    document.getElementsByClassName("firstOnglet")[0].style.display="inline";
    document.getElementsByClassName("secondOnglet")[0].style.display="none";
    document.getElementsByClassName("thirdOnglet")[0].style.display="none";
    document.getElementsByClassName("fourthOnglet")[0].style.display="none";
  }
  if(localStorage.onglet==2){
    document.getElementById("ong2").className="active";
    document.getElementById("ong1").classList.remove("active");
    document.getElementById("ong3").className-="active";
    document.getElementById("ong4").className-="active";
    document.getElementsByClassName("firstOnglet")[0].style.display="none";
    document.getElementsByClassName("secondOnglet")[0].style.display="inline";
    document.getElementsByClassName("thirdOnglet")[0].style.display="none";
    document.getElementsByClassName("fourthOnglet")[0].style.display="none";
  }
  if(localStorage.onglet==3){
    document.getElementById("ong3").className="active";
    document.getElementById("ong1").className-="active";
    document.getElementById("ong2").className-="active";
    document.getElementById("ong4").className-="active";
    document.getElementsByClassName("firstOnglet")[0].style.display="none";
    document.getElementsByClassName("secondOnglet")[0].style.display="none";
    document.getElementsByClassName("thirdOnglet")[0].style.display="inline";
    document.getElementsByClassName("fourthOnglet")[0].style.display="none";
  }
  if(localStorage.onglet==4){
    document.getElementById("ong4").className="active";
    document.getElementById("ong1").className-="active";
    document.getElementById("ong2").className-="active";
    document.getElementById("ong3").className-="active";
    document.getElementsByClassName("firstOnglet")[0].style.display="none";
    document.getElementsByClassName("secondOnglet")[0].style.display="none";
    document.getElementsByClassName("thirdOnglet")[0].style.display="none";
    document.getElementsByClassName("fourthOnglet")[0].style.display="inline";
  }
}
*/

/* VERSION FIXEE DE LA PREMIERE */

/*
if (localStorage.onglet) {
  if(localStorage.onglet==1){
    $("#ong1").addClass("active");
    $("#ong1").siblings().removeClass("active");
    $("#firstOnglet").css("display","block");
    $("#firstOnglet").siblings().css("display","none");
  }
  if(localStorage.onglet==2){
    $("#ong2").addClass("active");
    $("#ong2").siblings().removeClass("active");
    $("#secondOnglet").css("display","block");
    $("#secondOnglet").siblings().css("display","none");
  }
  if(localStorage.onglet==3){
    $("#ong3").addClass("active");
    $("#ong3").siblings().removeClass("active");
    $("#thirdOnglet").css("display","block");
    $("#thirdOnglet").siblings().css("display","none");
  }
  if(localStorage.onglet==4){
    $("#ong4").addClass("active");
    $("#ong4").siblings().removeClass("active");
    $("#fourthOnglet").css("display","block");
    $("#fourthOnglet").siblings().css("display","none");
  }
}
*/




/*
*/

if(localStorage.officialChecked){
  if(localStorage.officialChecked==1){
    document.getElementsByClassName("official")[0].style.display="inline";

  }
  else{
    document.getElementsByClassName("official")[0].style.display="none";
    document.getElementById("seeOfficial").checked=false;
  }
}

if(localStorage.fanChecked){
  if(localStorage.fanChecked==1){
    document.getElementsByClassName("fanArt")[0].style.display="inline";
    document.getElementById("seeFan").checked="true";

  }
  else{
    document.getElementsByClassName("fanArt")[0].style.display="none";
  }
}







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


function showForm(){

  if(document.getElementById("infosPerso").style.display=="none"){
    document.getElementById("infosPerso").style.display="block";
    document.getElementById("modifyInfosButton").value="Hide";
  }
  else {
    document.getElementById("infosPerso").style.display="none";
    document.getElementById("modifyInfosButton").value="Modify my personal information";
  }
}
*/
/*

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
  document.getElementById("modifyInfosButton").value="Modify my personal information";
}

/*


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








/*onglets*/

/*
function changeOnglet(ongletChosen) {
  if(ongletChosen==1){
    document.getElementById("ong1").className+="active";
    document.getElementById("ong2").className-="active";
    document.getElementById("ong3").className-="active";
    document.getElementById("ong4").className-="active";
    document.getElementsByClassName("firstOnglet")[0].style.display="inline";
    document.getElementsByClassName("secondOnglet")[0].style.display="none";
    document.getElementsByClassName("thirdOnglet")[0].style.display="none";
    document.getElementsByClassName("fourthOnglet")[0].style.display="none";
    localStorage.onglet=ongletChosen;
  }
  if(ongletChosen==2){
    document.getElementById("ong2").className+="active";
    document.getElementById("ong1").className-="active";
    document.getElementById("ong3").className-="active";
    document.getElementById("ong4").className-="active";
    document.getElementsByClassName("firstOnglet")[0].style.display="none";
    document.getElementsByClassName("secondOnglet")[0].style.display="inline";
    document.getElementsByClassName("thirdOnglet")[0].style.display="none";
    document.getElementsByClassName("fourthOnglet")[0].style.display="none";
    localStorage.onglet=ongletChosen;

  }
  if(ongletChosen==3){
    document.getElementById("ong3").className+="active";
    document.getElementById("ong1").className-="active";
    document.getElementById("ong2").className-="active";
    document.getElementById("ong4").className-="active";
    document.getElementsByClassName("firstOnglet")[0].style.display="none";
    document.getElementsByClassName("secondOnglet")[0].style.display="none";
    document.getElementsByClassName("thirdOnglet")[0].style.display="inline";
    document.getElementsByClassName("fourthOnglet")[0].style.display="none";
    localStorage.onglet=ongletChosen;
  }
  if(ongletChosen==4){
    document.getElementById("ong4").className+="active";
    document.getElementById("ong1").className-="active";
    document.getElementById("ong2").className-="active";
    document.getElementById("ong3").className-="active";
    document.getElementsByClassName("firstOnglet")[0].style.display="none";
    document.getElementsByClassName("secondOnglet")[0].style.display="none";
    document.getElementsByClassName("thirdOnglet")[0].style.display="none";
    document.getElementsByClassName("fourthOnglet")[0].style.display="inline";
    localStorage.onglet=ongletChosen;
  }
}
*/


var checkboxOfficial = document.querySelector("input[id=seeOfficial]");

checkboxOfficial.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
        document.getElementsByClassName("official firstOnglet")[0].style.display="inline";
        localStorage.officialChecked=1;
    } else {

        // Checkbox is not checked..
        document.getElementsByClassName("official firstOnglet")[0].style.display="none";
        localStorage.officialChecked=0;
    }
});

var checkboxFan = document.querySelector("input[id=seeFan]");

checkboxFan.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
        document.getElementsByClassName("fanArt firstOnglet")[0].style.display="inline";
        localStorage.fanChecked=1;
        alert(localStorage.fanChecked);
    } else {

        // Checkbox is not checked..
        document.getElementsByClassName("fanArt firstOnglet")[0].style.display="none";
        localStorage.fanChecked=0;
    }
});
var boolFanOff2=0;
function switchO2(){
  if(boolFanOff2==0){
    document.getElementsByClassName("onglet2Fan")[0].style.display="inline";
    document.getElementsByClassName("onglet2Official")[0].style.display="none";
    document.getElementById("switchOnglet2").value="switch to official";
    boolFanOff2=1;
  }
  else if(boolFanOff2==1){
    document.getElementsByClassName("onglet2Fan")[0].style.display="none";
    document.getElementsByClassName("onglet2Official")[0].style.display="inline";
    document.getElementById("switchOnglet2").value="switch to fan art";
    boolFanOff2=0;
  }
}
var boolFanOff3=0;
function switchO3(){
  if(boolFanOff3==0){
    document.getElementsByClassName("onglet3Fan")[0].style.display="inline";
    document.getElementsByClassName("onglet3Official")[0].style.display="none";
    document.getElementById("switchOnglet3").value="switch to official";
    boolFanOff3=1;
  }
  else if(boolFanOff3==1){
    document.getElementsByClassName("onglet3Fan")[0].style.display="none";
    document.getElementsByClassName("onglet3Official")[0].style.display="inline";
    document.getElementById("switchOnglet3").value="switch to fan art";
    boolFanOff2=0;
  }
}
