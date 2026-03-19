import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  // Arrays con las diferentes partes de la excusa
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed on', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = [
    'before the class',
    'when I was sleeping',
    'while I was exercising',
    'during my lunch',
    'while I was praying'
  ];

  // Función para obtener un elemento aleatorio de cualquier array
  function random(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  // Construir la excusa con partes aleatorias
  let excuse = random(who) + " " + random(action) + " " + random(what) + " " + random(when);

  // Reemplazar el contenido del párrafo con la excusa generada
  document.querySelector("#excuse").innerHTML = excuse;

};
