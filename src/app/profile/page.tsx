'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/app/providers/UserProvider';
import { Button } from '@/app/components/ui/Button';
import { Input } from '@/app/components/ui/Input';
import { useLoading } from '@/app/providers/LoadingProvider';

const ProfilePage = () => {
  const { user, logout } = useUser();
  const router = useRouter();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    } else {
      setIsLoading(false); // Hide loading screen once user data is available
    }
  }, [user, router, setIsLoading]);

  if (!user) {
    return null; // or a loading spinner
  }

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Your Profile</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <Input type="text" value={user.name} readOnly />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <Input type="email" value={user.email} readOnly />
          </div>
          {user.address && (
            <div>
              <h2 className="text-xl font-bold mt-6 mb-4">Address</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Street</label>
                  <Input type="text" value={user.address.street || 'N/A'} readOnly />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <Input type="text" value={user.address.city || 'N/A'} readOnly />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">State</label>
                  <Input type="text" value={user.address.state || 'N/A'} readOnly />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Zip Code</label>
                  <Input type="text" value={user.address.zip || 'N/A'} readOnly />
                </div>
              </div>
            </div>
          )}
          <div className="flex justify-end mt-6">
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
