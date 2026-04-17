'use client';

import { useEffect, useRef } from 'react';

interface Wave {
  y: number;
  frequency: number;
  amplitude: number;
  speed: number;
  phase: number;
  opacity: number;
}

const WAVE_COUNT = 12;
const BASE_COLOR = '14, 165, 233'; // primary-500 rgb

export function RadioBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const smoothMouseRef = useRef({ x: -9999, y: -9999 });
  const animRef = useRef<number>(0);
  const wavesRef = useRef<Wave[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Re-distribute waves on resize
      wavesRef.current = Array.from({ length: WAVE_COUNT }, (_, i) => ({
        y: (i + 1) / (WAVE_COUNT + 1),
        frequency: 0.006 + (i % 3) * 0.002,
        amplitude: 6 + (i % 4) * 3,
        speed: 0.003 + (i % 5) * 0.001,
        phase: (i / WAVE_COUNT) * Math.PI * 2,
        opacity: 0.04 + (i % 3) * 0.02,
      }));
    };

    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: smoothMouseRef.current.y };
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    const LERP = 0.016;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth the mouse position with lerp
      smoothMouseRef.current.x += (mouseRef.current.x - smoothMouseRef.current.x) * LERP;
      smoothMouseRef.current.y += (mouseRef.current.y - smoothMouseRef.current.y) * LERP;

      const { x: mx, y: my } = smoothMouseRef.current;

      wavesRef.current.forEach((wave) => {
        wave.phase += wave.speed;

        const baseY = wave.y * canvas.height;
        const distY = Math.abs(my - baseY);
        const proximity = Math.max(0, 1 - distY / 180);

        const amplitude = wave.amplitude + proximity * 28;
        const opacity = wave.opacity + proximity * 0.28;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(${BASE_COLOR}, ${opacity})`;
        ctx.lineWidth = 1;

        for (let x = 0; x <= canvas.width; x += 2) {
          const distX = x - mx;
          // Gaussian bump at mouse X position, scaled by proximity
          const bump = proximity * 22 * Math.exp(-(distX * distX) / 8000);

          const y =
            baseY +
            Math.sin(x * wave.frequency + wave.phase) * amplitude +
            bump * Math.sin(x * wave.frequency * 1.5 + wave.phase + 1);

          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }

        ctx.stroke();
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
