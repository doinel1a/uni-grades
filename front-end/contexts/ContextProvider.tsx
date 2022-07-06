import React, { ReactNode, createContext, useContext, useState, useEffect } from 'react';

import { Exam } from '../interfaces/Exam';

import { themeDetector } from '../utils/ThemeDetector';
import { existsInLocalStorage, getFromLocalStorageAsBoolean, setToLocalStorage } from '../utils/StorageHandler';

interface IContextProviderProps {
    isDarkMode: boolean;
    setIsDarkMode: any;
    examsList: Exam[];
    setExamsList: any;
    isAddExamModalVisible: boolean;
    setIsAddExamModalVisible: any;
};

const defaultProps: IContextProviderProps = {
    isDarkMode: false,
    setIsDarkMode: null,
    examsList: [],
    setExamsList: null,
    isAddExamModalVisible: false,
    setIsAddExamModalVisible: null
};

const StateContext: React.Context<IContextProviderProps> = createContext<IContextProviderProps>(defaultProps);

export const ContextProvider = ( { children }: { children: ReactNode}) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
    const [examsList, setExamsList] = useState<Exam[]>([]);
    const [isAddExamModalVisible, setIsAddExamModalVisible] = useState<boolean>(false);

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
                isDarkMode, setIsDarkMode,
                examsList, setExamsList,
                isAddExamModalVisible, setIsAddExamModalVisible
            }}
        >
            { children }
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
