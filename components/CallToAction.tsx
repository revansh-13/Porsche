"use client";

import styles from "./CallToAction.module.css";

export default function CallToAction() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Create your personal 911.</h2>
            <p className={styles.text}>Configure your dream car just the way you want it.</p>

            <button className={styles.button}>
                Build Your Own
            </button>

            <footer className={styles.footer}>
                <div className={styles.links}>
                    <span>© 2026 Porsche Cars North America, Inc.</span>
                    <a href="#">Legal</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Accessibility</a>
                </div>
            </footer>
        </section>
    );
}
