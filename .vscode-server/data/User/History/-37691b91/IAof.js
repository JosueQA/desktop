var inventario = [
       {
        nombre: 'tenedor',
        cantidad: 6
       },
      {
        nombre: 'cuchara',
        cantidad: 4,
      },
     ]

function checkInventario(inventario, item) {
    // La funcion 'checkInventario' recibe como argumento un array de objetos llamado 'inventario' y el nombre de un item llamado 'item'
    // Cada objeto tiene una propiedad 'nombre' y 'cantidad'.
    // La funcion debe devolver la cantidad de items que hay.
    // Si el item no existe la funcion tiene que devolver 0 (cero).
    // Ej:
    // 
    // checkInventario(inventario, 'tenedor') devuelve => 6
  
    // Tu código aca:
    let productoNoEncontrado = true;
  
    inventario.map(elemento => {
        if (item === elemento.nombre){
            productoNoEncontrado = false;
            console.log(elemento.cantidad) ;
        }})
    
    if(productoNoEncontrado == true){
        console.log(0) 
    }
  }

checkInventario(inventario, 'tenedor')