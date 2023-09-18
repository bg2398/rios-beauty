import React from "react";
import backgroundVideo from "../assets/HomepageVideo.mp4"; // Import the background video

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto HomePage">
      <video autoPlay muted loop className="w-full h-full absolute inset-0">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div
        className="w-full h-full absolute inset-0 bg-black opacity-50"
        style={{ mixBlendMode: "multiply" }}
      ></div>

      {/* Custom Button */}
      <a
        href="#contact"
        className="absolute inset-0 flex items-center justify-center"
        style={{ zIndex: 1 }} // Ensure the button is above other elements
      >
        <div className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
          <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
          <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
            <span className="relative text-white">Book Me</span>
          </span>
        </div>
      </a>
    </section>
  );
};

export default Hero;
