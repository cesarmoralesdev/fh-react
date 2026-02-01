import type { UserGreet } from "./interface/UserGreet";

function greet(name: string): string {
    return `Hola ${name}`;
}
//Ejemplo de return explicito
const greet2 = (name: string): string => `Hola ${name}`;
const message: string = greet('Goku');
const message2: string = greet2('Vegeta');
console.log(message);
console.log(message2);

function getUsers() {
    return {
        uid: 'test123',
        username: 'tester1',
    };
}
//Ejemplo de return explicito
const getUsers2 = (): UserGreet => ({
    uid: 'test123',
    username: 'tester1',
});

const user = getUsers();
const user2 = getUsers2();
console.log(user);
console.log(user2);

const myNumbers: number[] = [1, 2, 3, 4, 5, 6];

// myNumbers.forEach(function (value) {
//     console.log({value});
// });
// myNumbers.forEach((value) => {
//     console.log({value});
// });
// myNumbers.forEach(console.log);
myNumbers.forEach((value, index, array) => console.log(value, index, array));

