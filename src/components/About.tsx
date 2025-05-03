import React from 'react';
import { ScrollReveal } from './ScrollReveal';
export const About = () => {
  return <section id="about" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <ScrollReveal direction="left">
            <div>
              <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase animate-text-shimmer">
                About Us
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                Pakistan's Leading Smart Home Provider
              </p>
              <p className="mt-4 text-lg text-gray-400">
                We specialize in transforming ordinary homes into intelligent
                living spaces. Our team of experts designs and implements custom
                smart home solutions that perfectly match your lifestyle and
                requirements.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white group-hover:animate-pulse-glow transition-transform duration-300 group-hover:scale-110">
                      ✓
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-white">
                      Experienced Professionals
                    </h3>
                    <p className="mt-2 text-base text-gray-400">
                      Our team brings years of experience in smart home
                      technology implementation.
                    </p>
                  </div>
                </div>
                <div className="flex group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white group-hover:animate-pulse-glow transition-transform duration-300 group-hover:scale-110">
                      ✓
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-white">
                      Quality Assurance
                    </h3>
                    <p className="mt-2 text-base text-gray-400">
                      We use only premium components and provide comprehensive
                      warranties.
                    </p>
                  </div>
                </div>
                <div className="flex group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white group-hover:animate-pulse-glow transition-transform duration-300 group-hover:scale-110">
                      ✓
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-white">
                      Ongoing Support
                    </h3>
                    <p className="mt-2 text-base text-gray-400">
                      Our relationship doesn't end after installation - we
                      provide continuous technical support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={300}>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative mx-auto w-full rounded-lg shadow-lg overflow-hidden animate-float">
                <img className="w-full object-cover h-[400px]" src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80" alt="Smart home professional installing system" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>;
};