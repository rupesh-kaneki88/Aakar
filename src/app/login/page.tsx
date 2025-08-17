'use client'; 
import { useState, useEffect, useRef } from 'react';                                    
import { useRouter } from 'next/navigation';                                            
import Link from 'next/link';                                                           
import { useUser } from '@/app/providers/UserProvider';
import { mockUser } from '@/lib/mockUser';
import { Button } from '@/app/components/ui/Button';
import { Input } from '@/app/components/ui/Input';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

import { toast } from 'sonner';
import { gsap } from 'gsap';
import Loading from '@/app/components/Loading';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useUser();
  const router = useRouter();
  const formRef = useRef(null);
  const leftDivRef = useRef(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust delay as needed
  }, []);

  useEffect(() => {
    gsap.fromTo(formRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    if (leftDivRef.current) {
      gsap.fromTo(leftDivRef.current,
        { x: -window.innerWidth }, // Start off-screen left
        { x: 0, duration: 1.2, ease: "power3.out" } // End at its natural position
      );
    }

  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please enter both email and password.');
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email === mockUser.email && password === 'password123') {
      login(mockUser);
      toast.success('Logged in successfully!');
      router.push('/profile');
    } else {
      toast.error('Invalid email or password.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if(loading){
    return <Loading />;
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:h-[620px] bg-gray-50">
      <div ref={leftDivRef} className="hidden md:flex flex-col items-center justify-center w-1/2 bg-[#4b3d34] h-[620px] p-8">
        <img
          src="/aakar_studio_logo.png"
          alt="Aakaar Studio Logo"
          className="w-[200px] h-auto mb-8"
        />
        <h2 className="text-white text-4xl font-bold text-center [font-family:'Akatab',Helvetica]">
          Welcome Back to Aakaar Studio
        </h2>
        <p className="text-white text-lg text-center mt-4 [font-family:'Akatab',Helvetica]">
          Sign in to explore our exquisite collection.
        </p>
      </div>
      <div className='top-0 left-0 md:hidden sm:block bg-[#4b3d34] w-full h-10' />
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
        <div ref={formRef} className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center [font-family:'Akatab',Helvetica] text-[#4e472c]">Login</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 [font-family:'Akatab',Helvetica]">Email address</label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#4b3d34] focus:border-[#4b3d34] sm:text-sm [font-family:'Akatab',Helvetica]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 [font-family:'Akatab',Helvetica]">Password</label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#4b3d34] focus:border-[#4b3d34] sm:text-sm pr-10 [font-family:'Akatab',Helvetica]"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-400 hover:text-[#4b3d34] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4b3d34] rounded-md"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <EyeIcon className="h-5 w-5" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-[9.07px] shadow-sm text-sm font-medium text-white bg-[#4b3d34] hover:bg-[#3a2e25] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4b3d34] [font-family:'Akatab',Helvetica]"
            >
              Login
            </Button>
          </form>
          <div className="text-center text-sm text-gray-600 [font-family:'Akatab',Helvetica]">
            New here? {' '}
            <Link href="/signup" className="font-medium text-[#4b3d34] hover:text-[#3a2e25]">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
