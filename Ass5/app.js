function validateLoginForm() {
    var loginInput = document.getElementById('login');
    var passwordInput = document.getElementById('password');
    var loginLabel = document.getElementById('loginError');
    var passwordLabel = document.getElementById('passwordError');

    var loginRegex = /^[a-zA-Z0-9_]{1,10}$/;
    var passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{6,10}$/;

    var loginValid = loginRegex.test(loginInput.value);
    var passwordValid = passwordRegex.test(passwordInput.value);

    if (!loginValid) {
        loginLabel.textContent = "Login must contain alphanumeric characters and '_' and be less than 10 characters";
        loginLabel.style.color = "red";
    } else {
        loginLabel.textContent = "";
    }

    if (!passwordValid) {
        passwordLabel.textContent = "Password must be 6 to 10 characters containing at least one digit and one uppercase letter";
        passwordLabel.style.color = "red";
    } else {
        passwordLabel.textContent = "";
    }

    return loginValid && passwordValid;
}