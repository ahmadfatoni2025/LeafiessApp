// @ts-nocheck
import React, { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

/**
 * CustomCursor - High-fidelity futuristic cursor experience
 * Optimized for zero-latency feel and high-end visual feedback.
 */
const CustomCursor = () => {
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Faster physics for a more responsive feel
    const springConfig = { damping: 35, stiffness: 400, mass: 0.1 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const checkClickable = useCallback((el) => {
        if (!el) return false;
        const style = window.getComputedStyle(el);
        return (
            el.tagName === 'BUTTON' ||
            el.tagName === 'A' ||
            style.cursor === 'pointer' ||
            el.closest('button') ||
            el.closest('a')
        );
    }, []);

    useEffect(() => {
        const moveMouse = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseDown = () => setIsClicked(true);
        const handleMouseUp = () => setIsClicked(false);

        const handleOver = (e) => {
            setIsPointer(checkClickable(e.target));
        };

        window.addEventListener('mousemove', moveMouse, { passive: true });
        window.addEventListener('mouseover', handleOver);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        // Handle when mouse leaves the window
        document.addEventListener('mouseleave', () => setIsVisible(false));
        document.addEventListener('mouseenter', () => setIsVisible(true));

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            window.removeEventListener('mouseover', handleOver);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseleave', () => setIsVisible(false));
            document.removeEventListener('mouseenter', () => setIsVisible(true));
        };
    }, [mouseX, mouseY, isVisible, checkClickable]);

    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 pointer-events-none hidden md:block"
            style={{ zIndex: 999999 }}
        >
            {/* 1. Precision Core (Main Point) */}
            <motion.div
                className="absolute w-1 h-1 bg-white rounded-full z-20 shadow-[0_0_10px_#fff]"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* 2. Interactive Ring (Reacts to Hover & Click) */}
            <motion.div
                className="absolute w-8 h-8 border border-emerald-500/40 rounded-full flex items-center justify-center backdrop-blur-[2px]"
                animate={{
                    scale: isClicked ? 0.8 : (isPointer ? 1.6 : 1),
                    rotate: isPointer ? 90 : 0,
                    borderColor: isPointer ? 'rgba(255, 255, 255, 0.9)' : 'rgba(16, 185, 129, 0.4)',
                    backgroundColor: isPointer ? 'rgba(255, 255, 255, 0.1)' : 'rgba(16, 185, 129, 0)',
                    boxShadow: isPointer ? '0 0 20px rgba(255, 255, 255, 0.4)' : '0 0 0px rgba(0, 0, 0, 0)',
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                {/* Tech Detail Lines */}
                <div className="absolute w-[120%] h-px bg-white/10 rotate-45" />
                <div className="absolute w-[120%] h-px bg-white/10 -rotate-45" />

            </motion.div>

            {/* Separate unrotated container for 'Select' text */}
            <motion.div
                className="absolute pointer-events-none"
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <AnimatePresence>
                    {isPointer && (
                        <motion.span
                            initial={{ opacity: 0, y: 10, x: '-50%' }}
                            animate={{ opacity: 1, y: -45, x: '-50%' }}
                            exit={{ opacity: 0, y: -10, x: '-50%' }}
                            className="text-[7px] font-black text-white tracking-[0.3em] uppercase absolute left-1/2 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] whitespace-nowrap"
                        >
                            Select
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* 3. Click Wave Effect */}
            <AnimatePresence>
                {isClicked && (
                    <motion.div
                        initial={{ scale: 0.5, opacity: 1, x: mouseX.get(), y: mouseY.get() }}
                        animate={{ scale: 3, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute w-6 h-6 border border-white/50 rounded-full"
                        style={{
                            x: mouseX,
                            y: mouseY,
                            translateX: '-50%',
                            translateY: '-50%',
                        }}
                    />
                )}
            </AnimatePresence>

            {/* 4. Atmospheric Glow (Subtle) */}
            <motion.div
                className="absolute w-40 h-40 rounded-full blur-[60px]"
                animate={{
                    backgroundColor: isPointer ? 'rgba(255, 255, 255, 0.15)' : 'rgba(16, 185, 129, 0.1)',
                    scale: isPointer ? 1.4 : 1,
                    opacity: isPointer ? 1 : 0.3
                }}
                transition={{ duration: 0.4 }}
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />
        </div>
    );
};

export default CustomCursor;
