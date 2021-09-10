"use strict";

const myForm = document.querySelector("#form");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

const error1 = document.querySelector(".error1");
const error2 = document.querySelector(".error2");
const error3 = document.querySelector(".error3");
const error4 = document.querySelector(".error4");

const tick1 = document.querySelector(".tick1");
const tick2 = document.querySelector(".tick2");
const tick3 = document.querySelector(".tick3");
const tick4 = document.querySelector(".tick4");

myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // For First Name Validation
  const showFirstName = document.querySelector(".show-firstName");

  if (firstName.value === "") {
    firstName.style.borderColor = "red";
    showFirstName.classList.add("show-element");
    firstName.placeholder = "";
    error1.classList.add("show");

    setTimeout(function () {
      showFirstName.classList.remove("show-element");
      firstName.placeholder = "First Name";
      firstName.style.borderColor = "";
      error1.classList.remove("show");
    }, 3000);
  } else {
    firstName.style.border = ` 1px solid green`;
    tick1.classList.add("show-icon");
  }

  // For Last Name validation
  const showLastName = document.querySelector(".show-lastName");

  if (lastName.value === "") {
    lastName.style.borderColor = "red";
    showLastName.classList.add("show-element");
    lastName.placeholder = "";
    error2.classList.add("show");

    setTimeout(function () {
      lastName.style.borderColor = "";
      showLastName.classList.remove("show-element");
      lastName.placeholder = "Last name";
      error2.classList.remove("show");
    }, 3000);
  } else {
    lastName.style.border = ` 1px solid green`;
    tick2.classList.add("show-icon");
  }

  // For email validation
  const showEmail = document.querySelector(".show-email");

  if (email.value.match(pattern)) {
    tick3.classList.add("show-icon");
    email.style.borderColor = "green";
    showEmail.style.opacity = "0";
  } else {
    email.style.borderColor = "red";
    showEmail.classList.add("show-element");
    email.placeholder = "";
    error3.classList.add("show");

    setTimeout(function () {
      email.style.borderColor = "";
      showEmail.classList.remove("show-element");
      email.value = "";
      email.placeholder = "Email Address";
      error3.classList.remove("show");
    }, 3000);
  }

  // For Password validation
  const showPassword = document.querySelector(".show-password");

  if (password.value === "") {
    password.style.borderColor = "red";
    showPassword.classList.add("show-element");
    showEmail.classList.add("show-element");
    password.placeholder = "";
    error4.classList.add("show");

    setTimeout(function () {
      password.style.borderColor = "";
      showPassword.classList.remove("show-element");
      password.placeholder = "Password";
      error4.classList.remove("show");
    }, 3000);
  } else {
    password.style.borderColor = "green";
    tick4.classList.add("show-icon");
  }
});
