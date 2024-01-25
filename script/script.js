
function validateForm(event) {
	var firstName = document.getElementById('firstName');
    	var firstNameError = document.getElementById("firstNameError");
    	var firstNameTrim = firstName.value.trim();
    	if (firstNameTrim === "") {
        	firstNameError.textContent = "First name is required";
        	firstName.focus();
        	event.preventDefault();
    	} 
	else if (!isValidFirstName(firstNameTrim)) 
	{
        	firstNameError.textContent = "Invalid first name";
        	firstName.focus();
        	event.preventDefault();
    	} 
	else {
        	firstNameError.textContent = "";
    	}

    	document.getElementById("firstName").addEventListener("input", function() {
        document.getElementById("firstNameError").textContent = "";
    	});

    	var lastName = document.getElementById('lastName');
   	var lastNameError = document.getElementById("lastNameError");
    	var lastNameTrim = lastName.value.trim();
    	if (lastNameTrim === "") {
        	lastNameError.textContent = "Last name is required";
        	lastName.focus();
        	event.preventDefault();
    	} 
	else if (!isValidLastName(lastNameTrim)) {
        	lastNameError.textContent = "Invalid last name";
        	lastName.focus();
        	event.preventDefault();
    	} 
	else {
        	lastNameError.textContent = "";
    	}

    	document.getElementById("lastName").addEventListener("input", function() {
        document.getElementById("lastNameError").textContent = "";
    	});

	var address = document.getElementById("address").value.trim();
  	var addressError = document.getElementById("addressError");
	if (address === "") {
        	addressError.textContent = "Address is required";

    	} 
	else if (!isValidAddressFormat(address)) 
	{
        	addressError.textContent = "Address cannot be numbers only";
        	address.focus();
        	event.preventDefault();

    	}
	else {
        	addressError.textContent = "";
    	}
    	document.getElementById("address").addEventListener("input", function() {
        document.getElementById("addressError").textContent = "";
    	});
	var mobileNumber=document.getElementById('mobileNumber').value.trim();
	var mobileNumberError=document.getElementById('mobileNumberError');

	if(mobileNumber===""){
		mobileNumberError.textContent="Mobile number is required";
	}
	else if(!isValidMobile(mobileNumber))
	{
		mobileNumberError.textContent="enter numbers only";
		mobileNumber.focus();
        	event.preventDefault();
	}
	else if(mobileNumber.length!=10){
		mobileNumberError.textContent="Invalid mobile number";
	}
	else{
		mobileNumberError.textContent="";
	}
	document.getElementById('mobileNumber').addEventListener("input",function() {
	document.getElementById('mobileNumberError').textContent = "";
	});
	var emailID=document.getElementById('emailID').value.trim();
	var emailError=document.getElementById('emailError');
	if(emailID===""){
		emailError.textContent="email ID is required";
	}
	else if(!isValidEmail(emailID))
	{
		emailError.textContent="Invalid format";
		emailID.focus();
        	event.preventDefault();
	}
	else{
		emailError.textContent="";
	}
	document.getElementById('emailID').addEventListener("input",function() {
	document.getElementById('emailError').textContent = "";
	});
	var password=document.getElementById('emailID').value.trim();
	var emailError=document.getElementById('emailError');
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
	return /^\d+$/.test(mobileNumber);
}

function isValidEmail(emailID){
	return  /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(emailID);
}
function isValidPassword(password){
	return /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
}