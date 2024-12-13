document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you, " + name + "! We have received your message.");
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill out all fields.");
    }
});