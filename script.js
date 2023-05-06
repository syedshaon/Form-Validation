const form = document.getElementById("form");
const Name = document.getElementById("name");
const NameError = document.querySelector("#name + small.invalid-feedback");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + small.invalid-feedback");
const Zip = document.getElementById("zip");
const ZipError = document.querySelector("#zip + small.invalid-feedback");
const Phone = document.getElementById("phone");
const PhoneError = document.querySelector("#phone + small.invalid-feedback");
const Pass = document.getElementById("password");
const PassError = document.querySelector("#password + small.invalid-feedback");
const RePass = document.getElementById("re-password");
const RePassError = document.querySelector("#re-password + small.invalid-feedback");

// Name.addEventListener("blur", validateName);
// Email.addEventListener("blur", validateEmail);
// Zip.addEventListener("blur", validateZip);
// Phone.addEventListener("blur", validatePhone);
// Pass.addEventListener("blur", validatePass);
// RePass.addEventListener("blur", validatePass);

email.addEventListener("input", function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.innerHTML = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showEmailError();
  }
});

function showEmailError() {
  if (email.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address
    // display the following error message.
    emailError.textContent = "Entered value needs to be an e-mail address.";
  } else if (email.validity.tooShort) {
    // If the data is too short
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Set the styling appropriately
  emailError.className = "error active form-text invalid-feedback";
}

/* //////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////// */

Name.addEventListener("input", function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (Name.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    NameError.innerHTML = ""; // Reset the content of the message
    NameError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showDateError();
  }
});

function showDateError() {
  if (Name.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    NameError.textContent = "You need to enter your full name.";
  } else if (Name.validity.typeMismatch) {
    // If the field doesn't contain an Name address
    // display the following error message.
    NameError.textContent = "Entered value needs to be text only.";
  } else if (Name.validity.tooShort) {
    // If the data is too short
    // display the following error message.
    NameError.textContent = `Name should be at least ${Name.minLength} characters; you entered ${Name.value.length}.`;
  }

  // Set the styling appropriately
  NameError.className = "error active form-text invalid-feedback";
}

/* //////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////// */

Zip.addEventListener("input", function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (Zip.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    ZipError.innerHTML = ""; // Reset the content of the message
    ZipError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showZipError();
  }
});

function showZipError() {
  if (Zip.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    ZipError.textContent = "You need to enter your Zip Code.";
  } else if (Zip.validity.typeMismatch) {
    // If the field doesn't contain an Zip address
    // display the following error message.
    ZipError.textContent = "Entered value needs to be text or number only.";
  } else if (Zip.validity.tooShort) {
    // If the data is too short
    // display the following error message.
    ZipError.textContent = `Zip code should be at least ${Zip.minLength} characters; you entered ${Zip.value.length}.`;
  }

  // Set the styling appropriately
  ZipError.className = "error active form-text invalid-feedback";
}

/* //////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////// */

Phone.addEventListener("input", function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (Phone.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    PhoneError.innerHTML = ""; // Reset the content of the message
    PhoneError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showPhoneError();
  }
});

function showPhoneError() {
  if (Phone.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    PhoneError.textContent = "You need to enter your Phone Number.";
  } else if (Phone.validity.typeMismatch) {
    // If the field doesn't contain an Phone address
    // display the following error message.
    PhoneError.textContent = "Entered value needs to be a valid phone number.";
  } else if (Phone.validity.tooShort) {
    // If the data is too short
    // display the following error message.
    PhoneError.textContent = `Phone code should be at least ${Phone.minLength} characters; you entered ${Phone.value.length}.`;
  }

  // Set the styling appropriately
  PhoneError.className = "error active form-text invalid-feedback";
}

/* //////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////// */

Pass.addEventListener("input", function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (Pass.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    PassError.innerHTML = ""; // Reset the content of the message
    PassError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showPassError();
  }
});

function showPassError() {
  if (Pass.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    PassError.textContent = "You need to enter a strong password.";
  } else if (Pass.validity.typeMismatch) {
    // If the field doesn't contain an Pass address
    // display the following error message.
    PassError.textContent = "Paaword must be 8 character long, with at least a symbol, upper and lower case letters and a number.";
  } else if (Pass.validity.tooShort) {
    // If the data is too short
    // display the following error message.
    PassError.textContent = `Pass code should be at least ${Pass.minLength} characters; you entered ${Pass.value.length}.`;
  }

  // Set the styling appropriately
  PassError.className = "error active form-text invalid-feedback";
}

/* //////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////// */

RePass.addEventListener("input", function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (RePass.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    RePassError.innerHTML = ""; // Reset the content of the message
    RePassError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showRePassError();
  }
});

function showRePassError() {
  if (RePass.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    RePassError.textContent = "You need to enter a strong password.";
  } else if (RePass.validity.typeMismatch) {
    // If the field doesn't contain an RePass address
    // display the following error message.
    RePassError.textContent = "Password must be 8 character long, with at least a symbol, upper and lower case letters and a number.";
  } else if (RePass.validity.tooShort) {
    // If the data is too short
    // display the following error message.
    RePassError.textContent = `Password  should be at least ${RePass.minLength} characters; you entered ${RePass.value.length}.`;
  }

  // Set the styling appropriately
  RePassError.className = "error active form-text invalid-feedback";
}

/* //////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////// */

form.addEventListener("submit", function (event) {
  // if the form contains valid data, we let it submit

  if (!Pass.validity.valid) {
    // If it isn't, we display an appropriate error message
    showPassError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }

  if (!RePass.validity.valid) {
    // If it isn't, we display an appropriate error message
    showRePassError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }

  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showEmailError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }

  if (!Name.validity.valid) {
    // If it isn't, we display an appropriate error message
    showDateError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }

  if (!Zip.validity.valid) {
    // If it isn't, we display an appropriate error message
    showZipError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }

  if (!Phone.validity.valid) {
    // If it isn't, we display an appropriate error message
    showPhoneError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }

  if (RePass.validity.valid && RePass.validity.valid && email.validity.valid && Name.validity.valid && Zip.validity.valid && Phone.validity.valid) {
    event.preventDefault();

    form.innerHTML = "<h2>Thanks for submitting your details.</h2>";
  }
});
