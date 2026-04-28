import { useState } from "react";

const color = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
};

const colorValue = {
    ROJO: 'red',
    AMARILLO: 'yellow',
    VERDE: 'green',
}

export const TrafficLight = () => {
    const [light, setLight] = useState('');

    const onClickVariable = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        let element : HTMLButtonElement = event.target as HTMLButtonElement;
        let textElement: string = element.childNodes[0].textContent?.toUpperCase() || '';        
        textElement === 'RESET' ? setLight('') : setLight(colorValue[textElement as keyof typeof colorValue] || '');
    }

    const handleColorChange = (color: string) => {
        // Con este codigo obtener el valor previo del estado y el valor actual que se va a establecer
        setLight((prev: string) => {
            console.log("Valor previo: ", {prev});
            console.log("Valor actual: ", {color});
            return color;
        });
    }
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">
                <div className={`w-32 h-32 ${light === 'red' ? color.red : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 ${light === 'yellow' ? color.yellow : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 ${light === 'green' ? color.green : 'bg-gray-500'} rounded-full`}></div>

                {/* Botón para cambiar el estado de la luz */}
                <div className="flex gap-2">
                    <button
                        onClick={() => handleColorChange('red')}
                        className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
                        Rojo
                    </button>
                    <button
                        onClick={() => handleColorChange('yellow')}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer">
                        Amarillo
                    </button>
                    <button
                        onClick={() => handleColorChange('green')}
                        className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer">
                        Verde
                    </button>
                </div>
                {/* <div className="flex gap-2">
                    <button
                        onClick={onClick}
                        className="bg-gray-500 text-white px-4 py-2 rounded-md cursor-pointer">
                        Reset
                    </button>
                </div> */}
            </div>
        </div>
    );
};