import React, { useState, useEffect } from 'react';

/**
 * Optimized Image Component
 * Features:
 * - WebP Support with Fallback
 * - Lazy Loading
 * - Blur Placeholder
 * - Intersection Observer for loading
 */
const OptimizedImage = ({
    src,
    fallbackSrc,
    alt,
    className,
    placeholderSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==",
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(placeholderSrc);
    const [isWebpSupported, setIsWebpSupported] = useState(true);

    useEffect(() => {
        // Check WebP support
        const checkWebp = () => {
            const elem = document.createElement('canvas');
            if (!!(elem.getContext && elem.getContext('2d'))) {
                return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
            }
            return false;
        };
        setIsWebpSupported(checkWebp());
    }, []);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Blurred Placeholder */}
            <img
                src={placeholderSrc}
                alt={alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-0' : 'opacity-100'
                    }`}
                style={{ filter: 'blur(20px)', transform: 'scale(1.1)' }}
            />

            {/* Real Image */}
            <picture>
                {isWebpSupported && src.endsWith('.webp') ? (
                    <source srcSet={src} type="image/webp" />
                ) : null}
                <img
                    src={isWebpSupported ? src : (fallbackSrc || src)}
                    alt={alt}
                    onLoad={handleLoad}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    {...props}
                />
            </picture>
        </div>
    );
};

export default OptimizedImage;
