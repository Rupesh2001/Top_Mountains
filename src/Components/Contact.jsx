import React from 'react';
import '../App.css'; // Ensure styles are applied
import { Link } from 'react-router-dom';

// Importing a placeholder image of mountains
//import mountainsImage from '../assets/mountains.jpg';

const ContactUs = () => {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">MOUNTAINS</Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Service">Service</Link></li>
            <li className="nav-item"><Link className="nav-link active" to="/Contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Feedback">Feedback</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center py-5 bg-dark text-white">
        <h1 className="display-4">CONTACT US</h1>
        <p className="lead">We'd love to hear from you! Reach out for any queries or suggestions.</p>
      </div>

      {/* Contact Section */}
      <div className="container my-5">
        <div className="row">
          {/* Contact Form */}
          <div className="col-md-6">
            <h2>Contact Form</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Write your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>

          {/* Mountain Image 
          <div className="col-md-6 text-center">
            <img src={mountainsImage} alt="Mountains" className="img-fluid rounded shadow-sm" />
          </div>*/}
        </div>
      </div>

      {/* Terminology Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Mountain Terminology</h2>
        <p>
          Understanding mountain-related terminology can make your adventure more enriching. Here are some common terms:
        </p>
        <ul className="list-unstyled">
          <li>🗻 <strong>Summit</strong>: The highest point of a mountain.</li>
          <li>🏔 <strong>Base Camp</strong>: A temporary camp at the base of a mountain, used for preparation.</li>
          <li>🧗‍♂️ <strong>Climbing Route</strong>: The path taken to ascend a mountain.</li>
          <li>❄️ <strong>Glacier</strong>: A large, slow-moving mass of ice found in mountainous regions.</li>
          <li>🌲 <strong>Timberline</strong>: The altitude above which trees cannot grow.</li>
          <li>⚡ <strong>Crevasse</strong>: A deep crack or fissure in a glacier.</li>
        </ul>
      </div>
    </>
  );
};

export default ContactUs;
