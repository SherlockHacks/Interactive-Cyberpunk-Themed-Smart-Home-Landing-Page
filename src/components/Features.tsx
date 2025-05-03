import React from 'react';
import { LightbulbIcon, SunIcon, ShieldIcon, ActivityIcon, GaugeIcon, BoxIcon } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
export const Features = () => {
  const features = [{
    name: 'Smart Lighting',
    description: 'Control all lights with voice commands or automated schedules.',
    icon: LightbulbIcon
  }, {
    name: 'Solar Monitoring',
    description: 'Real-time monitoring of your solar energy production and consumption.',
    icon: SunIcon
  }, {
    name: 'Security Integration',
    description: 'Motion sensors and security systems that protect your home.',
    icon: ShieldIcon
  }, {
    name: 'Remote Access',
    description: 'Control your entire home from anywhere using our secure mobile app.',
    icon: BoxIcon
  }, {
    name: 'Automation',
    description: 'Create custom routines that respond to your lifestyle patterns.',
    icon: ActivityIcon
  }, {
    name: 'Energy Efficiency',
    description: "Optimize your home's energy usage for maximum savings.",
    icon: GaugeIcon
  }];
  return <section id="features" className="py-16 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,200,255,0.1)_0%,rgba(0,0,0,0)_50%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="lg:text-center">
            <h2 className="text-base text-cyan-400 font-semibold tracking-wide uppercase animate-text-shimmer">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Smart Home Technology at Your Fingertips
            </p>
            <p className="mt-4 max-w-2xl text-xl text-cyan-100/70 lg:mx-auto">
              Our comprehensive smart home solutions provide convenience,
              security, and efficiency.
            </p>
          </div>
        </ScrollReveal>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => <ScrollReveal key={feature.name} delay={200 + index * 100} direction={index % 2 === 0 ? 'left' : 'right'}>
                <div className="group relative p-6 border border-cyan-900/50 rounded-lg bg-gray-800/30 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/50 hover:border-cyan-500/50 card-cyberpunk">
                  <div className="relative">
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white group-hover:animate-pulse-glow">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-cyan-100">
                      {feature.name}
                    </p>
                  </div>
                  <div className="mt-2 ml-16 text-base text-cyan-200/60">
                    {feature.description}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                </div>
              </ScrollReveal>)}
          </div>
        </div>
      </div>
    </section>;
};