import { rollupVersion } from "vite";
import type { string } from "zod";

export interface User {
    id: number
    name: string
    location: string
    role: string
}

export const getUserAction = async (id: number) : Promise<User> => {

    await new Promise( res => setTimeout(res, 2000));

    return {
        id,
        name: 'Cesar Morales',
        location: 'Lima, Peru',
        role: 'Desarrollador de Software'
    };
}