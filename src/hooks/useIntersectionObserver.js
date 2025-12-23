import { useEffect, useState, useRef } from 'react';

/**
 * Hook to observe when an element enters the viewport
 * @param {Object} options - IntersectionObserver options
 * @returns {[MutableRefObject, boolean]} - Ref and visibility state
 */
export const useIntersectionObserver = (options = {}) => {
    const [isIntersecting, setIntersecting] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
            // Optional: stop observing once it has entered
            if (entry.isIntersecting && options.once) {
                observer.unobserve(entry.target);
            }
        }, options);

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [options.root, options.rootMargin, options.threshold, options.once]);

    return [elementRef, isIntersecting];
};
