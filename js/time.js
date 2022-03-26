// DOM elements

const time = document.getElementById("time"),
  name = document.getElementById("name"),
  greeting = document.getElementById("greeting"),
  mind = document.getElementById("mind");
// show time function
const showTime = () => {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
  // set AM or PM
  const amPm = hour <= 12 ? "AM" : "PM";

  // 12 hour format
  hour = hour % 12 || 12;

  const html = `${addZero(hour)}<span>:</span>${addZero(
    min
  )}<span>:</span>${addZero(sec)}<span> </span> ${amPm}`;
  time.innerHTML = html;

  setTimeout(showTime, 1000);
};

// Add zero
const addZero = (n) => {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
};

// show greetings
const showGreeting = () => {
  const today = new Date();
  hour = today.getHours();
  if (hour < 12) {
    // Morning
    document.body.classList.add("morning");
    greeting.innerText = "Good Morning,";
  } else if (hour < 16) {
    // After noon
    document.body.classList.add("afternoon");
    greeting.innerText = "Good After Noon,";
  } else {
    // Evening
    document.body.classList.add("evening");
    greeting.innerText = "Good Evening,";
  }
};
// get Name
const getName = () => {
  if (localStorage.getItem("name") === null) {
    name.innerText = "[enter your name]";
  } else {
    name.innerText = localStorage.getItem("name");
  }
};
// get Mind
const getMind = () => {
  if (localStorage.getItem("mind") === null) {
    mind.innerText = "[type here]";
  } else {
    mind.innerText = localStorage.getItem("mind");
  }
};
// Set Name to local storage
setName = (e) => {
  if (e.type === "keypress") {
    // check enter key pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", name.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", name.innerText);
  }
};
// Set Mind to local storage
setMind = (e) => {
  if (e.type === "keypress") {
    // check enter key pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("mind", mind.innerText);
      mind.blur();
    }
  } else {
    localStorage.setItem("mind", mind.innerText);
  }
};

// Events

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
mind.addEventListener("keypress", setMind);
mind.addEventListener("blur", setMind);

// RUN
showTime();
showGreeting();
getName();
getMind();
