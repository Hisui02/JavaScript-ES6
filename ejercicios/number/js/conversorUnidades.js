const pantalla = document.getElementById("pantalla");

const B16 = document.getElementById("B16");
const B8 = document.getElementById("B8");
const B2 = document.getElementById("B2");

const botones = [...document.getElementsByTagName("button")];
const botonesBases = [...document.getElementsByClassName("base")];

const apagarBotones = () => {
  botonesBases.forEach((e) => {
    e.disabled = true;
  });
};

const encenderBotones = () => {
  botonesBases.forEach((e) => {
    e.disabled = false;
  });
};

const limpiarPantalla = () => {
  pantalla.value = "";
  pantalla.disabled = false;
  encenderBotones();
};

const pintarValor = (valor) => {
  pantalla.value = valor;
  pantalla.disabled = true;
};

const calcularResultado = (base) => {
  const valor = pantalla.value;
  const numero = Number.parseInt(valor, "10");
  if (!Number.isInteger(numero)) return;

  const resultado = numero.toString(base.substring(1));
  apagarBotones();
  pintarValor(resultado);
};

const buttonHandler = (id) => {
  switch (id) {
    case "clear":
      limpiarPantalla();
      break;
    case "B2":
      calcularResultado(id);
      break;
    case "B8":
      calcularResultado(id);
      break;
    case "B16":
      calcularResultado(id);
      break;
  }
};

botones.forEach((element) => {
  element.onclick = () => buttonHandler(element.id);
});
