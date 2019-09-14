//variabler som henter navn/passord
var username = document.getElementById('username');
var password = document.getElementById('password');


//Funskjon som gjemmer navn/passord
function storeinfo() {
    localStorage.setItem('username',username.value);
    localStorage.setItem('password',password.value);
    alert('Ny bruker er laget');
}

function checkLogin() {
    // Stored data from the registration form
    var storedName = localStorage.getItem('username');
    var storedPass = localStorage.getItem('password');

    // Entered data in the login form
    var enteredName = document.getElementById('enteredName');
    var enteredPass = document.getElementById('enteredPass');

    // Check if stored data from registration form is equal to entered data from login form
    if(enteredName.value == storedName && enteredPass.value == storedPass) {
        alert('You are logged in.');
        window.open('bear.html');
    }else {
        alert('Error. Wrong login.');

    }
}