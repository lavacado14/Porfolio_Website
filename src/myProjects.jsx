/*
  File: myProjects.jsx
  Student's Name: Jamil Ibrahimi
  Student ID: 301377159
  Date: 25/09/2024

  Description:
  This file contains the Projects component, which renders information about the projects. 
*/

import React from 'react';

function Projects() {
  return (
    <>

      <div>
        <section className="project">
          <div className="row">
            <div className="project-col">
              {/* Project 1 */}
              <a href="http://studentweb.cencol.ca/aibra126/Project/home.html" target="_blank" class="project-link">
                <h1>Project 1: Real Estate Agent Website</h1>
              </a>
              {/* Description of Project 1 */}
              <p>Description: Created a professional website for a real estate agent, designed to showcase property
                listings, agent profile, client testimonials, and areas served. The site emphasizes affordable and
                comprehensive housing solutions.
                <br />
                <br />
                Outcome: Delivered a user-friendly platform that effectively connects potential clients with
                real estate services, enhancing client engagement and trust.</p>
            </div>
            <div className="project-col">
              {/* Image for Project 1 */}
              <img src="src\assets\project1_img.png" />
            </div>
          </div>
        </section>

        <section className="project">
          <div className="row">
            <div className="project-col">
              {/* Project 2 */}
              <a href="http://studentweb.cencol.ca/aibra126/Assignment3_3/Assignment3_3.html" target="_blank" class="project-link">
                <h1>Project 2: Interactive Bug Smasher Game</h1>
              </a>
              {/* Description of Project 2 */}
              <p>Role and Outcome: Developed and implemented the core game mechanics, including bug movement,
                scoring system, and timing adjustments. Integrated reset functionality for both speed and
                score, introduced additional bugs after one minute of inactivity, and added a game-over
                condition after two minutes.
                <br />
                <br />
                Result: Created an engaging game with progressively challenging levels, encouraging fast
                reflexes and offering a dynamic, replayable experience.</p>
            </div>
            <div className="project-col">
              {/* Image for Project 2 */}
              <img src="src\assets\project2_img.png" />
            </div>
          </div>
        </section>

        <section className="project">
          <div className="row">
            <div className="project-col">
              {/* Project 3 */}
              <a href="http://studentweb.cencol.ca/aibra126/Assignment2_2/assignment2.html" target="_blank" class="project-link">
                <h1>Project 3: Interactive Slideshow</h1>
              </a>
              {/* Description of Project 3 */}
              <p>Description: Developed an interactive slideshow application. My role was
                to design and implement the JavaScript logic for the slideshow, enabling
                features such as navigating through images, playing the slideshow automatically,
                adding comments, and viewing images in full-screen mode.
                <br />
                <br />
                Outcome: The project delivered a seamless and intuitive experience, allowing users
                to easily view, manage, and interact with their favorite images.</p>
            </div>
            <div className="project-col">
              {/* Image for Project 3 */}
              <img src="src\assets\project3_img.png" />
            </div>
          </div>
        </section>

        <section className="project">
          <div className="row">
            <div className="project-col">
              {/* Project 4 */}
              <a href="http://studentweb.cencol.ca/aibra126/Assignment4_4/Assignment4.html" target="_blank" class="project-link">
                <h1>Project 4: Weather Checker</h1>
              </a>
              {/* Description of Project 4 */}
              <p>Description: Users can input a city name to instantly retrieve weather information,
                including temperature, weather conditions, humidity, wind speed, and sunrise/sunset
                times, all displayed in a clear and user-friendly format.</p>
            </div>
            <div className="project-col">
              {/* Image for Project 4 */}
              <img src="src\assets\project4_img.png" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Projects;