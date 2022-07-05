export const themeDetector: Function = (): boolean => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};