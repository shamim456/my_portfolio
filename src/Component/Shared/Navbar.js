import React from "react";
import profilePic from "../../Assets/Image/Logo/1661788832286.jpg";
import gitHubIcon from "../../Assets/Image/icon/small github.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="w-64 h-screen text-white flex flex-col justify-between items-center">
      <div className="logo flex flex-col justify-between items-center mt-10">
        <img src={profilePic} alt="profile-pic" className="profile-Pic" />
        <h2 className="mt-4 font-bold text-xl">MD SHAMIM HOSSEN</h2>
      </div>
      <div className="menu h-2/5">
        <ul className="flex flex-col h-full justify-between items-center font-semibold text-lg">
          <li>Home</li>
          <li>About Me</li>
          <li>What I Do</li>
          <li>Resume</li>
          <li>Portfolio</li>
          <li>Testimonial</li>
        </ul>
      </div>
      <div className="social-icon mb-2">
        <img src={gitHubIcon} alt="github-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
