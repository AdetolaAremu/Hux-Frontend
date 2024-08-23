import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../views/private/Home";
import { useEffect, useState } from "react";
import Contact from "../views/private/Contact";
import ContactDetails from "../views/private/ContactDetails";
import CreateContact from "../views/private/CreateContact";
import EditContact from "../views/private/EditContact";
import LogoutModal from "../components/LogoutModal";
import { useAppDispatch, useTypedSelector } from "../utils/Hook";
import {
  callLogoutUser,
  getLoggedInUser,
} from "../views/private/actions/actions";
import Sidebar from "../components/Sidebar";

const Private = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { loggedInUser } = useTypedSelector((state) => state.private);

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
    const getToken = localStorage.getItem("jwtToken"); // we need to check if user is logged in

    if (!getToken) {
      navigate("/auth/login");
      return;
    }

    dispatch(getLoggedInUser());
  }, [dispatch, navigate]);

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
            Hi, {loggedInUser?.firstName} {loggedInUser?.lastName}
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
