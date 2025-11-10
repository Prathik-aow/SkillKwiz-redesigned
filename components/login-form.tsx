"use client";

import type React from "react";
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Link from "next/link";


/**
 * LoginForm Component - Responsive login form for employees and employers
 * Features: User type selection, email/password fields, show/hide password toggle
 * White background inputs, black text, red and blue gradient buttons
 */
interface LoginFormProps {
  onLogin: (userType: "employer" | "employee") => void;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<"employer" | "employee">("employee");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    onLogin(userType);
  };

  return (
    <div className="text-white">
      <h1 className="text-3xl font-semibold text-center mb-2">Login</h1>
      <p className="text-center text-gray-300 mb-8">
        Sign in to access your account
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* User Type Selection */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            type="button"
            onClick={() => setUserType("employee")}
            className={`flex items-center justify-center py-3 px-6 rounded-md text-white font-medium transition-all duration-300 ${
              userType === "employee"
                ? "bg-gradient-to-r from-[#f73e5d] to-[#e63946] shadow-lg"
                : "bg-gradient-to-r from-gray-500/60 to-gray-600/60 hover:from-gray-500/80 hover:to-gray-600/80"
            }`}
          >
            <span className="mr-2">👤</span> Employee
          </button>
          <button
            type="button"
            onClick={() => setUserType("employer")}
            className={`flex items-center justify-center py-3 px-6 rounded-md text-white font-medium transition-all duration-300 ${
              userType === "employer"
                ? "bg-gradient-to-r from-[#00418d] to-[#2563eb] shadow-lg"
                : "bg-gradient-to-r from-gray-500/60 to-gray-600/60 hover:from-gray-500/80 hover:to-gray-600/80"
            }`}
          >
            <span className="mr-2">👤</span> Employer
          </button>
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block mb-2 font-medium text-white">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Mail className="w-5 h-5 text-gray-400" />
            </div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-white rounded pl-10 pr-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f73e5d] border border-transparent hover:border-white/20 transition-all"
              required
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block mb-2 font-medium text-white"
          >
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Lock className="w-5 h-5 text-gray-400" />
            </div>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full bg-white rounded pl-10 pr-10 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f73e5d] border border-transparent hover:border-white/20 transition-all"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle password visibility"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Forgot Password */}
        <div className="text-right">
          <Link
            href="#"
            className="text-white hover:text-white/80 text-sm font-medium transition-colors underline decoration-white"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-3 rounded bg-gradient-to-r from-[#f73e5d] to-[#e63946] text-white hover:from-red-600 hover:to-red-700 font-bold transition-all duration-300 shadow-lg"
        >
          Login
        </button>

        {/* Sign Up Link */}
        <div className="text-center mt-4">
          <p className="text-gray-300">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-white hover:text-white/80 font-bold transition-colors underline decoration-white"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
