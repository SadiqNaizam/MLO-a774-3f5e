import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ReasonStat {
  id: string;
  percentage: string;
  description: string;
}

interface OtherDataStat {
  id: string;
  value: string;
  label: string;
  hasInfo?: boolean;
  infoText?: string;
}

const reasonsForLeadsLost: ReasonStat[] = [
  { id: 'reason1', percentage: '40%', description: 'The proposal is unclear' },
  { id: 'reason2', percentage: '20%', description: 'However venture pursuit' },
  { id: 'reason3', percentage: '10%', description: 'Other specific factors' }, // Changed from 'Other' for more realism
  { id: 'reason4', percentage: '30%', description: 'The proposal is too expensive' }, // Changed from duplicate for variety
];

const otherDataStats: OtherDataStat[] = [
  { id: 'data1', value: '900', label: 'total leads count' },
  { id: 'data2', value: '12', label: 'days in average to convert lead' },
  { id: 'data3', value: '30', label: 'inactive leads', hasInfo: true, infoText: 'Leads not engaged in 30+ days' },
];

const StatsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
            {reasonsForLeadsLost.map((reason) => (
              <div key={reason.id}>
                <p className="text-3xl font-bold text-primaryText">{reason.percentage}</p>
                <p className="text-sm text-secondaryText mt-1">{reason.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Other data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-8 sm:gap-y-0">
            {otherDataStats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-start sm:items-center">
                <div className="flex items-baseline">
                  <p className="text-3xl font-bold text-primaryText">{stat.value}</p>
                  {stat.hasInfo && (
                    <TooltipProvider>
                      <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                          <Info className="w-4 h-4 ml-1.5 text-muted-foreground cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent side="top" className="bg-slate-800 text-white text-xs p-1.5 rounded max-w-xs">
                          <p>{stat.infoText}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
                <p className="text-sm text-secondaryText mt-1 text-left sm:text-center">{stat.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsGrid;
