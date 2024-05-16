// Escribe un programa que pida al usuario su año de nacimiento
//  y nombre e imprime su edad actual en la consola con la frase Hola X, grandioso!
//   Tienes X años. Asume que el año actual es 2020 y el usuario ingresa 2000, 
//   el programa debe imprimir en la
//  consola: Hola Juan, grandioso! Tienes 20 años
const nombre = prompt("ingresa tu nombre");
const anioNacimiento = Number( prompt (nombre + "ingresa tu año de nacimiento"));
const anioactual = 2020;

const edad = anioactual - anioNacimiento

console.log( "hola," + nombre + ",grandioso tienes," + edad + "años,");