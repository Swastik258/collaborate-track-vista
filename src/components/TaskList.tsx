
import React from 'react';
import { MoreHorizontal, Calendar, User, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const tasks = [
  {
    id: 1,
    title: 'Design new landing page',
    project: 'Website Redesign',
    assignee: 'Sarah Johnson',
    dueDate: '2024-06-10',
    priority: 'High',
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Implement user authentication',
    project: 'Mobile App',
    assignee: 'Mike Chen',
    dueDate: '2024-06-12',
    priority: 'Medium',
    status: 'To Do',
  },
  {
    id: 3,
    title: 'Write API documentation',
    project: 'Backend API',
    assignee: 'Alex Rodriguez',
    dueDate: '2024-06-08',
    priority: 'Low',
    status: 'Review',
  },
  {
    id: 4,
    title: 'User testing session',
    project: 'User Research',
    assignee: 'Emma Wilson',
    dueDate: '2024-06-15',
    priority: 'High',
    status: 'Completed',
  },
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High': return 'bg-red-100 text-red-800 border-red-200';
    case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'Low': return 'bg-green-100 text-green-800 border-green-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Completed': return 'bg-green-100 text-green-800';
    case 'In Progress': return 'bg-blue-100 text-blue-800';
    case 'Review': return 'bg-purple-100 text-purple-800';
    case 'To Do': return 'bg-gray-100 text-gray-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export const TaskList = () => {
  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow bg-white"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 mb-2">{task.title}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="font-medium text-gray-700">{task.project}</span>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {task.assignee}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {task.dueDate}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className={getPriorityColor(task.priority)}>
                {task.priority}
              </Badge>
              <Badge className={getStatusColor(task.status)}>
                {task.status}
              </Badge>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
