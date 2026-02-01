const characterNames = ['Goku', 'Vegeta', 'Trunks'];

// const [p1, p2, p3] = characterNames;
// console.log({ p1, p2, p3 });

const [,, p3] = characterNames;
console.log({ p3 });

const returnsArrayFn = () => {
    return ["ABC", 123  ] as const;
}


const [letters, numbers] = returnsArrayFn();
console.log(letters + 100);
console.log(numbers + 100);


