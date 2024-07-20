//Diseña un código en el cual se pueda ingresar una cadena de texto y regrese cuantas
//veces se repite un carácter dado en dicha cadena de texto.
//Ejemplo la cadena dada es “hola como estas” y el carácter dado para saber cuantas veces
//se repite es “o” entonces la consola debería de mostrar: el carácter “o” se repite 3 veces en
//“hola como estas”.

function contarRepeticiones(cadena, caracter){
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter) {
            contador++;
        }
    }
    return contador;
}

//solicitud de cadena de texto
let cadenaText = prompt("Ingrese una cadena de texto:");

//caracter a ser buscado
let caracterAbuscar = prompt("Ingrese un caracter para buscar:");

//contar las repeticiones el caracter dado
const repeticiones = contarRepeticiones(cadenaText, caracterAbuscar);

//indicar el resultado
console.log(`El carácter "${caracterABuscar}" se repite ${repeticiones} veces en "${cadenaTexto}".`);