const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function validatePasswords() {
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const error = document.getElementById("error");

    if (newPassword !== confirmPassword) {
        error.textContent = "Passwords do not match!";
        return false; // Prevent form submission
    }

    error.textContent = ""; // Clear error message
    alert("Passwords match!");
    return true; // Allow form submission
};