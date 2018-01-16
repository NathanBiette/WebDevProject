document.getElementById('connexionButton').addEventListener('click',connect);
document.getElementById('createAccountButton').addEventListener('click',createAccount);

if (localStorage.connected == "true") {
  var logInContainer = document.getElementById('logInContainer');
  var userActionsContainer = document.getElementById('userActionsContainer');
  logInContainer.style.display = 'none';
  userActionsContainer.style.display = 'block';
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
    document.getElementById('logInHeader').innerHTML = usernameValue;
    localStorage.connected = "true";
    /* print access profile, disconnect*/
    var logInContainer = document.getElementById('logInContainer');
    var userActionsContainer = document.getElementById('userActionsContainer');
    logInContainer.style.display = 'none';
    userActionsContainer.style.display = 'block';
    var disconnect = document.getElementById('disconnectButton');
    disconnect.addEventListener('click', function() {
      localStorage.connected = "false";
      logInContainer.style.display = 'block';
      userActionsContainer.style.display = 'none';
      document.getElementById('logInHeader').innerHTML = 'Log in';
    })
  } else {
    alert('Username or password is incorrect.');
  }
}

function createAccount() {
  var logInContainer = document.getElementById('logInContainer');
  var createAccountContainer = document.getElementById('createAccountContainer');
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
