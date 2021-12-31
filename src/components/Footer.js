import React from 'react';
import gitIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import EmailIcon from '../assets/icons/email.png';

function Footer() {
  const links = [
    {
      name: 'github',
      description: 'Icon from github.com that links to external site.',
      src: gitIcon,
      url: "https://github.com/patelpr03"
    },
    {
      name: 'linkedin',
      description: 'Icon from linkedin.com that links to external site.',
      src: linkedinIcon,
      url: "https://www.linkedin.com/in/priti-patel-17b54016"
    },
    {
      name: 'Email',
      src: EmailIcon,
      url: "mailto:patelpr_03@yahoo.com"
    }
    
  ]




  return(
<div className="footer-div">
      {links.map(link => (
        <a href={link.url} target="_blank" rel="noreferrer" key={link.name}>
          <img
            src={link.src}
            alt={link.description}
            className="icon"
          >
          </img>
        </a>
      ))}
    </div>



  )
 
}

export default Footer;