import { Link } from "react-router-dom";
import { EditSVG, EyeSVG } from "./IconUtility";
import { IContact } from "../types/response/PrivateResponse";

interface ContactsTableProps {
  data: IContact[];
}

const ContactsTable: React.FC<ContactsTableProps> = ({
  data = [],
}: ContactsTableProps) => {
  return (
    <div className="mx-auto bg-white shadow-md rounded-lg overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-[#7717D7] text-left text-xs text-white">
            <th className="px-6 py-3">S/N</th>
            <th className="px-6 py-3">First Name</th>
            <th className="px-6 py-3">Last Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Phone Number</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm">
          {data?.map((user, index) => (
            <tr key={user._id} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-gray-800">{index + 1}</td>
              <td className="px-6 py-4 text-gray-800">{user.firstName}</td>
              <td className="px-6 py-4 text-gray-800">{user.lastName}</td>
              <td className="px-6 py-4 text-gray-800">{user.email}</td>
              <td className="px-6 py-4 text-gray-800">{user.phoneNumber}</td>
              <td className="px-6 py-4 text-gray-800">
                <div className="flex space-x-2">
                  <Link
                    to={`/user/contacts/${user._id}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <EyeSVG />
                  </Link>
                  <Link
                    to={`/user/contacts/edit/${user._id}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
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
