function validateForm() {
			// Get the login name and password input fields
			var loginName = document.getElementById("loginName");
			var password = document.getElementById("password");

			// Get the label element to show error messages
			var errorLabel = document.getElementById("errorLabel");

			// Validate the login name
			var loginNameChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_";
			if (loginName.value.length > 10 || !isOnlyCharsInString(loginName.value, loginNameChars)) {
				errorLabel.innerText = "Login name can only have alphanumeric characters and underscore, and must not exceed 10 characters.";
				errorLabel.style.color = "red";
				return false;
			}

			// Validate the password
			if (password.value.length < 6 || password.value.length > 10 || !hasDigit(password.value) || !hasUpperCase(password.value)) {
				errorLabel.innerText = "Password must have 6 to 10 characters containing at least one digit and one uppercase letter.";
				errorLabel.style.color = "red";
				return false;
			}

			// If both fields are valid, return true to submit the form
			return true;
		}

		function isOnlyCharsInString(str, validChars) {
			for (var i = 0; i < str.length; i++) {
				if (validChars.indexOf(str.charAt(i)) === -1) {
					return false;
				}
			}
			return true;
		}

		function hasDigit(str) {
			var digits = "0123456789";
			for (var i = 0; i < str.length; i++) {
				if (digits.indexOf(str.charAt(i)) !== -1) {
					return true;
				}
			}
			return false;
		}

		function hasUpperCase(str) {
			for (var i = 0; i < str.length; i++) {
				if (str.charAt(i) === str.charAt(i).toUpperCase()) {
					return true;
				}
			}
			return false;
		}
