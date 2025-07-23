"use client";
import { useState } from "react";

const ApplicationForm = () => {
  const [days, setDays] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6b1d07] via-[#9a3310] to-[#b5441a]
 py-12 px-4 flex items-center justify-center">
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">
          Permission Application
        </h1>

        <form className="space-y-5">
          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-white/5 px-4 py-3 rounded-md border border-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />

          {/* Roll No */}
          <input
            type="text"
            placeholder="Roll No"
            className="w-full bg-white/5 px-4 py-3 rounded-md border border-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />

          {/* Room No */}
          <input
            type="text"
            placeholder="Room No"
            className="w-full bg-white/5 px-4 py-3 rounded-md border border-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />

          {/* Village */}
          <input
            type="text"
            placeholder="Village"
            className="w-full bg-white/5 px-4 py-3 rounded-md border border-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />

          {/* Reason */}
          <textarea
            placeholder="Reason / Description"
            className="w-full bg-white/5 px-4 py-3 rounded-md border border-white/20 h-24 resize-none placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />

          {/* Parent's Number */}
          <input
            type="text"
            placeholder="Parent's Phone Number"
            className="w-full bg-white/5 px-4 py-3 rounded-md border border-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />

          {/* Days */}
          <div>
            <label className="block mb-1 text-sm text-orange-200 font-medium">
              How Many Days?
            </label>
            <select
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="w-full bg-white/5 px-4 py-3 rounded-md border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <option
                  key={day}
                  value={day}
                  className="bg-[#9a3310] text-white"
                >
                  {day} {day === 1 ? "day" : "days"}
                </option>
              ))}
            </select>
            <p className="text-sm text-orange-100 mt-1">
              Total Days Requested: {days}
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 rounded-md transition duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
