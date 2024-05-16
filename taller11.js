// Completa el siguiente programa e imprime la cantidad de unos (1)
//  que haya en el arreglo:
const numeros = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ];
let unos = 0
for(let numero of numeros){
    // console.log(numero)
    if(numero == 1){ 
        unos++;
         }
}
console.log(unos);

