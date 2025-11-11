"use client";

import { useState } from "react";
import { Info, Calendar, Clock, CheckCircle } from "lucide-react";

interface SuccessMessageProps {
  title: string;
  message: string;
  buttonText: string;
  onContinue: () => void;
}

function SuccessMessage({
  title,
  message,
  buttonText,
  onContinue,
}: SuccessMessageProps) {
  return (
    <div className="text-center text-white">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
          <CheckCircle className="w-12 h-12 text-green-500" />
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-300 mb-8 max-w-md mx-auto">{message}</p>

      <button
        onClick={onContinue}
        className="px-10 py-3 rounded-md bg-gradient-to-r from-[#f73e5d] to-[#e63946] text-white hover:opacity-90 font-medium"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default function ScheduleAssessment() {
  const [selectedCompany, setSelectedCompany] = useState<string>("microsoft");
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [dateMonth, setDateMonth] = useState<string>("");
  const [dateDay, setDateDay] = useState<string>("");
  const [dateYear, setDateYear] = useState<string>("");
  const [timeHour, setTimeHour] = useState<string>("");
  const [timeMinute, setTimeMinute] = useState<string>("");
  const [timeAMPM, setTimeAMPM] = useState<string>("AM");
  const [country, setCountry] = useState<string>("India");
  const [zipCode, setZipCode] = useState<string>("");
  const [testingCentre, setTestingCentre] = useState<string>("");

  const handleSubmit = () => {
    // Trim and check values
    const month = dateMonth.trim();
    const day = dateDay.trim();
    const year = dateYear.trim();
    const hour = timeHour.trim();
    const minute = timeMinute.trim();
    const zip = zipCode.trim();
    const centre = testingCentre.trim();

    if (
      !month ||
      !day ||
      !year ||
      !hour ||
      !minute ||
      !timeAMPM ||
      !country ||
      !zip ||
      !centre
    ) {
      alert("Please fill in all fields");
      return;
    }

    const monthNum = parseInt(month);
    const dayNum = parseInt(day);
    const yearNum = parseInt(year);
    const hourNum = parseInt(hour);
    const minuteNum = parseInt(minute);

    if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
      alert("Please enter a valid month (1-12)");
      return;
    }

    if (isNaN(dayNum) || dayNum < 1 || dayNum > 31) {
      alert("Please enter a valid day (1-31)");
      return;
    }

    if (isNaN(yearNum) || yearNum < 2024 || yearNum > 2100) {
      alert("Please enter a valid year");
      return;
    }

    if (isNaN(hourNum) || hourNum < 0 || hourNum > 23) {
      alert("Please enter a valid hour (0-23)");
      return;
    }

    if (isNaN(minuteNum) || minuteNum < 0 || minuteNum > 59) {
      alert("Please enter a valid minute (0-59)");
      return;
    }

    setSubmittedData({
      company: selectedCompany,
      country,
      zipCode: zip,
      testingCentre: centre,
      date: `${month.padStart(2, "0")}/${day.padStart(2, "0")}/${year}`,
      time: `${hour.padStart(2, "0")}:${minute.padStart(2, "0")} ${timeAMPM}`,
    });

    setShowSuccess(true);
  };

  const handleContinue = () => {
    setShowSuccess(false);
    setDateMonth("");
    setDateDay("");
    setDateYear("");
    setTimeHour("");
    setTimeMinute("");
    setTimeAMPM("AM");
    setZipCode("");
    setTestingCentre("");
  };

  if (showSuccess) {
    return (
      <div className="text-white">
        <div className="">
          <SuccessMessage
            title="Assessment Scheduled Successfully!"
            message={`Your assessment with ${submittedData.company.toUpperCase()} has been scheduled for ${submittedData.date} at ${submittedData.time} at ${submittedData.testingCentre}.`}
            buttonText="Continue"
            onContinue={handleContinue}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="text-white">
      <h1 className="text-3xl font-semibold text-center mb-2">
        Schedule Assessment
      </h1>
      <p className="text-center text-gray-200 mb-6">
        Register for your preferred skill assessment slot
      </p>

      <div className="space-y-8">
        {/* Message */}
        <p className="text-center text-lg">
          Great!! multiple employers have authorised you to take a skin
          assessment with SkillKwizz . Choose one. You can revisit this page to
          schedule for others
        </p>

        {/* Company Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            className={`flex items-center justify-center gap-2 bg-[#ffffff] rounded px-4 py-3 text-black hover:bg-[#e3dddd] ${
              selectedCompany === "microsoft" ? "border-2 border-green-500" : ""
            }`}
            onClick={() => setSelectedCompany("microsoft")}
          >
            <span
              className={`w-4 h-4 rounded-full ${
                selectedCompany === "microsoft" ? "bg-green-500" : "bg-gray-500"
              }`}
            ></span>
            Microsoft
          </button>
          <button
            className={`flex items-center justify-center gap-2 bg-[#ffffff] rounded px-4 py-3 text-black hover:bg-[#e2dddd] ${
              selectedCompany === "google" ? "border-2 border-green-500" : ""
            }`}
            onClick={() => setSelectedCompany("google")}
          >
            <span
              className={`w-4 h-4 rounded-full ${
                selectedCompany === "google" ? "bg-green-500" : "bg-gray-500"
              }`}
            ></span>
            Google
          </button>
          <button
            className={`flex items-center justify-center gap-2 bg-[#ffffff] rounded px-4 py-3 text-black hover:bg-[#ece8e8] ${
              selectedCompany === "amazon" ? "border-2 border-green-500" : ""
            }`}
            onClick={() => setSelectedCompany("amazon")}
          >
            <span
              className={`w-4 h-4 rounded-full ${
                selectedCompany === "amazon" ? "bg-green-500" : "bg-gray-500"
              }`}
            ></span>
            Amazon
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            className={`flex items-center justify-center gap-2 bg-[#ffffff] rounded px-4 py-3 text-black hover:bg-[#eae5e5] ${
              selectedCompany === "facebook1" ? "border-2 border-green-500" : ""
            }`}
            onClick={() => setSelectedCompany("facebook1")}
          >
            <span
              className={`w-4 h-4 rounded-full ${
                selectedCompany === "facebook1" ? "bg-green-500" : "bg-gray-500"
              }`}
            ></span>
            Facebook
          </button>
          <button
            className={`flex items-center justify-center gap-2 bg-[#ffffff] rounded px-4 py-3 text-black hover:bg-[#ebe7e7] ${
              selectedCompany === "facebook2" ? "border-2 border-green-500" : ""
            }`}
            onClick={() => setSelectedCompany("facebook2")}
          >
            <span
              className={`w-4 h-4 rounded-full ${
                selectedCompany === "facebook2" ? "bg-green-500" : "bg-gray-500"
              }`}
            ></span>
            Facebook
          </button>
        </div>

        {/* Info Box */}
        <div className="bg-[#2d5184]/80 rounded-lg p-4 flex items-start gap-3">
          <Info className="w-6 h-6 text-white mt-1" />
          <p>
            Microsoft has authorized you to take an assessment for C#, SQL
            Server, Web2.0, and React.
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Select Country</label>
            <div className="relative">
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full bg-white rounded px-4 py-3 text-black appearance-none focus:outline-none"
              >
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
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

          <div>
            <label className="block mb-2">Select Zip Code</label>
            <div className="relative">
              <input
                type="number"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Enter your area's Zip code"
                className="w-full bg-white rounded px-4 py-3 text-black placeholder-gray-600 appearance-none focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2">Select Testing Centre</label>
            <div className="relative">
              <select
                value={testingCentre}
                onChange={(e) => setTestingCentre(e.target.value)}
                className="w-full bg-white rounded px-4 py-3 text-black appearance-none focus:outline-none"
              >
                <option value="">Enter your Centre</option>
                <option value="Centre 1">Centre 1</option>
                <option value="Centre 2">Centre 2</option>
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

          <div>
            <label className="block mb-2">Select Testing Centre</label>
            <div className="relative">
              <select className="w-full bg-white rounded px-4 py-3 text-black appearance-none focus:outline-none">
                <option>Enter your Centre</option>
                <option>Centre 1</option>
                <option>Centre 2</option>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Select a Date</label>
              <div className="flex items-center bg-white rounded px-4 py-3 text-black">
                <input
                  type="number"
                  min="1"
                  max="12"
                  value={dateMonth}
                  onChange={(e) => setDateMonth(e.target.value)}
                  placeholder="MM"
                  className="w-12 bg-transparent focus:outline-none text-center text-black"
                />
                <span className="mx-1 text-black">|</span>
                <input
                  type="number"
                  min="1"
                  max="31"
                  value={dateDay}
                  onChange={(e) => setDateDay(e.target.value)}
                  placeholder="DD"
                  className="w-12 bg-transparent focus:outline-none text-center text-black"
                />
                <span className="mx-1 text-black">|</span>
                <input
                  type="number"
                  min="2024"
                  max="2100"
                  value={dateYear}
                  onChange={(e) => setDateYear(e.target.value)}
                  placeholder="YYYY"
                  className="w-16 bg-transparent focus:outline-none text-center text-black"
                />
                <Calendar className="ml-auto w-5 h-5 text-black" />
              </div>
            </div>

            <div>
              <label className="block mb-2">Select Time</label>
              <div className="flex items-center bg-white rounded px-4 py-3 text-black">
                <input
                  type="number"
                  min="0"
                  max="23"
                  value={timeHour}
                  onChange={(e) => setTimeHour(e.target.value)}
                  placeholder="HH"
                  className="w-12 bg-transparent focus:outline-none text-center text-black"
                />
                <span className="mx-1 text-black">|</span>
                <input
                  type="number"
                  min="0"
                  max="59"
                  value={timeMinute}
                  onChange={(e) => setTimeMinute(e.target.value)}
                  placeholder="MM"
                  className="w-12 bg-transparent focus:outline-none text-center text-black"
                />
                <span className="mx-1 text-black">|</span>
                <select
                  value={timeAMPM}
                  onChange={(e) => setTimeAMPM(e.target.value)}
                  className="w-12 bg-transparent focus:outline-none text-center text-black"
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
                <Clock className="ml-auto w-5 h-5 text-black" />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSubmit}
            className="px-20 py-2 rounded bg-gradient-to-r from-[#f73e5d] to-[#e63946] text-white hover:opacity-90"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
