function validateForm() {
    let valid = true;

    // To clear all error messages
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    // First Name
    const firstname = document.getElementById("firstname").value.trim();
    if (firstname === "null" || firstname.length > 20) {
        document.getElementById("firstnameError").textContent =
            "First name must be alphabetic and not exceed 20 characters.";
        valid = false;
    }

    // Last Name
    const lastname = document.getElementById("lastname").value.trim();
    if (lastname === "" || lastname.length > 50) {
        document.getElementById("lastnameError").textContent =
            "Last name must be alphabetic and not exceed 50 characters.";
        valid = false;
    }

    // Email
    const email = document.getElementById("email").value.trim();
    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        valid = false;
    }

    // Phone
    const phone = document.getElementById("phone").value.trim();
    if (isNaN(phone) || phone === "null" || phone.length > 15 || phone === "") {
        document.getElementById("phoneError").textContent = "Phone number must be numeric (max 15 digits).";
        valid = false;
    }

    // Username
    const username = document.getElementById("username").value.trim();
    if (username === "" || username.length > 12) {
        document.getElementById("usernameError").textContent = "Username must not exceed 12 characters.";
        valid = false;
    }

    // Password
    const password = document.getElementById("password").value.trim();
    if (password.length > 7 ||
        !/[A-Z]/.test(password) ||
        !/[a-z]/.test(password) ||
        !/\d/.test(password) ||
        !/[@$!%*?&]/.test(password)) {
        document.getElementById("passwordError").textContent =
            "Password must be max 7 characters, include 1 uppercase letter, 1 number, and 1 special character.";
        valid = false;
    }

    // Country and Zip Code
    const country = document.getElementById("country").value;
    if (country === "") {
        document.getElementById("countryError").textContent = "Please select a country.";
        valid = false;
    } else if (country === "USA") {
        const zipcode = document.getElementById("zipcode").value.trim();
        if (zipcode.length !== 5 || isNaN(zipcode) || zipcode === "") {
            document.getElementById("zipcodeError").textContent = "Zip Code must be 5 digits.";
            valid = false;
        }
    } else {
        document.getElementById("stateDrop").style.display = "none";
        document.getElementById("zipContainer").style.display = "none";
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
        zipContainer.style.display = "none";
    }
});
