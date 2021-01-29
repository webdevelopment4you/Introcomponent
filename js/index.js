let image = document.getElementById("backgroundImage");

let firstNameError = document.getElementById("firstNameError");
let lastNameError = document.getElementById("lastNameError");
let emailErrorOne = document.getElementById("emailErrorOne");
let emailErrorTwo = document.getElementById("emailErrorTwo");
let passwordError = document.getElementById("passwordError");

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");

let inputs = document.getElementsByTagName("input");
let errors = [];

function clearErrors() {
    firstNameError.style.display = "none";
    lastNameError.style.display = "none";
    emailErrorOne.style.display = "none";
    emailErrorTwo.style.display = "none";
    passwordError.style.display = "none";
    firstName.style.borderColor = "#000";
    lastName.style.borderColor = "#000";
    email.style.borderColor = "#000";
    password.style.borderColor = "#000";

}

function changeBackground() {
    if (document.body.offsetWidth < 768) {
        image.src = "images/bg-intro-mobile.png";
        console.log(image.src);
    }
    else {
        image.src = "images/bg-intro-desktop.png";
    }
}

function clearValues() {
    inputs.value = "";
}

function validateMyForm() {
    console.log("Form is being submitted");
    clearErrors();
    if (firstName.value == "") {
        errors.push("First Name cannot be empty");
        firstNameError.style.display = "block";
        firstName.style.borderColor = "red";

    }
    if (lastName.value == "") {
        errors.push("Last Name cannot be empty");
        lastNameError.style.display = "block";
        lastName.style.borderColor = "red";

    }
    if (email.value == "") {
        errors.push("Email cannot be empty");
        emailErrorOne.style.display = "block";
        email.style.borderColor = "red";
    }
    if (password.value == "") {
        errors.push("Password can not be empty");
        passwordError.style.display = "block";
        password.style.borderColor = "red";
    }
    if (errors.length != 0) {
        console.log("error occured");
        console.log(errors);
        errors = [];
        console.log(errors);
        return false;
    }
    else {
        clearValues();
        console.log(errors);
        return true;
    }
}

clearErrors();
changeBackground();


