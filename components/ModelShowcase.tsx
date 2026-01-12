"use client";

import styles from "./ModelShowcase.module.css";

const models = [
    {
        name: "911 Carrera", price: "From $114,400", power: "379 hp",
        image: "/models/carrera.jpg"
    },
    {
        name: "911 GT3 RS", price: "From $241,300", power: "518 hp",
        image: "/models/gt3 rs.jpg"
    },
    {
        name: "911 Turbo S", price: "From $230,400", power: "640 hp",
        image: "/models/turbo s.jpg"
    },
];

export default function ModelShowcase() {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>The 911 Family</h2>

            <div className={styles.scrollWrapper}>
                {models.map((model) => (
                    <div key={model.name} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            {/* Using HTML img for simplified external URL example. In prod use next/image with configured domains */}
                            <img src={model.image} alt={model.name} className={styles.modelImg} />
                        </div>
                        <div className={styles.info}>
                            <h3 className={styles.name}>{model.name}</h3>
                            <div className={styles.details}>
                                <span>{model.price}</span>
                                <span>{model.power}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
