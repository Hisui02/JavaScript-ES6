const pantalla = document.getElementById("pantalla");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

const numeros = [...document.querySelectorAll("[data-value]")];
const operaciones = [...document.querySelectorAll("[data-operacion]")];

let NUMERO1 = null;
let NUMERO2 = null;
let OPERACION = null;

const anadirNumero = (numero) => {
  if (pantalla.value == "0") {
    pantalla.value = numero;
  } else {
    pantalla.value += numero;
  }
};

const quitarNumero = () => {
  if (pantalla.value.length == 1) {
    pantalla.value = "0";
  } else {
    pantalla.value = pantalla.value.substring(0, pantalla.value.length - 1);
  }
};

const pintarResultado = (resultado) => {
  pantalla.value = resultado;
};

const limpiarPantalla = () => {
  pantalla.value = "0";
};

const operacionHandler = (operacion) => {
  let num = Number.parseFloat(pantalla.value.replace(",", "."));
  NUMERO1 = num;
  OPERACION = operacion;
  switch (operacion) {
    case "entero":
      pintarResultado(Number.parseInt(pantalla.value));
      break;
    case "decimal":
      pintarResultado((num % 1.0).toFixed(4));
      break;
    case "!":
      if (Number.parseInt(num) != num) return;
      if (num < 0) return;
      pintarResultado(factorial(num));
      break;

    default:
      limpiarPantalla();
      break;
  }
};

const equalsHandler = () => {
  if (OPERACION == null) return;
  let num = Number.parseFloat(pantalla.value.replace(",", "."));
  NUMERO2 = num;
  switch (OPERACION) {
    case "+":
      pintarResultado(NUMERO1 + NUMERO2);
      break;
    case "-":
      pintarResultado(NUMERO1 - NUMERO2);
      break;
    case "*":
      pintarResultado(NUMERO1 * NUMERO2);
      break;
    case "/":
      if (NUMERO2 == 0) {
        return;
      }
      pintarResultado(NUMERO1 / NUMERO2);
      break;
  }
};

const factorial = (n) => {
  if (n === 0) return 1;

  return n * factorial(n - 1);
};

clear.onclick = () => quitarNumero();

equals.onclick = () => equalsHandler();

numeros.forEach((e) => {
  e.onclick = () => anadirNumero(e.dataset.value);
});

operaciones.forEach((e) => {
  e.onclick = () => operacionHandler(e.dataset.operacion);
});
