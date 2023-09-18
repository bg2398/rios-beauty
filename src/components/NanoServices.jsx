import React from 'react';
import nanoservices1 from '../assets/nano-after1.jpg'; // Import your image files as needed

const Nanoservices = () => {
  return (
    <section className="Nanoservices" id="services">
      <h1 className="heading">My Nanoplastia Work</h1>
      <div className="box-container">
        <div className="box">
          <h1>Before</h1>
          <img src={nanoservices1} alt="" />
          <img src={nanoservices1} alt="" />
          <img src={nanoservices1} alt="" />
        </div>
        <div className="box">
          <h1>After</h1>
          <img src={nanoservices1} alt="" />
          <img src={nanoservices1} alt="" />
          <img src={nanoservices1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Nanoservices;
