


/*for Contributions*/
//json file for Contributions

var obj = {
   table: []
};
var contribut;
if(localStorage.contribDone){
  contribut=JSON.parse(localStorage.contribDone);
}
else{
  contribut=JSON.parse(contrib);
  console.log(contribut);

  localStorage.setItem("contribDone",JSON.stringify(contribut));
}
