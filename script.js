let menubtn = document.querySelector(".menu-btn");
let exitbtn = document.querySelector(".exit");

let mobilenavbar = document.querySelector(".mobile-nav-bar");
menubtn.addEventListener("click", () => {
  mobilenavbar.style.display = "block";
  mobilenavbar.style.animation = "slideinmobile 1s ease-in-out";
});
exitbtn.addEventListener("click", () => {
  mobilenavbar.style.animation = "slideoutmobile 1s ease-in-out";

  setTimeout(function () {
    mobilenavbar.style.display = "none";
  }, 1000);
});
// code for the dropdown

let dropdown = document.querySelector(".more-btn");
let services = document.querySelector(".service-container");

dropdown.addEventListener("click", () => {
  services.style.height = "fit-content";

  dropdown.style.display = "none";
  setTimeout(function () {
    services.style.height = "365px";
    dropdown.style.display = "block";
  }, 12000);
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
    hookx.textContent = "Business";
  }
}

// Variable for mission and values
let mission = document.querySelector(".mission");
let views = document.querySelector(".views");
let missionblock = document.querySelector(".Mission");
let viewsblock = document.querySelector(".Views");
let missionx = document.querySelector(".mission-container");

mission.addEventListener("click", () => {
  missionblock.style.display = "block";
  viewsblock.style.display = "none";
  missionx.style.height = "100px";
  mission.style.color = "white";
  mission.style.backgroundColor = "var(--themecolor)";
  views.style.color = "var(--themecolor)";
  views.style.backgroundColor = "whitesmoke";
});

views.addEventListener("click", () => {
  missionblock.style.display = "none";
  viewsblock.style.display = "block";
  missionx.style.height = "170px";
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

// Send email
function SendEmail() {
  let parms = {
    name: document.getElementByid("name").value,
    email: document.getElementByid("email").value,
    subject: document.getElementByid("subject").value,
    msg: document.getElementByid("message").value,
  };
  emailjs
    .send("service_dbvdfls", "template_eihyueo", parms)
    .then(alert("Email sent"));
  alert("emailsent");
}

// let btnsubmit = document.querySelector(".btnsubmit");
// btnsubmit.addEventListener("click", () => {
//   SendEmail();
// });
