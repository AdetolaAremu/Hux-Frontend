import React from "react";
import { useAppDispatch, useTypedSelector } from "../../utils/Hook";
import { deleteContact, getContact } from "./actions/actions";
import { useNavigate, useParams } from "react-router-dom";
import DeleteContactModal from "../../components/DeleteContactModal";
import Modal from "../../components/Modal";
import Breadcrumb from "../../components/BreadCrumb";

const ContactDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [modal, setModal] = React.useState(false);
  const [modalDelete, setDeleteModal] = React.useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleDeleteModal = () => {
    setDeleteModal(!modalDelete);
  };

  const { getOneContact, loading } = useTypedSelector((state) => state.private);

  const handleDeleteContact = async () => {
    if (getOneContact) {
      await dispatch(deleteContact(getOneContact._id));

      toggleDeleteModal();
      toggleModal();

      setTimeout(() => {
        navigate("/user/contacts");
      }, 3000);
    }
  };

  React.useEffect(() => {
    dispatch(getContact(id ?? ""));
  }, [dispatch]);
  return (
    <>
      <div>
        <Breadcrumb routeName="View Contact" />
      </div>
      <div className="mt-6">
        <div className="bg-white h-26 w-1/3 p-5 rounded-md flex justify-between">
          <div>
            <div className="font-semibold">
              {getOneContact?.firstName} {getOneContact?.lastName}
            </div>
            <div className="text-xs mt-3">Lagos, Nigeria</div>
          </div>
          <div
            className={`text-xs uppercase ${
              getOneContact?.contactType === "gold"
                ? "text-yellow-600"
                : getOneContact?.contactType === "silver"
                ? "text-gray-600"
                : ""
            }`}
          >
            {getOneContact?.contactType}
          </div>
        </div>
      </div>

      <div className="bg-white p-5 mt-7 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="mt-3">
          <div className="text-sm">First Name</div>
          <div className="capitalize text-sm">{getOneContact?.firstName}</div>
        </div>

        <div className="mt-3">
          <div className="text-sm">Last Name</div>
          <div className="capitalize text-sm">{getOneContact?.lastName}</div>
        </div>

        <div className="mt-3">
          <div className="text-sm">Middle Name</div>
          <div className="capitalize text-sm">{getOneContact?.middleName}</div>
        </div>

        <div className="mt-3">
          <div className="text-sm">Email Address</div>
          <div className="uppercase text-sm">{getOneContact?.email}</div>
        </div>

        <div className="mt-3">
          <div className="text-sm">Phone Number</div>
          <div className="text-sm">{getOneContact?.phoneNumber}</div>
        </div>

        <div className="mt-3">
          <div className="text-sm">Country</div>
          <div className="capitalize text-sm">{getOneContact?.country}</div>
        </div>

        <div className="mt-3">
          <div className="text-sm">Location</div>
          <div className="capitalize text-sm">{getOneContact?.location}</div>
        </div>
      </div>

      <div className="mt-3 flex justify-end">
        <button
          className="bg-red-700 text-white py-2 px-6 rounded-xl"
          onClick={toggleDeleteModal}
        >
          Delete Contact
        </button>
      </div>

      <DeleteContactModal
        modal={modalDelete}
        data={getOneContact}
        onClose={toggleDeleteModal}
        loading={loading}
        onDelete={handleDeleteContact}
      />

      <Modal
        modal={modal}
        message="Contact created successfully"
        onClose={toggleModal}
      />
    </>
  );
};

export default ContactDetails;
