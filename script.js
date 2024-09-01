// Select elements
let signup = document.querySelector('#signup');
let signin = document.querySelector('#signin');
let body = document.querySelector('body');

// Add event listeners for toggling between signup and signin forms
signup.onclick = function(){
    body.classList.add('signup');
}
signin.onclick = function(){
    body.classList.remove('signup');
}

// Add event listeners for form submission
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const signinForm = document.getElementById('signinForm');

    // Handle the registration form submission
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Add your validation or server submission logic here
        
        // Redirect to index.html after registration
        window.location.href = 'index.html';
    });

    // Handle the login form submission
    signinForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Add your validation or server submission logic here
        
        // Redirect to index.html after login
        window.location.href = 'main.html';
    });
});
