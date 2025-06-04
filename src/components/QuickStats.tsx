
import React from 'react';
import { CheckSquare, Clock, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  {
    name: 'Total Tasks',
    value: '24',
    change: '+12%',
    changeType: 'positive',
    icon: CheckSquare,
  },
  {
    name: 'In Progress',
    value: '8',
    change: '+2',
    changeType: 'positive',
    icon: Clock,
  },
  {
    name: 'Completed',
    value: '16',
    change: '+8',
    changeType: 'positive',
    icon: TrendingUp,
  },
  {
    name: 'Team Members',
    value: '6',
    change: '+1',
    changeType: 'positive',
    icon: Users,
  },
];

export const QuickStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.name} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-full">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4">
              <span className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-500 ml-1">from last week</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
