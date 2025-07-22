import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md py-4 px-6 flex items-center justify-between">
   
      <div className="flex items-center gap-3">
       
        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          SSE-Hostels
        </span>
      </div>

      <div className="flex gap-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md transition">
          All Details
        </button>
        <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold px-4 py-2 rounded-md transition">
          Approval
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
