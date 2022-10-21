/* Crea una función llamada swap() que reciba un array y dos parametros que sean indices del array. 
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. 
Retorna el array resultante. */

const players = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swab (array, index1, index2) {
    let valor1 = array[index1];
    let valor2 = array[index2];
    array.splice(index2,1,valor1);
    array.splice(index1,1,valor2);
return (array);  
}

console.log(swab(players, 0, 1));
