import React from 'react';

const AdminFooter: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 text-center py-3 sm:py-4 mt-auto text-xs sm:text-sm w-screen">
      &copy; {new Date().getFullYear()} Tesla Admin. All rights reserved.
    </footer>
  );
};

export default AdminFooter;
