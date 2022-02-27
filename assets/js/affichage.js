// on change le top score de la musique selectionnée
function change_top_score() {
  //prettier-ignore
  if (difficulty != "easy" && difficulty != "intermediate" && difficulty != "custom") {
    if (musicSelected == "music1" && score > parseInt(localStorage.getItem("maxPoint_music1"))) {
        localStorage.setItem("maxPoint_music1", score.toString());
    } else if (musicSelected == "music2" && score > parseInt(localStorage.getItem("maxPoint_music2"))) {
        localStorage.setItem("maxPoint_music2", score.toString());
    } else if (musicSelected == "music3" && score > parseInt(localStorage.getItem("maxPoint_music3"))) {
        localStorage.setItem("maxPoint_music3", score.toString());
    } else if (musicSelected == "music4" && score > parseInt(localStorage.getItem("maxPoint_music4"))) {
        localStorage.setItem("maxPoint_music4", score.toString());
    } else if (musicSelected == "music5" && score > parseInt(localStorage.getItem("maxPoint_music5"))) {
        localStorage.setItem("maxPoint_music5", score.toString());
    }
  }
}

// On change l'affichage sur le site
function print_on_site() {
  document.getElementsByClassName("point")[0].innerHTML = point;
  document.querySelector(".point-result").innerHTML = point;
  document.getElementsByClassName("circle")[0].innerHTML = nbCircle;
  document.getElementsByClassName("percent")[0].innerHTML =
    accurate.toFixed(2) + "%";
  document.getElementsByClassName("percent")[1].innerHTML =
    accurate.toFixed(2) + "%";
}

// change le score sur la page de résultat quand le timer est à 0
function print_times_up() {
  document.getElementById("myAudio").pause();
  document.getElementsByClassName(
    "scoring-number"
  )[0].innerHTML = score.toFixed(0);
  document.querySelector(".result-page").classList.add("result-success");
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (musicSelected == "music1") {
    document.querySelector(".max-point-printed").innerHTML =
      "Music 1 :<br>" + parseInt(localStorage.getItem("maxPoint_music1"));
  } else if (musicSelected == "music2") {
    document.querySelector(".max-point-printed").innerHTML =
      "Music 2 :<br>" + parseInt(localStorage.getItem("maxPoint_music2"));
  } else if (musicSelected == "music3") {
    document.querySelector(".max-point-printed").innerHTML =
      "Music 3 :<br>" + parseInt(localStorage.getItem("maxPoint_music3"));
  } else if (musicSelected == "music4") {
    document.querySelector(".max-point-printed").innerHTML =
      "Music 4 :<br>" + parseInt(localStorage.getItem("maxPoint_music4"));
  } else if (musicSelected == "music5") {
    document.querySelector(".max-point-printed").innerHTML =
      "Music 5 :<br>" + parseInt(localStorage.getItem("maxPoint_music5"));
  }
}

// change le score sur la page de résultat quand la partie est perdue
function print_failed_game() {
  document.getElementById("myAudio").pause();
  document.getElementsByClassName("well-played-or-not")[0].innerHTML =
    "Too Bad !";
  document.querySelector(".result-page").classList.add("result-success");
  context.clearRect(0, 0, canvas.width, canvas.height);
}

