"use client";

import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Jennifer Cooper",
    title: "Startup Founder, TechFlow",
    rating: 5,
    quote:
      "SkillKwiz has transformed our hiring process. We've reduced our time-to-hire by 40% and improved candidate quality significantly. The detailed skill reports give us confidence in every hiring decision.",
    image: "/images/homepage/5.png",
  },
  {
    id: 2,
    name: "Michael Donovan",
    title: "HR Director, Global Systems",
    rating: 4,
    quote:
      "As an enterprise with hundreds of technical hires annually, SkillKwiz has been invaluable. Their comprehensive skill assessments and secure testing environment ensure we get accurate insights into candidate capabilities.",
    image: "/images/homepage/6.png",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    title: "Talent Acquisition, InnovateTech",
    rating: 4,
    quote:
      "The flexibility of SkillKwiz's platform is what sets it apart. We can customize assessments to our specific needs, and the detailed reports help us make data-driven hiring decisions every time.",
    image: "/images/homepage/6.png",
  },
  {
    id: 4,
    name: "David Chen",
    title: "CTO, FutureTech Solutions",
    rating: 5,
    quote:
      "The technical assessments from SkillKwiz have been spot-on. We're able to quickly identify candidates with the right skills, saving our engineering team countless hours of interview time.",
    image: "/images/homepage/5.png",
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    title: "Recruiting Manager, Innovate Inc",
    rating: 5,
    quote:
      "SkillKwiz has become an essential part of our hiring toolkit. The platform is intuitive, the assessments are comprehensive, and the customer support is exceptional.",
    image: "/images/homepage/7.png",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const total = testimonials.length;

  const prevIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 6000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [total]);

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % total);
      }, 6000);
    }
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
    resetInterval();
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
    resetInterval();
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    resetInterval();
  };

  const renderStars = (rating: number, size: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-${size} h-${size} ${
            i <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill={i <= rating ? "currentColor" : "none"}
          stroke="currentColor"
        />
      );
    }
    return stars;
  };

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[rgb(0,65,141)]">
          What Our Clients Say
        </h2>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none hidden md:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-[rgb(0,65,141)]" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none hidden md:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-[rgb(0,65,141)]" />
          </button>

          {/* Testimonial carousel */}

          <div className="flex justify-center items-center gap-4 mb-8 overflow-hidden px-4 h-[400px] md:h-[450px]">
            {/* Desktop: show 3 cards */}
            <div className="hidden md:flex justify-center gap-6 w-full max-w-7xl">
              {[prevIndex, activeIndex, nextIndex].map((idx, i) => {
                const testimonial = testimonials[idx];
                const isCenter = i === 1;
                return (
                  <article
                    key={testimonial.id}
                    className={`flex flex-col bg-white rounded-lg shadow-lg p-6 transition-transform duration-500 ease-in-out ${
                      isCenter
                        ? "w-1/3 scale-100 opacity-100 z-20"
                        : "w-1/4 scale-90 opacity-60 z-10"
                    }`}
                  >
                    <div
                      className="flex flex-col items-center mb-4 rounded-lg p-4 w-full"
                      style={{ backgroundColor: "rgb(0,65,141)" }}
                    >
                      <div
                        className={`rounded-full overflow-hidden mb-3 border-2 border-white ${
                          isCenter ? "w-20 h-20" : "w-14 h-14"
                        }`}
                      >
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={isCenter ? 80 : 56}
                          height={isCenter ? 80 : 56}
                          className="w-full h-full object-cover"
                          priority
                        />
                      </div>
                      <h3
                        className={`text-white font-bold ${
                          isCenter ? "text-lg" : "text-sm"
                        }`}
                      >
                        {testimonial.name}
                      </h3>
                      <p
                        className={`text-blue-300 ${
                          isCenter ? "text-sm" : "text-xs"
                        }`}
                      >
                        {testimonial.title}
                      </p>
                      <div className="flex mt-2 space-x-1">
                        {renderStars(
                          testimonial.rating || 5,
                          isCenter ? 5 : 4
                        )}
                      </div>
                    </div>
                    <p
                      className={`text-center text-gray-700 font-medium ${
                        isCenter ? "text-sm" : "text-xs line-clamp-4"
                      } leading-relaxed mt-4`}
                    >
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </article>
                );
              })}
            </div>

            {/* Mobile: show single card */}
            <div className="block md:hidden w-full max-w-md">
              <article className="bg-white rounded-lg shadow-lg p-6">
                <div
                  className="flex flex-col items-center mb-4 rounded-lg p-4 w-full bg-[rgb(0,65,141)]"
                >
                  <div className="rounded-full overflow-hidden mb-3 border-2 border-white w-20 h-20">
                    <Image
                      src={testimonials[activeIndex].image || "/placeholder.svg"}
                      alt={testimonials[activeIndex].name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <h3 className="text-white font-bold text-lg">
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="text-blue-300 text-sm">
                    {testimonials[activeIndex].title}
                  </p>
                  <div className="flex mt-2 space-x-1">
                    {renderStars(testimonials[activeIndex].rating || 5, 5)}
                  </div>
                </div>
                <p className="text-center text-gray-700 font-medium text-sm leading-relaxed mt-4">
                  &quot;{testimonials[activeIndex].quote}&quot;
                </p>
              </article>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center space-x-4 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`w-4 h-4 rounded-full border-2 border-[rgb(0,65,141)] transition-colors ${
                  idx === activeIndex
                    ? "bg-[rgb(0,65,141)]"
                    : "bg-transparent hover:bg-[rgba(0,65,141,0.5)]"
                }`}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
