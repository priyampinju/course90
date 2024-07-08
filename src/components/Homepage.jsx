import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/hero.svg";
import arrow from "../assets/Arrow 1.png";
import Navbar from "./NavbarNoLogin";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="main mt-10"></div>
      <div className="container  h-[80vh] mx-auto w-full flex">
        <div className="left w-1/2 flex flex-col items-center justify-center gap-6 h-full ">
          <div className="text font-semibold text-2xl">
            Unlock Your Learning Potential With Course90
          </div>
          <div className="subheading text-xl">
            Buy Handwritten Notes and Take Exams Anytime, Anywhere
          </div>
          <div className="calltoaction">
            <Link to="/signup">
              <button className="bg-blue px-4 py-2 text-white font-semibold text-lg rounded-lg flex items-center">
                Try Course90 for free
                <img src={arrow} alt="arrow" width={20} className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
        <div className="right w-1/2">
          <img src={hero} alt="svg" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Homepage;
