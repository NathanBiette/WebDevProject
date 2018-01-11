function initWebPage() { //all global var declarations and eventListeners...
  document.getElementById('connexionButton').addEventListener('click',connect);
}

initWebPage(); //init the page when the script is run

function connect(){
  var username = document.getElementById('username').value;
  document.getElementById('logInHeader').innerHTML = username;
}
