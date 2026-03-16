"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 75;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const indexStr = i.toString().padStart(2, "0");
      img.src = `/sequence/frame_${indexStr}_delay-0.066s.png`;
      
      img.onload = () => {
        loadedCount++;
        // We set the array initially to have all refs, even if some aren't loaded yet.
        // It's checked during draw.
      };
      
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  const drawImage = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;
    
    const context = canvasRef.current.getContext("2d");
    if (!context) return;
    
    const img = images[index];
    
    if (img && img.complete) {
      const canvas = canvasRef.current;
      const ctx = context;
      
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
      );
    }
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    const index = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(latest)));
    drawImage(index);
  });

  // Handle Resize and initial draw
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        // Set canvas to actual screen pixels
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Redraw current frame
        drawImage(Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(frameIndex.get()))));
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images]);

  // Initial draw when first image loads, if it wasn't caught
  useEffect(() => {
    if (images.length > 0) {
      const checkFirstImage = setInterval(() => {
        if (images[0].complete) {
          drawImage(0);
          clearInterval(checkFirstImage);
        }
      }, 50);
      return () => clearInterval(checkFirstImage);
    }
  }, [images]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
