function validateForm() {
    let valid = true;

    // Clear all error messages and reset field styles
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    document.querySelectorAll("input, select").forEach(el => el.style.border = "");

    // First Name
    const firstname = document.getElementById("firstname").value.trim();
    if (firstname === "" || firstname.length > 20 || /\d/.test(firstname)) {
        document.getElementById("firstnameError").textContent =
            "First name must be alphabetic and not exceed 20 characters.";
        document.getElementById("firstname").style.border = "2px solid red";
        valid = false;
    }

    // Last Name
    const lastname = document.getElementById("lastname").value.trim();
    if (lastname === "" || lastname.length > 50 || /\d/.test(lastname)) {
        document.getElementById("lastnameError").textContent =
            "Last name must be alphabetic and not exceed 50 characters.";
        document.getElementById("lastname").style.border = "2px solid red";
        valid = false;
    }

    // Address
    const address = document.getElementById("address").value.trim();
    if (address === "") {
        document.getElementById("addressError").textContent = "Address cannot be empty.";
        document.getElementById("address").style.border = "2px solid red";
        valid = false;
    }

    // Email
    const email = document.getElementById("email").value.trim();
    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        document.getElementById("email").style.border = "2px solid red";
        valid = false;
    }

    // Phone
    const phone = document.getElementById("phone").value.trim();
    if (isNaN(phone) || phone.length > 15 || phone === "") {
        document.getElementById("phoneError").textContent = "Phone number must be numeric and not exceed 15 digits.";
        document.getElementById("phone").style.border = "2px solid red";
        valid = false;
    }

    // Username
    const username = document.getElementById("username").value.trim();
    if (username === "" || username.length > 12) {
        document.getElementById("usernameError").textContent = "Username must not exceed 12 characters.";
        document.getElementById("username").style.border = "2px solid red";
        valid = false;
    }

    // Password
    const password = document.getElementById("password").value.trim();
    if (
        password.length > 7 ||
        !/[A-Z]/.test(password) ||
        !/[a-z]/.test(password) ||
        !/\d/.test(password) ||
        !/[@$!%*?&]/.test(password)
    ) {
        document.getElementById("passwordError").textContent =
            "Password must be max 7 characters, include 1 uppercase letter, 1 number, and 1 special character.";
        document.getElementById("password").style.border = "2px solid red";
        valid = false;
    }

    // Country and Zip Code
    const country = document.getElementById("country").value;
    const zipcode = document.getElementById("zipcode").value.trim();
    if (country === "") {
        document.getElementById("countryError").textContent = "Please select a country.";
        document.getElementById("country").style.border = "2px solid red";
        valid = false;
    } else if (country === "USA") {
        if (zipcode.length !== 5 || isNaN(zipcode)) {
            document.getElementById("zipcodeError").textContent = "Zip Code must be 5 digits.";
            document.getElementById("zipcode").style.border = "2px solid red";
            valid = false;
        }
    } else if (zipcode === "") {
        document.getElementById("zipcodeError").textContent = "Please enter a valid zip/postal code.";
        document.getElementById("zipcode").style.border = "2px solid red";
        valid = false;
    }

    return valid;
}

document.getElementById("country").addEventListener("change", function() {
    const stateDrop = document.getElementById("stateDrop");
    const zipContainer = document.getElementById("zipContainer");

    if (this.value === "USA") {
        stateDrop.style.display = "block";
        zipContainer.style.display = "block";
    } else {
        stateDrop.style.display = "none";
        zipContainer.style.display = "block";
    }
});
