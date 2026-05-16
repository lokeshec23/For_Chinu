import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageTransition } from '@/src/components/PageTransition';
import { HelpCircle, Gift, Heart, Sparkles, X, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';

const QUESTIONS = [
  {
    q: "Ennoda favorite thing about you?",
    options: ["Smile", "Nature", "Aggression 😜", "Everything"],
    correct: 3,
    tanglish: "Ellame thaan baby!"
  },
  {
    q: "Etha List la unaku romba pudichavaga yaru?",
    options: ["Lokesh 🤴", "Ammu 👸", "Amma 👩", "Pattu 🧸"],
    correct: 1,
    tanglish: "Ammu thaan always top priority!"
  },
  {
    q: "Who says 'I Love You' more?",
    options: ["Me", "You", "Both equally", "Only Me 😂"],
    correct: 2,
    tanglish: "Namma rendubarum thaan competitive ah solluvom!"
  }
];

export default function Fun() {
  const [currentQ, setCurrentQ] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (idx: number) => {
    if (idx === QUESTIONS[currentQ].correct) {
      setScore(score + 1);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff0000', '#ffa500', '#ff69b4']
      });
    }

    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-pink-600 mb-4">Let's Have Fun!</h2>
          <p className="font-cursive text-2xl text-pink-400 italic">How well do you know US?</p>
        </div>

        {!showResult ? (
          <motion.div
            key={currentQ}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="glass p-8 md:p-12 rounded-[3rem] border-white shadow-2xl space-y-10 max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-4 text-pink-400">
              <HelpCircle size={32} />
              <span className="font-bold tracking-widest uppercase text-sm">Question {currentQ + 1} / {QUESTIONS.length}</span>
            </div>
            <h3 className="font-serif text-3xl font-bold text-pink-900 leading-tight">
              {QUESTIONS[currentQ].q}
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {QUESTIONS[currentQ].options.map((opt, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(idx)}
                  className="p-5 text-left bg-white/50 border-2 border-pink-100 rounded-2xl hover:border-pink-500 hover:bg-pink-50 transition-all font-medium text-pink-900 flex items-center justify-between group"
                >
                  <span>{opt}</span>
                  <Heart size={18} className="text-pink-200 group-hover:text-pink-500 transition-colors" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center space-y-10 glass p-12 rounded-[3rem] max-w-2xl mx-auto"
          >
            <div className="relative inline-block">
               <div className="absolute inset-0 bg-pink-400 blur-2xl opacity-20 animate-pulse" />
               <CheckCircle2 size={80} className="text-pink-500 mx-auto relative" />
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-4xl font-bold text-pink-900">Quiz Over Baby!</h3>
              <p className="text-2xl font-cursive text-pink-600">You scored {score}/{QUESTIONS.length}!</p>
              <p className="text-pink-400 font-medium">Result: {score > 1 ? "You know me too well! ❤️" : "Hmm... sanda podanum pola? 😂"}</p>
            </div>
            <button
               onClick={() => setShowSurprise(true)}
               className="px-10 py-5 bg-pink-500 text-white rounded-full font-serif font-bold text-xl shadow-xl hover:bg-pink-600 transition-all animate-bounce"
            >
              Click for Hidden Surprise 🎁
            </button>
          </motion.div>
        )}

        <AnimatePresence>
          {showSurprise && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-pink-900/40 backdrop-blur-md flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.5, y: 100 }}
                animate={{ scale: 1, y: 0 }}
                className="bg-white rounded-[3rem] p-8 md:p-12 max-w-lg w-full relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-300 via-rose-500 to-pink-300" />
                <button 
                  onClick={() => setShowSurprise(false)}
                  className="absolute top-6 right-6 p-2 hover:bg-pink-100 rounded-full text-pink-400 transition-colors"
                >
                  <X size={24} />
                </button>
                <div className="text-center space-y-8">
                  <motion.div 
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Gift size={64} className="text-pink-500 mx-auto" />
                  </motion.div>
                  <div className="space-y-4">
                    <h4 className="font-serif text-3xl font-bold text-pink-900">Virtual Hug & Kiss! 💋</h4>
                    <p className="text-xl font-cursive text-pink-600 leading-relaxed">
                      "I wish I could be there to pull your cheeks right now. Stay as my same old lovely drama queen forever!"
                    </p>
                  </div>
                  <div className="flex justify-center gap-4">
                    {[1,2,3,4,5].map(i => (
                      <Heart key={i} className="text-pink-400 fill-pink-400" size={24} />
                    ))}
                  </div>
                  <button
                    onClick={() => navigate('/letter')}
                    className="w-full py-4 bg-pink-50 hover:bg-pink-100 text-pink-600 rounded-2xl font-bold transition-all flex items-center justify-center gap-2"
                  >
                    <span>Read my heart</span>
                    <Sparkles size={18} />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
