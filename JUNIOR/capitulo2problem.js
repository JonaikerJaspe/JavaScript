let cantidad = prompt("cuantos Estudiantes Son ?");
let cantidadTotales = [];

for (i = 0; i < cantidad; i++) {
  cantidadTotales[i] = [prompt("Nombre del alumno " + (i + 1)), 0];
}

const tomarAsistencia = (nombre, p) => {
  let presencia = prompt(nombre);
  if (presencia == "p" || presencia == "P") {
    cantidadTotales[p][1]++;
  }
};

for (i = 0; i < 30; i++) {
  for (alumno in cantidadTotales) {
    tomarAsistencia(cantidadTotales[alumno][0], alumno);
  }
}

for (alumno in cantidadTotales) {
  let resultado = `${cantidadTotales[alumno][0]}:<br>
    ______________Presentes: ${cantidadTotales[alumno][1]} <br>
    ______________Ausencias: ${30 - cantidadTotales[alumno][1]}`;

  if (30 - cantidadTotales[alumno][1] > 18) {
    resultado +=
      " <b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>";
  } else {
    resultado += "<br><br>";
  }
  document.write(resultado);
}
