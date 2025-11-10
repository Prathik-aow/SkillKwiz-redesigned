"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

/**
 * AboutPage Component - Fully responsive About Us page
 * Optimized for mobile, tablet, desktop, and laptop devices
 * Features: Hero with video background, Vision/Mission/Purpose cards, About section, CEO profile, Video showcase
 */
export default function AboutPage() {
  // Ref and state for controlling video playback on poster click
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePosterClick = () => {
    if (videoRef.current && !isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-[#00418d] text-white overflow-hidden pt-20 md:pt-24 lg:pt-20">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/homepage/banner_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-10 py-14 md:py-20 lg:py-16 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-center mb-6 leading-tight">
            ELEVATE YOUR BUSINESS
          </h1>
          <p className="text-center max-w-3xl mx-auto text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
            Skill Assessments Done With The Utmost Knowledge, Integrity, Trust,
            Respect And Security. Our Objective Is To Provide You With Accurate
            Insights Into The Skill Levels Of Your Current And Prospective
            Workforce.
          </p>
          <div className="flex justify-center">
            <Link
              href="/services"
              className="bg-[#f73e5d] text-white px-8 py-3 rounded-md font-medium hover:bg-red-600 transition-all shadow-lg inline-block"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Decorative Globe */}
        {/* <div className="hidden lg:block absolute right-0 top-0 h-full w-[45%] opacity-20 pointer-events-none">
          <div className="relative w-full h-full flex items-center justify-end">
            <Image
              src="/images/homepage/home_globe.gif"
              alt="SkillKwiz assessment platform"
              width={600}
              height={400}
              className="w-auto h-auto max-w-full"
            />
          </div>
        </div> */}
      </section>

      {/* Features Section */}
      <section className="w-full bg-white py-10 md:py-14 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-6">
          {[
            {
              title: "OUR VISION",
              image: "/images/aboutpage/eye.gif",
              description:
                "We envision a future where skill assessments empower companies to grow confidently by hiring and developing talent based on data, not guesswork.",
            },
            {
              title: "OUR MISSION",
              image: "/images/aboutpage/mission.gif",
              description:
                "To deliver accurate, industry-aligned skill evaluations that enable organizations to make informed hiring and development decisions with confidence.",
            },
            {
              title: "OUR PURPOSE",
              image: "/images/aboutpage/purpose.gif",
              description:
                "We exist to bridge the gap between talent and opportunity, ensuring every hire and promotion is backed by verified skill data.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-5 md:p-6 lg:p-5 rounded-lg shadow-lg flex flex-col items-center text-center min-h-[280px]"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={200}
                height={200}
                className="w-auto h-auto max-h-28 md:max-h-32 object-contain mb-4"
              />
              <h3 className="text-[#272727] font-bold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#272727] text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-white py-10 md:py-12 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-6 items-center md:items-start">
            {/* Text */}
            <div className="w-full md:w-1/2 md:pt-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-[#00418d] mb-4">
                Who We Are?
              </h2>
              <p className="text-[#272727] text-base md:text-lg mb-4 leading-relaxed">
                We are your partner in skill assessment. Our expertise lies in
                assessing skill levels in people and quantifying them with precision,
                helping you build stronger, more capable teams.
              </p>
              <p className="text-sm md:text-base text-[#272727] italic mb-3">
                "SkillKwiz has a single purpose and that is to create
                stakeholder value through accurate skill measurement and development."
              </p>
              <p className="text-sm md:text-base text-[#272727] font-semibold">
                - Venugopal B A<br />
                CEO, SkillKwiz
              </p>
            </div>

            {/* Images */}
            <div className="w-full md:w-1/2 flex justify-center items-center gap-3 md:gap-4 md:pb-0 pb-0">
              {[
                "/images/aboutpage/about_who_we_are-0.png",
                "/images/aboutpage/about_who_we_are-1.png",
                "/images/aboutpage/about_who_we_are-2.png",
              ].map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Team collaboration ${index + 1}`}
                  height={220}
                  width={120}
                  className="rounded-lg w-auto h-auto max-h-52 md:max-h-56 lg:max-h-60 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="w-full bg-gray-50 py-10 md:py-14 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-8 items-start">
            {/* CEO Image */}
            <div className="w-full md:w-1/3 mx-auto md:mx-0 bg-white rounded-md p-4 shadow-lg border border-gray-200">
              <Image
                src="/images/aboutpage/Venugopal.png"
                alt="CEO Venugopal B A"
                width={300}
                height={300}
                className="w-full h-auto rounded-md border border-gray-300 shadow-md"
              />
              <div className="bg-[#f73e5d] text-white text-center py-3 font-bold text-xl rounded-b-lg mt-3">
                CEO
              </div>
            </div>

            {/* CEO Bio */}
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-[#00418d] mb-3">
                Venugopal B A
              </h3>
              <p className="text-[#272727] text-base md:text-lg mb-4 leading-relaxed">
                Venugopal B A, a veteran leader in the IT industry with
                experience spanning 24 years in senior leadership roles, has
                chosen to take on the mantle of leading SkillKwiz. His
                understanding of one of the key challenges faced by the services
                sector gave birth to the vision that is SkillKwiz today.
              </p>
              <p className="text-[#272727] text-base md:text-lg leading-relaxed">
                With a rich background in the technology industry, he aims to establish SkillKwiz as an AI-first and foremost company. He is poised to take SkillKwiz to its next level of growth by turning it into a company that is shaped entirely by the market it serves. His vision includes leveraging cutting-edge AI technologies to create innovative solutions that empower users and drive efficiency. Committed to excellence, he fosters a culture of continuous learning and adaptation to stay ahead in the fast-paced tech landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full bg-white py-10 md:py-14 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div
            className="relative rounded-lg overflow-hidden shadow-2xl cursor-pointer"
            onClick={() => {
              if (videoRef.current && !isPlaying) {
                videoRef.current.play();
                setIsPlaying(true);
              }
            }}
          >
            <video
              ref={videoRef}
              className="w-full h-auto"
              controls
              preload="none"
              poster="/images/aboutpage/about_video.png"
            >
              <source src="/images/aboutpage/about_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </>
  );
}

const videoRef = { current: null as HTMLVideoElement | null };
const isPlaying = false;
const setIsPlaying = (val: boolean) => {
  // placeholder function for state update to satisfy usage in JSX handler
};
