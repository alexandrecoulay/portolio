import React, { PropsWithChildren } from "react";
import { motion } from "motion/react";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
    initial: {
        y: 40,
        opacity: 0,
        transition: { duration: 0.6, ease: easing }
    },
    whileInView: {
            y: 0,
            opacity: 1,
            transition: {
            duration: 0.6,
            ease: easing
        }
    },
    viewport: { 
        once: true
    }
};

function AnimatedFadeInUp({ children }: PropsWithChildren) {

    return (
        <motion.div {...fadeInUp}>
            { children }
        </motion.div>
    )
}

export default AnimatedFadeInUp;