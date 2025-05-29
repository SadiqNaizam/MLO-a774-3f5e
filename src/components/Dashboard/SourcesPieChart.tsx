import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { cn } from '@/lib/utils';

interface SourceData {
  name: string;
  value: number; // Monetary value
  percentage: number;
  color: string; // Hex color for recharts
}

const sourcesData: SourceData[] = [
  { name: 'Clutch', value: 3000, percentage: 50, color: '#EF4444' }, // Red
  { name: 'Behance', value: 2000, percentage: 25, color: '#FBBF24' }, // Yellow (Adjusted % for more diverse chart)
  { name: 'Instagram', value: 1500, percentage: 15, color: '#0D9488' }, // Teal
  { name: 'Dribbble', value: 1000, percentage: 10, color: '#34D399' }, // Light Green
];

const totalValue = sourcesData.reduce((sum, source) => sum + source.value, 0);

const SourcesPieChart: React.FC = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 items-center">
          <div className="w-full h-[250px] md:h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sourcesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                >
                  {sourcesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => [`$${value.toLocaleString()}`, 'Value']}
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)' }}
                  labelStyle={{ color: 'hsl(var(--card-foreground))' }}
                  itemStyle={{ color: 'hsl(var(--card-foreground))' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {sourcesData.map((source) => (
              <div key={source.name} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span style={{ backgroundColor: source.color }} className="w-3 h-3 rounded-full mr-2"></span>
                  <span className="text-sm text-card-foreground">{source.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-card-foreground">${source.value.toLocaleString()}</span>
                  <span className="text-xs text-muted-foreground ml-2">{source.percentage}%</span>
                </div>
              </div>
            ))}
            <div className="text-xs text-muted-foreground text-right pt-1 border-t border-border">
              Total value: ${totalValue.toLocaleString()}
            </div>
             <div className="text-xs text-muted-foreground text-right pt-1">
              <span className="bg-muted px-1.5 py-0.5 rounded">from leads total</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SourcesPieChart;
