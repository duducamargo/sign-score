import { caractSign, caractElem } from "./caract.js";

let nome = localStorage.getItem("namevalue");
let dia = Number(localStorage.getItem("dayvalue"));
let mes = Number(localStorage.getItem("monthvalue"));
let ano = Number(localStorage.getItem("yearvalue"));

console.log(nome);
console.log(dia);
console.log(mes);
console.log(ano);

// Define um objeto chamado "limitesDosSignos" com os períodos dos signos do zodíaco
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

// Função para determinar o signo com base no mês e dia de nascimento
function descSigno(mes, dia) {
  for (const signo in limitesDosSignos) {
    const limites = limitesDosSignos[signo];
    const inicio = limites.inicio;
    const fim = limites.fim;

    if (
      (mes === inicio.mes && dia >= inicio.dia) ||
      (mes === fim.mes && dia <= fim.dia)
    ) {
      return signo;
    }

    /*else {
            return 'Mês inválido';
        }*/
  }
}

function descElemento(signo) {
  if (signo == "Aries" || signo == "Leo" || signo == "Sagittarius") {
    return "Fire";
  } else if (signo == "Cancer" || signo == "Scorpio" || signo == "Pisces") {
    return "Water";
  } else if (signo == "Gemini" || signo == "Libra" || signo == "Aquarius") {
    return "Air";
  } else {
    return "Earth";
  }
}

function calcIdade(ano, mes, dia) {
  const dataNascimento = new Date(ano, mes - 1, dia); // O mês é base zero, então subtraímos 1
  const dataAtual = new Date();
  const idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

  // Verifica se o aniversário já ocorreu este ano
  if (
    dataAtual.getMonth() < dataNascimento.getMonth() ||
    (dataAtual.getMonth() === dataNascimento.getMonth() &&
      dataAtual.getDate() < dataNascimento.getDate())
  ) {
    idade--;
  }
  return idade;
}

function exibirResultados() {
  let signo = descSigno(mes, dia); // Determina o signo
  let idade = calcIdade(ano, mes, dia); // Calcula a idade
  let elemento = descElemento(signo);
  let caractSignos = caractSign(signo);
  let caractElementos = caractElem(elemento);

  console.log(caractSignos);

  // Atualiza o conteúdo do elemento com id "resultado" com informações sobre o usuário
  result.innerHTML = `Your Results...<br>Name: ${nome}<br>Age: ${idade}<br>Zodiac Sign: ${signo}<br>Element: ${elemento}`;

  caracteristicas.innerHTML = `${caractSignos}`;

  característicaEl.innerHTML = `${caractElementos}`;
}

const result = document.getElementById("resultado");

const caracteristicas = document.getElementById("caracSign");

const característicaEl = document.getElementById("caracElem");

exibirResultados();
