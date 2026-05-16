import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Cake, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';
import { PageTransition } from '@/src/components/PageTransition';

export default function Hero() {
  const navigate = useNavigate();

  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto text-center space-y-12 py-12">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 12 }}
          className="inline-flex p-4 rounded-3xl bg-white shadow-xl border border-pink-100"
        >
          <Cake size={48} className="text-pink-500 animate-bounce" />
        </motion.div>

        <div className="space-y-4">
          <motion.h1 
            className="font-serif text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-pink-600 via-rose-500 to-pink-400 leading-[1.1]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Happy Birthday <br/> Chinu ma...🎂❤️
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl font-cursive text-pink-700/80"
          >
            Nisha... My World, My Love, My Everything.
          </motion.p>
        </div>

        <motion.div 
          className="glass p-8 md:p-12 rounded-[2.5rem] border-white/50 relative overflow-hidden group shadow-2xl"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
            <Sparkles size={120} className="text-pink-600" />
          </div>
          
          <p className="font-serif text-2xl md:text-3xl leading-relaxed text-pink-900 italic relative z-10">
            “Nee vandhathuku apram dhan life romba azhaga iruku. Every single day feels like a blessing with you. Innaiku un birthday, but daily enakku treat dhan unna pakumbodhu!”
          </p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05, gap: '2rem' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/scrapbook')}
          className="inline-flex items-center gap-4 px-12 py-6 bg-pink-600 text-white rounded-full font-serif font-bold text-2xl shadow-xl shadow-pink-200 hover:shadow-2xl hover:shadow-pink-300 transition-all group"
        >
          <span>Continue Journey</span>
          <ArrowRight className="group-hover:translate-x-2 transition-transform" />
        </motion.button>
      </div>
    </PageTransition>
  );
}
