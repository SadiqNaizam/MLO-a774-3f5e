import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { CalendarDays, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MonthlyLeadData {
  month: string;
  closedWon: number;
  closedLost: number;
}

const leadsTrackingData: MonthlyLeadData[] = [
  { month: 'Jan', closedWon: 65, closedLost: 40 },
  { month: 'Feb', closedWon: 52, closedLost: 60 },
  { month: 'Mar', closedWon: 88, closedLost: 30 },
  { month: 'Apr', closedWon: 70, closedLost: 55 },
  { month: 'May', closedWon: 95, closedLost: 20 },
  { month: 'Jun', closedWon: 60, closedLost: 85 },
  { month: 'Jul', closedWon: 78, closedLost: 42 },
  { month: 'Aug', closedWon: 110, closedLost: 30 },
];

const totalClosed = leadsTrackingData.reduce((sum, data) => sum + data.closedWon, 0);
const totalLost = leadsTrackingData.reduce((sum, data) => sum + data.closedLost, 0);

type ActiveTab = 'LeadsCame' | 'LeadsConverted' | 'TotalDealsSize';

const LeadsTrackingChart: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<ActiveTab>('LeadsConverted');

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <CardTitle>Leads tracking</CardTitle>
          <div className="flex items-center space-x-2 mt-2 sm:mt-0">
            <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
              <CalendarDays className="w-4 h-4 mr-1.5" />
              Last 6 months
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
        <div className="flex space-x-4 mt-2">
            <div>
                <p className="text-2xl font-bold">{totalClosed}</p>
                <p className="text-xs text-muted-foreground">total closed</p>
            </div>
            <div>
                <p className="text-2xl font-bold">{totalLost}</p>
                <p className="text-xs text-muted-foreground">total lost</p>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-1 mb-4 border border-border p-0.5 rounded-md w-fit">
          <Button 
            variant={activeTab === 'LeadsCame' ? 'secondary' : 'ghost'}
            size="sm" 
            onClick={() => setActiveTab('LeadsCame')}
            className="text-xs h-7 px-3"
          >
            Leads came
          </Button>
          <Button 
            variant={activeTab === 'LeadsConverted' ? 'secondary' : 'ghost'}
            size="sm" 
            onClick={() => setActiveTab('LeadsConverted')}
            className="text-xs h-7 px-3"
          >
            Leads Converted
          </Button>
          <Button 
            variant={activeTab === 'TotalDealsSize' ? 'secondary' : 'ghost'}
            size="sm" 
            onClick={() => setActiveTab('TotalDealsSize')}
            className="text-xs h-7 px-3"
          >
            Total deals size
          </Button>
        </div>

        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={leadsTrackingData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <defs>
                <linearGradient id="colorClosedWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0D9488" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#0D9488" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorClosedLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis 
                dataKey="month" 
                tickLine={false} 
                axisLine={false}
                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis 
                tickLine={false} 
                axisLine={false}
                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                width={30}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)' }}
                labelStyle={{ color: 'hsl(var(--card-foreground))', fontWeight: 'bold' }}
                itemStyle={{ fontSize: 12 }}
              />
              <Legend 
                iconSize={10} 
                wrapperStyle={{ fontSize: 12, paddingTop: '10px' }}
                formatter={(value) => <span className="text-muted-foreground">{value}</span>}
              />
              <Area 
                type="monotone" 
                dataKey="closedWon" 
                stroke="#0D9488" 
                strokeWidth={2} 
                fillOpacity={1} 
                fill="url(#colorClosedWon)" 
                name="Closed won" 
                dot={{ r: 4, strokeWidth: 2, fill: '#0D9488' }}
                activeDot={{ r: 6, strokeWidth: 2, fill: '#0D9488' }}
              />
              <Area 
                type="monotone" 
                dataKey="closedLost" 
                stroke="#EF4444" 
                strokeWidth={2} 
                fillOpacity={1} 
                fill="url(#colorClosedLost)" 
                name="Closed lost"
                dot={{ r: 4, strokeWidth: 2, fill: '#EF4444' }}
                activeDot={{ r: 6, strokeWidth: 2, fill: '#EF4444' }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingChart;
