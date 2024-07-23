//Escribe un código en el cual dado un arreglo , muestre en consola el arreglo original y el
//mismo pero invertido.
//Ejemplo arreglo original: [23,5,34,56,98,”cadena”,7] el arreglo invertido:
//[7,”cadena”,98,56,34,5,23].

// para este ejercicio se modifico los valores del ejemplo otorgado

function invertirArray(array) {
    const invertedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        invertedArray.push(array[i]);
    }
    return invertedArray;
}

const arrayOriginal = [30, 8, 50, 73, 101, "cadena", 9];
const arrayInvertido = invertirArray(arrayOriginal);

console.log("Array original:", arrayOriginal);
console.log("Array invertido:", arrayInvertido);
