"use client";
import { useState } from "react";

const Aproved = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: "Ravi",
      rollNo: "21B91A1234",
      roomNo: "101",
      village: "Anantapur",
      parentPhone: "9876543210",
      date: "2025-07-23",
      reason: "Going home for family function",
      status: "pending",
    },
    {
      id: 2,
      name: "Lakshmi",
      rollNo: "21B91A4321",
      roomNo: "102",
      village: "Kadapa",
      parentPhone: "8765432109",
      date: "2025-07-23",
      reason: "Medical appointment",
      status: "approved",
    },
  ]);

  const handleApprove = (id) => {
    const updated = applications.map((app) =>
      app.id === id ? { ...app, status: "approved" } : app
    );
    setApplications(updated);
  };

  return (
    <div>
        <div className="min-h-screen bg-gradient-to-br from-[#6b1d07] via-[#9a3310] to-[#b5441a] py-12 px-4">
      <h2 className="text-3xl text-white font-bold mb-8 text-center">All Applications</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white/10 text-white rounded-lg shadow-xl">
          <thead>
            <tr className="bg-white/20 text-left text-sm uppercase tracking-wider">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Roll No</th>
              <th className="px-4 py-3">Room No</th>
              <th className="px-4 py-3">Village</th>
              <th className="px-4 py-3">Parent No</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Reason</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr
                key={app.id}
                className="border-b border-white/10 hover:bg-white/5 transition"
              >
                <td className="px-4 py-3">{app.name}</td>
                <td className="px-4 py-3">{app.rollNo}</td>
                <td className="px-4 py-3">{app.roomNo}</td>
                <td className="px-4 py-3">{app.village}</td>
                <td className="px-4 py-3">{app.parentPhone}</td>
                <td className="px-4 py-3">{app.date}</td>
                <td className="px-4 py-3">{app.reason}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      app.status === "approved"
                        ? "bg-green-600 text-white"
                        : "bg-yellow-500 text-white"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  {app.status === "pending" ? (
                    <button
                      onClick={() => handleApprove(app.id)}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm"
                    >
                      Approve
                    </button>
                  ) : (
                    <span className="text-sm text-gray-300">✔ Approved</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    
  );
};

export default Aproved;