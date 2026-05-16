import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { MapPin, TrendingDown, Minus, Info } from 'lucide-react';

const data = [
  { period: '1', asia: 620, europe: 440, usa: 400 },
  { period: '2', asia: 640, europe: 490, usa: 430 },
  { period: '3', asia: 670, europe: 530, usa: 460 },
  { period: '4', asia: 720, europe: 610, usa: 560 },
  { period: '5', asia: 690, europe: 580, usa: 520 },
  { period: '6', asia: 730, europe: 610, usa: 540 },
  { period: '7', asia: 690, europe: 550, usa: 500 },
  { period: '8', asia: 750, europe: 610, usa: 500 },
];

export default function MarketGraph() {
  return (
    <section className="py-24 bg-[#0B1121] text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Global HR Steel Coil Prices</h2>
          <p className="text-gray-400 font-semibold tracking-wider">Q1 2026 vs Q1 2025</p>
        </div>

        {/* Main Dashboard Card */}
        <div className="bg-[#111827] rounded-3xl p-8 border border-gray-800 shadow-2xl">
          
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <h3 className="text-xl font-bold mb-1">Price Trends</h3>
              <p className="text-xs text-gray-500 font-mono">Q1 2026 vs Q1 2025</p>
            </div>
          </div>

          {/* Graph */}
          <div className="h-[350px] w-full mb-12">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 20, bottom: 25, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
                <XAxis 
                  dataKey="period" 
                  stroke="#4b5563" 
                  tick={{ fill: '#6b7280', fontSize: 12 }} 
                  tickLine={false} 
                  axisLine={false}
                  tickFormatter={() => ''} 
                />
                <YAxis 
                  stroke="#4b5563" 
                  tick={{ fill: '#6b7280', fontSize: 12 }} 
                  tickLine={false}
                  axisLine={false}
                  domain={[400, 900]}
                  ticks={[400, 500, 600, 700, 800, 900]}
                  label={{ value: 'Price ($/ton)', angle: -90, position: 'insideLeft', fill: '#9ca3af', style: { textAnchor: 'middle' } }}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend 
                  verticalAlign="top" 
                  height={36} 
                  iconType="circle"
                  wrapperStyle={{ fontSize: '14px', top: -40, right: 0 }}
                />
                <Line name="Asia" type="monotone" dataKey="asia" stroke="#06b6d4" strokeWidth={3} dot={{ r: 4, fill: '#06b6d4', strokeWidth: 0 }} activeDot={{ r: 6 }} />
                <Line name="Europe" type="monotone" dataKey="europe" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4, fill: '#f59e0b', strokeWidth: 0 }} activeDot={{ r: 6 }} />
                <Line name="USA" type="monotone" dataKey="usa" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 4, fill: '#8b5cf6', strokeWidth: 0 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
            
            {/* Custom X Axis Labels to match image layout */}
            <div className="flex justify-between px-16 -mt-6 text-sm text-gray-400 font-medium">
              <span>Asia</span>
              <span>Europe</span>
              <span>USA</span>
              <span>Brazil</span>
            </div>
          </div>

          {/* Regional Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-b border-gray-800 pb-12">
            {/* Asia */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">Asia</h4>
                  <p className="text-[#06b6d4] text-sm font-semibold flex items-center gap-1"><Minus size={16} /> Relatively stable</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-gray-400 text-sm gap-1 justify-end"><MapPin size={14} className="text-[#06b6d4]" /> China</div>
                  <p className="text-[#06b6d4] font-bold text-xl">$715</p>
                </div>
              </div>
              <ul className="text-sm text-gray-400 space-y-2 list-disc pl-4">
                <li>Stable prices reflect balanced supply-demand dynamics.</li>
                <li>Exports to other regions remain competitive.</li>
              </ul>
            </div>

            {/* Europe */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">Europe</h4>
                  <p className="text-[#f59e0b] text-sm font-semibold flex items-center gap-1"><TrendingDown size={16} /> Moderate correction</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-gray-400 text-sm gap-1 justify-end"><MapPin size={14} className="text-[#f59e0b]" /> Germany</div>
                  <p className="text-[#f59e0b] font-bold text-xl">$675</p>
                </div>
              </div>
              <ul className="text-sm text-gray-400 space-y-2 list-disc pl-4">
                <li>Prices corrected moderately due to reduced demand.</li>
                <li>Imports from Asia rose slightly.</li>
              </ul>
            </div>

            {/* USA */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">USA</h4>
                  <p className="text-[#8b5cf6] text-sm font-semibold flex items-center gap-1"><TrendingDown size={16} /> Moderate correction</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-gray-400 text-sm gap-1 justify-end"><MapPin size={14} className="text-[#8b5cf6]" /> USA</div>
                  <p className="text-[#8b5cf6] font-bold text-xl">$700</p>
                </div>
              </div>
              <ul className="text-sm text-gray-400 space-y-2 list-disc pl-4">
                <li>Demand easing led to price adjustments.</li>
                <li>Production capacity utilization fell below 80%.</li>
              </ul>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
