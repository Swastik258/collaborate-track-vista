
import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Dashboard as DashboardComponent } from '@/components/Dashboard';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <DashboardComponent />
      </main>
    </div>
  );
};

export default Dashboard;
