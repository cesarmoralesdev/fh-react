import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
    blue: 'bg-blue-500 animate-pulse',
    reset: 'bg-gray-500 animate-pulse',
};

type TrafficLightColors = keyof typeof colors;

export const TrafficLightWithEffect = () => {
    const [light, setLight] = useState<TrafficLightColors>('red');
    const [counteDown, setCountdown] = useState(5);

    //Es mejor separar los useEffect en este caso, porque cada uno tiene una responsabilidad diferente
    // el primer useEffect es para manejar el conteo regresivo
    // el segundo useEffect es para manejar el cambio de color del semaforo, y el reinicio del conteo regresivo, si los juntamos en un solo useEffect, 
    // tendriamos que manejar ambas responsabilidades en un solo lugar, lo que puede hacer que el código sea mas difícil de entender y mantener
    // ademas de que si tenemos un error en ese useEffect, puede afectar ambas funcionalidades, mientras que si los separamos, 
    // si tenemos un error en el useEffect del conteo regresivo, no afectara el cambio de color del semaforo, y viceversa
    useEffect(() => {
        //Se ejecuta el effect cada vez que cambia el estado del countdown, por lo que cada vez que se actualiza el countdown, se ejecuta el effect, 
        //y se crea un nuevo intervalo, pero antes de crear el nuevo intervalo, se ejecuta la función de limpieza del effect anterior, 
        //Por lo que se limpia el intervalo anterior, evitando así que se creen múltiples intervalos al mismo tiempo        
        //Si ponemos mas tiempo, por ejemplo 5 segundos, se espera a que termine ese tiempo para que se desmonte el componente, y se limpie el intervalo
        console.log({counteDown});
        const intervalId = setInterval(() => {
            console.log("setInterval llamado");
            setCountdown(prev =>  prev - 1);
        }, 1000);
        
        //Cuando el componente se desmonta, o cuando el effect se vuelve a ejecutar, se ejecuta la función de limpieza, que en este caso es para limpiar el intervalo, para evitar que se siga ejecutando el setInterval cuando el componente ya no existe o cuando el effect se vuelva a ejecutar por el cambio de estado del countdown
        return () => {
            console.log("Cleanup effect");
            clearInterval(intervalId);    
        }
        
    }, [counteDown]);
    useEffect(() => {
        if(counteDown > 0) return;
        //Cuando llega a 0, ya no se ejecuta el effect, por ende el setInterval, por lo que se detiene el conteo regresivo y se cambia el estado del semaforo, y se reinicia el conteo regresivo a 5 segundos
        if (counteDown === 0){
            setLight(prev => {
                if (prev === 'red') return 'green';
                if (prev === 'green') return 'yellow';
                if (prev === 'yellow') return 'red';
                return prev;
            });
            setCountdown(5);
            return;
        };        
    }, [counteDown, light]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">
                <h1 className="text-white text-3xl font-thin">Semaforo con useEffect</h1>
                <h2 className="text-white text-2xl">{counteDown}</h2>

                <div className="w-64 bg-gray-700 rounded-full h-2">
                    <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
                        style={{ width: `${(5 - counteDown) * 20}%` }}>
                    </div>
                </div>

                <div className={`w-32 h-32 ${light === 'red' ? colors.red : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 ${light === 'yellow' ? colors.yellow : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 ${light === 'green' ? colors.green : 'bg-gray-500'} rounded-full`}></div>
            </div>
        </div>
    );
};