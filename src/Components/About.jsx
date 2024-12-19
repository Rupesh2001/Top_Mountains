/* import React from "react";
import everest from '../assets/mounteverest.jpg'

const About = () => {
  return (
    <> 
    
      <div className="aboutpop">
      <div className="aboutimg">
        <img src={everest} alt={'hdsvh'} />
      </div>
      <div class="black-box">
        <p>This is some text inside the black box.</p>
      </div>
    </div> 
   
    </>
  );
};

export default About;
 */
import React from 'react';
import '../App.css'; // Ensure styles are applied
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">MOUNTAINS</Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link active" to="/About">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Service">Service</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Feedback">Feedback</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center py-5 bg-dark text-white">
        <h1 className="display-4">ABOUT US</h1>
        <p className="lead">Discover the story behind our passion for mountains.</p>
      </div>

      {/* About Us Content */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Our Mission</h2>
        <p className="text-justify">
          Welcome to our Mountains application! We are a team of passionate adventurers, nature lovers, and explorers who believe in the beauty and grandeur of the world's tallest peaks. 
          Our mission is to provide you with comprehensive information about the top mountains in Nepal and beyond, encouraging you to explore, learn, and connect with nature.
        </p>

        <h2 className="text-center mt-5 mb-4">Why Mountains?</h2>
        <p className="text-justify">
          Mountains symbolize strength, resilience, and natural beauty. They challenge us to push our limits and inspire us to appreciate the wonders of the world. 
          Whether you're a seasoned climber or someone who simply enjoys breathtaking landscapes, mountains offer something for everyone.
        </p>

        <h2 className="text-center mt-5 mb-4">What We Offer</h2>
        <ul className="list-unstyled">
          <li>🌄 A curated list of the most famous mountains in Nepal, complete with details and images.</li>
          <li>📜 Fascinating facts and historical significance of these towering giants.</li>
          <li>🗺️ Navigation and resources for planning your next mountain adventure.</li>
          <li>🌟 A community of like-minded individuals who share a passion for exploration.</li>
        </ul>

        <h2 className="text-center mt-5 mb-4">Join Us</h2>
        <p className="text-justify">
          Together, let's celebrate the majesty of mountains and the endless adventures they bring. Whether you're here to learn, explore, or simply admire, we welcome you to be part of our journey.
        </p>

        <div className="text-center mt-4">
          <Link to="/Contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
