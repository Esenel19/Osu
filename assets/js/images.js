// change randomly the images of each circles
function image() {
  var image_index = Math.floor(Math.random() * 9);
  file = [
    "rick" + radius * 2 + "px",
    "morty" + radius * 2 + "px",
    "dicky" + radius * 2 + "px",
    "smile" + radius * 2 + "px",
    "sven" + radius * 2 + "px",
    "svenmou" + radius * 2 + "px",
    "arnold" + radius * 2 + "px",
    "rocco" + radius * 2 + "px",
    "dudu" + radius * 2 + "px",
  ];
  img.src =
    "../assets/images/image_cercle/" +
    radius * 2 +
    "px/" +
    file[image_index] +
    ".png";
}
