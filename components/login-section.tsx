"use client";

import { useState } from "react";

export default function LoginSection() {
  // Track whether 'Sign Up' form should be shown or the welcome message
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <section
      className="
        relative py-20 
        bg-gradient-to-b from-[#00418d] via-[#2563eb] to-[#f73e5d] 
        overflow-hidden min-h-screen flex items-center justify-center
      "
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-24">
        {/* Container with white background and rounded corners */}
        <div className="bg-white rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
          {/* Left Panel */}
          <div
            className={`
              w-full md:w-1/2 p-8 sm:p-10 bg-[#00418d] 
              transition-transform duration-700 ease-in-out 
              flex items-center justify-center text-center
            `}
          >
            {/* Conditionally render SignUp form or welcome message */}
            {showSignUp ? (
              <SignUpForm onCancel={() => setShowSignUp(false)} />
            ) : (
              <WelcomeMessage onSignUpClick={() => setShowSignUp(true)} />
            )}
          </div>

          {/* Right Panel: Sign In Form */}
          <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-[#00418d] mb-8 text-center md:text-left">
              Sign in to SkillKwiz
            </h2>

            <SignInForm />

            {/* Prompt to switch to Sign Up */}
            <p className="mt-8 text-center text-gray-600">
              Don&apos;t have an account?{" "}
              <button
                onClick={() => setShowSignUp(true)}
                className="text-[#f73e5d] font-semibold hover:underline"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * WelcomeMessage component shows a welcome header,
 * descriptive paragraph, and a button to toggle Sign Up form.
 */
function WelcomeMessage({ onSignUpClick }: { onSignUpClick: () => void }) {
  return (
    <div className="text-white text-center max-w-sm sm:max-w-md mx-auto">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
        Welcome to SkillKwiz
      </h2>
      <p className="text-base sm:text-lg mb-8">
        New here? Create an account and start assessing your skills with
        industry standards.
      </p>
      <button
        onClick={onSignUpClick}
        className="px-8 py-3 bg-[#f73e5d] rounded-full font-semibold hover:bg-red-600 transition w-full sm:w-auto"
      >
        Sign Up
      </button>
    </div>
  );
}

/**
 * SignInForm component renders the sign in input fields and controls.
 */
function SignInForm() {
  return (
    <form className="space-y-6">
      <Input label="Email" type="email" placeholder="Enter your email" />
      <Input label="Password" type="password" placeholder="Enter your password" />
      <div className="flex flex-col sm:flex-row justify-between items-center text-[#00418d] text-sm gap-3 sm:gap-0">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="w-4 h-4" />
          Remember me
        </label>
        <a href="#" className="underline hover:text-[#f73e5d]">
          Forgot Password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full bg-[#f73e5d] text-white font-semibold py-3 rounded-lg shadow-md hover:bg-red-600 transition"
      >
        Sign In
      </button>
    </form>
  );
}

function SignUpForm({ onCancel }: { onCancel: () => void }) {
  return (
    <form className="space-y-6 w-full max-w-sm sm:max-w-md text-white text-left">
      <h3 className="text-2xl font-extrabold mb-4">Create Account</h3>
      <Input label="Full Name" type="text" placeholder="Enter your full name" />
      <Input label="Email" type="email" placeholder="Enter your email" />
      <Input label="Password" type="password" placeholder="Create a password" />
      <Input label="Confirm Password" type="password" placeholder="Confirm your password" />

      <button
        type="submit"
        className="w-full bg-[#f73e5d] font-semibold py-3 rounded-lg shadow-md hover:bg-red-600 transition"
      >
        Sign Up
      </button>

      <button
        type="button"
        onClick={onCancel}
        className="mt-4 w-full border border-[#f73e5d] rounded-lg py-3 font-semibold hover:bg-[#f73e5d] hover:text-white transition"
      >
        Back to Sign In
      </button>
    </form>
  );
}

/**
 * Input component renders a labeled input field with consistent styling.
 * Labels aligned to the left above the input field.
 */
function Input({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div>
      <label className="block mb-2 font-semibold text-left text-[#00418d] md:text-inherit">
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
