import { Link } from "react-router-dom";
// import { ILogin } from "../../types/LoginType";
import React, { ChangeEvent } from "react";
// import { useAppDispatch, useTypedSelector } from "../../utils/Hook";
// import { loginUser } from "./actions/action";

// const initialState: ILogin = {
//   email: "",
//   password: "",
// };

const EditContact = () => {
  // const [Inputs, setInputs] = React.useState(initialState);

  // const { errors, authLoading } = useTypedSelector((state) => state.auth);

  // const dispatch = useAppDispatch();

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setInputs({ ...Inputs, [e.target.name]: e.target.value });
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(loginUser(Inputs));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="">
        <div className="grid grid-cols-2">
          <div className="mr-2 mt-5">
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="text"
              placeholder="First Name"
              // onChange={handleChange}
              // value={Inputs.email}
              name="text"
            />
          </div>
          <div className="mr-2 mt-5">
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="text"
              placeholder="Middle Name"
              // onChange={handleChange}
              // value={Inputs.email}
              name="text"
            />
          </div>
          <div className="mr-2 mt-5">
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="text"
              placeholder="Last Name"
              // onChange={handleChange}
              // value={Inputs.email}
              name="text"
            />
          </div>
          <div className="mr-2 mt-5">
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="email"
              placeholder="Email Address"
              // onChange={handleChange}
              // value={Inputs.email}
              name="email"
            />
          </div>
          <div className="mr-2 mt-5">
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="text"
              placeholder="Phone Number"
              // onChange={handleChange}
              // value={Inputs.email}
              name="number"
            />
          </div>
          <div className="mr-2 mt-5">
            <select
              name="country"
              id=""
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            >
              <option value="">Select Country</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Kenya">Kenya</option>
            </select>
          </div>
          <div className="mr-2 mt-5">
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="text"
              placeholder="Location"
              // onChange={handleChange}
              // value={Inputs.email}
              name="text"
            />
          </div>
        </div>

        <div className="flex justify-center md:text-left">
          <button
            // disabled={authLoading === true}
            className="mt-4 bg-[#7717D7] hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Submit
            {/* {authLoading === true ? "Processing" : "Login"} */}
          </button>
        </div>
      </form>
    </>
  );
};

export default EditContact;
