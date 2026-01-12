# Porsche Scrollytelling Landing Page
A high-fidelity, interactive landing page for the Porsche 911, featuring refined scroll-based animations and a luxurious digital experience.
## Overview
This project is a modern web application built with **Next.js** and **Framer Motion**, designed to showcase the Porsche 911 through an immersive "scrollytelling" interface. It features sticky scroll effects, car disassembly animations, and a premium UI inspired by Porsche's digital design language.

Live Demo : https://porsche-7mio95792-revansh-13s-projects.vercel.app/

## Features
- **Immersive Scrollytelling**: Smooth scroll-triggered animations that break down the car's engineering.
- **Sticky Scroll Effects**: Dynamic sections that pin and animate as the user explores.
- **Premium UI Components**:
  - Custom refined Navigation Bar
  - "Other Models" Showcase with hover interactions
  - Apple-style Specifications Grid
  - High-end Call to Action
- **Responsive Design**: optimized for performance and fluidity across devices.
- **Modern Tech Stack**: Built on the latest web standards.


📁 Project Structure:
app/
 ├─ page.tsx
 ├─ globals.css
components/
 └─ CarScroll.tsx
public/
 ├─ frames/
 │   └─ ezgif-frame-001.jpg → ezgif-frame-080.jpg
 └─ porsche-logo.svg

 
## Tech Stack
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: CSS Modules
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Utilities**: clsx

🎯 Key Concepts I Learnt
Scroll-Linked Animations - useScroll() + useTransform()
Canvas Rendering - Drawing images with cover-fit logic
Image Preloading - Loading 120+ images before render
Sticky Positioning - CSS position: sticky magic
Glassmorphism - Modern backdrop-blur effects
Metallic Text - CSS gradient text effects

