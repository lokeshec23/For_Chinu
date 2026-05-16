import { motion } from 'motion/react';
import { PageTransition } from '@/src/components/PageTransition';
import { MessageCircle, Heart, Camera, PartyPopper, Users, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TIMELINE = [
  {
    id: 1,
    title: 'First Talk',
    description: 'Enakku innum nyabagam iruku... andha first "Hi" message. Tension la typo pannen 🙈',
    date: 'Dec 15, 2024',
    icon: MessageCircle,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 2,
    title: 'Best Friends?',
    description: 'Namma hours kanakka pesunom. Ellam share pannunom. Comfort zone correct ah amanjuchu.',
    date: 'Jan 20, 2024',
    icon: Users,
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    id: 3,
    title: 'That Special Day',
    description: 'Realised that I can\'t live without you. Andha confession... "I Love You Chinu" ❤️',
    date: 'Feb 14, 2024',
    icon: Heart,
    color: 'bg-red-100 text-red-600',
  },
  {
    id: 4,
    title: 'First Selfie',
    description: 'Nee oru side paathu pose kudutha, naan mattum dummy ah unna paathutu irundhen. Cute click!',
    date: 'Mar 10, 2024',
    icon: Camera,
    color: 'bg-teal-100 text-teal-600',
  },
  {
    id: 5,
    title: 'First Big Fight',
    description: 'Kovama irundhutu sapdalam la nu sonna paaru... Anga thaan sanda mudinjuchu 😂',
    date: 'May 05, 2024',
    icon: PartyPopper,
    color: 'bg-orange-100 text-orange-600',
  },
  {
    id: 6,
    title: 'Birthday Celebration',
    description: 'Together forever... Innaiku un special day. Indha timeline innum perusa pogum ♾️',
    date: 'Today',
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
                className={`relative flex items-center justify-between flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
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
