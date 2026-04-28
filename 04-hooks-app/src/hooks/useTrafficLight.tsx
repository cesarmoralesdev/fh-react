import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
    blue: 'bg-blue-500 animate-pulse',
    reset: 'bg-gray-500 animate-pulse',
};

type TrafficLightColors = keyof typeof colors;

export const useTrafficLight = () => {
    const [light, setLight] = useState<TrafficLightColors>('red');
    const [counteDown, setCountdown] = useState(5);

    useEffect(() => {
        console.log({ counteDown });
        const intervalId = setInterval(() => {
            console.log("setInterval llamado");
            setCountdown(prev => prev - 1);
        }, 1000);

        return () => {
            console.log("Cleanup effect");
            clearInterval(intervalId);
        }
    }, [counteDown]);

    useEffect(() => {
        if(counteDown > 0) return;
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

    return {
        light, colors, counteDown
    };
}
