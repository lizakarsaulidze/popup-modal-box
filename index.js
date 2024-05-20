const section = document.querySelector("section");
const overlay = document.querySelector(".overlay");
const showBtn = document.querySelector(".show-modal");
const closrBtn = document.querySelector(".close-btn");

showBtn.addEventListener("click",() => section.classList.add("active"));
closrBtn.addEventListener("click",() => section.classList.remove("active"));