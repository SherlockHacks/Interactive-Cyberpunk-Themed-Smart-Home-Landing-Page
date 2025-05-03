import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { BatteryChargingIcon, HomeIcon, ZapIcon, SunIcon } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { usePower } from './PowerContext';
export const EnergyMonitor = () => {
  const {
    powerData,
    graphData
  } = usePower();
  return <section className="py-16 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.05)_0%,rgba(0,0,0,0)_70%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-base text-cyan-400 font-semibold tracking-wide uppercase animate-text-shimmer">
              Energy Monitor
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Real-Time Power Flow
            </p>
            <p className="mt-4 max-w-2xl text-xl text-cyan-100/70 mx-auto">
              Monitor your home's energy production, consumption, and storage in
              real-time.
            </p>
          </div>
        </ScrollReveal>
        <div className="mt-16 bg-slate-900/60 rounded-2xl p-4 sm:p-8 backdrop-blur-sm border border-slate-700/50 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Power Distribution Chart */}
            <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6 border border-slate-700/30">
              <h3 className="text-lg font-semibold text-white mb-4">
                Power Distribution
              </h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={graphData.slice(-20)}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="time" stroke="#6B7280" tick={{
                    fill: '#9CA3AF'
                  }} tickFormatter={value => value.split(':').slice(0, 2).join(':')} />
                    <YAxis stroke="#6B7280" tick={{
                    fill: '#9CA3AF'
                  }} unit=" kW" />
                    <Tooltip contentStyle={{
                    background: '#1F2937',
                    border: '1px solid rgba(75, 85, 99, 0.3)',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }} labelStyle={{
                    color: '#E5E7EB'
                  }} itemStyle={{
                    color: '#9CA3AF'
                  }} />
                    <Legend />
                    <Line type="monotone" dataKey="solar" stroke="#FACC15" strokeWidth={2} dot={false} name="Solar" />
                    <Line type="monotone" dataKey="home" stroke="#22D3EE" strokeWidth={2} dot={false} name="Home" />
                    <Line type="monotone" dataKey="battery" stroke="#4ADE80" strokeWidth={2} dot={false} name="Battery" />
                    <Line type="monotone" dataKey="grid" stroke="#60A5FA" strokeWidth={2} dot={false} name="Grid" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            {/* Energy Summary */}
            <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6 border border-slate-700/30">
              <h3 className="text-lg font-semibold text-white mb-4">
                Today's Energy Summary
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-yellow-500/20 rounded-lg">
                        <SunIcon className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div>
                        <p className="text-xs text-yellow-300/80">
                          Solar Production
                        </p>
                        <p className="text-base sm:text-lg font-semibold text-white">
                          {powerData.dailySolar.toFixed(1)} kWh
                        </p>
                      </div>
                    </div>
                    <div className="text-xs py-1 px-2 rounded bg-yellow-500/10 text-yellow-300 whitespace-nowrap">
                      {powerData.solar > 0 ? 'Active' : 'Inactive'}
                    </div>
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-cyan-500/20 rounded-lg">
                        <HomeIcon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-xs text-cyan-300/80">Home Usage</p>
                        <p className="text-base sm:text-lg font-semibold text-white">
                          {powerData.dailyHome.toFixed(1)} kWh
                        </p>
                      </div>
                    </div>
                    <div className="text-xs py-1 px-2 rounded bg-cyan-500/10 text-cyan-300 whitespace-nowrap">
                      {powerData.home > 2 ? 'High' : powerData.home > 1 ? 'Normal' : 'Low'}
                    </div>
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <ZapIcon className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-xs text-blue-300/80">
                          Grid Exchange
                        </p>
                        <p className="text-base sm:text-lg font-semibold text-white">
                          {powerData.dailyGrid.toFixed(1)} kWh
                        </p>
                      </div>
                    </div>
                    <div className="text-xs py-1 px-2 rounded bg-blue-500/10 text-blue-300 whitespace-nowrap">
                      {powerData.grid > 0 ? 'Importing' : powerData.grid < 0 ? 'Exporting' : 'Balanced'}
                    </div>
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-500/20 rounded-lg">
                        <BatteryChargingIcon className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-xs text-green-300/80">
                          Battery Level
                        </p>
                        <p className="text-base sm:text-lg font-semibold text-white">
                          {powerData.batteryLevel}%
                        </p>
                      </div>
                    </div>
                    <div className="text-xs py-1 px-2 rounded bg-green-500/10 text-green-300 whitespace-nowrap">
                      {powerData.battery > 0 ? 'Charging' : powerData.battery < 0 ? 'Discharging' : 'Idle'}
                    </div>
                  </div>
                </div>
              </div>
              {/* Energy Balance */}
              <div className="mt-4 bg-slate-700/30 rounded-lg p-4 border border-slate-600/20">
                <h4 className="text-sm font-medium text-white mb-2">
                  Energy Balance
                </h4>
                <div className="flex items-center">
                  <div className="w-full bg-slate-600/30 rounded-full h-4">
                    <div className="bg-gradient-to-r from-green-500 to-green-400 h-4 rounded-full transition-all duration-300" style={{
                    width: `${Math.min(100, Math.max(0, powerData.dailySolar / Math.max(0.1, powerData.dailyHome) * 100))}%`
                  }}></div>
                  </div>
                  <span className="ml-3 text-sm text-white whitespace-nowrap">
                    {Math.round(powerData.dailySolar / Math.max(0.1, powerData.dailyHome) * 100)}
                    %
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Solar production covers{' '}
                  {Math.round(powerData.dailySolar / Math.max(0.1, powerData.dailyHome) * 100)}
                  % of your home's energy needs today
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};