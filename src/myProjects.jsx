/*
  File: myProjects.jsx
  Student's Name: Maaz Bobat
  Student ID: 301360037
  Date: 5/31/2024

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
              <h1>Project 1: Maaz's Interactive Slideshow</h1>
              {/* Description of Project 1 */}
              <p>Description: Developed an interactive slideshow application. My role was to design and implement the JavaScript logic for the slideshow, enabling features such as navigating through images, playing the slideshow automatically, adding comments, and viewing images in full-screen mode.
                <br />
                <br />
                Outcome: The project resulted in a user-friendly application that allows users to enjoy and manage their favorite images efficiently.</p>
            </div>
            <div className="project-col">
              {/* Image for Project 1 */}
              <img src="src\assets\project1.png" />

            </div>
          </div>
        </section>
        <section className="project">
          <div className="row">
            <div className="project-col">
              {/* Project 2 */}
              <h1>Project 2: Interactive Bug Smasher Game</h1>
              {/* Description of Project 2 */}
              <p>Role and Outcome:
                Designed and implemented the game logic, including the bug's movement, scoring, and interval adjustments.
                Added reset buttons for speed and score.
                Introduced additional bugs after one minute of inactivity and a game-ending condition after two minutes.<br></br>
                Result: An engaging game with increasing difficulty, promoting quick reflexes and providing a dynamic, replayable experience.</p>
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
              <h1>Project 3: Image gallery using Ajax and Javascript.</h1>
              {/* Description of Project 3 */}
              <p>Description: My primary focus was on implementing AJAX functionality to enhance the image gallery. Leveraging AJAX, I efficiently fetched image data from a JSON file asynchronously, ensuring seamless loading without page refreshes. This approach not only made the gallery more responsive but also enabled dynamic display of images based on JSON data, including filenames and display durations. Additionally, I implemented a feature allowing users to update the gallery by reloading the image list from the JSON file with a single click. The integration of AJAX significantly improved the gallery's functionality, making it more user-friendly and efficient, ultimately providing a smoother browsing experience for users. </p>
            </div>
            <div className="project-col">
              {/* Image for Project 3 */}
              <img src="src\assets\project3_img.png" />

            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Projects;
