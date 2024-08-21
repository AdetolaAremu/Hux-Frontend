import { Route, Routes } from "react-router-dom";
import HomePage from "../views/public/HomePage";
import Logo from "../assets/Logo.png";

const PublicLayout = () => {
  return (
    <div>
      <div className="flex justify-between pt-3 px-10">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="pt-4">About</div>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <div className="flex justify-between pt-3 mt-16 px-10">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="pt-4">2024</div>
      </div>
    </div>
  );
};

export default PublicLayout;
