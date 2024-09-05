function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var maxValor = array[0];
  var indMax = 0;

  for(var x = 1; x < array.length; x++){
  if ( array[x]>maxValor){
    maxValor = array[x];
    indMax = x; 
  }

  }
  return indMax;
}

module.exports = encontrarIndiceMayor;
