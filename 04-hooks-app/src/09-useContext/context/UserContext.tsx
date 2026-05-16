import type { User } from "@/08-use-suspense/api/get-user.action"
import { createContext, useState, type PropsWithChildren } from "react"

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface UserContextProps {
    //state
    authStatus: AuthStatus
    user: User | null

    //Method
    login: (userId: number) => boolean
    logout: () => void
}

export const UserContext = createContext({} as UserContextProps);

//HOC
export const UserContextProvider = ({ children }: PropsWithChildren) => {
    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
    const [user, setUser] = useState<User|null>();

    const handleLogin = (userId: number) => {
        console.log({userId});
        return true;
    }
    const handleLogout = () => {
        console.log('logout');
        
    }

    return <UserContext value={{
        authStatus: 'checking',
        user: null,
        login: handleLogin,
        logout: handleLogout
    }}>{children}</UserContext>
}
