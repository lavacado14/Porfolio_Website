/*
  File: myServices.jsx
  Student's Name: Maaz Bobat
  Student ID: 301360037
  Date: 5/31/2024

  Description:
  This file contains the Services component, which displays information about the services offered by me.
*/

import React from 'react';


function Services() {
  return (
    <>

      <section class="services">
        <h1>Services </h1>

        <div class="row">
          <div class="services-col">
            <img src="src\assets\mobile_dev.jpg" alt="General programming" className="service-img" />
            <h2>General programming</h2>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>C#</li>
          </div>
          <div class="services-col">
            <img src="src\assets\web_dev1.jpg" alt="General programming" className="service-img" />
            <h2>Web development</h2>
            <li>HTML/CSS</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
          </div>
          <div class="services-col">
            <img src="src\assets\programmer_dev.jpg" alt="Mobile Apps" className="service-img" />
            <h2>Mobile apps</h2>
            <li>React Native</li>
            <li>Swift</li>
            <li>Kotlin</li>
          </div>
        </div>
      </section>

    </>
  );
}

export default Services;
