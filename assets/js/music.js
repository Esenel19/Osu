function music() {
  if (document.getElementById("music-selector").value != 0) {
    document.getElementById("myAudio").volume = 0.4;
    document.getElementById("myAudio").play();
  }
}

// Ambiance musique
var boutonAmbiance = document.querySelector(".bouton-song");
var imageNote = document.querySelector("#note");
var AmbianceSound = new Audio("assets/audio/ambiance-music.mp3");
boutonAmbiance.addEventListener("click", () => {
  if (ambiance) {
    ambiance = false;
    AmbianceSound.pause();
    imageNote.setAttribute("src", "../assets/images/note-false.png");
  } else {
    ambiance = true;
    AmbianceSound.play();
    imageNote.setAttribute("src", "../assets/images/note-true.png");
    AmbianceSound.loop = true;
  }
});

// relancer la musique d'ambiance si elle a été activée
function restart_ambianceSound() {
  imageNote.classList.toggle("bouton-ambiance-invisible");
  setInterval(function () {
    if (ambiance) {
      AmbianceSound.play();
    }
  }, 1000);
}

function stopAudio(audio) {
  audio.pause();
  audio.currentTime = 0;
}

// prettier-ignore
// print the top score depending on the music selected
document.getElementById("music-selector").addEventListener("change", function () {
  if (this.value != 0) {
    document.getElementById("myAudio")
    .setAttribute("src", "../assets/audio/music" + this.value + ".mp3");
  }
  if (this.value == 1) {
    document.querySelector(".max-point-printed").innerHTML = "Music 1 :<br>"+parseInt(
      localStorage.getItem("maxPoint_music1")
      );
    musicSelected = "music1"
  } else if (this.value == 2) {
    document.querySelector(".max-point-printed").innerHTML = "Music 2 :<br>"+parseInt(
      localStorage.getItem("maxPoint_music2")
      );
    musicSelected = "music2"
  } else if (this.value == 3) {
    document.querySelector(".max-point-printed").innerHTML = "Music 3 :<br>"+parseInt(
      localStorage.getItem("maxPoint_music3")
      );
    musicSelected = "music3"
  } else if (this.value == 4) {
    document.querySelector(".max-point-printed").innerHTML = "Music 4 :<br>"+parseInt(
      localStorage.getItem("maxPoint_music4")
      );
    musicSelected = "music4"
  } else if (this.value == 5) {
    document.querySelector(".max-point-printed").innerHTML = "Music 5 :<br>"+parseInt(
      localStorage.getItem("maxPoint_music5")
      );
    musicSelected = "music5"
  }
});
