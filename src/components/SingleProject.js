import React from 'react';
import Quiz from "../assets/images/code.jpg";
import weather from "../assets/images/weather.jpg";
import scheduler from "../assets/images/works.jpg";
import firstproject from "../assets/images/wags.jpg";
import password from "../assets/images/password.jpg";
import secondproject from "../assets/images/anansi.jpg"



function SingleProject() {
  const projects = [
    {
      title: 'Code Quiz',
      image: Quiz,
      technologies:  "HTML, CSS, JavaScript, JSON",
      deployed: "https://patelpr03.github.io/Code-Quiz/",
      github: "https://github.com/patelpr03/Code-Quiz"
    },
    {
      title: 'Weather-Dashboard',
      image: weather,
      description: "weather application for the current weather and the 5 day forecast for a city.",
      technologies: "HTML CSS JavaScript Bootstrap Local Storage Third-Party API : OpenWeather API",
      deployed: "https://patelpr03.github.io/Weather-Dashboard//",
      github: "https://github.com/patelpr03/Weather-Dashboard"
    },
    {
      title: 'Work-Day-Scheduler',
      image: scheduler,
      description: "Your resource to read, discuss, and post news on all things tech.",
      technologies: "HTML,CSS,Moment.js,jQuery,and BootStrap",
      deployed: "https://patelpr03.github.io/Work-Day-Scheduler/",
      github: "https://patelpr03.github.io/Work-Day-Scheduler//"
    },
    {
      title: 'WagsnWhiskers',
      image: firstproject,
      description: "Pet adoption website is used to find cats and dogs avilable for adoption.",
      technologies: "HTML,css, Local storage, JavaScript,and jQuery",
      deployed: "https://wagsnwhiskers.github.io/wags-n-whiskers/",
      github: "https://github.com/WagsnWhiskers/wags-n-whiskers"
    },
    {
      title: 'Password Generator',
      image: password,
      description: "Generate a random password based on criteria selected.",
      technologies: "HTML, JavaScript, css",
      deployed: "https://patelpr03.github.io/Password-Generator/",
      github: "https://github.com/patelpr03/Password-Generator"
    },
    {
      title: 'Anansi',
      image: secondproject,
      description: "Employees can post their work done of different projects,record their time,comment and create timesheets.",
      technologies: "MySQL,Javascript,Node.js,dotenv, Handlebars,MYSQL 2,nodemon,and Insomnia",
      deployed: "https://anansi-inc.herokuapp.com/",
      github: "https://github.com/Sethhixon92/Anansi"
    }
  ]

  return(
    <div className="all-projects">
      {projects.map(project => (
        <div className="single-project" key={project.title}>
          <h3>{project.title}</h3>
          <div
            className="project-div"
            style={{
              backgroundImage: `url(${project.image})`
            }}
          >
            <p className="project-text project-description">{project.description}</p>
            <p className="project-text project-tech">{project.technologies}</p>
            <div className="button-inline">
              <a href={project.deployed} target="_blank" rel="noreferrer">
                <button className="project-text project-btn">Deployed</button>
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
              <button className="project-text project-btn">GitHub</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SingleProject;