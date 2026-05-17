import { createContext, useState, type PropsWithChildren } from "react"
import { users, type User } from "../data/user-mock.data";

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface UserContextProps {
    //state
    authStatus: AuthStatus
    user: User | null | undefined

    //Method
    login: (userId: number) => boolean
    logout: () => void
}

export const UserContext = createContext({} as UserContextProps);

//HOC
export const UserContextProvider = ({ children }: PropsWithChildren) => {
    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
    const [user, setUser] = useState<User | null>();

    const handleLogin = (userId: number) => {
        const user = users.find(user => user.id === userId);
        if (!user) {
            console.log(`User not found ${userId}`);
            setUser(null);
            setAuthStatus('not-authenticated');
            return false;
        }
        setUser(user);
        setAuthStatus('authenticated');
        return true;
    }
    const handleLogout = () => {
        console.log('logout');
        setUser(null);
        setAuthStatus('not-authenticated');
    }

    return <UserContext value={{
        authStatus,
        user,
        login: handleLogin,
        logout: handleLogout
    }}>{children}</UserContext>
}
