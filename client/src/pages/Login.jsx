import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function Login() {
  const [form, setForm] = useState({ gmail: "", username: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const res = await axios.post(`${BACKEND_URL}/api/auth/login`, form);
      setSuccess(res.data.message);
      // Redirect or store user info/token here if needed
    } catch (err) {
      setError(err.response?.data?.message || "Login failed.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa] dark:bg-[#18181b]">
      <div className="flex flex-grow">
        {/* Left - Form */}
        <div className="flex-1 flex items-center justify-center bg-white dark:bg-zinc-900 p-8 lg:p-10">
          <div className="w-full max-w-md flex flex-col gap-4 p-10">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-zinc-100">Log in</h1>
            <div className="mt-2 text-sm text-gray-600 dark:text-zinc-400">
              Don't have an account yet?{" "}
              <Link to="/signup">
                <button className="font-medium text-orange-600 dark:text-orange-400 hover:underline">
                  Sign up here
                </button>
              </Link>
            </div>
            {error && <div className="text-red-500">{error}</div>}
            {success && <div className="text-green-500">{success}</div>}
            <form className="mt-2 space-y-4" autoComplete="off" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="gmail" className="block mb-1 text-sm font-medium text-gray-700 dark:text-zinc-200">
                  Gmail address
                </label>
                <input
                  id="gmail"
                  name="gmail"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.gmail}
                  onChange={handleChange}
                  className="block w-full px-4 py-2.5 text-sm border border-gray-200 dark:border-zinc-700 rounded-md dark:bg-zinc-800 dark:placeholder:text-zinc-400 outline-none dark:text-zinc-100"
                  placeholder="Enter gmail address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-zinc-200">Username</label>
                <input
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  type="text"
                  className="w-full mt-1 p-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100"
                  placeholder="Enter Username"
                  required
                />
              </div>
              <button type="submit" className="w-full px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition">Log in</button>
            </form>
            <div className="text-xs text-center text-gray-700 dark:text-zinc-400 mt-4">
              By signing in or creating an account, you are agreeing to our <a href="#" className="text-blue-500 underline mx-1">Terms & Conditions.</a> and <a href="#" className="text-blue-500 underline mx-1">Privacy Policy</a>.
            </div>
          </div>
        </div>
        {/* Right - Welcome + Features */}
        <div className="hidden lg:flex flex-1 relative bg-orange-500 dark:bg-orange-600 items-center justify-center overflow-hidden h-screen">
          <div className="flex flex-col items-center z-10 px-8 w-full">
            <h1 className="text-4xl mt-10 text-white font-semibold">Welcome to StreakFlow</h1>
            <div className="flex flex-col mt-8 gap-10 max-w-lg w-full">
              <div className="flex gap-4 items-center">
                <div className="w-36 h-28 flex justify-center items-center bg-white rounded-md shadow-md">
                  <svg className="w-16 h-16 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
                    <path d="M7 13h4v4M17 7h-4v4" strokeWidth="2" />
                  </svg>
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-semibold text-white">All-in-One Habit Profile</h3>
                  <p className="text-white font-medium leading-tight opacity-80">Track all your habits, streaks, and progress—visualized beautifully in one place.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-36 h-28 flex justify-center items-center bg-white rounded-md shadow-md">
                  <svg className="w-16 h-16 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="3" y="8" width="7" height="13" rx="1" strokeWidth="2" />
                    <rect x="14" y="3" width="7" height="18" rx="1" strokeWidth="2" />
                  </svg>
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-semibold text-white">Visualize Your Progress</h3>
                  <p className="text-white font-medium leading-tight opacity-80">Calendar heatmaps and beautiful stats keep you motivated every day.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-36 h-28 flex justify-center items-center bg-white rounded-md shadow-md">
                  <svg className="w-16 h-16 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path d="M8 12l2 2 4-4" strokeWidth="2" />
                  </svg>
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-semibold text-white">Accountability & Motivation</h3>
                  <p className="text-white font-medium leading-tight opacity-80">Find habit buddies or get a daily motivational boost—we help you stick with it!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-white dark:bg-zinc-900 border-t px-2 mt-8">
        <div className="max-w-screen-xl px-4 py-4 mx-auto space-y-2 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center mb-4">
            <div className="px-5 py-2"><a href="#" className="text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white">FAQ</a></div>
            <div className="px-5 py-2"><a href="#" className="text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white">Support</a></div>
            <div className="px-5 py-2"><a href="#" className="text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white">Privacy</a></div>
            <div className="px-5 py-2"><a href="#" className="text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white">Timeline</a></div>
            <div className="px-5 py-2"><a href="#" className="text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white">Terms</a></div>
          </nav>
          <div className="flex justify-center mt-2 space-x-6">
            <a href="#" className="text-black dark:text-white"><span className="sr-only">Linkedin</span>
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
}
