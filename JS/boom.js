// JavaScript Document


function randomColor() {
  var values = "1234567890ABCDEF";
  var val = values.split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += val[Math.floor(Math.random() * 16)];
  }
  if (color == '#000000') {
    return '#ffffff';
  } else {
    return color;
  }
}

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
var xlimit = canvas.width;
var ylimit = canvas.height;

////////////////////////////////////
function blocks() {
  var i, j;
  for (i = 0; i <= xlimit;) {
    for (j = 0; j <= ylimit;) {
      c.fillStyle = randomColor();
      c.fillRect(i, j, 20, 20);
      j += 20;
    }
    i += 20;
  }
}

function disappear(i, j) {
  setTimeout(function () {
    c.clearRect(i,j,20,20);
  }, 2000 * j / 20);
}

function something() {
  blocks();
  /*for (var i = 0; i <= xlimit;) {
    for (var j = 0; j <= ylimit;) {
      disappear(i, j);
      j += 20;
    }
    i += 20;
  }*/
}
something();
