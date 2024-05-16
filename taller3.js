// Escribe un programa que le pida al usuario un número e
//  imprima si es un múltiplo de 5 o no.

// Si es múltiplo debe imprimir Si, el número x es múltiplo 5, de lo contrario debe
//  imprimir No, 
// el número x no es múltiplo de 5.
const numero = Number( prompt("ingresa un numero"));
const esMultiploDe5 = numero % 5 === 0;

if ( esMultiploDe5){
    console.log("el numero" + numero + "es multiplo de 5")
}
else{
    console.log("no. el numero"+ numero +  "no es multiplo de 5" )
}