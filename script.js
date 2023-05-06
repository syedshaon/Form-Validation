const Name = document.getElementById("name");
const Email = document.getElementById("email");
const Zip = document.getElementById("zip");
const Phone = document.getElementById("phone");
const Pass = document.getElementById("password");
const RePass = document.getElementById("re-password");

Name.addEventListener("blur", validateName);
Email.addEventListener("blur", validateEmail);
Zip.addEventListener("blur", validateZip);
Phone.addEventListener("blur", validatePhone);
Pass.addEventListener("blur", validatePass);
RePass.addEventListener("blur", validatePass);

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(validateName());
  // console.log(validateEmail());
  // console.log(validateZip());
  // console.log(validatePhone());
  // console.log(validatePass());

  if (validateName() && validateEmail() && validateZip() && validatePhone() && validatePass()) {
    document.getElementById("form").innerHTML = `<h1>Your inputs are valid. Thanks for your submission!</h1>`;
  } else {
    alert("Your inputs are invalid. Please submit again with correct info.");
  }
});

function validateName() {
  const value = Name.value;
  const re = /^[a-zA-Z\s]{2,20}$/;
  if (!re.test(value)) {
    if (!Name.classList.contains("is-invalid")) {
      Name.classList.add("is-invalid");
    }
    if (Name.classList.contains("is-valid")) {
      Name.classList.remove("is-valid");
    }

    return false;
  } else {
    if (Name.classList.contains("is-invalid")) {
      Name.classList.remove("is-invalid");
    }
    if (!Name.classList.contains("is-valid")) {
      Name.classList.add("is-valid");
    }
    return true;
  }
}

function validateEmail() {
  const value = Email.value;
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!re.test(value)) {
    if (!Email.classList.contains("is-invalid")) {
      Email.classList.add("is-invalid");
    }
    if (Email.classList.contains("is-valid")) {
      Email.classList.remove("is-valid");
    }
    return false;
  } else {
    if (Email.classList.contains("is-invalid")) {
      Email.classList.remove("is-invalid");
    }
    if (!Email.classList.contains("is-valid")) {
      Email.classList.add("is-valid");
    }

    return true;
  }
}
function validateZip() {
  const value = Zip.value;
  const re = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
  if (!re.test(value)) {
    if (!Zip.classList.contains("is-invalid")) {
      Zip.classList.add("is-invalid");
    }
    if (Zip.classList.contains("is-valid")) {
      Zip.classList.remove("is-valid");
    }
    return false;
  } else {
    if (Zip.classList.contains("is-invalid")) {
      Zip.classList.remove("is-invalid");
    }
    if (!Zip.classList.contains("is-valid")) {
      Zip.classList.add("is-valid");
    }
    return true;
  }
}
function validatePhone() {
  const value = Phone.value;
  const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (!re.test(value)) {
    if (!Phone.classList.contains("is-invalid")) {
      Phone.classList.add("is-invalid");
    }
    if (Phone.classList.contains("is-valid")) {
      Phone.classList.remove("is-valid");
    }

    return false;
  } else {
    if (Phone.classList.contains("is-invalid")) {
      Phone.classList.remove("is-invalid");
    }
    if (!Phone.classList.contains("is-valid")) {
      Phone.classList.add("is-valid");
    }
    return true;
  }
}
let pass1 = "";
let pass2 = "";

function validatePass() {
  const pass1 = Pass.value;
  const pass2 = RePass.value;

  const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (!re.test(pass1)) {
    Pass.classList.add("is-invalid");
  } else {
    if (Pass.classList.contains("is-invalid")) {
      Pass.classList.remove("is-invalid");
    }
  }

  if (!re.test(pass2)) {
    RePass.classList.add("is-invalid");
  } else {
    if (RePass.classList.contains("is-invalid")) {
      RePass.classList.remove("is-invalid");
    }
  }

  if (pass1 === pass2) {
    // console.log(`matches ${pass1} , ${pass2}`);
    document.getElementById("matchError1").style.display = "none";
    document.getElementById("matchError2").style.display = "none";
  } else {
    // console.log(`doesn't matche ${pass1} , ${pass2}`);
    document.getElementById("matchError1").style.display = "block";
    document.getElementById("matchError2").style.display = "block";
  }

  if (re.test(pass1) && re.test(pass2) && pass1 === pass2) {
    return true;
  } else {
    return false;
  }
}

/*
function validateRePass(e) {
  const pass2 = e.target.value;
   
  if (!re.test(pass2)) {
    if(!this.classList.contains("is-invalid")){
      this.classList.add("is-invalid");
    }
    if(this.classList.contains("is-valid")){
      this.classList.remove("is-valid");
    }
  } else {
    if (this.classList.contains("is-invalid")) {
      this.classList.remove("is-invalid");
    }
    if(!this.classList.contains("is-valid")){
      this.classList.add("is-valid");
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
