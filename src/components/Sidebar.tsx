import { Link, useNavigate } from 'react-router-dom';
import { navigationsDashboard } from '../lib/data';
import { logout, getCurrentUser } from '../services/authService'; // Adjust the import path as needed
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const email = getCurrentUser();
    setUserEmail(email);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-neutral-900 border-r border-gray-200 dark:border-neutral-700 transition-transform duration-300 ease-in-out transform">
      <div className="px-6 py-4">
        {/* Logo Section */}
        <Link to="/" aria-label="Home" className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="w-12 h-12" />
          <span className="text-indigo-500 text-xl font-bold ml-3">BUDGET</span>
        </Link>
       
      </div>

      {/* Navigation Links */}
      <nav className="mt-6">
        <ul className="space-y-4">
          {navigationsDashboard.map((nav) => (
            <li key={nav.name}>
              {nav.action === 'logout' ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-x-3 px-4 py-2 text-gray-800 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-700 w-full text-left"
                >
                  {nav.icon && (
                    <span className="shrink-0">
                      {nav.icon}
                    </span>
                  )}
                  {nav.name}
                </button>
              ) : (
                <Link
                  to={nav.path || '/'}
                  className="flex items-center gap-x-3 px-4 py-2 text-gray-800 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-700"
                >
                  {nav.icon && (
                    <span className="shrink-0">
                      {nav.icon}
                    </span>
                  )}
                  {nav.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="absolute bottom-0 left-0 w-full">
      {userEmail && (
          <div className="mt-4 text-gray-800 dark:text-white">
            <span>{userEmail}</span>
          </div>
        )}
        </div>
    </div>
  );
};

export default Sidebar;