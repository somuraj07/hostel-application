"use client";
import React, { useState } from 'react';

const initialData = [
  {
    name: 'Rajesh Kumar',
    roomNo: 'A102',
    rollNo: '21CSE105',
    parentsNumber: '9876543210',
    village: 'Anantapur',
    date: '2025-07-22',
    time: '6:30 PM',
    reason: 'Going home for function',
    status: 'Arrived',
    approvedBy: 'Lakshmi',
  },
  {
    name: 'Sita Devi',
    roomNo: 'B201',
    rollNo: '21ECE120',
    parentsNumber: '9123456789',
    village: 'Hindupur',
    date: '2025-07-22',
    time: '8:00 PM',
    reason: 'Medical emergency',
    status: 'Not Yet Arrived',
    approvedBy: 'Geeta',
  },
];

const AllDetails = () => {
  const [data, setData] = useState(initialData);

  const handleApproverChange = (index, approver) => {
    const updated = [...data];
    updated[index].approvedBy = approver;
    setData(updated);
  };

  return (
    <div className="min-h-screen bg-[#f6f6f6] py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-6 text-[#9a3310] text-center">
          All Permission Details
        </h2>

        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-[#9a3310] text-white">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Room No</th>
              <th className="px-4 py-2 text-left">Roll No</th>
              <th className="px-4 py-2 text-left">Parent's Number</th>
              <th className="px-4 py-2 text-left">Village</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Time</th>
              <th className="px-4 py-2 text-left">Reason</th>
              <th className="px-4 py-2 text-left">Approved By</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr
                key={index}
                className="border-b hover:bg-orange-50 transition duration-200"
              >
                <td className="px-4 py-2">{entry.name}</td>
                <td className="px-4 py-2">{entry.roomNo}</td>
                <td className="px-4 py-2">{entry.rollNo}</td>
                <td className="px-4 py-2">{entry.parentsNumber}</td>
                <td className="px-4 py-2">{entry.village}</td>
                <td className="px-4 py-2">{entry.date}</td>
                <td className="px-4 py-2">{entry.time}</td>
                <td className="px-4 py-2">{entry.reason}</td>
                <td className="px-4 py-2">
                  <select
                    value={entry.approvedBy}
                    onChange={(e) =>
                      handleApproverChange(index, e.target.value)
                    }
                    className="px-3 py-1 rounded-md bg-gray-100 text-gray-800 text-sm font-medium border border-gray-300"
                  >
                    <option value="Lakshmi">Lakshmi</option>
                    <option value="Geeta">Geeta</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDetails;
