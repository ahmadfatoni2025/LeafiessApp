import { motion } from "framer-motion";

const Skeleton = ({ className }) => {
    return (
        <div className={`relative overflow-hidden bg-neutral-800/10 rounded-md ${className}`}>
            <motion.div
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "linear",
                }}
            />
        </div>
    );
};

export default Skeleton;
