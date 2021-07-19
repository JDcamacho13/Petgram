import { useState } from 'react';

export function useLocalStorage (key, value) {
    const [storedValue, setValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item !== null ? JSON.parse(item) : value;
        } catch (e) {
            console.log(e);
            return value;
        }
    });

    const setLocalStorage = value => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
            setValue(value);
        } catch (e) {
            console.log(e)
        }
    }

    return [storedValue, setLocalStorage];
}
