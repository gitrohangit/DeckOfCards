firebase.auth().onAuthStateChanged(function (user) {
    var user = firebase.auth().currentUser;
    if (user!=null) {
        // User is signed in.

        // document.getElementById("login_div").style.display = "none";

        window.location = "../DeckOfCards/index.html";

    } else {
        // No user is signed in.

        document.getElementById("login_div").style.display = "block";

    }
});

function toggleLogin() {
    document.getElementById("register_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
}

function toggleRegister() {
    document.getElementById("register_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
}

function login() {

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);

        // ...
    });

}

function register() {

    var userEmail = document.getElementById("register_email").value;
    var userPass = document.getElementById("register_password").value;

    // Register a new user
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
        .catch(function (err) {
            // Handle errors

            var errorCode = err.code;
            var errorMessage = err.message;

            window.alert("Error : " + errorMessage);
        });
        
        window.alert("You have successfully Registered. Your game will start now!!")
}

function logout() {
    firebase.auth().signOut();
    window.location = "../login.html";
}
