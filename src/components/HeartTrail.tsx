import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';

interface TrailHeart {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

export function HeartTrail() {
  const [trail, setTrail] = useState<TrailHeart[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newHeart: TrailHeart = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        scale: Math.random() * 1.5 + 0.5,
        rotation: Math.random() * 360,
      };

      setTrail((prev) => [...prev.slice(-15), newHeart]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <AnimatePresence>
        {trail.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 0.8, scale: 0 }}
            animate={{ opacity: 0, scale: heart.scale, y: heart.y - 100 }}
            exit={{ opacity: 0 }}
            className="absolute"
            style={{ left: heart.x, top: heart.y }}
            transition={{ duration: 1 }}
          >
            <Heart 
              className="text-pink-300/60 fill-pink-300" 
              size={16} 
              style={{ transform: `rotate(${heart.rotation}deg)` }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
