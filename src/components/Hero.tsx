import React from 'react';
import { ChevronRightIcon } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
export const Hero = () => {
  return <section id="home" className="relative bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-blue-900/30 to-cyan-900/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.1)_0%,rgba(0,0,0,0)_100%)]"></div>
        <img src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Dystopian city background" className="w-full h-full object-cover opacity-30 scale-105 animate-subtle-drift" />
        {/* Animated overlay elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" style={{
        animationDelay: '1.5s'
      }}></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <ScrollReveal delay={200}>
            <div className="relative inline-block">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                <span className="block mb-2 text-cyan-400/80 animate-text-shimmer">
                  Transform Your Home With
                </span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent relative">
                  Intelligent Automation
                  <span className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-30 blur-xl -z-10 animate-pulse-glow"></span>
                </span>
              </h1>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={400} direction="up">
            <p className="mt-6 max-w-lg mx-auto text-xl text-cyan-100/70">
              Elevate your living experience with our premium smart home
              solutions, tailored to your property's unique requirements.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={600} direction="up">
            <div className="mt-10 flex justify-center gap-4">
              <a href="#packages" className="group px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 relative overflow-hidden btn-cyberpunk animate-border-glow">
                <span className="relative z-10">View Packages</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a href="#contact" className="group px-8 py-3 border border-cyan-500/30 text-base font-medium rounded-md text-cyan-400 bg-gray-800/50 hover:bg-gray-700 md:py-4 md:text-lg md:px-10 flex items-center backdrop-blur-sm">
                Contact Us{' '}
                <ChevronRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>;
};