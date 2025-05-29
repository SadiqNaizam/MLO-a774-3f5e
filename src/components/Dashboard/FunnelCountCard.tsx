import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Info } from 'lucide-react';

interface FunnelStageData {
  id: string;
  name: string;
  count: number;
  value: number;
  duration: string;
  color: string; // Tailwind background color class e.g., 'bg-red-500'
  textColor: string; // Tailwind text color class for consistency
  avgTime?: string;
}

const funnelData: FunnelStageData[] = [
  { id: 'discovery', name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-500', textColor: 'text-red-500' },
  { id: 'qualified', name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400', textColor: 'text-yellow-400', avgTime: 'average time on this stage' },
  { id: 'inConversation', name: 'In conversation', count: 50, value: 100, duration: '5 days', color: 'bg-indigo-500', textColor: 'text-indigo-500' },
  { id: 'negotiations', name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-500', textColor: 'text-green-500' },
  { id: 'closedWon', name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-500', textColor: 'text-purple-500' },
];

const totalFunnelCount = funnelData.reduce((sum, stage) => sum + stage.count, 0);

const FunnelCountCard: React.FC = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Funnel count</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <span className="text-4xl font-bold">600</span>
          <span className="ml-2 text-muted-foreground">active leads</span>
        </div>
        
        <div className="w-full h-3 flex rounded-full overflow-hidden mb-6">
          {funnelData.map(stage => (
            <div
              key={stage.id}
              className={cn(stage.color)}
              style={{ width: `${(stage.count / totalFunnelCount) * 100}%` }}
              title={`${stage.name}: ${stage.count}`}
            ></div>
          ))}
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-[1fr_auto_auto_auto] gap-x-4 text-sm text-muted-foreground px-2 pb-1 border-b border-border">
            <span className="font-medium">Stage</span>
            <span className="font-medium text-right">Count</span>
            <span className="font-medium text-right">Value</span>
            <span className="font-medium text-right">Time</span>
          </div>
          {funnelData.map((stage) => (
            <div key={stage.id} className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-x-4 py-1 px-2 hover:bg-muted/50 rounded-md">
              <div className="flex items-center">
                <span className={cn("w-2 h-2 rounded-full mr-2", stage.color)}></span>
                <span className="text-sm text-card-foreground">{stage.name}</span>
              </div>
              <span className="text-sm text-card-foreground text-right">{stage.count}</span>
              <span className="text-sm text-card-foreground text-right">${stage.value.toLocaleString()}</span>
              <div className="flex items-center justify-end">
                <span className="text-sm text-card-foreground text-right">{stage.duration}</span>
                {stage.avgTime && (
                  <TooltipProvider>
                    <Tooltip delayDuration={0}>
                      <TooltipTrigger asChild>
                        <Info className="w-3 h-3 ml-1.5 text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent side="top" className="bg-slate-800 text-white text-xs p-1.5 rounded">
                        <p>{stage.avgTime}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FunnelCountCard;
