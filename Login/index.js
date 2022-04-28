const form = document.forms["form__login"];
const forgotPass = document.forms["form__forgot_password"];
let passwordUser = "admin";
let usernameUser = "admin";
const checkI = window.document.querySelector(".btn");
const form1 = document.querySelector(".form-1");
const form2 = document.querySelector(".form-2");
const textSuccess = document.querySelector(".Text__Change__Pass--Success");
let checkSucess = false;
const functionCheck = () => {
  checkSucess
    ? (checkI.innerHTML = "Đăng nhập thành công")
    : (checkI.innerHTML = "Đăng nhập hệ thống");
};

function login() {
  form1.style.display = "block";
  checkI.style.display = "none";
  textSuccess.style.display = "none";
  form2.style.display = "none";
}

function changePass() {
  form2.style.display = "block";
  form1.style.display = "none";
}
if (form) {
  let flagName = 0;
  let flagPass = 0;
  (eField = form.querySelector(".username")),
    (eInput = eField.querySelector("input")),
    (pField = form.querySelector(".password")),
    (pInput = pField.querySelector("input"));

  console.log("forgotPass", forgotPass);

  form.onsubmit = (e) => {
    e.preventDefault();

    eInput.value == "" ? eField.classList.add("shake", "error") : checkName();
    pInput.value == "" ? pField.classList.add("shake", "error") : checkPass();

    setTimeout(() => {
      eField.classList.remove("shake");
      pField.classList.remove("shake");
    }, 500);

    eInput.onkeyup = () => {
      checkName();
    };
    pInput.onkeyup = () => {
      checkPass();
    };

    function checkName() {
      if (eInput.value == "") {
        eField.classList.add("error");
        eField.classList.remove("valid");
        flagName = 0;
      } else {
        eField.classList.remove("error");
        eField.classList.add("valid");
        flagName = 0;
      }
    }
    function checkPass() {
      if (pInput.value == "") {
        pField.classList.add("error");
        pField.classList.remove("valid");
        flagPass = 0;
      } else {
        pField.classList.remove("error");
        pField.classList.add("valid");
        flagPass = 0;
      }
    }
    debugger;
    if (eInput.value == usernameUser && pInput.value == passwordUser) {
      alert("Đăng nhập thành công");
      checkSucess = true;
      form1.style.display = "none";
      checkI.style.display = "block";
      functionCheck();
    } else {
      console.log("Loi");
      let errorTxt = pField.querySelector(".error-txt");
      console.log(errorTxt);
      errorTxt.innerText = "Tai khoan hoac mat khau khong dung";
      pField.classList.add("error");
    }
  };
}
if (forgotPass) {
  (oddPassField = forgotPass.querySelector(".oddPass")),
    (oddPassInput = oddPassField.querySelector("input")),
    (newPassField = forgotPass.querySelector(".newPass")),
    (newPassInput = newPassField.querySelector("input"));

  forgotPass.onsubmit = (e) => {
    e.preventDefault();

    oddPassInput.value == ""
      ? oddPassField.classList.add("shake", "error")
      : checkOddPass();
    newPassInput.value == ""
      ? newPassField.classList.add("shake", "error")
      : checkNewPass();

    setTimeout(() => {
      oddPassField.classList.remove("shake");
      newPassInput.classList.remove("shake");
    }, 500);

    oddPassInput.onkeyup = () => {
      checkOddPass();
    };
    newPassInput.onkeyup = () => {
      checkNewPass();
    };

    function checkOddPass() {
      if (oddPassInput.value == "") {
        oddPassField.classList.add("error");
        oddPassField.classList.remove("valid");
      } else {
        oddPassField.classList.remove("error");
        oddPassField.classList.add("valid");
      }
    }
    function checkNewPass() {
      if (newPassInput.value == "") {
        newPassField.classList.add("error");
        newPassField.classList.remove("valid");
      } else {
        newPassField.classList.remove("error");
        newPassField.classList.add("valid");
      }
    }
    debugger;
    if (oddPassInput.value == passwordUser && newPassInput.value != "") {
      alert("Bạn đã thay đổi mật khẩu thành công!");
      passwordUser = newPassInput.value;
      form1.style.display = "block";
      form2.style.display = "none";
      textSuccess.style.display = "block";
    } else {
      let errorTxtPass = oddPassField.querySelector(".error-txt");
      errorTxtPass.innerText = "Password không đúng";
      oddPassField.classList.add("error");
    }
  };
}
