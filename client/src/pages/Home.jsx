import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#fafafa] dark:bg-[#18181b] text-[#212226] dark:text-zinc-100 font-sans min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow-sm bg-white dark:bg-zinc-900 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-orange-500">StreakFlow</span>
        </div>
        <div className="hidden md:flex gap-8 text-base font-medium">
          <a href="#features" className="hover:text-orange-500">Features</a>
          <a href="#motivation" className="hover:text-orange-500">Motivation</a>
          <a href="#buddies" className="hover:text-orange-500">Habit Buddies</a>
          <a href="#faq" className="hover:text-orange-500">FAQ</a>
        </div>
        <div className="flex gap-2 items-center">
          <ThemeToggle />
          <Link to="/login">
            <button className="px-4 py-2 border rounded-md font-medium text-[#212226] dark:text-zinc-100 hover:bg-orange-50 dark:hover:bg-zinc-800">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-md shadow hover:bg-orange-600">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center py-16 px-4 gap-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2">Track, Build, and <span className="text-orange-500">Celebrate Habits</span>!</h1>
        <p className="max-w-xl text-lg md:text-xl text-[#979ea1] mb-6">Stay on top of your daily routines, visualize your progress, and grow with friends. Your accountability and motivation hub is here.</p>
        <button className="mt-2 px-8 py-3 bg-orange-500 text-white text-lg rounded-lg font-bold shadow hover:bg-orange-600">Start Tracking</button>
      </header>

      {/* Dashboard Preview Section */}
      <section className="flex flex-col items-center py-12 gap-6">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-4 shadow flex flex-col items-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-2">
              <span role="img" aria-label="checkmark" className="text-2xl">✅</span>
            </div>
            <div className="text-lg font-bold">Morning Run</div>
            <div className="text-sm text-[#44b8a0]">12 day streak</div>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-4 shadow flex flex-col items-center">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-2">
              <span role="img" aria-label="fire" className="text-2xl">🔥</span>
            </div>
            <div className="text-lg font-bold">Current Streak</div>
            <div className="text-2xl font-extrabold text-orange-500">27</div>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-4 shadow flex flex-col items-center">
            <div className="w-full h-16 bg-gradient-to-r from-green-300 via-orange-200 to-orange-400 rounded mb-2" />
            <div className="text-sm text-[#979ea1] dark:text-zinc-400">Yearly habit heatmap</div>
          </div>
        </div>
      </section>

      {/* Motivation Section */}
      <section id="motivation" className="flex flex-col items-center bg-[#fffbe6] dark:bg-zinc-800 py-12 px-4 gap-3">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Get Motivated, Stay Consistent</h2>
        <div className="max-w-xl text-center flex flex-col gap-3">
          <blockquote className="italic text-lg text-orange-700">“Success is the product of daily habits—not once-in-a-lifetime transformations.”</blockquote>
          <div className="text-[#979ea1] dark:text-zinc-400">Get a new motivational quote each day!</div>
        </div>
      </section>

      {/* Habit Buddies Section */}
      <section id="buddies" className="flex flex-col items-center py-12 px-4 gap-3">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Accountability with Buddies</h2>
        <div className="max-w-2xl text-center text-lg text-[#979ea1] dark:text-zinc-400 mb-4">
          Invite friends, join a community or find your “habit buddy” for encouragement and friendly streak battles.
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-4 w-56 shadow text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-2">
              <span className="text-lg">👫</span>
            </div>
            <div className="font-medium text-orange-500">Find a Buddy</div>
            <div className="text-sm text-[#44b8a0]">Stay on track together</div>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-4 w-56 shadow text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mb-2">
              <span className="text-lg">🏆</span>
            </div>
            <div className="font-medium text-orange-500">Challenge Each Other</div>
            <div className="text-sm text-[#44b8a0]">Friendly streak competition</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="flex flex-col items-center py-12 bg-[#f9fafb] dark:bg-zinc-900 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Build Lasting Habits with Smart Tools</h2>
        <div className="max-w-4xl grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow p-6">
            <div className="font-bold mb-2">Visualize Your Progress</div>
            <div className="text-[#979ea1] dark:text-zinc-400">Calendar heatmaps & charts make sticking to your habits fun and satisfying.</div>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow p-6">
            <div className="font-bold mb-2">Never Break a Streak</div>
            <div className="text-[#979ea1] dark:text-zinc-400">Get reminders and celebrate your milestones, every single day.</div>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow p-6">
            <div className="font-bold mb-2">Flexible Habit Logging</div>
            <div className="text-[#979ea1] dark:text-zinc-400">Track any habit—daily, weekly, or custom—suit it to your lifestyle.</div>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow p-6">
            <div className="font-bold mb-2">Accountability Matters</div>
            <div className="text-[#979ea1] dark:text-zinc-400">Pair up with buddies or join groups to boost success rates.</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="flex flex-col items-center py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="max-w-xl w-full space-y-4">
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-4 shadow">
            <div className="font-semibold">How do I reset a streak?</div>
            <div className="text-[#979ea1] dark:text-zinc-400">Go to your habit settings and choose “Reset Streak” for any habit at any time.</div>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-4 shadow">
            <div className="font-semibold">Can I track habits with friends?</div>
            <div className="text-[#979ea1] dark:text-zinc-400">Absolutely! Invite friends to join your habit group, or challenge your buddy to a shared streak.</div>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-4 shadow">
            <div className="font-semibold">How does the heatmap visualization work?</div>
            <div className="text-[#979ea1] dark:text-zinc-400">Each shaded cell represents a day you completed your habit—more color means more consistency!</div>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-4 shadow">
            <div className="font-semibold">Can I set custom reminders?</div>
            <div className="text-[#979ea1] dark:text-zinc-400">Yes, you can customize reminders for each habit based on your schedule.</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-center py-8 px-4 bg-white dark:bg-zinc-900 border-t mt-8">
        <div className="text-2xl font-bold mb-1">Ready to <span className="text-orange-500">unlock</span> your best self?</div>
        <div className="mb-4 text-[#979ea1] dark:text-zinc-400">Start your habit journey today!</div>
        <button className="px-8 py-3 bg-orange-500 text-white text-lg rounded-lg font-bold shadow hover:bg-orange-600 mb-5">Sign Up Free</button>
        <div className="flex gap-4 mb-2">
          <a href="#" className="text-[#979ea1] dark:text-zinc-400 hover:text-orange-500">FAQ</a>
          <a href="#" className="text-[#979ea1] dark:text-zinc-400 hover:text-orange-500">Support</a>
          <a href="#" className="text-[#979ea1] dark:text-zinc-400 hover:text-orange-500">Privacy</a>
        </div>
        <div className="flex gap-3 text-[#979ea1] dark:text-zinc-400">
          <a href="#" aria-label="Instagram">
            <span role="img" aria-label="Instagram">📷</span>
          </a>
          <a href="#" aria-label="Twitter">
            <span role="img" aria-label="Twitter">🐦</span>
          </a>
        </div>
        <div className="text-xs text-[#cbd0d2] dark:text-zinc-600 mt-3">© 2025 StreakFlow, Inc. All rights reserved.</div>
      </footer>
    </div>
  );
}
