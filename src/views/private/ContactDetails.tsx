import React from "react";

const ContactDetails = () => {
  return (
    <>
      <div className="mt-6">
        <div className="bg-white h-26 w-1/3 p-5 rounded-md flex justify-between">
          <div>
            <div className="font-semibold">James Paramole</div>
            <div className="text-xs mt-3">Lagos, Nigeria</div>
          </div>
          <div className="text-xs text-yellow-600">Gold</div>
        </div>

        <div className="bg-white"></div>
      </div>

      <div className="bg-white p-5 mt-7 rounded-md grid grid-cols-3">
        <div className="mt-3">
          <div>First Name</div>
          <div>James</div>
        </div>

        <div className="mt-3">
          <div>Last Name</div>
          <div>James</div>
        </div>

        <div className="mt-3">
          <div>Middle Name</div>
          <div>James</div>
        </div>

        <div className="mt-3">
          <div>Email Address</div>
          <div>James</div>
        </div>

        <div className="mt-3">
          <div>Phone Number</div>
          <div>James</div>
        </div>

        <div className="mt-3">
          <div>Country</div>
          <div>James</div>
        </div>

        <div className="mt-3">
          <div>Location</div>
          <div>James</div>
        </div>
      </div>

      <div className="mt-3 flex justify-end">
        <button className="bg-red-700 text-white py-2 px-6 rounded-xl">
          Delete Contact
        </button>
      </div>
    </>
  );
};

export default ContactDetails;
