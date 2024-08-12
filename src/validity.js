function validation() {
  const form = document.querySelector("form");

  function validateEmail() {
    if (form.elements["email"].validity.valueMissing) {
      document.querySelector("#emailErr").textContent = "Email is required.";
    } else if (form.elements["email"].validity.typeMismatch) {
      document.querySelector("#emailErr").textContent =
        "Please enter a valid email address.";
    } else {
      document.querySelector("#emailErr").textContent = "";
    }
  }

  function validateCountry() {
    if (form.elements["country"].validity.valueMissing) {
      document.querySelector("#countryErr").textContent =
        "Country is required.";
    } else {
      document.querySelector("#countryErr").textContent = "";
    }
  }

  function validatePin() {
    console.log(form.elements["pin"].validity.patternMismatch);
    if (form.elements["pin"].validity.patternMismatch) {
      document.querySelector("#pinErr").textContent =
        "Enter a valid 6 digit Pin code.";
    } else if (form.elements["pin"].validity.valueMissing) {
      document.querySelector("#pinErr").textContent = "Pin code is required.";
    } else {
      document.querySelector("#pinErr").textContent = "";
    }
  }

  function validatePassword() {
    console.log(form.elements["pwd"].validity.patternMismatch);
    if (form.elements["pwd"].validity.patternMismatch) {
      document.querySelector("#pwdErr").textContent =
        "Must contain at least one number, one uppercase and lowercase letter, and at least 8 characters.";
    } else if (form.elements["pwd"].validity.valueMissing) {
      document.querySelector("#pwdErr").textContent = "Password is required.";
    } else if (
      form.elements["pwd"].value !== form.elements["pwdconfirm"].value
    ) {
      if (!form.elements["pwd"].validity.patternMismatch) {
        document.querySelector("#pwdErr").textContent = "";
      }
      document.querySelector("#pwdConfirmErr").textContent =
        "Passwords don't match.";
    } else {
      document.querySelector("#pwdErr").textContent = "";
    }
  }

  function validatePasswordConfirm() {
    if (form.elements["pwdconfirm"].validity.valueMissing) {
      document.querySelector("#pwdConfirmErr").textContent =
        "Please type the password again.";
    } else if (
      form.elements["pwd"].value !== form.elements["pwdconfirm"].value
    ) {
      document.querySelector("#pwdConfirmErr").textContent =
        "Passwords don't match.";
    } else {
      document.querySelector("#pwdConfirmErr").textContent = "";
    }
  }

  function validateAllFields() {
    validateEmail();
    validateCountry();
    validatePin();
    validatePassword();
    validatePasswordConfirm();
  }

  form.elements["email"].addEventListener("input", validateEmail);
  form.elements["country"].addEventListener("input", validateCountry);
  form.elements["pin"].addEventListener("input", validatePin);
  form.elements["pwd"].addEventListener("input", validatePassword);
  form.elements["pwdconfirm"].addEventListener("input", validatePasswordConfirm);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateAllFields();
    document.querySelector("#message").textContent = "";
    if (form.checkValidity()) {
      document.querySelector("#message").textContent = "Form submitted";
    }
  });
}

export default validation;
