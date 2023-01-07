const hamburgerBtn = document.getElementById("hamburger");
const smdNav = document.querySelector(".collapse");
const closeBtn = document.getElementById("close");
const links = document.querySelectorAll(".nav-link");

hamburgerBtn.addEventListener("click", function () {
	smdNav.classList.add("open");
	closeBtn.classList.add("open");
});

closeBtn.addEventListener("click", function () {
	smdNav.classList.remove("open");
});