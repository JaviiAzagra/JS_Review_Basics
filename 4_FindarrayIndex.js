/* Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y 
devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. 
Haz varios ejemplos y compruebalos. */

const cars = ["BMW", "Audi", "Mercedes-AMG", "Ferrari"];
const peripheral = ["Teclado", "Raton", "Pantalla", "Microfono"];
const animals = ["Caracol", "Mosquito", "Salamandra", "Ajolote"]

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
      if (text === array[i]) {
        return i;
      }
    }
}

/* function findArrayIndex(array, text) {
    return array.indexOf(text);
}*/

console.log(findArrayIndex(cars, "BMW"));

console.log(findArrayIndex(peripheral, "Pantalla"));

console.log(findArrayIndex(animals, "Mosquito"));