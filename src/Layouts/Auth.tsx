import { Route, Routes } from "react-router-dom";
import Login from "../views/auth/Login";
import LoginArt1 from "../assets/LoginArt1.jpg";
import Logo from "../assets/Logo.png";
import Register from "../views/auth/Register";

// import Register from "../views/auth/Register";

const AuthLayout = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-16 my-2 mx-5 md:mx-0 md:my-0 overflow-y-hidden">
      <div className="w-[60%]">
        <img src={LoginArt1} alt="login side image" className="w-full h-auto" />
      </div>
      <div className="w-[30%] flex flex-col justify-center">
        <div className="flex justify-center mb-8">
          <img src={Logo} alt="Logo" />
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </section>
  );
};

export default AuthLayout;
