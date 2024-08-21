import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out bg-gray-800 w-64 p-4`}
      >
        <h2 className="text-white text-2xl font-semibold mb-6">Sidebar</h2>
        <ul>
          <li className="text-gray-300 hover:bg-gray-700 p-2 rounded-md">
            <a href="#">Dashboard</a>
          </li>
          <li className="text-gray-300 hover:bg-gray-700 p-2 rounded-md">
            <a href="#">Profile</a>
          </li>
          <li className="text-gray-300 hover:bg-gray-700 p-2 rounded-md">
            <a href="#">Settings</a>
          </li>
          <li className="text-gray-300 hover:bg-gray-700 p-2 rounded-md">
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between bg-gray-100 p-4 md:hidden">
          <button onClick={toggleSidebar} className="text-gray-800">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-gray-800">Page Title</h1>
        </div>

        {/* Content */}
        <div className="p-6 bg-gray-100 flex-1">
          <h2 className="text-2xl font-bold">Main Content</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            doloremque ipsam itaque non provident perferendis fugiat! Quisquam
            ullam, repudiandae consequuntur obcaecati rerum officiis quo id
            optio blanditiis deleniti fuga, autem vitae perspiciatis architecto!
            Repellendus?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
