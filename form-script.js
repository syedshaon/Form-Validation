document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("zip").addEventListener("blur", validateZip);
document.getElementById("phone").addEventListener("blur", validatePhone);
document.getElementById("password").addEventListener("blur", validatePass);
document.getElementById("re-password").addEventListener("blur", validatePass);

function validateName(e) {
  const value = e.target.value;
  const re = /^[a-zA-Z]{2,10}$/;
  if (!re.test(value)) {
    this.classList.add("is-invalid");
  } else {
    if (this.classList.contains("is-invalid")) {
      this.classList.remove("is-invalid");
    }
  }
}

function validateEmail(e) {
  const value = e.target.value;
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!re.test(value)) {
    this.classList.add("is-invalid");
  } else {
    if (this.classList.contains("is-invalid")) {
      this.classList.remove("is-invalid");
    }
  }
}
function validateZip(e) {
  const value = e.target.value;
  const re = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
  if (!re.test(value)) {
    this.classList.add("is-invalid");
  } else {
    if (this.classList.contains("is-invalid")) {
      this.classList.remove("is-invalid");
    }
  }
}
function validatePhone(e) {
  const value = e.target.value;
  const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (!re.test(value)) {
    this.classList.add("is-invalid");
  } else {
    if (this.classList.contains("is-invalid")) {
      this.classList.remove("is-invalid");
    }
  }
}
let pass1 = "";
let pass2 = "";

function validatePass(e) {
  const pass1 = document.getElementById("password").value;
  const pass2 = document.getElementById("re-password").value;

  const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (!re.test(pass1)) {
    document.getElementById("password").classList.add("is-invalid");
  } else {
    if (document.getElementById("password").classList.contains("is-invalid")) {
      document.getElementById("password").classList.remove("is-invalid");
    }
  }

  if (!re.test(pass2)) {
    document.getElementById("re-password").classList.add("is-invalid");
  } else {
    if (
      document.getElementById("re-password").classList.contains("is-invalid")
    ) {
      document.getElementById("re-password").classList.remove("is-invalid");
    }
  }

  if (pass1 === pass2) {
    console.log(`matches ${pass1} , ${pass2}`);
    document.getElementById("matchError1").style.display = "none";
    document.getElementById("matchError2").style.display = "none";
  } else {
    console.log(`doesn't matche ${pass1} , ${pass2}`);
    document.getElementById("matchError1").style.display = "block";
    document.getElementById("matchError2").style.display = "block";
  }
}

/*
function validateRePass(e) {
  const pass2 = e.target.value;
   
  if (!re.test(pass2)) {
    this.classList.add("is-invalid");
  } else {
    if (this.classList.contains("is-invalid")) {
      this.classList.remove("is-invalid");
    }
  }
  if (pass1 === pass2) {
    console.log(`matches ${pass1} , ${pass2}`);
    document.getElementById("matchError1").style.display = "none";
    document.getElementById("matchError2").style.display = "none";
  } else {
    console.log(`doesn't matche ${pass1} , ${pass2}`);
    document.getElementById("matchError1").style.display = "block";
    document.getElementById("matchError2").style.display = "block";
  }
}

*/
