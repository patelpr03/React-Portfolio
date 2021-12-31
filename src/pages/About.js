import React from 'react';
import Profile from "../assets/images/profilepicture.jpg";

function About() {
  return (
    <div className="page-div">
      <h2>About Me</h2>
      <div className="about-body">

      <img src={Profile} alt="Profile Picture"></img>
        <div className="page-body about-p">
          <h3>Full Stack Software Developer</h3>
         I have IT Professional experience in tech support system administration.
         While working in the IT field I developed a passion for coding. I pursued my passion for coding and will graduated with a Full Stack Web Development certificate
          from the University of Texas at Austin Coding Boot Camp (Jan. 2022). Utilizing HTML, CSS and JavaScript to build dynamic web applications from back-end to front-end.

         <br/>

         <br/>
          
          <br/>
          <br/>
          Want to see more? Use the navigation and footer links to get to know me better!
        </div>
      </div>
    </div>
  );
}

export default About;