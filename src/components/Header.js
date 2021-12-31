import React, {useState} from 'react';
import Navigation from './Navigation';
import About from '../pages/About.js';
import Projects from '../pages/Projects.js';
import Contact from '../pages/Contact.js';
import Resume from '../pages/Resume.js';

function Header() {
    const [currentPage, setCurrentPage] = useState("About");
  
    function renderPage() {
      switch(currentPage) {
        default: return <About />
        case "Projects":
          return <Projects/>;
        case "Contact":
          return <Contact/>;
          case "Resume":
            return <Resume/>
      }
    }
  
    return (
      <div>
      <div className="header-div">
        <h1 className="header-h1 nav-li">Priti Patel</h1>
        <Navigation
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      {renderPage(currentPage)}
      </div>
    )
  }
  
  export default Header;















//function Header() {
  //return (
     // <header>
      //<h1><a href="./index.html">Priti Patel</a></h1>
     // <nav>
         // <ul>
             // <li>
//<a href="#About-Me">About Me</a>
             // </li>
             // <li>
              //    <a href="#Work">Work</a>
             // </li>
             // <li>
             //     <a href="#Contact-Me">Contact Me</a>
            //  </li>
             // <li>
             //     <a href={resume}>Resume</a>
            //  </li>
        //  </ul>
      //</nav>
      
     // </header>
      
      
//  )
//}

//export default Header;