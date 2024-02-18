let firebaseConfig = {
    apiKey: "AIzaSyB0H85XT2RUuIruIjN6CMXA37x2_eUomHw",
    authDomain: "practice-auth-85a7f.firebaseapp.com",
    projectId: "practice-auth-85a7f",
    storageBucket: "practice-auth-85a7f.appspot.com",
    messagingSenderId: "284865730609",
    appId: "1:284865730609:web:680c559c21534c4fafdd10"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);




let signUp = () => {
    let email = document.getElementById("email");
    let pass = document.getElementById('password');

    firebase.auth().createUserWithEmailAndPassword(email.value, pass.value)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
        });
}


let google = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;
            var token = credential.accessToken;
            var user = result.user;
            console.log(user);
        }).catch((error) => {

            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorMessage);
            // ...
        });

}



