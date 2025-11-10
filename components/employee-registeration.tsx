"use client";

import { useState } from "react";
import { Upload } from "lucide-react";

/**
 * EmployeeRegistration Component - Employee registration form
 * Features: Name fields, Email with OTP, Phone with OTP, Resume upload
 * Responsive design with professional red and blue color scheme
 * Black text, white background, red input fields - matching LoginForm styling
 */
interface EmployeeRegistrationProps {
  onNext: () => void;
}

export default function EmployeeRegistration({
  onNext,
}: EmployeeRegistrationProps) {
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [phoneOtpSent, setPhoneOtpSent] = useState(false);

  return (
    <div className="pt-8 md:pt-12 lg:pt-16 pb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
        Employee Registration
      </h1>

      <div className="space-y-6">
        {/* Name Fields */}
        <div>
          <label className="block mb-2 font-semibold text-white">Name</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full bg-white border-2 border-[#f73e5d] rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f73e5d] hover:border-red-600 transition-all"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full bg-white border-2 border-[#f73e5d] rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f73e5d] hover:border-red-600 transition-all"
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label className="block mb-2 font-semibold text-white">Email</label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 bg-white border-2 border-[#f73e5d] rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f73e5d] hover:border-red-600 transition-all"
            />
            <button
              className="bg-gradient-to-r from-[#f73e5d] to-[#e63946] text-white px-6 py-3 rounded-md hover:from-red-600 hover:to-red-700 font-medium transition-all w-full sm:w-auto"
              onClick={() => setEmailOtpSent(true)}
            >
              Get OTP
            </button>
          </div>
          {emailOtpSent && (
            <div className="mt-3">
              <input
                type="text"
                placeholder="Enter OTP"
                className="w-full sm:w-40 bg-white border-2 border-[#f73e5d] rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f73e5d] hover:border-red-600 transition-all"
              />
            </div>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label className="block mb-2 font-semibold text-white">Phone</label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="tel"
              placeholder="Enter Phone No."
              className="flex-1 bg-white border-2 border-[#f73e5d] rounded-md px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f73e5d] hover:border-red-600 transition-all"
            />
            <button
              className="bg-gradient-to-r from-[#f73e5d] to-[#e63946] text-white px-6 py-3 rounded-md hover:from-red-600 hover:to-red-700 font-medium transition-all w-full sm:w-auto"
              onClick={() => setPhoneOtpSent(true)}
            >
              Get OTP
            </button>
          </div>
          {phoneOtpSent && (
            <div className="mt-3">
              <input
                type="text"
                placeholder="Enter OTP"
                className="w-full sm:w-40 bg-white border-2 border-[#f73e5d] rounded-md px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f73e5d] hover:border-red-600 transition-all"
              />
            </div>
          )}
        </div>

        {/* Upload Resume */}
        <div>
          <label className="block mb-2 font-semibold text-white">
            Upload Resume
          </label>
          <label className="w-full bg-white border-2 border-dashed border-[#f73e5d] rounded-md px-4 py-6 text-black hover:bg-gray-50 hover:border-red-600 flex items-center justify-center cursor-pointer transition-all">
            <div className="flex items-center gap-2">
              <Upload className="w-5 h-5 text-[#f73e5d]" />
              <span className="font-medium">Upload your Resume</span>
            </div>
            <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={onNext}
            className="px-8 py-3 rounded-md bg-gradient-to-r from-[#f73e5d] to-[#e63946] text-white hover:from-red-600 hover:to-red-700 font-medium transition-all w-full sm:w-auto"
          >
            Submit
          </button>
          <button className="px-8 py-3 rounded-md bg-gray-200 text-black hover:bg-gray-300 font-medium transition-all w-full sm:w-auto">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
