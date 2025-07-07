import React, { useState } from "react";
import axios from "axios";
import male from "../assets/male.png";
import female from "../assets/female.png";
import male1 from "../assets/male1.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import newtab from "../assets/newtab.png";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const avatarOptions = [
  { label: "Avatar1", value: "male", src: male },
  { label: "Avatar2", value: "female", src: female },
  { label: "Avatar3", value: "male1", src: male1 },
];

function getBase64(imgPath) {
  return fetch(imgPath)
    .then((res) => res.blob())
    .then(
      (blob) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
    );
}

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    gmail: "",
    avatar: avatarOptions[0].value, // default avatar
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAvatarSelect = (value) => {
    setForm({ ...form, avatar: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const selectedAvatar = avatarOptions.find((a) => a.value === form.avatar);
      const avatarBase64 = await getBase64(selectedAvatar.src);
      const res = await axios.post(`${BACKEND_URL}/api/auth/register`, {
        username: form.username,
        gmail: form.gmail,
        avatar: avatarBase64,
      });
      setSuccess(res.data.message);
      toast.success(res.data.message); // Show success toast
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      const msg = err.response?.data?.message || "Registration failed.";
      setError(msg);
      toast.error(msg); // Show error toast
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa] dark:bg-[#18181b] text-[#212226] dark:text-zinc-100">
      <ToastContainer position="top-center" />
      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Left: Form Section */}
        <div className="flex-1 flex items-center justify-center bg-white dark:bg-zinc-900 p-8 lg:p-10">
          <div className="w-full max-w-md flex flex-col gap-4 p-10">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-zinc-100 mb-2">
              Select Your Avatar
            </h2>
            <div className="mt-2 text-sm text-gray-600 dark:text-zinc-400">
              Already have an account ?{" "}
              <Link to="/login">
                <button className="font-medium text-orange-600 dark:text-orange-400 hover:underline">
                  Log in here
                </button>
              </Link>
            </div>
            {/* Avatar Selection */}
            <div className="flex gap-4 mb-2 justify-center">
              {avatarOptions.map((avatar) => (
                <div key={avatar.value} className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => handleAvatarSelect(avatar.value)}
                    className={`rounded-full border-4 ${
                      form.avatar === avatar.value
                        ? "border-orange-500"
                        : "border-transparent"
                    } focus:outline-none`}
                    aria-label={avatar.label}
                  >
                    <img
                      src={avatar.src}
                      alt={avatar.label}
                      className="w-20 h-20 object-cover rounded-full"
                    />
                  </button>
                  <span className="mt-2 text-sm font-medium text-gray-700 dark:text-zinc-200">
                    {avatar.label}
                  </span>
                </div>
              ))}
            </div>
            {/* Show selected avatar name */}
            <div className="mb-4 text-center text-orange-600 font-semibold">
              Selected Avatar:{" "}
              {avatarOptions.find((a) => a.value === form.avatar)?.label}
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-zinc-200">
                  Username
                </label>
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

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-zinc-200">
                  Gmail
                </label>
                <input
                  name="gmail"
                  value={form.gmail}
                  onChange={handleChange}
                  type="email"
                  className="w-full mt-1 p-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100"
                  placeholder="Enter Gmail"
                  required
                />
              </div>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md">
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="hidden lg:flex flex-1 relative bg-orange-500 dark:bg-orange-600 items-center justify-center overflow-hidden h-screen">
          <div>
            <h1 className="text-3xl font-bold mb-2">Share your Progress</h1>
            <p className="text-lg mb-6">
              Your All In One Coding Portfolio Tracker
            </p>
            <img
              src={newtab}
              alt="Card Preview"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-zinc-900 border-t px-2">
        <div className="max-w-screen-xl px-4 py-4 mx-auto space-y-2 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center mb-4">
            {["FAQ", "Support", "Privacy", "Timeline", "Terms"].map((item) => (
              <div key={item} className="px-5 py-2">
                <a
                  href="#"
                  className="text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white"
                >
                  {item}
                </a>
              </div>
            ))}
          </nav>
          <div className="flex justify-center mt-2 space-x-6">
            <a href="#" className="text-black dark:text-white">
              <span className="sr-only">LinkedIn</span>
              <svg
                className="inline w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <circle cx="6" cy="9" r="3" />
                <rect x="2" y="20" width="8" height="2" rx="1" />
              </svg>
            </a>
            <a href="#" className="text-black dark:text-white">
              <span className="sr-only">Twitter</span>
              <svg
                className="inline w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.834 9.834 0 0 1-2.828.775A4.93 4.93 0 0 0 23.337 3c-.957.568-2.02.98-3.149 1.195a4.92 4.92 0 0 0-8.39 4.482A13.961 13.961 0 0 1 1.671 3.149a4.822 4.822 0 0 0 1.523 6.573A4.903 4.903 0 0 1 .964 9.1v.062a4.928 4.928 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.084 4.936 4.936 0 0 0 4.604 3.419A9.867 9.867 0 0 1 0 21.539a13.945 13.945 0 0 0 7.548 2.212c9.142 0 14.307-7.721 14.307-14.417 0-.22-.005-.439-.015-.657A10.24 10.24 0 0 0 24 4.557z" />
              </svg>
            </a>
            <a href="#" className="text-black dark:text-white">
              <span className="sr-only">Instagram</span>
              <svg
                className="inline w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm11 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm6.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
              </svg>
            </a>
          </div>
          <p className="text-center text-gray-400 dark:text-gray-500 mt-2">
            © 2025 HabitBuddy, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SignUp;
