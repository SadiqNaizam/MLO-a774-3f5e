import React from 'react';
import SidebarNav from './SidebarNav';
import TopHeader from './TopHeader';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  currentPath?: string; // For highlighting active link in SidebarNav
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({
  children,
  pageTitle,
  currentPath = '/dashboard', // Default to dashboard
  className,
}) => {
  return (
    <div className={cn('min-h-screen bg-background text-foreground', className)}>
      <SidebarNav activePath={currentPath} />
      {/* TopHeader is fixed positioned with left-60, so it correctly aligns next to the sidebar */}
      <TopHeader title={pageTitle} />
      {/* Main content area needs margin to account for fixed sidebar and sticky header */}
      {/* Tailwind h-16 is 4rem */}
      <main 
        className="ml-60 mt-16 p-6 overflow-y-auto"
        style={{ height: 'calc(100vh - 4rem)' }} // Ensures main content area fills remaining height and scrolls
      >
        <div className="container mx-auto max-w-full">
          {/* Optional: Add breadcrumbs or other page-specific headers here */} 
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
