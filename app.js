// app.js

// Listen for the form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    
    // Get the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Perform basic validation (check if fields are empty)
    if (!username || !password) {
        alert('Both fields are required!');
        return;
    }

    // Simulate authentication (hardcoded for demo purposes)
    const validUsername = "user123";
    const validPassword = "password123";

    if (username === validUsername && password === validPassword) {
        alert('Login Successful!');
        window.location.href = "dashboard.html"; // Redirect to a dashboard page (or wherever)
    } else {
        alert('Invalid credentials, please try again.');
    }
});
