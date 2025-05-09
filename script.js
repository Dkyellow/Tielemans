let menubtn = document.querySelector(".menu-btn");
let exitbtn = document.querySelector(".exit");
let mobilenavbar = document.querySelector(".mobile-nav-bar");
menubtn.addEventListener("click", () => {
  mobilenavbar.style.display = "block";
});
exitbtn.addEventListener("click", () => {
  mobilenavbar.style.display = "none";
});

// Code for the animation

let hookx = document.querySelector(".Catchhook");
let timeinterval2;
let int1 = 0;

timeinterval2 = setInterval(() => {
  int1++;

  if (int1 === 3) {
    int1 = 0;
  }
  updatex(int1);
}, 2000);

function updatex(x) {
  if (x === 0) {
    hookx.textContent = "Company";
  }
  if (x === 1) {
    hookx.textContent = "Organization";
  }
  if (x === 2) {
    hookx.textContent = "Bussiness";
  }
}

// Variable for mission and values
let mission = document.querySelector(".mission");
let views = document.querySelector(".views");
let missionblock = document.querySelector(".Mission");
let viewsblock = document.querySelector(".Views");

mission.addEventListener("click", () => {
  missionblock.style.display = "block";
  viewsblock.style.display = "none";

  mission.style.color = "white";
  mission.style.backgroundColor = "var(--themecolor)";
  views.style.color = "var(--themecolor)";
  views.style.backgroundColor = "whitesmoke";
});

views.addEventListener("click", () => {
  missionblock.style.display = "none";
  viewsblock.style.display = "block";

  views.style.color = "white";
  views.style.backgroundColor = "var(--themecolor)";
  mission.style.color = "var(--themecolor)";
  mission.style.backgroundColor = "whitesmoke";
});

// Variables for timer
let timeinterval;
let seconds = 60;
let minutes = 5;
let hours = 2;
let days = 5;
let SecondX = document.getElementById("Seconds");
let MinutesX = document.getElementById("Minutes");
let HoursX = document.getElementById("Hours");
let DaysX = document.getElementById("Days");
SecondX.textContent = seconds;
MinutesX.textContent = minutes;
HoursX.textContent = hours;
DaysX.textContent = days;

// Timer

timeinterval = setInterval(() => {
  seconds--;
  if (seconds === 0) {
    minutes--;
    seconds = 59;
  }
  if (minutes === 0) {
    hours--;
    minutes = 59;
  }
  if (hours === 0) {
    days--;
    hours = 23;
  }

  Updatetimer();
}, 1000);

function Updatetimer() {
  SecondX.textContent = Padzer(seconds);
  MinutesX.textContent = Padzer(minutes);
  HoursX.textContent = Padzer(hours);
}
function Padzer(num) {
  return (num < 10 ? "0" : "") + num;
}
