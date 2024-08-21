import { Link } from "react-router-dom";
import { EditSVG, EyeSVG } from "./IconUtility";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";

const ContactsTable = () => {
  const users = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "+1234567890",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      phone: "+0987654321",
    },
    {
      id: 3,
      firstName: "Sam",
      lastName: "Wilson",
      email: "sam.wilson@example.com",
      phone: "+1122334455",
    },
    {
      id: 4,
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.johnson@example.com",
      phone: "+2233445566",
    },
    {
      id: 5,
      firstName: "Bob",
      lastName: "Brown",
      email: "bob.brown@example.com",
      phone: "+3344556677",
    },
  ];

  return (
    <div className="mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-[#7717D7] text-left text-xs">
            <th className="px-6 py-3 text-white">S/N</th>
            <th className="px-6 py-3 text-white">First Name</th>
            <th className="px-6 py-3 text-white">Last Name</th>
            <th className="px-6 py-3 text-white">Email</th>
            <th className="px-6 py-3 text-white">Phone Number</th>
            <th className="px-6 py-3 text-white">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm">
          {users.map((user, index) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-gray-800">{index + 1}</td>
              <td className="px-6 py-4 text-gray-800">{user.firstName}</td>
              <td className="px-6 py-4 text-gray-800">{user.lastName}</td>
              <td className="px-6 py-4 text-gray-800">{user.email}</td>
              <td className="px-6 py-4 text-gray-800">{user.phone}</td>
              <td className="px-6 py-4 text-gray-800">
                <div className="flex">
                  <Link to={`/user/contacts/${index}`} className="mr-2">
                    <EyeSVG />
                  </Link>
                  <Link to={`/user/contacts/edit/${index}`}>
                    <EditSVG />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsTable;
