document.addEventListener("DOMContentLoaded", function () {
  var puntaje = localStorage.getItem("puntajeQuiz");
  var name = localStorage.getItem("name");
  var age = localStorage.getItem("age");

  document.getElementById("nombre").innerHTML = "Nombre: " + name;
  document.getElementById("edad").innerHTML = "Edad: " + age;
  document.getElementById("resultados").innerHTML = puntaje + "/15";

  if (puntaje >= 10) {
    document.getElementById("img").src = "img/excelent.gif";
    document.getElementById("congrats").innerHTML =
      "Felicidades " + name + ", eres un(x) verdaderx swiftie!";
  } else if (puntaje < 10 && puntaje >= 5) {
    document.getElementById("img").src = "img/good.gif";
    document.getElementById("congrats").innerHTML =
      "Nada mal, pero puede ser mejor.";
  } else {
    document.getElementById("img").src = "img/bad.gif";
    document.getElementById("congrats").innerHTML = "No le sabes.";
  }
});

function verRespuestas() {
    window.open('respuestas.html', width = 500, height = 500);
}
