
import { Link } from 'react-router-dom';
import { Button } from '../components/custom/Auth/ui/button';

const Unauthorized = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed left-0 right-0 top-0 z-10 p-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
         Tesla
        </div>
      </header>
      
      <main className="flex flex-1 items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-6xl font-bold">401</h1>
          <h2 className="mt-4 text-2xl font-medium">Unauthorized Access</h2>
          <p className="mt-2 text-tesla-gray">
            You don't have permission to access this page
          </p>
          <Button asChild className="mt-8 tesla-button">
            <Link to="/dashboard">Back to Dashboard</Link>
          </Button>
        </div>
      </main>
      
      <footer className="p-6 text-center text-sm text-tesla-gray">
        <p>© {new Date().getFullYear()} Tesla Auth Nexus API. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Unauthorized;
