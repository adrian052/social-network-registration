function validateForm(event) {
    event.preventDefault();

    // Basic password matching validation
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Additional validation logic can be added here

    alert("Registration successful!");
    // In a real-world scenario, you would likely send the form data to a server for processing
}
