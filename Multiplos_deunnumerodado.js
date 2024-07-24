//Escribir el código que muestre en consola los múltiplos de un número entero
//dado(definido en una variable para ser manipulado) en una secuencia del 1 al 100.
//Ejemplo si el número dado es 3 sus múltiplos serían 3,6,9,12,15…..21, etc.


function indicarMultiplos(numero) {
    for (let i = 1; i <= 100; i++){
        if (i % numero === 0) {
            console.log(i);
        }
    }
}


let numeroDado = promt("Ingrese un numero entero:");

numeroDado = parseInt(numeroDado);

mostrarMultiplos(numeroDado);

