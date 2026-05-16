import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import { Heart, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PageTransition } from '@/src/components/PageTransition';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-10rem)] text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 1 }}
          className="relative mb-12"
        >
          <div className="absolute inset-0 bg-pink-300 blur-3xl opacity-30 animate-pulse rounded-full" />
          <div className="relative glass p-8 rounded-full border-pink-200">
            <Heart size={80} className="text-pink-500 fill-pink-500 animate-float" />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-4 -right-4"
          >
            <Sparkles className="text-yellow-400" size={32} />
          </motion.div>
        </motion.div>

        <h1 className="font-serif text-5xl md:text-7xl font-bold text-pink-600 mb-6 tracking-tight">
          Hey Chinu ❤️
        </h1>

        <div className="h-16 mb-12">
          <TypeAnimation
            sequence={[
              'Special ah oru surprise ready panniruken...',
              2000,
              'Ungaloda Birthday-ku idha chinna gift ah vechuko 😊',
              2000,
              'Ready-ah? 🙈',
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-xl md:text-2xl text-pink-900 font-medium italic opacity-80"
            repeat={Infinity}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            window.dispatchEvent(new Event('startMusic'));
            navigate('/hero');
          }}
          className="group relative px-10 py-5 bg-pink-500 text-white rounded-full font-bold text-xl shadow-2xl shadow-pink-300/50 flex items-center gap-3 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative z-10 font-serif">Open Surprise ✨</span>
          <Sparkles className="relative z-10 group-hover:rotate-12 transition-transform" size={24} />
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2 }}
          className="mt-8 text-sm font-medium tracking-widest text-pink-900 uppercase"
        >
          Scroll progress mapped to my love for you
        </motion.p>
      </div>
    </PageTransition>
  );
}
