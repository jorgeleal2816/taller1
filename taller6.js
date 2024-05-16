// scribe un programa que le pida al usuario una frase y un número. 
// El programa debe imprimir la frase en la consola el número de veces que 
// ingresó el usuario. Por ejemplo, si el usuario ingresó la frase Hola Mundo y 
// el número 5,
//  el programa debe imprimir Hola Mundo 5 veces:
const frace = prompt ("ingresa una frace")
const repeticiones =  Number(prompt ("ingrese un numero"))
for(let i = 1; i <= repeticiones ; i++){
    console.log (frace); }