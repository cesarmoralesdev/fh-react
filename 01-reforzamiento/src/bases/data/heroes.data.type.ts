interface HeroeDataItem {
    id: number,
    name: string,
    owner: Owner,
}
//El type solo es una regla que nos proporciona TypeScript
//No genera codigo al adicional al transpilarlo a JS
type Owner = 'DC' | 'Marvel';

const heroesType: HeroeDataItem[] = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC',
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel',
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC',
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC',
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel',
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
export default heroesType;
