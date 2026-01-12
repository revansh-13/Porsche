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

 
🤖 AI Prompts Used (Copy-Paste Ready!)
The Master Prompt
This is the main prompt used to build the entire website:
A world-class Creative Developer (Awwwards-level) specializing in scroll-based cinematic experiences, automotive storytelling, and anti-gravity motion systems, with deep understanding of Porsche’s digital design language. specializing 
in Next.js, Framer Motion, and high-performance 3D web interactions.Build a high-end “Scrollytelling” landing page for Porsche 911.
The core mechanic is a scroll-linked animation that plays an 80-frame image sequence of the car transitioning from a fully assembled hero into a precision-engineered layered disassembly, with the hood lifted and engine exposed.

The experience must feel controlled, luxurious, engineering-first, and aligned with the current Porsche website aesthetic.

TECH STACK (LOGICAL INTENT)

Scroll-driven animation system (Antigravity Flow style)

Image-sequence playback (≈80 frames)

Canvas-like rendering behavior

Performance-first execution

Locked camera throughout the experience

VISUAL DIRECTION & COLOR

Background: Pure Black #000000 (unchanged throughout)

Depth: Subtle silver / graphite glow behind the car

Vibe: Ultra-modern, luxurious, anti-gravity

Motion: Calm, precise, confident (no aggressive easing)

TYPOGRAPHY

Font style: Inter-like, modern sans-serif

Uppercase only

Wide tracking (tracking-widest)

Color: Silver / off-white

Minimal, engineering-focused tone

CORE MECHANIC — SCROLL STORY
Initial State (0% Scroll)

Fully assembled Porsche 911

Perfect side profile

Car floating slightly above ground

Hood closed

Camera completely locked

Text Overlay:

PORSCHE 911

Engineering Reveal (30%–60% Scroll)

Hood lifts smoothly and floats upward

Engine bay becomes visible and illuminated

Engine components rendered with high mechanical fidelity

Internal systems (engine, drivetrain, chassis, suspension, exhaust, interior)
begin to separate gently along natural assembly axes

Outer body panels remain present and floating, preserving full silhouette

All parts flow outward slowly, symmetrically, with perfect alignment

Text Overlay:

ENGINEERED FOR SPEED

Specifications Section (Mid-Scroll)

Appears as a glassmorphic floating panel

Frosted glass blur

Subtle silver / graphite gradient

Thin light border

Minimal, premium engineering data

Example content:

Flat-Six Engine

Precision Aerodynamics

Track-Born Performance

Final Impact (85%–100% Scroll)

Car held in a clean layered engineering reveal state

Hood open

Engine exposed

All systems floating in place

No further motion

Text Overlay:

DRIVEN BY PRECISION

MOTION PHILOSOPHY

Not explosive

Not aggressive

No chaos

Motion feels guided, intentional, and engineered

Linear or ease-out curves only

No camera movement

No motion blur

LIGHTING DIRECTION

Soft sculpting key light on body

Subtle rim lighting on each floating layer

Engine-focused hero lighting inside the bay

No harsh highlights

Consistent lighting throughout scroll

PERFORMANCE & QUALITY

Image-sequence driven animation (≈80 frames)

Smooth scroll-linked playback

No flicker, no frame skipping

Canvas-style drawing logic

Optimized for desktop hero experience

CONSTRAINTS

No people

No labels on parts

No watermarks

No clutter

No UI noise

FINAL RESULT

The experience should feel like a Porsche engineering manifesto translated into motion —
timeless, precise, and driven by speed through control.


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

