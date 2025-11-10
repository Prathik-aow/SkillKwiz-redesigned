"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import LoginForm from "@/components/login-form";
import EmployeeRegistration from "@/components/employee-registeration";
import ScheduleAssessment from "@/components/schedule-assessment";
import EmployerRegistration from "@/components/employer-registeration";
import EmployerProfile from "@/components/employer-profile";
import EmployerAssessmentRequest from "@/components/employer-assessment-request";
import EmployerCandidateList from "@/components/employer-candidate-list";
import SuccessMessage from "@/components/success-message";


/**
 * ServicesPage Component - Main services page with authentication and user flows
 * All sections use LoginForm color scheme: Blue-to-red gradient background
 */
export default function ServicesPage() {
  // Authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<"employer" | "employee" | null>(
    null
  );


  // Registration success states
  const [employeeRegistrationSuccess, setEmployeeRegistrationSuccess] =
    useState(false);
  const [employerRegistrationSuccess, setEmployerRegistrationSuccess] =
    useState(false);


  // Screen states
  const [employeeScreen, setEmployeeScreen] = useState<
    "registration" | "assessment"
  >("registration");
  const [employerScreen, setEmployerScreen] = useState<
    "registration" | "profile" | "assessment" | "candidates"
  >("registration");


  // Handle login
  const handleLogin = (type: "employer" | "employee") => {
    setIsLoggedIn(true);
    setUserType(type);


    if (type === "employer") {
      setEmployerScreen("registration");
    } else {
      setEmployeeScreen("registration");
    }
  };


  // Handle employee registration completion
  const handleEmployeeRegistrationComplete = () => {
    setEmployeeRegistrationSuccess(true);
  };


  // Handle employer registration completion
  const handleEmployerRegistrationComplete = () => {
    setEmployerRegistrationSuccess(true);
  };


  // Continue after employee registration success
  const continueToEmployeeAssessment = () => {
    setEmployeeRegistrationSuccess(false);
    setEmployeeScreen("assessment");
  };


  // Continue after employer registration success
  const continueToEmployerProfile = () => {
    setEmployerRegistrationSuccess(false);
    setEmployerScreen("profile");
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00418d] via-[#1e40af] to-[#f73e5d] relative overflow-x-hidden">
      <div className="relative z-10 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-5xl">
          {!isLoggedIn ? (
            // Login Form
            <div className="bg-gradient-to-br from-[#00418d] via-[#2563eb] to-[#f73e5d] rounded-lg p-8 backdrop-blur-sm max-w-md mx-auto mt-8 md:mt-12 lg:mt-16">
              <LoginForm onLogin={handleLogin} />
            </div>
          ) : (
            // Logged in content
            <>
              {/* Back button - only shown on assessment screen */}
              {userType === "employee" && employeeScreen === "assessment" && (
                <button
                  onClick={() => setEmployeeScreen("registration")}
                  className="text-white mb-4 hover:text-white/80 transition-colors flex items-center gap-2 font-semibold"
                >
                  <ChevronLeft className="w-6 h-6" />
                  Back
                </button>
              )}


              {/* Content Panel */}
              {userType === "employee" ? (
                <div className="bg-gradient-to-br from-[#00418d] via-[#2563eb] to-[#f73e5d] rounded-lg p-8 backdrop-blur-sm mt-10">
                  {employeeRegistrationSuccess ? (
                    <SuccessMessage
                      title="Registration Successful!"
                      message="Your employee account has been created successfully. You can now proceed to schedule your assessment."
                      buttonText="Continue to Assessment"
                      onContinue={continueToEmployeeAssessment}
                    />
                  ) : employeeScreen === "registration" ? (
                    <EmployeeRegistration
                      onNext={handleEmployeeRegistrationComplete}
                    />
                  ) : (
                    <ScheduleAssessment />
                  )}
                </div>
              ) : (
                <>
                  {/* Employer Screens */}
                  {employerRegistrationSuccess ? (
                    <div className="bg-gradient-to-br from-[#00418d] via-[#2563eb] to-[#f73e5d] rounded-lg p-8 backdrop-blur-sm mt-10">
                      <SuccessMessage
                        title="Registration Successful!"
                        message="Your employer account has been created successfully. You can now access all employer features."
                        buttonText="Continue to Profile"
                        onContinue={continueToEmployerProfile}
                      />
                    </div>
                  ) : employerScreen === "registration" ? (
                    <div className="bg-gradient-to-br from-[#00418d] via-[#2563eb] to-[#f73e5d] rounded-lg p-8 backdrop-blur-sm">
                      <EmployerRegistration
                        onSubmit={handleEmployerRegistrationComplete}
                      />
                    </div>
                  ) : (
                    <>
                      {/* Employer Navigation Tabs */}
                      <div className="bg-white rounded-lg mb-4 shadow-lg">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 p-2">
                          <button
                            onClick={() => setEmployerScreen("profile")}
                            className={`py-3 px-4 text-center font-semibold rounded-lg transition-all duration-300 ${
                              employerScreen === "profile"
                                ? "bg-gradient-to-r from-[#00418d] to-[#2563eb] text-white shadow-lg"
                                : "text-black hover:bg-gray-100"
                            }`}
                          >
                            Profile
                          </button>
                          <button
                            onClick={() => setEmployerScreen("assessment")}
                            className={`py-3 px-4 text-center font-semibold rounded-lg transition-all duration-300 ${
                              employerScreen === "assessment"
                                ? "bg-gradient-to-r from-[#00418d] to-[#2563eb] text-white shadow-lg"
                                : "text-black hover:bg-gray-100"
                            }`}
                          >
                            Assessment Request
                          </button>
                          <button
                            onClick={() => setEmployerScreen("candidates")}
                            className={`py-3 px-4 text-center font-semibold rounded-lg transition-all duration-300 ${
                              employerScreen === "candidates"
                                ? "bg-gradient-to-r from-[#00418d] to-[#2563eb] text-white shadow-lg"
                                : "text-black hover:bg-gray-100"
                            }`}
                          >
                            Candidate List
                          </button>
                        </div>
                      </div>


                      {/* Employer Content */}
                      <div className="bg-gradient-to-br from-[#00418d] via-[#2563eb] to-[#f73e5d] rounded-lg p-8 backdrop-blur-sm">
                        {employerScreen === "profile" && <EmployerProfile />}
                        {employerScreen === "assessment" && (
                          <EmployerAssessmentRequest />
                        )}
                        {employerScreen === "candidates" && (
                          <EmployerCandidateList />
                        )}
                      </div>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
