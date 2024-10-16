function esVocal(caracter) {
  const vocales = "aeiouAEIOU";
  return vocales.includes(caracter);
}

function esConsonante(caracter) {
  const consonantes = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  return consonantes.includes(caracter);
}

const todoMayus = (texto) => {
  return texto.toUpperCase();
};

const todoMinus = (texto) => {
  return texto.toLowerCase();
};

const primeraMayus = (texto) => {
  const palabras = texto.split(" ");
  const salida = [];
  palabras.forEach((p) => {
    salida.push(p.charAt(0).toUpperCase() + p.slice(1, p.length));
  });
  return salida.join(" ");
};

const ultimaMayus = (texto) => {
  const palabras = texto.split(" ");
  const salida = [];
  palabras.forEach((p) => {
    salida.push(
      p.slice(0, p.length - 1) + p.charAt(p.length - 1).toUpperCase()
    );
  });
  return salida.join(" ");
};

const primeraMinus = (texto) => {
  const palabras = texto.split(" ");
  const salida = [];
  palabras.forEach((p) => {
    salida.push(p.charAt(0).toLowerCase() + p.slice(1, p.length));
  });
  return salida.join(" ");
};

const ultimaMinus = (texto) => {
  const palabras = texto.split(" ");
  const salida = [];
  palabras.forEach((p) => {
    salida.push(
      p.slice(0, p.length - 1) + p.charAt(p.length - 1).toLowerCase()
    );
  });
  return salida.join(" ");
};

const vocalesMayus = (texto) => {
  const caracteres = texto.split("");
  const salida = [];

  caracteres.forEach((c) => {
    salida.push(esVocal(c) ? c.toUpperCase() : c);
  });

  return salida.join("");
};
const vocalesMinus = (texto) => {
  const caracteres = texto.split("");
  const salida = [];

  caracteres.forEach((c) => {
    salida.push(esVocal(c) ? c.toLowerCase() : c);
  });

  return salida.join("");
};

const consonantesMayus = (texto) => {
  const caracteres = texto.split("");
  const salida = [];

  caracteres.forEach((c) => {
    salida.push(esConsonante(c) ? c.toUpperCase() : c);
  });

  return salida.join("");
};

const consonantesMinus = (texto) => {
  const caracteres = texto.split("");
  const salida = [];

  caracteres.forEach((c) => {
    salida.push(esConsonante(c) ? c.toLowerCase() : c);
  });

  return salida.join("");
};
