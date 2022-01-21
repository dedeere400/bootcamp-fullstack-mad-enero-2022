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

    if (i % 2 === 0) {
        document.write('<div class="box-par"></div>')
    } else {
        document.write('<div class="box-impar"></div>')
    }

}

/*let a = 4;
let isOdd = a % 2 === 1;
if (isOdd) {
document.write("IMPAR");
} else {
document.write("PAR"); 
}
*/
// Crear una página web que pinte por pantalla separado por comas las primeras 100 potencias de dos. 
// Ejemplo: 1,2,4,8,16,32,64,...


//             ej3                    

for (let i = 0; i <= 100; i++) {
    document.write(`${i ** 2}, `)
};

//                     ej4
//Crear una página web que solicite al usuario una palabra y muestre un p con el número de 
// vocales que hay.

let word = prompt('Introduzca una palabra');
let contador = 0;

for (i = 0; i <= word.length; i++) {
    if (word.charAt(i) === 'a') {
        contador++;
    } else if (word.charAt(i) === 'e') {
        contador++
    } else if (word.charAt(i) === 'o') {
        contador++
    } else if (word.charAt(i) === 'i') {
        contador++
    } else if (word.charAt(i) === 'u') {
        contador++
    }
}
document.write(`<p>El numero de vocales son ${contador}</p>`);

//                     ej5
// no lo he mirado