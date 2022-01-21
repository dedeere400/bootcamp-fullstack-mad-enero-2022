// 1. Crear una página web que imprima por pantalla los primeros 10 números, 
// utilizando un bucle for.
//Modificarlo para que imprima los primeros 100. Crear una nueva versión
// utilizando un bucle while.

// let i = prompt('Imprimir los primeros 10 numeros');
// let save = i;
// for (i = 1; i <= 10; i = i + 1) {
//     document.write(i);
// }
// document.write("<br>");
// i = 0;
// while (i <= 100) {
//     document.write(`<p>Los primeros 100 numeros: ${i}`);
//     i++;
// }

// EJERCICO 2

// Crear una página web que cree 100 divs de color #F47732. Modificar el ejercicio para 
// que los divs pares se sean de color #F47732 y los impares #1148F3. Modificar para que se 
// muestren sobre un contenedor flex. Podéis utilizar cualquier tipo de bucle.



for (let i = 1; i <= 100; i++) {
    document.write('<div class="boxes"></div>');
}