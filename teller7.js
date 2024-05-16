// Escribe un programa para la consola que le pida al usuario dos números e imprima 
// en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como 
// primer número y 10 como segundo número,
//  el programa debe imprimir:
const numero1 =  Number (prompt("ingrese el numero inicial"));
const numero2 =  Number (prompt("ingrese el numero final"));
for(let i = numero1; i <= numero2 ; i++){
    console.log(i);
}