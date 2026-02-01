//object            para renombrarlo ponemos el curso sobre el nombre de la variable y pulsamos f2 y ingresamos un texto para modificar su nombre
//spread            copia primer nivel
//structuredclone   copia todos los niveles

const iroman = {
    firstName: "Jose",
    lastName: "Orue",
    age: 33,
    address: {
        city: 'Lima',
        postalCode: 'TEST1'
    }
}

// Copia referencia de iroman, es decir si modificamos un valor del objeto iroman, tambien lo cambio en el objeto spiderman
// const spiderman = iroman;

// Copia objeto iroman solo en primer nivel, es decir si tenemos en primer nivel datos primitivos los copia, pero si tenemos datos tipo objeto
// No los copia solo copia la referencia
// const spiderman = {...iroman};

//Recomendada
//Copia objeto en todos los niveles, si importar si tienen propiedades tipo objeto
const spiderman = structuredClone(iroman);

spiderman.firstName = 'Luis';
spiderman.lastName = 'Odria';
spiderman.age = 44;
spiderman.address.city = 'Quito';
spiderman.address.postalCode = 'Prueba333';

console.log(iroman, spiderman);
