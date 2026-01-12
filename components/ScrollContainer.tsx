"use client";

import { useScroll, useTransform, motion, MotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import ImageSequence from "./ImageSequence";
import styles from "./ScrollContainer.module.css";

export default function ScrollContainer() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Smooth out the scroll value to prevent "laggy" frame jumps
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Delay car rotation until 10% scroll, then play to 90%
    const carProgress = useTransform(smoothProgress, [0, 0.1, 0.9], [0, 0, 1]);

    return (
        <div ref={containerRef} style={{ height: "450vh", position: "relative" }}>
            <div className={styles.fixedBackground}>
                <ImageSequence scrollYProgress={carProgress} />
                <ContentOverlay scrollYProgress={smoothProgress} />
            </div>
        </div>
    );
}

function ContentOverlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    return (
        <div className={styles.overlay}>
            {/* Hero Text */}
            <motion.h1
                style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
                className={styles.title}
            >
                Porsche 911
            </motion.h1>

            {/* Engineering Text */}
            <motion.div
                style={{ opacity: useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]) }}
                className={styles.textWrapper}
            >
                <h2 className={styles.subtitle}>
                    Engineered for Speed
                </h2>
            </motion.div>

            {/* Final Text */}
            <motion.div
                style={{ opacity: useTransform(scrollYProgress, [0.85, 0.95], [0, 1]) }}
                className={styles.textWrapper}
            >
                <h2 className={styles.subtitle}>
                    Driven by Precision
                </h2>
            </motion.div>
        </div>
    );
}
