/**
 * Crear un programa en NodeJS que imprima por pantalla la versión del SO, la arquitectura, 
 * el nº de CPU's, la memoria libre, la ruta del directorio home y la lista de interfaces de red. 
 * De cada interfaz habrá que pintar nombre, dirección ipV4,  dirección ipv6 y dirección MAC. Hint: 
 * Toda la información se obtiene del módulo OS de NodeJS. Cuidado con los tipos de datos.
 *  1 imprima version OS
 *  2 ... la arquitectura
 *  3... el nº de CPU's
 *  4... la memoria libre
 *  5... la ruta del directorio home
 *  6... la lista de interfaces de red
 */
// Object.keys()
import os from 'os';
// import { ppid, pid } from 'process';



// setInterval(() => {
//     console.log(`hello world ejercicio ${ppid}, ${pid}`);
//     console.log(`Padre-- ${ppid}`);
//     console.log(`Hijo-- ${pid}`);
// }, 1000);

// setTimeout(() => {
//     console.log('parando el proceso');
//     process.exit();
// }, 3000);


// console.log(`La version OS es: ${os.version()}`);
// console.log(`La arquitectura es: ${os.arch()}`);
// console.log(`El nº de CPU's es: ${os.cpus().length}`);
// console.log(`La memoria libre es: ${os.freemem()}`);
// console.log(`La ruta del directorio es: ${os.homedir()}`);
// console.log(`La lista de interfaces de red es: ${os.networkInterfaces()}`);

// Object.keys(os.networkInterfaces()).map(e => console.log(os.networkInterfaces()[e]));
// console.log(Object.keys(os.networkInterfaces()));
// console.log(Object.keys(os.networkInterfaces()['WI-FI'][0]['family']));



// ejercicio 3
// import dns from 'dns'

// const options = {
//     family: 6,
//     hints: dns.ADDRCONFIG | dns.V4MAPPED,
// };
// dns.lookup('google.com', options, (err, address, family) =>
//     console.log(address, family));

// ejercicio 4
// import { argv } from 'process';

// let paramas = process.argv[3]
// console.log(paramas);


/** ej 5
Construir un programa en NodeJS, que reciba por parámetro el DNS y pinte por consola
la IPv4 y la IPv6 de ese DNS.
 */
// import dns from 'dns'

// let params = process.argv[2]
// const options4 = {
//     family: 4,
//     hints: dns.ADDRCONFIG | dns.V4MAPPED,
// };
// dns.lookup(`${params}`, options4, (err, address, family) =>
//     console.log(address, family));

// const options6 = {
//     family: 6,
//     hints: dns.ADDRCONFIG | dns.V4MAPPED,
// };
// dns.lookup(`${params}`, options6, (err, address, family) =>
//     console.log(address, family));


/**               ej 5
 * [Leyend] Construir un programa en NodeJS que reciba por parámetro o una IPv4 o un DNS y pinte 
 * por consola IPv4, IPv6 y DNS
 */

import path from 'path';
import math from 'math';
console.log(math.add(2, 4))
