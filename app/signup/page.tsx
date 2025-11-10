"use client";

import React from "react";

export default function SignUp() {
  return (
    <section
      className="
        relative py-20 
        bg-gradient-to-b from-[#00418d] via-[#2563eb] to-[#f73e5d] 
        min-h-screen flex items-center justify-center
      "
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="bg-white rounded-xl shadow-2xl p-10 max-w-md mx-auto">
          <h2 className="text-3xl font-extrabold text-[#00418d] mb-8 text-center">
            Create Your Account
          </h2>
          <form className="space-y-6 text-left text-[#00418d]">
            <Input label="Full Name" type="text" placeholder="Enter your full name" />
            <Input label="Email" type="email" placeholder="Enter your email" />
            <Input label="Password" type="password" placeholder="Create a password" />
            <Input label="Confirm Password" type="password" placeholder="Confirm your password" />
            <button
              type="submit"
              className="w-full bg-[#f73e5d] text-white font-semibold py-3 rounded-lg shadow-md hover:bg-red-600 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Input({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div>
      <label className="block mb-2 font-semibold text-left text-[#00418d]">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full p-3 rounded-md bg-white text-[#00418d] 
          border border-[#f73e5d]
          focus:outline-none focus:ring-2 focus:ring-[#f73e5d]
        "
        required
      />
    </div>
  );
}
