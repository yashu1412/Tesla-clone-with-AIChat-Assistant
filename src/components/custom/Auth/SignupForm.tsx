
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SignupForm: React.FC = () => {
  const [step, setStep] = useState<'email' | 'otp' | 'details'>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [region, setRegion] = useState('');
  const [language, setLanguage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { sendOTP, signup } = useAuth();
  const navigate = useNavigate();

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    setIsSubmitting(true);
    const success = await sendOTP(email);
    setIsSubmitting(false);
    
    if (success) {
      setStep('otp');
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!otp) return;
    
    // Move to final step without verification here (actual verification happens during signup)
    setStep('details');
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      return;
    }

    setIsSubmitting(true);
    const success = await signup(
      {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        confirmPassword,
        region,
        language,
      },
      otp
    );
    setIsSubmitting(false);
    
    if (success) {
      navigate('/login');
    }
  };

  return (
    <div className="mx-auto max-w-md space-y-6 px-4">
      <div className="text-center">
        <h1 className="text-3xl font-medium">Create Account</h1>
        <p className="mt-2 text-sm text-tesla-gray">Join Tesla Auth Nexus API</p>
      </div>
      
      {step === 'email' && (
        <form onSubmit={handleSendOTP} className="space-y-4">
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
            <p className="text-xs text-tesla-gray">
              We'll send a verification code to this email
            </p>
          </div>
          
          <Button
            type="submit"
            className="w-full tesla-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-white"></div>
                <span className="ml-2">Sending OTP...</span>
              </div>
            ) : (
              'Continue'
            )}
          </Button>
        </form>
      )}
      
      {step === 'otp' && (
        <form onSubmit={handleVerifyOTP} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="otp" className="text-sm font-medium">
              Verification Code
            </label>
            <Input
              id="otp"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter 6-digit code"
              className="tesla-input text-center text-xl tracking-wider"
              required
              maxLength={6}
            />
            <div className="flex justify-between">
              <p className="text-xs text-tesla-gray">
                Code sent to {email}
              </p>
              <button
                type="button"
                onClick={() => sendOTP(email)}
                className="text-xs text-tesla-black hover:underline"
              >
                Resend code
              </button>
            </div>
          </div>
          
          <Button
            type="submit"
            className="w-full tesla-button"
          >
            Verify
          </Button>
          
          <button
            type="button"
            className="w-full text-center text-sm text-tesla-gray hover:text-tesla-black"
            onClick={() => setStep('email')}
          >
            Change Email
          </button>
        </form>
      )}
      
      {step === 'details' && (
        <form onSubmit={handleSignup} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium">
                First Name
              </label>
              <Input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                className="tesla-input"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium">
                Last Name
              </label>
              <Input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
                className="tesla-input"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="tesla-input"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirm Password
            </label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="tesla-input"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="region" className="text-sm font-medium">
                Region
              </label>
              <Select value={region} onValueChange={setRegion}>
                <SelectTrigger className="tesla-input">
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="north_america">North America</SelectItem>
                  <SelectItem value="europe">Europe</SelectItem>
                  <SelectItem value="asia_pacific">Asia Pacific</SelectItem>
                  <SelectItem value="middle_east">Middle East</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="language" className="text-sm font-medium">
                Language
              </label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="tesla-input">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                  <SelectItem value="zh">Chinese</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button
            type="submit"
            className="w-full tesla-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-white"></div>
                <span className="ml-2">Creating Account...</span>
              </div>
            ) : (
              'Create Account'
            )}
          </Button>
        </form>
      )}
      
      <div className="text-center text-sm text-tesla-gray">
        Already have an account?{' '}
        <Link to="/login" className="font-medium text-tesla-black hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
