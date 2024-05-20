// Function to show the login form
function showLoginForm() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

// Function to show the sign-up form
function showSignupForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

function logout() {
    window.location.href = "index.html";
}

// Check if the user has visited the page before
window.onload = function() {
    const isFirstVisit = localStorage.getItem('isFirstVisit');
    if (!isFirstVisit) {
        // User is visiting for the first time, show the sign-up form
        showSignupForm();
        localStorage.setItem('isFirstVisit', 'false');
    } else {
        // User has visited before, show the login form
        showLoginForm();
    }
};

document.getElementById('signup-form').addEventListener('submit', function(event) {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    // Regular expression for password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    // Check if email contains "@gmail.com"
    if (!email.includes("@gmail.com")) {
        alert('Email must be a Gmail address.');
        event.preventDefault();
    } else if (!passwordRegex.test(password)) {
        alert('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
        event.preventDefault();
    } else if (password !== confirmPassword) {
        alert('Passwords do not match.');
        event.preventDefault();
    } else {
        // Save email and password to local storage
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        alert('Sign-up successful! Please log in.');
        showLoginForm();
        event.preventDefault(); // Prevent the form from submitting
    }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    // Check if email contains "@gmail.com"
    if (!email.includes("@gmail.com")) {
        alert('Email must be a Gmail address.');
        event.preventDefault();
    } else if (email !== savedEmail || password !== savedPassword) {
        alert('Incorrect email or password.');
        event.preventDefault();
    } else {
        // Redirect to the new page on successful login
        event.preventDefault(); // Prevent the form from submitting
        window.location.href = "newpage.html";
    }
});
