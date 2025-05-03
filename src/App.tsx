import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { InteractiveDemo } from './components/InteractiveDemo';
import { EnergyMonitor } from './components/EnergyMonitor';
import { Packages } from './components/Packages';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { PowerProvider } from './components/PowerContext';
export function App() {
  return <div className="bg-cyberpunk text-white min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <PowerProvider>
        <Navbar />
        <main>
          <Hero />
          <Features />
          <InteractiveDemo />
          <EnergyMonitor />
          <Packages />
          <About />
          <Contact />
        </main>
        <Footer />
      </PowerProvider>
    </div>;
}