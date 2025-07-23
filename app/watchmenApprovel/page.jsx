'use client';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';

const initialApplications = [
  { name: 'Rajesh Kumar', rollNo: '21CSE105', submitted: false, returned: false },
  { name: 'Sita Devi', rollNo: '21ECE120', submitted: false, returned: false },
  { name: 'Arjun Rao', rollNo: '21EEE101', submitted: true, returned: false },
];

const WatchmanDetails = () => {
  const [applications, setApplications] = useState(initialApplications);

  const handleSubmit = (index) => {
    const updated = [...applications];
    updated[index].submitted = true;
    setApplications(updated);
  };

  const handleReturn = (index) => {
    const updated = [...applications];
    updated[index].returned = true;
    setApplications(updated);
  };

  const notReturned = applications.filter(app => app.submitted && !app.returned);

  return (
  
    
    <div className="min-h-screen bg-gradient-to-br from-[#872e0e] to-[#9a3310] p-6 text-white">
      <div className="max-w-4xl mx-auto bg-white text-black rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-[#9a3310] text-center">Watchman Panel - Application Status</h2>

        {/* Status Table */}
        <table className="w-full table-auto border-collapse mb-6">
          <thead>
            <tr className="bg-[#9a3310] text-white">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Roll No</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">{app.name}</td>
                <td className="px-4 py-2">{app.rollNo}</td>
                <td className="px-4 py-2 flex gap-2">
                  {!app.submitted && (
                    <button
                      onClick={() => handleSubmit(index)}
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                    >
                      Submit
                    </button>
                  )}

                  {app.submitted && !app.returned && (
                    <button
                      onClick={() => handleReturn(index)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Return
                    </button>
                  )}

                  {app.returned && (
                    <span className="text-sm text-red-600 font-semibold">Returned</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* 🔴 Not Yet Returned Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-[#9a3310] mb-2">
            {notReturned.length} Person{notReturned.length !== 1 && 's'} Not Yet Returned
          </h3>

          {notReturned.length > 0 ? (
            <ul className="list-disc list-inside text-gray-800">
              {notReturned.map((person, i) => (
                <li key={i}>
                  <span className="font-medium">{person.name}</span> (Roll No: {person.rollNo}) — Still Out
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-green-600 font-semibold">All submitted persons have returned.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchmanDetails;
