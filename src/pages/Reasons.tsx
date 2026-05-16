import { motion } from 'motion/react';
import { PageTransition } from '@/src/components/PageTransition';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation, Pagination } from 'swiper/modules';
import { Heart, Sparkles, Star, Quote, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const REASONS = [
  { id: 1, text: "Un smile ku naan addict 😭❤️", emoji: "🥰", detail: "Nee sirikumbodhu world eh azhaga theriyudhu." },
  { id: 2, text: "Nee kovama irundhalum cute ah dhan irupa", emoji: "😡", detail: "Andha moonji suzhikuradhu irukke... vera level!" },
  { id: 3, text: "Nee irukumbodhu stress eh disappear aidum", emoji: "💆‍♂️", detail: "Un kooda pesuna ellam marandhudum." },
  { id: 4, text: "The way you care for me... Motherly love feel", emoji: "🤗", detail: "Sapdiya, thunguniya nu keka aal irukradhu periya matter." },
  { id: 5, text: "Unnoda andha 'Loosu' calling... Enaku favorite", emoji: "🤡", detail: "Nee thitnalum adhu oru attraction thaan." },
  { id: 6, text: "You accept me as I am", emoji: "💖", detail: "Zero filters, just US." },
  { id: 7, text: "Best crime partner in everything", emoji: "👯‍♀️", detail: "Sanda podravom, sirippom, saapduvom." },
  { id: 8, text: "Your eyes speak more than words", emoji: "👀", detail: "Naan unna pakumbodhu ellam confuse aiduven." },
  { id: 9, text: "Every problem feels smaller with you", emoji: "🛡️", detail: "Nee iruka nu nambikai iruku." },
  { id: 10, text: "Simply because you are YOU", emoji: "💎", detail: "Unna maari innoru aal indha ulagathula illai." },
];

export default function Reasons() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-12 px-6 overflow-hidden">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <Quote className="text-pink-300 fill-pink-100" size={60} />
          </motion.div>
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-pink-600">Why I Love You</h2>
          <p className="font-cursive text-2xl text-pink-400 italic">Unlimited reasons, but here are my top 10...</p>
        </div>

        <div className="relative pt-10 pb-20">
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20 pointer-events-none">
             <div className="absolute top-10 left-10 animate-float" style={{ animationDelay: '0s' }}><Heart className="text-pink-400" size={40} /></div>
             <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}><Star className="text-yellow-400" size={30} /></div>
             <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: '2s' }}><Sparkles className="text-pink-300" size={50} /></div>
          </div>

          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Navigation, Pagination]}
            className="w-full max-w-[320px] md:max-w-[400px] h-[450px] md:h-[550px]"
            navigation
            pagination={{ clickable: true }}
          >
            {REASONS.map((reason) => (
              <SwiperSlide key={reason.id} className="rounded-[3rem] bg-white shadow-2xl p-8 border border-pink-50 flex flex-col items-center justify-center text-center space-y-8 glass">
                <div className="text-7xl md:text-8xl">{reason.emoji}</div>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl md:text-4xl font-bold text-pink-900 leading-tight">
                    {reason.text}
                  </h3>
                  <p className="text-pink-600 font-medium md:text-lg opacity-80 font-cursive">
                    "{reason.detail}"
                  </p>
                </div>
                <div className="pt-4">
                   <div className="w-12 h-1 bg-gradient-to-r from-pink-200 via-pink-400 to-pink-200 mx-auto rounded-full" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/fun')}
            className="group px-10 py-5 bg-pink-100 text-pink-600 rounded-full font-serif font-bold text-xl shadow-inner border border-pink-200 flex items-center gap-3 mx-auto hover:bg-pink-500 hover:text-white transition-all"
          >
            <span>Wanna play a game?</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>
      </div>
    </PageTransition>
  );
}
