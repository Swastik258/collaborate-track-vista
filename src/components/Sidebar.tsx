
import React, { useState } from 'react';
import { 
  Home, 
  CheckSquare, 
  FolderOpen, 
  Users, 
  BarChart3, 
  Settings,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Dashboard', icon: Home, current: true },
  { name: 'Tasks', icon: CheckSquare, current: false },
  { name: 'Projects', icon: FolderOpen, current: false },
  { name: 'Team', icon: Users, current: false },
  { name: 'Analytics', icon: BarChart3, current: false },
  { name: 'Settings', icon: Settings, current: false },
];

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!isCollapsed && (
          <h1 className="text-xl font-bold text-gray-900">TaskFlow</h1>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2"
        >
          {isCollapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
        </Button>
      </div>
      
      <nav className="p-4 space-y-2">
        {navigation.map((item) => (
          <a
            key={item.name}
            href="#"
            className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              item.current
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <item.icon className={`w-5 h-5 ${isCollapsed ? '' : 'mr-3'}`} />
            {!isCollapsed && item.name}
          </a>
        ))}
      </nav>
    </div>
  );
};
