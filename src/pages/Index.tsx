import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import FunnelCountCard from '../components/Dashboard/FunnelCountCard';
import SourcesPieChart from '../components/Dashboard/SourcesPieChart';
import LeadsTrackingChart from '../components/Dashboard/LeadsTrackingChart';
import StatsGrid from '../components/Dashboard/StatsGrid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // For Sales placeholder

const DashboardPage: React.FC = () => {
  return (
    <MainAppLayout pageTitle="Dashboard" currentPath="/dashboard">
      <div className="flex flex-col gap-6">
        <Tabs defaultValue="leads" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="leads">Leads</TabsTrigger>
          </TabsList>
          
          <TabsContent value="sales">
            <Card>
              <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sales-specific data, charts, and statistics would be displayed here.
                  This section is currently a placeholder.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leads" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <FunnelCountCard />
              </div>
              <div className="lg:col-span-1">
                <SourcesPieChart />
              </div>
            </div>
            
            <LeadsTrackingChart />
            
            <StatsGrid />
          </TabsContent>
        </Tabs>
      </div>
    </MainAppLayout>
  );
};

export default DashboardPage;
