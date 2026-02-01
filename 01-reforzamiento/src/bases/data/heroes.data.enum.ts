export interface HeroeDataItem {
    id: number,
    name: string,
    owner: Owner,
}
//Crean objetos literales que agregar codigo cuando se transpila a JS, por ende puede pesar un poco mas
export enum Owner {
    DC = 'DC',          //El valor por defecto si no le asignamos valor que tendra es 0
    Marvel = 'Marvel'   //El valor por defecto si no le asignamos valor que tendra es 1
}
export const heroes: HeroeDataItem[] = [
    {
        id: 1,
        name: 'Batman',
        owner: Owner.DC,
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: Owner.Marvel,
    },
    {
        id: 3,
        name: 'Superman',
        owner: Owner.DC,
    },
    {
        id: 4,
        name: 'Flash',
        owner: Owner.DC,
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: Owner.Marvel,
    },
];
// //Muestra error porque la interface solo admite id como number
// heroes.push(
//     {
//         id: "6",
//         name: 'Wolverine',
//         owner: 'Marvel',
//     }
// );
// //Muestra error porque la interface solo admite owner con los valores DC o Marvel, es mas, estos valores aparece como seleccionables con el autocompletar
// heroes.push(
//     {
//         id: 6,
//         name: 'Wolverine',
//         owner: 'Marvel2',
//     }
// );
// console.log(heroes);
