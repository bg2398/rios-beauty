import React from "react";

const Services = () => {
  return (
    

    
    <section className="services" id="services">
      {/* <h1 className="heading">premium services</h1> */}
      <div className="box-container">
        <a href="hair-nano.html" className="box">
          <img src= "src/assets/nano-main.jpg" alt="" />
          <div className="content">
            <h3>Nanoplastia</h3>
          </div>
        </a>
        <a href="color.html" className="box">
          <img src="src/assets/services-2.jpg" alt="" />
          <div className="content">
            <h3>Color</h3>
          </div>
        </a>
        <a href="extensions.html" className="box">
          <img src="src/assets/extensions-cover.png" alt="" />
          <div className="content">
            <h3>Extensions</h3>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Services;
