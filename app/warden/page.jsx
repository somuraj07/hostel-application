"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const warden = () => {
  const router = useRouter();

  const approvelButton = () => {
    router.push('/approvel');
  };

  const allButton = () => {
    router.push('/allPermission');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#872e0e] to-[#9a3310] px-4">
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-bold text-[#9a3310]">Warden Dashboard</h1>
        <p className="text-gray-600 text-sm">Manage and monitor student permissions easily.</p>

        <div className="space-y-4">
          <button
            onClick={approvelButton}
            className="w-full bg-[#9a3310] hover:bg-[#7c2a0e] text-white py-2 px-6 rounded-lg text-lg font-semibold transition"
          >
            Approval
          </button>

          <button
            onClick={allButton}
            className="w-full bg-[#872e0e] hover:bg-[#6e240c] text-white py-2 px-6 rounded-lg text-lg font-semibold transition"
          >
            All Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default warden;
