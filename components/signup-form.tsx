"use client";

import React from "react";

export default function PageName() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#00418d] mb-6">
          Welcome to Your Next.js + TypeScript Page
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Start building your awesome UI here. This boilerplate includes
          responsive layout, Tailwind support, and TypeScript setup.
        </p>
        <button className="px-8 py-3 bg-[#f73e5d] text-white rounded-lg font-semibold hover:bg-red-600 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}
