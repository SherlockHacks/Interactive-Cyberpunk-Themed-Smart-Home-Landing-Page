import React, { useEffect, useState, createContext, useContext } from 'react';
interface PowerData {
  solar: number;
  grid: number;
  battery: number;
  home: number;
  batteryLevel: number;
  dailySolar: number;
  dailyGrid: number;
  dailyBatteryCharge: number;
  dailyBatteryDischarge: number;
  dailyHome: number;
}
interface PowerContextType {
  powerData: PowerData;
  graphData: any[];
}
const PowerContext = createContext<PowerContextType | undefined>(undefined);
// Generate initial realistic data based on current time
const generateInitialData = () => {
  const hour = new Date().getHours();
  const solarEfficiency = Math.max(0, Math.sin((hour - 6) * Math.PI / 12));
  const maxSolar = 7.5;
  const baseSolar = solarEfficiency * maxSolar;
  const solar = Number((baseSolar + (Math.random() * 0.5 - 0.25)).toFixed(2));
  // Simulate data as if the system has been running for several hours
  const hoursRunning = Math.min(hour - 6, 12);
  const hoursRunningPositive = Math.max(1, hoursRunning); // At least 1 hour
  // Calculate realistic daily values based on time of day
  const dailySolar = Number((solar * hoursRunningPositive * 0.7).toFixed(2));
  const dailyHome = Number((2.5 * hoursRunningPositive).toFixed(2));
  const dailyGrid = Number((1.2 * hoursRunningPositive).toFixed(2));
  return {
    dailySolar: Math.max(3.5, dailySolar),
    dailyHome: Math.max(5.0, dailyHome),
    dailyGrid: Math.max(1.5, dailyGrid),
    dailyBatteryCharge: Math.max(1.0, dailySolar * 0.3),
    dailyBatteryDischarge: Math.max(0.8, dailyHome * 0.2)
  };
};
const initialValues = generateInitialData();
export function PowerProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [powerData, setPowerData] = useState<PowerData>({
    solar: 0,
    grid: 0,
    battery: 0,
    home: 0,
    batteryLevel: 70,
    dailySolar: initialValues.dailySolar,
    dailyGrid: initialValues.dailyGrid,
    dailyBatteryCharge: initialValues.dailyBatteryCharge,
    dailyBatteryDischarge: initialValues.dailyBatteryDischarge,
    dailyHome: initialValues.dailyHome
  });
  const [graphData, setGraphData] = useState<any[]>([]);
  // Initialize with some graph data
  useEffect(() => {
    const initialGraphData = [];
    const now = new Date();
    for (let i = 10; i > 0; i--) {
      const timePoint = new Date(now.getTime() - i * 2000);
      const hour = timePoint.getHours();
      const solarEfficiency = Math.max(0, Math.sin((hour - 6) * Math.PI / 12));
      initialGraphData.push({
        time: timePoint.toLocaleTimeString(),
        solar: Number((solarEfficiency * 7.5 * (0.8 + Math.random() * 0.4)).toFixed(2)),
        home: Number((1.2 + Math.random() * 1.5).toFixed(2)),
        battery: Number((Math.random() > 0.5 ? 1 : -1) * Math.random() * 2).toFixed(2),
        grid: Number((Math.random() > 0.5 ? 1 : -1) * Math.random() * 1.5).toFixed(2)
      });
    }
    setGraphData(initialGraphData);
  }, []);
  useEffect(() => {
    let lastUpdate = Date.now();
    const updatePowerFlow = () => {
      const now = Date.now();
      const timeDiff = (now - lastUpdate) / 1000;
      lastUpdate = now;
      const hour = new Date().getHours();
      const solarEfficiency = Math.max(0, Math.sin((hour - 6) * Math.PI / 12));
      const maxSolar = 7.5;
      const baseSolar = solarEfficiency * maxSolar;
      const solar = Number((baseSolar + (Math.random() * 0.5 - 0.25)).toFixed(2));
      const baseLoad = 1.2;
      const timeBasedLoad = hour >= 6 && hour <= 22 ? 1.5 : 0.5;
      const variableLoad = Math.random() * timeBasedLoad;
      const home = Number((baseLoad + variableLoad).toFixed(2));
      const hourlyFactor = timeDiff / 3600 * 5; // Amplified by 5x for demo
      setPowerData(prev => {
        let battery = 0;
        if (solar > home) {
          battery = Number(Math.min(3, solar - home).toFixed(2));
        } else if (prev.batteryLevel > 20) {
          battery = Number((-Math.min(3, home - solar)).toFixed(2));
        }
        const grid = Number((home - (solar + battery)).toFixed(2));
        const newBatteryLevel = Number(Math.min(100, Math.max(20, prev.batteryLevel + battery * 0.1)).toFixed(1));
        const newDailySolar = prev.dailySolar + Math.max(0, solar) * hourlyFactor;
        const newDailyGrid = prev.dailyGrid + Math.abs(grid) * hourlyFactor;
        const newDailyBatteryCharge = prev.dailyBatteryCharge + (battery > 0 ? battery * hourlyFactor : 0);
        const newDailyBatteryDischarge = prev.dailyBatteryDischarge + (battery < 0 ? Math.abs(battery) * hourlyFactor : 0);
        const newDailyHome = prev.dailyHome + home * hourlyFactor;
        return {
          solar,
          grid,
          battery,
          home,
          batteryLevel: newBatteryLevel,
          dailySolar: Number(newDailySolar.toFixed(1)),
          dailyGrid: Number(newDailyGrid.toFixed(1)),
          dailyBatteryCharge: Number(newDailyBatteryCharge.toFixed(1)),
          dailyBatteryDischarge: Number(newDailyBatteryDischarge.toFixed(1)),
          dailyHome: Number(newDailyHome.toFixed(1))
        };
      });
      setGraphData(prev => {
        const newData = [...prev, {
          time: new Date().toLocaleTimeString(),
          solar: Number(solar.toFixed(2)),
          home: Number(home.toFixed(2)),
          battery: powerData.battery,
          grid: Number((home - (solar + powerData.battery)).toFixed(2))
        }];
        if (newData.length > 20) newData.shift();
        return newData;
      });
    };
    const checkDayReset = () => {
      const now = new Date();
      if (now.getHours() === 0 && now.getMinutes() === 0) {
        setPowerData(prev => ({
          ...prev,
          dailySolar: 0,
          dailyGrid: 0,
          dailyBatteryCharge: 0,
          dailyBatteryDischarge: 0,
          dailyHome: 0
        }));
      }
    };
    // Initial update
    updatePowerFlow();
    const powerInterval = setInterval(updatePowerFlow, 2000);
    const resetInterval = setInterval(checkDayReset, 60000);
    return () => {
      clearInterval(powerInterval);
      clearInterval(resetInterval);
    };
  }, []);
  return <PowerContext.Provider value={{
    powerData,
    graphData
  }}>
      {children}
    </PowerContext.Provider>;
}
export function usePower() {
  const context = useContext(PowerContext);
  if (context === undefined) {
    throw new Error('usePower must be used within a PowerProvider');
  }
  return context;
}