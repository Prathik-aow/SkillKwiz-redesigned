export default function AuthenticateSkillsSection() {
  return (
    <section className="py-20 bg-white w-full">
      <div className="px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-[#00418d] mb-10 leading-tight whitespace-pre-line">
            {"Verified Skill Assessments,\nSimplifying Recruitment"}
          </h2>

          <p className="text-gray-700 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed whitespace-normal">
            SkillKwiz delivers rigorous, industry-aligned skill evaluations that empower organizations to make informed hiring decisions swiftly and confidently. Our authenticated testing frameworks minimize recruitment risk, reduce time-to-hire, and streamline onboarding of qualified professionals.
          </p>

          <ul className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10 text-gray-700 text-lg font-medium leading-relaxed lg:justify-items-center">
            {[
              "Trusted assessments",
              "Instant verification",
              "Secure and tamper-proof",
              "Data-driven hiring",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start md:items-center justify-start md:justify-center gap-3"
              >
                <span className="flex items-center justify-center w-7 h-7 bg-[#f73e5d] rounded-full flex-shrink-0 mt-1 md:mt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-left">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
