const myArray: number[] = [1, 4, 6, 8, 9];
//Forma simple de usar en for
for (const value of myArray) {
    console.log(value + 10);
}
//Cualquier cambio que hagamos en myArray afaectara a myArrayRef; y viceversa
const myArrayRef = myArray;
//Copia valor del array a uno nuevo, solo considerando el primer nivel, es decir si hubieran objetos dentro del array no lo consideraria
const myArrayNewGeneral = [...myArray];
//Recomendada: Copia valor del array a uno nuevo, considerando todos los niveles, es decir si hubieran objetos y dentro del mismo mas objetos dentro del array los consideraria
const myArrayNewRecomendada = structuredClone(myArray);
myArrayRef.push(7);
console.log(myArray);
console.log(myArrayRef);
console.log(myArrayNewGeneral);
console.log(myArrayNewRecomendada);
