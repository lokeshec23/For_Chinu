/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeartTrail } from './components/HeartTrail';
import { FloatingHearts } from './components/FloatingHearts';
import { MusicPlayer } from './components/MusicPlayer';
import { CursorGlow } from './components/CursorGlow';

import Welcome from './pages/Welcome';
import Hero from './pages/Hero';
import Scrapbook from './pages/Scrapbook';
import Timeline from './pages/Timeline';
import Reasons from './pages/Reasons';
import Fun from './pages/Fun';
import Letter from './pages/Letter';
import Final from './pages/Final';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Welcome />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/scrapbook" element={<Scrapbook />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/reasons" element={<Reasons />} />
          <Route path="/fun" element={<Fun />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/final" element={<Final />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-romantic-gradient selection:bg-pink-200 selection:text-pink-900 overflow-hidden">
        {/* Sleek Design Aura Backgrounds */}
        <div className="aura-bg top-[-100px] left-[-100px]" />
        <div className="aura-bg bottom-[-100px] right-[-100px]" />
        
        <ScrollToTop />
        <HeartTrail />
        <FloatingHearts />
        <CursorGlow />
        <MusicPlayer />
        <AppRoutes />
      </div>
    </Router>
  );
}
