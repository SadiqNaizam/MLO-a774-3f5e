import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, PlusCircle, UserPlus, FilePlus } from 'lucide-react';

interface TopHeaderProps {
  title: string;
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ title, className }) => {
  return (
    <header
      className={cn(
        'fixed top-0 left-60 right-0 z-10 flex h-16 items-center justify-between border-b border-border bg-card px-6 shadow-sm',
        className
      )}
    >
      <h1 className="text-xl font-semibold text-foreground">{title}</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="default">
            Create
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem>
            <PlusCircle className="mr-2 h-4 w-4" />
            <span>New Lead</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UserPlus className="mr-2 h-4 w-4" />
            <span>New Customer</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FilePlus className="mr-2 h-4 w-4" />
            <span>New Proposal</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <PlusCircle className="mr-2 h-4 w-4" />
            <span>New Task</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default TopHeader;
