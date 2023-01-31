// ************** PROTOTIPOS - NO SON CLASES **************

let Mamifero = {
  genero: "indefinido",
  respirar: () => {
    return "Estoy respirando";
  },
  reproducir: () => {
    return "Estoy reproduciéndome";
  },
  silvar: () => {
    return "estoy silvando";
  },
};

// objeto Perro hereda del prototipo Mamifero
let Perro = Object.create(Mamifero);
Perro.genero = "macho";

Perro.ladrar = function () {
  return "Guau guau!";
};

Perro.silvar = function () {
  return "soy un perro que silva";
};



// MAPAS U OBJETOS
const mapa = new Map();
mapa.set(obj2, "Luke");
mapa.set("lastName", "Skywalker");
mapa.set("occupation", "Jedi Knight");
console.log(mapa);

// const obj = {
//   obj2: "carlos",
//   apellido : "torres",
//   ocupacion: "vago"
// }
// console.log(obj);

const lista = ["jhon", "morales", 21, "programador"];
const [nombre, apellido, edad, ocupacion] = lista;
console.log(nombre, apellido, edad, ocupacion);


const hola35 = 55 || 0;