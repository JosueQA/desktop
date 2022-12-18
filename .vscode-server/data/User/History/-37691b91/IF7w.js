const arr= [[['manzana', 'naranja'],['sandia', 'pera'],['uva', 'manzana']], 'manzana']

cuantosRepetidos(arr, arr[1])

function cuantosRepetidos(array, elemento) {
    // La funcion llamada 'cuantosRepetidos' recibe como argumento un array de arrays llamado 'array' y un string llamado 'elemento'
    // Cada subarray contiene strings.
    // Debe devolver la cantidad de veces que 'elemento' se repite dentro de los subarrays.
    // Ej:
    // cuantosRepetidos([['manzana', 'naranja'],['sandia', 'pera'],['uva', 'manzana']], 'manzana') debe retornar 2
    // ya que 'manzana' se repite 2 veces.
    // Nota: Podes usar for loops anidados.
  
    // Tu código aca:
    const elementoRepetir = array.pop();
    console.log(elemento)
  }