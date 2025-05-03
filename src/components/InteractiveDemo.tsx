import React, { useState } from 'react';
import { LightbulbIcon, ThermometerIcon, LockIcon, SpeakerIcon, BellIcon, CameraIcon, WifiIcon, BatteryIcon, SignalIcon, MenuIcon, HomeIcon, CalendarIcon, Settings2Icon, UsersIcon, LayoutGridIcon, BedDoubleIcon, TvIcon, DoorClosedIcon, TimerIcon, Power, Sunrise, Moon, Zap, BoxIcon, XIcon } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';
import { usePower } from './PowerContext';
export const InteractiveDemo = () => {
  const {
    powerData,
    graphData
  } = usePower();
  const [activeRoom, setActiveRoom] = useState('living');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('controls');
  const [lights, setLights] = useState({
    living: false,
    kitchen: false,
    bedroom: false
  });
  const [temperature, setTemperature] = useState({
    living: 22,
    kitchen: 23,
    bedroom: 21
  });
  const [music, setMusic] = useState(false);
  const [security, setSecurity] = useState(true);
  const [activeScene, setActiveScene] = useState('day');
  const rooms = {
    living: {
      name: 'Living Room',
      icon: TvIcon
    },
    kitchen: {
      name: 'Kitchen',
      icon: BoxIcon
    },
    bedroom: {
      name: 'Bedroom',
      icon: BedDoubleIcon
    }
  };
  const scenes = [{
    id: 'day',
    name: 'Day Mode',
    icon: Sunrise
  }, {
    id: 'night',
    name: 'Night Mode',
    icon: Moon
  }, {
    id: 'away',
    name: 'Away Mode',
    icon: DoorClosedIcon
  }, {
    id: 'movie',
    name: 'Movie Mode',
    icon: TvIcon
  }];
  const navigationItems = [{
    name: 'Home',
    icon: HomeIcon
  }, {
    name: 'Scenes',
    icon: LayoutGridIcon
  }, {
    name: 'Schedule',
    icon: CalendarIcon
  }, {
    name: 'Users',
    icon: UsersIcon
  }, {
    name: 'Settings',
    icon: Settings2Icon
  }];
  return <section id="demo" className="py-16 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.1)_0%,rgba(0,0,0,0)_100%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-base text-cyan-400 font-semibold tracking-wide uppercase animate-text-shimmer">
              Interactive Demo
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Experience Smart Living
            </p>
            <p className="mt-4 max-w-2xl text-xl text-cyan-100/70 mx-auto">
              Control your entire home from your smartphone, anywhere, anytime.
            </p>
          </div>
        </ScrollReveal>
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {/* Phone Interface */}
          <ScrollReveal delay={200} direction="left">
            <div className="relative mx-auto w-[320px] h-[640px] bg-gray-900 rounded-[3rem] border-4 border-gray-800 overflow-hidden shadow-xl">
              {/* Phone Notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-3xl z-20">
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-20 h-3 bg-gray-900 rounded-full"></div>
              </div>
              {/* Status Bar */}
              <div className="absolute top-0 inset-x-0 h-7 px-4 flex justify-between items-center text-white text-xs z-10">
                <span>9:41</span>
                <div className="flex items-center space-x-1">
                  <SignalIcon className="w-4 h-4" />
                  <WifiIcon className="w-4 h-4" />
                  <BatteryIcon className="w-4 h-4" />
                </div>
              </div>
              {/* App Content */}
              <div className="relative h-full pt-8 bg-gray-900">
                {/* App Header */}
                <div className="px-4 py-2 flex items-center justify-between border-b border-gray-800">
                  <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                    <MenuIcon className="w-5 h-5 text-gray-400" />
                  </button>
                  <span className="text-white font-medium">Smart Home</span>
                  <div className="w-9"></div>
                </div>
                {/* Sidebar */}
                <div className={`absolute inset-y-0 left-0 w-64 bg-gray-800 transform transition-transform duration-300 z-30 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-lg font-medium text-white">
                        Menu
                      </span>
                      <button onClick={() => setSidebarOpen(false)} className="p-2 hover:bg-gray-700 rounded-lg">
                        <XIcon className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                    <nav className="space-y-1">
                      {navigationItems.map(item => <a key={item.name} href="#" className="flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors">
                          <item.icon className="w-5 h-5 mr-3" />
                          {item.name}
                        </a>)}
                    </nav>
                  </div>
                </div>
                {/* Main Content */}
                <div className="h-[calc(100%-3rem)] overflow-y-auto">
                  <div className="p-4 space-y-6">
                    {/* Quick Actions */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-400 mb-3">
                        Quick Actions
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        <button onClick={() => setActiveScene('day')} className={`p-3 rounded-xl flex flex-col items-center justify-center space-y-2 transition-all duration-300 ${activeScene === 'day' ? 'bg-blue-600/20 border-blue-500/50 border' : 'bg-gray-800 border border-gray-700'}`}>
                          <Power className="w-6 h-6 text-cyan-400" />
                          <span className="text-xs text-gray-300">All Off</span>
                        </button>
                        <button className="p-3 rounded-xl flex flex-col items-center justify-center space-y-2 bg-gray-800 border border-gray-700">
                          <Zap className="w-6 h-6 text-cyan-400" />
                          <span className="text-xs text-gray-300">Energy</span>
                        </button>
                      </div>
                    </div>
                    {/* Energy Monitor */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-400 mb-3">
                        Energy Monitor
                      </h3>
                      <div className="bg-gray-800 rounded-xl p-4">
                        <div className="h-[120px]">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={graphData?.slice(-10)}>
                              <Area type="monotone" dataKey="solar" stackId="1" stroke="#facc15" fill="#facc15" fillOpacity={0.3} isAnimationActive={false} />
                              <Area type="monotone" dataKey="battery" stackId="2" stroke="#4ade80" fill="#4ade80" fillOpacity={0.3} isAnimationActive={false} />
                              <Area type="monotone" dataKey="grid" stackId="3" stroke="#f87171" fill="#f87171" fillOpacity={0.3} isAnimationActive={false} />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-2">
                          <div className="text-center">
                            <div className="text-xs text-gray-400">Solar</div>
                            <div className="text-sm text-yellow-400">
                              {powerData?.solar?.toFixed(1)} kW
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-gray-400">Home</div>
                            <div className="text-sm text-cyan-400">
                              {powerData?.home?.toFixed(1)} kW
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-gray-400">Battery</div>
                            <div className="text-sm text-green-400">
                              {powerData?.batteryLevel}%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Scenes */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-400 mb-3">
                        Scenes
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {scenes.map(scene => <button key={scene.id} onClick={() => setActiveScene(scene.id)} className={`p-3 rounded-xl flex flex-col items-center justify-center space-y-2 transition-all duration-300 ${activeScene === scene.id ? 'bg-blue-600/20 border-blue-500/50 border' : 'bg-gray-800 border border-gray-700'}`}>
                            <scene.icon className="w-6 h-6 text-cyan-400" />
                            <span className="text-xs text-gray-300">
                              {scene.name}
                            </span>
                          </button>)}
                      </div>
                    </div>
                    {/* Room Controls */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-400 mb-3">
                        Rooms
                      </h3>
                      <div className="grid grid-cols-3 gap-2">
                        {Object.entries(rooms).map(([key, {
                        name,
                        icon: Icon
                      }]) => <button key={key} onClick={() => setActiveRoom(key)} className={`p-3 rounded-lg flex flex-col items-center space-y-2 transition-all duration-300 ${activeRoom === key ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
                              <Icon className="w-5 h-5" />
                              <span className="text-xs">{name}</span>
                            </button>)}
                      </div>
                    </div>
                    {/* Room Controls */}
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-800 rounded-xl backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <LightbulbIcon className={`h-5 w-5 ${lights[activeRoom] ? 'text-yellow-400' : 'text-gray-400'}`} />
                            <span className="text-sm text-gray-200">
                              Lights
                            </span>
                          </div>
                          <button onClick={() => setLights(prev => ({
                          ...prev,
                          [activeRoom]: !prev[activeRoom]
                        }))} className={`px-3 py-1.5 rounded-lg text-sm transition-all duration-300 ${lights[activeRoom] ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}>
                            {lights[activeRoom] ? 'ON' : 'OFF'}
                          </button>
                        </div>
                      </div>
                      <div className="p-4 bg-gray-800 rounded-xl">
                        <div className="flex items-center space-x-3 mb-3">
                          <ThermometerIcon className="h-5 w-5 text-cyan-400" />
                          <span className="text-sm text-gray-200">
                            Temperature
                          </span>
                        </div>
                        <input type="range" min="16" max="30" value={temperature[activeRoom]} onChange={e => setTemperature(prev => ({
                        ...prev,
                        [activeRoom]: parseInt(e.target.value)
                      }))} className="w-full accent-blue-500" />
                        <div className="mt-2 flex justify-between text-sm text-gray-400">
                          <span>16°C</span>
                          <span>{temperature[activeRoom]}°C</span>
                          <span>30°C</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <button onClick={() => setMusic(!music)} className={`p-4 rounded-xl flex items-center space-x-3 transition-all duration-300 ${music ? 'bg-blue-600/20 border-blue-500/50 border' : 'bg-gray-800 border border-gray-700'}`}>
                          <SpeakerIcon className={`h-5 w-5 ${music ? 'text-blue-400' : 'text-gray-400'}`} />
                          <span className="text-sm text-gray-300">Music</span>
                        </button>
                        <button onClick={() => setSecurity(!security)} className={`p-4 rounded-xl flex items-center space-x-3 transition-all duration-300 ${security ? 'bg-green-600/20 border-green-500/50 border' : 'bg-gray-800 border border-gray-700'}`}>
                          <LockIcon className={`h-5 w-5 ${security ? 'text-green-400' : 'text-gray-400'}`} />
                          <span className="text-sm text-gray-300">
                            Security
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          {/* House Visualization */}
          <ScrollReveal delay={400} direction="right">
            <div className="relative aspect-square bg-gray-800/30 rounded-lg border border-gray-700 overflow-hidden backdrop-blur-sm">
              {/* House Structure */}
              <div className="absolute inset-4">
                {/* Roof */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[80%] h-16 bg-gray-700 transform rotate-45 origin-bottom-left"></div>
                <div className="absolute -top-4 left-1/2 w-[80%] h-16 bg-gray-700 transform -rotate-45 origin-bottom-right"></div>
                {/* Main House Structure */}
                <div className="relative h-full border-2 border-gray-700 rounded-lg bg-gray-800/50 pt-8">
                  {/* Living Room */}
                  <div className={`absolute left-4 right-4 top-12 h-[40%] border-2 rounded-lg transition-all duration-300 cursor-pointer
                      ${activeRoom === 'living' ? 'border-blue-500 bg-blue-900/20' : 'border-gray-700 bg-gray-800/50'}`} onClick={() => setActiveRoom('living')}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`flex flex-col items-center transition-opacity duration-300 ${lights.living ? 'opacity-100' : 'opacity-50'}`}>
                        <div className="relative">
                          <LightbulbIcon className={`h-8 w-8 ${lights.living ? 'text-yellow-400' : 'text-gray-600'}`} />
                          {lights.living && <div className="absolute inset-0 bg-yellow-400/20 blur-xl"></div>}
                        </div>
                        <span className="mt-2 text-sm font-medium text-gray-300">
                          Living Room
                        </span>
                        <span className="mt-1 text-xs text-gray-400">
                          {temperature.living}°C
                        </span>
                      </div>
                    </div>
                    {/* Windows */}
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-12 border border-gray-600 rounded"></div>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-12 border border-gray-600 rounded"></div>
                  </div>
                  {/* Bottom Section */}
                  <div className="absolute left-4 right-4 bottom-4 h-[40%] grid grid-cols-2 gap-4">
                    {/* Kitchen */}
                    <div className={`relative border-2 rounded-lg transition-all duration-300 cursor-pointer
                        ${activeRoom === 'kitchen' ? 'border-blue-500 bg-blue-900/20' : 'border-gray-700 bg-gray-800/50'}`} onClick={() => setActiveRoom('kitchen')}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`flex flex-col items-center transition-opacity duration-300 ${lights.kitchen ? 'opacity-100' : 'opacity-50'}`}>
                          <div className="relative">
                            <LightbulbIcon className={`h-6 w-6 ${lights.kitchen ? 'text-yellow-400' : 'text-gray-600'}`} />
                            {lights.kitchen && <div className="absolute inset-0 bg-yellow-400/20 blur-xl"></div>}
                          </div>
                          <span className="mt-2 text-xs font-medium text-gray-300">
                            Kitchen
                          </span>
                          <span className="mt-1 text-xs text-gray-400">
                            {temperature.kitchen}°C
                          </span>
                        </div>
                      </div>
                      {/* Window */}
                      <div className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-8 border border-gray-600 rounded"></div>
                    </div>
                    {/* Bedroom */}
                    <div className={`relative border-2 rounded-lg transition-all duration-300 cursor-pointer
                        ${activeRoom === 'bedroom' ? 'border-blue-500 bg-blue-900/20' : 'border-gray-700 bg-gray-800/50'}`} onClick={() => setActiveRoom('bedroom')}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`flex flex-col items-center transition-opacity duration-300 ${lights.bedroom ? 'opacity-100' : 'opacity-50'}`}>
                          <div className="relative">
                            <LightbulbIcon className={`h-6 w-6 ${lights.bedroom ? 'text-yellow-400' : 'text-gray-600'}`} />
                            {lights.bedroom && <div className="absolute inset-0 bg-yellow-400/20 blur-xl"></div>}
                          </div>
                          <span className="mt-2 text-xs font-medium text-gray-300">
                            Bedroom
                          </span>
                          <span className="mt-1 text-xs text-gray-400">
                            {temperature.bedroom}°C
                          </span>
                        </div>
                      </div>
                      {/* Window */}
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-8 border border-gray-600 rounded"></div>
                    </div>
                  </div>
                  {/* Front Door */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-16 border-t-2 border-x-2 border-gray-700 rounded-t-lg"></div>
                </div>
              </div>
              {/* Status Overlays */}
              {security && <div className="absolute top-2 right-2 flex items-center space-x-2 bg-green-900/20 px-2 py-1 rounded">
                  <LockIcon className="h-3 w-3 text-green-400" />
                  <span className="text-xs text-green-400">Secured</span>
                </div>}
              {music && <div className="absolute bottom-2 left-2 flex items-center space-x-2 bg-blue-900/20 px-2 py-1 rounded">
                  <SpeakerIcon className="h-3 w-3 text-cyan-400 animate-pulse" />
                  <span className="text-xs text-cyan-400">Music Playing</span>
                </div>}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>;
};