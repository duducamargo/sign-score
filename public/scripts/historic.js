import { calcIdade, descElemento, descSigno } from "./index.js";
import { caractSign, caractElem } from "./caract.js";

const limitesDosSignos = {
  Aquarius: { inicio: { mes: 1, dia: 21 }, fim: { mes: 2, dia: 19 } },
  Pisces: { inicio: { mes: 2, dia: 20 }, fim: { mes: 3, dia: 20 } },
  Aries: { inicio: { mes: 3, dia: 21 }, fim: { mes: 4, dia: 19 } },
  Taurus: { inicio: { mes: 4, dia: 20 }, fim: { mes: 5, dia: 20 } },
  Gemini: { inicio: { mes: 5, dia: 21 }, fim: { mes: 6, dia: 20 } },
  Cancer: { inicio: { mes: 6, dia: 21 }, fim: { mes: 7, dia: 22 } },
  Leo: { inicio: { mes: 7, dia: 23 }, fim: { mes: 8, dia: 22 } },
  Virgo: { inicio: { mes: 8, dia: 23 }, fim: { mes: 9, dia: 22 } },
  Libra: { inicio: { mes: 9, dia: 23 }, fim: { mes: 10, dia: 22 } },
  Scorpio: { inicio: { mes: 10, dia: 23 }, fim: { mes: 11, dia: 21 } },
  Sagittarius: { inicio: { mes: 11, dia: 22 }, fim: { mes: 12, dia: 21 } },
  Capricorn: { inicio: { mes: 12, dia: 22 }, fim: { mes: 12, dia: 31 } },
  Capricorn: { inicio: { mes: 1, dia: 1 }, fim: { mes: 1, dia: 20 } },
};

let next = document.getElementById("change");
let prev = document.getElementById("previous");
let id = 0;
const result = document.getElementById("resultado");
const caracteristicas = document.getElementById("caracSign");
const característicaEl = document.getElementById("caracElem");
let nome, dia, mes, ano, city;

function exibirResultados() {
  let signo = descSigno(mes, dia);
  let idade = calcIdade(ano, mes, dia);
  let elemento = descElemento(signo);
  let caractSignos = caractSign(signo);
  let caractElementos = caractElem(elemento);

  console.log(caractSignos);

  result.innerHTML = `Your Results...<br>Name: ${nome}<br>City: ${city}<br>Age: ${idade}<br>Zodiac Sign: ${signo}<br>Element: ${elemento}`;

  caracteristicas.innerHTML = `${caractSignos}`;

  característicaEl.innerHTML = `${caractElementos}`;
}

axios({
  method: "GET",
  url: "http://localhost:5000/results",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    nome = JSON.stringify(response.data[id].name);
    city = JSON.stringify(response.data[id].cityName);

    dia = parseInt(response.data[id].day, 10);
    mes = parseInt(response.data[id].month, 10);
    ano = parseInt(response.data[id].year, 10);

    console.log(ano, mes, dia);
    exibirResultados();
  })
  .catch((error) => {
    console.error(
      "Error: ",
      error.response ? error.response.data : error.message
    );
  });

next.addEventListener("click", change);
prev.addEventListener("click", previous);

function change() {
  id = id + 1;

  axios({
    method: "GET",
    url: "http://localhost:5000/results",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (id > response.data.length - 1) {
        id = response.data.length - 1;
      }

      nome = JSON.stringify(response.data[id].name);
      city = JSON.stringify(response.data[id].cityName);

      dia = parseInt(response.data[id].day, 10);
      mes = parseInt(response.data[id].month, 10);
      ano = parseInt(response.data[id].year, 10);

      console.log(ano, mes, dia);
      exibirResultados();
    })
    .catch((error) => {
      console.error(
        "Error: ",
        error.response ? error.response.data : error.message
      );
    });
}

function previous() {
  id = id - 1;

  axios({
    method: "GET",
    url: "http://localhost:5000/results",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (id <= 0) {
        id = 0;
      }

      nome = JSON.stringify(response.data[id].name);
      city = JSON.stringify(response.data[id].cityName);

      dia = parseInt(response.data[id].day, 10);
      mes = parseInt(response.data[id].month, 10);
      ano = parseInt(response.data[id].year, 10);

      console.log(ano, mes, dia);
      exibirResultados();
    })
    .catch((error) => {
      console.error(
        "Error: ",
        error.response ? error.response.data : error.message
      );
    });
}
