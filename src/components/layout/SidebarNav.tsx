import React from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom is used for navigation
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  LayoutGrid,
  Users,
  UsersRound,
  FileText,
  FileSpreadsheet,
  ShoppingBag,
  Mail as MailIcon,
  Archive,
  CalendarDays,
  HelpCircle,
  Settings as SettingsIcon,
  Menu as MenuIcon,
  Package as PackageIcon // Generic logo icon
} from 'lucide-react';

interface NavItemProps {
  href: string;
  label: string;
  icon: React.ElementType;
  isActive?: boolean;
  isUtility?: boolean;
}

const NavLink: React.FC<NavItemProps> = ({ href, label, icon: Icon, isActive, isUtility }) => {
  return (
    <Link
      to={href}
      className={cn(
        'flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium',
        'transition-colors duration-150 ease-in-out',
        isActive
          ? 'bg-sidebar-accent text-sidebar-accent-foreground'
          : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground',
        isUtility && 'mt-auto'
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  );
};

interface SidebarNavProps {
  activePath: string;
  className?: string;
}

const mainNavigationItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutGrid },
  { href: '/leads', label: 'Leads', icon: Users },
  { href: '/customers', label: 'Customers', icon: UsersRound },
  { href: '/proposals', label: 'Proposals', icon: FileText },
  { href: '/invoices', label: 'Invoices', icon: FileSpreadsheet },
  { href: '/items', label: 'Items', icon: ShoppingBag },
  { href: '/mail', label: 'Mail', icon: MailIcon },
  { href: '/shoebox', label: 'Shoebox', icon: Archive },
  { href: '/calendar', label: 'Calendar', icon: CalendarDays },
];

const utilityNavigationItems = [
  { href: '/help', label: 'Help', icon: HelpCircle },
  { href: '/settings', label: 'Settings', icon: SettingsIcon },
];

const SidebarNav: React.FC<SidebarNavProps> = ({ activePath, className }) => {
  return (
    <aside
      className={cn(
        'fixed top-0 left-0 z-20 flex h-screen w-60 flex-col border-r border-sidebar-border bg-sidebar p-4 text-sidebar-foreground',
        className
      )}
    >
      <div className="mb-6 flex items-center space-x-2 px-2">
        <Button variant="ghost" size="icon" className="h-8 w-8 text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground md:hidden">
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <PackageIcon className="h-7 w-7 text-primary" />
        <span className="text-xl font-semibold text-sidebar-primary">Leads App</span>
      </div>

      {/* Optional User Avatar section based on notes - can be customized or removed */}
      {/* <div className="mb-6 flex flex-col items-center space-y-2 border-b border-sidebar-border pb-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <p className="text-sm font-medium text-sidebar-primary">User Name</p>
          <p className="text-xs text-sidebar-foreground/80">user@example.com</p>
        </div>
      </div> */}

      <nav className="flex flex-1 flex-col space-y-1">
        {mainNavigationItems.map((item) => (
          <NavLink
            key={item.label}
            href={item.href}
            label={item.label}
            icon={item.icon}
            isActive={activePath === item.href}
          />
        ))}
        
        <div className="mt-auto flex flex-col space-y-1 pt-4 border-t border-sidebar-border">
          {utilityNavigationItems.map((item) => (
            <NavLink
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
              isActive={activePath === item.href}
            />
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default SidebarNav;
