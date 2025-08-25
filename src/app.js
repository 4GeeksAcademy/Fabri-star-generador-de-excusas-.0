import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pajaro', 'Mi gato', 'Mi vecino']
const action = ['se comio', 'mojo', 'aplasto', 'rompio', 'se llevo', 'borro']
const what = ['mi tarea', 'mi telefono', 'el coche', 'mi codigo', 'el informe', 'mis archivos']
const when = ['antes de la clase',
              'mientras dormia',
              'mientras hacia ejercicio',
              'durante el almuerzo',
              'mientras estaba rezando',
              'justo antes de la entrega',]

function pick(arr){
    const indice = Math.floor(Math.random()*arr.length);
    return arr [indice]
}
function generateExcuse() {
    return `${pick(who)} ${pick(action)} ${pick(what)} ${pick(when)}.`;
}             
function renderExcuse() {
    const el = document.getElementById('excuse');
    if (!el) return;
    el.innerHTML = generateExcuse();
}
window.addEventListener('load', renderExcuse);
const btn = document.getElementById('btn');
if (btn){
    btn.addEventListener('click', renderExcuse);
}
};
