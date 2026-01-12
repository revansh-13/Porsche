"use client";

import styles from "./SpecsGrid.module.css";
import { motion } from "framer-motion";

export default function SpecsGrid() {
    return (
        <section className={styles.section}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={styles.grid}
            >

                {/* Large Card: Engine */}
                <div className={`${styles.card} ${styles.large}`}>
                    <span className={styles.label}>Powertrain</span>
                    <h3 className={styles.value}>4.0L Flat-Six</h3>
                    <p className={styles.desc}>Naturally aspirated perfection. 9,000 RPM redline.</p>
                </div>

                {/* Medium: Power */}
                <div className={styles.card}>
                    <span className={styles.label}>Power</span>
                    <h3 className={styles.value}>502 hp</h3>
                </div>

                {/* Medium: 0-60 */}
                <div className={styles.card}>
                    <span className={styles.label}>0-60 mph</span>
                    <h3 className={styles.value}>3.2s</h3>
                </div>

                {/* Wide: Aero */}
                <div className={`${styles.card} ${styles.wide}`}>
                    <span className={styles.label}>Aerodynamics</span>
                    <h3 className={styles.value}>860kg Downforce</h3>
                    <p className={styles.desc}>Active rear wing with DRS functionality for track dominance.</p>
                </div>

            </motion.div>
        </section>
    );
}
