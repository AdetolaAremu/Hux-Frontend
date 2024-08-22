import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { Hamburger } from "./IconUtility";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  toggleModal: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  toggleSidebar,
  toggleModal,
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        toggleSidebar(); // Close the sidebar when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleSidebar]);

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 p-4 z-50">
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none"
        >
          {!isOpen && <Hamburger />}
        </button>
      </div>

      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out bg-[#7717D7] w-64 p-4 z-40`}
      >
        <h2 className="text-white text-2xl font-semibold my-6">
          <img src={Logo} alt="Logo" />
        </h2>
        <ul>
          <li className="text-gray-300 rounded-md">
            <NavLink
              to="/user/home"
              className={({ isActive }) =>
                `block p-2 rounded-md ${
                  isActive
                    ? "bg-[#ba81f2] text-white"
                    : "hover:bg-[#ba81f2] hover:text-white"
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li className="text-gray-300 rounded-md pt-2">
            <NavLink
              to="/user/contacts"
              className={({ isActive }) =>
                `block p-2 rounded-md ${
                  isActive
                    ? "bg-[#ba81f2] text-white"
                    : "hover:bg-[#ba81f2] hover:text-white"
                }`
              }
            >
              Contacts
            </NavLink>
          </li>
          <li
            className="text-gray-300 rounded-md pt-2 cursor-pointer"
            onClick={toggleModal}
          >
            <div className="hover:bg-[#ba81f2] hover:text-white p-2">
              Logout
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
