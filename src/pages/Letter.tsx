import { motion } from 'motion/react';
import { PageTransition } from '@/src/components/PageTransition';
import { Mail, Sparkles, Heart, PencilLine } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';

export default function Letter() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex p-4 bg-white rounded-full shadow-lg border border-pink-100 mb-6"
          >
            <Mail className="text-pink-500" size={32} />
          </motion.div>
          <h2 className="font-serif text-5xl font-bold text-pink-600">A Letter for Chinu</h2>
          <p className="font-cursive text-2xl text-pink-400 mt-2">Straight from my heart to yours...</p>
        </div>

        <motion.div 
          initial={{ rotate: -2, y: 50, opacity: 0 }}
          whileInView={{ rotate: 0, y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative group cursor-default"
        >
          {/* Paper Texture Effect */}
          <div className="absolute inset-0 bg-[#fdfbf7] shadow-2xl rounded-sm transform group-hover:scale-[1.01] transition-transform duration-500" />
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] pointer-events-none" />
          
          <div className="relative p-8 md:p-16 space-y-8 min-h-[600px] border-l-4 border-pink-200">
            <div className="flex justify-between items-center border-b border-pink-100 pb-4">
              <span className="font-serif text-lg text-pink-900/40 italic">Dear Nisha (My Chinu),</span>
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-pink-400">May 16, 2026</span>
            </div>

            <div className="font-cursive text-2xl md:text-3xl text-pink-900 leading-[1.8] space-y-6">
              <TypeAnimation
                sequence={[
                  `Initially idhu oru normal conversation thaan nu nenachen. Aana daily un kooda pesumpodhu thaan comfort level increase aachu. Un kitta matum thaan naan vera yaarukkum kaatadha oru soft side ah kaaturen.\n\n` +
                  `I still remember the moments when you supported me when I was down. Nee solra andha chinna chinna words kooda enaku romba motivate ah irukum. Happy birthday baby. Indha year matum illa, unna thittite un kooda life long irukanum.\n\n` +
                  `Prachanai varum, sanda varum, aana andha moments ellam un love kitta thothu pogum. Stay happy, stay cute, and stay with me forever. I'm so proud to have you as my better half.\n\n` +
                  `Love you to the moon and back ❤️`,
                  1000,
                ]}
                speed={70}
                style={{ whiteSpace: 'pre-line', display: 'block' }}
              />
            </div>

            <div className="pt-12 flex flex-col items-end border-t border-pink-100">
               <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 10 }}
                 className="text-right"
               >
                 <p className="font-cursive text-2xl text-pink-400 mb-2 italic">With endless love,</p>
                 <p className="font-serif text-3xl font-bold text-pink-600">Pattu ❤️</p>
                 <div className="mt-4 flex gap-2 justify-end">
                    <Heart className="text-pink-300 fill-pink-300" size={16} />
                    <Heart className="text-pink-400 fill-pink-400" size={16} />
                    <Heart className="text-pink-500 fill-pink-500" size={16} />
                 </div>
               </motion.div>
            </div>

            {/* Floaties on letter */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-8 -left-8 bg-white p-4 rounded-full shadow-lg border border-pink-100"
            >
              <Sparkles className="text-yellow-400" size={40} />
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-20 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/final')}
            className="px-12 py-5 bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 text-white rounded-full font-serif font-bold text-2xl shadow-[0_20px_50px_rgba(255,182,193,0.5)] flex items-center gap-3 mx-auto"
          >
            <span>One Final Surprise ✨</span>
            <Heart size={24} className="fill-white" />
          </motion.button>
        </div>
      </div>
    </PageTransition>
  );
}
