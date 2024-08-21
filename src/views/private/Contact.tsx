import React from "react";
import ContactsTable from "../../components/ContactsTable";
import { Link } from "react-router-dom";
import { useAppDispatch, useTypedSelector } from "../../utils/Hook";
import { getContacts } from "./actions/actions";

const Contact = () => {
  const dispatch = useAppDispatch();

  const { getData, loading } = useTypedSelector((state) => state.private);

  React.useEffect(() => {
    dispatch(getContacts());
    console.log(getData, "data");
    console.log(loading, "loading");
  }, [dispatch]);

  return (
    <div>
      <div className="flex justify-between mt-10 mb-5">
        <div className="text-gray-600 text-sm">All Contacts</div>

        <div>
          <Link to="/user/create-contact">
            <button className="bg-[#7717D7] text-white py-2 px-6 rounded-xl">
              Create Contact
            </button>
          </Link>
        </div>
      </div>

      <ContactsTable data={getData} />
    </div>
  );
};

export default Contact;
