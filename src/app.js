import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const paloTop = document.querySelector("#paloTop");
const randomNumberCard = document.querySelector("#randomNumber");
const paloButtom = document.querySelector("#paloButtom");
const btnGeneretor = document.querySelector("#btn-generetor");

const pokerFigures = ["♦", "♥", "♠", "♣"];
const valueCardArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "J", "Q", "K"];

// funciones
const randomValue = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generatorCardFuntion = () => {
  let figuresAleartorias = randomValue(pokerFigures);
  let valueCard = randomValue(valueCardArr);

  paloTop.innerText = figuresAleartorias;
  paloButtom.innerText = figuresAleartorias;
  randomNumberCard.innerText = valueCard;

  if (figuresAleartorias === "♦" || figuresAleartorias === "♥") {
    paloTop.classList.add("red");
    paloTop.classList.remove("black");

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
// eventos
window.onload = function () {
  generatorCardFuntion();
};

btnGeneretor.addEventListener("click", generatorCardFuntion);


