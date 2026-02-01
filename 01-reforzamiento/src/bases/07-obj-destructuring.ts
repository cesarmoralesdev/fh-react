const person = {
    name: 'Cesar',
    age: 34,
    key: 'Ironman',
}
const { name: ironmanName, age, key } = person;
console.log({ ironmanName, age, key });

interface Hero {
    name: string,
    age: number,
    key: string,
    rank?: string,
}

const useContext = ({ name, age, key, rank }: Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age
        },
        rank,
    };
}
const { 
    keyName, 
    rank, 
    user
    // user: { name }   //No recomendado porque no es tan facil de leer
} = useContext(person);
const {name} = user;
console.log(keyName, rank, name);


