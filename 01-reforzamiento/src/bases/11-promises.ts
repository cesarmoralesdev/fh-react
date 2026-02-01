const myPromise = new Promise<number>((resolve, reject) => {
    try {
        //Descomentar para probar reject
        // const prueba = 1
        // prueba=2;
        setTimeout(() => {
            const money = 100;          
            money < 100 ? reject("Mi amigo no me devolvio todo el dinero") : resolve(money);
        }, 2000);
    } catch (error) {
        reject("Mi amigo se perdio.");
    }
});
myPromise
.then(myMoney => console.log(`Tengo mi dinero ${myMoney}`))
.catch(error => console.warn(error))
.finally(() => console.log("Aseguir adelante."))
