    // Crear una clase para construir objeto de tipo Persona.
    // el constructor debe recibir:
    // nombre (string) , edad (integer) , hobbies (array de strings) , amigos (array de objetos)
    class Persona {
      constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.hobbies = []; 
        this.amigos = [];
      }
      
      addFriend(nombre, edad) {
        // el metodo addFriend recibe un string nombre y un entero edad y debe agregar un objeto:
        // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
        // no debe retornar nada.
        this.amigos.push({nombre: nombre, edad: edad});
      }
  
      addHobby(hobby) {
        // este método debe agregar un hobby (hobby) al arreglo de hobbies de la persona.
        // no debe retornar nada.
        this.hobbies.push(hobby);
      }
      getFriends() {
        // Escribe una función que retorne un arreglo con sólo los nombres del arreglo de amigos
        // de la persona.
        // Ej:
        // persona.getFriends() // retorna ['toni', 'Leo', 'Manu']
        let friendsName = []
        this.amigos.map(nombres => {
            friendsName.push(nombres.nombre)
        })

        return friendsName;
      }
  
      getHobbies() {
        // Escribe una función que retorne un arreglo con los hobbies de la persona
        // Ej:
        // persona.getHobbies() // retorna ['correr', 'dormir', 'nadar']
        return this.hobbies;
      }
  
      getPromedioEdad() {
        // Escribe una función que retorne el promedio de edad de los amigos de una persona
        // ej, si la persona tuviera estos amigos:
        // {
        //   amigos: [{
        //     nombre: 'toni',
        //     edad: 33,
        //   }, {
        //     nombre: 'Emi',
        //     edad: 25
        //   }]
        // }
        // persona.getPromedioEdad() // retorna 29
  
        const arr2 = [33, 25]

        const promedio = arr2.reduce( (acumulador, item) => {
            return acumulador = acumulador + item } 
            )
        return promedio;
      }
  
    };

  const josue = new Persona('josue', 25);

  josue.addFriend('julito', 28);
  josue.addFriend('Andrés', 24);
  josue.addHobby('jugar');
  josue.addHobby('dormir');

console.log(josue.getFriends());
console.log(josue.amigos[0].edad);
console.log(josue.getHobbies())
console.log(josue.getPromedioEdad())