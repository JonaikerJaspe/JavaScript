// const materias = {
//   fisica: [90, 9, 3, "fisica"],
//   logica: [54, 7, 8, "logica"],
//   quimica: [89, 7, 3, "quimica"],
//   programacion: [90, 9, 6, "programacion"],
//   bbdd: [69, 9, 3, "bbdd"],
//   ingles: [90, 4, 3, "ingles"],
//   metodos: [90, 7, 3, "metodos"],
//   redes: [100, 10, 8, "redes"],
// };

// const aprobo = () => {
//   for (materia in materias) {
//     let asistencias = materias[materia][0];
//     let promedio = materias[materia][1];
//     let trabajos = materias[materia][2];
//     console.log(materias[materia][3]);
//     if (asistencias >= 90) {
//       console.log("%c    Aprobado", "color:green");
//     } else {
//       console.log("%c    Desaprobado", "color:red");
//     }
//     if (promedio >= 7) {
//       console.log("%c    promedio en orden", "color:green");
//     } else {
//       console.log("%c    promedio desaprobado", "color:red");
//     }
//     if (trabajos >= 3) {
//       console.log("%c    trabajos practicos en orden", "color:green");
//     } else {
//       console.log("%c    Faltan trabajos practicos", "color:red");
//     }
//   }
// };

// aprobo();
let trabajo = "240 minutos de trabajo ";
let estudio = "100 minutos de estudio";
let tp = "100 minutos de tp";
let homework = "30 minutos de homework";
let descanso = "10 minutos de descanso ";

console.log("Tareas");
for (var i = 0; i < 14; i++) {
  if (i == 0) {
    console.group("semana 1");
  }
  console.groupCollapsed("dia  " + (i + 1));
  console.log(trabajo);
  console.log(descanso);
  console.log(estudio);
  console.log(tp);
  console.log(homework);
  console.groupEnd();
  if (i == 6) {
    console.groupEnd();
    console.groupCollapsed("Semana 2");
  }
}

console.groupEnd();
console.groupEnd();
