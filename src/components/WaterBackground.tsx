"use client";

import { useEffect, useRef } from "react";

type Blob = {
  x: number; // 基準位置（0-1）
  y: number;
  r: number; // 半径（短辺比）
  rgb: string;
  alpha: number;
  depth: number; // カーソル追従の強さ
  speed: number; // 漂いの速さ
  phase: number;
};

const BLOBS: Blob[] = [
  { x: 0.78, y: 0.2, r: 0.55, rgb: "27,141,138", alpha: 0.09, depth: 0.05, speed: 0.00008, phase: 0.0 },
  { x: 0.15, y: 0.8, r: 0.5, rgb: "199,168,118", alpha: 0.1, depth: 0.035, speed: 0.00006, phase: 2.1 },
  { x: 0.45, y: 0.35, r: 0.6, rgb: "255,255,255", alpha: 0.35, depth: 0.02, speed: 0.00005, phase: 4.2 },
  { x: 0.9, y: 0.75, r: 0.4, rgb: "27,141,138", alpha: 0.06, depth: 0.06, speed: 0.0001, phase: 1.3 },
  { x: 0.3, y: 0.1, r: 0.35, rgb: "199,168,118", alpha: 0.07, depth: 0.045, speed: 0.00009, phase: 5.5 },
];

const RIPPLE_PERIOD = 3200; // ms間隔で水紋を発生

export default function WaterBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    // カーソル（実位置と、遅れて追う平滑位置）
    let tx = 0.6;
    let ty = 0.4;
    let mx = 0.6;
    let my = 0.4;
    let raf = 0;
    let visible = true;
    let last = performance.now();
    const ripples: { x: number; y: number; born: number }[] = [];
    let lastRipple = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const base = Math.min(w, h);

      // カーソルへ「ふわっと」遅れて近づく
      mx += (tx - mx) * 0.035;
      my += (ty - my) * 0.035;

      for (const b of BLOBS) {
        const cx =
          (b.x + Math.sin(t * b.speed + b.phase) * 0.05) * w +
          (mx - 0.5) * w * b.depth;
        const cy =
          (b.y + Math.cos(t * b.speed * 1.3 + b.phase) * 0.05) * h +
          (my - 0.5) * h * b.depth;
        const r = b.r * base;
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        g.addColorStop(0, `rgba(${b.rgb},${b.alpha})`);
        g.addColorStop(1, `rgba(${b.rgb},0)`);
        ctx.fillStyle = g;
        ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
      }

      // カーソル位置の柔らかい光
      const gr = ctx.createRadialGradient(
        mx * w,
        my * h,
        0,
        mx * w,
        my * h,
        base * 0.32
      );
      gr.addColorStop(0, "rgba(27,141,138,0.07)");
      gr.addColorStop(0.5, "rgba(255,255,255,0.06)");
      gr.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gr;
      ctx.fillRect(0, 0, w, h);

      // 水紋（ゆっくり広がって消える輪）
      if (t - lastRipple > RIPPLE_PERIOD) {
        ripples.push({ x: mx, y: my, born: t });
        lastRipple = t;
        if (ripples.length > 3) ripples.shift();
      }
      for (const rp of ripples) {
        const age = (t - rp.born) / 4000; // 0→1
        if (age >= 1) continue;
        const rr = base * (0.05 + age * 0.35);
        const fade = (1 - age) * 0.1;
        ctx.beginPath();
        ctx.arc(rp.x * w, rp.y * h, rr, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(27,141,138,${fade})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
    };

    const loop = (t: number) => {
      if (visible) {
        // タブ復帰時の急な飛びを防ぐ
        if (t - last < 200) draw(t);
        last = t;
      }
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      tx = (e.clientX - rect.left) / rect.width;
      ty = (e.clientY - rect.top) / rect.height;
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduced) {
      // 動きを抑える設定の場合は静止フレームのみ
      draw(0);
      return () => window.removeEventListener("resize", resize);
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(canvas);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}
