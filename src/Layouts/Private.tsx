import { Link, Route, Routes } from "react-router-dom";
import Home from "../views/private/Home";
import Logo from "../assets/Logo.png";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import Contact from "../views/private/Contact";
import ContactDetails from "../views/private/ContactDetails";
import CreateContact from "../views/private/CreateContact";
import EditContact from "../views/private/EditContact";

const Private = () => {
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
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out bg-[#7717D7] w-64 p-4`}
      >
        <h2 className="text-white text-2xl font-semibold my-6">Sidebar</h2>
        <ul>
          <li className="text-gray-300 hover:bg-gray-700 p-2 rounded-md">
            <a href="/user/home">Dashboard</a>
          </li>
          <li className="text-gray-300 hover:bg-gray-700 p-2 rounded-md">
            <Link to="/user/contacts">Contacts</Link>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-end pt-3 px-10 bg-gray-100">
          <div className="pt-4">Hi, James Olopade</div>
        </div>
        <div className="flex-1 p-6 bg-gray-100">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/create-contact" element={<CreateContact />} />
            <Route path="/contacts/:id" element={<ContactDetails />} />
            <Route path="/contacts/edit/:id" element={<EditContact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Private;
