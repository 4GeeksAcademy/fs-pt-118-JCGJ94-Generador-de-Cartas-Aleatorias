import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


// traemos los id ---> .js
const paloTop = document.querySelector("#paloTop");
const randomNumberCard = document.querySelector("#randomNumber");
const paloButtom = document.querySelector("#paloButtom");
const btnGeneretor = document.querySelector("#btn-generetor");
const countDown = document.querySelector("#countDown");
const btnStartStop = document.querySelector("#btnStartStop");
let itsruningCount = false;
let nIntervId;
let count = 11;
const pokerFigures = ["♦", "♥", "♠", "♣"];
const valueCardArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "J", "Q", "K"];

// funciones
const randomValue = (arr) => arr[Math.floor(Math.random() * arr.length)];    // array rando[index]

const generatorCardFuntion = () => {
  let figuresAleartorias = randomValue(pokerFigures);   // extramos valor del array --> figuras(palos)
  let valueCard = randomValue(valueCardArr);      // extramos valor del array --> valor de carta

  paloTop.innerText = figuresAleartorias;
  paloButtom.innerText = figuresAleartorias;
  randomNumberCard.innerText = valueCard;

  if (figuresAleartorias === "♦" || figuresAleartorias === "♥") {               // 
    paloTop.classList.add("red");
    paloTop.classList.remove("black");   // añadido remove para que no aplique siempre el estilo rojo css "estilos en cascada 🤯".
  
    paloButtom.classList.add("red");
    paloButtom.classList.remove("black");

    randomNumberCard.classList.add("red");
    randomNumberCard.classList.remove("black");
  } else {
    paloTop.classList.add("black");
    paloTop.classList.remove("red");

    paloButtom.classList.add("black");
    paloButtom.classList.remove("red");

    randomNumberCard.classList.add("black");
    randomNumberCard.classList.remove("red");
  }
};
const decliningCounterFuntion = () => {   // funcionPrincipal para conteo regresivo mostramos valor inicial de contador
  countDown.innerHTML = `: ${count}s`;
  intervalfuntion();                     // llamada a la  fSecundaria - se ejecute con su intervalo declarado
};

const intervalfuntion = () => {
  let endCount = 0;
  count--;
  countDown.innerHTML = `: ${count}s`;
  if (count > endCount){
    nIntervId = setTimeout(intervalfuntion, 1000);  // contador disminuya con  intervalo de 1s
  } else {                        // cuando llegue contador a 0 se genera un acarta random
    generatorCardFuntion();
    count = 11;
    countDown.innerHTML = `: ${count}s`;
    decliningCounterFuntion(); // reiniciamos contador y funcion loop(se repite)
  }
};

const stopCounterFuntion = () => {  
  itsruningCount = false;   
  clearTimeout(nIntervId);
  nIntervId = null; // importante !! el valor en null rompemos el loop de la funcion decliningCounterFuntion --> intervalfuntion
};
const startCounterFuntion = () => {  
  itsruningCount = true;     
  nIntervId = setTimeout(intervalfuntion, 100); //canvio el intervalo 100ms --> evento click mas rápido
}

// eventos
window.onload = function () {     // evnto que ejecuta las funciones al cargar todo el html 
  generatorCardFuntion();
  decliningCounterFuntion();
};

btnGeneretor.addEventListener("click", generatorCardFuntion);   // eveto click genera carta random
btnStartStop.addEventListener('click', ()=> {                   // evento si el contador esta descontado pues 
      if (nIntervId) {
          stopCounterFuntion();     
      }   else {
          startCounterFuntion();
      }
  }); 
