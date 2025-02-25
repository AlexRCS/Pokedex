import { createContext, useContext, useState, useEffect } from "react"


export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const handleToggle = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        if (theme === 'light') {
            document.body.style.backgroundColor = '#efefef';
            document.body.style.color = '#000000';
        } else {
            document.body.style.backgroundColor = '#0C2340';
            document.body.style.color = '#ffffff';
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, handleToggle }}>
            {children}
        </ThemeContext.Provider>
    );
}
export function useThemeContext() {
    return useContext(ThemeContext);
}
