import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Home from "../views/private/Home";
import { useEffect, useState } from "react";
import Contact from "../views/private/Contact";
import ContactDetails from "../views/private/ContactDetails";
import CreateContact from "../views/private/CreateContact";
import EditContact from "../views/private/EditContact";
import LogoutModal from "../components/LogoutModal";
import { useAppDispatch } from "../utils/Hook";
import { callLogoutUser } from "../views/private/actions/actions";
import Logo from "../assets/Logo.png";
import { LoggedInUser } from "../types/PrivateType";

const Private = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUser, setIsUser] = useState<LoggedInUser | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const logoutUser = () => {
    dispatch(callLogoutUser());
    navigate("/auth/login");
  };

  const getUser = localStorage.getItem("user");

  useEffect(() => {
    const getToken = localStorage.getItem("jwtToken");
    if (!getToken) return navigate("/auth/login");

    const user = localStorage.getItem("user");
    if (user) {
      setIsUser(JSON.parse(user) as LoggedInUser);
    }
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out bg-[#7717D7] w-64 p-4`}
      >
        <h2 className="text-white text-2xl font-semibold my-6">
          <img src={Logo} alt="" />
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

      <LogoutModal
        modal={isOpenModal}
        onClose={toggleModal}
        onDelete={logoutUser}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-end pt-3 px-10 bg-gray-100">
          <div className="pt-4">
            Hi, {isUser?.firstName} {isUser?.lastName}
          </div>
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
