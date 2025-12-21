import { motion, AnimatePresence } from "framer-motion";
import Skeleton from "./Skeleton.jsx";
import { Sparkles } from "lucide-react";

const LoadingScreen = ({ isLoading }) => {
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                    }}
                    className="fixed inset-0 z-999 bg-[#030502] flex flex-col items-center justify-center"
                >
                    {/* Background Accents (matching Hero) */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
                        <div className="absolute top-[-20%] left-[15%] w-px h-[140%] bg-emerald-500/20 blur-[80px] -rotate-12" />
                        <div className="absolute top-[-20%] right-[15%] w-px h-[140%] bg-emerald-500/20 blur-[80px] rotate-12" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[800px] max-h-[800px] bg-emerald-500/5 rounded-full blur-[140px]" />
                    </div>

                    {/* Header Skeleton Mimic */}
                    <div className="fixed top-8 w-full max-w-[900px] px-6">
                        <div className="h-14 bg-white/5 rounded-full border border-white/10 flex items-center justify-between px-6">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-emerald-500/20" />
                                <Skeleton className="w-24 h-4 rounded-full" />
                            </div>
                            <div className="hidden lg:flex gap-4">
                                <Skeleton className="w-16 h-3 rounded-full" />
                                <Skeleton className="w-16 h-3 rounded-full" />
                                <Skeleton className="w-16 h-3 rounded-full" />
                            </div>
                            <Skeleton className="w-28 h-10 rounded-full" />
                        </div>
                    </div>

                    {/* Hero Skeleton Mimic */}
                    <div className="container mx-auto px-4 flex flex-col items-center text-center space-y-12">
                        {/* Status Badge Skeleton */}
                        <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                            <div className="flex items-center gap-2">
                                <Sparkles size={10} className="text-emerald-500/30 animate-pulse" />
                                <Skeleton className="w-32 h-2 rounded-full opacity-50" />
                            </div>
                        </div>

                        {/* Heading Skeleton */}
                        <div className="space-y-4 flex flex-col items-center">
                            <Skeleton className="w-48 h-3 rounded-full opacity-40 mb-4" />
                            <Skeleton className="w-[80vw] max-w-[800px] h-20 md:h-32 rounded-3xl opacity-20" />
                        </div>

                        {/* Subtext Skeleton */}
                        <div className="space-y-3 flex flex-col items-center">
                            <Skeleton className="w-[60vw] max-w-[500px] h-6 rounded-full opacity-30" />
                            <Skeleton className="w-[40vw] max-w-[300px] h-4 rounded-full opacity-20" />
                        </div>

                        {/* Buttons Skeleton */}
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Skeleton className="w-48 h-14 rounded-2xl opacity-40" />
                            <Skeleton className="w-48 h-14 rounded-2xl opacity-20" />
                        </div>
                    </div>

                    {/* Loading Progress Text */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute bottom-12 flex flex-col items-center gap-4"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.5em] animate-pulse">
                                INITIALIZING_SYSTEM
                            </span>
                        </div>
                        <div className="w-48 h-px bg-white/5 relative overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-emerald-500"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2.5, ease: "easeInOut" }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
