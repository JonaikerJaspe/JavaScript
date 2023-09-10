//TRANSFORMADORES DE ARRAYS

//pop() elimina el ultimo de el arrays
//shift() elimina el primero de el arrays
//push()Agrega un elemento o varios elementos al final de el arrays
//reverse() invierte el orden de los elementos de un array
//unshift() agrega uno o mas elementos al inicio del array y devuelve la nueva longitud del array
//sort() ordenas los elementos de un (Array) localmente y devuelve el arreglo ordenado
//splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos

//METODOS ACCESORES DE UN ARRAYS
//join() unr todos los elementos de un matriz (u objeto similar ) en una cadena y la devuelve
//slice() devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido)

let nombre = [
  "papedi",
  "rusell",
  "jonaiker",
  "oscar",
  "almando",
  "amaya",
  "duvely00",
];

let resultado = nombre.filter((nombre) => nombre.length > 6);

document.write(resultado);
