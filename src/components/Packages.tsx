import React, { useState } from 'react';
import { LightbulbIcon, SunIcon, ShieldIcon, SmartphoneIcon, MicIcon, BatteryChargingIcon, SpeakerIcon, ActivityIcon, ClockIcon, HeadphonesIcon, BarChart3Icon, BoxIcon } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
export const Packages = () => {
  const [hoveredPackage, setHoveredPackage] = useState<number | null>(null);
  const packages = [{
    name: '10 Marla Package',
    price: '700,000 PKR',
    description: 'Perfect for smaller homes, our entry-level smart home package.',
    features: [{
      text: 'Smart switches for all rooms',
      icon: LightbulbIcon
    }, {
      text: 'WLED controls',
      icon: SunIcon
    }, {
      text: 'Basic motion sensors',
      icon: ActivityIcon
    }, {
      text: 'Mobile app control',
      icon: SmartphoneIcon
    }, {
      text: 'Voice assistant integration',
      icon: MicIcon
    }, {
      text: 'Solar system monitoring',
      icon: BatteryChargingIcon
    }],
    highlight: false
  }, {
    name: '1 Kanal Package',
    price: '1,200,000 PKR',
    description: 'Our most popular package for medium-sized properties.',
    features: [{
      text: 'All features from 10 Marla',
      icon: LightbulbIcon
    }, {
      text: 'Advanced motion sensors',
      icon: ShieldIcon
    }, {
      text: 'Automated shade controls',
      icon: BoxIcon
    }, {
      text: 'Smart wall panels in main areas',
      icon: ActivityIcon
    }, {
      text: 'Enhanced security integration',
      icon: ShieldIcon
    }, {
      text: 'Custom automation scenarios',
      icon: ClockIcon
    }],
    highlight: true
  }, {
    name: '2 Kanal Package',
    price: '1,500,000 PKR',
    description: 'Premium solution for larger homes with advanced requirements.',
    features: [{
      text: 'All features from 1 Kanal',
      icon: LightbulbIcon
    }, {
      text: 'Wall panels in every room',
      icon: BoxIcon
    }, {
      text: 'Advanced scene control',
      icon: ActivityIcon
    }, {
      text: 'Multi-zone audio integration',
      icon: HeadphonesIcon
    }, {
      text: 'Enhanced energy monitoring',
      icon: BarChart3Icon
    }, {
      text: 'Priority support & maintenance',
      icon: ShieldIcon
    }],
    highlight: false
  }];
  return <section id="packages" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase animate-text-shimmer">
              Pricing
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Smart Home Packages
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
              Choose the perfect smart home solution based on your property
              size.
            </p>
          </div>
        </ScrollReveal>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, index) => <ScrollReveal key={pkg.name} delay={300 + index * 150} direction="up">
              <div className={`rounded-lg shadow-lg overflow-hidden transition-all duration-500 card-cyberpunk
                  ${pkg.highlight ? 'border-2 border-blue-500 transform scale-105 z-10 bg-gray-800' : 'border border-gray-800 bg-gray-800/70'} 
                  ${hoveredPackage === index ? 'animate-border-glow' : ''}`} onMouseEnter={() => setHoveredPackage(index)} onMouseLeave={() => setHoveredPackage(null)}>
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold text-white">
                      {pkg.price}
                    </span>
                  </div>
                  <p className="mt-5 text-lg text-gray-400">
                    {pkg.description}
                  </p>
                </div>
                <div className="px-6 pt-6 pb-8">
                  <h4 className="text-sm uppercase tracking-wide font-semibold text-blue-400 mb-4">
                    What's included
                  </h4>
                  <ul className="space-y-4">
                    {pkg.features.map((feature, featureIndex) => <li key={feature.text} className="flex items-start">
                        <div className="flex-shrink-0">
                          <feature.icon className={`h-5 w-5 text-cyan-400 transition-transform duration-300 ${hoveredPackage === index ? 'scale-125' : ''}`} style={{
                      transitionDelay: `${featureIndex * 50}ms`
                    }} />
                        </div>
                        <p className="ml-3 text-base text-gray-300">
                          {feature.text}
                        </p>
                      </li>)}
                  </ul>
                  <div className="mt-8">
                    <a href="#contact" className={`block w-full px-4 py-3 text-center rounded-md shadow btn-cyberpunk
                        ${pkg.highlight ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}>
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>)}
        </div>
      </div>
    </section>;
};