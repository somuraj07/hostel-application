"use client";
import { useState } from "react";

const ApplicationForm = () => {
  const [days, setDays] = useState("1");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5e1604] via-[#9a3310] to-[#e25b1e] py-12 px-4 flex items-center justify-center">
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

          {/* Days or Type */}
          <div>
            <label className="block mb-1 text-sm text-orange-200 font-medium">
              Leave Duration / Type
            </label>
            <select
              value={days}
              onChange={(e) => setDays(e.target.value)}
              className="w-full bg-white/5 px-4 py-3 rounded-md border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              {/* 1 to 7 Days */}
              {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                <option
                  key={d}
                  value={d}
                  className="bg-[#9a3310] text-white"
                >
                  {d} {d === 1 ? "day" : "days"}
                </option>
              ))}

              {/* Special Types */}
              <option value="festival" className="bg-[#9a3310] text-white">
                Festival Leave
              </option>
              <option value="academic" className="bg-[#9a3310] text-white">
                Academic Leave
              </option>
            </select>
          </div>

          {/* Summary */}
          <p className="text-sm text-orange-100 mt-2">
            Selected:{" "}
            {["festival", "academic"].includes(days)
              ? days === "festival"
                ? "Festival Leave"
                : "Academic Leave"
              : `${days} ${days === "1" ? "day" : "days"}`}
          </p>

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
