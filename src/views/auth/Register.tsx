import { Link } from "react-router-dom";
import React, { ChangeEvent } from "react";
import { IRegister } from "../../types/AuthType";
import { useAppDispatch, useTypedSelector } from "../../utils/Hook";
import { validateRegistration } from "./validators/AuthValidator";
import TextInput from "../../components/TextInput";
import { registerUser } from "./actions/actions";
import { handleValidationErrors } from "../../utils/ValidationHelper";
import Modal from "../../components/Modal";

const initialState: IRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [Inputs, setInputs] = React.useState(initialState);
  const [InputErrors, setInputErrors] = React.useState<IRegister>(
    {} as IRegister
  );
  const [modal, setModal] = React.useState(false);

  const { errors, authLoading } = useTypedSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...Inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await validateRegistration.validate(Inputs, { abortEarly: false });

      dispatch(registerUser(Inputs));

      setInputs(initialState);

      setModal(true);
      setInputErrors({} as IRegister);
    } catch (error) {
      const validationErrors = handleValidationErrors<IRegister>(error);

      setInputErrors(validationErrors as IRegister);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {errors && (
          <div className="bg-red-500 my-3 rounded-md px-2 text-white py-2 text-xs">
            {typeof errors === "string" ? errors : errors.data?.message}
          </div>
        )}

        <TextInput
          value={Inputs?.firstName}
          onChange={handleChange}
          name="firstName"
          placeholder="First name"
          error={InputErrors?.firstName}
          extraClass="mt-4"
        />

        <TextInput
          value={Inputs?.lastName}
          onChange={handleChange}
          name="lastName"
          placeholder="Last name"
          error={InputErrors?.lastName}
          extraClass="mt-4"
        />

        <TextInput
          value={Inputs?.email}
          onChange={handleChange}
          name="email"
          placeholder="Email"
          error={InputErrors?.email}
          extraClass="mt-4"
        />

        <TextInput
          value={Inputs?.password}
          onChange={handleChange}
          name="password"
          placeholder="Password"
          error={InputErrors?.password}
          extraClass="mt-4"
          type="password"
        />

        <TextInput
          value={Inputs?.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          placeholder="Confirm Password"
          error={InputErrors?.confirmPassword}
          extraClass="mt-4"
          type="password"
        />

        <div className="text-center md:text-left">
          <button
            disabled={authLoading === true}
            className="mt-4 bg-[#7717D7] hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            {authLoading === true ? "Processing" : "Register"}
          </button>
        </div>
      </form>
      <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
        I have an account?{" "}
        <Link
          className="text-[#7717D7] hover:underline hover:underline-offset-4"
          to="/auth/login"
        >
          Login
        </Link>
      </div>

      <Modal
        modal={modal}
        onClose={toggleModal}
        message="Your account have been created successfully, you may now proceed to the Login page"
      />
    </>
  );
};

export default Register;
