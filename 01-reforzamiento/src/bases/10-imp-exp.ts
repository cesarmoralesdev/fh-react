import { heroes, Owner, type HeroeDataItem } from "./data/heroes.data.enum"
//con la forma de abajo podemos podemos ponerle un alias a la importacion
// import { heroes as prueba } from "./data/heroes.data.enum"
//con la forma de abajo no es necesario que pongamos heroesType, lo importante es la ruta.
// import heroesTypeExample from "./data/heroes.data.type"


const getHeroById = (id : number): HeroeDataItem | undefined =>{
    const heroe = heroes.find( (hero : HeroeDataItem) => {
        return hero.id === id;
    });
    // if (!heroe) {
    //     throw new Error(`No existe el heroe con el id ${id}`);
    // }
    return heroe;
}

// console.log(getHeroById(32));

export const getHeroesByOwner = (owner : Owner): HeroeDataItem[] => {
    const heroeList = heroes.filter( (hero : HeroeDataItem) => {
        return hero.owner === owner;
    });
    return heroeList;
}
