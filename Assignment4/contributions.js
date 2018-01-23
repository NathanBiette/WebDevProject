/*//json file for Contributions
var obj = {
   table: []
};

var contribut=JSON.parse(contrib);

console.log(contribut);

document.getElementById("addPoster").addEventListener("click", function(){
  contribut.push({"category": "poster","img":"test.jpg", "page":"lamienne.html"});

  var new_json = JSON.stringify(myData);
  localStorage.setItem('testObject', new_json);

  // Retrieve the object from storage
  var retrievedObject = localStorage.getItem('testObject');

  console.log('retrievedObject: ', JSON.parse(retrievedObject));
});
