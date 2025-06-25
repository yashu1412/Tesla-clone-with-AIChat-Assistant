
import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Button } from './ui/button';
import { Input } from './ui/input';

const ChangePasswordForm: React.FC = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  
  const { changePassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      setPasswordError("New passwords don't match");
      return;
    }
    
    if (newPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    }
    
    setPasswordError('');
    setIsSubmitting(true);
    await changePassword(oldPassword, newPassword);
    setIsSubmitting(false);
    
    // Reset form
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="mx-auto max-w-md space-y-6 px-4">
      <div className="text-center">
        <h2 className="text-2xl font-medium">Change Password</h2>
        <p className="mt-2 text-sm text-tesla-gray">Update your account password</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="oldPassword" className="text-sm font-medium">
            Current Password
          </label>
          <Input
            id="oldPassword"
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Enter current password"
            className="tesla-input"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="newPassword" className="text-sm font-medium">
            New Password
          </label>
          <Input
            id="newPassword"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            className="tesla-input"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="text-sm font-medium">
            Confirm New Password
          </label>
          <Input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            className="tesla-input"
            required
          />
          
          {passwordError && (
            <p className="text-sm text-red-500">{passwordError}</p>
          )}
        </div>
        
        <Button
          type="submit"
          className="w-full tesla-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-white"></div>
              <span className="ml-2">Updating...</span>
            </div>
          ) : (
            'Update Password'
          )}
        </Button>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
