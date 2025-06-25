import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { setToken as setTokenAction, setUser as setUserAction, type User } from '../../../store/slices/authSlice';
import type { AppDispatch } from '../../../store';

// Define the shape of our auth context
interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (signupData: SignupData, otp: string) => Promise<boolean>;
  logout: () => void;
  sendOTP: (email: string) => Promise<boolean>;
  changePassword: (oldPassword: string, newPassword: string) => Promise<boolean>;
}

// Define signup data interface
interface SignupData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmPassword: string;
  region?: string;
  language?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const API_BASE_URL = 'https://tesla-clone-with-aichat-assistant.onrender.com/api/v1';

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      dispatch(setTokenAction(storedToken));
      dispatch(setUserAction(JSON.parse(storedUser)));
    }

    setIsLoading(false);
  }, [dispatch]);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || 'Login failed');
        return false;
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      setToken(data.token);
      setUser(data.user);
      dispatch(setTokenAction(data.token));
      dispatch(setUserAction(data.user));

      toast.success('Login successful');
      return true;
    } catch (error) {
      console.error('Login error:', error);
      toast.error('An error occurred during login');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const sendOTP = async (email: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_BASE_URL}/auth/sendotp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || 'Failed to send OTP');
        return false;
      }

      toast.success(data.message || 'OTP sent successfully');
      return true;
    } catch (error) {
      console.error('Send OTP error:', error);
      toast.error('An error occurred while sending OTP');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (signupData: SignupData, otp: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...signupData, otp }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || 'Signup failed');
        return false;
      }

      toast.success('Signup successful! Please login');
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      toast.error('An error occurred during signup');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const changePassword = async (oldPassword: string, newPassword: string): Promise<boolean> => {
    if (!token) {
      toast.error('You must be logged in to change password');
      return false;
    }

    try {
      setIsLoading(true);
      const response = await fetch(`${API_BASE_URL}/auth/changepassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ oldPassword, newPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || 'Failed to change password');
        return false;
      }

      toast.success(data.message || 'Password changed successfully');
      return true;
    } catch (error) {
      console.error('Change password error:', error);
      toast.error('An error occurred while changing password');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
    dispatch(setTokenAction(null));
    dispatch(setUserAction(null));
    toast.success('Logged out successfully');
  };

  const value: AuthContextType = {
    user,
    token,
    isAuthenticated: !!token && !!user,
    isLoading,
    login,
    signup,
    logout,
    sendOTP,
    changePassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
