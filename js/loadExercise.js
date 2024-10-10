const loadExercise = (exercise) => {
  const main = document.getElementById("mainContent");
  switch (exercise) {
    case "number":
      main.innerHTML =
        '\
        <div class="card">\
            <h3>Mini Calculadora</h3>\
            <div class="card-body">\
                <span>Calculadora de cambios de base</span>\
            </div>\
            <div class="card-footer">\
                <a href="./ejercicios/number/miniCalculadora.html">>>Solución</a>\
            </div>\
        </div>';
      break;

    default:
      break;
  }
};
