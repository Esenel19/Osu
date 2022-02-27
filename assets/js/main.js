var times = [];
var fps;

function gameLoop(timestamp, progress) {
  if (point == undefined) point = 0;
  if (progress == undefined) progress = 0;
  if (start == null && nbCircle == 0) time = timestamp;
  if (start === null) start = timestamp;

  // Quand un click sur le cercle, progress = 1001 donc pas besoin de calculer progress
  if (progress != 1001) {
    progress = timestamp - start;
    temps = timeSelected - (timestamp - time) / 1000;
    document.querySelector("#time").innerHTML = Math.ceil(temps);
    apparation_circle(0.1 + Math.floor((start - timestamp) / -50)); // appCircle&Line.js
  }
  if (progress > 1000) {
    // calcul du %
    if (nbCircle == 0) {
      accurate = 0;
    } else {
      accurate = point / nbCircle;
    }
    score = point * (accurate / 100) * scoreMultiplier; // calcul du score
    nbCircle++;

    print_on_site(); //affichage.js
    image(); // images.js (random image for the circle)
    draw();
    start = null;
  }

  // Lorsqu'il y a plus de 20 cercles avec moins de 25% de précision
  if (nbCircle > 19 && accurate < 25) {
    b = false;
  }

  // Lorsqu'il reste du temps et que la précision est à +25%
  if (temps > 0 && b) {
    window.requestAnimationFrame(gameLoop);
  } else if (temps <= 0) {
    print_times_up(); //affichage.js
    change_top_score(); //affichage.js
    restart_ambianceSound(); // music.js
  } else if (!b) {
    print_failed_game(); //affichage.js
    restart_ambianceSound(); // music.js
  }
}

//function for the circle apparition
function draw() {
  if (circles.length == 0) {
    circles.push(generation);
  } else if (circles.length == 2) {
    circles[0] = circles[1];
    movingLineX = circles[0].x;
    movingLineY = circles[0].y;
    circles.pop();
  }

  //generate random pos for x, y
  let x = 620 * Math.random() + radius; //Math.random()
  let y = 320 * Math.random() + radius;

  // Draw a circle
  context.beginPath();
  context.strokeStyle = "black";
  context.arc(circles[0].x, circles[0].y, circles[0].radius, 0, 2 * Math.PI);
  context.drawImage(img, circles[0].x, circles[0].y);
  context.stroke();

  //add the position of the circle to the circles array
  circles.push({
    x: x,
    y: y,
    radius: radius,
  });
}

function init() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  // scoreboard()

  canvas.onmousemove = mousemoveloc;

  fps_calculator();
  window.requestAnimationFrame(gameLoop);
  draw();

  // enlever le clic gauche quand on split le jeu
  if (
    difficulty == "nightmare" ||
    difficulty == "hard" ||
    (difficulty == "custom" && splitKey)
  ) {
    mouseclick = false;
  }

  // Si le temps selectionné dans custom est + long que la musique
  if (timeSelected > document.getElementById("myAudio").duration) {
    document.getElementById("myAudio").loop = true;
  }

  //get mouse location
  function mousemoveloc(e) {
    mouseloc.x = e.clientX - 300;
    mouseloc.y = e.clientY - 270;
  }

  // Clic gauche de la souris
  if (mouseclick) {
    canvas.addEventListener("mousedown", (e) => {
      click(); // click.js
    });
  }

  // touche E ou Z
  document.addEventListener("keydown", (e) => {
    const keyname = e.key;
    // Quand l'écran est split
    if (difficulty == "nightmare" || (difficulty == "custom" && splitKey)) {
      if (
        (keyname == "z" && mouseloc.x < 350) ||
        (mouseloc.x >= 350 && keyname == "e")
      ) {
        click(); // click.js
      } else if (keyname === "e" || keyname == "z") {
        // quand E ou Z n'est pas sur le cercle
        wrongClick = true;
        click(wrongClick); // click.js
      }
      // Quand l'écran n'est pas split
    } else if (keyname === "e" || keyname == "z") {
      click(); // click.js
    }
  });
}

function fps_calculator() {
  // Calculate FPS
  const now = performance.now();
  while (times.length > 0 && times[0] <= now - 1000) {
    times.shift();
  }
  times.push(now);
  fps = times.length;
  document.querySelector("#fps").innerHTML = fps;
  window.requestAnimationFrame(fps_calculator);
}
