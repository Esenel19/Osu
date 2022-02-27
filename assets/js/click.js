// à chaque click de souris ou de E / Z
function click(wrongClick) {
  if (temps > 0 && b) {
    if (
      isIntersect(mouseloc, circles[0]) &&
      (wrongClick == false || wrongClick == undefined)
    ) {
      create_green_pick(mouseloc);
      point += 100;
      gameLoop(undefined, 1001); // main.js
    } else {
      create_red_cross(mouseloc);
      randomInt = Math.random(0, 1);
      gameLoop(undefined, 1001); // main.js
    }
  }
}

// A chaque click réussi
function create_green_pick(pos) {
  // wow sound
  if (mouseloc.x < 350) {
    var myAudio = new Audio("../assets/audio/wow.mp3");
  } else {
    var myAudio = new Audio("../assets/audio/nyah.mp3");
  }
  myAudio.playbackRate = 2;
  myAudio.volume = 0.3;
  myAudio.play();

  // green tick
  var img_onclick = document.createElement("img");
  img_onclick.src = "assets/images/green_tick.png";
  img_onclick.className = "green-pick";
  var left = 290 + pos.x + "px";
  img_onclick.style.left = left;
  var top = 260 + pos.y + "px";
  img_onclick.style.top = top;
  document.getElementById("canv").appendChild(img_onclick);
  setInterval(function () {
    img_onclick.remove();
  }, 700);
}

// A chaque click raté
function create_red_cross(pos) {
  if (mouseloc.x < 350) {
    var myAudio = new Audio("../assets/audio/oof.mp3");
  } else {
    var myAudio = new Audio("../assets/audio/succ.mp3");
  }
  myAudio.play();

  // red cross
  var img_onclick = document.createElement("img");
  img_onclick.src = "assets/images/red_cross.png";
  img_onclick.className = "green-pick";
  var left = 290 + pos.x + "px";
  img_onclick.style.left = left;
  var top = 260 + pos.y + "px";
  img_onclick.style.top = top;
  document.getElementById("canv").appendChild(img_onclick);
  setInterval(function () {
    img_onclick.remove();
  }, 700);
}
