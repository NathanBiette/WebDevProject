//json file for Contributions
var obj = {
   table: []
};
var contribut;
if(localStorage.testObject){
  contribut=JSON.parse(localStorage.testObject);
}
else{
  contribut=JSON.parse(contrib);
  console.log(contribut);
}


document.getElementById("buttonAddLocalFile").addEventListener("click", function(){

  contribut.push({"category": "poster","img":"images/flash.jpg", "page":"./HTML/StarWars8Page.html"});

  var new_json = JSON.stringify(contribut);
  localStorage.setItem('testObject', new_json);

  // Retrieve the object from storage
  var retrievedObject = localStorage.getItem('testObject');

  console.log('retrievedObject: ', JSON.parse(retrievedObject));
});

document.getElementById("submitAddMediaUrl").addEventListener("click", function(){

  contribut.push({"category": "poster","img":document.getElementById("boxUrl").value, "page":"./HTML/StarWars8Page.html"});

  var new_json = JSON.stringify(contribut);
  localStorage.setItem('testObject', new_json);

  // Retrieve the object from storage
  var retrievedObject = localStorage.getItem('testObject');

  console.log('retrievedObject: ', JSON.parse(retrievedObject));
});
