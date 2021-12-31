

import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Resume from './components/Resume.js';
import Footer from './components/Footer.js';
import Contact from './components/Contact.js';
// import image from ''


function App() {
  return (
   <div>
     <Header></Header>
     <Home></Home>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
     
   </div>
  );
}

export default App;