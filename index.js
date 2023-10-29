function startTrafficSignal () {
  var green = document.getElementById("green");
  var red = document.getElementById("red");
  var yellow = document.getElementById("yellow");

  red.style.opacity = 1;
  yellow.style.opacity = .3;
  green.style.opacity = .3;

  setTimeout(() => {
      red.style.opacity = .3;
      yellow.style.opacity = 1;
      green.style.opacity = .3;
  },15000);

  setTimeout(() => {
      red.style.opacity = .3;
      yellow.style.opacity = .3;
      green.style.opacity = 1;
  },17000);

  setTimeout(() => {
      red.style.opacity = 1;
      yellow.style.opacity = .3;
      green.style.opacity = .3;
  },27000);
}

var timer = setInterval(() => {
  startTrafficSignal();
},27000);

startTrafficSignal();