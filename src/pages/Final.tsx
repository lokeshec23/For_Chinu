import { motion } from 'motion/react';
import { PageTransition } from '@/src/components/PageTransition';
import { Heart, Sparkles, Star, PartyPopper, Music2, Share2, Instagram } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Final() {
  const navigate = useNavigate();

  useEffect(() => {
    const end = Date.now() + (15 * 1000);
    const colors = ['#ff69b4', '#ff1493', '#ffc0cb', '#ffffff'];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }, []);

  return (
    <PageTransition>
      <div className="relative min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center py-12 px-6 overflow-hidden">
        {/* Animated Background stars */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-pink-200/40"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.5, 0],
                scale: [0, 1.2, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            >
              <Star size={Math.random() * 20 + 10} />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 text-center space-y-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', bounce: 0.5, duration: 1 }}
            className="w-48 h-48 md:w-64 md:h-64 mx-auto relative group"
          >
            <div className="absolute inset-0 bg-pink-400 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity animate-pulse" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 border-2 border-dashed border-pink-300 rounded-full"
            />
            <div className="relative w-full h-full rounded-full border-8 border-white shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2070&auto=format&fit=crop"
                alt="Final Surprise"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent" />
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h1 className="font-serif text-6xl md:text-8xl font-black text-pink-600 drop-shadow-lg">
                Last One Time! 🎁
              </h1>
              <p className="font-cursive text-3xl md:text-5xl text-pink-400 mt-4 italic">
                Happy Birthday to my Princess Chinu ma♾️❤️
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="glass p-8 md:p-12 rounded-[3.5rem] border-white/50 backdrop-blur-xl shadow-2xl relative"
            >
              <Heart className="absolute -top-6 -left-6 text-pink-500 animate-bounce" size={48} />
              <div className="absolute -bottom-6 -right-6 flex space-x-2">
                <Sparkles className="text-yellow-400" size={40} />
              </div>

              <p className="font-serif text-2xl md:text-3xl leading-relaxed text-pink-900 italic font-medium">
                "Nee life-la vandhadhu thaan enaku kedaicha best gift. Indha birthday unaku romba special ah irukanum. I'll make sure every day feels like your birthday from now on!"
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-6 bg-white rounded-3xl shadow-xl flex items-center justify-center gap-4 text-pink-600 font-bold border border-pink-100 hover:bg-pink-50 transition-colors"
            >
              <Instagram size={24} />
              <span>Share our story</span>
            </motion.button> */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
              className="p-6 bg-pink-600 rounded-3xl shadow-xl flex items-center justify-center gap-4 text-white font-bold hover:bg-pink-700 transition-colors"
            >
              <Music2 size={24} />
              <span>Start Journey Again</span>
            </motion.button>
          </div>
        </div>

        <footer className="mt-auto py-10 text-center space-y-2 opacity-60">
          <p className="font-cursive text-2xl text-pink-900">Made with endless love by Pattu ❤️</p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-pink-400">Copyright © Forever Together ♾️</p>
        </footer>
      </div>
    </PageTransition>
  );
}
