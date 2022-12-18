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
  let numeroAComprobar = num;

  const arr = [];
  while(numeroAComprobar > 0){
      arr.push(numeroAComprobar % 10);
      numeroAComprobar = parseInt(numeroAComprobar / 10);
  }
  let resultado = arr.join('');
  resultado = parseInt(resultado)

  if(num === resultado){
      console.log('true, el numero es simetrico')
  } else {
      console.log('false, el numero no es simetrico')
  }
}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico