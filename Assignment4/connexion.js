var connexionButton = document.getElementById('connexionButton')
connexionButton.addEventListener('click',connect);

var createAccountButton = document.getElementById('createAccountButton');
createAccountButton.addEventListener('click',createAccount);

var disconnectButton = document.getElementById('disconnectButton');
disconnectButton.addEventListener('click',disconnect);

var logInContainer = document.getElementById('connexionContainer');
var userActionsContainer = document.getElementById('userActionsContainer');
var createAccountContainer = document.getElementById('createAccountContainer');

var logInHeader = document.getElementById('logInHeader')


if (localStorage.connected == "true") { //if connected, display the rights content
  logInContainer.style.display = 'none';
  createAccountContainer.style.display = 'none';
  userActionsContainer.style.display = 'block';
  $("#logInOrUsername").html(localStorage.username);
}


function connect(){
  if (localStorage.username && localStorage.password) {
    var usernameValue = document.getElementById('username').value;
    var passwordValue = document.getElementById('password').value;
  } else {
    alert('No account has been created yet. Create a new account to begin.');
    return;
  }
  if (localStorage.username == usernameValue && localStorage.password == passwordValue) {
    $("#logInOrUsername").html(localStorage.username);
    localStorage.connected = "true";
    /* print access profile, disconnect*/
    logInContainer.style.display = 'none';
    userActionsContainer.style.display = 'block';
  } else {
    alert('Username or password is incorrect.');
  }
}

function disconnect() {
  localStorage.connected = "false";
  logInContainer.style.display = 'block';
  userActionsContainer.style.display = 'none';
  $("#logInOrUsername").html("Log in");

  if (document.title == "Hyper Profile") {
    window.location.href = "HyperHomePage.html";
  }
}

function createAccount() {
  logInContainer.style.display = 'none';
  createAccountContainer.style.display = 'block';
  document.getElementById('cancelCreationAccountButton').addEventListener('click', function() {
    logInContainer.style.display = 'block';
    createAccountContainer.style.display = 'none';
  })
  document.getElementById('validateAccountButton').addEventListener('click', function() {
    var usernameToCreate = document.getElementById('usernameToCreate');
    var password1 = document.getElementById('password1');
    var password2 = document.getElementById('password2');
    var email = document.getElementById('email');
    if (usernameToCreate.value && password1.value && email.value) {
      if (password1.value == password2.value) {
        // account can be validated
        localStorage.username = usernameToCreate.value;
        localStorage.password = password1.value;
        localStorage.email = email.value;

        logInContainer.style.display = 'block';
        createAccountContainer.style.display = 'none';
      } else {
        alert('Passwords given are not identical.')
      }
    } else {
      alert('Please fill the fields.');
    }
  })
}
