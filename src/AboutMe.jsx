/*
  File: AboutMe.jsx
  Student's Name: Jamil Ibrahimi
  Student ID: 301377159
  Date: 25/09/2024

  Description:
  This file contains the AboutMe component, which displays information me.
*/

import React from 'react';

function AboutMe() {
  return (
    <>
      <div>
        <section className="about-me">
          <div className="row">
            <div className="about-col">
              <h1>ABOUT ME</h1>
              <p>I am currently a student in the Software Engineering Technology program
                at Centennial College, where I am developing strong skills in Java, Python,
                C#, and web development. I am passionate about using technology to create
                innovative solutions that improve everyday life. I have experience working
                on various projects and I am excited to continue growing as a software developer.
                I am fluent in English, French, Persian, Urdu, and Hindi, which helps me communicate
                effectively in diverse environments.</p>
              <p>Don’t hesitate to take a look at my <a href="src/assets/Ibrahimi_Jamil_Resume.pdf"
                target="_blank" rel="noopener noreferrer" className="resume-button">Resume</a></p>
            </div>
            <div className="about-col">
              <img src="src/assets/aboutme_img2.png" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutMe;