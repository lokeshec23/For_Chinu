import { motion } from 'motion/react';
import { PageTransition } from '@/src/components/PageTransition';
import { Heart, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MEMORIES = [
  { id: 1, url: '/photos/20240309_102645 1.jpg', caption: 'Memory from Mar 2024 ❤️', rotation: -2, size: 'large' },
  { id: 2, url: '/photos/20251014_222030-CINEMATIC_exported_0.jpg', caption: 'Cinematic moment ✨', rotation: 3, size: 'small' },
  { id: 3, url: '/photos/IMG_20240202_154906_773 1.jpg', caption: 'Feb 2024 vibes 🙈', rotation: -1, size: 'medium' },
  { id: 4, url: '/photos/IMG_20250414_112411.jpg', caption: 'Sweet memories ♾️', rotation: 4, size: 'large' },
  { id: 5, url: '/photos/IMG_20250414_112418.jpg', caption: 'Happy days! 😊', rotation: -3, size: 'small' },
  { id: 6, url: '/photos/IMG_20251020_191129.jpg', caption: 'Love this one ❤️', rotation: 2, size: 'medium' },
  { id: 7, url: '/photos/IMG_20251111_104611.jpg', caption: 'Magic in the air ✨', rotation: -4, size: 'medium' },
  { id: 8, url: '/photos/IMG_20251111_104825.jpg', caption: 'Together forever ♾️', rotation: 3, size: 'large' },
  { id: 9, url: '/photos/IMG_20251111_104833.jpg', caption: 'Cute moments 🙈', rotation: -2, size: 'small' },
  { id: 10, url: '/photos/IMG_20251121_103836.jpg', caption: 'Our journey ❤️', rotation: 5, size: 'medium' },
  { id: 11, url: '/photos/IMG_20251219_103645.jpg', caption: 'Dec 2025 memories ✨', rotation: -3, size: 'large' },
  { id: 12, url: '/photos/IMG_20251219_165221.jpg', caption: 'Smiling through life 😊', rotation: 2, size: 'small' },
  { id: 13, url: '/photos/IMG_20251219_165236.jpg', caption: 'Pure happiness ❤️', rotation: -1, size: 'medium' },
  { id: 14, url: '/photos/IMG_20251219_184726.jpg', caption: 'Golden hour ✨', rotation: 4, size: 'large' },
  { id: 15, url: '/photos/IMG_20251221_111115.jpg', caption: 'Christmas vibes 🎄', rotation: -2, size: 'small' },
  { id: 16, url: '/photos/IMG_20251222_205949.jpg', caption: 'Night out 🌙', rotation: 3, size: 'medium' },
  { id: 17, url: '/photos/IMG_20251222_210005.jpg', caption: 'Under the stars ✨', rotation: -5, size: 'large' },
  { id: 18, url: '/photos/IMG_20260107_104340.jpg', caption: 'New Year, Same Love ❤️', rotation: 2, size: 'small' },
  { id: 19, url: '/photos/IMG_20260107_143813.jpg', caption: 'Fresh start ✨', rotation: -4, size: 'medium' },
  { id: 20, url: '/photos/IMG_20260108_205024.jpg', caption: 'Joyful moments 😊', rotation: 1, size: 'large' },
  { id: 21, url: '/photos/IMG_20260109_203742.jpg', caption: 'Cozy times ❤️', rotation: -3, size: 'small' },
  { id: 22, url: '/photos/IMG_20260109_203743.jpg', caption: 'Laughter shared ♾️', rotation: 4, size: 'medium' },
  { id: 23, url: '/photos/IMG_20260110_103424.jpg', caption: 'Beautiful day ✨', rotation: -2, size: 'large' },
  { id: 24, url: '/photos/IMG_20260113_101714.jpg', caption: 'Captured love ❤️', rotation: 5, size: 'small' },
  { id: 25, url: '/photos/IMG_20260115_135124.jpg', caption: 'Sunshine vibes ☀️', rotation: -1, size: 'medium' },
  { id: 26, url: '/photos/IMG_20260115_211633.jpg', caption: 'Evening glow ✨', rotation: 3, size: 'large' },
  { id: 27, url: '/photos/IMG_20260118_104650.jpg', caption: 'Weekend fun! 😊', rotation: -4, size: 'small' },
  { id: 28, url: '/photos/IMG_20260118_140800.jpg', caption: 'Memory lane ❤️', rotation: 2, size: 'medium' },
  { id: 29, url: '/photos/IMG_20260208_200345.jpg', caption: 'Feb 2026 ✨', rotation: -2, size: 'large' },
  { id: 30, url: '/photos/IMG_20260216_110739.jpg', caption: 'Love is in the air ❤️', rotation: 4, size: 'small' },
  { id: 31, url: '/photos/IMG_20260216_205733.jpg', caption: 'Dreamy eyes ✨', rotation: -5, size: 'medium' },
  { id: 32, url: '/photos/IMG_20260219_205856.jpg', caption: 'Midnight chats 🌙', rotation: 3, size: 'large' },
  { id: 33, url: '/photos/IMG_20260220_205554.jpg', caption: 'Unforgettable 😊', rotation: -1, size: 'small' },
  { id: 34, url: '/photos/IMG_20260220_205555.jpg', caption: 'Together ❤️', rotation: 2, size: 'medium' },
  { id: 35, url: '/photos/IMG_20260220_205558.jpg', caption: 'Always you ♾️', rotation: -3, size: 'large' },
  { id: 36, url: '/photos/IMG_20260224_205433_1.jpg', caption: 'Special moments ✨', rotation: 4, size: 'small' },
  { id: 37, url: '/photos/IMG_20260225_210000.jpg', caption: 'Captured magic ❤️', rotation: -2, size: 'medium' },
  { id: 38, url: '/photos/IMG_20260226_205709.jpg', caption: 'Deep in love ✨', rotation: 5, size: 'large' },
  { id: 39, url: '/photos/IMG_20260306_203652.jpg', caption: 'March memories 😊', rotation: -1, size: 'small' },
  { id: 40, url: '/photos/IMG_20260319_150011.jpg', caption: 'Spring vibes 🌸', rotation: 3, size: 'medium' },
  { id: 41, url: '/photos/IMG_20260320_205404.jpg', caption: 'Floral love ❤️', rotation: -4, size: 'large' },
  { id: 42, url: '/photos/IMG_20260325_205355.jpg', caption: 'Sparkling joy ✨', rotation: 2, size: 'small' },
  { id: 43, url: '/photos/IMG_20260327_183335.jpg', caption: 'Sunset hues 🌅', rotation: -2, size: 'medium' },
  { id: 44, url: '/photos/IMG_20260327_183502.jpg', caption: 'Peaceful times 😊', rotation: 4, size: 'large' },
  { id: 45, url: '/photos/IMG_20260327_183515.jpg', caption: 'Endless love ♾️', rotation: -3, size: 'small' },
  { id: 46, url: '/photos/IMG_20260403_104126.jpg', caption: 'April showers 🌧️', rotation: 5, size: 'medium' },
  { id: 47, url: '/photos/IMG_20260414_201833.jpg', caption: 'Anniversary feel ✨', rotation: -1, size: 'large' },
  { id: 48, url: '/photos/IMG_20260424_204149.jpg', caption: 'Simply us ❤️', rotation: 3, size: 'small' },
  { id: 49, url: '/photos/IMG_20260507_170404.jpg', caption: 'May flowers 💐', rotation: -2, size: 'medium' },
  { id: 50, url: '/photos/IMG_20260515_205434.jpg', caption: 'Latest memory ❤️', rotation: 4, size: 'large' },
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

        {/* Proper Masonry Collage Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-8">
          {MEMORIES.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, scale: 0.9, rotate: memory.rotation * 2 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                rotate: memory.rotation 
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: (index % 10) * 0.05, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                zIndex: 50,
                transition: { duration: 0.3 }
              }}
              className="break-inside-avoid bg-white p-3 shadow-[0_15px_35px_rgba(0,0,0,0.1)] rounded-sm border-[6px] border-white group relative mb-8"
            >
              {/* Decorative Elements */}
              <div className="absolute top-2 right-2 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100 z-20 shadow-lg">
                <Heart className="text-white fill-white" size={14} />
              </div>

              <div className="overflow-hidden bg-gray-50 rounded-xs">
                <img
                  src={memory.url}
                  alt={memory.caption}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="mt-4 pb-2 text-center space-y-1">
                <p className="font-cursive text-xl text-pink-900 leading-tight">
                  {memory.caption}
                </p>
                <div className="flex items-center justify-center gap-1.5 text-pink-200">
                  <Camera size={12} />
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] font-sans">Moment #{memory.id}</span>
                </div>
              </div>

              {/* Tape effects with nested look */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-white/40 backdrop-blur-[1px] border border-white/20 -rotate-2 shadow-sm z-10" />
              
              {/* Background Glow */}
              <div className="absolute inset-0 -z-10 bg-pink-100/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
