const useState = (data:string) => {
    return [data, (message:string) => console.log(message)] as const;
}

const [name,setName] = useState('Goku');
console.log(name);
setName('Vegeta');

