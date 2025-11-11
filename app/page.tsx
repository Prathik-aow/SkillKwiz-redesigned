"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AuthenticateSkillsSection from "@/components/authenticate-skills-section";
import WhyChooseSection from "@/components/why-choose-section";
import LoginSection from "@/components/login-section";
import TestimonialsSection from "@/components/testimonials-section";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HomePage() {
  const [stats, setStats] = useState([
    { value: 0, label: "Expert Quizzes", target: 500 },
    { value: 0, label: "Active Users", target: 50000 },
    { value: 0, label: "Success Rate", target: 95 },
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);

  const globeRef = useRef<HTMLDivElement>(null);
  const callCenterRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  const carouselSlides = [
    {
      id: 1,
      title: "Master Your Skills with Expert Quizzes",
      description:
        "Take interactive quizzes designed by industry experts.",
      buttonText: "Get Started",
      buttonLink: "/services",
      image: "/images/homepage/hero.png",
    },
    {
      id: 2,
      title: "Learn from Industry Experts",
      description:
        "Access curated content from professionals with years of experience in their fields.",
      buttonText: "Explore Courses",
      buttonLink: "/services",
      image: "/images/homepage/hero2.png",
    },
    {
      id: 3,
      title: "Track Your Progress",
      description:
        "Get detailed analytics and personalized insights to improve your learning outcomes.",
      buttonText: "View Dashboard",
      buttonLink: "/services",
      image: "/images/homepage/hero3.png",
    },
    {
      id: 4,
      title: "Get Certified Today",
      description:
        "Earn recognized credentials that showcase your skills to employers worldwide.",
      buttonText: "Start Certification",
      buttonLink: "/services",
      image: "/images/homepage/hero4.png",
    },
  ];

  // Stats animation with slower increment for smooth counting
  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setStats((prevStats) => {
          const newStats = [...prevStats];
          if (newStats[index].value < newStats[index].target) {
            const increment = Math.max(1, Math.floor(newStats[index].target / 150));
            newStats[index].value = Math.min(
              newStats[index].value + increment,
              newStats[index].target
            );
          }
          return newStats;
        });
      }, 15);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  // Carousel auto-scroll
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [carouselSlides.length]);

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K+";
    }
    return num + "+";
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
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
          className="relative w-full text-white overflow-hidden pt-20 md:pt-24"
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

          <div className="max-w-6xl mx-auto px-3 sm:px-5 md:px-7 py-16 sm:py-20 md:py-24 lg:py-32 relative z-10">
            {/* Carousel Section */}
            <div className="w-full relative mb-12 sm:mb-16 md:mb-20 mt-[-20px] sm:mt-[-30px] md:mt-[-40px]">
              {carouselSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0 absolute inset-0"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-center lg:text-left animate-slide-in-up">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 leading-relaxed">
                        {slide.description}
                      </p>
                      <Link
                        href={slide.buttonLink}
                        className="inline-flex items-center justify-center bg-[#f73e5d] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl active:scale-95"
                      >
                        {slide.buttonText}
                      </Link>
                    </div>

                    {/* Right Side Image */}
                    <div className="flex justify-center items-center">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        width={1400}
                        height={1400}
                        className="w-full max-w-lg sm:max-w-xl md:max-w-2xl h-auto rounded-lg"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>
              ))}

{/* left Arrow */}
{/* <button
  onClick={prevSlide}
  aria-label="Previous Slide"
  className="absolute -left-16 sm:-left-20 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md hover:bg-white/50 text-white hover:text-yellow-300 p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20 border border-white/30"
>
  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
</button> */}

{/* Right Arrow */}
{/* <button
  onClick={nextSlide}
  aria-label="Next Slide"
  className="absolute -right-16 sm:-right-20 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md hover:bg-white/50 text-white hover:text-yellow-300 p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20 border border-white/30"
>
  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
</button> */}

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-8 sm:mt-10">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-yellow-300 w-6 sm:w-8"
                        : "bg-white/50 hover:bg-white/70"
                    }`}
                  ></button>
                ))}
              </div>
            </div>

            {/* Stats Section - Below Carousel */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 pt-8 sm:pt-12 border-t border-white/20">
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
