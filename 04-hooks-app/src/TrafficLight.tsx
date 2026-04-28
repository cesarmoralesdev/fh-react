import { useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
    blue: 'bg-blue-500 animate-pulse',
    reset: 'bg-gray-500 animate-pulse',
};

const colorValue = {
    ROJO: 'red',
    AMARILLO: 'yellow',
    VERDE: 'green',
}

// type TrafficLightColors = 'red' | 'yellow' | 'green' | 'blue';
type TrafficLightColors = keyof typeof colors;

export const TrafficLight = () => {
    const [light, setLight] = useState<TrafficLightColors>('reset');

    const onClickVariable = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        let element : HTMLButtonElement = event.target as HTMLButtonElement;
        let textElement: string = element.childNodes[0].textContent?.toLocaleLowerCase() || '';        
        setLight(textElement as TrafficLightColors);
    }

    const handleColorChange = (color: TrafficLightColors) => {
        // Con este codigo obtener el valor previo del estado y el valor actual que se va a establecer
        setLight((prev: TrafficLightColors) => {
            console.log("Valor previo: ", {prev});
            console.log("Valor actual: ", {color});
            return color;
        });
    }
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">
                <div className={`w-32 h-32 ${light === 'red' ? colors.red : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 ${light === 'yellow' ? colors.yellow : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 ${light === 'green' ? colors.green : 'bg-gray-500'} rounded-full`}></div>

                {/* Botón para cambiar el estado de la luz */}
                <div className="flex gap-2">
                    <button
                        // onClick={onClickVariable}
                        onClick={() => handleColorChange('red')}
                        className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
                        Red
                    </button>
                    <button
                        // onClick={onClickVariable}
                        onClick={() => handleColorChange('yellow')}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer">
                        Yellow
                    </button>
                    <button
                        // onClick={onClickVariable}
                        onClick={() => handleColorChange('green')}
                        className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer">
                        Green
                    </button>
                </div>
                <div className="flex gap-2">
                    <button
                        // onClick={onClickVariable}
                        onClick={() => handleColorChange('green')}
                        className="bg-gray-500 text-white px-4 py-2 rounded-md cursor-pointer">
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};