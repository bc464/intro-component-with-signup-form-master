let btn = document.querySelector('#btn');
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email1 = document.querySelector("#email");
let password1 = document.querySelector("#password")
let form = document.querySelector("#signup");
let inputField = document.querySelector(".input-field");
let isRequired = value => value === "" ? false : true;
let isEmailValid = (email) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
};
const isPasswordSecure = (password) => {
	const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
	return re.test(password);
};
const showError = (input, message) => {
	const formField = input.parentElement;
	let icon, i;
	icon = document.querySelectorAll('i');
		for ( i = 0; i < icon.length; i++) {
		icon[i].style.display = "block";
		}
	formField.classList.remove('success');
	formField.classList.add('error');
	const error = formField.querySelector('small');
	error.textContent = message;
	};
const showSuccess = (input) => {
	const formField = input.parentElement;
	let icon, i;
	icon = document.querySelectorAll('i');
		for ( i = 0; i < icon.length; i++) {
		icon[i].style.display = "none";
		}
	formField.classList.remove('error');
	formField.classList.add('success');
	const error = formField.querySelector('small');
	error.textContent = '';
	};
const checkFirstName = () => {
	let valid = false;
	const firstname = firstName.value.trim();
		if (!isRequired(firstname)) {
		showError(firstName, 'First Name cannot be empty.');
		} else {
		showSuccess(firstName);
		valid = true;
		}
		return valid;
	}
const checkLastName = () => {
	let valid = false;
	const lastname = lastName.value.trim();
		if (!isRequired(lastname)) {
		showError(lastName, 'Last Name cannot be empty.');
		} else {
		showSuccess(lastName);
		valid = true;
		}
		return valid;
	}
const checkEmail = () => {
	let valid = false;
	const email = email1.value.trim();
		if(!isRequired(email)) {
		showError(email1, 'Email cannot be blank');
		} else if (!isEmailValid(email)) {
		showError(email1, 'Looks like this is not an email.')
		} else {
		showSuccess(email1);
		valid = true;
		}
		return valid;
	}
const checkPassword = () => {
	let valid = false;
	const password = password1.value.trim();
		if (!isRequired(password)) {
		showError(password1, 'Password cannot be empty.');
		} else if (!isPasswordSecure(password)) {
		showError(password1, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
		} else {
		showSuccess(password1);
		valid = true;
		}
		return valid;
	}
btn.addEventListener('click', function (e) {
	e.preventDefault();
	let isFirstNameValid = checkFirstName(),
		isLastNameValid = checkLastName(),
		isEmailValid = checkEmail(),
		isPasswordValid = checkPassword();
	let isFormValid = isFirstNameValid && 
		isLastNameValid && 
		isEmailValid && 
		isPasswordValid;
	if (isFormValid) {
		}
	});