import { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX, SkipForward, SkipBack } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

// SONG LIST - Add your local files to /public/songs/
const SONG_LIST = [
  {
    title: "Kadhaigalai Pesum ❤️",
    url: "/songs/Kadhaigalai Pesum.mp3"
  },
  {
    title: "Munbe Va",
    url: "/songs/Munbe Va.mp3"
  },
  {
    title: "Pirai Thedum Iravil ",
    url: "/songs/Pirai thedum iravile.mp3"
  },
  {
    title: "Yale Yale Maruthu",
    url: "/songs/Suthamula Uthami.mp3"
  },
  {
    title: "Thuli Thuli Mazhai",
    url: "/songs/Thuli thuli.mp3"
  },
  {
    title: "Ayyayo Nenju Alayuthadi",
    url: "/songs/ayyayo nenju alayuthadi.mp3"
  },
  {
    title: "Engeyo Partha Mayakkam",
    url: "/songs/Engeyo Partha Mayakkam.mp3"
  },
  {
    title: "Manmadhane Nee",
    url: "/songs/Manmadhane Nee.mp3"
  }
];

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleStart = () => setIsPlaying(true);
    window.addEventListener('startMusic', handleStart);
    return () => window.removeEventListener('startMusic', handleStart);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay blocked - wait for user interaction
          const startPlay = () => {
            audio.play().catch(() => {});
            window.removeEventListener('click', startPlay);
          };
          window.addEventListener('click', startPlay);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying, currentSongIndex]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % SONG_LIST.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + SONG_LIST.length) % SONG_LIST.length);
    setIsPlaying(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            className="glass p-4 rounded-3xl flex items-center gap-4 border-pink-200 min-w-[240px]"
          >
            <div className="flex flex-col flex-1 overflow-hidden">
              <span className="text-[10px] font-bold text-pink-600 uppercase tracking-widest">Now Playing</span>
              <span className="text-sm font-bold text-pink-900 truncate leading-snug">
                {SONG_LIST[currentSongIndex].title}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={prevSong}
                className="p-1.5 hover:bg-pink-100 rounded-full text-pink-600 transition-colors"
              >
                <SkipBack size={16} />
              </button>
              <button
                onClick={togglePlay}
                className="p-2.5 bg-pink-500 rounded-full text-white hover:bg-pink-600 transition-all shadow-lg hover:scale-110 active:scale-95"
              >
                {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
              </button>
              <button
                onClick={nextSong}
                className="p-1.5 hover:bg-pink-100 rounded-full text-pink-600 transition-colors"
              >
                <SkipForward size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setShowControls(!showControls)}
        className={cn(
          "w-14 h-14 rounded-full glass flex items-center justify-center transition-all shadow-xl hover:scale-110 active:scale-95 border-pink-200",
          isPlaying ? "animate-pulse border-pink-400" : ""
        )}
      >
        <Music className={cn("transition-colors focus:outline-none", isPlaying ? "text-pink-600" : "text-pink-300")} size={24} />
      </button>

      <audio
        ref={audioRef}
        src={SONG_LIST[currentSongIndex].url}
        onEnded={nextSong}
      />
    </div>
  );
}
