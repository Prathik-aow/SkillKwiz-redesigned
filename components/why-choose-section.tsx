import Image from "next/image";
import Link from "next/link";

export default function WhyChooseSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#00418d] via-[#2563eb] to-[#f73e5d] overflow-hidden">
      {/* Background accent shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-150px] left-[-100px] w-[300px] h-[300px] bg-[#f73e5d] rounded-full opacity-20 filter blur-3xl"></div>
        <div className="absolute bottom-[-100px] right-[-150px] w-[400px] h-[400px] bg-[#2563eb] rounded-full opacity-30 filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 z-10">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
  Why Choose{" "}
  <span className="text-white font-black">
     <span className="text-[#f73e5d]">SkillKwiz ? </span>
  </span>
  
</h2>
          <p className="text-white/90 text-lg md:text-xl mt-4">
            Empower your recruitment with verified skill assessments,
            seamless integrations, and trusted insights used by leading organizations.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Skill Library Card */}
          <article className="bg-white bg-opacity-90 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#ffffff] flex items-center justify-center mb-6">
              <Image
                src="/images/homepage/books.gif"
                alt="Skill library icon"
                width={80}
                height={80}
                className="object-contain"
                aria-hidden="true"
                priority
              />
            </div>
            <h3 className="text-xl font-semibold text-[#00418d] mb-3">
              Extensive Skill Library
            </h3>
            <p className="text-gray-800 leading-relaxed">
              Access a wide range of skill assessments covering technical,
              professional, and soft skills designed by industry leaders.
            </p>
          </article>

          {/* Secure Testing Card */}
          <article className="bg-white bg-opacity-90 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#ffffff] flex items-center justify-center mb-6">
              <Image
                src="/images/homepage/guard.gif"
                alt="Secure testing icon"
                width={80}
                height={80}
                className="object-contain"
                aria-hidden="true"
                priority
              />
            </div>
            <h3 className="text-xl font-semibold text-[#00418d] mb-3">
              Secure & Verified Testing
            </h3>
            <p className="text-gray-800 leading-relaxed">
              Biometric and multi-layer authentication guarantee test integrity
              and trusted certifications.
            </p>
          </article>

          {/* Flexible Pricing Card */}
          <article className="bg-white bg-opacity-90 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#ffffff] flex items-center justify-center mb-6">
              <Image
                src="/images/homepage/dollar.gif"
                alt="Flexible pricing icon"
                width={80}
                height={80}
                className="object-contain"
                aria-hidden="true"
                priority
              />
            </div>
            <h3 className="text-xl font-semibold text-[#00418d] mb-3">
              Scalable Pricing Plans
            </h3>
            <p className="text-gray-800 leading-relaxed">
              Choose credit-based or enterprise solutions tailored to your scale
              and hiring needs.
            </p>
          </article>
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <h3 className="text-3xl text-white font-extrabold mb-5 drop-shadow-lg">
            Ready to revolutionize hiring?
          </h3>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Join leading companies optimizing recruitment through trusted skill
            assessments. Start your journey with SkillKwiz today.
          </p>
          <Link
  href="/services"
  className="inline-block px-12 py-4 bg-[#f73e5d] text-white font-bold rounded-full border border-white hover:bg-red-600 transition-colors shadow-lg"
>
  Get Started
</Link>

        </div>
      </div>
    </section>
  );
}
