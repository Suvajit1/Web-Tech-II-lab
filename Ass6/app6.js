// Function to redirect to logout page
function redirectToLogout() {
    window.location.href = "./logout.html";
}

// Initialize timer
var inactivityTimer;

// Function to reset the inactivity timer
function resetTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(redirectToLogout, 10000); // 10 seconds
}

// Event listeners to detect user activity
document.addEventListener("mousemove", resetTimer);
document.addEventListener("keypress", resetTimer);

// Initialize timer on page load
window.onload = function() {
    resetTimer();
};
