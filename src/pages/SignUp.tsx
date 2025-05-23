import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SignupForm from '../components/custom/Auth/SignupForm';
import { useAuth } from '../components/custom/Auth/AuthContext';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Signup = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed left-0 right-0 top-0 z-10 p-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to={token ? "/dashboard" : "/"} className="tracking-widest">
              <svg className="h-3 w-28" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path>
              </svg>
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
          <SignupForm />
        </div>
      </main>
      
      <footer className="p-6 text-center text-sm text-tesla-gray">
        <p>© {new Date().getFullYear()} Tesla Auth Nexus API. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Signup;
