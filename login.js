// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyDHNWOW1nE29kaBkERIGRUjovvTWUiqHl8",
    authDomain: "simplified-netflix-clone.firebaseapp.com",
    projectId: "simplified-netflix-clone",
    storageBucket: "simplified-netflix-clone.appspot.com",
    messagingSenderId: "175986044740",
    appId: "1:175986044740:web:c033ad179546b9c378f111",
    measurementId: "G-J5T2ZT47R1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get the authentication instance

// Wait for the DOM to load before accessing elements
document.addEventListener('DOMContentLoaded', () => {
    // Handle login form submission
    document.getElementById('login-form').addEventListener('submit', function (e) {
        e.preventDefault();

        // Get user input
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Firebase Authentication sign-in with email and password
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Successful login
                window.location.href = 'index.html'; // Redirect to the main page
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                document.getElementById('error-message').innerText = errorMessage; // Display error to the user
            });
    });
});