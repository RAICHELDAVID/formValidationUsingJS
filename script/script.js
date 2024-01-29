function validateForm(event) {
	var firstName = document.getElementById('firstName');
	var firstNameError = document.getElementById("firstNameError");
	var firstNameTrim = firstName.value.trim();
	if (firstNameTrim === "") {
		firstNameError.textContent = "First name is required";
		firstName.focus();
		return false;
	} else if (!isValidFirstName(firstNameTrim)) {
		firstNameError.textContent = "Invalid first name";
		firstName.focus();
		return false;
	} else {
		firstNameError.textContent = "";
		
	}

	document.getElementById("firstName").addEventListener("input", function () {
		document.getElementById("firstNameError").textContent = "";
	});

	var lastName = document.getElementById('lastName');
	var lastNameError = document.getElementById("lastNameError");
	var lastNameTrim = lastName.value.trim();
	if (lastNameTrim === "") {
		lastNameError.textContent = "Last name is required";
		lastName.focus();
		return false;
	} else if (!isValidLastName(lastNameTrim)) {
		lastNameError.textContent = "Invalid last name";
		lastName.focus();
		return false;
	} else {
		lastNameError.textContent = "";
	}

	document.getElementById("lastName").addEventListener("input", function () {
		document.getElementById("lastNameError").textContent = "";
	});

	var address = document.getElementById("address").value.trim();
	var addressError = document.getElementById("addressError");
	if (address === "") {
		addressError.textContent = "Address is required";
		return false;

	} else if (!isValidAddressFormat(address)) {
		addressError.textContent = "Address cannot be numbers only";
		address.focus();
		return false;

	} else {
		addressError.textContent = "";
	}
	document.getElementById("address").addEventListener("input", function () {
		document.getElementById("addressError").textContent = "";
	});
	var mobileNumber = document.getElementById('mobileNumber').value.trim();
	var mobileNumberError = document.getElementById('mobileNumberError');

	if (mobileNumber === "") {
		mobileNumberError.textContent = "Mobile number is required";
		
		return false;
	} else if (!isValidMobile(mobileNumber)) {
		mobileNumberError.textContent = "invalid number";
		
		return false;
	} else {
		mobileNumberError.textContent = "";
	}

	document.getElementById('mobileNumber').addEventListener("input", function () {
		document.getElementById('mobileNumberError').textContent = "";
	});
	var emailID = document.getElementById('emailID').value.trim();
	var emailError = document.getElementById('emailError');
	if (emailID === "") {
		emailError.textContent = "email ID is required";
		return false;
	} else if  (!isValidEmail(emailID)) {
		emailError.textContent = "Invalid format";
		
		return false;
	} else {
		emailError.textContent = "";
	}
	document.getElementById('emailID').addEventListener("input", function () {
		document.getElementById('emailError').textContent = "";
	});
	var password = document.getElementById('password').value.trim();
	var passwordError = document.getElementById('passwordError');
	if (!isValidPassword(password)) {
		passwordError.textContent = "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character (@$!%*?&), and be at least 8 characters long";
		
		return false;
	} else {
		passwordError.textContent = "";
	}
	var confirmPassword = document.getElementById('confirmPassword').value.trim();
	var confirmPasswordError = document.getElementById('confirmPasswordError');
	if (confirmPassword !== password) {
		confirmPasswordError.textContent = "Passwords do not match";
		
		return false;

	} else {
		confirmPasswordError.textContent = "";
	}
return true;
	
}

function isValidFirstName(firstNameTrim) {
	return /^[A-Za-z]+$/.test(firstNameTrim);
}

function isValidLastName(lastNameTrim) {
	return /^[A-Za-z]+$/.test(lastNameTrim);
}

function isValidAddressFormat(address) {
	return /^[a-zA-Z0-9_.-]*$/.test(address);
}

function isValidMobile(mobileNumber) {
	return /^\d{10}$/.test(mobileNumber);
}

function isValidEmail(emailID) {
	return /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(emailID);
}

function isValidPassword(password) {
	return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}