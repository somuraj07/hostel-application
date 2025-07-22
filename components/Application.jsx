"use client"
import { useState } from "react";

const ApplicationForm = () => {
  const [days, setDays] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-800 py-10 px-4 flex items-center justify-center">
      <div className="w-full max-w-xl bg-gray-900 shadow-xl rounded-2xl p-8 text-white">
        <h1 className="text-2xl font-semibold mb-6 text-blue-400">Permission Application</h1>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Roll No"
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Village"
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Reason / Description"
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-700 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Parent's Phone Number"
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div>
            <label className="block mb-1">How Many Days?</label>
            <select
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {[1, 2, 3, 4, 5,6,7].map((day) => (
                <option key={day} value={day}>
                  {day} {day === 1 ? "day" : "days"}
                </option>
              ))}
            </select>
            <p className="text-sm text-blue-300 mt-1">Total Days Requested: {days}</p>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;