function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  const Suma= resultadosTest.reduce((acumulador, nota) => acumulador + nota, 0);
  const promedio = Suma / resultadosTest.length; 
  return promedio;
}

module.exports = promedioResultadosTest;
