import {createContext, useContext} from 'react';
import useProvideAuth from './useProvide.component';

const authContext = createContext();
export default function ProvideAuth ({children}) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
    return useContext(authContext);
};