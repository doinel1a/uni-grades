import React, { ReactNode, createContext, useContext, useState, useEffect } from 'react';

import { themeDetector } from '../utils/ThemeDetector';
import { existsInLocalStorage, getFromLocalStorageAsBoolean, setToLocalStorage } from '../utils/StorageHandler';

interface IContextProviderProps {
    isDarkMode: boolean;
    setIsDarkMode: any;
};

const defaultProps: IContextProviderProps = {
    isDarkMode: false,
    setIsDarkMode: null
};

const StateContext: React.Context<IContextProviderProps> = createContext<IContextProviderProps>(defaultProps);

export const ContextProvider = ( {children}: { children: ReactNode}) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

    useEffect( () => {
        if(typeof window !== 'undefined')
        {
            if(!existsInLocalStorage('THEME_PREFERENCE'))
            {
                setToLocalStorage('THEME_PREFERENCE', themeDetector());
                setIsDarkMode(themeDetector());
            }

            setIsDarkMode(getFromLocalStorageAsBoolean('THEME_PREFERENCE'));
        }
    }, []);

    useEffect( () => {
        setToLocalStorage('THEME_PREFERENCE', isDarkMode);
    }, [isDarkMode]);

    return(
        <StateContext.Provider
            value={{ 
                isDarkMode, setIsDarkMode
            }}
        >
            { children }
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
