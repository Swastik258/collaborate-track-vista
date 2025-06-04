
import React from 'react';
import { MoreHorizontal, TrendingUp, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const projects = [
  {
    id: 1,
    name: 'Website Redesign',
    progress: 75,
    dueDate: '2024-06-30',
    tasks: { completed: 12, total: 16 },
    team: ['Sarah', 'Mike', 'Alex'],
  },
  {
    id: 2,
    name: 'Mobile App',
    progress: 45,
    dueDate: '2024-07-15',
    tasks: { completed: 9, total: 20 },
    team: ['Emma', 'John', 'Lisa'],
  },
  {
    id: 3,
    name: 'Backend API',
    progress: 90,
    dueDate: '2024-06-20',
    tasks: { completed: 18, total: 20 },
    team: ['Alex', 'Mike'],
  },
];

export const ProjectOverview = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold">Active Projects</CardTitle>
          <Button variant="ghost" size="sm">View All</Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-medium text-gray-900">{project.name}</h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    Due {project.dueDate}
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="mb-3">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">
                  {project.tasks.completed}/{project.tasks.total} tasks
                </span>
                <div className="flex items-center text-gray-500">
                  <span className="mr-1">{project.team.length} members</span>
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
