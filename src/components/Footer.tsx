import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, CircuitBoardIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="flex items-center group">
            <CircuitBoardIcon className="h-8 w-8 text-blue-500 transform rotate-45 group-hover:text-cyan-400 transition-colors duration-300" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:animate-text-shimmer">
              Effinest
            </span>
          </div>
        </div>
        <nav className="mt-8 flex flex-wrap justify-center" aria-label="Footer">
          {['Home', 'Features', 'Packages', 'About', 'Contact'].map(item => <div key={item} className="px-5 py-2">
              <a href={`#${item.toLowerCase()}`} className="text-base text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                {item}
              </a>
            </div>)}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {[{
          name: 'Facebook',
          icon: FacebookIcon
        }, {
          name: 'Twitter',
          icon: TwitterIcon
        }, {
          name: 'Instagram',
          icon: InstagramIcon
        }].map(item => <a key={item.name} href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" />
            </a>)}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2023 SmartHaven. All rights reserved.
        </p>
      </div>
    </footer>;
};