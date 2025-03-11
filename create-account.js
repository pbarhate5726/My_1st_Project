// create-account.js

document.getElementById('createAccountForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    
    // Get the values entered by the user
    const username = document.getElementById('newUsername').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Basic validation for empty fields
    if (!username || !email || !password || !confirmPassword) {
        alert('All fields are required!');
        return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

     // Log the data (you can replace this with an actual API call to your server)
     console.log('Account Created!');
     console.log(`Username: ${username}`);
     console.log(`Email: ${email}`);
     console.log(`Password: ${password}`);

     // Optional: Reset the form after submission
    document.getElementById('createAccountForm').reset()

    // Simulate account creation (this is where you'd typically call an API or backend to create the user)
    alert('Account created successfully!');
    
    // Redirect to the login page (or wherever you want the user to go after account creation)
    window.location.href = "index.html";  // Redirect to login page
});
