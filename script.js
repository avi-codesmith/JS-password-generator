"use strict";

const smallInput = document.getElementById("password");
const button = document.querySelector(".btn");
const copyBtn = document.querySelector("svg");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTWXYZ";
const lowerCase = "abcdefghijklmnopqrstwxyz";
const number = "0123456789";
const symbol = "!@#$%^&(){}[]?/|_+*-";

const ExtraChar = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {}

  console.log(password);
}

button.addEventListener("click", () => {
  createPassword();
});
