export const existsInLocalStorage: Function = (_key: string): boolean => {
    return localStorage.getItem(_key) ? true : false;
};

export const setToLocalStorage: Function = (_key: string, _element: any): void => {
    localStorage.setItem(_key, JSON.stringify(_element));
};

export const getFromLocalStorageAsObject: Function = (_key: string): object => {
    return JSON.parse(localStorage.getItem(_key) || '');
};

export const getFromLocalStorageAsBoolean: Function = (_key: string): boolean => {
    return localStorage.getItem(_key) === 'true' ? true : false;
};