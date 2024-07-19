//.- Random par o impar(10 ptos).
//Generar un código el cual genere 5 números aleatorios(Math.random()*100) enteros y
//devuelva si el número generado es par o impar.
//Ejemplo:
//Primera iteración: numeroGenerado = 5 // el número es impar
//Segunda iteración: numeroGenerado = 12 // el número es par

for (let i = 0; i < 5; i++) {
    const numeroGenerado = Math.floor(Math.random () * 101); //generando numero aleatorio entero
    if (numeroGenerado % 2 === 0) {
        console.log(numeroGenerado + " es par");
    } else {
        console.log(numeroGenerado + " es impar");
    }
}