import { Heart, Music, Menu, X, Home, BookHeart, CalendarHeart, Smile, Ghost, Mail, Sparkles, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { motion, useScroll, useSpring } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Hero', path: '/hero', icon: Sparkles },
    { name: 'Scrapbook', path: '/scrapbook', icon: BookHeart },
    { name: 'Timeline', path: '/timeline', icon: CalendarHeart },
    { name: 'Reasons', path: '/reasons', icon: Smile },
    { name: 'Fun', path: '/fun', icon: Ghost },
    { name: 'Letter', path: '/letter', icon: Mail },
    { name: 'Final', path: '/final', icon: Heart },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      document.body.style.backgroundColor = '#1a0b14';
      document.body.style.color = '#ffd1dc';
    } else {
      document.body.classList.remove('dark');
      document.body.style.backgroundColor = '#fff5f7';
      document.body.style.color = '#4a3035';
    }
  }, [isDark]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-pink-400 origin-left z-[100]"
        style={{ scaleX }}
      />
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
        <div className="glass px-6 py-3 rounded-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-serif font-bold text-pink-600 text-xl">
            <Heart className="fill-pink-500 text-pink-500" size={24} />
            <span>Chinu ❤️</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.slice(0, 4).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-pink-500",
                  location.pathname === item.path ? "text-pink-600" : "text-pink-900/60"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsDark(!isDark)}
                className="p-2 bg-pink-50 rounded-full text-pink-600 hover:bg-pink-100 transition-colors"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button 
                onClick={() => setIsOpen(true)}
                className="p-2 bg-pink-100 rounded-full text-pink-600 hover:bg-pink-200 transition-colors"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 text-pink-600"
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button 
              className="p-2 text-pink-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Fullscreen Overlay Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20, pointerEvents: 'none' }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            y: isOpen ? 0 : -20,
            pointerEvents: isOpen ? 'auto' : 'none'
          }}
          className="fixed inset-[-1rem] bg-pink-50/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center pt-20"
        >
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 p-3 bg-pink-100 rounded-full text-pink-600"
          >
            <X size={24} />
          </button>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 max-w-4xl w-full">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.8 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  to={item.path}
                  className={cn(
                    "flex flex-col items-center gap-3 p-6 rounded-3xl transition-all hover:bg-pink-100/50 hover:scale-105",
                    location.pathname === item.path ? "bg-white shadow-md text-pink-600" : "text-pink-900/60"
                  )}
                >
                  <item.icon size={32} />
                  <span className="font-serif font-bold text-lg">{item.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="mt-20 font-cursive text-2xl text-pink-400">Made with love for you ♾️</p>
        </motion.div>
      </nav>
    </>
  );
}
