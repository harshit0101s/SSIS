import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { month: 'Jan', price: 42000, demand: 85 },
  { month: 'Feb', price: 43500, demand: 88 },
  { month: 'Mar', price: 41800, demand: 82 },
  { month: 'Apr', price: 44200, demand: 91 },
  { month: 'May', price: 45000, demand: 95 },
  { month: 'Jun', price: 46800, demand: 98 },
  { month: 'Jul', price: 46200, demand: 94 },
];

export default function MarketGraph() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-4">Market Intelligence</h2>
          <h3 className="text-4xl font-bold text-foreground">Live Steel Market Trends</h3>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Stay ahead of the curve with our real-time analytics. We track weighted averages and transaction values across all major Pan India cities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Chart 1 */}
          <div className="bg-muted/20 p-6 rounded-2xl border border-border shadow-lg">
            <h4 className="text-lg font-bold mb-6 text-foreground">TMT Bar Average Pricing (₹/MT)</h4>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis dataKey="month" stroke="#888" tick={{ fill: '#888' }} />
                  <YAxis stroke="#888" tick={{ fill: '#888' }} domain={['dataMin - 2000', 'dataMax + 2000']} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px' }}
                    itemStyle={{ color: '#ea580c' }}
                  />
                  <Line type="monotone" dataKey="price" stroke="#ea580c" strokeWidth={3} dot={{ r: 4, fill: '#ea580c' }} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 2 */}
          <div className="bg-muted/20 p-6 rounded-2xl border border-border shadow-lg">
            <h4 className="text-lg font-bold mb-6 text-foreground">Market Demand Index</h4>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis dataKey="month" stroke="#888" tick={{ fill: '#888' }} />
                  <YAxis stroke="#888" tick={{ fill: '#888' }} domain={[50, 100]} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px' }}
                    itemStyle={{ color: '#3b82f6' }}
                  />
                  <Area type="monotone" dataKey="demand" stroke="#3b82f6" fillOpacity={0.3} fill="#3b82f6" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
