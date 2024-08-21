import { Link } from "react-router-dom";
import { ArrowForward } from "./IconUtility";

export interface IBread {
  routeName: string;
  // link: string;
}

const Breadcrumb = ({ routeName }: IBread) => {
  return (
    <nav className="flex my-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            to="/user/contacts"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <ArrowForward />
            <div className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">
              {routeName}
            </div>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
