import React from 'react';
import '../App.css'; // Ensure styles are applied
import { Link } from 'react-router-dom';

const Feedback = () => {
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
            <li className="nav-item"><Link className="nav-link" to="/Contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link active" to="/Feedback">Feedback</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center py-5 bg-dark text-white">
        <h1 className="display-4">FEEDBACK</h1>
        <p className="lead">We value your feedback! Share your experiences with us.</p>
      </div>

      {/* Feedback Section */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="text-center">Share Your Feedback</h2>
            <p className="text-center mb-4">
              Let us know how we can improve or what you loved about our services.
            </p>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="rating" className="form-label">Rating</label>
                <select className="form-select" id="rating">
                  <option value="" disabled selected>Select a rating</option>
                  <option value="5">5 - Excellent</option>
                  <option value="4">4 - Very Good</option>
                  <option value="3">3 - Good</option>
                  <option value="2">2 - Fair</option>
                  <option value="1">1 - Poor</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Feedback</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Write your feedback"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Submit Feedback</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
