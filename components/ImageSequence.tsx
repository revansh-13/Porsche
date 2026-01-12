"use client";

import { useEffect, useRef, useState } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";

interface ImageSequenceProps {
    scrollYProgress: MotionValue<number>;
}

export default function ImageSequence({ scrollYProgress }: ImageSequenceProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);
    const [manifest, setManifest] = useState<string[]>([]);

    // 1. Load Manifest
    useEffect(() => {
        fetch("/sequence/manifest.json")
            .then((res) => res.json())
            .then((data: string[]) => {
                setManifest(data);
            })
            .catch((e) => console.error("Failed to load manifest", e));
    }, []);

    // 2. Preload Images
    useEffect(() => {
        if (manifest.length === 0) return;

        let loadedCount = 0;
        const imgs: HTMLImageElement[] = [];

        manifest.forEach((filename) => {
            const img = new Image();
            img.src = `/sequence/${filename}`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === manifest.length) {
                    setLoaded(true);
                }
            };
            imgs.push(img);
        });

        setImages(imgs);
    }, [manifest]);

    // 3. Render Helper
    const renderFrame = (progress: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !loaded || images.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const totalFrames = images.length;
        // progress is 0-1
        const frameIndex = Math.min(
            totalFrames - 1,
            Math.floor(progress * totalFrames)
        );

        const img = images[frameIndex];
        if (!img) return;

        const dpr = window.devicePixelRatio || 1;
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Only resize if needed to store checking overhead
        if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
        }
        // Note: ctx.scale resets on resize, but if we don't resize, we don't need to scale again? 
        // Actually simpler to just set dims always for full-screen canvas reliability

        // Clear
        ctx.clearRect(0, 0, width, height);

        // Draw Contain
        const imgAspect = img.width / img.height;
        const canvasAspect = width / height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasAspect > imgAspect) {
            drawHeight = height;
            drawWidth = height * imgAspect;
            offsetX = (width - drawWidth) / 2;
            offsetY = 0;
        } else {
            drawWidth = width;
            drawHeight = width / imgAspect;
            offsetX = 0;
            offsetY = (height - drawHeight) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // 4. Listen to MotionValue
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        renderFrame(latest);
    });

    // Initial file render on load
    useEffect(() => {
        if (loaded) renderFrame(scrollYProgress.get());
    }, [loaded]);

    // Window resize handler
    useEffect(() => {
        const handleResize = () => renderFrame(scrollYProgress.get());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [loaded, images]); // Re-bind if images reload

    return (
        <canvas
            ref={canvasRef}
            style={{ display: 'block', width: '100%', height: '100%' }}
        />
    );
}
