import { Link } from "react-router-dom";
import React from "react";
import logo from "../assets/course90logo.png";
import logo1 from "../assets/course90new.png";

const NavbarNoLogin = () => {
  return (
    <>
      <div className="nav py-5 px-10 bg-slate-300 bg-opacity-40 flex justify-between">
        <img src={logo1} alt="logo" width={200} className="" />
        <div className="nav-right flex items-center">
          <Link to="/login">
            <button className=" text-blue font-semibold px-4 border border-blue rounded-lg mr-3">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className=" bg-blue text-white px-4 font-semibold rounded-lg py-0.5 mr-4">
              Signup for free
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarNoLogin;
