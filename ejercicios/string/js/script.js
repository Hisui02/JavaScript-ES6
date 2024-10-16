const texto = document.getElementById("texto");

const botones = document.querySelectorAll(".botones button");

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
