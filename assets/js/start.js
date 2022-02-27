// Event when click on "Start" button
var start = document.querySelector(".start-button");
var landing_page = document.querySelector(".landing-page");
start.addEventListener("click", () => {
  landing_page.classList.toggle("remove-landing-page");
  arrow.classList.toggle("remove-arrow");
  AmbianceSound.pause()
  imageNote.classList.toggle('bouton-ambiance-invisible')
  if (difficulty != "custom") {
    timeSelected = document.getElementById("myAudio").duration;
  }
  music(); // music.js
  init(); // main.js
});

// Event when click on "restart" button
var restart = document.querySelector(".button");
var remove_result_page = document.querySelector(".result-page");
var start = document.querySelector(".start-button-bis");
restart.addEventListener("click", () => {
  landing_page.classList.toggle("remove-landing-page");
  landing_page.classList.toggle("restart-pressed");
  remove_result_page.classList.toggle("result-success");
  start.classList.toggle("start-not-active");
  setInterval(function () {
    location.reload();
  }, 3000);
});

// all music players
var music1_musicPage = document.getElementById("music1-musicPage");
var music2_musicPage = document.getElementById("music2-musicPage");
var music3_musicPage = document.getElementById("music3-musicPage");
var music4_musicPage = document.getElementById("music4-musicPage");
var music5_musicPage = document.getElementById("music5-musicPage");

// Event when click on arrow to open or close music Page
var arrow = document.querySelector(".arrow");
var music_page = document.querySelector(".music-page");
var music_remover = document.querySelector(".music-remover");
arrow.addEventListener("click", () => {
  music_page.classList.toggle("music-page-active");
  arrow.classList.toggle("activator-active");
  music_remover.classList.toggle("music-activate");
  if (ambiance) {
    AmbianceSound.pause()
  }
  //stop all music
  stopAudio(music1_musicPage); // music.js
  stopAudio(music2_musicPage);
  stopAudio(music3_musicPage);
  stopAudio(music4_musicPage);
  stopAudio(music5_musicPage);
});
music_remover.addEventListener("click", () => {
  music_page.classList.toggle("music-page-active");
  arrow.classList.toggle("activator-active");
  music_remover.classList.toggle("music-activate");
  if (ambiance) {
    AmbianceSound.play()
    ambiance = true
  } else {
    AmbianceSound.pause()
    ambiance = false
  }
  //stop all music
  stopAudio(music1_musicPage); // music.js
  stopAudio(music2_musicPage);
  stopAudio(music3_musicPage);
  stopAudio(music4_musicPage);
  stopAudio(music5_musicPage);
});

//Event when click on rules icon
var rules = document.querySelector(".icon")
var rulesPage_active = document.querySelector(".info-page")
var rules_remover = document.querySelector(".info-page-remover")
var slideIndex = 1;
rules.addEventListener("click", () => {
  rules_remover.classList.toggle("info-page-remover-active")
  rulesPage_active.classList.toggle("info-page-active")
  arrow.classList.toggle("remove-arrow");
})
rules_remover.addEventListener("click", () => {
  rules_remover.classList.toggle("info-page-remover-active")
  rulesPage_active.classList.toggle("info-page-active")
  arrow.classList.toggle("remove-arrow");
})


var nextSlide = document.querySelector(".next")
var prevSlide = document.querySelector(".prev")

nextSlide.addEventListener("click", () => {
  plusSlides(1)
})
prevSlide.addEventListener("click", () => {
  plusSlides(-1)
})

function plusSlides(n) {
  var slides = document.getElementsByClassName("Slide");
  console.log(n)
  showSlides((slideIndex += n),slides);
}
function showSlides(n, slides) {
  var i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}