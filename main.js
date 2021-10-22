const display = document.getElementById("display");
const button = document.getElementById("trip-button");

const imagelist = [
  "portfolio/img01.jpg",
  "portfolio/img02.jpg",
  "portfolio/img03.jpg",
  "portfolio/img04.jpg",
  "portfolio/img05.jpg",
  "portfolio/img06.jpg",
  "portfolio/img07.jpg",
  "portfolio/img08.jpg",
  "portfolio/img09.jpg",
  "portfolio/img10.jpg",
  "portfolio/img11.jpg",
];

let image = 0;

function slideshow() {
  if (image === 10) {
    image = 0;
  } else {
    image++;
  }
  display.src = imagelist[image];
}

let id = null;

button.onclick = function () {
  if (id === null) {
    id = setInterval(slideshow, 2000);
    display.src = id;
    button.textContent = "STOP！！";
  } else {
    clearInterval(id);
    id = null;
    button.textContent = "RESTART！！";
  }
};
