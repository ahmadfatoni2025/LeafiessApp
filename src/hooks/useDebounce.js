import { useState, useEffect } from 'react';

/**
 * Hook to debounce a value
 * @param {any} value - The value to debounce
 * @param {number} delay - Delay in ms
 * @returns {any} - The debounced value
 */
export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

/**
 * Hook to debounce a function call
 * @param {Function} callback - The function to debounce
 * @param {number} delay - Delay in ms
 * @returns {Function} - The debounced function
 */
export const useDebouncedCallback = (callback, delay) => {
    useEffect(() => {
        return () => {
            // Cleanup if needed
        };
    }, []);

    let timeoutId;

    return (...args) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            callback(...args);
        }, delay);
    };
};
