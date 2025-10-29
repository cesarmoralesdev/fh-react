
// Variables y Constantes

const nombre = 'Fernando';
const apellido = 'Herrera';

let valorDado = 5;
valorDado = 4;

console.log( nombre, apellido, valorDado )

// var No se debe de usar...
if ( true ) {
    //Esta variable nombre es distinta a la de afuera por el ambito 
    const nombre = 'Peter';
    console.log(nombre)
}

console.log( valorDado );

