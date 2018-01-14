
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
  document.getElementById("ageOutput").value=document.getElementById("age").value + " years old";
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

function showForm(){
  if(document.getElementById("infosPerso").style.display=="none"){
    document.getElementById("infosPerso").style.display="block";
    document.getElementById("showHideInfosPerso").value="Hide";
  }
  else {
    document.getElementById("infosPerso").style.display="none";
    document.getElementById("showHideInfosPerso").value="Modify my personal information";
  }


}
