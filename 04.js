/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  let array = num.toString().split('');
  let lng = array.length;
  let str1 = '', str2 = '';

  if (lng % 0) { //Si la cantidad de numeros es par:
    for (let i = 0; i < lng; i++) {
      if (i < lng/2) str1 += array[i];
      else str2 += array[i];
    }
  } else { //Si la cantidad de numeros es impar:
    for (let i = 0; i < lng; i++) {
      switch (i) {
        case (i < Math.ceil(lng/2)):
          str1 += array[i];
          break;
        case (i > Math.ceil(lng/2)):
          str2 += array[i];
          break;
        default: //En el caso que sea el numero del medio:
          str1 += array[i];
          str2 += array[i];
          break;
  }}}

  str2 = str2.split('').reverse().join('');
  return (str1 == str2);
}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico