import React, { useState } from 'react';
import axios from 'axios';
// import { BACKEND_URL } from '../services/api';

const BACKEND_URL = "http://localhost:5000";

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    gmail: '',
    password: '',
    confirmpassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (form.password !== form.confirmpassword) {
      setError('Passwords do not match.');
      return;
    }
    try {
      const res = await axios.post(`${BACKEND_URL}/api/auth/register`, form);
      setSuccess(res.data.message);
      setTimeout(() => {
        window.location.reload(); // <-- Refresh after 1 second
      }, 1000);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa] dark:bg-[#18181b] text-[#212226] dark:text-zinc-100">
      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Left: Form Section */}
        <div className="flex-1 flex items-center justify-center bg-white dark:bg-zinc-900 p-8 lg:p-10">
          <div className="w-full max-w-md flex flex-col gap-4 p-10">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-zinc-100 mb-2">Sign up</h2>
            <p className="text-sm mb-4 text-gray-600 dark:text-zinc-400">
              Already have an account? <a href="/login" className="font-medium text-orange-600 dark:text-orange-400 hover:underline">Sign in here</a>
            </p>
            {error && <div className="text-red-500">{error}</div>}
            {success && <div className="text-green-500">{success}</div>}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-zinc-200">Username</label>
                <input name="username" value={form.username} onChange={handleChange} type="text" className="w-full mt-1 p-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100" placeholder="Enter Username" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-zinc-200">Gmail</label>
                <input name="gmail" value={form.gmail} onChange={handleChange} type="email" className="w-full mt-1 p-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100" placeholder="Enter Gmail" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-zinc-200">Password</label>
                <input name="password" value={form.password} onChange={handleChange} type="password" className="w-full mt-1 p-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100" placeholder="Enter Password" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-zinc-200">Confirm Password</label>
                <input name="confirmpassword" value={form.confirmpassword} onChange={handleChange} type="password" className="w-full mt-1 p-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100" placeholder="Confirm Password" required />
              </div>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md">Sign Up</button>
            </form>

            <div className="my-4 text-center text-gray-400 dark:text-zinc-500">Or continue with</div>

            <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-md dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
              Sign in with Google
            </button>
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="hidden lg:flex flex-1 relative bg-orange-500 dark:bg-orange-600 items-center justify-center overflow-hidden h-screen">
          <div>
            <h1 className="text-3xl font-bold mb-2">Share your Progress</h1>
            <p className="text-lg mb-6">Your All In One Coding Portfolio Tracker</p>
            <img src="https://i.ibb.co/N2smvTz/card-example.png" alt="Card Preview" className="rounded-xl shadow-lg" />
          </div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-[url('https://i.ibb.co/wSrxw1V/owl.png')] bg-contain bg-no-repeat"></div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-zinc-900 border-t px-2">
        <div className="max-w-screen-xl px-4 py-4 mx-auto space-y-2 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center mb-4">
            {["FAQ", "Support", "Privacy", "Timeline", "Terms"].map((item) => (
              <div key={item} className="px-5 py-2">
                <a href="#" className="text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white">{item}</a>
              </div>
            ))}
          </nav>
          <div className="flex justify-center mt-2 space-x-6">
            <a href="#" className="text-black dark:text-white"><span className="sr-only">LinkedIn</span>
              <svg className="inline w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><circle cx="6" cy="9" r="3"/><rect x="2" y="20" width="8" height="2" rx="1"/></svg>
            </a>
            <a href="#" className="text-black dark:text-white"><span className="sr-only">Twitter</span>
              <svg className="inline w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.834 9.834 0 0 1-2.828.775A4.93 4.93 0 0 0 23.337 3c-.957.568-2.02.98-3.149 1.195a4.92 4.92 0 0 0-8.39 4.482A13.961 13.961 0 0 1 1.671 3.149a4.822 4.822 0 0 0 1.523 6.573A4.903 4.903 0 0 1 .964 9.1v.062a4.928 4.928 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.084 4.936 4.936 0 0 0 4.604 3.419A9.867 9.867 0 0 1 0 21.539a13.945 13.945 0 0 0 7.548 2.212c9.142 0 14.307-7.721 14.307-14.417 0-.22-.005-.439-.015-.657A10.24 10.24 0 0 0 24 4.557z"/></svg>
            </a>
            <a href="#" className="text-black dark:text-white"><span className="sr-only">Instagram</span>
              <svg className="inline w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm11 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm6.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>
            </a>
          </div>
          <p className="text-center text-gray-400 dark:text-gray-500 mt-2">© 2025 HabitBuddy, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SignUp;


