function myfunc() {
  var x = document.getElementById("boxid");
  var y = document.getElementById("boxsub");
  var z = document.getElementById("btn");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
    y.style.visibility = "visible";
    z.style.filter = "blur(10px)";
  } else {
    x.style.visibility = "hidden";
    y.style.visibility = "hidden";
    z.style.filter = "none";
  }
}

function myfunc2() {
  var x = document.getElementById("boxid2");
  var y = document.getElementById("boxsub");
  var z = document.getElementById("btn");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
    y.style.visibility = "visible";
    z.style.filter = "blur(10px)";
  } else {
    x.style.visibility = "hidden";
    y.style.visibility = "hidden";
    z.style.filter = "none";
  }
}

function myfunc3() {
  var x = document.getElementById("boxid3");
  var y = document.getElementById("boxsub");
  var z = document.getElementById("btn");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
    y.style.visibility = "visible";
    z.style.filter = "blur(10px)";
  } else {
    x.style.visibility = "hidden";
    y.style.visibility = "hidden";
    z.style.filter = "none";
  }
}

function btn() {
  var x = document.getElementById("boxid");
  var a = document.getElementById("boxid2");
  var k = document.getElementById("boxid3");
  var y = document.getElementById("boxsub");
  var z = document.getElementById("btn");
  x.style.visibility = "hidden";
  y.style.visibility = "hidden";
  a.style.visibility = "hidden";
  k.style.visibility = "hidden";
  z.style.filter = "none";
}
