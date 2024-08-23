import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "../views/public/HomePage";
import Logo from "../assets/Logo.png";
import { useEffect } from "react";

const PublicLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("Authenticated"); // if user is authenticated, redirect them to the dashboard

    if (isAuthenticated === "true") {
      navigate("/user/home");
    } else {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div className="overflow-hidden">
      <div className="flex justify-between pt-3 px-10">
        <div>
          <Link to="/" className="hover:text-[#7717D7]">
            <img src={Logo} alt="home" />
          </Link>
        </div>
        <div className="pt-4">
          <Link to="/auth/login" className="hover:text-[#7717D7]">
            Login
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <div className="flex justify-between py-3 mt-16 px-10">
        <div>
          <img src={Logo} alt="" />
        </div>

        <div className="mt-2">
          <Link to="/auth/login" className="hover:text-[#7717D7]">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PublicLayout;
