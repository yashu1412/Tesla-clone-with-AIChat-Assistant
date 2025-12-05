import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // <-- import Link here
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { LayoutDashboard, Users, Package, Tag, LogOut } from 'lucide-react';
import { useAuth } from '../Auth/AuthContext';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);
  const { logout } = useAuth();

  const isAdmin = user?.role === 'admin';
  const isEmployee = user?.role === 'employee';

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = [
    {
      title: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
      path: '/dashboard',
      roles: ['admin', 'employee'],
    },
    {
      title: 'Users',
      icon: <Users size={20} />,
      path: '/dashboard/users',
      roles: ['admin'],
    },
    {
      title: 'Products',
      icon: <Package size={20} />,
      path: '/dashboard/products',
      roles: ['admin', 'employee'],
    },
    {
      title: 'Categories',
      icon: <Tag size={20} />,
      path: '/dashboard/categories',
      roles: ['admin', 'employee'],
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen w-screen overflow-x-hidden flex bg-gray-100">
      <div className="hidden md:flex w-64 bg-white shadow-lg flex-col">
        {/* Tesla Logo */}
        <div className="p-6 border-b flex items-center justify-center">
          <Link to="/" className="tracking-widest text-black">
            <svg
              className="h-8 w-32"
              viewBox="0 0 342 35"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" />
            </svg>
          </Link>
        </div>

        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <p className="text-sm text-gray-600">{user?.role}</p>
        </div>
        <nav className="p-4 flex-grow">
          {menuItems.map((item) => {
            if (item.roles.includes(user?.role || '')) {
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className="flex items-center w-full p-2 mb-2 text-gray-700 rounded hover:bg-gray-100"
                >
                  {item.icon}
                  <span className="ml-3">{item.title}</span>
                </button>
              );
            }
            return null;
          })}
          <button
            onClick={handleLogout}
            className="flex items-center w-full p-2 mt-4 text-red-600 rounded hover:bg-red-50"
          >
            <LogOut size={20} />
            <span className="ml-3">Logout</span>
          </button>
        </nav>
      </div>

      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Welcome, {user?.first_name} {user?.last_name}
            </h1>
            <button
              className="md:hidden px-3 py-2 border rounded text-gray-700"
              onClick={() => setOpen((v) => !v)}
            >
              Menu
            </button>
          </div>
          <div className="md:hidden px-3 pb-3 overflow-x-auto whitespace-nowrap">
            {menuItems.filter(m => m.roles.includes(user?.role || '')).map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="inline-flex items-center px-3 py-2 mr-2 text-gray-700 rounded border hover:bg-gray-100"
              >
                <span className="mr-2">{item.icon}</span>
                {item.title}
              </button>
            ))}
          </div>
        </header>
        <main className="p-2 sm:p-6" data-chat-container>{children}</main>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)}></div>
          <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-semibold">Menu</span>
              <button className="px-2 py-1 border rounded" onClick={() => setOpen(false)}>Close</button>
            </div>
            {menuItems.filter(m => m.roles.includes(user?.role || '')).map((item) => (
              <button
                key={item.path}
                onClick={() => { navigate(item.path); setOpen(false); }}
                className="flex items-center w-full p-2 mb-2 text-gray-700 rounded hover:bg-gray-100"
              >
                <span className="mr-2">{item.icon}</span>
                {item.title}
              </button>
            ))}
            <button
              onClick={handleLogout}
              className="flex items-center w-full p-2 mt-2 text-red-600 rounded hover:bg-red-50"
            >
              <LogOut size={20} />
              <span className="ml-3">Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
