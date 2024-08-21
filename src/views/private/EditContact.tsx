import React, { ChangeEvent } from "react";
import contactValidator from "../auth/validators/PrivateValidator";
import { useAppDispatch, useTypedSelector } from "../../utils/Hook";
import { handleValidationErrors } from "../../utils/ValidationHelper";
import TextInput from "../../components/TextInput";
import { IContactCreate } from "../../types/PrivateType";
import Modal from "../../components/Modal";
import { editContact, getContact } from "./actions/actions";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/BreadCrumb";

const initialState: IContactCreate = {
  email: "",
  firstName: "",
  lastName: "",
  middleName: "",
  phoneNumber: "",
  country: "",
  location: "",
  contactType: "",
};

const EditContact = () => {
  const [Inputs, setInputs] = React.useState(initialState);
  const [InputErrors, setInputErrors] = React.useState<IContactCreate>(
    {} as IContactCreate
  );
  const [modal, setModal] = React.useState(false);
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { loading, getOneContact } = useTypedSelector((state) => state.private);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...Inputs, [e.target.name]: e.target.value });
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await contactValidator.validate(Inputs, { abortEarly: false });

      const { __v, _id, createdAt, updatedAt, ...filteredInputs } =
        Inputs as any;
      dispatch(editContact(filteredInputs, id ?? ""));

      toggleModal();

      setInputErrors({} as IContactCreate);
    } catch (error) {
      const validationErrors = handleValidationErrors<IContactCreate>(error);

      setInputErrors(validationErrors as IContactCreate);
    }
  };

  React.useEffect(() => {
    dispatch(getContact(id ?? ""));
  }, [dispatch, id]);

  React.useEffect(() => {
    if (getOneContact) {
      setInputs({
        ...initialState,
        ...getOneContact,
      });
    }
  }, [getOneContact]);

  return (
    <>
      <div>
        <Breadcrumb routeName="Edit Contact" />
      </div>
      <form onSubmit={handleSubmit} className="">
        <div className="grid grid-cols-2">
          <div className="mr-2">
            <TextInput
              value={Inputs.firstName}
              onChange={handleChange}
              name="firstName"
              placeholder="First Name"
              error={InputErrors.firstName}
              extraClass="mt-4"
              type="text"
            />
          </div>

          <div className="mr-2">
            <TextInput
              value={Inputs.lastName}
              onChange={handleChange}
              name="lastName"
              placeholder="Last Name"
              error={InputErrors.lastName}
              extraClass="mt-4"
              type="text"
            />
          </div>

          <div className="mr-2">
            <TextInput
              value={Inputs.middleName}
              onChange={handleChange}
              name="middleName"
              placeholder="Middle Name"
              error={InputErrors.middleName}
              extraClass="mt-4"
              type="text"
            />
          </div>

          <div className="mr-2">
            <TextInput
              value={Inputs.email}
              onChange={handleChange}
              name="email"
              placeholder="Email"
              error={InputErrors.email}
              extraClass="mt-4"
              type="email"
            />
          </div>

          <div className="mr-2">
            <TextInput
              value={Inputs.phoneNumber}
              onChange={handleChange}
              name="phoneNumber"
              placeholder="Phone Number"
              error={InputErrors.phoneNumber}
              extraClass="mt-4"
              type="text"
            />
          </div>

          <div className="mr-2">
            <TextInput
              value={Inputs.country}
              onChange={handleChange}
              name="country"
              placeholder="Country"
              error={InputErrors.country}
              extraClass="mt-4"
              type="text"
            />
          </div>

          <div className="mr-2">
            <TextInput
              value={Inputs.location}
              onChange={handleChange}
              name="location"
              placeholder="Location"
              error={InputErrors.location}
              extraClass="mt-4"
              type="text"
            />
          </div>

          <div className="mr-2">
            <TextInput
              value={Inputs.contactType}
              onChange={handleChange}
              name="contactType"
              placeholder="Contact Type"
              error={InputErrors.contactType}
              extraClass="mt-4"
              type="text"
            />
          </div>
        </div>

        <div className="flex justify-center md:text-left">
          <button
            className="mt-4 bg-[#7717D7] hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            {loading === true ? "Processing" : "Submit"}
          </button>
        </div>
      </form>

      <Modal
        modal={modal}
        message="Contact updated successfully"
        onClose={toggleModal}
      />
    </>
  );
};

export default EditContact;
