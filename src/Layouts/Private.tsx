import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../views/private/Home";
import { useEffect, useState } from "react";
import Contact from "../views/private/Contact";
import ContactDetails from "../views/private/ContactDetails";
import CreateContact from "../views/private/CreateContact";
import EditContact from "../views/private/EditContact";
import LogoutModal from "../components/LogoutModal";
import { useAppDispatch } from "../utils/Hook";
import { callLogoutUser } from "../views/private/actions/actions";
import { LoggedInUser } from "../types/PrivateType";
import Sidebar from "../components/Sidebar";

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
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        toggleModal={toggleModal}
      />

      <LogoutModal
        modal={isOpenModal}
        onClose={toggleModal}
        onDelete={logoutUser}
      />

      <div className="flex-1 flex flex-col">
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
