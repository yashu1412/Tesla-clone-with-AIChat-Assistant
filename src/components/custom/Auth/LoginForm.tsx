
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Button } from './ui/button';
import { Input } from './ui/input';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      return;
    }

    setIsSubmitting(true);
    const success = await login(email, password);
    setIsSubmitting(false);
    
    if (success) {
      navigate('/');
    }
  };

  return (
    <div className="mx-auto max-w-md space-y-6 px-4">
      <div className="text-center">
        <h1 className="text-3xl font-medium">Sign In</h1>
        <p className="mt-2 text-sm text-tesla-gray">Enter your credentials to access your account</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="tesla-input"
            required
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
          </div>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="tesla-input"
            required
          />
        </div>
        
        <Button
          type="submit"
          className="w-full tesla-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-white"></div>
              <span className="ml-2">Signing In...</span>
            </div>
          ) : (
            'Sign In'
          )}
        </Button>
      </form>
      
      <div className="text-center text-sm text-tesla-gray">
        Don't have an account?{' '}
        <Link to="/signup" className="font-medium text-tesla-black hover:underline">
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
