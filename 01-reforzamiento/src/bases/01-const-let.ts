// const firstName: string = 'Tony';
// const lastName: string = 'Stark';
// console.log({ firstName, lastName });

import { Heroe } from "./clases/Heroe";

const person1: Heroe = new Heroe("Cesar", "Morales");
console.log({ firstName: person1.getFirstName(), lastName: person1.getLastName()});
