const texto = document.getElementById("texto");

const botones = document.querySelectorAll("#funcionesConversion button");

const aleatorio = document.getElementById("aleatorio");
const inputSelector = document.getElementById("inputSelector");
const velocidadActual = document.getElementById("velocidadActual");

const botonConsejoAleatorio = document.getElementById("getConsejo");
botonConsejoAleatorio.addEventListener("click", () => {
  getConsejo(texto);
});

let velocidad = 3;
let intervaloOn = false;
let idIntervalo = null;

aleatorio.addEventListener("click", () => {
  if (!intervaloOn) {
    intervaloOn = true;
    const ms = velocidad * 1000;
    inputSelector.disabled = true;

    idIntervalo = setInterval(() => {
      const numeroRandom = Math.floor(Math.random() * botones.length);
      botones[numeroRandom].click();
    }, ms);
  } else {
    intervaloOn = false;
    inputSelector.disabled = false;
    clearInterval(idIntervalo);
  }
  const estadoBoton = aleatorio.lastChild;
  estadoBoton.innerText = intervaloOn ? "ON" : "OFF";
  estadoBoton.style.color = intervaloOn ? "red" : "black";
});

inputSelector.addEventListener("change", (e) => {
  velocidad = e.target.value;
  velocidadActual.innerText = `${e.target.value} s.`;
});

const functionsHandler = (id) => {
  switch (id) {
    case "todoMayus":
      texto.value = todoMayus(texto.value);
      break;
    case "todoMinus":
      texto.value = todoMinus(texto.value);
      break;
    case "primeraMayus":
      texto.value = primeraMayus(texto.value);
      break;
    case "ultimaMayus":
      texto.value = ultimaMayus(texto.value);
      break;
    case "primeraMinus":
      texto.value = primeraMinus(texto.value);
      break;
    case "ultimaMinus":
      texto.value = ultimaMinus(texto.value);
      break;
    case "vocalesMayus":
      texto.value = vocalesMayus(texto.value);
      break;
    case "vocalesMinus":
      texto.value = vocalesMinus(texto.value);
      break;
    case "consonantesMayus":
      texto.value = consonantesMayus(texto.value);
      break;
    case "consonantesMinus":
      texto.value = consonantesMinus(texto.value);
      break;
  }
};

botones.forEach((b) => {
  b.addEventListener("click", () => {
    functionsHandler(b.id);
  });
});
