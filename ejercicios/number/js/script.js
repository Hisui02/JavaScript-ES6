const selectorTipo = document.getElementById("tipo");

selectorTipo.onchange = () => {
  const seleccionado = selectorTipo.options[selectorTipo.selectedIndex].value;
  console.log(seleccionado);
  switch (seleccionado) {
    case "1":
      document.location.href = "./miniCalculadora.html";
      break;
    case "2":
      document.location.href = "./conversorUnidades.html";
      break;
  }
};
