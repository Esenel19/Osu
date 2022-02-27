//check if the pos of mouse click is in radius of circle
function isIntersect(point, circle) {
    return (Math.sqrt((point.x - circle.x) ** 2 + (point.y - circle.y) ** 2) < circle.radius);
  }
