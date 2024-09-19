import React from 'react';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-all">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
