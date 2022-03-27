"use strict";
const input = document.querySelector(".text-input");
const btn = document.querySelector(".btn");
const msg = document.querySelector(".message");
let filterInput;
btn.addEventListener("click", () => {
  // splitting user input and then joining them in a single unit
  let reverseInput = filterInput.split("").reverse().join("");
  if (filterInput != reverseInput) {
    msg.classList.add("error");

    msg.style.display = "block";
    msg.textContent = `${filterInput} is not a Palindrome`;
    return (msg.innerHTML = `Your input <span class="user-input">"${input.value}"</span> is not a Palindrome 😑.`);
  }
  msg.style.display = "block";
  msg.classList.remove("error");
  msg.classList.add("success");
  return (msg.innerHTML = `Your input <span class="user-input">"${input.value}"</span> is a Palindrome 😊.`);
});

input.addEventListener("keyup", () => {
  // remove space and special character
  filterInput = input.value.toLowerCase().replace(/[^A-Z0-9]/gi, "");
  if (filterInput) {
    return btn.classList.add("active");
  }
  msg.style.display = "none";
  btn.classList.remove("active");
});
