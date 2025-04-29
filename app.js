
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    if (username.toLowerCase() === "katrina law" && password === "353522") {
        document.getElementById("login").classList.remove("visible");
        document.getElementById("dashboard").classList.add("visible");
    } else {
        document.getElementById("error").textContent = "Invalid credentials.";
    }
}

function sendMessage() {
    const message = document.getElementById("message").value.trim();
    let response = "";
    if (message.toLowerCase().includes("account frozen")) {
        response = "We apologize for the inconvenience. Your account has been frozen due to legal reasons.";
    } else {
        response = "Thank you for reaching out. Our support team will get back to you shortly.";
    }
    document.getElementById("response").textContent = response;
    document.getElementById("message").value = "";
}

document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
