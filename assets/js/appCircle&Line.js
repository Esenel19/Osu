//cercle d'apparition
function apparation_circle(a) {
  // Draw a circle
  context.clearRect(0, 0, canvas.width, canvas.height);

  // on verifie quand il est necessaire d'afficher les lignes et cercles
  if (linevisib) line(6);
  if (visible) {
    context.beginPath();
    context.strokeStyle = "black";
    context.arc(
      circles[0].x,
      circles[0].y,
      circles[0].radius - a + 20,
      0,
      2 * Math.PI
    );
    context.stroke();
  }

  //Permit the disparition of the circle before the apparition circle got the same radius
  if (
    circles[0].radius - a + 20 < circles[0].radius + 11.5 ||
    disappears == false
  ) {
    context.beginPath();
    context.strokeStyle = "black";
    context.arc(circles[0].x, circles[0].y, circles[0].radius, 0, 2 * Math.PI);
    context.drawImage(img, circles[0].x - radius, circles[0].y - radius);
    context.stroke();
    if (a > 10) {
      context.beginPath();
      context.strokeStyle = "black";
      context.arc(
        circles[1].x,
        circles[1].y,
        circles[1].radius,
        0,
        2 * Math.PI
      );
      context.drawImage(img, circles[1].x - radius, circles[1].y - radius);
      context.stroke();
    }
  }

  // middle line
  if (difficulty == "nightmare" || (difficulty == "custom" && splitKey)) {
    context.beginPath();
    context.moveTo(350, 0);
    context.lineTo(350, 400);
    context.lineWidth = 1;
    context.stroke();
  }
}

function line(y) {
  var a = circles[0];
  var b = circles[1];

  // make the line moving to the next circle
  if (y > 5) {
    if (a.x > b.x && b.x < movingLineX) {
      movingLineX -= (a.x - b.x) / 50;
    } else if (a.x < b.x && b.x > movingLineX) {
      movingLineX += (b.x - a.x) / 50;
    }
    if (a.y > b.y && b.y < movingLineY) {
      movingLineY -= (a.y - b.y) / 50;
    } else if (a.y < b.y && b.y > movingLineY) {
      movingLineY += (b.y - a.y) / 50;
    }
    context.beginPath();
    context.lineWidth = 2;
    context.lineCap = "round";
    context.strokeStyle = "red";
    context.moveTo(a.x, a.y);
    context.lineTo(movingLineX, movingLineY);
    context.stroke();
  }
}

