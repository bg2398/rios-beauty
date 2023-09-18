import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ib11s1a", // Replace this with your actual service ID
        "template_ueh3ams", // Replace this with your actual template ID
        {
          from_name: form.name,
          to_name: "Brandon",
          from_email: form.email,
          to_email: "riosbeauty20@outlook.com",
          message: form.message,
        },
        "X4oBSloqQiVJX1HhH" // Replace this with your actual user ID
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
          // Reset the button text to "Send" after a short delay
          setTimeout(() => {
            setSent(false);
          }, 2000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  useEffect(() => {
    if (sent) {
      // Reset the button text to "Send" after a short delay
      const resetSentStatus = setTimeout(() => {
        setSent(false);
      }, 2000);

      return () => clearTimeout(resetSentStatus);
    }
  }, [sent]);

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden bg-black`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='bg-grey p-6 rounded-lg'>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Input your name"
                className='bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="Your email address"
                className='bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Type in your message'
                className='bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
              />
            </label>

            <button
              type='submit'
              className={`${
                loading || sent ? "bg-blue" : "bg-rosegold"
              } py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary`}
            >
              {loading ? "Sending..." : sent ? "Sent" : "Send"}
            </button>
          </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
