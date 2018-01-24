


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
  for(var index=0; index<contribut.length;index++){
    console.log(contribut[index]);
  }
  localStorage.contribDone=JSON.stringify(contribut);
}

alert(localStorage.contribDone);
