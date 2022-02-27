// get all buttons needed
var easy = document.querySelector(".easy");
var easy_button = document.querySelector(".easy-button");
var intermediate = document.querySelector(".intermediate");
var intermediate_button = document.querySelector(".intermediate-button");
var hard = document.querySelector(".hard");
var hard_button = document.querySelector(".hard-button");
var nightmare = document.querySelector(".nightmare");
var nightmare_button = document.querySelector(".nightmare-button");
var custom = document.querySelector(".custom");
var custom_button = document.querySelector(".custom-button");

var custom_selector = document.querySelector(".custom-selector");
var print_level_resultPage = document.querySelector(".level-printed");
var z_key = document.querySelector("#Z-key");
var e_key = document.querySelector("#E-key");
var clic_gauche = document.querySelector("#clic-gauche");

// set all variable depending on the level chosen
// easy level
easy.addEventListener("click", () => {
  easy_button.classList.add("active");
  intermediate_button.classList.remove("active");
  hard_button.classList.remove("active");
  nightmare_button.classList.remove("active");
  custom_button.classList.remove("active");
  custom_selector.classList.remove("custom-selector-active");
  clic_gauche.classList.remove("clic-gauche-inactive");
  // Changing values for the game
  visible = true;
  linevisib = true;
  disappears = false;
  radius = 50;
  print_level_resultPage.innerHTML = "Easy";
  scoreMultiplier = 0.8;
  difficulty = "easy";
});
// intermediate level
intermediate.addEventListener("click", () => {
  intermediate_button.classList.add("active");
  easy_button.classList.remove("active");
  hard_button.classList.remove("active");
  nightmare_button.classList.remove("active");
  custom_button.classList.remove("active");
  custom_selector.classList.remove("custom-selector-active");
  clic_gauche.classList.remove("clic-gauche-inactive");
  // Changing values for the game
  visible = true;
  linevisib = true;
  disappears = false;
  radius = 30;
  print_level_resultPage.innerHTML = "Intermediate";
  scoreMultiplier = 1;
  difficulty = "intermediate";
});
// hard level
hard.addEventListener("click", () => {
  hard_button.classList.add("active");
  easy_button.classList.remove("active");
  intermediate_button.classList.remove("active");
  nightmare_button.classList.remove("active");
  custom_button.classList.remove("active");
  custom_selector.classList.remove("custom-selector-active");
  clic_gauche.classList.add("clic-gauche-inactive");
  // Changing values for the game
  visible = true;
  linevisib = true;
  disappears = true;
  radius = 20;
  print_level_resultPage.innerHTML = "Hard";
  scoreMultiplier = 1.25;
  difficulty = "hard";
});
// nightmare level
nightmare.addEventListener("click", () => {
  nightmare_button.classList.add("active");
  easy_button.classList.remove("active");
  intermediate_button.classList.remove("active");
  hard_button.classList.remove("active");
  custom_button.classList.remove("active");
  custom_selector.classList.remove("custom-selector-active");
  clic_gauche.classList.add("clic-gauche-inactive");
  // Changing values for the game
  visible = false;
  linevisib = false;
  disappears = false;
  radius = 15;
  print_level_resultPage.innerHTML = "Nightmare";
  scoreMultiplier = 1.75;
  difficulty = "nightmare";
});
// custom level
custom.addEventListener("click", () => {
  custom_button.classList.add("active");
  easy_button.classList.remove("active");
  intermediate_button.classList.remove("active");
  hard_button.classList.remove("active");
  nightmare_button.classList.remove("active");
  custom_selector.classList.add("custom-selector-active");
  clic_gauche.classList.add("clic-gauche-inactive");
  // Changing values for the game
  radius = 30;
  print_level_resultPage.innerHTML = "Custom";
  scoreMultiplier = 0.8;
  difficulty = "custom";
  timeSelected = 60;
  splitKey = true
});

// choix du temps de la partie
document
  .getElementById("selected-timer")
  .addEventListener("change", function () {
    timeSelected = parseInt(this.value);
    console.log(timeSelected);
  });

// choisir le rayon du cercle d'apparition
document.getElementById("circle-size").addEventListener("change", function () {
  radius = parseInt(this.value);
});

// Activer ou non le cercle d'apparition
document.getElementById("on/off").addEventListener("click", function () {
  if (visible) {
    visible = false;
    document.getElementById("on/off").innerHTML = "off";
  } else {
    visible = true;
    document.getElementById("on/off").innerHTML = "on";
  }
});

// activer ou non le ligne d'apparition
document.getElementById("lineapp").addEventListener("click", function () {
  if (linevisib) {
    linevisib = false;
    document.getElementById("lineapp").innerHTML = "off";
  } else {
    linevisib = true;
    document.getElementById("lineapp").innerHTML = "on";
  }
});

// activer ou non le click
document.getElementById("clickmouse").addEventListener("click", function () {
  if (splitKey) {
    clic_gauche.classList.remove("clic-gauche-inactive");
    mouseclick = true;
    splitKey = false;
    document.getElementById("clickmouse").innerHTML = "off";
  } else {
    clic_gauche.classList.add("clic-gauche-inactive");
    splitKey = true;
    document.getElementById("clickmouse").innerHTML = "on";
  }
});
