import { motion } from 'motion/react';
import { PageTransition } from '@/src/components/PageTransition';
import { MessageCircle, Heart, Camera, PartyPopper, Users, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TIMELINE = [
  {
    id: 1,
    title: 'Antha Oru ‘Sorry’ dhan Ellathukum Start',
    description: 'Enaku therila chinu ma, namba school time la evol pesunathu ila but I remeber Keerthana akka mrg la unkita nanu pesuna first work "Sorry" 🤣',
    date: 'Feb 22, 2023',
    icon: MessageCircle,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 2,
    title: 'Final Exam ku Apram Vandha Sweet Twist',
    description: 'Today ennoda final semister oda final exam mudinjuthu veeduku poga bus ku wait panidu irutha, apo again una patha and unnoda company oda HR number vaaguna...',
    date: 'May 05, 2023',
    icon: Users,
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    id: 3,
    title: 'Aniki dhan Therinjuthu... Nee Oru Comeback Friend nu',
    description: "After apply job in AB, I came for interview unnoda pakathula ukaji first round test attend panna happinees innum apdiya iruku...EOD la enaku therichi inime ennoda life la oru comeback friend vara poranu 🤝🏻",
    date: 'Sep 22, 2023',
    icon: Heart,
    color: 'bg-red-100 text-red-600',
  },
  {
    id: 4,
    title: 'Office First Day la Kidaicha Oru Deva Thoothan 🤍',
    description: 'Ennoda life maraka mudiyath moments la ennode first office AB la first day, office poga nenu enaku help panna, As ennoda life la vantha Deva thoothan Nee',
    date: 'Aug 03, 2023',
    icon: Camera,
    color: 'bg-teal-100 text-teal-600',
  },
  {
    id: 5,
    title: 'Nee Just Friend Ila nu Purinja Naal 🌸',
    description: 'Nambakula vantha first sanda... maraka matta That UI issuse, atha sanda la 2 days nenu enkita pesala apo tha onnu pujichithu nenu enaku just friend ila. You are something beynod that',
    date: 'Dec 08, 2023',
    icon: PartyPopper,
    color: 'bg-orange-100 text-orange-600',
  },
  {
    id: 6,
    title: 'Nisha Iruka Edam la Lokesh Kandipa Irupan ❤️',
    description: 'Aprom one years neriya sanda, neriya care, neriya talks, life la happines and oru girl epdi treat pananu respect pannu nu therichiten... as one place la nisha irutha anga tha lokesh nu irupanu solra aalavku namba friendship iruthathu',
    date: 'June 15, 2025',
    icon: Star,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    id: 7,
    title: 'Words la Solla Mudiyatha Oru Feeling 🤍',
    description: "On This day suddely I feel something different, I cant express that feeling in words, Unmela oru feeling mind full la orra confusion... but still nanu atha feelings haa unkita sollala ",
    date: 'July 03, 2025',
    icon: Star,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    id: 8,
    title: 'Miracles Unmaya nu Purinja Maraka Mudiyatha Naal ✨',
    description: 'Ennoda Life la maraka mudiyatha athan naal vanduthu, Life is full of surprises and miracles nu soluvanga, athu unmaya iruku nu aniku dhan purinjuthu 🤍, ennoda half and reamaining life haa unoda spend panna mudiu panna day, that is our Nose Day',
    date: 'july 04, 2025',
    icon: Star,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    id: 9,
    title: 'En Another Half ah Kandupidicha Naal 🤍',
    description: 'On next day OMG, I found my another half, My wify, My life partner, My Chinu ma. Namaba panna First 😘 day',
    date: 'July 05, 2025',
    icon: Star,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    id: 10,
    title: 'HR Number la Aarambichu Heart vara Vandhuta ❤️',
    description: 'Aprm nadathu ellam yedo dream mari iruku chinu ma. Stranger la school la iruthu, normal friend haa one day HR number vaagi, aprm best friend aagi, konjam konjam ma una naa pudichika, nenu ena purijika, epo ennoda full la nee tha iruka',
    date: 'July 06, 2025',
    icon: Star,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    id: 11,
    title: 'Shadow pola Life Long Un Kooda 😌',
    description: 'Today ennoda devathiku piratha naal, Happy Birthday chinu ma, 🎂🥳🎉 shadow pola unkuda life long irutha chinu ma unnoda full happinees nanu karanama irupa. Love you sooooo much 😘😘😘',
    date: 'May 19, 2026',
    icon: Star,
    color: 'bg-yellow-100 text-yellow-600',
  },

];

export default function Timeline() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-serif text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-rose-400">Our Story</h2>
          <p className="font-cursive text-2xl text-pink-400">Every second with you is a milestone...</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-pink-100 -translate-x-1/2" />

          <div className="space-y-16">
            {TIMELINE.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: 'spring' }}
                className={`relative flex items-center justify-between flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-[42%] ml-12 md:ml-0">
                  <div className="glass p-6 md:p-8 rounded-[2rem] border-white/60 hover:shadow-2xl transition-all group overflow-hidden">
                    <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <item.icon size={24} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-pink-400 mb-2 block">{item.date}</span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-pink-900 mb-3">{item.title}</h3>
                    <p className="text-pink-800/70 leading-relaxed font-medium">{item.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white border-4 border-pink-400 rounded-full -translate-x-1/2 flex items-center justify-center z-10 shadow-lg">
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-ping" />
                </div>

                {/* Date/Label for desktop (opposite side) */}
                <div className={`hidden md:block w-[42%] text-center ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <span className="font-serif text-4xl font-bold text-pink-200">{item.date.split(',')[1] || 'Happy Birthday'}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/reasons')}
            className="group px-12 py-6 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-full font-serif font-bold text-2xl shadow-xl shadow-rose-200/50 flex items-center gap-4 mx-auto"
          >
            <span>Reasons Why I Love You</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>
      </div>
    </PageTransition>
  );
}
