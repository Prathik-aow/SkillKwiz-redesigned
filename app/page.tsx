"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AuthenticateSkillsSection from "@/components/authenticate-skills-section";
import WhyChooseSection from "@/components/why-choose-section";
import LoginSection from "@/components/login-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function HomePage() {
  const [stats, setStats] = useState([
    { value: 0, label: "Expert Quizzes", target: 500 },
    { value: 0, label: "Active Users", target: 50000 },
    { value: 0, label: "Success Rate", target: 95 },
  ]);

  const globeRef = useRef<HTMLDivElement>(null);
  const callCenterRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  // Stats animation with slower increment for smooth counting
  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setStats((prevStats) => {
          const newStats = [...prevStats];
          if (newStats[index].value < newStats[index].target) {
            // Slower increment based on target value for smooth effect
            const increment = Math.max(1, Math.floor(newStats[index].target / 150));
            newStats[index].value = Math.min(
              newStats[index].value + increment,
              newStats[index].target
            );
          }
          return newStats;
        });
      }, 50); // increased interval delay for slower animation
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K+";
    }
    return num + "+";
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out forwards;
        }
      `}</style>

      {/* Main container with relative positioning */}
      <div className="relative">
        {/* Hero Section with Video Background */}
        <section
          ref={heroRef}
          className="relative w-full min-h-[100vh] text-white overflow-hidden pt-20 md:pt-24"
          style={{ zIndex: 1 }}
        >
          {/* Background Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/images/homepage/banner_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="max-w-6xl mx-auto px-3 sm:px-5 md:px-7 py-16 sm:py-20 md:py-24 lg:py-32 relative z-10 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center h-full">
              {/* Text Content */}
              <div className="text-center lg:text-left animate-slide-in-up">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  Master Your{" "}
                  <span className="text-[#f73e5d]">
                    Skills
                  </span>{" "}
                  with Expert{" "}
                  <span className="text-[#f73e5d]">
                    Quizzes
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 leading-relaxed">
                  Take interactive quizzes designed by industry experts. Track your progress, get personalized feedback and build verified skills.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center bg-[#f73e5d] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl active:scale-95"
                >
                  Get Started
                </Link>
              </div>

              {/* Globe Image */}
              <div
                ref={globeRef}
                className="flex justify-center items-center"
              >
                <Image
                  src="/images/homepage/hero.png"
                  alt="SkillKwiz assessment platform"
                  width={1400}
                  height={1400}
                  className="w-full max-w-lg sm:max-w-xl md:max-w-2xl h-auto"
                  priority
                />
              </div>
            </div>

            {/* Stats Section - Inside Hero */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-12 border-t border-white/20">
              {/* Stat 1 - Expert Quizzes */}
              <div className="text-center animate-slide-in-up" style={{ animationDelay: "0.4s" }}>
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-300 font-mono">
                  {formatNumber(stats[0].value)}
                </p>
                <p className="text-white/80 mt-2 sm:mt-3 text-sm sm:text-base md:text-lg font-semibold">
                  Expert Quizzes
                </p>
              </div>

              {/* Stat 2 - Active Users */}
              <div className="text-center animate-slide-in-up" style={{ animationDelay: "0.5s" }}>
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-300 font-mono">
                  {formatNumber(stats[1].value)}
                </p>
                <p className="text-white/80 mt-2 sm:mt-3 text-sm sm:text-base md:text-lg font-semibold">
                  Active Users
                </p>
              </div>

              {/* Stat 3 - Success Rate */}
              <div className="text-center animate-slide-in-up" style={{ animationDelay: "0.6s" }}>
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-300 font-mono">
                  {stats[2].value}%
                </p>
                <p className="text-white/80 mt-2 sm:mt-3 text-sm sm:text-base md:text-lg font-semibold">
                  Success Rate
                </p>
              </div>
            </div>
          </div>
        </section>  
      </div>

      {/* Rest of the content */}
      <div className="bg-white relative mt-8 sm:mt-12" style={{ zIndex: 3 }}>
        <AuthenticateSkillsSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <LoginSection />
      </div>
    </div>
  );
}
