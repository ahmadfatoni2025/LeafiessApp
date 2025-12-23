import React, { useRef, useState, useEffect } from 'react';

/**
 * High-Performance Virtual List
 * Optimized for long lists of projects/items
 */
const VirtualList = ({ items, itemHeight, renderItem, buffer = 2 }) => {
    const containerRef = useRef(null);
    const [scrollTop, setScrollTop] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);

    useEffect(() => {
        const handleScroll = (e) => {
            setScrollTop(e.target.scrollTop);
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll, { passive: true });
            setContainerHeight(container.offsetHeight);
        }

        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setContainerHeight(entry.contentRect.height);
            }
        });

        if (container) resizeObserver.observe(container);

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
                resizeObserver.unobserve(container);
            }
        };
    }, []);

    const totalHeight = items.length * itemHeight;
    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - buffer);
    const endIndex = Math.min(
        items.length - 1,
        Math.floor((scrollTop + containerHeight) / itemHeight) + buffer
    );

    const visibleItems = [];
    for (let i = startIndex; i <= endIndex; i++) {
        visibleItems.push(
            <div
                key={i}
                style={{
                    position: 'absolute',
                    top: i * itemHeight,
                    width: '100%',
                    height: itemHeight,
                }}
            >
                {renderItem(items[i], i)}
            </div>
        );
    }

    return (
        <div
            ref={containerRef}
            style={{
                position: 'relative',
                height: '100%',
                overflowY: 'auto',
                overflowX: 'hidden',
                willChange: 'transform',
            }}
        >
            <div style={{ height: totalHeight, position: 'relative' }}>
                {visibleItems}
            </div>
        </div>
    );
};

export default VirtualList;
