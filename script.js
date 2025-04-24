let menubtn = document.querySelector(".menu-btn");
let exitbtn = document.querySelector(".exit");
let mobilenavbar = document.querySelector(".mobile-nav-bar");
menubtn.addEventListener("click", () => {
  mobilenavbar.style.display = "block";
});
exitbtn.addEventListener("click", () => {
  mobilenavbar.style.display = "none";
});
