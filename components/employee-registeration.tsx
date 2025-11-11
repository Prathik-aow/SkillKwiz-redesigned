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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [emailOtp, setEmailOtp] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneOtpSent, setPhoneOtpSent] = useState(false);
  const [phoneOtp, setPhoneOtp] = useState("");
  const [resume, setResume] = useState<File | null>(null);

  const handleEmailOtp = () => {
    if (email.trim() && email.includes("@")) {
      setEmailOtpSent(true);
    } else {
      alert("Please enter a valid email");
    }
  };

  const handlePhoneOtp = () => {
    if (phone.trim() && phone.length >= 10) {
      setPhoneOtpSent(true);
    } else {
      alert("Please enter a valid phone number");
    }
  };

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !emailOtp.trim() ||
      !phone.trim() ||
      !phoneOtp.trim() ||
      !resume
    ) {
      alert("Please fill in all fields and upload resume");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }

    if (phone.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }

    onNext();
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setEmailOtpSent(false);
    setEmailOtp("");
    setPhone("");
    setPhoneOtpSent(false);
    setPhoneOtp("");
    setResume(null);
  };

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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full bg-white border-2 border-[#f73e5d] rounded-md px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f73e5d] hover:border-red-600 transition-all"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full bg-white border-2 border-[#f73e5d] rounded-md px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f73e5d] hover:border-red-600 transition-all"
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border-2 border-[#f73e5d] rounded-md px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f73e5d] hover:border-red-600 transition-all"
            />
            <button
              className="bg-gradient-to-r from-[#f73e5d] to-[#e63946] text-white px-6 py-3 rounded-md hover:from-red-600 hover:to-red-700 font-medium transition-all w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleEmailOtp}
              disabled={!email.trim() || !email.includes("@")}
            >
              Get OTP
            </button>
          </div>
          {emailOtpSent && (
            <div className="mt-3">
              <input
                type="text"
                placeholder="Enter OTP"
                value={emailOtp}
                onChange={(e) => setEmailOtp(e.target.value)}
                className="w-full sm:w-40 bg-white border-2 border-[#f73e5d] rounded-md px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f73e5d] hover:border-red-600 transition-all"
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 bg-white border-2 border-[#f73e5d] rounded-md px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f73e5d] hover:border-red-600 transition-all"
            />
            <button
              className="bg-gradient-to-r from-[#f73e5d] to-[#e63946] text-white px-6 py-3 rounded-md hover:from-red-600 hover:to-red-700 font-medium transition-all w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handlePhoneOtp}
              disabled={!phone.trim() || phone.length < 10}
            >
              Get OTP
            </button>
          </div>
          {phoneOtpSent && (
            <div className="mt-3">
              <input
                type="text"
                placeholder="Enter OTP"
                value={phoneOtp}
                onChange={(e) => setPhoneOtp(e.target.value)}
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
              <span className="font-medium">
                {resume ? resume.name : "Upload your Resume"}
              </span>
            </div>
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeUpload}
            />
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handleSubmit}
            className="px-8 py-3 rounded-md bg-gradient-to-r from-[#f73e5d] to-[#e63946] text-white hover:from-red-600 hover:to-red-700 font-medium transition-all w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={
              !firstName.trim() ||
              !lastName.trim() ||
              !email.trim() ||
              !emailOtp.trim() ||
              !phone.trim() ||
              !phoneOtp.trim() ||
              !resume
            }
          >
            Submit
          </button>
          <button
            onClick={handleReset}
            className="px-8 py-3 rounded-md bg-gray-200 text-black hover:bg-gray-300 font-medium transition-all w-full sm:w-auto"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
