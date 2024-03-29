document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Here, you can add your logic to validate the username and password
    // For a simple example, let's just log them to the console
    console.log("Username: " + username);
    console.log("Password: " + password);

    // You can redirect to another page or perform other actions after successful login
});
