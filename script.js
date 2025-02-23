"use strict";

const smallInput = document.getElementById("password");
const button = document.querySelector(".btn");
const copyBtn = document.querySelector("svg");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTWXYZ";
const lowerCase = "abcdefghijklmnopqrstwxyz";
const number = "0123456789";
const symbol = "!@#$%^&(){}[]?/|_+*-";

const extraChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  smallInput.disabled = false;
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += extraChars[Math.floor(Math.random() * extraChars.length)];
  }

  copyBtn.style.visibility = "visible";
  smallInput.value = password;
}

function copyText() {
  password.select();
  document.execCommand("copy");
  alert("Password coppied");
  location.reload();
}

button.addEventListener("click", () => {
  createPassword();
});

copyBtn.addEventListener("click", () => {
  copyText();
});
