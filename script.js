function start(){
  document.getElementById("part1").classList.add("scale-in");
}

function home1(){
  document.getElementById("part21").classList.add("scale-in");
  document.getElementById("hotel1").classList.add("disabled");
  document.getElementById("part22").style.display = "none";
}

function hotel1(){
  document.getElementById("part22").classList.add("scale-in");
  document.getElementById("home1").classList.add("disabled");
  document.getElementById("part21").style.display = "none";
}

function home2(){
  document.getElementById("part31").classList.add("scale-in");
  document.getElementById("hotel2").classList.add("disabled");
  document.getElementById("part32").style.display = "none";
}

function hotel2(){
  document.getElementById("part32").classList.add("scale-in");
  document.getElementById("home2").classList.add("disabled");
  document.getElementById("part31").style.display = "none";
}