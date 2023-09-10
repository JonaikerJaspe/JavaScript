// const obtenerInformacion = (materia) => {
//   materias = {
//     fisica: ["Raul", "pedro", "maria", "randy", "lulu", "doku"],
//     programacion: ["Lopez", "pedro", "maria", "randy"],
//     logica: ["Rusell", "pedro", "randy", "lulu", "doku"],
//     redes: ["Luis", "maria", "lulu", "doku"],
//   };

//   if (materias[materia] !== undefined) {
//     return [materias[materia], materia, materias];
//   } else {
//     return materias;
//   }
// };

// const mostrarInformacion = (materia) => {
//   let informacion = obtenerInformacion(materia);

//   if (informacion !== false) {
//     let profesor = informacion[0][0];
//     alumnos = informacion[0];
//     alumnos.shift();
//     document.write(
//       `El profesor de  <b>${informacion[1]}</b> es: <b style="color:blue">${profesor}</b><br>
//     Los alumnos son: <b style="color:red">${alumnos}</b><br><br>
//     `
//     );
//   }
// };

// const cantidaDeClases = (alumno) => {
//   let informacion = obtenerInformacion();
//   let clasesPresentes = [];
//   let cantidaTotal = 0;

//   for (info in informacion) {
//     if (informacion[info].includes(alumno)) {
//       cantidaTotal++;
//       clasesPresentes.push(" " + info);
//     }
//   }

//   return `<b style="color:pink"> ${alumno}</b> esta en <b>${cantidaTotal} clases: <b style="color:green"> ${clasesPresentes}</b> <br><br>`;
// };

// mostrarInformacion("fisica");
// mostrarInformacion("programacion");
// mostrarInformacion("logica");
// mostrarInformacion("redes");

// document.write(cantidaDeClases("pedro"));
// document.write(cantidaDeClases("lulu"));

materias = {
  fisica: ["Raul", "pedro", "maria", "randy", "lulu", "doku"],
  programacion: ["Lopez", "pedro", "maria", "randy"],
  logica: ["Rusell", "pedro", "randy", "lulu", "doku"],
  redes: ["Luis", "maria", "lulu", "doku"],
};
