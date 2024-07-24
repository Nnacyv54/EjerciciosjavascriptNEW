/*Clase persona con propiedades nombre, apellido y edad
1.1. Crea el método getDetalles() el cual imprimirá en consola los atributos de la
persona.
1.2. El constructor recibe y asigna nombre, apellido y edad a los atributos internos.
2. La clase jugador hereda de persona e incluye la propiedad de posición
2.1. sobreescribir el método getDetalles() para que muestre en consola los detalles
de persona y los de jugador.
2.2. El constructor recibe y asigna posición a los atributos internos.
3. Clase entrenador hereda de persona y agrega años de experiencia y el id de
federación
3.1. Sobreescribir el método getDetalles() para que muestre en consola los detalles
de persona y entrenador.
_______________________________________________________________________________________________
_______________________________________________________________________________________________
3.2. El constructor recibe y asigna posición a los atributos internos.
3.3. En el constructor configurar para que si no se recibe un id de federación este
asigne un número aleatorio de 5 dígitos
4. Clase equipo tiene las propiedades de entrenador y jugadores
4.1. El constructor recibe el objeto de director y un arreglo con los jugadores que
pertenecen al equipo (con 3 o 4 jugadores como ejemplo está bien)
4.2. el método getDetalles() mostrar en consola los detalles del entrenador y de los
jugadores.
5. ¡Probemos!
5.1. crea un arreglo de 4 jugadores con diferentes nombres, edades y posición
(Portero, Defensa , Medio y Delantero).
5.2. crea un objeto de tipo entrenador con su nombre, edad y años de experiencia
5.3. crea un equipo con los objetos de entrenador y estudiantes demostrando el
funcionamiento de jerarquía.*/

class Persona {
    constructor (nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getDetalles() {
        console.log(`Nombre: ${this.nombre} ${this.apellido}`); // Imprime el nombre completo
        console.log(`Edad: ${this.edad} años`);
    }
}

class Jugador extends Persona {
    constructor (nombre, apellido, edad, posicion) {
        super(nombre, apellido, edad, posicion);
        this.posicion = posicion;
    }

    getDetalles() {
        super.getDetalles();
        console.log(`Posición: ${this.posicion}`); 
    }
}

class Entrenador extends Persona {
    constructor(nombre, apellido, edad, tiempoExperiencia, idFederacion) {
      super(nombre, apellido, edad);
      this.tiempoExperiencia = tiempoExperiencia;
      if (idFederacion) {
        this.idFederacion = idFederacion;
      } else {
        this.idFederacion = Math.floor(Math.random() * 10000) + 10000;
      }
    }   

    get Detalles() {
        super.getDetalles();
        console.log(`tiempo de experiencia: ${this.Experiencia}`);
        console.log(`ID de federación: ${this.idFederacion}`);
    }
}

class Equipo {
    constructor ( entrenador, jugadores) {
        this.entrenador = entrenador;
        this.jugadores = jugadores;
    }

    getDetalles(){
        console.log("**Detalles del Equipo**");
        console.log("Entrenador:");
        this.entrenador.getDetalles();
        console.log("Jugadores:");
        for (const jugador of this.jugadores){
            jugador.getDetalles();
        }
    }
}

//Jugadores

const jugador1 = new Jugador("Ana", "Lopez", 19, "Delantero");
const jugador2 = new Jugador("Tomas", "Lara", 18, "Defensa");
const jugador3 = new Jugador("Byron", "Rosero", 29, "Medio");
const jugador4 = new Jugador("Luis", "Martin", 20, "Delantero");

// Entrenador
const entrenador = new Entrenador("Pedro", "Casanova", 45, 10, 12345);

// Equipo
const equipo = new Equipo(entrenador, [jugador1, jugador2, jugador3, jugador4]);


equipo.getDetalles();
