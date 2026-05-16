import { motion } from 'motion/react';
import { PageTransition } from '@/src/components/PageTransition';
import { Heart, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MEMORIES = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2070&auto=format&fit=crop',
    caption: 'Andha first day... marakave mudiyathu ❤️',
    rotation: -3,
    size: 'large'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1516589174184-c6848463ea70?q=80&w=1974&auto=format&fit=crop',
    caption: 'Cute ah oru rowdy baby 🙈',
    rotation: 5,
    size: 'small'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1529333166457-e8cda3be584d?q=80&w=2070&auto=format&fit=crop',
    caption: 'Every moment with you is golden ✨',
    rotation: -2,
    size: 'medium'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1494972308255-02ef55ad980c?q=80&w=2070&auto=format&fit=crop',
    caption: 'Un kooda sanda podradhum pudichuku 😜',
    rotation: 4,
    size: 'large'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=2071&auto=format&fit=crop',
    caption: 'Best partner ever! ♾️',
    rotation: -4,
    size: 'small'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1888&auto=format&fit=crop',
    caption: 'Smiling through life together ❤️',
    rotation: 2,
    size: 'medium'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1529333166457-e8cda3be584d?q=80&w=2070&auto=format&fit=crop',
    caption: 'Every moment with you is golden ✨',
    rotation: -2,
    size: 'medium'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1529333166457-e8cda3be584d?q=80&w=2070&auto=format&fit=crop',
    caption: 'Every moment with you is golden ✨',
    rotation: -2,
    size: 'medium'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1529333166457-e8cda3be584d?q=80&w=2070&auto=format&fit=crop',
    caption: 'Every moment with you is golden ✨',
    rotation: -2,
    size: 'medium'
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1529333166457-e8cda3be584d?q=80&w=2070&auto=format&fit=crop',
    caption: 'Every moment with you is golden ✨',
    rotation: -2,
    size: 'medium'
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1529333166457-e8cda3be584d?q=80&w=2070&auto=format&fit=crop',
    caption: 'Every moment with you is golden ✨',
    rotation: -2,
    size: 'medium'
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1529333166457-e8cda3be584d?q=80&w=2070&auto=format&fit=crop',
    caption: 'Every moment with you is golden ✨',
    rotation: -2,
    size: 'medium'
  },
];

export default function Scrapbook() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-4">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-pink-600">Our Scrapbook</h2>
            <p className="font-cursive text-2xl text-pink-400">Captured moments, everlasting love...</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/timeline')}
            className="px-8 py-3 bg-white border-2 border-pink-100 text-pink-600 rounded-full font-bold shadow-sm flex items-center gap-2 hover:bg-pink-50 transition-colors"
          >
            <span>Next Chapter</span>
            <Heart size={18} />
          </motion.button>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-12">
          {MEMORIES.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: memory.rotation }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{
                scale: 1.02,
                rotate: 0,
                zIndex: 10,
                transition: { duration: 0.3 }
              }}
              className="break-inside-avoid bg-white p-4 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] rounded-sm border-8 border-white group relative"
            >
              <div className="absolute top-4 right-6 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <div className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  Memory #{memory.id}
                </div>
              </div>

              <div className="overflow-hidden bg-gray-50 aspect-[4/5] sm:aspect-auto">
                <img
                  src={memory.url}
                  alt={memory.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                  style={{ opacity: 0.9 }}
                />
              </div>

              <div className="mt-6 text-center space-y-2">
                <p className="font-cursive text-2xl text-pink-900 leading-tight">
                  {memory.caption}
                </p>
                <div className="flex items-center justify-center gap-1 text-pink-300">
                  <Camera size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest font-sans">Captured with Love</span>
                </div>
              </div>

              {/* Tape effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm border border-white/20 -rotate-2" />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-20 text-center glass rounded-[3rem] border-white max-w-3xl mx-auto border-dashed border-2">
          <Heart className="mx-auto mb-6 text-pink-300" size={48} />
          <p className="font-serif text-3xl italic text-pink-900/60 leading-relaxed">
            "Photos are just triggers. Real memories are stored in my heart, playing on repeat every time I close my eyes."
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
