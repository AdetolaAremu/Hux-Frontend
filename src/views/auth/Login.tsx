import { Link } from "react-router-dom";
import React, { ChangeEvent } from "react";
import TextInput from "../../components/TextInput";
import { ILogin } from "../../types/AuthType";
import { useAppDispatch, useTypedSelector } from "../../utils/Hook";
import { validateLogin } from "./validators/AuthValidator";
import { loginUser } from "./actions/actions";
import { handleValidationErrors } from "../../utils/ValidationHelper";
import { CHECK_IF_USER_IS_LOGGED_IN } from "./actions/types";

const initialState: ILogin = {
  email: "",
  password: "",
};

const Login = () => {
  const [Inputs, setInputs] = React.useState(initialState);
  const [InputErrors, setInputErrors] = React.useState<ILogin>({} as ILogin);

  const { errors, authLoading } = useTypedSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...Inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await validateLogin.validate(Inputs, { abortEarly: false });

      dispatch(loginUser(Inputs));

      setInputs(initialState);

      dispatch({ type: CHECK_IF_USER_IS_LOGGED_IN, payload: true });

      setInputErrors({} as ILogin);
    } catch (error) {
      const validationErrors = handleValidationErrors<ILogin>(error);

      setInputErrors(validationErrors as ILogin);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {errors && (
          <div className="bg-red-500 my-3 rounded-md px-2 text-white py-2 text-xs">
            {typeof errors === "string" ? errors : errors.data.message}
          </div>
        )}

        <TextInput
          value={Inputs?.email}
          onChange={handleChange}
          name="email"
          placeholder="Email"
          error={InputErrors?.email}
          extraClass="mt-4"
          type="email"
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

        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-[#7717D7] hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            {authLoading === true ? "Processing" : "Login"}
          </button>
        </div>
      </form>
      <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
        Don't have an account?{" "}
        <Link
          className="text-[#7717D7] hover:underline hover:underline-offset-4"
          to="/auth/register"
        >
          Register
        </Link>
      </div>
    </>
  );
};

export default Login;
