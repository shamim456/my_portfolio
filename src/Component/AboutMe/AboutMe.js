import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="w-full h-screen relative about-container">
      <h1 className="text-[rgba(255,255,255,0.1)] text-8xl font-extrabold absolute top-16 left-2/4 about-water-Mark">
        ABOUT ME
      </h1>
      <h1 className="text-white font-bold text-4xl absolute top-24 left-2/4 about-title">
        Know Me More
      </h1>

      <div className="info-container absolute bottom-52 left-10  grid grid-cols-3">
        <div className="proffession-container text-white col-span-2 text-justify">
          <h2 className="font-bold text-3xl mb-4">
            I'm <span className="text-green-400">Shamim Hossen</span>, a Web
            Developer
          </h2>
          <p className="text-[rgba(144,146,142)] text-lg font-semibold">
            I help you build brand for your business at an affordable price.
            Thousands of clients have procured exceptional results while working
            with our dedicated team. when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <p className="text-[rgba(144,146,142)] text-lg font-semibold mt-3">
            Delivering work within time and budget which meets client’s
            requirements is our moto. Lorem Ipsum has been the industry's
            standard dummy text ever when an unknown printer took a galley.
          </p>
        </div>

        <div className="personal-info text-white ml-8 text-lg font-semibold mt-16 text-[rgba(187,194,198)]">
          <p className="hr-line">Name: Md Shamim Hossen</p>
          <p className="hr-line">Age:28</p>
          <p className="hr-line">From: Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className="summery absolute bottom-6 left-24 w-4/5 flex justify-between">
        <div className="exprience text-center">
          <p className="text-[rgba(187,194,198)] text-6xl font-semibold mb-4">
            2+
          </p>
          <p className="text-white text-lg ">Years Experiance</p>
        </div>
        <div className="vartical"></div>
        <div className="exprience text-center">
          <p className="text-[rgba(187,194,198)] text-6xl font-semibold mb-4">
            100+
          </p>
          <p className="text-white text-lg mb-4">Projects Done</p>
        </div>
        <div className="vartical"></div>
        <div className="exprience text-center">
          <p className="text-[rgba(187,194,198)] text-6xl font-semibold mb-4">
            100+
          </p>
          <p className="text-white text-lg">Happy Clients</p>
        </div>
        <div className="vartical"></div>
        <div className="exprience text-center ">
          <p className="text-[rgba(187,194,198)] text-6xl font-semibold mb-4">
            02
          </p>
          <p className="text-white text-lg ">Get Awards</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
