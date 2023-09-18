import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect"; // Import Typewriter
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Import your TikTok and Instagram logos
import tiktokLogo from "../assets/tiktoklogo.png";
import instagramLogo from "../assets/instalogo.png";

const ServiceCard = ({ index, title, img, imageSize, link }) => (
  <Tilt className="w-full mb-8 xs:mb-0 xs:w-[calc(50% - 16px)] md:w-[calc(33.33% - 16px)]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full black-gradient p-1 rounded-2xl shadow-card"
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-black rounded-2xl py-6 px-6 md:px-12 min-h-[300px] flex justify-center items-center flex-col"
        >
          <img
            src={img}
            alt="web-development"
            className={`w-${imageSize} h-${imageSize} object-contain m-4 sm:w-20 sm:h-20 socialmedia`}
          />
          <h3 className="text-white text-2xl font-bold text-center">{title}</h3>
        </div>
      </a>
    </motion.div>
  </Tilt>
);

const About = () => {
  const instagramLink = "https://instagram.com/rios_hair253?igshid=OGQ5ZDc2ODk2ZA==";
  const tiktokLink = "https://www.tiktok.com/@rios_beauty?_t=8fhTw6x32sw&_r=1";

  return (
    <div className="flex flex-wrap-reverse">
      <div className="w-full md:w-2/3 about-section">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(0.5)
                  .typeString("Get to know Me")
                  .start();
              }}
            />
          </h2>
          <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
    Welcome to my page, Here you will be able  to see some of my different type of work  such as Nanoplastia, Color, and Extensions  Please use my contact form below to send me  an email or checkout my Instagram and Tiktok pages below!
      </motion.p>
        </motion.div>
        
        {/* Rest of your content */}
        
        <div className="mt-4 flex justify-start">
          {/* Instagram ServiceCard */}
          <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            <ServiceCard
              index={1}
              title="Instagram"
              img={instagramLogo} // Use the imported Instagram logo
              imageSize={20} // Customize the image size (e.g., 30px)
              link={instagramLink} // Add the link prop for consistency
            />
          </a>

          {/* TikTok ServiceCard */}
          <a href={tiktokLink} target="_blank" rel="noopener noreferrer">
            <ServiceCard
              index={2}
              title="TikTok"
              img={tiktokLogo} // Use the imported TikTok logo
              imageSize={20} // Customize the image size (e.g., 30px)
              link={tiktokLink} // Add the link prop for consistency
            />
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/3">
        <img src="src/assets/Aboutme-selfie.jpg" alt="Your Image" className="w-full rounded-[20px]" />
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
