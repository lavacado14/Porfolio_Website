/*
  File: AboutMe.jsx
  Student's Name: Maaz Bobat
  Student ID: 301360037
  Date: 5/31/2024

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
              <p>Hello, my name is Maaz Bobat, a 19-year-old student currently studying Artificial Intelligence - Software Engineering Technology at Centennial College. I'm born and raised in Toronto, and ever since I was a little kid, I've found computers and coding fascinating. In my journey as a student, I'm driven by a deep curiosity to explore the endless possibilities of technology and its potential to solve real-world problems.</p>
              <p>Feel free to check out my <a href="src/assets/Maaz_Bobat_resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">resume</a></p>
            </div>
            <div className="about-col">
              <img src="src\assets\aboutme_img2.png" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutMe;
