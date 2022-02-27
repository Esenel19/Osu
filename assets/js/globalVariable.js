let canvas;
let context;

var start = null;
var time = 0;
var temps;

// default values
var timeSelected = 30;
var difficulty = "intermediate";
let radius = 40;
let disappears = false;
var visible = true;
var linevisib = true;
var ambiance = false;
var mouseclick = true;
var wrongClick= false
var splitKey = false

// will be used to print the score
var nbCircle = 0;
var accurate = 0;
var point = 0;
var score = 0;
var scoreMultiplier = 1;

// for the condition to stop the game
var b = true;

// background of circles
var img = new Image();

// make lines moving to the next circle
var movingLineX;
var movingLineY;

//save the loc of the circle
let circles = [];
const mouseloc = {
  x: 0,
  y: 0,
};

var musicSelected = "music1";
//top score
if (localStorage.getItem("maxPoint_music1") == null) {
  localStorage.setItem("maxPoint_music1", 0);
}
if (localStorage.getItem("maxPoint_music2") == null) {
  localStorage.setItem("maxPoint_music2", 0);
}
if (localStorage.getItem("maxPoint_music3") == null) {
  localStorage.setItem("maxPoint_music3", 0);
}
if (localStorage.getItem("maxPoint_music4") == null) {
  localStorage.setItem("maxPoint_music4", 0);
}
if (localStorage.getItem("maxPoint_music5") == null) {
  localStorage.setItem("maxPoint_music5", 0);
}

window.onload = function () {
  //charger le top score par défaut (musique 1) lorsque la page refresh
  document.querySelector(".max-point-printed").innerHTML =
    "Music 1 :<br>" + parseInt(localStorage.getItem("maxPoint_music1"));

  // charger le top score sur la page de musique lorsqu'elle refresh
  document.querySelector(".music1-score").innerHTML = parseInt(
    localStorage.getItem("maxPoint_music1")
  );
  document.querySelector(".music2-score").innerHTML = parseInt(
    localStorage.getItem("maxPoint_music2")
  );
  document.querySelector(".music3-score").innerHTML = parseInt(
    localStorage.getItem("maxPoint_music3")
  );
  document.querySelector(".music4-score").innerHTML = parseInt(
    localStorage.getItem("maxPoint_music4")
  );
  document.querySelector(".music5-score").innerHTML = parseInt(
    localStorage.getItem("maxPoint_music5")
  );
};
