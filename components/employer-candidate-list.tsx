"use client";

import { useState } from "react";
import { Search, MapPin } from "lucide-react";

export default function EmployerCandidateList() {
  const [selectedGender, setSelectedGender] = useState<
    "male" | "female" | "both"
  >("male");
  const [selectedSkills, setSelectedSkills] = useState<string[]>(["C#"]);

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const candidates = [
    {
      id: 1,
      name: "K. Pradeep Kishor",
      initial: "P",
      company: "SkillKwizz",
      skills: ["C#", "Java", "SQL"],
      percentile: 85,
      location: "Bangalore",
      color: "bg-green-600",
    },
    {
      id: 2,
      name: "Manoj",
      initial: "M",
      company: "SkillKwizz",
      skills: ["C#", "Java", "SQL"],
      percentile: 85,
      location: "Bangalore",
      color: "bg-yellow-600",
    },
    {
      id: 3,
      name: "Kasiro",
      initial: "M",
      company: "SkillKwizz",
      skills: ["C#", "Java", "SQL"],
      percentile: 85,
      location: "Bangalore",
      color: "bg-teal-600",
    },
    {
      id: 4,
      name: "Ravi",
      initial: "R",
      company: "SkillKwizz",
      skills: ["C#", "Java", "SQL"],
      percentile: 85,
      location: "Bangalore",
      color: "bg-blue-800",
    },
  ];

  return (
    <div className="text-black">
      {/* Search Bar */}
      <div className="bg-white rounded-full overflow-hidden mb-6 border border-gray-300">
        <div className="grid grid-cols-4">
          <div className="col-span-1 flex items-center px-4 py-3 border-r border-gray-300">
            <Search className="w-5 h-5 mr-2 text-gray-600" />
            <input
              type="text"
              placeholder="Candidate Email ID/Phone/Skill"
              className="bg-transparent w-full focus:outline-none text-black placeholder-gray-400"
            />
          </div>
          <div className="flex items-center px-4 py-3 border-r border-gray-300">
            <MapPin className="w-5 h-5 mr-2 text-gray-600" />
            <input
              type="text"
              placeholder="Location"
              className="bg-transparent w-full focus:outline-none text-black placeholder-gray-400"
            />
          </div>
          <div className="flex items-center px-4 py-3 border-r border-gray-300">
            <div className="relative w-full">
              <select className="w-full bg-transparent appearance-none focus:outline-none text-black">
                <option value="">Job Family</option>
                <option value="software">Software Development</option>
                <option value="data">Data Science</option>
                <option value="design">Design</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between px-4 py-3">
            <button className="text-red-600 hover:text-red-800 font-semibold">
              Clear
            </button>
            <button className="bg-gradient-to-r from-[#f73e5d] to-[#e63946] text-white px-6 py-1 rounded-full hover:from-red-600 hover:to-red-700 font-semibold">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {/* Filter Section */}
        <div className="col-span-1">
          <div className="bg-[#4a63b3] rounded-lg overflow-hidden">
            <div className="bg-[#4a63b3] p-4 text-xl font-medium text-white">
              Filter
            </div>

            <div className="border-t border-blue-400 p-4 text-white">
              <h3 className="text-lg mb-3">Gender</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="male"
                    checked={
                      selectedGender === "male" || selectedGender === "both"
                    }
                    onChange={() =>
                      setSelectedGender(
                        selectedGender === "female" ? "both" : "male"
                      )
                    }
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="female"
                    checked={
                      selectedGender === "female" || selectedGender === "both"
                    }
                    onChange={() =>
                      setSelectedGender(
                        selectedGender === "male" ? "both" : "female"
                      )
                    }
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>

            <div className="border-t border-blue-400 p-4 text-white">
              <h3 className="text-lg mb-3">Skills</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="csharp"
                    checked={selectedSkills.includes("C#")}
                    onChange={() => toggleSkill("C#")}
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="csharp">C#</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="java"
                    checked={selectedSkills.includes("Java")}
                    onChange={() => toggleSkill("Java")}
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="java">Java</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="sql"
                    checked={selectedSkills.includes("SQL")}
                    onChange={() => toggleSkill("SQL")}
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="sql">SQL</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="python"
                    checked={selectedSkills.includes("Python")}
                    onChange={() => toggleSkill("Python")}
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="python">Python</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Candidate List */}
        <div className="col-span-3 space-y-4">
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className="bg-[#4a63b3]/80 rounded-lg p-4 text-white"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full ${candidate.color} flex items-center justify-center text-white text-2xl font-bold mr-4`}
                  >
                    {candidate.initial}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">{candidate.name}</h3>
                    <p className="text-gray-300">{candidate.company}</p>
                    <div className="flex items-center mt-1">
                      <p className="text-sm">
                        Skills: {candidate.skills.join(", ")}
                      </p>
                      <div className="mx-4 h-4 border-l border-gray-400"></div>
                      <p className="text-sm">
                        Percentile Score: {candidate.percentile}
                      </p>
                      <div className="mx-4 h-4 border-l border-gray-400"></div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <p className="text-sm">{candidate.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-[#f73e5d] to-[#e63946] text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-700 font-semibold">
                  View Report
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
