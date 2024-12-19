import React from 'react';
import '../App.css'; // Ensure styles are applied
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">MOUNTAINS</Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li>
            <li className="nav-item"><Link className="nav-link active" to="/Service">Service</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Feedback">Feedback</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center py-5 bg-dark text-white">
        <h1 className="display-4">OUR SERVICES</h1>
        <p className="lead">Tailored experiences for mountain travelers and explorers.</p>
      </div>

      {/* Services Section */}
      <div className="container my-5">
        <div className="row">
          {/* Guided Tours */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Guided Mountain Tours</h5>
                <p className="card-text">
                  Explore the majestic mountains with our experienced guides. They will ensure your journey is safe, educational, and unforgettable.
                </p>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>

          {/* Trekking Packages */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Trekking Packages</h5>
                <p className="card-text">
                  Choose from a variety of trekking packages that suit your preferences and fitness levels. From easy trails to challenging expeditions, we've got it all.
                </p>
                <button className="btn btn-primary">View Packages</button>
              </div>
            </div>
          </div>

          {/* Gear Rentals */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Gear Rentals</h5>
                <p className="card-text">
                  Rent high-quality trekking gear, including tents, hiking poles, and jackets, to make your adventure hassle-free.
                </p>
                <button className="btn btn-primary">Browse Gear</button>
              </div>
            </div>
          </div>

          {/* Travel Assistance */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Travel Assistance</h5>
                <p className="card-text">
                  Get help with travel logistics, including permits, transportation, and accommodations near popular mountain destinations.
                </p>
                <button className="btn btn-primary">Contact Us</button>
              </div>
            </div>
          </div>

          {/* Adventure Activities */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Adventure Activities</h5>
                <p className="card-text">
                  Enjoy thrilling activities such as rock climbing, paragliding, and zip-lining in the heart of the mountains.
                </p>
                <button className="btn btn-primary">Explore Activities</button>
              </div>
            </div>
          </div>

          {/* Custom Itineraries */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Custom Itineraries</h5>
                <p className="card-text">
                  Plan a personalized adventure with our custom itinerary service, tailored to your interests and schedule.
                </p>
                <button className="btn btn-primary">Start Planning</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;

