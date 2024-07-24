/*Diseñar un código que logre convertir caracteres a mayúsculas hasta encontrar un punto, solo
los caracteres previos al Primer punto el resto se quedan en minúsculas, muestra en consola el
antes y el después.*/

function convertiraMayusculas(texto) {
    let resultado = "";
    let convertiraMayusculas = true;

    for (let caracter of texto) {
        if (caracter === ".") {
            resultado += convertiraMayusculas? resultado.toUpperCase() : resultado;
            convertiraMayusculas = false; 
        }else if (convertiraMayusculas) {
         resultado += caracter.toUpperCase();
        }else {
            resultado += caracter;
        }
        
    }

    return resultado;

}

const textoOriginal = "primera palabra. segunda palabra con dos puntos.";
const textoCambiado = convertiraMayusculas (textoOriginal);

console.log("Texto original:", textoOriginal);
console.log("Texto cambiado:", textoCambiado);