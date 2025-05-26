import { useState, useEffect } from 'react';

export function useThemeSwitcher(initial = 'light') {
    const [theme, setTheme] = useState(initial);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return [theme, toggleTheme];
}